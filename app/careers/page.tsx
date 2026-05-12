import { Metadata } from "next";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/section";
import { FinalCTA } from "@/components/site-sections";
import { positions } from "@/lib/data";
import { Reveal } from "@/components/animated";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join NexBak Solutions and help build premium digital platforms, enterprise systems, and automation products."
};

export default function CareersPage() {
  const benefits = ["Remote-friendly culture", "High-impact client projects", "Learning budget", "Modern tools", "Flexible delivery rituals", "Strong engineering standards"];

  return (
    <>
      <Section className="bg-navy pt-36 text-white" eyebrow="Careers" title="Build meaningful software with a team that values craft" description="NexBak Solutions is shaped for curious builders who care about elegant products, clear communication, and durable technology.">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <h3 className="font-display text-3xl font-semibold">Culture at NexBak</h3>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              We work in focused teams where consultants, designers, and engineers collaborate from the first discovery conversation through launch and continuous improvement.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm">
                <CheckCircle2 className="h-5 w-5 text-cyan" />
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section eyebrow="Open roles" title="Opportunities for ambitious builders">
        <div className="grid gap-4">
          {positions.map((position, index) => (
            <Reveal key={position.title} delay={index * 0.05}>
              <div className="flex flex-col justify-between gap-4 rounded-[2rem] border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/5 md:flex-row md:items-center">
                <div>
                  <h3 className="font-display text-xl font-semibold text-navy dark:text-white">{position.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">{position.location} · {position.type}</p>
                </div>
                <a href="mailto:careers@nexbaksolutions.com" className="inline-flex items-center gap-2 text-sm font-semibold text-electric">
                  Apply now <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section eyebrow="Why join" title="A place for people who like complex work made clear">
        <div className="grid gap-5 md:grid-cols-3">
          {["Own important problems", "Work with modern stacks", "Grow with senior peers"].map((item) => (
            <div key={item} className="rounded-[2rem] border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
              <h3 className="font-display text-xl font-semibold text-navy dark:text-white">{item}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                Join a consulting environment where product quality, technical judgment, and client outcomes carry equal weight.
              </p>
            </div>
          ))}
        </div>
      </Section>
      <FinalCTA />
    </>
  );
}
