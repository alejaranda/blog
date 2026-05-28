"use client";

import { useState } from "react";
import { Comment } from "@/types/comment";
import { formatShortDate } from "@/utils/date";
import type { User } from "@supabase/supabase-js";

const OWNER = process.env.NEXT_PUBLIC_OWNER_GITHUB;

interface Props {
  comment: Comment;
  user: User | null;
  depth?: number;
  onReply: (parentId: string, parentAuthor: string) => void;
  onEdit: (id: string, body: string) => void;
  onDelete: (id: string) => void;
  onLike: (id: string, liked: boolean) => void;
}

export function CommentItem({ comment, user, depth = 0, onReply, onEdit, onDelete, onLike }: Props) {
  const [editing, setEditing] = useState(false);
  const [editBody, setEditBody] = useState(comment.body);
  const [showReplies, setShowReplies] = useState(false);

  const isOwner = user?.user_metadata?.user_name === OWNER;
  const isAuthor = user?.id === comment.user_id;
  const replyCount = comment.replies?.length ?? 0;

  const handleSaveEdit = async () => {
    if (!editBody.trim()) return;
    await onEdit(comment.id, editBody.trim());
    setEditing(false);
  };

  return (
    <li>
      <div className="flex gap-2.5">
        {comment.avatar_url ? (
          <img src={comment.avatar_url} alt={comment.author} className="w-7 h-7 rounded-full shrink-0 object-cover mt-0.5" />
        ) : (
          <div className="w-7 h-7 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 text-xs font-medium text-zinc-400 mt-0.5">
            {comment.author[0]?.toUpperCase()}
          </div>
        )}

        <div className="flex-1 min-w-0">
          {editing ? (
            <div className="space-y-1.5">
              <textarea
                value={editBody}
                onChange={(e) => setEditBody(e.target.value)}
                rows={2}
                autoFocus
                className="w-full rounded border border-zinc-700 bg-zinc-900 px-2 py-1.5 text-xs text-zinc-100 focus:outline-none resize-none"
              />
              <div className="flex gap-2">
                <button onClick={handleSaveEdit} className="text-xs text-violet-400 hover:text-violet-300 transition-colors">Save</button>
                <button onClick={() => setEditing(false)} className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">Cancel</button>
              </div>
            </div>
          ) : (
            <p className="text-xs text-zinc-300 leading-relaxed">
              <span className="font-medium text-zinc-200 mr-1.5">{comment.author}</span>
              {comment.author === OWNER && (
                <span className="text-xs font-mono uppercase tracking-widest bg-violet-500/10 text-violet-400 border border-violet-500/20 rounded px-1 py-px mr-1.5">
                  author
                </span>
              )}
              {comment.body}
            </p>
          )}

          {!editing && (
            <div className="flex items-center gap-3 mt-1">
              <span className="text-xs text-zinc-700">{formatShortDate(comment.created_at)}</span>
              {(comment.likes_count ?? 0) > 0 && (
                <span className="text-xs text-zinc-600">
                  {comment.likes_count} {comment.likes_count === 1 ? "like" : "likes"}
                </span>
              )}
              {user && depth === 0 && (
                <button onClick={() => onReply(comment.id, comment.author)} className="text-xs font-medium text-zinc-600 hover:text-zinc-400 transition-colors">
                  Reply
                </button>
              )}
              {isAuthor && (
                <button onClick={() => setEditing(true)} className="text-xs text-zinc-700 hover:text-zinc-500 transition-colors">
                  Edit
                </button>
              )}
              {(isOwner || isAuthor) && (
                <button onClick={() => onDelete(comment.id)} className="text-xs text-zinc-700 hover:text-red-500 transition-colors">
                  Delete
                </button>
              )}
            </div>
          )}
        </div>

        {!editing && (
          <button
            onClick={() => onLike(comment.id, comment.user_liked ?? false)}
            disabled={!user}
            className={`shrink-0 mt-1 transition-colors disabled:opacity-20 ${comment.user_liked ? "text-red-400" : "text-zinc-700 hover:text-zinc-400"}`}
          >
            <svg viewBox="0 0 24 24" className={`w-3.5 h-3.5 ${comment.user_liked ? "fill-red-400 stroke-none" : "fill-none stroke-current"}`} strokeWidth={2}>
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
        )}
      </div>

      {depth === 0 && replyCount > 0 && (
        <div className="ml-9 mt-2">
          <button
            onClick={() => setShowReplies((v) => !v)}
            className="flex items-center gap-1.5 text-xs font-medium text-zinc-600 hover:text-zinc-400 transition-colors mb-2"
          >
            <span className="w-4 h-px bg-zinc-700 inline-block" />
            {showReplies ? "Hide replies" : `View ${replyCount} ${replyCount === 1 ? "reply" : "replies"}`}
          </button>
          {showReplies && (
            <ul className="space-y-3">
              {comment.replies!.map((reply) => (
                <CommentItem key={reply.id} comment={reply} user={user} depth={1} onReply={onReply} onEdit={onEdit} onDelete={onDelete} onLike={onLike} />
              ))}
            </ul>
          )}
        </div>
      )}
    </li>
  );
}
