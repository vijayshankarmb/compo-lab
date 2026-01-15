"use client"

import { motion } from "motion/react"
import Container from "../common/Container"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-border/50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="py-16"
        >
          {/* Top grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">CompoLab</h3>
              <p className="text-sm text-muted-foreground max-w-xs">
                A calm, production-focused space to explore UI, motion, and
                interaction before development.
              </p>
            </div>

            {/* Product */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/features" className="hover:text-foreground transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-foreground transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom row */}
          <div className="mt-14 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border/50 pt-6 text-sm text-muted-foreground">
            <span>© {new Date().getFullYear()} CompoLab. All rights reserved.</span>
            <span>Built for frontend engineers.</span>
          </div>

          {/* Big brand signature */}
          <div className="pointer-events-none mt-10 mb-20  select-none text-center">
            <h2
            style={{
                scale: "1.5"
            }}
              className="
                text-9xl
                font-bold
                leading-none
                tracking-tight
                bg-gradient-to-b
                from-neutral-50
                to-neutral-800
                bg-clip-text
                text-transparent
                opacity-70
              "
            >
              CompoLab
            </h2>
          </div>
        </motion.div>
      </Container>
    </footer>
  )
}
