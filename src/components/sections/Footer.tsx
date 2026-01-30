'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Container from '@/components/ui/Container'
import { Linkedin, Mail } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
    const triggerRef = useRef<HTMLDivElement>(null)
    const circleRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: 'top 80%', // Triggers as soon as it enters view
                    end: 'bottom bottom',
                    scrub: 1,
                }
            })

            tl.to(circleRef.current, {
                scale: 30,
                ease: 'power3.inOut',
            })
                .to(contentRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.5
                }, '-=0.3')
        }, triggerRef)

        return () => ctx.revert()
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div ref={triggerRef} className="relative min-h-screen overflow-hidden flex flex-col justify-end bg-[#F3F2EF] -mt-32">
            {/* The Morph Circle - Positioned to emerge from under the FAQ CTA */}
            <div
                ref={circleRef}
                className="absolute top-48 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-dark z-0"
            />

            <footer
                ref={contentRef}
                className="relative z-10 w-full pt-32 pb-12 opacity-0 translate-y-20"
            >
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
                        <div className="lg:col-span-6">
                            <h2 className="text-5xl md:text-8xl font-display text-light mb-8 leading-[0.8]">
                                Let's Build the <br />
                                <span className="text-secondary italic">Future.</span>
                            </h2>
                            <p className="text-light/50 text-xl max-w-sm font-sans mb-12">
                                We empower individuals, businesses, and communities by providing innovative, sustainable digital solutions.
                            </p>

                            <div className="flex gap-4">
                                <a
                                    href="mailto:meryem.ham@gmail.com"
                                    className="flex items-center gap-2 px-8 py-4 bg-light text-dark rounded-full font-medium hover:bg-secondary transition-colors duration-300"
                                >
                                    <Mail size={20} />
                                    Get in Touch
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/meryemhamidi/"
                                    target="_blank"
                                    className="w-14 h-14 rounded-full border border-light/20 flex items-center justify-center text-light hover:bg-primary transition-all duration-300 shadow-xl"
                                >
                                    <Linkedin size={24} />
                                </a>
                            </div>
                        </div>

                        <div className="lg:col-span-3 lg:col-start-8">
                            <h4 className="text-light font-medium mb-8 tracking-widest uppercase text-sm">Navigation</h4>
                            <ul className="flex flex-col gap-4 text-light/60 text-lg">
                                <li className="hover:text-secondary cursor-pointer transition-colors">Hero</li>
                                <li className="hover:text-secondary cursor-pointer transition-colors">Projects</li>
                                <li className="hover:text-secondary cursor-pointer transition-colors">Services</li>
                                <li className="hover:text-secondary cursor-pointer transition-colors">About</li>
                                <li className="hover:text-secondary cursor-pointer transition-colors">FAQ</li>
                            </ul>
                        </div>

                        <div className="lg:col-span-2 lg:col-start-11">
                            <h4 className="text-light font-medium mb-8 tracking-widest uppercase text-sm">Services</h4>
                            <ul className="flex flex-col gap-4 text-light/60 text-lg">
                                <li className="hover:text-secondary cursor-pointer transition-colors">AI & R&D</li>
                                <li className="hover:text-secondary cursor-pointer transition-colors">Software Design</li>
                                <li className="hover:text-secondary cursor-pointer transition-colors">Digital Content</li>
                                <li className="hover:text-secondary cursor-pointer transition-colors">E-Commerce</li>
                            </ul>
                        </div>
                    </div>

                    <div className="pt-12 border-t border-light/10 flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="text-light/30 text-sm font-sans">
                            © 2025 AINAR (FZE). All Rights Reserved.
                        </div>

                        <div className="font-display text-3xl text-light italic flex items-center gap-3">
                            AINAR <span className="text-xl not-italic opacity-50">ينار</span>
                        </div>

                        <div className="flex gap-8 text-light/30 text-sm">
                            <span className="hover:text-light cursor-pointer transition-colors">Privacy Policy</span>
                            <span className="hover:text-light cursor-pointer transition-colors">Terms of Service</span>
                        </div>
                    </div>
                </Container>
            </footer>
        </div>
    )
}
