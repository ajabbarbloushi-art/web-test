'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import Container from '@/components/ui/Container'
import { cn } from '@/lib/utils'

const PROJECTS = [
    {
        id: 1,
        title: 'Sustainability OS',
        category: 'R&D Consultancy',
        description: 'AI-powered framework for measuring and optimizing institutional sustainability.',
        color: 'bg-primary'
    },
    {
        id: 2,
        title: 'Ainar Flow',
        category: 'Software Design',
        description: 'Bespoke software solutions driving efficiency through intelligent automation.',
        color: 'bg-secondary'
    },
    {
        id: 3,
        title: 'E-Trade Connect',
        category: 'E-Commerce',
        description: 'Global trading platform for sustainable products and carbon-neutral logistics.',
        color: 'bg-accent'
    },
    {
        id: 4,
        title: 'Digital Pulse',
        category: 'Content Creation',
        description: 'Narrative-driven digital content that amplifies sustainability impact.',
        color: 'bg-dark'
    }
]

export default function Projects() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const triggerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const pin = gsap.to(sectionRef.current, {
                xPercent: -100 * (PROJECTS.length - 1),
                ease: 'none',
                scrollTrigger: {
                    trigger: triggerRef.current,
                    pin: true,
                    scrub: 1,
                    start: 'top top',
                    end: () => `+=${triggerRef.current?.offsetWidth || 0}`,
                    anticipatePin: 1,
                    // MatchMedia for mobile safety
                    invalidateOnRefresh: true,
                }
            })
        })

        return () => ctx.revert()
    }, [])

    return (
        <section ref={triggerRef} className="overflow-hidden">
            <div
                ref={sectionRef}
                className="flex w-[400vw] h-screen items-center"
            >
                {PROJECTS.map((project, index) => (
                    <div
                        key={project.id}
                        className="w-screen h-full flex flex-col justify-center px-12 md:px-24"
                    >
                        <div className="max-w-4xl">
                            <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">
                                {project.category}
                            </span>
                            <h2 className="text-[10vw] md:text-[8vw] font-display text-dark leading-none mb-8">
                                {project.title}
                            </h2>
                            <p className="text-xl md:text-2xl text-dark/60 max-w-xl font-sans mb-12">
                                {project.description}
                            </p>
                            <div className={cn("w-full aspect-video rounded-3xl overflow-hidden shadow-2xl group cursor-pointer", project.color)}>
                                <div className="w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20 backdrop-blur-sm">
                                    <span className="text-light text-2xl font-display italic">View Project</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
