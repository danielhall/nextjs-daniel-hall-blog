import { notFound } from "next/navigation";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { type SanityDocument } from "next-sanity";
import { type Metadata } from "next";
import { client } from "@/sanity/client";
import { generateMetadata as generateBaseMetadata } from "@/utils/metadata";
import Prose from '@/components/prose';

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

interface SanityBlock {
  _type: string;
  children: Array<{ text: string }>;
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
    title: `${post.title} | Daniel Hall`,
    description: firstParagraph,
    path: `/articles/${params.slug}`
  });
}

export default async function ArticlePage({ params }: PageProps) {
  const post = await client.fetch<SanityDocument>(POST_QUERY, {
    slug: params.slug,
  });

  if (!post) {
    notFound();
  }

  return (
    <Prose header={post.title}>
      <time className="text-sm text-foreground/60 block mb-8">
        {new Date(post.publishedAt).toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        })}
      </time>

      {post.image && (
        <div className="relative w-full aspect-[2/1] mb-8">
          <Image
            src={post.image.url}
            alt={post.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )}

      <div className="portable-text">
        <PortableText
          value={post.body}
          components={{
            block: {
              normal: ({children}) => <p className="mb-6">{children}</p>,
              h2: ({children}) => <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>,
              h3: ({children}) => <h3 className="text-xl font-bold mt-6 mb-3">{children}</h3>,
            },
          }}
        />
      </div>
    </Prose>
  );
}
