import React from 'react'
import Link from 'next/link'
import Container from './Container'
import { NavbarConfig } from '@/config/Navbar'
import Image from 'next/image'
import { Button } from '../ui/button'

const Navbar = () => {
    return (
        <Container className='sticky top-0 z-50 py-6 backdrop-blur-sm'>
            <div className='flex justify-between border-b p-4 border-default'>
                <div className='flex items-baseline gap-4'>
                    <Link href="/">
                        <Image
                            src={NavbarConfig.logo.src}
                            alt={NavbarConfig.logo.alt}
                            width={80}
                            height={80}
                        />
                    </Link>
                </div>
                <div className='flex items-center gap-4'>
                    {
                        NavbarConfig.navItems.map((item) => (
                            <Link
                                className='transition-all duration-300 ease-in-out hover:underline'
                                key={item.label}
                                href={item.href}
                                >
                                {item.label}
                            </Link>
                        ))
                    }
                </div>
                <div className='flex justify-center items-cente gap-4'>
                    <Button variant="outline" size="sm">
                        Login
                    </Button>
                    <Button variant="default" size="sm">
                        SignUp
                    </Button>
                </div>
            </div>
        </Container>
    )
}

export default Navbar
