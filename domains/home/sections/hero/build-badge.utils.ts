export function shortBranchName(branch: string): string {
  return branch.split("/").at(-1) ?? branch;
}

export function formatBuildDate(date: string, locale: string): string {
  return new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "short",
  }).format(new Date(date));
}
