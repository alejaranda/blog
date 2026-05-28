import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import { getPost, getAllPosts } from "@/lib/mdx";
import { PostLayout } from "@/components/post";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const result = getPost(slug);
  if (!result) notFound();

  const { post, content } = result;
  const allPosts = getAllPosts().map((p) => ({
    slug: p.slug,
    title: p.title,
    related: p.related,
  }));

  return (
    <PostLayout
      postSlug={slug}
      backLink="/blog"
      backLabel="Back to Blog"
      header={{
        date: post.date,
        title: post.title,
      }}
      toc={post.toc}
      allPosts={allPosts}
    >
      <MDXRemote
        source={content}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
              rehypeSlug,
              [
                rehypePrettyCode,
                {
                  theme: "vesper",
                  keepBackground: false,
                  defaultLang: "plaintext",
                },
              ],
            ],
          },
        }}
      />
    </PostLayout>
  );
}
