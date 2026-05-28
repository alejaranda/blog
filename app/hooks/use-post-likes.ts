"use client";

import { useState, useEffect, useCallback } from "react";
import { getPostLikes, togglePostLike } from "@/lib/likes";
import type { User } from "@supabase/supabase-js";

export function usePostLikes(postSlug: string, user: User | null) {
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    getPostLikes(postSlug).then(({ count, userLiked }) => {
      setCount(count);
      setLiked(userLiked);
    });
  }, [postSlug]);

  const toggle = useCallback(async () => {
    if (!user) return;
    const ok = await togglePostLike(postSlug, user.id, liked);
    if (!ok) return;
    setLiked((v) => !v);
    setCount((v) => (liked ? v - 1 : v + 1));
  }, [user, postSlug, liked]);

  return { count, liked, toggle };
}
