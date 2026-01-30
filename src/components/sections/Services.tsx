'use client'

import { useRef } from 'react'
import { Beaker, Code, Megaphone, ShoppingCart, ArrowRight } from 'lucide-react'
import MagneticButton from '@/components/ui/MagneticButton'

const SERVICES = [
    {
        title: 'R&D Consultancy',
        id: '01',
        description: 'Expert guidance in Innovation and AI. We research, analyze, and deliver strategic insights that drive future-proof growth.',
        icon: Beaker,
        color: 'from-blue-500/20 to-cyan-500/20',
        border: 'border-blue-500/30'
    },
    {
        title: 'Software Design',
        id: '02',
        description: 'Bespoke systems and software development optimized for scalability, performance, and user-centric impact.',
        icon: Code,
        color: 'from-purple-500/20 to-pink-500/20',
        border: 'border-purple-500/30'
    },
    {
        title: 'Digital Content',
        id: '03',
        description: 'Elevating brands through premium digital content creation that tells a compelling story of impact and sustainability.',
        icon: Megaphone,
        color: 'from-orange-500/20 to-red-500/20',
        border: 'border-orange-500/30'
    },
    {
        title: 'E-Commerce',
        id: '04',
        description: 'Innovative e-trading solutions and product strategies designed for the modern, connected, and green market.',
        icon: ShoppingCart,
        color: 'from-green-500/20 to-emerald-500/20',
        border: 'border-green-500/30'
    }
]

export default function Services() {
    const containerRef = useRef<HTMLDivElement>(null)

    return (
        <section
            id="services"
            ref={containerRef}
            className="bg-dark relative"
        >
            {/* Header Section */}
            <div className="min-h-[50vh] flex flex-col justify-center items-center text-center px-6 py-24 sticky top-0 z-0 bg-dark">
                <span className="text-secondary font-mono tracking-widest text-sm mb-4 uppercase">Capabilities</span>
                <h2 className="text-5xl md:text-8xl font-display text-light leading-[0.9]">
                    How We <br />
                    <span className="text-gray-500">Transform.</span>
                </h2>
                <p className="max-w-xl text-lg text-white/60 mt-8 font-light">
                    Combining artificial intelligence with human-centered design to
                    solve the most complex challenges of the sustainable era.
                </p>

                <MagneticButton variant="secondary" className="mt-12 bg-white/10 backdrop-blur-md">
                    View All Services
                </MagneticButton>
            </div>

            {/* Stacking Cards Container */}
            <div className="relative z-10 px-4 md:px-8 pb-32">
                {SERVICES.map((service, index) => (
                    <div
                        key={index}
                        className="sticky top-24 md:top-32 min-h-[60vh] md:h-[70vh] w-full max-w-6xl mx-auto mb-24 last:mb-0"
                    >
                        <div className={`
                            relative h-full rounded-[3rem] p-8 md:p-16 border backdrop-blur-3xl overflow-hidden
                            bg-gradient-to-br ${service.color} ${service.border} bg-[#1a1a1a]
                            transform transition-transform duration-500
                            flex flex-col md:flex-row justify-between gap-12 group
                            shadow-2xl
                        `}>
                            {/* Content */}
                            <div className="flex flex-col justify-between h-full relative z-10">
                                <div>
                                    <div className="flex items-center gap-4 mb-8">
                                        <span className="font-mono text-white/40 text-sm border border-white/10 px-3 py-1 rounded-full">
                                            {service.id}
                                        </span>
                                        <service.icon className="text-white/80 w-6 h-6" />
                                    </div>

                                    <h3 className="text-4xl md:text-6xl font-display text-white mb-6 max-w-lg">
                                        {service.title}
                                    </h3>

                                    <p className="text-xl text-white/60 max-w-md leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="mt-12 md:mt-0">
                                    <button className="flex items-center gap-3 text-white border-b border-white/30 pb-1 hover:border-white hover:gap-6 transition-all duration-300 group/btn">
                                        Learn More <ArrowRight className="w-5 h-5 opacity-50 group-hover/btn:opacity-100 transition-opacity" />
                                    </button>
                                </div>
                            </div>

                            {/* Decoration/Visual */}
                            <div className="absolute right-0 bottom-0 w-2/3 h-2/3 opacity-30 pointer-events-none mix-blend-overlay">
                                <div className={`w-full h-full bg-gradient-to-t ${service.color} filter blur-[100px] rounded-full transform translate-x-1/2 translate-y-1/2`} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
