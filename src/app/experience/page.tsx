//import Link from "next/link";
//import { type SanityDocument } from "next-sanity";

//import { client } from "@/sanity/client";

/* const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`; */

//const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  //const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <div className="md:ml-5 md:mt-1 lg:mt-6 prose">
      <h1 className="text-4xl font-bold mb-8">Experience</h1>
      <p>An experienced, proactive Full Stack .NET Developer and Solutions Architect with over 13 years of experience designing robust, maintainable web solutions. Trusted as a technical lead across high-profile projects, I specialise in architecting scalable enterprise-grade systems, both traditional and headless. I have deep .NET expertise across the full stack, including complex integration work, service-oriented architecture, and performance-critical backend systems. Passionate about performance, code quality, and innovation, with extensive experience in Next.js, React, Storyblok, BigCommerce, and Azure.</p>
      
      <h2 className="text-3xl font-bold mt-8 mb-4">Key Skills</h2>

      <h3 className="text-2xl mb-4">Core Technologies</h3>

      <ul className="list-disc list-outside pl-6">
        <li>C#, .NET (Framework & Core), ASP.NET MVC, Web API, WCF</li>
        <li>Extensive backend experience with microservices, middleware, identity providers, and distributed architectures</li>
        <li>Typescript, JavaScript, React, Next.js, Vue.js, Node.js</li>
        <li>Azure (App Services, SQL, Functions, CDN, Front Door, Service Bus, WAF, Entra ID)</li>
        <li>SQL Server, Entity Framework (incl. Core)</li>
      </ul>

      <h3 className="text-2xl mb-4 mt-4">Architecture & DevOps</h3>

      <ul className="list-disc list-outside pl-6">
        <li>Scalable distributed systems, Microservices, Domain Driven Design, Mediatr</li>
        <li>CI/CD: Azure DevOps, Octopus, TeamCity, Bicep</li>
        <li>Git (Azure DevOps, Bitbucket, GitHub), TFS</li>
      </ul>

      <h3 className="text-2xl mb-4 mt-4">Headless Commerce & CMS</h3>

      <ul className="list-disc list-outside pl-6">
        <li>BigCommerce (including Catalyst), Storyblok, Kentico (11-13, Xperience)</li>
        <li>GraphQL, REST APIs, webhook integrations</li>
      </ul>

      <h3 className="text-2xl mb-4 mt-4">Quality & Testing</h3>

      <ul className="list-disc list-outside pl-6">
        <li>Unit testing: XUnit, NUnit, Moq, SpecFlow</li>
        <li>Dependency Injection: Autofac, Unity</li>
      </ul>

      <h3 className="text-2xl mb-4 mt-4">Other</h3>

      <ul className="list-disc list-outside pl-6">
        <li>Agile (Scrum/Kanban), JIRA, Confluence, Scoro</li>
        <li>GTM, GA4, Clarity, GSC configuration</li>
        <li>Fixed-price and agile estimation, technical interviewing, team mentoring</li>
        <li>Internal DevOps tooling: automated laptop provisioning and system setup</li>
      </ul>

      <h2 className="text-3xl font-bold mt-8 mb-4">Professional Experience</h2>

      <h3 className="text-2xl mb-4 mt-4">Ridgeway Studios Marketing Ltd (Feb 2020 – Present)</h3>

      <p><strong>Solutions Architect</strong></p>

      <p className="py-4">Ridgeway is a digital agency specialising in e-commerce and enterprise-grade CMS platforms. My role as a Solutions Architect encompasses designing performant systems, leading technical strategy, and delivering high-performance solutions using .NET, BigCommerce, Storyblok, React, and Next.js.</p>

      <ul className="list-disc list-outside pl-6">
        <li>Technical leadership on multiple large-scale e-commerce projects including HMV, Optibac Probiotics, and Twinings</li>
        <li>Frequently visit client sites to run technical workshops, gather business and integration requirements through workshops, and ensure stakeholder alignment throughout discovery and delivery phases</li>
        <li>Architected hybrid headless solutions using BigCommerce and Storyblok with Next.js, focusing on performance, scalability, and maintainability</li>
        <li>Led development of robust .NET Core APIs, including identity providers and checkout orchestration microservices for HMV</li>
        <li>Designed and maintained complex Azure environments, including App Services, Web Application Gateway, CDN, Azure SQL, and Service Bus</li>
        <li>Rebuilt core .NET components to support asynchronous messaging and high availability using Azure Functions and Service Bus</li>
        <li>Built the identity platform for HMV’s mobile app launch with a custom .NET Core SSO microservice</li>
        <li>Acted as technical lead and mentor for the dev team, responsible for sprint planning, code reviews, team guidance, and problem-solving</li>
        <li>Conducted all technical interviews for Ridgeway’s development hires</li>
        <li>Created internal tools and automated scripts for laptop builds, streamlining developer onboarding and internal ops</li>
      </ul>

      <h3 className="text-2xl mb-4 mt-4">EDM Group Ltd (Feb 2012 – Feb 2020)</h3>

      <p><strong>Senior Software Developer (2017 – 2020)</strong></p>

      <p className="py-4">Led development on the Property Risk Hub (PRH), a high-performance data-driven risk platform used by Nationwide Building Society. Initially the sole developer on the project, I led its growth into a business-critical application.</p>

      <ul className="list-disc list-outside pl-6">
        <li>Designed a modular .NET Framework solution, later introducing .NET Standard projects for better maintainability and performance</li>
        <li>Delivered multiple ASP.NET MVC-based UIs and built core libraries following Domain Driven Design principles</li>
        <li>Implemented message-based architecture using RabbitMQ for inter-service communication</li>
        <li>Developed RESTful APIs and internal tooling, integrated into banking client workflows</li>
        <li>Maintained CI/CD pipelines using Azure DevOps and Octopus Deploy</li>
        <li>Created and maintained NUnit, Moq, and SpecFlow test suites for regression testing</li>
        <li>Worked closely with clients (e.g. Nationwide), running workshops, gathering requirements, and demonstrating releases</li>
        <li>Assigned development tasks, prioritised client requests, planned sprints and managed releases</li>
      </ul>

      <p className="mt-4"><strong>Apprentice to Mid-Level Developer (2012 – 2017) Adactus Ltd / EDM Group</strong></p>

      <p className="py-4">Progressed from apprentice to mid-level developer through successful delivery of complex full-stack solutions.</p>

      <ul className="list-disc list-outside pl-6">
        <li>Developed multi-tenanted .NET applications for insurance and hospitality sectors, with clients including Pizza Hut, Aviva, and Goals Soccer Centres</li>
        <li>Built secure WCF services and designed database schemas for high-volume systems</li>
        <li>Enhanced legacy systems and optimised SQL performance, resulting in measurable load improvements</li>
        <li>Travelled to Australia to gather business requirements for a bespoke claims platform</li>
        <li>Supported mission-critical infrastructure, including resolving high-priority outages for the Pizza Hut delivery platform under tight SLAs</li>
        <li>Actively contributed to team knowledge sharing, code reviews, and documentation</li>
      </ul>

      <h2 className="text-3xl font-bold mt-8 mb-4">Certifications</h2>
      <ul className="list-disc list-outside pl-6">
        <li>BigCommerce “BigDev” Certified 2025</li>
        <li>Kentico 12 & 13 Certified Developer</li>
        <li>Microsoft MCPS: Certified Professional</li>
        <li>Microsoft MTA: Software Development Fundamentals</li>
        <li>Programming in HTML5 with JavaScript and CSS3 Specialist</li>
      </ul>

      <h2 className="text-3xl font-bold mt-8 mb-4">Education</h2>
      <ul className="list-disc list-outside pl-6">
        <li>QA Apprenticeships: Software and Web Development (Level 3 & 4)</li>
      </ul>
    </div>
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