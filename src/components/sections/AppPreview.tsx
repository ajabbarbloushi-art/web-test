'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import Container from '@/components/ui/Container'

export default function AppPreview() {
    const phoneRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(phoneRef.current,
                { y: 100, rotateY: -15 },
                {
                    y: -100,
                    rotateY: 15,
                    scrollTrigger: {
                        trigger: phoneRef.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1
                    }
                }
            )
        })
        return () => ctx.revert()
    }, [])

    return (
        <section className="py-32 overflow-hidden bg-white border-y border-dark/5">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <span className="text-secondary font-medium tracking-widest uppercase text-sm mb-6 block">
                            The App
                        </span>
                        <h2 className="text-5xl md:text-8xl font-display leading-[0.9] mb-8">
                            Impact in <br />
                            <span className="text-primary italic">Your Pocket.</span>
                        </h2>
                        <p className="text-dark/60 text-xl font-sans leading-relaxed mb-12 max-w-lg">
                            Our upcoming sustainability app transforms green intentions into real actions.
                            Track impact, earn rewards, and join a global community dedicated to Earth's future.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">1</div>
                                <p className="text-lg font-medium">AI-Behavioral Tracking</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold">2</div>
                                <p className="text-lg font-medium">Real-time Impact Rewards</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">3</div>
                                <p className="text-lg font-medium">Community Challenges</p>
                            </div>
                        </div>

                        <button className="mt-16 px-10 py-5 bg-dark text-light rounded-full text-lg font-medium hover:bg-primary transition-all duration-500 shadow-2xl">
                            Join the Waitlist
                        </button>
                    </div>

                    <div className="relative flex justify-center perspective-1000">
                        {/* Phone Mockup Frame */}
                        <div
                            ref={phoneRef}
                            className="w-[300px] h-[600px] bg-dark rounded-[3rem] border-8 border-dark/20 relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            {/* Internal Glassy UI Mockup */}
                            <div className="absolute inset-0 p-8 flex flex-col gap-6 bg-gradient-to-b from-primary/20 to-dark">
                                <div className="w-12 h-2 bg-white/20 rounded-full self-center mb-4" />
                                <div className="h-40 w-full bg-white/10 rounded-2xl backdrop-blur-md border border-white/10" />
                                <div className="h-20 w-full bg-secondary/20 rounded-2xl backdrop-blur-md border border-secondary/20" />
                                <div className="flex flex-col gap-3 mt-auto">
                                    <div className="h-4 w-3/4 bg-white/20 rounded-full" />
                                    <div className="h-4 w-1/2 bg-white/10 rounded-full" />
                                    <div className="h-14 w-full bg-white rounded-xl mt-4" />
                                </div>
                            </div>
                        </div>

                        {/* Decorative background shadow */}
                        <div className="absolute -z-10 w-[150%] aspect-square bg-secondary/5 blur-[120px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                </div>
            </Container>
        </section>
    )
}
