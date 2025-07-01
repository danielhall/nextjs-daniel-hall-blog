import Image from "next/image";
import Prose from "@/components/prose";
import { client } from "@/sanity/client";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";


const SOCIALS_QUERY = `*[_type == "social"]|order(publishedAt desc)[0...3]{
  _id,
  title,
  publishedAt,
  body,
  image{
    asset->{
      url,
      metadata { dimensions }
    }
  },
  socialUrl
}`;

type SanityBlock = {
  _type: string;
  children: { text: string }[];
};

type Social = {
  _id: string;
  title: string;
  publishedAt: string;
  body: SanityBlock[];
  image?: {
    asset?: {
      url: string;
      metadata?: { dimensions?: { width: number; height: number } };
    };
  };
  socialUrl: string;
};

// Helper to extract plain text from Sanity Portable Text blocks, ignoring line breaks
function getPlainText(blocks: SanityBlock[], max = 180): string {
  if (!Array.isArray(blocks)) return "";
  // Each block is a paragraph; join with spaces
  let text = blocks
    .filter((block) => block._type === "block" && Array.isArray(block.children))
    .map((block) => block.children.map((child) => child.text).join(""))
    .join(" ");
  // Truncate by character count
  if (text.length > max) {
    text = text.slice(0, max) + "...";
  }
  return text;
}

const FeaturedSocials = async () => {
  const socials: Social[] = await client.fetch<Social[]>(SOCIALS_QUERY);

  return (
    <Prose header="Featured Socials">
      {socials.length === 0 ? (
        <p className="text-foreground/60">No social posts found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socials.map((social) => (
            <a
              key={social._id}
              href={social.socialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-navigation rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:shadow-lg active:scale-[0.99] origin-top shadow-sm h-full flex flex-col"
            >
              {social.image?.asset?.url && (
                <div className="relative w-full aspect-[2/1] mb-4">
                  <Image
                    src={social.image.asset.url}
                    alt="Social post image"
                    fill
                    className="object-cover rounded-t-2xl"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority
                  />
                </div>
              )}
              <div className="flex-1 flex flex-col p-6">
                <h2 className="text-xl font-medium text-left group-hover:text-foreground/80 transition-colors duration-200">
                    {social.title}
                </h2>
                <time className="text-sm text-foreground/60 mt-2 inline-block transition-colors duration-200 group-hover:text-foreground/70">
                  {new Date(social.publishedAt).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                <p className="mt-4 text-foreground/70 leading-relaxed transition-colors duration-200 group-hover:text-foreground/80 line-clamp-3">
                  {getPlainText(social.body, 180)}
                </p>
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
              </div>
            </a>
          ))}
        </div>
      )}
    </Prose>
  );
};

export default FeaturedSocials;
