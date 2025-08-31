// Message types for contact form submissions
export interface Message {
  id: number;
  name: string;
  email: string;
  image?: string;
  message: string;
  reply_to?: string;
  is_show: boolean;
  created_at: Date;
  is_reply: boolean;
}

// Project types for portfolio projects
export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  link_demo?: string;
  link_github?: string;
  stacks: string[];
  content?: string;
  is_show: boolean;
  is_featured: boolean;
}

// Achievement types for certifications and achievements
export interface Achievement {
  id: number;
  credential_id?: string;
  slug?: string;
  name: string;
  issuing_organization: string;
  category?: string;
  url_credential: string;
  issue_date: string;
  expiration_date?: string;
  image: string;
  is_show: boolean;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    total_pages: number;
  };
} 