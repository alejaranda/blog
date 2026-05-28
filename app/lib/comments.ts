import { createClient } from "@/lib/supabase";
import { buildCommentTree } from "@/utils/tree";
import { Comment } from "@/types/comment";

export async function getComments(postSlug: string): Promise<Comment[]> {
  const supabase = createClient();

  const { data: comments, error } = await supabase
    .from("comments")
    .select("*")
    .eq("post_slug", postSlug)
    .order("created_at", { ascending: true });

  if (error || !comments?.length) return [];

  const { data: likes } = await supabase
    .from("comment_likes")
    .select("comment_id, user_id")
    .in("comment_id", comments.map((c) => c.id));

  const { data: authData } = await supabase.auth.getUser();
  const currentUserId = authData.user?.id;

  const likeCounts = new Map<string, number>();
  const likedByUser = new Set<string>();

  likes?.forEach(({ comment_id, user_id }) => {
    likeCounts.set(comment_id, (likeCounts.get(comment_id) ?? 0) + 1);
    if (user_id === currentUserId) likedByUser.add(comment_id);
  });

  const enriched = comments.map((c) => ({
    ...c,
    likes_count: likeCounts.get(c.id) ?? 0,
    user_liked: likedByUser.has(c.id),
  }));

  return buildCommentTree(enriched);
}

export async function addComment(
  postSlug: string,
  author: string,
  body: string,
  avatarUrl?: string,
  userId?: string,
  parentId?: string
): Promise<Comment | null> {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("comments")
    .insert({ post_slug: postSlug, author, body, avatar_url: avatarUrl, user_id: userId, parent_id: parentId ?? null })
    .select()
    .single();

  if (error) return null;
  return { ...data, likes_count: 0, user_liked: false, replies: [] };
}

export async function editComment(id: string, body: string): Promise<boolean> {
  const { error } = await createClient()
    .from("comments")
    .update({ body, updated_at: new Date().toISOString() })
    .eq("id", id);
  return !error;
}

export async function deleteComment(id: string): Promise<boolean> {
  const { error } = await createClient().from("comments").delete().eq("id", id);
  return !error;
}

export async function toggleCommentLike(
  commentId: string,
  userId: string,
  liked: boolean
): Promise<boolean> {
  const supabase = createClient();
  const table = supabase.from("comment_likes");

  const { error } = liked
    ? await table.delete().eq("comment_id", commentId).eq("user_id", userId)
    : await table.insert({ comment_id: commentId, user_id: userId });

  return !error;
}
