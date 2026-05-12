import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { navItems, services } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-navy dark:border-white/10 dark:bg-navy dark:text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-electric to-cyan font-display font-bold text-white">
                N
              </span>
              <span className="font-display text-lg font-semibold">NexBak Solutions</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600 dark:text-slate-400">
              Enterprise-ready consulting, software development, automation, and digital platforms for ambitious teams.
            </p>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Twitter, Github, Mail].map((Icon, index) => (
                <a
                  key={index}
                  href="https://example.com"
                  aria-label="NexBak social link"
                  className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-slate-600 transition hover:border-electric hover:text-electric dark:border-white/10 dark:text-slate-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Company</h3>
            <div className="mt-5 grid gap-3">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-slate-600 hover:text-electric dark:text-slate-400">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Services</h3>
            <div className="mt-5 grid gap-3">
              {services.slice(0, 6).map((service) => (
                <Link key={service.title} href="/services" className="text-sm text-slate-600 hover:text-electric dark:text-slate-400">
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
            <h3 className="font-display text-xl font-semibold">Join the NexBak briefing</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
              Monthly insights on product strategy, cloud systems, automation, and enterprise software.
            </p>
            <form className="mt-5 flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                aria-label="Email address"
                className="min-w-0 flex-1 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-electric/30 focus:ring-4 dark:border-white/10 dark:bg-navy"
              />
              <button type="submit" aria-label="Subscribe" className="grid h-12 w-12 place-items-center rounded-full bg-electric text-white">
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-8 text-sm text-slate-500 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 NexBak Solutions. All rights reserved.</p>
          <p>Built for scale, clarity, and long-term digital momentum.</p>
        </div>
      </div>
    </footer>
  );
}
