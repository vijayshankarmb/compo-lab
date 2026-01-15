"use client"

import { motion } from "motion/react"
import Container from "../common/Container"
import { PencilRuler, PlayCircle, Code2 } from "lucide-react"

const steps = [
  {
    icon: PencilRuler,
    title: "Design components",
    description:
      "Start with structure and layout. Focus on hierarchy, spacing, and clarity before adding motion.",
  },
  {
    icon: PlayCircle,
    title: "Preview interactions",
    description:
      "Test hover, focus, and transition behavior early so interactions feel natural and intentional.",
  },
  {
    icon: Code2,
    title: "Build with confidence",
    description:
      "Move to development knowing exactly how components behave across states and screens.",
  },
]

export default function WorkflowSection() {
  return (
    <section className="py-28">
      <Container>
        {/* Header */}
        <div className="mb-20 max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-tight">
            A workflow that fits how teams actually work
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore ideas visually, validate interactions early, and move to
            development with confidence — without guessing how things should feel.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Connecting line */}
          <div className="pointer-events-none absolute top-10 left-0 right-0 hidden md:block">
            <div className="h-px w-full bg-border" />
            <motion.div
              className="absolute top-0 h-px w-1/3 bg-primary"
              initial={{ x: "-100%" }}
              whileInView={{ x: "0%" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </div>

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative rounded-xl border border-border/50 bg-card p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="text-lg font-medium">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
