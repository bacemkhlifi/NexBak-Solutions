import { Metadata } from "next";
import { Section } from "@/components/section";
import { FinalCTA, StatsGrid } from "@/components/site-sections";
import { team, values } from "@/lib/data";
import { Reveal } from "@/components/animated";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about NexBak Solutions, our mission, values, expertise, and team."
};

export default function AboutPage() {
  return (
    <>
      <Section className="bg-navy pt-36 text-white" eyebrow="About NexBak" title="A software consulting partner for ambitious transformation" description="We help organizations translate business ambition into practical digital systems, from early product strategy to enterprise-grade platforms.">
        <div className="grid gap-6 lg:grid-cols-3">
          {["Company story", "Mission", "Vision"].map((title, index) => (
            <Reveal key={title} delay={index * 0.07}>
              <div className="h-full rounded-[2rem] border border-white/10 bg-white/5 p-6">
                <h3 className="font-display text-2xl font-semibold">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {index === 0 &&
                    "NexBak Solutions was created for companies that need more than code. We blend consulting, design, and engineering to build platforms that support real operations and growth."}
                  {index === 1 &&
                    "Our mission is to make modern technology practical, scalable, and measurable for businesses ready to improve how they serve customers and run teams."}
                  {index === 2 &&
                    "Our vision is to become a trusted global technology partner for organizations building intelligent, connected, and resilient digital ecosystems."}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section eyebrow="Experience" title="Strategy, design, engineering, and operations under one roof">
        <StatsGrid />
      </Section>
      <Section eyebrow="Core values" title="The principles behind our work">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.06}>
              <div className="h-full rounded-[2rem] border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-electric/10 text-electric">
                  <value.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-navy dark:text-white">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">{value.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section eyebrow="Team" title="Senior specialists across product and technology" description="Realistic placeholder profiles representing the type of cross-functional team NexBak brings to complex engagements.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.06}>
              <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white dark:border-white/10 dark:bg-white/5">
                <div className="h-56 bg-gradient-to-br from-electric via-cyan to-slate-900" />
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-navy dark:text-white">{member.name}</h3>
                  <p className="mt-1 text-sm font-medium text-electric">{member.role}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">{member.expertise}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <FinalCTA />
    </>
  );
}
