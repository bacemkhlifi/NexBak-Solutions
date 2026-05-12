import { Metadata } from "next";
import { Section } from "@/components/section";
import { FinalCTA, ServicesGrid, TechCarousel } from "@/components/site-sections";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore NexBak Solutions services, including IT consulting, web development, mobile apps, enterprise software, cloud, automation, UI/UX, and support."
};

export default function ServicesPage() {
  return (
    <>
      <Section className="bg-navy pt-36 text-white" eyebrow="Services" title="Premium technology services for scalable digital products" description="NexBak Solutions supports businesses across advisory, design, engineering, cloud infrastructure, workflow automation, and product evolution.">
        <ServicesGrid />
      </Section>
      <Section eyebrow="Delivery stack" title="The technologies we use to move fast and stay reliable">
        <TechCarousel />
      </Section>
      <FinalCTA />
    </>
  );
}
