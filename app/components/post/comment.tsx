"use client";

import { useState, useRef } from "react";
import { useAuth } from "@/hooks/use-auth";
import { useComments } from "@/hooks/use-comments";
import { CommentItem } from "./comment-item";

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

export function PostComment({ postSlug }: { postSlug: string }) {
  const { user, signIn, signOut } = useAuth();
  const { comments, count, add, edit, remove, like } = useComments(postSlug);
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [replyTo, setReplyTo] = useState<{ id: string; author: string } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!body.trim() || !user) return;
    setLoading(true);
    await add(user, body.trim(), replyTo?.id);
    setLoading(false);
    setBody("");
    setReplyTo(null);
  };

  const handleReply = (parentId: string, parentAuthor: string) => {
    setReplyTo({ id: parentId, author: parentAuthor });
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  return (
    <section className="mt-10 pt-6 border-t border-zinc-800">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-600">
          {count > 0 ? `${count} comment${count !== 1 ? "s" : ""}` : "Comments"}
        </h3>
        {!user && (
          <button onClick={signIn} className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-200 transition-colors">
            <GitHubIcon /> Sign in
          </button>
        )}
      </div>

      {comments.length > 0 && (
        <ul className="space-y-3 mb-5">
          {comments.map((c) => (
            <CommentItem
              key={c.id}
              comment={c}
              user={user}
              onReply={handleReply}
              onEdit={edit}
              onDelete={remove}
              onLike={(id, liked) => user && like(id, user.id, liked)}
            />
          ))}
        </ul>
      )}

      {user && (
        <form onSubmit={handleSubmit} className="flex items-start gap-2.5">
          {user.user_metadata?.avatar_url && (
            <img src={user.user_metadata.avatar_url} alt="" className="w-7 h-7 rounded-full shrink-0 mt-0.5" />
          )}
          <div className="flex-1 flex items-center gap-2 border-b border-zinc-800 pb-1.5 focus-within:border-zinc-600 transition-colors">
            <div className="flex-1">
              {replyTo && (
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-xs text-zinc-600">
                    Replying to <span className="text-zinc-500">{replyTo.author}</span>
                  </span>
                  <button type="button" onClick={() => setReplyTo(null)} className="text-zinc-700 hover:text-zinc-500 text-xs ml-1">✕</button>
                </div>
              )}
              <input
                ref={inputRef}
                placeholder="Add a comment…"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="w-full bg-transparent text-xs text-zinc-300 placeholder-zinc-700 focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button type="button" onClick={signOut} className="text-xs text-zinc-700 hover:text-zinc-500 transition-colors">
                Sign out
              </button>
              {body.trim() && (
                <button type="submit" disabled={loading} className="text-xs font-semibold text-violet-400 hover:text-violet-300 disabled:opacity-40 transition-colors">
                  {loading ? "…" : replyTo ? "Reply" : "Post"}
                </button>
              )}
            </div>
          </div>
        </form>
      )}
    </section>
  );
}
