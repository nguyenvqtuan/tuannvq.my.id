# Tuan Nguyen - Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🏗️ Project Structure

The project follows a clean separation of concerns:

```
src/
├── api/                    # API layer - HTTP requests and API routes
│   ├── client.ts          # Base API client for HTTP requests
│   ├── messages.ts        # Message API functions
│   ├── projects.ts        # Project API functions
│   ├── achievements.ts    # Achievement API functions
│   └── index.ts          # API exports
├── app/                   # Next.js App Router
│   ├── api/              # API route handlers
│   │   ├── messages/     # Message API endpoints
│   │   ├── projects/     # Project API endpoints
│   │   └── achievements/ # Achievement API endpoints
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/            # Reusable UI components
│   ├── ProjectCard.tsx   # Project display component
│   ├── AchievementCard.tsx # Achievement display component
│   ├── ContactForm.tsx   # Contact form component
│   └── index.ts          # Component exports
├── hooks/                 # Custom React hooks
│   ├── useProjects.ts    # Project data management hook
│   ├── useAchievements.ts # Achievement data management hook
│   └── index.ts          # Hook exports
├── services/              # Database service layer
│   ├── BaseService.ts    # Base service class
│   ├── MessageService.ts # Message database operations
│   ├── ProjectService.ts # Project database operations
│   ├── AchievementService.ts # Achievement database operations
│   └── index.ts          # Service exports
├── types/                 # TypeScript type definitions
│   └── index.ts          # All type interfaces
└── utils/                 # Utility functions
    └── database.ts       # Database connection and configuration
```

## 🎯 Architecture Overview

### **Services Layer** (`/src/services`)
- **Purpose**: Direct database operations using PostgreSQL
- **Responsibility**: CRUD operations, data validation, business logic
- **No HTTP concerns**: Pure database interaction

### **API Layer** (`/src/api`)
- **Purpose**: HTTP request handling and API function definitions
- **Responsibility**: HTTP methods, request/response formatting, error handling
- **No database concerns**: Pure HTTP communication

### **App Layer** (`/src/app`)
- **Purpose**: Next.js API route handlers
- **Responsibility**: Route definitions, request processing, service calls
- **Bridge**: Connects HTTP requests to service layer

### **Components Layer** (`/src/components`)
- **Purpose**: Reusable UI components
- **Responsibility**: HTML structure, CSS styling, user interaction
- **No data fetching**: Receives data via props

### **Hooks Layer** (`/src/hooks`)
- **Purpose**: Custom React hooks for data management
- **Responsibility**: State management, API calls, data synchronization
- **No UI concerns**: Pure logic and data handling

## 🚀 Key Features

### **Database Integration**
- PostgreSQL with connection pooling
- Comprehensive CRUD operations
- Optimized queries with proper indexing
- Transaction support and error handling

### **API Design**
- RESTful API endpoints
- Consistent response formatting
- Query parameter support
- Error handling and validation

### **Component Architecture**
- Reusable, composable components
- TypeScript interfaces for props
- Responsive design with Tailwind CSS
- Accessibility considerations

### **Data Management**
- Custom hooks for state management
- Optimistic updates
- Error handling and loading states
- Data synchronization

## 📊 Database Schema

### **Messages Table**
- Contact form submissions
- Admin replies
- Visibility controls
- Timestamp tracking

### **Projects Table**
- Portfolio projects
- Technology stacks
- Featured project support
- Demo and GitHub links

### **Achievements Table**
- Professional certifications
- Organization details
- Category classification
- Credential verification

## 🔧 Setup Instructions

### 1. **Install Dependencies**
```bash
npm install
```

### 2. **Database Setup**

#### **Option A: Supabase (Recommended)**
```bash
# 1. Copy environment template
cp env.example .env

# 2. Edit .env with your Supabase credentials
# 3. Run setup script
npm run setup:supabase

# 4. Test connection
npm run test:db
```

#### **Option B: Local PostgreSQL**
```bash
# Install PostgreSQL
# Create database: tuannvq_portfolio

# Run schema
psql -U postgres -d tuannvq_portfolio -f database/schema.sql

# Add sample data (optional)
psql -U postgres -d tuannvq_portfolio -f database/sample_data.sql
```

**📚 See [SUPABASE_SETUP.md](./SUPABASE_SETUP.md) for detailed Supabase setup instructions.**

### 3. **Environment Configuration**

#### **For Supabase (Recommended)**
```bash
# Copy environment template
cp env.example .env

# Edit .env with your Supabase credentials
POSTGRES_URL=postgresql://postgres:YOUR_PASSWORD@db.YOUR_PROJECT_REF.supabase.co:5432/postgres
POSTGRES_USER=postgres
POSTGRES_HOST=db.YOUR_PROJECT_REF.supabase.co
POSTGRES_PASSWORD=YOUR_PASSWORD
POSTGRES_DATABASE=postgres
POSTGRES_PORT=5432
NODE_ENV=development
```

#### **For Local PostgreSQL**
```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=tuannvq_portfolio
DB_USER=postgres
DB_PASSWORD=your_password_here
NODE_ENV=development
```

### 4. **Development Server**
```bash
npm run dev
```

### 5. **Build Production**
```bash
npm run build
npm start
```

## 📱 Usage Examples

### **Using API Functions**
```typescript
import { projectApi, achievementApi } from '@/api';

// Fetch featured projects
const projects = await projectApi.getFeatured(6);

// Get achievements by category
const cloudCerts = await achievementApi.getByCategory('Cloud Computing');
```

### **Using Custom Hooks**
```typescript
import { useProjects, useAchievements } from '@/hooks';

function MyComponent() {
  const { projects, loading, error, fetchFeaturedProjects } = useProjects();
  const { achievements, loading: achievementsLoading } = useAchievements();

  useEffect(() => {
    fetchFeaturedProjects(6);
  }, []);

  if (loading) return <div>Loading...</div>;
  
  return (
    <div>
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
```

### **Using Components**
```typescript
import { ProjectCard, AchievementCard, ContactForm } from '@/components';

function PortfolioPage() {
  return (
    <div>
      <h1>My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      <h1>My Achievements</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map(achievement => (
          <AchievementCard key={achievement.id} achievement={achievement} />
        ))}
      </div>
      
      <ContactForm />
    </div>
  );
}
```

## 🔄 Data Flow

```
User Interaction → Component → Hook → API Function → API Route → Service → Database
     ↑                                                                        ↓
     ← Component ← Hook ← API Function ← API Route ← Service ← Database ←────┘
```

## 🛡️ Security Features

- **SQL Injection Prevention**: Parameterized queries
- **Input Validation**: Type checking and sanitization
- **Environment Variables**: Secure configuration management
- **Error Handling**: Graceful error responses without data leakage

## 📈 Performance Optimization

- **Connection Pooling**: Efficient database connections
- **Query Optimization**: Proper indexing and query structure
- **Component Optimization**: React.memo and useMemo where appropriate
- **Lazy Loading**: Dynamic imports for code splitting

## 🧪 Testing

### **Component Testing**
```bash
npm run test:components
```

### **API Testing**
```bash
npm run test:api
```

### **Integration Testing**
```bash
npm run test:integration
```

## 🚀 Deployment

### **Vercel (Recommended)**
```bash
npm run build
vercel --prod
```

### **Docker**
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## 📚 API Documentation

### **Messages Endpoints**
- `GET /api/messages` - Get all messages with pagination
- `POST /api/messages` - Create new message
- `GET /api/messages/public` - Get public messages

### **Projects Endpoints**
- `GET /api/projects` - Get all projects with pagination
- `POST /api/projects` - Create new project
- `GET /api/projects/featured` - Get featured projects

### **Achievements Endpoints**
- `GET /api/achievements` - Get all achievements with pagination
- `POST /api/achievements` - Create new achievement

## 🔮 Future Enhancements

- **External API Integration**: LeetCode, GitHub, MonkeyType
- **Real-time Updates**: WebSocket support
- **Advanced Analytics**: User behavior tracking
- **Admin Dashboard**: Content management interface
- **Multi-language Support**: Internationalization
- **PWA Features**: Offline support and app-like experience

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

- **Portfolio**: [tuannvq.my.id](https://tuannvq.my.id)
- **Email**: [your-email@example.com]
- **GitHub**: [@tuannvq](https://github.com/tuannvq)

---

This portfolio showcases a modern, scalable architecture with clean separation of concerns, making it easy to maintain, extend, and deploy.
