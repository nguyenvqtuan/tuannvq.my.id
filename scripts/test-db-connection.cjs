#!/usr/bin/env node

/**
 * Database Connection Test Script (CommonJS)
 * 
 * This script tests the connection to your PostgreSQL database
 * (either local or Supabase) and displays connection information.
 * 
 * Usage:
 *   node scripts/test-db-connection.cjs
 *   npm run test:db
 */

const { Pool } = require('pg');
require('dotenv').config();

// Database configuration
function getDatabaseConfig() {
  // Check if we have a direct Supabase connection URL
  if (process.env.POSTGRES_URL) {
    return {
      connectionString: process.env.POSTGRES_URL,
      ssl: {
        rejectUnauthorized: false
      },
      max: 20,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
    };
  }

  // Fallback to individual environment variables
  if (process.env.POSTGRES_HOST) {
    return {
      user: process.env.POSTGRES_USER || 'postgres',
      host: process.env.POSTGRES_HOST,
      database: process.env.POSTGRES_DATABASE || 'postgres',
      password: process.env.POSTGRES_PASSWORD || '',
      port: parseInt(process.env.POSTGRES_PORT || '5432'),
      ssl: process.env.NODE_ENV === 'production' || process.env.POSTGRES_URL ? 
        { rejectUnauthorized: false } : false,
      max: 20,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
    };
  }

  // Legacy configuration
  return {
    user: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'tuannvq_portfolio',
    password: process.env.DB_PASSWORD || '',
    port: parseInt(process.env.DB_PORT || '5432'),
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
  };
}

async function testDatabaseConnection() {
  console.log('🔍 Testing Database Connection...\n');
  
  let pool;
  
  try {
    // Create connection pool
    const config = getDatabaseConfig();
    pool = new Pool(config);
    
    // Test basic connection
    console.log('📡 Testing basic connection...');
    const client = await pool.connect();
    
    try {
      const result = await client.query('SELECT NOW() as current_time, version() as db_version');
      console.log('✅ Database connection successful!\n');
      
      // Test a simple query
      console.log('🔍 Testing sample query...');
      console.log('📊 Database Information:');
      console.log(`   Current Time: ${result.rows[0].current_time}`);
      console.log(`   Database: ${result.rows[0].db_version.split(' ')[0]} ${result.rows[0].db_version.split(' ')[1]}`);
      
      // Test table existence
      console.log('\n🔍 Checking table structure...');
      const tablesResult = await client.query(`
        SELECT table_name 
        FROM information_schema.tables 
        WHERE table_schema = 'public' 
        ORDER BY table_name
      `);
      
      if (tablesResult.rows.length > 0) {
        console.log('📋 Available tables:');
        tablesResult.rows.forEach(row => {
          console.log(`   - ${row.table_name}`);
        });
      } else {
        console.log('⚠️  No tables found. You may need to run the schema setup.');
      }
      
      // Test sample data
      console.log('\n🔍 Checking sample data...');
      try {
        const messagesCount = await client.query('SELECT COUNT(*) as count FROM messages');
        const projectsCount = await client.query('SELECT COUNT(*) as count FROM projects');
        const achievementsCount = await client.query('SELECT COUNT(*) as count FROM achievements');
        
        console.log('📊 Data counts:');
        console.log(`   Messages: ${messagesCount.rows[0].count}`);
        console.log(`   Projects: ${projectsCount.rows[0].count}`);
        console.log(`   Achievements: ${achievementsCount.rows[0].count}`);
      } catch (error) {
        console.log('⚠️  Some tables may not exist yet. Run the schema setup first.');
      }
      
    } finally {
      client.release();
    }
    
  } catch (error) {
    console.error('❌ Error testing database connection:', error.message);
    
    console.log('\n🔧 Troubleshooting tips:');
    console.log('   1. Check your .env file configuration');
    console.log('   2. Verify database credentials');
    console.log('   3. Ensure database is running');
    console.log('   4. Check network connectivity');
    console.log('   5. Verify SSL settings for Supabase');
    
    process.exit(1);
  } finally {
    if (pool) {
      await pool.end();
      console.log('\n🔌 Database connection closed.');
    }
  }
}

// Environment information
console.log('🌍 Environment Information:');
console.log(`   NODE_ENV: ${process.env.NODE_ENV || 'not set'}`);
console.log(`   Database Host: ${process.env.POSTGRES_HOST || process.env.DB_HOST || 'not set'}`);
console.log(`   Database Name: ${process.env.POSTGRES_DATABASE || process.env.DB_NAME || 'not set'}`);
console.log(`   Using Supabase: ${process.env.POSTGRES_URL ? 'Yes' : 'No'}`);
console.log('');

// Run the test
testDatabaseConnection()
  .then(() => {
    console.log('\n🎉 Database connection test completed successfully!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n💥 Database connection test failed:', error);
    process.exit(1);
  }); 