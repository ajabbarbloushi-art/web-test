'use client'

import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

interface MagneticButtonProps {
    children: React.ReactNode
    onClick?: () => void
    strength?: number
    className?: string
    variant?: 'primary' | 'secondary' | 'outline'
}

export default function MagneticButton({
    children,
    onClick,
    strength = 0.5,
    className = '',
    variant = 'primary'
}: MagneticButtonProps) {
    const buttonRef = useRef<HTMLButtonElement>(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e
        const { left, top, width, height } = buttonRef.current!.getBoundingClientRect()

        const x = clientX - (left + width / 2)
        const y = clientY - (top + height / 2)

        setPosition({ x: x * strength, y: y * strength })
    }

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 })
    }

    // Base styles
    const baseStyles = "relative px-8 py-4 rounded-full font-medium transition-colors duration-300 overflow-hidden group cursor-pointer"

    // Variant styles
    const variants = {
        primary: "bg-primary text-light hover:text-light",
        secondary: "bg-dark text-light hover:bg-dark/90",
        outline: "border border-dark/20 text-dark hover:text-light"
    }

    return (
        <motion.button
            ref={buttonRef}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        >
            <span className="relative z-10 flex items-center justify-center gap-2">
                {children}
            </span>

            {/* Fill effect for outline variant */}
            {variant === 'outline' && (
                <span className="absolute inset-0 bg-dark transform scale-y-0 origin-bottom transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100" />
            )}

            {/* Shine effect for primary/secondary */}
            {variant !== 'outline' && (
                <span className="absolute inset-0 z-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full blur-xl" />
            )}
        </motion.button>
    )
}
