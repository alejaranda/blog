"use client";

import { useState, useEffect, useCallback } from "react";
import {
  getComments,
  addComment,
  editComment,
  deleteComment,
  toggleCommentLike,
} from "@/lib/comments";
import { Comment } from "@/types/comment";
import type { User } from "@supabase/supabase-js";

export function useComments(postSlug: string) {
  const [comments, setComments] = useState<Comment[]>([]);

  const refresh = useCallback(() => {
    getComments(postSlug).then(setComments);
  }, [postSlug]);

  useEffect(() => { refresh(); }, [refresh]);

  const add = useCallback(
    async (user: User, body: string, parentId?: string) => {
      const name = user.user_metadata?.user_name ?? user.user_metadata?.name ?? "Anonymous";
      const comment = await addComment(
        postSlug,
        name,
        body,
        user.user_metadata?.avatar_url,
        user.id,
        parentId
      );
      if (comment) refresh();
      return comment;
    },
    [postSlug, refresh]
  );

  const edit = useCallback(
    async (id: string, body: string) => {
      await editComment(id, body);
      refresh();
    },
    [refresh]
  );

  const remove = useCallback(
    async (id: string) => {
      await deleteComment(id);
      refresh();
    },
    [refresh]
  );

  const like = useCallback(
    async (id: string, userId: string, liked: boolean) => {
      await toggleCommentLike(id, userId, liked);
      refresh();
    },
    [refresh]
  );

  const totalCount = (list: Comment[]): number =>
    list.reduce((acc, c) => acc + 1 + totalCount(c.replies ?? []), 0);

  return { comments, count: totalCount(comments), add, edit, remove, like };
}
