'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

// Data Structure
const teamMembers = [
    {
        name: "Dr. Meryem Hamidi",
        role: "Founder & CEO",
        image: "/images/team-ceo.png",
        roleDescription: "Dr. Hamidi leads AINAR with a vision to merge sustainability with advanced intelligence."
    },
    {
        name: "James Chen",
        role: "Chief AI Architect",
        image: "/images/team-ai.png",
        roleDescription: "James architects the neural frameworks that power our green AI solutions."
    },
    {
        name: "Sarah Al-Fayed",
        role: "Sustainability Lead",
        image: "/images/team-sustainability.png",
        roleDescription: "Sarah ensures every algorithm and strategy aligns with global eco-goals."
    },
    {
        name: "Marcus Thorn",
        role: "Creative Director",
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop",
        roleDescription: "Marcus crafts the visual language that communicates our mission to the world."
    },
    {
        name: "Elena Rodriguez",
        role: "Head of Operations",
        image: "https://images.unsplash.com/photo-1598550832205-d5b5fe4d0333?q=80&w=800&auto=format&fit=crop",
        roleDescription: "Elena orchestrates our global teams to deliver impact at scale."
    }
]

export default function Team() {
    const [hoveredMember, setHoveredMember] = useState<number | null>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    // MotionValues for high-performance mouse tracking
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    // Spring physics for smooth "lag" effect on the image
    const springConfig = { stiffness: 120, damping: 15, mass: 0.1 }
    const springX = useSpring(mouseX, springConfig)
    const springY = useSpring(mouseY, springConfig)

    // Store dimensions to calculate relative movement
    const dimensions = useRef({ width: 0, height: 0 })

    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                const { width, height } = containerRef.current.getBoundingClientRect()
                dimensions.current = { width, height }
            }
        }

        updateDimensions()
        window.addEventListener('resize', updateDimensions)
        return () => window.removeEventListener('resize', updateDimensions)
    }, [])

    const handleMouseMove = (e: React.MouseEvent) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect()
            mouseX.set(e.clientX - rect.left)
            mouseY.set(e.clientY - rect.top)
        }
    }

    // Parallax Transform for the image inside the floating card
    // Using simplified values to prevent large jumps
    const rotate = useTransform(springX, [0, dimensions.current.width], [-5, 5])
    const imgX = useTransform(springX, [0, dimensions.current.width], [-20, 20])
    const imgY = useTransform(springY, [0, dimensions.current.height], [-20, 20])

    return (
        <section
            id="team"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="py-32 bg-light relative overflow-hidden cursor-default"
        >
            {/* Background Grid Pattern - Subtle */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" className="text-dark" />
                </svg>
            </div>

            <div className="max-w-[90vw] mx-auto relative z-10">
                {/* Header */}
                <div className="mb-24 flex flex-col md:flex-row justify-between items-end">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-6xl md:text-8xl font-display font-bold text-dark mb-6 tracking-tighter">
                            The <br />
                            <span className="italic text-primary">Architects</span>
                        </h2>
                        <p className="text-xl font-light text-dark/70 max-w-xl">
                            A multidisciplinary collective of minds dedicated to engineering the future.
                        </p>
                    </motion.div>

                    {/* Rotating Badge */}
                    <div className="hidden md:block">
                        <div className="w-24 h-24 rounded-full border border-dark/10 flex items-center justify-center animate-[spin_10s_linear_infinite]">
                            <div className="relative w-full h-full flex items-center justify-center">
                                <span className="text-2xl">❋</span>
                                <svg className="absolute w-full h-full p-2" viewBox="0 0 100 100">
                                    <path
                                        id="circlePath"
                                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                                        fill="none"
                                    />
                                    <text className="text-[10px] uppercase font-mono tracking-widest fill-dark/60">
                                        <textPath href="#circlePath" startOffset="0%">
                                            AINAR • TEAM • VISION • AINAR • TEAM • VISION •
                                        </textPath>
                                    </text>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* List */}
                <div className="flex flex-col">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative border-t border-dark/10 py-10 md:py-14 hover:px-4 transition-all duration-300 cursor-pointer"
                            onMouseEnter={() => setHoveredMember(index)}
                            onMouseLeave={() => setHoveredMember(null)}
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between relative z-10 text-dark group-hover:text-primary transition-colors duration-300 gap-4">
                                <h3 className="text-4xl md:text-7xl font-display font-bold uppercase tracking-tight group-hover:translate-x-4 transition-transform duration-500 ease-out">
                                    {member.name}
                                </h3>
                                <div className="flex flex-col md:items-end gap-2">
                                    <div className="flex items-center gap-4">
                                        <span className="text-sm md:text-lg font-mono uppercase tracking-widest opacity-60 group-hover:opacity-100">
                                            {member.role}
                                        </span>
                                        <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-2 group-hover:-translate-y-2 md:block hidden" />
                                    </div>
                                    <span className="text-sm font-light opacity-0 group-hover:opacity-70 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 max-w-xs text-right hidden md:block">
                                        {member.roleDescription}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                    <div className="border-t border-dark/10" />
                </div>
            </div>

            {/* Floating Reveal Image */}
            <AnimatePresence>
                {hoveredMember !== null && (
                    <motion.div
                        className="fixed md:absolute top-0 left-0 w-[300px] h-[400px] md:w-[350px] md:h-[450px] pointer-events-none z-20 overflow-hidden shadow-2xl bg-white rounded-lg"
                        initial={{
                            opacity: 0,
                            scale: 0.5,
                            clipPath: "circle(0% at 50% 50%)",
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            clipPath: "circle(150% at 50% 50%)",
                            transition: {
                                type: "spring",
                                stiffness: 150,
                                damping: 20,
                                mass: 0.8
                            }
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.5,
                            clipPath: "circle(0% at 50% 50%)",
                            transition: { duration: 0.4 }
                        }}
                        style={{
                            x: springX,
                            y: springY,
                            rotate: rotate,
                            translateX: "-50%",
                            translateY: "-50%"
                        }}
                    >
                        <motion.img
                            src={teamMembers[hoveredMember].image}
                            alt={teamMembers[hoveredMember].name}
                            className="w-[120%] h-[120%] object-cover contrast-110 absolute -top-[10%] -left-[10%]"
                            initial={{ scale: 1.2 }}
                            animate={{
                                scale: 1,
                                transition: { duration: 0.5, ease: "easeOut" }
                            }}
                            style={{
                                x: imgX,
                                y: imgY
                            }}
                        />

                        {/* Overlay to ensure text readability if needed (optional) */}
                        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
