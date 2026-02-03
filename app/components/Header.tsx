"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header
                className="flex items-center justify-between w-full"
                style={{
                    position: 'relative',
                    zIndex: 50,
                    boxSizing: 'border-box',
                    paddingTop: 'clamp(12px, 1vw, 20px)',
                    paddingBottom: 'clamp(12px, 1vw, 20px)',
                    paddingLeft: 'clamp(16px, 3.75vw, 60px)',
                    paddingRight: 'clamp(16px, 3.75vw, 60px)',
                    pointerEvents: 'auto',
                }}
            >
                {/* Mobile Hamburger Menu */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-[#2C3E50] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-[#2C3E50] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-[#2C3E50] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>

                {/* Desktop Logo - Left */}
                <Link href="/" className="no-underline hidden md:block">
                    <h1
                        className="text-[#2C3E50] m-0"
                        style={{
                            fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif",
                            fontWeight: 500,
                            fontSize: '28px',
                            letterSpacing: '0.01em',
                        }}
                    >
                        Dr. Maya Reynolds, PsyD
                    </h1>
                </Link>

                {/* Mobile Logo - Right */}
                <Link href="/" className="no-underline md:hidden">
                    <h1
                        className="text-[#2C3E50] m-0"
                        style={{
                            fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif",
                            fontWeight: 500,
                            fontSize: '18px',
                            letterSpacing: '0.01em',
                        }}
                    >
                        Dr. Maya Reynolds, PsyD
                    </h1>
                </Link>

                {/* Desktop Navigation - Right */}
                <nav className="hidden md:flex items-end gap-4 sm:gap-6 md:gap-8 lg:gap-12 pb-[2px]">
                    <Link
                        href="/blog"
                        className="text-[#2C3E50] transition-all no-underline hover:underline underline-offset-4"
                        style={{
                            fontFamily: "'Cormorant Garamond', Georgia, serif",
                            fontWeight: 500,
                            fontSize: 'clamp(16px, calc((1.2 - 1) * 1.2vw + 1rem), 20px)',
                            letterSpacing: '-0.01em',
                        }}
                    >
                        Blog
                    </Link>
                    <Link
                        href="/contact"
                        className="text-[#2C3E50] transition-all no-underline hover:underline underline-offset-4"
                        style={{
                            fontFamily: "'Cormorant Garamond', Georgia, serif",
                            fontWeight: 500,
                            fontSize: 'clamp(16px, calc((1.2 - 1) * 1.2vw + 1rem), 20px)',
                            letterSpacing: '-0.01em',
                        }}
                    >
                        Contact
                    </Link>
                </nav>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-[#FAF8F5] z-40 md:hidden flex flex-col items-center justify-center gap-8 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            >
                <Link
                    href="/"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-[#2C3E50] text-2xl no-underline hover:underline"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}
                >
                    Home
                </Link>
                <Link
                    href="/blog"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-[#2C3E50] text-2xl no-underline hover:underline"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400 }}
                >
                    Blog
                </Link>
                <Link
                    href="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-[#2C3E50] text-2xl no-underline hover:underline"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400 }}
                >
                    Contact
                </Link>
            </div>
        </>
    );
}

