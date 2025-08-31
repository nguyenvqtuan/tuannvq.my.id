#!/usr/bin/env node

/**
 * Supabase Database Setup Script (CommonJS)
 * 
 * This script sets up your Supabase database with the required schema
 * and sample data for the portfolio project.
 * 
 * Usage:
 *   node scripts/setup-supabase.cjs
 *   npm run setup:supabase
 */

const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');
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

async function setupSupabaseDatabase() {
  console.log('🚀 Setting up Supabase Database...\n');
  
  let pool;
  
  try {
    // Create connection pool
    const config = getDatabaseConfig();
    pool = new Pool(config);
    
    // Test connection first
    console.log('📡 Testing database connection...');
    const client = await pool.connect();
    
    try {
      // Test basic connection
      await client.query('SELECT NOW()');
      console.log('✅ Database connection successful!\n');
      
      // Read schema file
      console.log('📖 Reading database schema...');
      const schemaPath = path.join(process.cwd(), 'database', 'schema.sql');
      const schema = fs.readFileSync(schemaPath, 'utf8');
      
      // Execute schema
      console.log('🔨 Creating database tables...');
      await client.query(schema);
      console.log('✅ Database tables created successfully!\n');
      
      // Read sample data file
      console.log('📖 Reading sample data...');
      const sampleDataPath = path.join(process.cwd(), 'database', 'sample_data.sql');
      const sampleData = fs.readFileSync(sampleDataPath, 'utf8');
      
      // Execute sample data
      console.log('📊 Inserting sample data...');
      await client.query(sampleData);
      console.log('✅ Sample data inserted successfully!\n');
      
      // Verify setup
      console.log('🔍 Verifying database setup...');
      
      const tablesResult = await client.query(`
        SELECT table_name 
        FROM information_schema.tables 
        WHERE table_schema = 'public' 
        ORDER BY table_name
      `);
      
      console.log('📋 Available tables:');
      tablesResult.rows.forEach(row => {
        console.log(`   - ${row.table_name}`);
      });
      
      // Check data counts
      const messagesCount = await client.query('SELECT COUNT(*) as count FROM messages');
      const projectsCount = await client.query('SELECT COUNT(*) as count FROM projects');
      const achievementsCount = await client.query('SELECT COUNT(*) as count FROM achievements');
      
      console.log('\n📊 Data counts:');
      console.log(`   Messages: ${messagesCount.rows[0].count}`);
      console.log(`   Projects: ${projectsCount.rows[0].count}`);
      console.log(`   Achievements: ${achievementsCount.rows[0].count}`);
      
    } finally {
      client.release();
    }
    
    console.log('\n🎉 Supabase database setup completed successfully!');
    console.log('\n📱 Next steps:');
    console.log('   1. Start your development server: npm run dev');
    console.log('   2. Test API endpoints:');
    console.log('      - GET /api/messages/public');
    console.log('      - GET /api/projects/featured');
    console.log('      - GET /api/achievements');
    console.log('   3. Check the console for connection messages');
    
  } catch (error) {
    console.error('❌ Error setting up database:', error.message);
    
    if (error.message.includes('already exists')) {
      console.log('\n⚠️  Some tables already exist. This is normal if you\'ve run the setup before.');
      console.log('   You can safely ignore this warning.');
    } else {
      console.log('\n🔧 Troubleshooting tips:');
      console.log('   1. Check your .env file configuration');
      console.log('   2. Verify database credentials');
      console.log('   3. Ensure you have write permissions');
      console.log('   4. Check if tables already exist');
    }
    
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

// Run the setup
setupSupabaseDatabase()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n💥 Database setup failed:', error);
    process.exit(1);
  }); 