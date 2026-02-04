import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full">
            {/* Top border */}
            <div className="w-full h-[2px] bg-[#2C3E50]"></div>

            {/* Main Footer Content */}
            <div className="w-full bg-[#FAF8F5] py-16 sm:py-20 md:py-24 px-5 sm:px-6 md:px-12 lg:px-20">
                <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between gap-8 sm:gap-10 md:gap-8">
                    {/* Brand & Contact - Centered on mobile */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h3
                            className="text-[#2C3E50] mb-3 sm:mb-4"
                            style={{
                                fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif",
                                fontWeight: 500,
                                fontSize: 'clamp(24px, calc((2.5 - 1) * 1.2vw + 1rem), 36px)',
                                lineHeight: '1.2em',
                                letterSpacing: '0.01em',
                            }}
                        >
                            Dr. Maya Reynolds, PsyD
                        </h3>
                        <p
                            className="text-[#2C3E50] mb-2"
                            style={{
                                fontFamily: "'Cormorant Garamond', Georgia, serif",
                                fontWeight: 400,
                                fontSize: 'clamp(14px, calc((1.2 - 1) * 1.2vw + 1rem), 18px)',
                                lineHeight: '1.6em',
                            }}
                        >
                            123th Street 45 W
                        </p>
                        <p
                            className="text-[#2C3E50] mb-4"
                            style={{
                                fontFamily: "'Cormorant Garamond', Georgia, serif",
                                fontWeight: 400,
                                fontSize: 'clamp(14px, calc((1.2 - 1) * 1.2vw + 1rem), 18px)',
                                lineHeight: '1.6em',
                            }}
                        >
                            Santa Monica, CA 90401
                        </p>
                        <a
                            href="mailto:email@example.com"
                            className="text-[#2C3E50] underline mb-1"
                            style={{
                                fontFamily: "'Cormorant Garamond', Georgia, serif",
                                fontWeight: 400,
                                fontSize: 'clamp(14px, calc((1.2 - 1) * 1.2vw + 1rem), 18px)',
                            }}
                        >
                            email@example.com
                        </a>
                        <a
                            href="tel:5555555555"
                            className="text-[#2C3E50] underline"
                            style={{
                                fontFamily: "'Cormorant Garamond', Georgia, serif",
                                fontWeight: 400,
                                fontSize: 'clamp(14px, calc((1.2 - 1) * 1.2vw + 1rem), 18px)',
                            }}
                        >
                            (555) 555-5555
                        </a>
                    </div>

                    {/* Hours - Centered on mobile */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left md:pl-12 lg:pl-24">
                        <h3
                            className="text-[#2C3E50] mb-3 sm:mb-4"
                            style={{
                                fontFamily: "'Cormorant Garamond', Georgia, serif",
                                fontWeight: 500,
                                fontSize: 'clamp(22px, calc((2.5 - 1) * 1.2vw + 1rem), 36px)',
                                lineHeight: '1.2em',
                            }}
                        >
                            Hours
                        </h3>
                        <p
                            className="text-[#2C3E50]"
                            style={{
                                fontFamily: "'Cormorant Garamond', Georgia, serif",
                                fontWeight: 400,
                                fontSize: 'clamp(14px, calc((1.2 - 1) * 1.2vw + 1rem), 18px)',
                                lineHeight: '1.6em',
                            }}
                        >
                            Monday – Friday
                        </p>
                        <p
                            className="text-[#2C3E50]"
                            style={{
                                fontFamily: "'Cormorant Garamond', Georgia, serif",
                                fontWeight: 400,
                                fontSize: 'clamp(14px, calc((1.2 - 1) * 1.2vw + 1rem), 18px)',
                                lineHeight: '1.6em',
                            }}
                        >
                            10am – 6pm
                        </p>
                    </div>

                    {/* Navigation - Centered on mobile */}
                    <div className="flex flex-col items-center md:items-end text-center md:text-right">
                        <h3
                            className="text-[#2C3E50] mb-3 sm:mb-4"
                            style={{
                                fontFamily: "'Cormorant Garamond', Georgia, serif",
                                fontWeight: 500,
                                fontSize: 'clamp(22px, calc((2.5 - 1) * 1.2vw + 1rem), 36px)',
                                lineHeight: '1.2em',
                            }}
                        >
                            Find
                        </h3>
                        <Link
                            href="/"
                            className="text-[#2C3E50] underline mb-1 hover:opacity-70 transition-opacity"
                            style={{
                                fontFamily: "'Cormorant Garamond', Georgia, serif",
                                fontSize: 'clamp(14px, calc((1.2 - 1) * 1.2vw + 1rem), 18px)',
                            }}
                        >
                            Home
                        </Link>
                        <Link
                            href="/contact"
                            className="text-[#2C3E50] underline mb-1 hover:opacity-70 transition-opacity"
                            style={{
                                fontFamily: "'Cormorant Garamond', Georgia, serif",
                                fontSize: 'clamp(14px, calc((1.2 - 1) * 1.2vw + 1rem), 18px)',
                            }}
                        >
                            Contact
                        </Link>
                        <Link
                            href="/blog"
                            className="text-[#2C3E50] underline hover:opacity-70 transition-opacity"
                            style={{
                                fontFamily: "'Cormorant Garamond', Georgia, serif",
                                fontSize: 'clamp(14px, calc((1.2 - 1) * 1.2vw + 1rem), 18px)',
                            }}
                        >
                            Blog
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="w-full bg-[#EDE8E0] py-6 sm:py-8 px-5 sm:px-6 md:px-12 lg:px-20">
                <div className="max-w-[1800px] mx-auto flex flex-col items-center gap-3 sm:gap-4">
                    {/* Legal Links */}
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-6">
                        <Link
                            href="/privacy"
                            className="text-[#2C3E50] underline hover:opacity-70 transition-opacity"
                            style={{
                                fontFamily: "'Cormorant Garamond', Georgia, serif",
                                fontSize: 'clamp(12px, 14px, 16px)',
                            }}
                        >
                            Privacy & Cookies Policy
                        </Link>
                        <Link
                            href="/good-faith-estimate"
                            className="text-[#2C3E50] underline hover:opacity-70 transition-opacity"
                            style={{
                                fontFamily: "'Cormorant Garamond', Georgia, serif",
                                fontSize: 'clamp(12px, 14px, 16px)',
                            }}
                        >
                            Good Faith Estimate
                        </Link>
                        <Link
                            href="/terms-conditions"
                            className="text-[#2C3E50] underline hover:opacity-70 transition-opacity"
                            style={{
                                fontFamily: "'Cormorant Garamond', Georgia, serif",
                                fontSize: 'clamp(12px, 14px, 16px)',
                            }}
                        >
                            Website Terms & Conditions
                        </Link>
                        <Link
                            href="/disclaimer"
                            className="text-[#2C3E50] underline hover:opacity-70 transition-opacity"
                            style={{
                                fontFamily: "'Cormorant Garamond', Georgia, serif",
                                fontSize: 'clamp(12px, 14px, 16px)',
                            }}
                        >
                            Disclaimer
                        </Link>
                    </div>

                    {/* Credits */}
                    <p
                        className="text-[#2C3E50] text-center"
                        style={{
                            fontFamily: "'Cormorant Garamond', Georgia, serif",
                            fontSize: 'clamp(12px, 14px, 16px)',
                        }}
                    >
                        Website Template Credits:{' '}
                        <a
                            href="https://gobloomcreative.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:opacity-70 transition-opacity"
                        >
                            Go Bloom Creative
                        </a>
                    </p>

                    {/* Copyright */}
                    <p
                        className="text-[#2C3E50] text-center"
                        style={{
                            fontFamily: "'Cormorant Garamond', Georgia, serif",
                            fontSize: 'clamp(12px, 14px, 16px)',
                        }}
                    >
                        All Rights Reserved © 2024 Dr. Maya Reynolds, PsyD, LLC.
                    </p>
                </div>
            </div>
        </footer>
    );
}
