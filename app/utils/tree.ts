import { Comment } from "@/types/comment";

export function buildCommentTree(flat: Comment[]): Comment[] {
  const map = new Map<string, Comment>(
    flat.map((c) => [c.id, { ...c, replies: [] }])
  );

  return flat.reduce<Comment[]>((roots, c) => {
    const node = map.get(c.id)!;
    if (c.parent_id && map.has(c.parent_id)) {
      map.get(c.parent_id)!.replies!.push(node);
      return roots;
    }
    return [...roots, node];
  }, []);
}
