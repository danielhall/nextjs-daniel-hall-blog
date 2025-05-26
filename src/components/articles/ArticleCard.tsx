'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { type SanityDocument } from "next-sanity";
import type { SanityBlock } from '@/app/articles/page';

export default function ArticleCard({ post }: { post: SanityDocument }) {
  return (
    <motion.article 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="group bg-navigation rounded-2xl overflow-hidden shadow-sm"
    >
      <Link href={`/articles/${post.slug.current}`} className="block p-6">
        <motion.h2 
          layout="position"
          className="text-2xl font-semibold group-hover:text-foreground/90 transition-colors"
        >
          {post.title}
        </motion.h2>
        <motion.time 
          layout="position"
          className="text-sm text-foreground/60 mt-2 inline-block"
        >
          {new Date(post.publishedAt).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })}
        </motion.time>
        {post.body && (
          <motion.p 
            layout="position"
            className="mt-4 text-foreground/70 leading-relaxed"
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
          </motion.p>
        )}
      </Link>
    </motion.article>
  );
}
