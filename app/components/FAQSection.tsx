"use client";

import Image from "next/image";
import { useState } from "react";
import ScrollAnimate from "./ScrollAnimate";

interface FAQItem {
    question: string;
    answer: string;
}

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqItems: FAQItem[] = [
        {
            question: "What's your approach like?",
            answer: "Warm, grounded, and collaborative. I blend evidence-based methods—CBT, EMDR, mindfulness, and body-oriented practices—with genuine human connection. Sessions have structure but always leave room for what you need."
        },
        {
            question: "In-person or online?",
            answer: "Both. I see clients in-person at my Santa Monica office—a calm, sunlit space designed to help you feel at ease. I also offer secure telehealth for anyone in California."
        },
        {
            question: "What do you specialize in?",
            answer: "Anxiety, panic, trauma, and burnout. I especially love working with thoughtful, driven people who've been pushing through stress for too long and are ready for something different."
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full bg-[#FAF8F5] py-16 sm:py-20 md:py-28 lg:py-36 px-5 sm:px-6 md:px-12 lg:px-20">
            <div className="max-w-[1800px] mx-auto flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-12 lg:gap-20">
                {/* Arched Image - Top on mobile, Left on desktop */}
                <ScrollAnimate animation="fade-left" className="w-full lg:w-[40%] flex justify-center lg:justify-start order-1">
                    <div className="relative w-[160px] sm:w-[200px] md:w-[300px] lg:w-[380px] aspect-[3/4]">
                        {/* Shadow layer with theme color */}
                        <div
                            className="absolute inset-0 shadow-[0_25px_60px_-15px_rgba(125,139,122,0.5)]"
                            style={{ borderRadius: '50% 50% 0 0 / 33.33% 33.33% 0 0' }}
                        ></div>
                        <div
                            className="absolute inset-0 overflow-hidden border-4 border-white/30"
                            style={{ borderRadius: '50% 50% 0 0 / 33.33% 33.33% 0 0' }}
                        >
                            <div
                                className="relative w-full h-full"
                                data-definition-name="website.components.imageFluid"
                                style={{
                                    // @ts-ignore
                                    "--image-component-focal-point": "50% 50%",
                                    "--image-component-object-fit": "cover",
                                    "--image-component-overlay-opacity": "0",
                                    "--image-component-overlay-blend-mode": "normal",
                                    "--image-block-overlay-color": "",
                                    "--image-component-container-height": "100%",
                                    "--image-component-container-width": "100%",
                                } as React.CSSProperties}
                            >
                                <Image
                                    src="/faq.jpg"
                                    alt="Dried flowers arrangement"
                                    fill
                                    className="object-cover object-center"
                                    sizes="(max-width: 640px) 120px, (max-width: 768px) 160px, (max-width: 1024px) 280px, 380px"
                                    quality={75}
                                />
                                <div className="fluidImageOverlay"></div>
                            </div>
                        </div>
                    </div>
                </ScrollAnimate>

                {/* FAQ Content - Below image on mobile, Right on desktop */}
                <ScrollAnimate animation="fade-up" delay={0.1} className="w-full lg:w-[60%] flex flex-col order-2">
                    {/* Title */}
                    <h2
                        className="mb-4 sm:mb-6 md:mb-8 lg:mb-10 leading-[1.1] text-[#2C3E50]"
                        style={{
                            fontFamily: "'Cormorant Garamond', Georgia, serif",
                            fontWeight: 500,
                            fontSize: 'clamp(28px, calc((3 - 1) * 1.2vw + 1rem), 52px)',
                            lineHeight: 'calc(1.2 * (1 + (1 - 3) / 25))',
                        }}
                    >
                        FAQs
                    </h2>

                    {/* Accordion */}
                    <ul
                        className="w-full m-0 p-0 list-none"
                        style={{ listStyleType: 'none' }}
                    >
                        {faqItems.map((item, index) => (
                            <li
                                key={index}
                                className="border-t border-[#2C3E50]/20"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full py-4 sm:py-5 md:py-6 flex items-center text-left cursor-pointer bg-transparent border-none gap-3 sm:gap-4"
                                    style={{
                                        boxSizing: 'border-box',
                                        touchAction: 'manipulation',
                                        WebkitAppearance: 'none',
                                    }}
                                >
                                    {/* Plus/Minus on left */}
                                    <span
                                        className="text-[#2C3E50] text-xl sm:text-2xl flex-shrink-0"
                                        style={{
                                            fontFamily: "'Cormorant Garamond', Georgia, serif",
                                            fontWeight: 300,
                                        }}
                                    >
                                        {openIndex === index ? '−' : '+'}
                                    </span>
                                    <h3
                                        className="text-[#2C3E50] flex-1 m-0"
                                        style={{
                                            fontFamily: "'Cormorant Garamond', Georgia, serif",
                                            fontWeight: 500,
                                            fontStyle: 'normal',
                                            lineHeight: '1.3em',
                                            fontSize: 'clamp(18px, calc((2 - 1) * 1.2vw + 1rem), 32px)',
                                        }}
                                    >
                                        {item.question}
                                    </h3>
                                </button>

                                {/* Answer */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-4 sm:pb-6' : 'max-h-0'
                                        }`}
                                    style={{ paddingLeft: '32px' }}
                                >
                                    <p
                                        className="text-[#2C3E50] m-0"
                                        style={{
                                            fontFamily: "'Cormorant Garamond', Georgia, serif",
                                            fontWeight: 400,
                                            fontSize: 'clamp(14px, calc((1.2 - 1) * 1.2vw + 1rem), 20px)',
                                            lineHeight: '1.6em'
                                        }}
                                    >
                                        {item.answer}
                                    </p>
                                </div>
                            </li>
                        ))}
                        {/* Bottom border for last item */}
                        <li className="border-t border-[#2C3E50]/20"></li>
                    </ul>
                </ScrollAnimate>
            </div>
        </section >
    );
}
