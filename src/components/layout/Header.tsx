'use client'

import { useState, useEffect } from 'react'
import Container from '@/components/ui/Container'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Projects', href: '#projects' },
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
        { name: 'FAQ', href: '#faq' },
    ]

    return (
        <header className={cn(
            "fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6",
            isScrolled ? "bg-light/80 backdrop-blur-md py-4 border-b border-dark/5" : "bg-transparent"
        )}>
            <Container className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="font-display text-2xl md:text-3xl text-dark italic font-bold">
                        AINAR <span className="text-lg not-italic opacity-40">ينار</span>
                    </div>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-dark/60 hover:text-primary transition-colors font-medium tracking-tight"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button className="px-6 py-3 bg-dark text-light rounded-full text-sm font-medium hover:bg-primary transition-colors duration-300">
                        Start a Project
                    </button>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-dark"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </Container>

            {/* Mobile Menu */}
            <div className={cn(
                "fixed inset-0 bg-light z-[60] flex flex-col items-center justify-center gap-8 transition-transform duration-700 md:hidden",
                isMenuOpen ? "translate-y-0" : "-translate-y-full"
            )}>
                <button
                    className="absolute top-8 right-8 text-dark"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <X size={32} />
                </button>
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-4xl font-display text-dark hover:text-primary transition-colors"
                    >
                        {link.name}
                    </a>
                ))}
                <button className="mt-8 px-10 py-5 bg-primary text-light rounded-full text-xl font-medium">
                    Contact Us
                </button>
            </div>
        </header>
    )
}
