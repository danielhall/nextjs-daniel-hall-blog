import SocialCards from '@/components/socialCards';
import Prose from '@/components/prose';
import { generateMetadata } from "@/utils/metadata";

export const metadata = generateMetadata({
    title: "Contact Daniel | Solutions Architect & Full Stack Developer",
    description: "Get in touch with Daniel Hall for professional networking, to chat about the content of this website, or to discuss open-source projects. Reach out about solutions architecture, .NET, Next.js, or collaboration opportunities.",
    path: "/contact"
});

export default function IndexPage() {
  return (
    <>
      <div className="prose p-2 md:p-5 mb-6 md:mb-0">
        <h1 className="text-2xl font-bold mb-8">Get in Touch</h1>
        <p>If you&apos;d like to connect, collaborate, or just say hello, you can reach me via LinkedIn, X, or Bluesky.</p>
        <p>I&apos;m always happy to chat about solutions architecture, .NET, Next.js, open-source projects, or anything you&apos;ve seen on this site.</p>
      </div>
      
      <Prose header="Let's Connect...">
          <SocialCards />
      </Prose>
    </>
  )
}