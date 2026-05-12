import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Reveal, MotionCard } from "@/components/animated";
import { Section } from "@/components/section";
import { ButtonLink } from "@/components/button-link";
import { capabilities, clients, faq, process, projects, services, stats, techStack, testimonials } from "@/lib/data";

export function StatsGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Reveal key={stat.label} delay={index * 0.05}>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="font-display text-4xl font-semibold text-electric">{stat.value}</div>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function ServicesGrid({ limit }: { limit?: number }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {services.slice(0, limit ?? services.length).map((service, index) => (
        <Reveal key={service.title} delay={index * 0.04}>
          <MotionCard className="h-full">
            <div className="group h-full rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:border-electric/50 dark:border-white/10 dark:bg-white/5">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-electric/10 text-electric group-hover:bg-electric group-hover:text-white">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-navy dark:text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">{service.description}</p>
              <div className="mt-5 grid gap-2">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-cyan" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700 dark:bg-navy/60 dark:text-slate-300">
                {service.benefits}
              </p>
            </div>
          </MotionCard>
        </Reveal>
      ))}
    </div>
  );
}

export function TechCarousel() {
  const items = [...techStack, ...techStack];
  return (
    <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white py-5 dark:border-white/10 dark:bg-white/5">
      <div className="marquee-track flex w-max gap-4 px-4">
        {items.map((tech, index) => (
          <div
            key={`${tech}-${index}`}
            className="flex h-16 min-w-40 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 px-5 text-sm font-semibold text-slate-700 dark:border-white/10 dark:bg-navy/70 dark:text-slate-200"
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProcessTimeline() {
  return (
    <div className="relative grid gap-5 lg:grid-cols-4">
      {process.map((step, index) => (
        <Reveal key={step.title} delay={index * 0.08}>
          <div className="relative h-full rounded-[2rem] border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
            <div className="mb-8 flex items-center justify-between">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-electric to-cyan font-display font-semibold text-white">
                {index + 1}
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Phase</span>
            </div>
            <h3 className="font-display text-xl font-semibold text-navy dark:text-white">{step.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">{step.description}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function ProjectsGrid({ limit }: { limit?: number }) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {projects.slice(0, limit ?? projects.length).map((project, index) => (
        <Reveal key={project.title} delay={index * 0.05}>
          <MotionCard className="h-full">
            <article className="h-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/5">
              <div className={`relative h-64 bg-gradient-to-br ${project.gradient}`}>
                <div className="absolute inset-6 rounded-[1.5rem] border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                  <div className="flex h-full flex-col justify-between rounded-2xl bg-navy/55 p-4">
                    <div className="flex justify-between">
                      <span className="rounded-full bg-cyan/15 px-3 py-1 text-xs text-cyan">{project.category}</span>
                      <ArrowUpRight className="h-5 w-5 text-white" />
                    </div>
                    <div className="grid gap-2">
                      <div className="h-2 w-2/3 rounded-full bg-white/60" />
                      <div className="h-2 w-1/2 rounded-full bg-white/30" />
                      <div className="mt-4 grid grid-cols-3 gap-2">
                        <div className="h-14 rounded-xl bg-white/15" />
                        <div className="h-14 rounded-xl bg-cyan/25" />
                        <div className="h-14 rounded-xl bg-white/10" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold text-navy dark:text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">{project.description}</p>
                <p className="mt-4 text-sm font-medium text-electric">{project.impact}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700 dark:bg-white/10 dark:text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </MotionCard>
        </Reveal>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {testimonials.map((testimonial, index) => (
        <Reveal key={testimonial.name} delay={index * 0.06}>
          <div className="h-full rounded-[2rem] border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">“{testimonial.quote}”</p>
            <div className="mt-6">
              <p className="font-semibold text-navy dark:text-white">{testimonial.name}</p>
              <p className="text-sm text-slate-500">{testimonial.role}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function FAQ() {
  return (
    <div className="mx-auto max-w-4xl divide-y divide-slate-200 rounded-[2rem] border border-slate-200 bg-white dark:divide-white/10 dark:border-white/10 dark:bg-white/5">
      {faq.map((item) => (
        <details key={item.question} className="group p-6">
          <summary className="cursor-pointer list-none font-display text-lg font-semibold text-navy dark:text-white">
            {item.question}
          </summary>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function ClientLogos() {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
      {clients.map((client) => (
        <div key={client} className="grid h-24 place-items-center rounded-2xl border border-slate-200 bg-white px-4 text-center text-sm font-semibold text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
          {client}
        </div>
      ))}
    </div>
  );
}

export function CapabilityGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {capabilities.map((item, index) => (
        <Reveal key={item.title} delay={index * 0.03}>
          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-cyan/10 text-cyan">
              <item.icon className="h-5 w-5" />
            </span>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{item.title}</span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function FinalCTA() {
  return (
    <Section className="bg-navy">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-radial-grid p-8 text-center shadow-glow sm:p-12">
        <div className="absolute inset-0 bg-gradient-to-br from-electric/15 via-transparent to-cyan/10" />
        <div className="relative mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan">Start smarter</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Turn your next platform idea into a scalable digital advantage.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            Bring us your workflow, product, or transformation challenge. We will help shape it into a polished, secure, high-performing solution.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/contact">Start Your Project</ButtonLink>
            <ButtonLink href="/portfolio" variant="secondary">View Work</ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function LinkedSectionCTA() {
  return (
    <div className="mt-10 text-center">
      <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-electric hover:text-cyan">
        Explore all services <ArrowUpRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
