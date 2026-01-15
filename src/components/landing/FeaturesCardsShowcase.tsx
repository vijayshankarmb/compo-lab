"use client"

import { motion } from "motion/react"
import Container from "../common/Container"
import {
  MousePointer2,
  Activity,
  Layers,
  LayoutGrid,
} from "lucide-react"

const features = [
  {
    icon: MousePointer2,
    title: "Interaction preview",
    description:
      "Preview hover, focus, and active states before writing production code. Catch issues early.",
  },
  {
    icon: Activity,
    title: "Motion timing control",
    description:
      "Test animation duration and easing visually so interactions feel right from day one.",
  },
  {
    icon: Layers,
    title: "State-driven components",
    description:
      "Explore component states in isolation to ensure consistent behavior across your UI.",
  },
  {
    icon: LayoutGrid,
    title: "Production-ready layouts",
    description:
      "Validate spacing, hierarchy, and structure with layouts that mirror real applications.",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-12">
      <Container>
        {/* Heading */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-tight">
            Built for real frontend work
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            CompoLab helps frontend teams explore interaction and motion early —
            so what you build feels right the first time.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, ease: "easeOut" },
                  },
                }}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="rounded-xl border border-border/50 bg-card p-6 shadow-sm"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="text-lg font-medium">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
