'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react'

const TESTIMONIALS = [
    {
        id: 1,
        quote: "AINAR regenerated our entire supply chain logic. The sustainability OS isn't just a tool; it's a paradigm shift in how we view corporate responsibility.",
        author: "Sarah Jenkins",
        role: "COO, GreenLogistics Global",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 2,
        quote: "The seamless integration of AI and human-centric design helped us launch our eco-platform 3 months ahead of schedule. A truly visionary team.",
        author: "David Chen",
        role: "Founder, EcoMarket",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 3,
        quote: "Their data consultancy revealed inefficiencies we didn't know existed. We reduced our carbon footprint by 40% in just one year.",
        author: "Elara Vance",
        role: "Sustainability Director, TechFlow",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 4,
        quote: "AINAR's creative direction transformed our brand voice. We are now leading the conversation on renewable energy in the Middle East.",
        author: "Yusuf Al-Mansoor",
        role: "CMO, SolarX",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop"
    }
]

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [direction, setDirection] = useState(0)

    const nextTestimonial = () => {
        setDirection(1)
        setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length)
    }

    const prevTestimonial = () => {
        setDirection(-1)
        setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
    }

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8,
            rotate: direction > 0 ? 10 : -10
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            rotate: 0
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8,
            rotate: direction < 0 ? 10 : -10
        })
    }

    return (
        <section className="py-32 bg-light overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-20 text-center">
                    <span className="text-secondary font-mono tracking-widest text-sm mb-4 uppercase inline-block">Client Stories</span>
                    <h2 className="text-5xl md:text-7xl font-display text-dark">
                        Voices of <span className="italic text-primary">Impact.</span>
                    </h2>
                </div>

                <div className="relative h-[600px] flex items-center justify-center">
                    <AnimatePresence initial={false} custom={direction} mode="popLayout">
                        <motion.div
                            key={TESTIMONIALS[activeIndex].id}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 },
                                rotate: { duration: 0.4 }
                            }}
                            className="absolute w-full max-w-4xl cursor-grab active:cursor-grabbing"
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x)

                                if (swipe < -swipeConfidenceThreshold) {
                                    nextTestimonial()
                                } else if (swipe > swipeConfidenceThreshold) {
                                    prevTestimonial()
                                }
                            }}
                        >
                            <div className="bg-white p-12 md:p-20 rounded-[3rem] shadow-2xl relative">
                                <Quote className="absolute top-12 left-12 w-16 h-16 text-primary/10 rotate-180" />

                                <div className="flex flex-col items-center text-center relative z-10">
                                    <p className="text-2xl md:text-4xl font-display leading-tight text-dark mb-12">
                                        "{TESTIMONIALS[activeIndex].quote}"
                                    </p>

                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20">
                                            <img
                                                src={TESTIMONIALS[activeIndex].image}
                                                alt={TESTIMONIALS[activeIndex].author}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="text-lg font-bold text-dark">{TESTIMONIALS[activeIndex].author}</h4>
                                            <p className="text-sm font-mono text-dark/50 uppercase tracking-widest">
                                                {TESTIMONIALS[activeIndex].role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Controls */}
                <div className="flex justify-center gap-4 mt-12">
                    <button
                        onClick={prevTestimonial}
                        className="w-16 h-16 rounded-full bg-white border border-dark/10 flex items-center justify-center hover:bg-dark hover:text-light transition-all duration-300"
                    >
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextTestimonial}
                        className="w-16 h-16 rounded-full bg-white border border-dark/10 flex items-center justify-center hover:bg-dark hover:text-light transition-all duration-300"
                    >
                        <ArrowRight className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 opacity-[0.03] pointer-events-none">
                <svg width="100%" height="100%">
                    <pattern id="circle-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                        <circle cx="50" cy="50" r="1" fill="currentColor" className="text-dark" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#circle-pattern)" />
                </svg>
            </div>
        </section>
    )
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
}
