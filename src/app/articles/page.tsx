import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { generateMetadata } from "@/utils/metadata";

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
    <div className="prose">
      <h1 className="text-4xl font-bold mb-8">Articles</h1>
      
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post._id} className="group">
            <Link href={`/articles/${post.slug.current}`}>
              <h2 className="text-2xl font-semibold group-hover:text-foreground/80 transition-colors">
                {post.title}
              </h2>
              <time className="text-sm text-foreground/60">
                {new Date(post.publishedAt).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </time>
              {post.body && (
                <p className="mt-2 text-foreground/80">
                  {post.body
                    .filter((block: any) => block._type === 'block')
                    .slice(0, 1)
                    .map((block: any) => 
                      block.children
                        .map((child: any) => child.text)
                        .join('')
                    )
                    .join(' ')
                    .slice(0, 200)}
                  {post.body.length > 0 && '...'}
                </p>
              )}
            </Link>
          </article>
        ))}
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
  );
}
