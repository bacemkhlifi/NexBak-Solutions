"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const encode = (formData: FormData) => new URLSearchParams(formData as unknown as URLSearchParams).toString();

export function NetlifyContactForm() {
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
    <form name="project-request" onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:p-8">
      <input type="hidden" name="form-name" value="project-request" />
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
      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cyan px-6 text-sm font-semibold text-navy transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Sending..." : "Send Message"} <Send className="h-4 w-4" />
      </button>
      {status === "success" && <p className="mt-4 text-sm text-cyan">Thank you. Your request has been sent.</p>}
      {status === "error" && <p className="mt-4 text-sm text-red-300">Something went wrong. Please try again.</p>}
    </form>
  );
}
