import { Metadata } from "next";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact NexBak Solutions for IT consulting, software development, automation, web platforms, and mobile applications."
};

export default function ContactPage() {
  return (
    <>
      <Section className="bg-navy pt-36 text-white" eyebrow="Contact" title="Tell us what you want to build" description="Share your product, platform, workflow, or transformation challenge. NexBak Solutions will help you shape the smartest path forward.">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <form className="rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              {["Full name", "Work email", "Company", "Phone"].map((label) => (
                <label key={label} className="grid gap-2 text-sm text-slate-300">
                  {label}
                  <input className="rounded-2xl border border-white/10 bg-navy/70 px-4 py-3 text-white outline-none ring-cyan/30 focus:ring-4" />
                </label>
              ))}
            </div>
            <label className="mt-5 grid gap-2 text-sm text-slate-300">
              Project details
              <textarea rows={6} className="rounded-2xl border border-white/10 bg-navy/70 px-4 py-3 text-white outline-none ring-cyan/30 focus:ring-4" />
            </label>
            <button type="submit" className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cyan px-6 text-sm font-semibold text-navy transition hover:bg-white">
              Send Message <Send className="h-4 w-4" />
            </button>
          </form>
          <div className="grid gap-5">
            {[
              { icon: Mail, label: "Email", value: "hello@nexbaksolutions.com" },
              { icon: Phone, label: "Phone", value: "+1 (555) 018-2048" },
              { icon: MapPin, label: "Studio", value: "Global remote team · Lagos, London, Toronto" }
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
                  Google Maps placeholder
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
