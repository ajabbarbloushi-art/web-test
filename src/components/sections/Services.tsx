'use client'

import { useRef, useEffect } from 'react'
import { Beaker, Code, Megaphone, ShoppingCart, ArrowRight } from 'lucide-react'
import MagneticButton from '@/components/ui/MagneticButton'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SERVICES = [
    {
        title: 'R&D Consultancy in Innovation & AI',
        id: '01',
        description: 'Expert guidance in Innovation and AI. We research, analyze, and deliver strategic insights that drive future-proof growth.',
        icon: Beaker,
        color: 'from-blue-500/20 to-cyan-500/20',
        border: 'border-blue-500/30'
    },
    {
        title: 'Software / Web: Design & Development',
        id: '02',
        description: 'Bespoke systems and software development optimized for scalability, performance, and user-centric impact.',
        icon: Code,
        color: 'from-purple-500/20 to-pink-500/20',
        border: 'border-purple-500/30'
    },
    {
        title: 'Digital Content Creation',
        id: '03',
        description: 'Elevating brands through premium digital content creation that tells a compelling story of impact and sustainability.',
        icon: Megaphone,
        color: 'from-orange-500/20 to-red-500/20',
        border: 'border-orange-500/30'
    },
    {
        title: 'E-Commerce / E-Trading',
        id: '04',
        description: 'Innovative e-trading solutions and product strategies designed for the modern, connected, and green market.',
        icon: ShoppingCart,
        color: 'from-green-500/20 to-emerald-500/20',
        border: 'border-green-500/30'
    }
]

export default function Services() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.service-card-wrapper')

            cards.forEach((card: any, i) => {
                // Randomize entrance direction
                const xOffset = i % 2 === 0 ? -100 : 100 // Alternating left/right
                const yOffset = 100

                gsap.fromTo(card,
                    {
                        opacity: 0,
                        x: xOffset,
                        y: yOffset,
                        rotate: i % 2 === 0 ? -5 : 5
                    },
                    {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        rotate: 0,
                        duration: 1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 90%',
                            end: 'top 60%',
                            scrub: 1
                        }
                    }
                )
            })

        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            id="services"
            ref={containerRef}
            className="bg-dark relative"
        >
            {/* Header Section */}
            <div className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6 py-32 sticky top-0 z-0 bg-dark">
                <span className="text-secondary font-mono tracking-widest text-sm mb-4 uppercase">Capabilities</span>
                <h2 className="text-5xl md:text-8xl font-display text-light leading-[0.9]">
                    How We <br />
                    <span className="text-gray-500 italic">Transform.</span>
                </h2>
                <p className="max-w-xl text-lg text-white/60 mt-8 font-light">
                    Combining artificial intelligence with human-centered design to
                    solve the most complex challenges of the sustainable era.
                </p>

                <div className="mt-16">
                    <MagneticButton variant="secondary" className="bg-white/10 backdrop-blur-md">
                        View All Services
                    </MagneticButton>
                </div>
            </div>

            {/* Stacking Cards Container */}
            <div className="relative z-10 px-4 md:px-8 pb-32">
                {SERVICES.map((service, index) => (
                    <div
                        key={index}
                        className="service-card-wrapper sticky top-24 md:top-32 min-h-[60vh] md:h-[70vh] w-full max-w-6xl mx-auto mb-24 last:mb-0 perspective-1000"
                    >
                        <div className={`
                            relative h-full rounded-[3rem] p-8 md:p-16 border backdrop-blur-3xl overflow-hidden
                            bg-gradient-to-br from-[#1a1a1a] via-[#1a1a1a] to-[#2a2a2a] ${service.border}
                            transform transition-all duration-500
                            flex flex-col md:flex-row justify-between gap-12 group
                            shadow-2xl hover:scale-[1.02] hover:shadow-primary/20
                        `}>
                            {/* Animated Background Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 group-hover:opacity-20 transition-opacity duration-700`} />

                            {/* Content */}
                            <div className="flex flex-col justify-between h-full relative z-10 w-full">
                                <div>
                                    <div className="flex items-center gap-4 mb-8">
                                        <span className="font-mono text-white/40 text-sm border border-white/10 px-3 py-1 rounded-full group-hover:bg-white/10 transition-colors">
                                            {service.id}
                                        </span>
                                        <service.icon className="text-white/80 w-6 h-6 group-hover:text-primary transition-colors duration-300" />
                                    </div>

                                    <h3 className="text-4xl md:text-6xl font-display text-white mb-6 max-w-2xl leading-tight">
                                        {/* Word-by-word animation could be added here if needed, keeping it simple but bold for now */}
                                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 group-hover:to-white transition-all duration-500">
                                            {service.title}
                                        </span>
                                    </h3>

                                    <p className="text-xl text-white/60 max-w-lg leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="mt-12 md:mt-0 flex justify-end items-end">
                                    <button className="flex items-center gap-3 text-white border-b border-white/30 pb-1 hover:border-primary hover:text-primary hover:gap-6 transition-all duration-300 group/btn">
                                        Learn More <ArrowRight className="w-5 h-5 opacity-50 group-hover/btn:opacity-100 transition-opacity" />
                                    </button>
                                </div>
                            </div>

                            {/* Decoration/Visual */}
                            <div className="absolute right-0 bottom-0 w-full h-full pointer-events-none opacity-30 mix-blend-screen group-hover:opacity-50 transition-opacity duration-700">
                                <div className={`absolute -right-20 -bottom-20 w-[600px] h-[600px] bg-gradient-to-t ${service.color} filter blur-[120px] rounded-full animate-pulse duration-[5000ms]`} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
