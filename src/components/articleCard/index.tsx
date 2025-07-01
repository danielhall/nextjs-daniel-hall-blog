"use client";


import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import type { SanityBlock } from "@/app/articles/page";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";

export default function ArticleCard({ post }: { post: SanityDocument }) {
  return (
    <article className="group bg-navigation rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:shadow-lg active:scale-[0.99] origin-top shadow-sm h-full flex flex-col">
      <Link
        href={`/articles/${post.slug.current}`}
        className="block p-6 flex-1 flex flex-col"
      >
        <h2 className="text-xl font-medium text-left group-hover:text-foreground/80 transition-colors duration-200">
          {post.title}
        </h2>
        <time className="text-sm text-foreground/60 mt-2 inline-block transition-colors duration-200 group-hover:text-foreground/70">
          {new Date(post.publishedAt).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>
        {post.body && (
          <p className="mt-4 text-foreground/70 leading-relaxed transition-colors duration-200 group-hover:text-foreground/80 line-clamp-3">
            {post.body
              .filter((block: SanityBlock) => block._type === "block")
              .slice(0, 1)
              .map((block: SanityBlock) =>
                block.children.map((child) => child.text).join("")
              )
              .join(" ")
              .slice(0, 200)}
            {post.body.length > 0 && "..."}
          </p>
        )}
        <div className="flex flex-1 items-end justify-end mt-5">
          <ChevronDoubleRightIcon 
            className={`
              w-6 h-6
              transition-all duration-500 ease-out
              group-hover:text-foreground/80 dark:group-hover:text-foreground/80
              opacity-40 group-hover:opacity-80
            `}
          />
        </div>
      </Link>
    </article>
  );
}
