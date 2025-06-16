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
  _updatedAt,
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

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata(
  props: Props
): Promise<Metadata> {
  const post = await client.fetch<SanityDocument>(POST_QUERY, {
    slug: (await props.params).slug,
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

  const baseMetadata = generateBaseMetadata({
    title: `${post.title}`,
    description: firstParagraph,
    path: `/articles/${(await props.params).slug}`
  });

  return {
    ...baseMetadata,
    authors: [{ name: "Daniel Hall", url: "https://danieljh.uk" }],
    openGraph: {
      ...baseMetadata.openGraph,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post._updatedAt || post.publishedAt,
      authors: ['Daniel Hall'],
    }
  };
}
