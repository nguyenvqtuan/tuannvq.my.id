export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      messages: {
        Row: {
          id: number;
          name: string | null;
          email: string | null;
          image: string | null;
          message: string | null;
          reply_to: string | null;
          is_show: boolean | null;
          created_at: string;
          is_reply: boolean | null;
        };
        Insert: {
          id?: number;
          name?: string | null;
          email?: string | null;
          image?: string | null;
          message?: string | null;
          reply_to?: string | null;
          is_show?: boolean | null;
          created_at?: string;
          is_reply?: boolean | null;
        };
        Update: {
          id?: number;
          name?: string | null;
          email?: string | null;
          image?: string | null;
          message?: string | null;
          reply_to?: string | null;
          is_show?: boolean | null;
          created_at?: string;
          is_reply?: boolean | null;
        };
      };
      projects: {
        Row: {
          id: number;
          title: string;
          slug: string;
          description: string;
          image: string;
          link_demo: string | null;
          link_github: string | null;
          stacks: string[];
          content: string | null;
          is_show: boolean;
          is_featured: boolean;
        };
        Insert: {
          id?: number;
          title: string;
          slug: string;
          description: string;
          image: string;
          link_demo?: string | null;
          link_github?: string | null;
          stacks: string[];
          content?: string | null;
          is_show?: boolean;
          is_featured?: boolean;
        };
        Update: {
          id?: number;
          title?: string;
          slug?: string;
          description?: string;
          image?: string;
          link_demo?: string | null;
          link_github?: string | null;
          stacks?: string[];
          content?: string | null;
          is_show?: boolean;
          is_featured?: boolean;
        };
      };
      achievements: {
        Row: {
          id: number;
          credential_id: string | null;
          slug: string | null;
          name: string;
          issuing_organization: string;
          category: string | null;
          url_credential: string;
          issue_date: string;
          expiration_date: string | null;
          image: string;
          is_show: boolean | null;
        };
        Insert: {
          id?: number;
          credential_id?: string | null;
          slug?: string | null;
          name: string;
          issuing_organization: string;
          category?: string | null;
          url_credential: string;
          issue_date: string;
          expiration_date?: string | null;
          image: string;
          is_show?: boolean | null;
        };
        Update: {
          id?: number;
          credential_id?: string | null;
          slug?: string | null;
          name?: string;
          issuing_organization?: string;
          category?: string | null;
          url_credential?: string;
          issue_date?: string;
          expiration_date?: string | null;
          image?: string;
          is_show?: boolean | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
