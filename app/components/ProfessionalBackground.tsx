"use client";

import { useState } from "react";

interface BackgroundItem {
    title: string;
    content: string;
}

export default function ProfessionalBackground() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const backgroundItems: BackgroundItem[] = [
        {
            title: "Education",
            content: "Doctor of Psychology (PsyD) in Clinical Psychology with specialized training in trauma-informed care and evidence-based therapeutic approaches."
        },
        {
            title: "Licensure",
            content: "Licensed Clinical Psychologist in the State of California with full authorization to provide in-person and telehealth services to adults throughout the state."
        },
        {
            title: "Certifications & Training",
            content: "Certified in EMDR (Eye Movement Desensitization and Reprocessing), Cognitive-Behavioral Therapy (CBT), mindfulness-based practices, and body-oriented techniques for trauma and anxiety treatment."
        }
    ];

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full bg-[#EDE8E0] py-16 sm:py-24 md:py-32 lg:py-40 px-5 sm:px-6 md:px-12 lg:px-20">
            <div className="max-w-[800px] mx-auto">
                {/* Title */}
                <h2
                    className="mb-8 sm:mb-10 md:mb-12 text-[#2C3E50] text-center"
                    style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontWeight: 500,
                        fontStyle: 'normal',
                        lineHeight: 'calc(1.2 * (1 + (1 - 2.5) / 25))',
                        fontSize: 'calc((2.5 - 1) * 1.2vw + 1rem)',
                        letterSpacing: '0em',
                        textTransform: 'none',
                        margin: '2rem 0',
                        textAlign: 'center',
                        whiteSpace: 'pre-wrap',
                        transitionTimingFunction: 'ease',
                        transitionDuration: '0.8s',
                        transitionDelay: '0.414815s',
                    }}
                >
                    My Professional Background
                </h2>

                {/* Accordion */}
                <div className="w-full">
                    {/* Top border */}
                    <div className="border-t border-[#2C3E50]/30"></div>

                    {backgroundItems.map((item, index) => (
                        <div
                            key={index}
                            className="border-b border-[#2C3E50]/30"
                        >
                            <button
                                onClick={() => toggleItem(index)}
                                className="w-full py-4 sm:py-5 flex items-center justify-between text-left cursor-pointer bg-transparent border-none"
                                style={{
                                    boxSizing: 'border-box',
                                    touchAction: 'manipulation',
                                    WebkitAppearance: 'none',
                                }}
                            >
                                <h3
                                    className="text-[#2C3E50] flex-1 m-0"
                                    style={{
                                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                                        fontWeight: 500,
                                        fontStyle: 'normal',
                                        lineHeight: '1.2em',
                                        fontSize: 'clamp(18px, calc((1.8 - 1) * 1.2vw + 1rem), 28px)',
                                    }}
                                >
                                    {item.title}
                                </h3>
                                <span
                                    className="text-[#2C3E50] text-xl sm:text-2xl ml-4 flex-shrink-0"
                                    style={{
                                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                                        fontWeight: 300,
                                    }}
                                >
                                    {openIndex === index ? '−' : '+'}
                                </span>
                            </button>

                            {/* Content */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-4 sm:pb-6' : 'max-h-0'
                                    }`}
                                style={{ paddingLeft: '0' }}
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
                                    {item.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
