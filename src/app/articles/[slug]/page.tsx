import { notFound } from "next/navigation";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import ArticleContent from '@/components/articleContent';
import { generateMetadata } from './meta';

export { generateMetadata };

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  publishedAt,
  image{
    asset->{
      _id,
      url
    }
  },
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

const SLUGS_QUERY = `*[_type == "post" && defined(slug.current)].slug.current`;

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static paths at build time
export async function generateStaticParams() {
  const slugs = await client.fetch<string[]>(SLUGS_QUERY);
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function Page(props: Props) {
  const post = await client.fetch<SanityDocument>(POST_QUERY, {
    slug: (await props.params).slug,
  });

  if (!post) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    author: {
      '@type': 'Person',
      name: 'Daniel Hall',
      url: 'https://danieljh.uk'
    },
    datePublished: post.publishedAt,
    dateModified: post._updatedAt || post.publishedAt,
    image: post.image?.url || 'https://danieljh.uk/assets/Daniel.jpeg',
    url: `https://danieljh.uk/articles/${(await props.params).slug}`,
    publisher: {
      '@type': 'Person',
      name: 'Daniel Hall',
      url: 'https://danieljh.uk'
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://danieljh.uk/articles/${(await props.params).slug}`
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="prose p-2 md:pt-[100px] md:mx-auto md:max-w-3xl">
        <h1 className="text-4xl font-bold sm:mt-0 mb-8">
          {post.title}
        </h1>
        <ArticleContent post={post} />
      </section>
    </>
  );
}
