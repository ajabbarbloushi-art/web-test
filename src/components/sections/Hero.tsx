'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Container from '@/components/ui/Container'

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null)
    const title1Ref = useRef<HTMLSpanElement>(null)
    const title2Ref = useRef<HTMLSpanElement>(null)
    const subtextRef = useRef<HTMLDivElement>(null)
    const motifRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.4 } })

            tl.fromTo(motifRef.current,
                { opacity: 0, scale: 0.8 },
                { opacity: 0.15, scale: 1, duration: 2.5 }
            )
                .fromTo([title1Ref.current, title2Ref.current],
                    { y: 100, opacity: 0 },
                    { y: 0, opacity: 1, stagger: 0.2 },
                    '-=1.8'
                )
                .fromTo(subtextRef.current,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1 },
                    '-=1'
                )

            // Parallax effect on scroll
            gsap.to(containerRef.current, {
                yPercent: 15,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                }
            })
        })
        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-light py-20"
        >
            {/* UAE Inspired Motif - Subtle Background Element */}
            <div
                ref={motifRef}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square opacity-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, var(--color-secondary) 0%, transparent 70%)',
                    filter: 'blur(100px)',
                }}
            />

            <Container className="relative z-10 text-center">
                <div className="flex flex-col items-center gap-6">
                    <h1 className="flex flex-col text-[12vw] md:text-[8vw] leading-[0.9] font-display text-dark tracking-tight">
                        <span ref={title1Ref} className="block overflow-hidden">
                            Sustainability
                        </span>
                        <span ref={title2Ref} className="block overflow-hidden text-primary italic">
                            in Our Roots.
                        </span>
                    </h1>

                    <div ref={subtextRef} className="max-w-2xl mt-8">
                        <p className="text-xl md:text-2xl text-dark/70 font-sans leading-relaxed">
                            Intelligence for Our Future. AI-powered sustainability solutions
                            and app that reward green behavior and drive real impact.
                        </p>

                        <div className="mt-12 flex flex-wrap justify-center gap-6">
                            <button className="px-8 py-4 bg-primary text-light rounded-full font-medium hover:bg-dark transition-colors duration-300">
                                Explore Services
                            </button>
                            <button className="px-8 py-4 border border-dark/20 text-dark rounded-full font-medium hover:bg-dark hover:text-light transition-all duration-300">
                                Join the Waitlist
                            </button>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Decorative Arabic Text Placeholder for Hero */}
            <div className="absolute bottom-10 right-10 opacity-10 font-display text-6xl select-none pointer-events-none hidden md:block">
                ينار
            </div>
        </section>
    )
}
