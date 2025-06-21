import Prose from "@/components/prose";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import ArticleCard from "../articleCard";

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

const FeaturedArticles = async () => {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, { start: 0, end: 2 });

  return (
    <Prose header="Featured Articles">
        {posts.length === 0 ? (
        <p className="text-foreground/60">No articles found.</p>
        ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
            <ArticleCard key={post._id} post={post} />
            ))}
        </div>
        )}
    </Prose>
  );
}

export default FeaturedArticles;