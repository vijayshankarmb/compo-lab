import React from 'react'
import Link from 'next/link'
import Container from './Container'
import { NavbarConfig } from '@/config/Navbar'
import { Button } from '../ui/button'

const Navbar = () => {
    return (
        <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
            <Container>
                <div className='flex h-16 items-center justify-between'>
                    <div className='flex items-center gap-6'>
                        <Link href="/" className="flex items-center space-x-2">
                            <span className="font-bold text-lg tracking-tight">CompoLab</span>
                        </Link>
                    </div>
                    <nav className="flex items-center gap-6 text-sm font-medium">
                        {
                            NavbarConfig.navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className='transition-all hover:text-foreground/80 duration-300 ease-in-out hover:underline text-foreground/60'
                                >
                                    {item.label}
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
