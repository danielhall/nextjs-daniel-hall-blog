import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { generateMetadata } from "@/utils/metadata";
import Prose from '@/components/prose';
import ArticleCard from '@/components/articleCard';

export const metadata = generateMetadata({
  title: "Articles | Daniel Hall",
  description: "Tech articles and insights about software development, architecture, and web technologies.",
  path: "/articles"
});

const POSTS_PER_PAGE = 9;
const MIN_GRID_ITEMS = 3; // Minimum number of items to show in grid

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
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
  const page = Number((await searchParams).page) || 1;
  const start = (page - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;

  const [posts, totalPosts] = await Promise.all([
    client.fetch<SanityDocument[]>(POSTS_QUERY, { start, end }),
    client.fetch<number>(TOTAL_POSTS_QUERY)
  ]);

  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  
  // Calculate how many placeholder items we need
  const placeholdersNeeded = Math.max(MIN_GRID_ITEMS - posts.length, 0);

  return (
    <Prose header="Articles">
      {posts.length === 0 ? (
        <p className="text-foreground/60">No articles found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <ArticleCard key={post._id} post={post} />
          ))}
          {[...Array(placeholdersNeeded)].map((_, i) => (
            <article 
              key={`placeholder-${i}`}
              className="bg-navigation/50 rounded-2xl overflow-hidden transition-all duration-500 ease-out shadow-sm h-full flex flex-col opacity-30 hover:opacity-40 transition-opacity"
            >
              <div className="p-6 flex-1 flex flex-col">
                <div className="h-6 bg-gray-400/50 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-400/50 rounded w-1/4 mb-6"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-400/50 rounded w-full"></div>
                  <div className="h-4 bg-gray-400/50 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-400/50 rounded w-4/6"></div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

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
    </Prose>
  );
}
