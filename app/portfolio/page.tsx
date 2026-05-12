import { Metadata } from "next";
import { Section } from "@/components/section";
import { FinalCTA, ProjectsGrid } from "@/components/site-sections";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "View modern case-study style projects by NexBak Solutions across dashboards, mobile apps, CRM, e-commerce, document management, and analytics."
};

export default function PortfolioPage() {
  return (
    <>
      <Section className="bg-navy pt-36 text-white" eyebrow="Portfolio" title="Digital platforms designed for operational impact" description="A representative collection of product and platform work for enterprise teams, fast-growing businesses, and technology-led operations.">
        <ProjectsGrid />
      </Section>
      <FinalCTA />
    </>
  );
}
