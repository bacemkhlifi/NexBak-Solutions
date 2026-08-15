import { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thank you for contacting NexBak Solutions."
};

export default function ThankYouPage() {
  return (
    <Section
      className="bg-navy pt-36 text-white"
      eyebrow="Request received"
      title="Thank you. We will contact you soon."
      description="Your message has been sent to NexBak Solutions. Our team in Sfax, Tunisia will review your request and get back to you."
    >
      <div className="text-center">
        <ButtonLink href="/">Back to Home</ButtonLink>
      </div>
    </Section>
  );
}
