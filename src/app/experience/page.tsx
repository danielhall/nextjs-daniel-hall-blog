import SkillCard from '@/components/skills';
import Prose from '@/components/prose';
import { generateMetadata } from "@/utils/metadata";

export const metadata = generateMetadata({
    title: "Experience | Solutions Architect & Full Stack Developer",
    description: "Over 13 years of experience in .NET development, cloud architecture, and technical leadership. View my professional journey, key skills, and achievements.",
    path: "/experience"
});

export default function IndexPage() {
  return (
    <>
      <div className="prose p-2 md:p-5 mb-6 md:mb-0">
        <h1 className="text-3xl font-bold mb-8">Experience</h1>
        <p>An experienced, proactive Full Stack .NET Developer and Solutions Architect with over 13 years of experience designing robust, maintainable web solutions. Trusted as a technical lead across high-profile projects, I specialise in architecting scalable enterprise-grade systems, both traditional and headless. I have deep .NET expertise across the full stack, including complex integration work, service-oriented architecture, and performance-critical backend systems. Passionate about performance, code quality, and innovation, with extensive experience in Next.js, React, Storyblok, BigCommerce, and Azure.</p>
      </div>
      
      <Prose header="Key Skills">
        <div className="flex flex-wrap gap-4">

          <SkillCard title="Solutions Architecture">
            <ul className="list-disc list-outside pl-6">
              <li>Enterprise-scale distributed systems design</li>
              <li>Microservices with Domain Driven Design</li>
              <li>Event-driven architecture (Azure Service Bus, RabbitMQ)</li>
              <li>High-performance system optimisation</li>
              <li>Technical discovery and stakeholder workshops</li>
            </ul>
          </SkillCard>

          <SkillCard title="Modern Web Development">
            <ul className="list-disc list-outside pl-6">
              <li>Next.js 13/14 App Router and Server Components</li>
              <li>React 18+ with TypeScript and custom hooks</li>
              <li>Performance optimisation and Core Web Vitals</li>
              <li>Headless commerce with BigCommerce Catalyst</li>
              <li>Storyblok CMS and composable architecture</li>
            </ul>
          </SkillCard>

          <SkillCard title=".NET Expertise">
            <ul className="list-disc list-outside pl-6">
              <li>C#, .NET Framework & .NET Core/6+</li>
              <li>ASP.NET Core Web API and MVC</li>
              <li>Identity providers and SSO solutions</li>
              <li>Entity Framework Core and SQL optimisation</li>
              <li>Azure cloud-native development</li>
            </ul>
          </SkillCard>

          <SkillCard title="Cloud & DevOps">
            <ul className="list-disc list-outside pl-6">
              <li>Azure (App Services, Functions, SQL, Front Door)</li>
              <li>CI/CD with Azure DevOps and Octopus Deploy</li>
              <li>Infrastructure as Code (Bicep, ARM)</li>
              <li>Application monitoring and insights</li>
              <li>Git workflows and branch strategies</li>
            </ul>
          </SkillCard>

          <SkillCard title="Quality & Testing">
            <ul className="list-disc list-outside pl-6">
              <li>Test-driven development with XUnit/NUnit</li>
              <li>Integration testing with SpecFlow</li>
              <li>Performance testing and optimisation</li>
              <li>Code quality and best practices</li>
              <li>Technical mentoring and code reviews</li>
            </ul>
          </SkillCard>

          <SkillCard title="Professional Skills">
            <ul className="list-disc list-outside pl-6">
              <li>Technical leadership and team mentoring</li>
              <li>Agile methodologies (Scrum/Kanban)</li>
              <li>Project estimation and planning</li>
              <li>Client workshops and requirements gathering</li>
              <li>Technical documentation and knowledge sharing</li>
            </ul>
          </SkillCard>
          </div>
      </Prose>

      <Prose header="Professional Experience">
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
          <li>Conducting technical interviews for Ridgeway’s development hires</li>
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
      </Prose>

      <Prose header="Certifications">
        <ul className="list-disc list-outside pl-6">
          <li>BigCommerce “BigDev” Certified 2025</li>
          <li>Kentico 12 & 13 Certified Developer</li>
          <li>Microsoft MCPS: Certified Professional</li>
          <li>Microsoft MTA: Software Development Fundamentals</li>
          <li>Programming in HTML5 with JavaScript and CSS3 Specialist</li>
        </ul>
      </Prose>
    </>
  )
}