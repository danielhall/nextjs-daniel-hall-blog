import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { generateMetadata } from "@/utils/metadata";
import Prose from '@/components/prose';
import ArticleCard from '@/components/articles/ArticleCard';

export const metadata = generateMetadata({
  title: "Articles | Daniel Hall",
  description: "Tech articles and insights about software development, architecture, and web technologies.",
  path: "/articles"
});

const POSTS_PER_PAGE = 10;

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[$start...$end]{
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

const TOTAL_POSTS_QUERY = `count(*[_type == "post" && defined(slug.current)])`;

export interface SanityBlock {
  _type: string;
  children: Array<{ text: string }>;
}

export default async function ArticlesPage({ searchParams }: PageProps) {
  const page = Number(searchParams.page) || 1;
  const start = (page - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;

  const [posts, totalPosts] = await Promise.all([
    client.fetch<SanityDocument[]>(POSTS_QUERY, { start, end }),
    client.fetch<number>(TOTAL_POSTS_QUERY)
  ]);

  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  return (
    <Prose header="Articles">
      <div className="max-w-2xl">
        <div className="space-y-8">
          {posts.length === 0 ? (
            <p className="text-foreground/60">No articles found.</p>
          ) : (
            posts.map((post) => (
              <ArticleCard key={post._id} post={post} />
            ))
          )}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-4 mt-12">
            {page > 1 && (
              <Link
                href={`/articles?page=${page - 1}`}
                className="px-4 py-2 bg-background rounded hover:bg-navigation transition-colors"
              >
                Previous
              </Link>
            )}
            <span className="text-sm text-foreground/60">
              Page {page} of {totalPages}
            </span>
            {page < totalPages && (
              <Link
                href={`/articles?page=${page + 1}`}
                className="px-4 py-2 bg-background rounded hover:bg-navigation transition-colors"
              >
                Next
              </Link>
            )}
          </div>
        )}
      </div>
    </Prose>
  );
}
