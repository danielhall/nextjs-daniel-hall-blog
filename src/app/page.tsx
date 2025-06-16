import Introduction from "@/components/introduction";
import Prose from "@/components/prose";
import { generateMetadata } from "@/utils/metadata";

export const metadata = generateMetadata({
    title: "Daniel Hall | Solutions Architect & Full Stack Developer",
    description: "Personal website of Daniel Hall, a Solutions Architect specialising in .NET, Next.js, and enterprise-scale systems."
});

export default async function IndexPage() {

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
}