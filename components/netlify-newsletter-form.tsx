"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const encode = (formData: FormData) => new URLSearchParams(formData as unknown as URLSearchParams).toString();

export function NetlifyNewsletterForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(formData)
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <form name="newsletter" onSubmit={handleSubmit} className="mt-5 flex gap-2">
        <input type="hidden" name="form-name" value="newsletter" />
        <input
          name="email"
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-1 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-electric/30 focus:ring-4 dark:border-white/10 dark:bg-navy"
        />
        <button
          type="submit"
          aria-label="Subscribe"
          disabled={status === "submitting"}
          className="grid h-12 w-12 place-items-center rounded-full bg-electric text-white disabled:cursor-not-allowed disabled:opacity-70"
        >
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </form>
      {status === "success" && <p className="mt-3 text-sm text-electric dark:text-cyan">Subscribed. Thank you.</p>}
      {status === "error" && <p className="mt-3 text-sm text-red-500 dark:text-red-300">Subscription failed. Please try again.</p>}
    </>
  );
}
