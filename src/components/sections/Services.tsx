'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import Container from '@/components/ui/Container'
import { Beaker, Code, Megaphone, ShoppingCart } from 'lucide-react'

const SERVICES = [
    {
        title: 'R&D Consultancy',
        description: 'Expert guidance in Innovation and AI. We research, analyze, and deliver strategic insights that drive future-proof growth.',
        icon: Beaker,
        color: 'text-primary'
    },
    {
        title: 'Software Design',
        description: 'Bespoke systems and software development optimized for scalability, performance, and user-centric impact.',
        icon: Code,
        color: 'text-secondary'
    },
    {
        title: 'Digital Content',
        description: 'Elevating brands through premium digital content creation that tells a compelling story of impact and sustainability.',
        icon: Megaphone,
        color: 'text-accent'
    },
    {
        title: 'E-Commerce',
        description: 'Innovative e-trading solutions and product strategies designed for the modern, connected, and green market.',
        icon: ShoppingCart,
        color: 'text-dark'
    }
]

export default function Services() {
    const containerRef = useRef<HTMLDivElement>(null)
    const listRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.service-card')

            // Setting up the pinned storytelling timeline
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: () => `+=${cards.length * 100}%`,
                    pin: true,
                    scrub: 1,
                    // MatchMedia handle automatically via GSAP usually, but we define end based on length
                }
            })

            cards.forEach((card, i) => {
                // Each card fades in and moves up
                tl.from(card as HTMLElement, {
                    opacity: 0,
                    y: 60,
                    duration: 0.8,
                    ease: 'power3.out'
                })
                    // Add a slight pause before the next one
                    .to({}, { duration: 0.4 })
            })
        })

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={containerRef}
            className="min-h-screen bg-dark text-light py-24 flex items-center"
        >
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-4">
                        <h2 className="text-5xl md:text-7xl font-display leading-[0.9] mb-6">
                            How AINAR <br />
                            <span className="text-secondary italic">Works.</span>
                        </h2>
                        <p className="text-light/60 text-lg max-w-sm">
                            We combine AI intelligence with human-centered approaches
                            to improve lives and boost businesses globally.
                        </p>
                    </div>

                    <div ref={listRef} className="lg:col-span-8 flex flex-col gap-8">
                        {SERVICES.map((service, index) => (
                            <div
                                key={index}
                                className="service-card group p-10 md:p-14 rounded-3xl bg-light/5 border border-light/10 hover:border-secondary/50 transition-colors duration-500"
                            >
                                <div className="flex items-start gap-8">
                                    <div className={service.color}>
                                        <service.icon size={48} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h3 className="text-3xl md:text-4xl font-display mb-4">
                                            {service.title}
                                        </h3>
                                        <p className="text-light/50 text-xl leading-relaxed max-w-xl">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}
