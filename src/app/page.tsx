//import Link from "next/link";
//import { type SanityDocument } from "next-sanity";

import Introduction from "@/components/introduction"

//import { client } from "@/sanity/client";

/* const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`; */

//const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  //const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <>
      <Introduction />
      <div className="md:ml-5 prose">
        <h1 className="text-4xl font-bold mt-5 sm:mt-0 mb-8">Welcome</h1>
        <p><strong>This website is currently under development.</strong></p>
        <p>Please check back again soon!</p>
        <p className="mt-5">I don&apos;t usually share things before they&apos;re finished — but that often means I never get around to sharing them at all.</p>
        <p>In a moment of motivation, I decided to publish my unfinished personal website.</p>
        <p>Sometimes, you&apos;ve just got to bite the bullet and put something out there to create the momentum to finish it.</p>
      </div>
    </>
  )

  /* return (
    <>
      <h1 className="text-4xl font-bold mb-8">Posts</h1>
      <ul className="flex flex-col gap-y-4">
        {posts.map((post) => (
          <li className="hover:underline" key={post._id}>
            <Link href={`/${post.slug.current}`}>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  ); */
}