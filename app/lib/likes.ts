import { createClient } from "@/lib/supabase";

export async function getPostLikes(postSlug: string): Promise<{ count: number; userLiked: boolean }> {
  const supabase = createClient();

  const [{ count }, { data: authData }] = await Promise.all([
    supabase.from("post_likes").select("*", { count: "exact", head: true }).eq("post_slug", postSlug),
    supabase.auth.getUser(),
  ]);

  const userId = authData.user?.id;
  if (!userId) return { count: count ?? 0, userLiked: false };

  const { data } = await supabase
    .from("post_likes")
    .select("id")
    .eq("post_slug", postSlug)
    .eq("user_id", userId)
    .single();

  return { count: count ?? 0, userLiked: !!data };
}

export async function togglePostLike(postSlug: string, userId: string, liked: boolean): Promise<boolean> {
  const supabase = createClient();
  const table = supabase.from("post_likes");

  const { error } = liked
    ? await table.delete().eq("post_slug", postSlug).eq("user_id", userId)
    : await table.insert({ post_slug: postSlug, user_id: userId });

  return !error;
}
