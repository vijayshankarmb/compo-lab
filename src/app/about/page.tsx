"use client"

import { motion } from "motion/react"
import Container from "@/components/common/Container"

export default function AboutPage() {
  return (
    <section className="py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl font-semibold tracking-tight">
            About CompoLab
          </h1>

          <p className="mt-6 text-lg text-muted-foreground">
            CompoLab is a frontend-focused playground designed to help teams
            explore UI structure, interaction, and motion before writing
            production code.
          </p>

          <p className="mt-4 text-lg text-muted-foreground">
            Instead of guessing how components should feel, CompoLab allows
            designers and engineers to validate layout, transitions, and
            interaction states early — reducing rework and improving quality.
          </p>

          <p className="mt-4 text-lg text-muted-foreground">
            It’s built with the same mindset as real products: calm motion,
            composable architecture, and production constraints in mind.
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
