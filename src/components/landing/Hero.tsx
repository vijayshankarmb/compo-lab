import React from 'react'
import Container from '../common/Container';
import { Button } from '../ui/button'
import { WandSparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative overflow-hidden pt-32 pb-24">
            <div className="pointer-events-none absolute inset-0 flex justify-center">
                <div className="h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-3xl" />
            </div>
            <Container>
                <div className='flex flex-col justify-center items-center text-center gap-5'>
                              <div className="flex items-center gap-2 rounded-full border border-blue-400 bg-card px-4 py-2 text-sm text-blue-400">
                                <WandSparkles className="h-4 w-4 opacity-70" />
                                <span>Preview UI interactions before development</span>
                              </div>
               <h1 className="max-w-4xl text-6xl font-bold tracking-tight">
            Design, preview, and refine UI interactions — before development
          </h1>
                  <p className="max-w-2xl text-xl text-muted-foreground">
            CompoLab helps frontend teams preview components, motion, and
            interaction states early — reducing rework and guesswork.
          </p>
                    <div className='flex gap-6 mt-10'>
                        <div>
                            <Button variant="default"
                            className="px-8 py-6 text-base">
                                Get Started
                            </Button>
                        </div>
                                  <Button variant="outline" className="px-8 py-6 text-base">
                                      Learn more
                                    </Button>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Hero
