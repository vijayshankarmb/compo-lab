"use client"

import { useState } from "react"
import { motion } from "motion/react"
import Container from "@/components/common/Container"
import { Button } from "@/components/ui/button"

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly")

  return (
    <section className="py-28">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <h1 className="text-5xl font-semibold tracking-tight">
            Pricing
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Simple plans that scale with your workflow.
          </p>

          {/* Toggle */}
          <div className="mt-8 inline-flex rounded-full border border-border p-1">
            {["monthly", "yearly"].map((type) => (
              <button
                key={type}
                onClick={() => setBilling(type as any)}
                className={`px-5 py-2 text-sm rounded-full transition ${
                  billing === type
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {type === "monthly" ? "Monthly" : "Yearly"}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            title="Free"
            price={billing === "monthly" ? "₹0" : "₹0"}
            description="For personal exploration and learning."
            features={[
              "Basic components",
              "Limited previews",
              "Community access",
            ]}
          />

          <PricingCard
            highlighted
            title="Pro"
            price={billing === "monthly" ? "₹1,499" : "₹14,999"}
            description="For professional frontend developers."
            features={[
              "All components",
              "Full interaction preview",
              "Advanced motion controls",
            ]}
          />

          <PricingCard
            title="Enterprise"
            price="Custom"
            description="For teams and organizations."
            features={[
              "Team collaboration",
              "Custom workflows",
              "Priority support",
            ]}
          />
        </div>
      </Container>
    </section>
  )
}

function PricingCard({
  title,
  price,
  description,
  features,
  highlighted,
}: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className={`rounded-xl border p-6 ${
        highlighted
          ? "border-primary bg-primary/5"
          : "border-border/50 bg-card"
      }`}
    >
      <h3 className="text-xl font-medium">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>

      <div className="mt-6 text-4xl font-semibold">{price}</div>

      <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
        {features.map((f: string, i: number) => (
          <li key={i}>• {f}</li>
        ))}
      </ul>

      <Button className="mt-8 w-full">
        {title === "Enterprise" ? "Contact sales" : "Get started"}
      </Button>
    </motion.div>
  )
}
