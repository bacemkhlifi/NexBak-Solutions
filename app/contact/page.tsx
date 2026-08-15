import { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { NetlifyContactForm } from "@/components/netlify-contact-form";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact NexBak Solutions in Sfax, Tunisia for showcase websites, e-commerce order forms, IT consulting, and software development."
};

export default function ContactPage() {
  return (
    <>
      <Section className="bg-navy pt-36 text-white" eyebrow="Contact" title="Tell us what you want to build" description="Need a simple showcase website, e-commerce presence, or order request flow? Send us your details and NexBak Solutions will help you launch a clean digital experience.">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <NetlifyContactForm />
          <div className="grid gap-5">
            {[
              { icon: Mail, label: "Email", value: "hello@nexbaksolutions.com" },
              { icon: Phone, label: "Phone", value: "+216 23 109 107" },
              { icon: MapPin, label: "Studio", value: "Sfax, Tunisia" }
            ].map((item) => (
              <div key={item.label} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                <item.icon className="h-6 w-6 text-cyan" />
                <p className="mt-4 text-sm uppercase tracking-[0.22em] text-slate-400">{item.label}</p>
                <p className="mt-2 font-display text-xl font-semibold">{item.value}</p>
              </div>
            ))}
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
              <div className="grid h-72 place-items-center bg-[linear-gradient(135deg,rgba(37,99,235,0.45),rgba(6,182,212,0.22)),linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:auto,32px_32px,32px_32px]">
                <div className="rounded-full border border-white/20 bg-navy/70 px-5 py-3 text-sm text-slate-200 backdrop-blur">
                  Sfax, Tunisia map placeholder
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
