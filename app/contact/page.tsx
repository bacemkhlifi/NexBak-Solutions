import { Metadata } from "next";
import { Mail, MapPin, Phone, Send } from "lucide-react";
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
          <form
            name="project-request"
            method="POST"
            action="/thank-you"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:p-8"
          >
            <input type="hidden" name="form-name" value="project-request" />
            <p className="hidden">
              <label>
                Do not fill this out if you are human: <input name="bot-field" />
              </label>
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                { label: "Full name", name: "name", type: "text" },
                { label: "Work email", name: "email", type: "email" },
                { label: "Company", name: "company", type: "text" },
                { label: "Phone", name: "phone", type: "tel" }
              ].map((field) => (
                <label key={field.name} className="grid gap-2 text-sm text-slate-300">
                  {field.label}
                  <input
                    name={field.name}
                    type={field.type}
                    required={field.name === "name" || field.name === "email" || field.name === "phone"}
                    className="rounded-2xl border border-white/10 bg-navy/70 px-4 py-3 text-white outline-none ring-cyan/30 focus:ring-4"
                  />
                </label>
              ))}
            </div>
            <label className="mt-5 grid gap-2 text-sm text-slate-300">
              What do you need?
              <select
                name="project_type"
                required
                className="rounded-2xl border border-white/10 bg-navy/70 px-4 py-3 text-white outline-none ring-cyan/30 focus:ring-4"
              >
                <option value="">Select a service</option>
                <option value="Showcase website">Simple showcase website</option>
                <option value="E-commerce order website">E-commerce site with order requests</option>
                <option value="Custom software">Custom software or platform</option>
                <option value="Consulting">IT consulting</option>
              </select>
            </label>
            <label className="mt-5 grid gap-2 text-sm text-slate-300">
              Project details
              <textarea
                name="message"
                rows={6}
                required
                placeholder="Tell us about your products, services, order process, timeline, and budget."
                className="rounded-2xl border border-white/10 bg-navy/70 px-4 py-3 text-white outline-none ring-cyan/30 focus:ring-4"
              />
            </label>
            <button type="submit" className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cyan px-6 text-sm font-semibold text-navy transition hover:bg-white">
              Send Message <Send className="h-4 w-4" />
            </button>
          </form>
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
