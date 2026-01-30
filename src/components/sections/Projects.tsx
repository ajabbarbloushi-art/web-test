'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { ArrowUpRight } from 'lucide-react'
import MagneticButton from '@/components/ui/MagneticButton'

gsap.registerPlugin(ScrollTrigger)

const PROJECTS = [
    {
        id: '01',
        title: 'Sustainability OS',
        category: 'R&D Consultancy',
        description: 'AI-powered framework for measuring and optimizing institutional sustainability.',
        tags: ['AI Strategy', 'Data Analytics', 'Green Tech'],
        image: '/images/smart-city.png'
    },
    {
        id: '02',
        title: 'Ainar Flow',
        category: 'Software Design',
        description: 'Bespoke software solutions driving efficiency through intelligent automation.',
        tags: ['SaaS', 'UX/UI', 'Automation'],
        image: '/images/energy-grid.png'
    },
    {
        id: '03',
        title: 'E-Trade Connect',
        category: 'E-Commerce',
        description: 'Global trading platform for sustainable products and carbon-neutral logistics.',
        tags: ['Marketplace', 'Logistics', 'Carbon Logic'],
        image: '/images/carbon-track.png'
    }
]

export default function Projects() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const projects = gsap.utils.toArray('.project-item')

            projects.forEach((project: any) => {
                const img = project.querySelector('.project-img')

                gsap.fromTo(img,
                    { yPercent: -20, scale: 1.1 },
                    {
                        yPercent: 20,
                        scale: 1,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: project,
                            start: 'top bottom',
                            end: 'bottom top',
                            scrub: true
                        }
                    }
                )
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section id="projects" ref={containerRef} className="bg-light py-32 px-4 md:px-8">
            <div className="max-w-[90vw] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-32">
                    <h2 className="text-6xl md:text-9xl font-display text-dark leading-[0.8] tracking-tighter">
                        Selected <br />
                        <span className="italic text-primary">Works</span>
                    </h2>
                    <div className="flex gap-4 mt-8 md:mt-0">
                        <span className="text-sm font-mono uppercase tracking-widest text-dark/40">(2024-2026)</span>
                    </div>
                </div>

                <div className="flex flex-col gap-32">
                    {PROJECTS.map((project, index) => (
                        <div
                            key={index}
                            className="project-item grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center group cursor-pointer"
                        >
                            {/* Image Side */}
                            <div className={`
                                lg:col-span-7 h-[60vh] md:h-[80vh] overflow-hidden rounded-[2rem] relative
                                ${index % 2 === 1 ? 'lg:order-2' : ''}
                            `}>
                                <div
                                    className="project-img w-full h-[120%] absolute top-[-10%] left-0 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${project.image})` }}
                                >
                                    <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/0 transition-colors duration-700" />
                                </div>

                                {/* Hover Button */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-50 group-hover:scale-100 ease-out z-10">
                                    <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                                        <ArrowUpRight className="w-10 h-10" />
                                    </div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className={`
                                lg:col-span-5 flex flex-col justify-center
                                ${index % 2 === 1 ? 'lg:order-1 lg:items-end lg:text-right' : 'lg:items-start'}
                            `}>
                                <div className="flex flex-row items-center gap-4 mb-6">
                                    <span className="text-xs font-mono uppercase tracking-widest border border-dark/10 px-3 py-1 rounded-full">
                                        {project.id}
                                    </span>
                                    <span className="text-xs font-mono uppercase tracking-widest text-dark/60">
                                        {project.category}
                                    </span>
                                </div>

                                <h3 className="text-5xl md:text-7xl font-display text-dark mb-8 leading-[0.9] group-hover:text-primary transition-colors duration-300">
                                    {project.title}
                                </h3>

                                <p className="text-xl text-dark/60 font-light leading-relaxed mb-10 max-w-md">
                                    {project.description}
                                </p>

                                <div className={`flex flex-wrap gap-3 ${index % 2 === 1 ? 'justify-end' : ''}`}>
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-sm border border-dark/10 px-4 py-2 rounded-full text-dark/60 transition-colors duration-300 group-hover:border-primary/50 group-hover:text-primary">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-32 flex justify-center">
                    <MagneticButton variant="outline" className="h-20 px-12 text-xl">
                        View All Projects <ArrowUpRight className="ml-2 w-6 h-6" />
                    </MagneticButton>
                </div>
            </div>
        </section>
    )
}
