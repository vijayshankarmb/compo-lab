"use client"

import { motion, useMotionTemplate } from "motion/react"
import Container from "../common/Container"
import ReactIcon from "@/config/ReactIcon"
import TailwindCss from "@/config/TailwindCss"
import { useRef } from "react"
import { useScroll, useTransform, useSpring } from "motion/react"

const OrbitSection = () => {

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const blur = useTransform(scrollYProgress, [0.7, 1], [0, 10])
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.8])
  const translateContent = useSpring(
    useTransform(scrollYProgress, [0, 1], [-100, 100]), 
    {
      stiffness: 100,
      damping: 30,
      mass: 1
    }
  )

  return (
    <section className="py-32 overflow-hidden">
      <Container>
        <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div 
          style={{
            filter: useMotionTemplate`blur(${blur}px)`,
            scale
          }}
          className="space-y-6">
            <h2 className="text-4xl font-semibold tracking-tight">
              See UI interactions in motion
            </h2>

            <p className="text-lg text-muted-foreground max-w-xl">
              Instead of guessing how components behave, CompoLab lets you preview
              motion and interaction states early — so nothing feels off once you
              start building.
            </p>

            <ul className="space-y-3 text-muted-foreground">
              <li>• Watch hover and focus states play out</li>
              <li>• Compare motion timings side by side</li>
              <li>• Catch awkward transitions before code</li>
            </ul>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div 
          style={{
            y: translateContent,
            scale,
          }}
          className="relative flex items-center justify-center h-105 mt-10">

            {/* OUTER ORBIT */}
            <motion.div
              className="absolute h-80 w-[320px] rounded-full border-2 border-border"
              animate={{ rotate: -360 }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              }}
            >
              <motion.div
                className="absolute -top-4 left-1/2 -translate-x-1/2"
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 30,
                  ease: "linear",
                }}
              >
                <div className="h-10 w-10 rounded-full bg-card shadow-md flex items-center justify-center">
                <ReactIcon/>
                </div>
              </motion.div>
            </motion.div>

            {/* INNER ORBIT */}
            <motion.div
              className="absolute h-50 w-[200px] rounded-full border-2 border-border"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 18,
                ease: "linear",
              }}
            >
              <motion.div
                className="absolute -top-4 left-1/2 -translate-x-1/2"
                animate={{ rotate: -360 }}
                transition={{
                  repeat: Infinity,
                  duration: 18,
                  ease: "linear",
                }}
              >
                <div className="h-10 w-10 rounded-full bg-card shadow-md flex items-center justify-center">
                <TailwindCss/>
                </div>
              </motion.div>
            </motion.div>

            {/* CENTER NODE */}
            <div className="h-16 w-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-sm font-medium">
              UI
            </div>

          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default OrbitSection
