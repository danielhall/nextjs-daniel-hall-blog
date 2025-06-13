import { notFound } from "next/navigation";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import ArticleContent from '@/components/articleContent';

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  publishedAt,
  image,
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
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

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Page(props: Props) {
  const post = await client.fetch<SanityDocument>(POST_QUERY, {
    slug: (await props.params).slug,
  });

  if (!post) {
    notFound();
  }

  return (
    <section className="prose p-2 md:pt-[100px] md:mx-auto md:max-w-3xl">
      <h1 className="text-4xl font-bold sm:mt-0 mb-8">
        {post.title}
      </h1>
      <ArticleContent post={post} />
    </section>
  );
}
