'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import MagneticButton from '@/components/ui/MagneticButton'

gsap.registerPlugin(ScrollTrigger)

const FEATURES = [
    {
        title: 'AI Tracking',
        description: 'Auto-measures your carbon footprint through intelligent data analysis.',
        screenColor: 'bg-gradient-to-b from-blue-500 to-indigo-900',
        content: 'Your Footprint: -15%'
    },
    {
        title: 'Impact Rewards',
        description: 'Earn credits for every sustainable choice you make. Redeem for real value.',
        screenColor: 'bg-gradient-to-b from-green-500 to-emerald-900',
        content: 'Rewards: 450 pts'
    },
    {
        title: 'Community',
        description: 'Join local challenges and compete with friends for the top green spot.',
        screenColor: 'bg-gradient-to-b from-orange-500 to-red-900',
        content: 'Rank: #3 Local'
    }
]

export default function AppPreview() {
    const containerRef = useRef<HTMLDivElement>(null)
    const phoneRef = useRef<HTMLDivElement>(null)
    const [activeFeature, setActiveFeature] = useState(0)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Phone Entrance
            gsap.fromTo(phoneRef.current,
                { y: 100, rotateY: -20, opacity: 0 },
                {
                    y: 0,
                    rotateY: 0,
                    opacity: 1,
                    duration: 1.5,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 60%',
                        end: 'top 30%',
                        scrub: 1
                    }
                }
            )

            // Setup triggers for changing screens
            FEATURES.forEach((_, i) => {
                ScrollTrigger.create({
                    trigger: `#feature-${i}`,
                    start: 'top 50%',
                    end: 'bottom 50%',
                    onEnter: () => setActiveFeature(i),
                    onEnterBack: () => setActiveFeature(i)
                })
            })

            // Pin the phone
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: 'top top',
                end: 'bottom bottom',
                pin: '.phone-container',
            })

        }, containerRef)
        return () => ctx.revert()
    }, [])

    return (
        <section ref={containerRef} className="py-24 bg-white relative">
            <div className="max-w-[90vw] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

                {/* Visual Side (Sticky) */}
                <div className="phone-container h-screen sticky top-0 flex items-center justify-center order-2 lg:order-1">
                    <div className="relative">
                        {/* 3D Phone Mockup */}
                        <div
                            ref={phoneRef}
                            className="w-[320px] h-[650px] bg-dark rounded-[3.5rem] border-[8px] border-dark shadow-2xl relative overflow-hidden"
                            style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)' }}
                        >
                            {/* Dynamic Screen Content */}
                            {FEATURES.map((feat, i) => (
                                <div
                                    key={i}
                                    className={`absolute inset-0 transition-opacity duration-700 p-8 flex flex-col justify-between text-white ${activeFeature === i ? 'opacity-100' : 'opacity-0'}`}
                                >
                                    <div className={`absolute inset-0 ${feat.screenColor} z-0`} />

                                    <div className="relative z-10 w-full pt-8">
                                        <div className="flex justify-between items-center mb-8">
                                            <div className="w-8 h-8 rounded-full bg-white/20" />
                                            <div className="w-8 h-8 rounded-full bg-white/20" />
                                        </div>
                                        <div className="space-y-4">
                                            <h4 className="text-3xl font-display">{feat.title}</h4>
                                            <div className="w-16 h-1 bg-white/50" />
                                        </div>
                                    </div>

                                    <div className="relative z-10 w-full mb-12">
                                        <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                                            <span className="text-4xl font-mono font-bold">{feat.content}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Notch / Dynamic Island */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-32 bg-dark rounded-b-xl z-20" />
                        </div>
                    </div>
                </div>

                {/* Content Side (Scrollable) */}
                <div className="py-32 flex flex-col gap-[50vh] order-1 lg:order-2">
                    <div className="mb-[20vh]">
                        <span className="text-sm font-mono uppercase tracking-widest text-primary mb-4 block">The App</span>
                        <h2 className="text-6xl md:text-8xl font-display leading-[0.9] text-dark mb-8">
                            Impact in <br />
                            <span className="text-gray-400 italic">Your Pocket.</span>
                        </h2>
                        <p className="text-xl text-dark/70 font-sans max-w-lg leading-relaxed">
                            AI-powered sustainability solutions and app that reward green behavior and drive real impact.
                        </p>
                    </div>

                    {FEATURES.map((feat, i) => (
                        <div key={i} id={`feature-${i}`} className="feature-block opacity-50 transition-opacity duration-500 hover:opacity-100">
                            <span className="text-6xl font-display text-dark/10 mb-6 block">0{i + 1}</span>
                            <h3 className="text-4xl font-bold mb-4">{feat.title}</h3>
                            <p className="text-xl text-dark/60 leading-relaxed max-w-md">
                                {feat.description}
                            </p>
                        </div>
                    ))}

                    <div className="h-[20vh] flex items-center">
                        <MagneticButton className="h-20 px-12 text-xl bg-dark text-white">
                            Get Early Access
                        </MagneticButton>
                    </div>
                </div>

            </div>
        </section>
    )
}
