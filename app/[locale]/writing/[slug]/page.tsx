import { routing } from "@/i18n/routing";

import { getAllPosts } from "@/domains/writing/lib/posts";
import { PostView } from "@/domains/writing/post/post-view";

type PostPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getAllPosts(locale).map((post) => ({ locale, slug: post.slug })),
  );
}

export default async function PostPage({ params }: PostPageProps) {
  const { locale, slug } = await params;

  return <PostView locale={locale} slug={slug} />;
}
