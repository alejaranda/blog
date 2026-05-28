import { TocItem } from "@/types/blog";

export function extractToc(content: string): TocItem[] {
  return content
    .split("\n")
    .reduce<TocItem[]>((acc, line) => {
      const match = line.match(/^(#{1,3})\s+(.+)$/);
      if (!match) return acc;

      const level = match[1].length as 1 | 2 | 3;
      const title = match[2].trim();
      const id = title.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");

      return [...acc, { id, title, level }];
    }, []);
}
