"use client";

interface PostNoteProps {
  title: string;
  children: React.ReactNode;
  type?: "info" | "warning" | "success";
}

const typeStyles = {
  info: "border-blue-900/50 bg-blue-950/20 text-blue-200",
  warning: "border-amber-900/50 bg-amber-950/20 text-amber-200",
  success: "border-emerald-900/50 bg-emerald-950/20 text-emerald-200",
};

export function PostNote({ title, children, type = "info" }: PostNoteProps) {
  return (
    <div className={`my-6 rounded-xl border p-4 text-sm ${typeStyles[type]}`}>
      <strong className="font-semibold block mb-1">{title}</strong>
      {children}
    </div>
  );
}
