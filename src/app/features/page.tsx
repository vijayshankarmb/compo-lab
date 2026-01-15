"use client"

import { motion } from "motion/react"
import Container from "@/components/common/Container"
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
      "Explore hover, focus, and active states visually before committing to code.",
  },
  {
    icon: Activity,
    title: "Motion control",
    description:
      "Tune duration and easing so transitions feel intentional and consistent.",
  },
  {
    icon: Layers,
    title: "Component states",
    description:
      "Preview components across states to ensure predictable behavior.",
  },
  {
    icon: LayoutGrid,
    title: "Real layouts",
    description:
      "Validate spacing, hierarchy, and structure with production-like layouts.",
  },
]

export default function FeaturesPage() {
  return (
    <section className="py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-2xl"
        >
          <h1 className="text-5xl font-semibold tracking-tight">
            Features
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything in CompoLab is designed to support real frontend workflows
            — not demos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="rounded-xl border border-border/50 bg-card p-6"
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
        </div>
      </Container>
    </section>
  )
}
