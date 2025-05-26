import { notFound } from "next/navigation";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import Prose from '@/components/prose';
import ArticleContent from '@/components/articles/ArticleContent';
export { generateMetadata } from './meta';

interface PageProps {
  params: {
    slug: string;
  };
}

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  publishedAt,
  image,
  body[]{
    ...,
    _type == 'block' => {
      ...,
      children[]{
        ...
      }
    }
  }
}`;

export default async function ArticlePage({ params }: PageProps) {
  const post = await client.fetch<SanityDocument>(POST_QUERY, {
    slug: params.slug,
  });

  if (!post) {
    notFound();
  }

  return (
    <Prose header={post.title}>
      <ArticleContent post={post} />
    </Prose>
  );
}
