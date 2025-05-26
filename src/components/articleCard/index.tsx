'use client';

import Link from 'next/link';
import { type SanityDocument } from "next-sanity";
import type { SanityBlock } from '@/app/articles/page';

export default function ArticleCard({ post }: { post: SanityDocument }) {
  return (
    <article 
      className="group bg-navigation rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:shadow-lg active:scale-[0.99] origin-top shadow-sm"
    >
      <Link 
        href={`/articles/${post.slug.current}`} 
        className="block p-6"
      >
        <h2 
          className="text-2xl font-medium text-left group-hover:text-foreground/80 transition-colors duration-200"
        >
          {post.title}
        </h2>
        <time 
          className="text-sm text-foreground/60 mt-2 inline-block transition-colors duration-200 group-hover:text-foreground/70"
        >
          {new Date(post.publishedAt).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })}
        </time>
        {post.body && (
          <p 
            className="mt-4 text-foreground/70 leading-relaxed transition-colors duration-200 group-hover:text-foreground/80"
          >
            {post.body
              .filter((block: SanityBlock) => block._type === 'block')
              .slice(0, 1)
              .map((block: SanityBlock) => 
                block.children
                  .map(child => child.text)
                  .join('')
              )
              .join(' ')
              .slice(0, 200)}
            {post.body.length > 0 && '...'}
          </p>
        )}
      </Link>
    </article>
  );
}
