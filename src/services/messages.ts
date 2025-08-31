import { BaseService } from './base';
import type { Database } from '../common/types/database';

type Message = Database['public']['Tables']['messages']['Row'];
type InsertMessage = Database['public']['Tables']['messages']['Insert'];
type UpdateMessage = Database['public']['Tables']['messages']['Update'];

interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

interface MessageFilters {
  isShow?: boolean;
  isReply?: boolean;
  page?: number;
  limit?: number;
}

export class MessagesService extends BaseService {
  constructor() {
    super('/api/messages');
  }

  // Get all messages with pagination and filters
  async getMessages(
    filters: MessageFilters = {}
  ): Promise<PaginatedResponse<Message>> {
    const params = new URLSearchParams();

    if (filters.isShow !== undefined) {
      params.append('isShow', filters.isShow.toString());
    }

    if (filters.isReply !== undefined) {
      params.append('isReply', filters.isReply.toString());
    }

    if (filters.page) {
      params.append('page', filters.page.toString());
    }

    if (filters.limit) {
      params.append('limit', filters.limit.toString());
    }

    const queryString = params.toString();
    const url = queryString ? `?${queryString}` : '';

    return this.get<PaginatedResponse<Message>>(url);
  }

  // Get public messages
  async getPublicMessages(limit?: number): Promise<Message[]> {
    const params = new URLSearchParams();
    if (limit) {
      params.append('limit', limit.toString());
    }

    const queryString = params.toString();
    const url = `/public${queryString ? `?${queryString}` : ''}`;

    return this.get<Message[]>(url);
  }

  // Get message by ID
  async getMessageById(id: number): Promise<Message> {
    return this.get<Message>(`/${id}`);
  }

  // Create a new message
  async createMessage(message: InsertMessage): Promise<Message> {
    return this.post<Message>('', message);
  }

  // Update a message
  async updateMessage(id: number, message: UpdateMessage): Promise<Message> {
    return this.put<Message>(`/${id}`, message);
  }

  // Delete a message
  async deleteMessage(id: number): Promise<void> {
    return this.delete<void>(`/${id}`);
  }

  // Toggle message visibility
  async toggleMessageVisibility(id: number, isShow: boolean): Promise<Message> {
    return this.patch<Message>(`/${id}`, { is_show: isShow });
  }

  // Mark message as replied
  async markAsReplied(id: number, isReply: boolean): Promise<Message> {
    return this.patch<Message>(`/${id}`, { is_reply: isReply });
  }

  // Search messages
  async searchMessages(query: string, limit?: number): Promise<Message[]> {
    const params = new URLSearchParams({ q: query });
    if (limit) {
      params.append('limit', limit.toString());
    }

    return this.get<Message[]>(`/search?${params.toString()}`);
  }

  // Get message statistics
  async getMessageStats(): Promise<{
    total: number;
    public: number;
    private: number;
    replied: number;
    pending: number;
  }> {
    return this.get<{
      total: number;
      public: number;
      private: number;
      replied: number;
      pending: number;
    }>('/stats');
  }
}

// Export singleton instance
export const messagesService = new MessagesService();
export default messagesService;
