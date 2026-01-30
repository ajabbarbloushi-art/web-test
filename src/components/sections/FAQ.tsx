'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, ArrowRight } from 'lucide-react'

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

    return (
        <section className="py-32 bg-[#F3F2EF]">
            <div className="max-w-4xl mx-auto px-6">
                <div className="mb-24 text-center">
                    <span className="text-sm font-mono uppercase tracking-widest text-dark/40 mb-4 block">F.A.Q</span>
                    <h2 className="text-5xl md:text-7xl font-display mb-8 text-dark">
                        Common <span className="text-primary italic">Inquiries</span>
                    </h2>
                </div>

                <div className="flex flex-col">
                    {FAQS.map((faq, index) => (
                        <div
                            key={index}
                            className="border-b border-dark/10 last:border-none"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full py-12 flex items-center justify-between group text-left"
                            >
                                <span className={`text-2xl md:text-3xl font-display transition-colors duration-300 ${activeIndex === index ? 'text-primary' : 'text-dark group-hover:text-primary/70'}`}>
                                    {faq.question}
                                </span>
                                <div className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${activeIndex === index ? 'bg-primary border-primary text-white' : 'border-dark/20 text-dark group-hover:border-primary group-hover:text-primary'}`}>
                                    {activeIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-12 text-xl text-dark/60 leading-relaxed font-light max-w-3xl">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <div className="mt-24 p-12 bg-dark rounded-[2rem] text-center relative z-20">
                    <h3 className="text-2xl text-white font-display mb-4">Still have questions?</h3>
                    <p className="text-white/60 mb-8">We're here to help you navigate your sustainability journey.</p>
                    <button className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all duration-300">
                        Contact Support <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </section>
    )
}
