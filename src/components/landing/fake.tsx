'use client'

import React, { useRef } from 'react'
import Container from '../common/Container';
import { Button } from '../ui/button'
import { WandSparkles, ChevronsRight } from 'lucide-react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from "motion/react"

const HeroFake = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })
    
    const translateContent = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 150]), 
        { stiffness: 100, damping: 30 }
    )

    return (
        <section ref={ref} className="relative overflow-hidden pt-32 pb-24 min-h-screen flex items-center">
            {/* --- MODERN BACKGROUND LAYER --- */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                {/* 1. Subtle Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

                {/* 2. Animated Gradient Blobs */}
                <motion.div 
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-[10%] left-[10%] h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[120px]" 
                />
                <motion.div 
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.3, 0.4, 0.3],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[5%] right-[10%] h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[100px]" 
                />
            </div>

            <Container>
                <div className='flex flex-col justify-center items-center text-center gap-5 relative z-10'>
                    {/* Badge */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/5 px-4 py-1.5 text-sm font-medium text-blue-400 backdrop-blur-md"
                    >
                        <WandSparkles className="h-4 w-4 opacity-70" />
                        <span>Preview UI interactions before development</span>
                    </motion.div>

                    {/* Main Title */}
                    <h1 className="max-w-4xl text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40 leading-tight">
                        Design, preview, and refine UI interactions
                    </h1>
                    
                    <p className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
                        CompoLab helps frontend teams preview components, motion, and
                        interaction states early — reducing rework and guesswork.
                    </p>

                    {/* Buttons */}
                    <div className='flex flex-wrap justify-center gap-4 mt-8'>
                        <Button className="relative px-8 py-6 text-base bg-blue-600 hover:bg-blue-500 text-white overflow-hidden group">
                             {/* Glow Effect for Button */}
                            <span className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                            Get Started
                        </Button>
                        <Button variant="ghost" className="px-8 py-6 text-base group">
                            Learn more 
                            <ChevronsRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>

                    {/* Preview Image with Parallax */}
                    <motion.div
                        style={{ y: translateContent }}
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className='mt-16 relative group'
                    >
                        {/* Shadow/Glow behind image */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                        
                        <div className='relative rounded-xl border border-white/10 shadow-2xl bg-neutral-900/50 backdrop-blur-sm p-2'>
                            <Image
                                src="/preview.jpg"
                                alt="Product preview screenshot"
                                width={1000}
                                height={600}
                                className="rounded-lg shadow-2xl border border-white/5"
                            />
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}

export default HeroFake