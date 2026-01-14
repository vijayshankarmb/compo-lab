"use client"

import React, { useRef } from 'react'
import Container from '../common/Container';
import { Button } from '../ui/button'
import { WandSparkles } from 'lucide-react';
import { ChevronsRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from "motion/react"
import { useScroll, useTransform } from 'motion/react';

const Hero = () => {

    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],

    })
    const translateContent = useTransform(scrollYProgress, [0, 1], [-200, 200]);

    return (
        <section ref={ref} className="relative overflow-hidden pt-32 pb-24">
            <div className="pointer-events-none absolute inset-0 flex justify-center">
                <div className="h-105 w-105 rounded-full bg-blue-500/10 blur-3xl" />
            </div>
            <Container>
                <div className='flex flex-col justify-center items-center text-center gap-5'>
                    <div className="flex items-center gap-2 rounded-full border border-blue-400 bg-card px-4 py-2 text-sm text-blue-400">
                        <WandSparkles className="h-4 w-4 opacity-70" />
                        <span>Preview UI interactions before development</span>
                    </div>
                    <h1 className="max-w-4xl text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500">
                        Design, preview, and refine UI interactions — before development
                    </h1>
                    <p className="max-w-2xl text-xl text-muted-foreground">
                        CompoLab helps frontend teams preview components, motion, and
                        interaction states early — reducing rework and guesswork.
                    </p>
                    <div className='flex gap-6 mt-10'>
                            <Button variant="outline"
                                className="group relative px-8 py-6 text-base">
                                    <span className='absolute inset-x-0 bottom-px h-px w-full bg-linear-to-r from-blue-500/0 via-blue-500 to-blue-500/0 '></span>
                                    <span className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-x-0 bottom-px h-2 w-full bg-linear-to-r from-blue-500/0 via-blue-500 to-blue-500/0 blur-sm '></span>
                                Get Started
                            </Button>
                        <Button variant="ghost" className="px-8 py-6 text-base">
                            Learn more <ChevronsRight className="h-4 w-4" />
                        </Button>
                    </div>
                    <motion.div
                    style={
                        {y: translateContent}
                    }
                     className='mt-16 rounded-xl border-border/50 shadow-lg bg-card p-4'>
                        <Image
                            src="/preview.jpg"
                            alt="Product preview screenshot"
                            width={800}
                            height={800}
                        />
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}

export default Hero
