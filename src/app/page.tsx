import Introduction from "@/components/introduction";
import FeaturedArticles from "@/components/featuredArticles";
import { generateMetadata } from "@/utils/metadata";
import FeaturedSocials from "@/components/featuredSocials";

export const metadata = generateMetadata({
    title: "Daniel Hall | Solutions Architect & Full Stack Developer",
    description: "Personal website of Daniel Hall, a Solutions Architect specialising in .NET, Next.js, and enterprise-scale systems."
});

export default async function IndexPage() {

  return (
    <>
      <Introduction />
      <FeaturedSocials />
      <FeaturedArticles />
    </>
  )
}