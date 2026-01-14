'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Container from './Container'
import { NavbarConfig } from '@/config/Navbar'
import { Button } from '../ui/button'
import { motion } from 'motion/react'

const Navbar = () => {

    const [hovered, setHovered] = useState<number | null>(null)

    return (
        <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
            <Container>
                <div className='flex h-16 items-center justify-between'>
                    <div className='flex items-center gap-6'>
                        <Link href="/" className="flex items-center space-x-2">
                            <span className="font-bold text-lg tracking-tight">CompoLab</span>
                        </Link>
                    </div>
                    <nav 
                    onMouseLeave={() => setHovered(null)}
                    className="flex items-center gap-2 text-sm font-medium"
                    >
                        {
                            NavbarConfig.navItems.map((item, idx) => (
                                <Link
                                    onMouseEnter={() => setHovered(idx)}
                                    key={item.label}
                                    href={item.href}
                                    className='relative group w-full px-4 py-2'
                                >
                                    {hovered === idx &&
                                     <motion.div 
                                     layoutId="nav-hover-pill"
                                     className='absolute inset-0 rounded-full w-full h-full bg-primary '
                                     ></motion.div> 
                                    }
                                    <span className={`relative z-10 transition-colors duration-300 ${
                                    hovered === idx ? 'text-primary-foreground' : 'text-foreground/60'
                                }`}>
                                        {item.label}
                                    </span>
                                </Link>
                            ))
                        }
                    </nav>

                    <div className='flex items-center gap-4'>
                        <Button variant="ghost" size="sm" className="text-foreground/60 hover:text-foreground">
                            Login
                        </Button>
                        <Button
                            size="sm"
                            className="bg-primary text-primary-foreground hover:bg-primary/80"
                        >
                            Sign Up
                        </Button>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Navbar
