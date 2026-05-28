export function formatDate(raw: string): string {
  return new Date(raw).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function formatShortDate(raw: string): string {
  return new Date(raw).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}
