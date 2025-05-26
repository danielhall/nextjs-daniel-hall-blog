import { type Metadata } from "next";
import { client } from "@/sanity/client";
import { generateMetadata as generateBaseMetadata } from "@/utils/metadata";
import { type SanityDocument } from "next-sanity";

interface SanityBlock {
  _type: string;
  children: Array<{ text: string }>;
}

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  publishedAt,
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

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await client.fetch<SanityDocument>(POST_QUERY, {
    slug: params.slug,
  });

  if (!post) {
    return {};
  }

  const firstParagraph = post.body
    ?.filter((block: SanityBlock) => block._type === 'block')
    .slice(0, 1)
    .map((block: SanityBlock) => 
      block.children
        .map(child => child.text)
        .join('')
    )
    .join(' ')
    .slice(0, 200) + '...';

  return generateBaseMetadata({
    title: `${post.title}`,
    description: firstParagraph,
    path: `/articles/${params.slug}`
  });
}
