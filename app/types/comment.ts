export interface Comment {
  id: string;
  post_slug: string;
  author: string;
  body: string;
  avatar_url?: string;
  user_id?: string;
  parent_id?: string | null;
  created_at: string;
  updated_at?: string | null;
  likes_count?: number;
  user_liked?: boolean;
  replies?: Comment[];
}

export interface CommentLike {
  comment_id: string;
  user_id: string;
}
