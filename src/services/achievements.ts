import { BaseService } from './base';
import type { Database } from '../common/types/database';

type Achievement = Database['public']['Tables']['achievements']['Row'];
type InsertAchievement = Database['public']['Tables']['achievements']['Insert'];
type UpdateAchievement = Database['public']['Tables']['achievements']['Update'];

interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

interface AchievementFilters {
  isShow?: boolean;
  category?: string;
  organization?: string;
  page?: number;
  limit?: number;
}

export class AchievementsService extends BaseService {
  constructor() {
    super('/api/achievements');
  }

  // Get all achievements with pagination and filters
  async getAchievements(
    filters: AchievementFilters = {}
  ): Promise<PaginatedResponse<Achievement>> {
    const params = new URLSearchParams();

    if (filters.isShow !== undefined) {
      params.append('isShow', filters.isShow.toString());
    }

    if (filters.category) {
      params.append('category', filters.category);
    }

    if (filters.organization) {
      params.append('organization', filters.organization);
    }

    if (filters.page) {
      params.append('page', filters.page.toString());
    }

    if (filters.limit) {
      params.append('limit', filters.limit.toString());
    }

    const queryString = params.toString();
    const url = queryString ? `?${queryString}` : '';

    return this.get<PaginatedResponse<Achievement>>(url);
  }

  // Get achievement by ID
  async getAchievementById(id: number): Promise<Achievement> {
    return this.get<Achievement>(`/${id}`);
  }

  // Get achievement by slug
  async getAchievementBySlug(slug: string): Promise<Achievement> {
    return this.get<Achievement>(`/slug/${slug}`);
  }

  // Get achievement by credential ID
  async getAchievementByCredentialId(
    credentialId: string
  ): Promise<Achievement> {
    return this.get<Achievement>(`/credential/${credentialId}`);
  }

  // Create a new achievement
  async createAchievement(
    achievement: InsertAchievement
  ): Promise<Achievement> {
    return this.post<Achievement>('', achievement);
  }

  // Update an achievement
  async updateAchievement(
    id: number,
    achievement: UpdateAchievement
  ): Promise<Achievement> {
    return this.put<Achievement>(`/${id}`, achievement);
  }

  // Delete an achievement
  async deleteAchievement(id: number): Promise<void> {
    return this.delete<void>(`/${id}`);
  }

  // Toggle achievement visibility
  async toggleAchievementVisibility(
    id: number,
    isShow: boolean
  ): Promise<Achievement> {
    return this.patch<Achievement>(`/${id}`, { is_show: isShow });
  }

  // Get achievements by category
  async getAchievementsByCategory(
    category: string,
    limit?: number
  ): Promise<Achievement[]> {
    const params = new URLSearchParams({ category });
    if (limit) {
      params.append('limit', limit.toString());
    }

    return this.get<Achievement[]>(`/category?${params.toString()}`);
  }

  // Get achievements by organization
  async getAchievementsByOrganization(
    organization: string,
    limit?: number
  ): Promise<Achievement[]> {
    const params = new URLSearchParams({ organization });
    if (limit) {
      params.append('limit', limit.toString());
    }

    return this.get<Achievement[]>(`/organization?${params.toString()}`);
  }

  // Search achievements
  async searchAchievements(
    query: string,
    limit?: number
  ): Promise<Achievement[]> {
    const params = new URLSearchParams({ q: query });
    if (limit) {
      params.append('limit', limit.toString());
    }

    return this.get<Achievement[]>(`/search?${params.toString()}`);
  }

  // Get achievement statistics
  async getAchievementStats(): Promise<{
    total: number;
    public: number;
    private: number;
    byCategory: Record<string, number>;
    byOrganization: Record<string, number>;
    recentCount: number;
  }> {
    return this.get<{
      total: number;
      public: number;
      private: number;
      byCategory: Record<string, number>;
      byOrganization: Record<string, number>;
      recentCount: number;
    }>('/stats');
  }

  // Get all available categories
  async getCategories(): Promise<string[]> {
    return this.get<string[]>('/categories');
  }

  // Get all available organizations
  async getOrganizations(): Promise<string[]> {
    return this.get<string[]>('/organizations');
  }

  // Get recent achievements
  async getRecentAchievements(limit: number = 5): Promise<Achievement[]> {
    const params = new URLSearchParams({ limit: limit.toString() });
    return this.get<Achievement[]>(`/recent?${params.toString()}`);
  }

  // Get achievements by date range
  async getAchievementsByDateRange(
    startDate: string,
    endDate: string,
    limit?: number
  ): Promise<Achievement[]> {
    const params = new URLSearchParams({
      startDate,
      endDate,
    });

    if (limit) {
      params.append('limit', limit.toString());
    }

    return this.get<Achievement[]>(`/date-range?${params.toString()}`);
  }

  // Validate credential URL
  async validateCredentialUrl(
    url: string
  ): Promise<{ isValid: boolean; message?: string }> {
    return this.post<{ isValid: boolean; message?: string }>(
      '/validate-credential',
      { url }
    );
  }
}

// Export singleton instance
export const achievementsService = new AchievementsService();
export default achievementsService;
