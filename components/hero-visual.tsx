"use client";

import { motion } from "framer-motion";
import { Activity, Database, ShieldCheck, Workflow } from "lucide-react";

export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px]">
      <motion.div
        className="absolute inset-10 rounded-full border border-cyan/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-24 rounded-full border border-electric/30"
        animate={{ rotate: -360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-electric/20 via-cyan/10 to-transparent blur-3xl" />
      <div className="glass absolute left-1/2 top-1/2 w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-[2rem] p-5 shadow-glow">
        <div className="rounded-3xl border border-white/10 bg-navy/70 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-cyan">Live systems</p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-white">Digital command center</h3>
            </div>
            <Activity className="h-8 w-8 text-cyan" />
          </div>
          <div className="mt-6 grid gap-3">
            {[
              ["API latency", "38ms", "w-[82%]"],
              ["Automation load", "94%", "w-[94%]"],
              ["Cloud health", "99.9%", "w-[99%]"]
            ].map(([label, value, width]) => (
              <div key={label}>
                <div className="mb-2 flex justify-between text-xs text-slate-300">
                  <span>{label}</span>
                  <span>{value}</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <motion.div
                    className={`${width} h-2 rounded-full bg-gradient-to-r from-electric to-cyan`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    style={{ transformOrigin: "left" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {[
        { Icon: ShieldCheck, className: "left-0 top-16" },
        { Icon: Workflow, className: "right-0 top-28" },
        { Icon: Database, className: "bottom-20 left-10" }
      ].map(({ Icon, className }, index) => (
        <motion.div
          key={index}
          className={`glass absolute ${className} grid h-16 w-16 place-items-center rounded-2xl text-cyan shadow-cyan`}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon className="h-7 w-7" />
        </motion.div>
      ))}
    </div>
  );
}
