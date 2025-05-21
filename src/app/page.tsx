import Introduction from "@/components/introduction";
import Prose from "@/components/prose";
import { generateMetadata } from "@/utils/metadata";

export const metadata = generateMetadata({
    title: "Daniel Hall | Solutions Architect & Full Stack Developer",
    description: "Personal website of Daniel Hall, a Solutions Architect specialising in .NET, Next.js, and enterprise-scale systems."
});

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
      <Prose header="Welcome!">
        <p><strong>This website is currently under development.</strong></p>
        <p>Please check back again soon!</p>
        <p className="mt-5">I don&apos;t usually share things before they&apos;re finished — but that often means I never get around to sharing them at all.</p>
        <p>In a moment of motivation, I decided to publish my unfinished personal website.</p>
        <p>Sometimes, you&apos;ve just got to bite the bullet and put something out there to create the momentum to finish it.</p>
      </Prose>
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