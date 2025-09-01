import { BaseService } from './base';
import type { Database } from '@/src/common/types/database';

type Project = Database['public']['Tables']['projects']['Row'];
type InsertProject = Database['public']['Tables']['projects']['Insert'];
type UpdateProject = Database['public']['Tables']['projects']['Update'];

interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

interface ProjectFilters {
  isShow?: boolean;
  isFeatured?: boolean;
  stack?: string;
  page?: number;
  limit?: number;
}

export class ProjectsService extends BaseService {
  constructor() {
    super('/api/projects');
  }

  // Get all projects with pagination and filters
  async getProjects(
    filters: ProjectFilters = {}
  ): Promise<PaginatedResponse<Project>> {
    const params = new URLSearchParams();

    if (filters.isShow !== undefined) {
      params.append('isShow', filters.isShow.toString());
    }

    if (filters.isFeatured !== undefined) {
      params.append('isFeatured', filters.isFeatured.toString());
    }

    if (filters.stack) {
      params.append('stack', filters.stack);
    }

    if (filters.page) {
      params.append('page', filters.page.toString());
    }

    if (filters.limit) {
      params.append('limit', filters.limit.toString());
    }

    const queryString = params.toString();
    const url = queryString ? `?${queryString}` : '';

    return this.get<PaginatedResponse<Project>>(url);
  }

  // Get featured projects
  async getFeaturedProjects(limit?: number): Promise<Project[]> {
    const params = new URLSearchParams();
    if (limit) {
      params.append('limit', limit.toString());
    }

    const queryString = params.toString();
    const url = `/featured${queryString ? `?${queryString}` : ''}`;

    return this.get<Project[]>(url);
  }

  // Get project by ID
  async getProjectById(id: number): Promise<Project> {
    return this.get<Project>(`/${id}`);
  }

  // Get project by slug
  async getProjectBySlug(slug: string): Promise<Project> {
    return this.get<Project>(`/slug/${slug}`);
  }

  // Create a new project
  async createProject(project: InsertProject): Promise<Project> {
    return this.post<Project>('', project);
  }

  // Update a project
  async updateProject(id: number, project: UpdateProject): Promise<Project> {
    return this.put<Project>(`/${id}`, project);
  }

  // Delete a project
  async deleteProject(id: number): Promise<void> {
    return this.delete<void>(`/${id}`);
  }

  // Toggle project visibility
  async toggleProjectVisibility(id: number, isShow: boolean): Promise<Project> {
    return this.patch<Project>(`/${id}`, { is_show: isShow });
  }

  // Toggle featured status
  async toggleFeaturedStatus(
    id: number,
    isFeatured: boolean
  ): Promise<Project> {
    return this.patch<Project>(`/${id}`, { is_featured: isFeatured });
  }

  // Get projects by technology stack
  async getProjectsByStack(stack: string, limit?: number): Promise<Project[]> {
    const params = new URLSearchParams({ stack });
    if (limit) {
      params.append('limit', limit.toString());
    }

    return this.get<Project[]>(`/stack?${params.toString()}`);
  }

  // Search projects
  async searchProjects(query: string, limit?: number): Promise<Project[]> {
    const params = new URLSearchParams({ q: query });
    if (limit) {
      params.append('limit', limit.toString());
    }

    return this.get<Project[]>(`/search?${params.toString()}`);
  }

  // Get project statistics
  async getProjectStats(): Promise<{
    total: number;
    public: number;
    private: number;
    featured: number;
    byStack: Record<string, number>;
  }> {
    return this.get<{
      total: number;
      public: number;
      private: number;
      featured: number;
      byStack: Record<string, number>;
    }>('/stats');
  }

  // Get all available technology stacks
  async getTechnologyStacks(): Promise<string[]> {
    return this.get<string[]>('/stacks');
  }

  // Get projects by category (based on stacks)
  async getProjectsByCategory(
    category: string,
    limit?: number
  ): Promise<Project[]> {
    const params = new URLSearchParams({ category });
    if (limit) {
      params.append('limit', limit.toString());
    }

    return this.get<Project[]>(`/category?${params.toString()}`);
  }
}

// Export singleton instance
export const projectsService = new ProjectsService();
export default projectsService;
