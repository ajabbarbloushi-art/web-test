'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import Container from '@/components/ui/Container'

const VALUES = [
    { title: 'Innovation', desc: 'Pioneering tech solutions that push the boundaries of what is possible.' },
    { title: 'Sustainability', desc: 'Committing to eco-friendly and socially responsible impact at every step.' },
    { title: 'Collaboration', desc: 'Enabling progress through integrity, trust, and shared community goals.' },
    { title: 'Impact', desc: 'Inspired by the story of turning darkness into light through smart solutions.' }
]

export default function About() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.about-reveal', {
                opacity: 0,
                y: 40,
                stagger: 0.2,
                duration: 1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 70%',
                }
            })
        })
        return () => ctx.revert()
    }, [])

    return (
        <section ref={containerRef} id="about" className="py-32 bg-light overflow-hidden">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    <div className="lg:col-span-12 mb-16">
                        <span className="about-reveal text-primary font-medium tracking-widest uppercase text-sm mb-6 block">
                            About AINAR
                        </span>
                        <h2 className="about-reveal text-6xl md:text-9xl font-display leading-[0.8] mb-12">
                            Turning Darkness <br />
                            <span className="text-secondary italic">Into Light.</span>
                        </h2>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="about-reveal text-2xl md:text-3xl font-sans text-dark/70 leading-relaxed space-y-8">
                            <p>
                                AINAR was founded to empower individuals and businesses by providing innovative,
                                sustainable digital solutions. From AI-driven systems to research consultancy,
                                we strive to inspire behavior change and foster growth.
                            </p>
                            <p>
                                Founded in 2025 by <span className="text-dark font-medium italic">Dr. Meryem Hamidi</span>,
                                we combine international expertise in sustainability and technology to deliver premium
                                services that transform communities.
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-5 flex flex-col gap-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {VALUES.map((val, i) => (
                                <div key={i} className="about-reveal p-8 rounded-2xl bg-white border border-dark/5 shadow-sm">
                                    <h4 className="text-xl font-display font-bold mb-3">{val.title}</h4>
                                    <p className="text-dark/50 leading-relaxed">{val.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Vision & Mission Row */}
                <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="about-reveal p-12 md:p-20 rounded-[3rem] bg-dark text-light overflow-hidden relative">
                        <div className="relative z-10">
                            <h3 className="text-4xl font-display italic mb-6">Our Vision</h3>
                            <p className="text-light/60 text-xl leading-relaxed">
                                To become a global leader in empowering communities to transform
                                the challenges of today into solutions for tomorrow by harnessing AI
                                and sustainable innovation.
                            </p>
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/20 blur-[80px] rounded-full" />
                    </div>

                    <div className="about-reveal p-12 md:p-20 rounded-[3rem] bg-primary text-light overflow-hidden relative">
                        <div className="relative z-10">
                            <h3 className="text-4xl font-display italic mb-6">Our Mission</h3>
                            <p className="text-light/80 text-xl leading-relaxed">
                                Providing innovative, sustainable, and empowering solutions through AI,
                                creative technologies, and human-centered approaches to improve lives globally.
                            </p>
                        </div>
                        <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary/30 blur-[80px] rounded-full" />
                    </div>
                </div>
            </Container>
        </section>
    )
}
