'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

const MANIFESTO = [
    "AINAR was founded to empower individuals",
    "and businesses by providing innovative,",
    "sustainable digital solutions.",
    "From AI-driven systems to research consultancy,",
    "we strive to inspire behavior change and foster growth."
]

export default function About() {
    const containerRef = useRef<HTMLDivElement>(null)
    const manifestoRef = useRef<HTMLParagraphElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Manifesto Reveal
            const text = new SplitType(manifestoRef.current!, { types: 'words' })

            gsap.fromTo(text.words,
                { opacity: 0.1 },
                {
                    opacity: 1,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: manifestoRef.current,
                        start: 'top 80%',
                        end: 'bottom 60%',
                        scrub: true
                    }
                }
            )

            // Cards Reveal
            gsap.from('.mission-card', {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: '.mission-grid',
                    start: 'top 75%'
                }
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section id="about" ref={containerRef} className="py-32 bg-[#F3F2EF] relative overflow-hidden">
            <div className="max-w-[90vw] mx-auto">
                <div className="mb-32">
                    <span className="text-sm font-mono uppercase tracking-widest text-dark/40 mb-8 block">Who We Are</span>

                    <p ref={manifestoRef} className="text-4xl md:text-7xl font-display leading-[1.1] text-dark max-w-5xl">
                        {MANIFESTO.join(' ')}
                    </p>

                    <div className="mt-12 flex items-center gap-4">
                        <div className="h-[1px] w-24 bg-dark/20" />
                        <span className="text-xl italic text-dark/60 font-serif">
                            Founded by Dr. Meryem Hamidi
                        </span>
                    </div>
                </div>

                <div className="mission-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="mission-card lg:col-span-2 p-12 md:p-16 rounded-[2.5rem] bg-white shadow-xl relative overflow-hidden group">
                        <div className="relative z-10">
                            <h3 className="text-4xl font-display mb-6 group-hover:text-primary transition-colors">Our Vision</h3>
                            <p className="text-xl text-dark/60 leading-relaxed max-w-2xl">
                                To become a global leader in empowering communities to transform
                                the challenges of today into solutions for tomorrow by harnessing AI
                                and sustainable innovation.
                            </p>
                        </div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full" />
                    </div>

                    <div className="mission-card p-12 md:p-16 rounded-[2.5rem] bg-dark text-light shadow-xl relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-4xl font-display mb-6 italic text-secondary">Our Mission</h3>
                            <p className="text-lg text-white/70 leading-relaxed">
                                Providing innovative, sustainable, and empowering solutions through AI
                                and human-centered design.
                            </p>
                        </div>
                        <div className="absolute bottom-0 right-0 w-40 h-40 bg-secondary/20 blur-[50px] rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    )
}
