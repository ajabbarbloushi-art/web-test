'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import { ArrowDown, ArrowRight } from 'lucide-react'
import MagneticButton from '@/components/ui/MagneticButton'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const subtextRef = useRef<HTMLDivElement>(null)
    const ctaRef = useRef<HTMLDivElement>(null)
    const scrollIndRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Split text initialization
            const titleSplit = new SplitType(titleRef.current!, { types: 'chars,words' })

            // Timeline
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

            // 1. Initial State Set
            gsap.set(titleSplit.chars, { yPercent: 100, opacity: 0 })
            gsap.set([subtextRef.current, ctaRef.current, scrollIndRef.current], {
                y: 20,
                opacity: 0
            })

            // 2. Animation Sequence
            tl.to(titleSplit.chars, {
                yPercent: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.02,
                delay: 0.2
            })
                .to(subtextRef.current, {
                    y: 0,
                    opacity: 1,
                    duration: 0.8
                }, '-=0.6')
                .to(ctaRef.current, {
                    y: 0,
                    opacity: 1,
                    duration: 0.8
                }, '-=0.6')
                .to(scrollIndRef.current, {
                    y: 0,
                    opacity: 0.5,
                    duration: 0.8
                }, '-=0.4')

            // 3. Scroll Parallax
            gsap.to(titleRef.current, {
                yPercent: 50,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#F3F2EF] px-4 md:px-8"
        >
            {/* Background Pattern - Subtle Grain/Noise could go here */}
            <div className="absolute inset-0 bg-[#F3F2EF] z-0" />

            <div className="relative z-10 flex flex-col items-center text-center max-w-[90vw]">
                {/* Massive Typography Hero */}
                <h1
                    ref={titleRef}
                    className="flex flex-col items-center leading-[0.85] tracking-tight text-dark font-display"
                >
                    <span className="text-[13vw] md:text-[14vw] font-bold overflow-hidden block">
                        SUSTAINABILITY
                    </span>
                    <span className="text-[14vw] md:text-[15vw] font-medium italic text-primary overflow-hidden block -mt-[1vw] md:-mt-[2vw]">
                        IN OUR ROOTS
                    </span>
                </h1>

                {/* Subtext and CTAs */}
                <div className="mt-12 md:mt-16 flex flex-col items-center gap-10">
                    <div ref={subtextRef} className="max-w-xl text-lg md:text-xl text-dark/70 font-sans leading-relaxed text-balance">
                        <p>
                            Where artificial intelligence meets environmental impact.
                            We build the systems that power a sustainable future.
                        </p>
                    </div>

                    <div ref={ctaRef} className="flex flex-wrap items-center justify-center gap-6">
                        <MagneticButton variant="primary" className="h-16 px-10 text-lg">
                            Explore Solutions <ArrowRight className="w-5 h-5" />
                        </MagneticButton>
                        <MagneticButton variant="outline" className="h-16 px-10 text-lg">
                            Join Waitlist
                        </MagneticButton>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div
                ref={scrollIndRef}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-dark/40"
            >
                <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
                <ArrowDown className="w-5 h-5 animate-bounce duration-[2s]" />
            </div>

            {/* Hidden Aesthetic Elements */}
            <div className="absolute top-[20%] right-[10%] opacity-5 mix-blend-multiply pointer-events-none blur-[100px] w-[40vw] h-[40vw] bg-primary rounded-full animate-pulse duration-[10s]" />
            <div className="absolute bottom-[10%] left-[5%] opacity-5 mix-blend-multiply pointer-events-none blur-[80px] w-[30vw] h-[30vw] bg-secondary rounded-full" />
        </section>
    )
}
