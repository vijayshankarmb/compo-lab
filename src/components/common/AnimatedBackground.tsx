"use client"

import { motion } from "motion/react"
import { ReactNode } from "react"

type Props = {
  children: ReactNode
  className?: string
}

export default function AnimatedBackground({ children, className }: Props) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Base gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(56,189,248,0.08),_transparent_60%),radial-gradient(ellipse_at_bottom,_rgba(99,102,241,0.06),_transparent_60%)]" />

      {/* Animated blobs */}
      <motion.div
        className="pointer-events-none absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl"
        animate={{
          x: [0, 120, -80, 0],
          y: [0, 60, -40, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="pointer-events-none absolute top-1/3 -right-32 h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-3xl"
        animate={{
          x: [0, -100, 60, 0],
          y: [0, -50, 40, 0],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
