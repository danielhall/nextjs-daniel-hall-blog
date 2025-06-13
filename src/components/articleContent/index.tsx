'use client';

import Image from "next/image";
import { motion } from 'framer-motion';
import { PortableText } from "@portabletext/react";
import type { PortableTextComponents } from '@portabletext/react';
import { type SanityDocument } from "next-sanity";
import { Clock } from 'lucide-react';

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mb-6 leading-relaxed">{children}</p>,
    h2: ({ children }) => <h2 className="text-2xl font-semibold mt-12 mb-6">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl mt-8 mb-4">{children}</h3>,
  },
  list: {
    bullet: ({ children }) => <ul className="mb-6 space-y-2">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal mb-6 ml-6 space-y-2">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="ml-6 list-disc">{children}</li>,
  },
};

export default function ArticleContent({ post }: { post: SanityDocument }) {
  //const wordCount = post.body.map((child: { text: any; }) => child.text).join('').toString();//.split(/\s+/).length;
  //const timeToRead = Math.ceil(wordCount / 225);

  return (
    <motion.div 
      className="max-w-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <motion.time 
        className="text-sm text-foreground/60 inline-block mr-2"
      >
        {new Date(post.publishedAt).toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        })}
      </motion.time>

      <motion.span
          className="text-sm text-foreground/60 inline-block mb-3"
      >
        • <Clock className="w-4 h-4 ml-1 mr-1 pb-[2px] inline" /> {post.estimatedReadingTime} minute read
      </motion.span>

      {post.image && (
        <motion.div 
          layout
          className="relative w-full aspect-[2/1] mb-8"
        >
          <Image
            src={post.image.url}
            alt={post.title}
            fill
            className="object-cover rounded-lg"
          />
        </motion.div>
      )}

      <motion.div 
        layout
        className="portable-text"
      >
        <PortableText
          value={post.body}
          components={components}
        />
      </motion.div>
    </motion.div>
  );
}
