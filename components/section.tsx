import { cn } from "@/lib/utils";

type SectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function Section({ eyebrow, title, description, children, className, id }: SectionProps) {
  const darkPanel = typeof className === "string" && className.includes("bg-navy");

  return (
    <section id={id} className={cn("relative overflow-hidden py-20 sm:py-28", className)}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {(eyebrow || title || description) && (
          <div className="mx-auto mb-12 max-w-3xl text-center">
            {eyebrow && (
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-cyan">{eyebrow}</p>
            )}
            {title && (
              <h2 className={cn("font-display text-3xl font-semibold tracking-tight text-balance sm:text-5xl", darkPanel ? "text-white" : "text-navy dark:text-white")}>
                {title}
              </h2>
            )}
            {description && (
              <p className={cn("mt-5 text-base leading-8 sm:text-lg", darkPanel ? "text-slate-300" : "text-slate-600 dark:text-slate-300")}>
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
