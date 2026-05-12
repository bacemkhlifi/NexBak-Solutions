"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <nav className="glass mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full px-4 shadow-glow">
        <Link href="/" className="flex items-center gap-3" aria-label="NexBak Solutions home">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-electric to-cyan font-display text-base font-bold text-white">
            N
          </span>
          <span className="font-display text-sm font-semibold tracking-wide text-navy dark:text-white">
            NexBak Solutions
          </span>
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white",
                pathname === item.href && "bg-white/10 text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-cyan/60 hover:bg-cyan/10"
          >
            {mounted && theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Link
            href="/contact"
            className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-cyan md:inline-flex"
          >
            Start Project
          </Link>
          <button
            type="button"
            aria-label="Open navigation"
            onClick={() => setOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="glass mx-auto mt-3 max-w-7xl rounded-3xl p-3 lg:hidden">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="block rounded-2xl px-4 py-3 text-sm text-white hover:bg-white/10">
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
