'use client'

import { useRef, useState, useEffect } from 'react'
import { gsap } from '@/lib/gsap'
import Container from '@/components/ui/Container'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

const FAQS = [
    {
        question: "What industries does AINAR specialize in?",
        answer: "We specialize in high-impact sectors including Renewable Energy, Sustainable Smart Cities, AI-Driven Manufacturing, and Green E-Commerce. Our approach is tailored to the unique regulatory and cultural landscape of the UAE and global markets."
    },
    {
        question: "How does the AI-powered sustainability app work?",
        answer: "Our app uses advanced machine learning to analyze user behaviors and environmental impact in real-time. It provides actionable insights, rewards green choices, and fosters a community of impact through innovative gamification and verified sustainability metrics."
    },
    {
        question: "Do you offer custom software development for startups?",
        answer: "Yes, we partner with startups and established enterprises to design and build scalable, future-proof software ecosystems. From MVP development to enterprise-level AI integration, we ensure your tech is as sustainable as your vision."
    },
    {
        question: "How can we start a partnership with AINAR?",
        answer: "You can reach out through our contact form or book a discovery call. We typically start with an innovation audit to identify how AI and sustainable practices can drive growth for your specific business model."
    }
]

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)
    const ctxRef = useRef<gsap.Context | null>(null)

    useEffect(() => {
        ctxRef.current = gsap.context(() => { })
        return () => ctxRef.current?.revert()
    }, [])

    const toggleAccordion = (index: number, answerEl: HTMLDivElement) => {
        const isOpen = activeIndex === index

        // Close existing open accordion
        if (activeIndex !== null && activeIndex !== index) {
            const prevAnswer = document.querySelector(`#faq-answer-${activeIndex}`) as HTMLDivElement
            if (prevAnswer) {
                gsap.to(prevAnswer, { height: 0, opacity: 0, duration: 0.4, ease: 'power2.out' })
            }
        }

        if (isOpen) {
            gsap.to(answerEl, { height: 0, opacity: 0, duration: 0.4, ease: 'power2.out' })
            setActiveIndex(null)
        } else {
            gsap.to(answerEl, { height: 'auto', opacity: 1, duration: 0.5, ease: 'power3.out' })
            setActiveIndex(index)
        }
    }

    return (
        <section className="py-32 bg-light">
            <Container>
                <div className="max-w-4xl mx-auto">
                    <div className="mb-20">
                        <h2 className="text-5xl md:text-7xl font-display mb-6">
                            Common <span className="text-primary">Inquiries.</span>
                        </h2>
                        <p className="text-dark/50 text-xl font-sans">
                            Everything you need to know about our process, technology, and vision for a sustainable future.
                        </p>
                    </div>

                    <div className="flex flex-col border-t border-dark/10">
                        {FAQS.map((faq, index) => (
                            <div
                                key={index}
                                className="faq-item border-b border-dark/10 overflow-hidden"
                            >
                                <button
                                    onClick={(e) => {
                                        const answer = e.currentTarget.nextElementSibling as HTMLDivElement
                                        toggleAccordion(index, answer)
                                    }}
                                    className="w-full flex items-center justify-between py-10 text-left group"
                                >
                                    <span className="text-2xl md:text-3xl font-display group-hover:text-primary transition-colors duration-300">
                                        {faq.question}
                                    </span>
                                    <div className={cn(
                                        "w-12 h-12 rounded-full border border-dark/10 flex items-center justify-center transition-all duration-500",
                                        activeIndex === index ? "bg-primary border-primary rotate-45" : "group-hover:bg-dark group-hover:border-dark"
                                    )}>
                                        <Plus className={cn(
                                            "transition-colors duration-300",
                                            activeIndex === index ? "text-light" : "text-dark group-hover:text-light"
                                        )} />
                                    </div>
                                </button>

                                <div
                                    id={`faq-answer-${index}`}
                                    className="h-0 opacity-0 overflow-hidden"
                                >
                                    <div className="pb-10 pr-20">
                                        <p className="text-xl text-dark/60 leading-relaxed font-sans">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}
