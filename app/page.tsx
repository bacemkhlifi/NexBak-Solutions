import { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { HeroVisual } from "@/components/hero-visual";
import { Section } from "@/components/section";
import {
  CapabilityGrid,
  ClientLogos,
  FAQ,
  FinalCTA,
  LinkedSectionCTA,
  ProcessTimeline,
  ProjectsGrid,
  ServicesGrid,
  StatsGrid,
  TechCarousel,
  Testimonials
} from "@/components/site-sections";

export const metadata: Metadata = {
  title: "Home",
  description:
    "NexBak Solutions builds showcase websites, e-commerce order request flows, IT consulting solutions, web platforms, mobile applications, and automation."
};

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy pb-20 pt-36 text-white sm:pt-44">
        <div className="absolute inset-0 bg-radial-grid" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-cyan/30 bg-cyan/10 px-4 py-2 text-sm text-cyan">
              Premium consulting, software, and automation systems
            </div>
            <h1 className="font-display text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
              Building modern digital solutions for ambitious businesses
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              NexBak Solutions helps companies accelerate growth through IT consulting, enterprise software, web platforms, and mobile applications.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
              We also help e-commerce businesses launch simple website vitrines where customers can discover products and send order requests directly through the site.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Start Your Project</ButtonLink>
              <ButtonLink href="/services" variant="secondary">Explore Services</ButtonLink>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>
      <Section eyebrow="Trusted by focused teams" title="Digital foundations built for growth">
        <ClientLogos />
      </Section>
      <Section id="services" eyebrow="What we do" title="Consulting and websites for modern businesses" description="From simple showcase websites and order request flows to custom platforms, NexBak combines product thinking, design craft, and senior engineering execution.">
        <ServicesGrid limit={4} />
        <LinkedSectionCTA />
      </Section>
      <Section eyebrow="Why choose us" title="Enterprise discipline with startup speed" description="We bring structured delivery, thoughtful architecture, and high-end user experience into one integrated product team.">
        <CapabilityGrid />
      </Section>
      <Section eyebrow="Technology stack" title="Modern tools for resilient platforms">
        <TechCarousel />
      </Section>
      <Section eyebrow="Workflow" title="A transparent process from idea to scale">
        <ProcessTimeline />
      </Section>
      <Section eyebrow="Outcomes" title="Built to move real business metrics">
        <StatsGrid />
      </Section>
      <Section eyebrow="Featured projects" title="Case-study style solutions for complex teams">
        <ProjectsGrid limit={3} />
      </Section>
      <Section eyebrow="Client voices" title="What partners say about working with NexBak">
        <Testimonials />
      </Section>
      <Section eyebrow="FAQ" title="Common questions before we start">
        <FAQ />
      </Section>
      <FinalCTA />
    </>
  );
}
