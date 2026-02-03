"use client";

import { useState } from "react";

export default function Newsletter() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle newsletter signup
        console.log("Newsletter signup:", email);
        setEmail("");
    };

    return (
        <section className="w-full bg-[#7D8B7A] py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20">
            <div className="max-w-[900px] mx-auto">
                {/* Newsletter Form */}
                <form onSubmit={handleSubmit} className="w-full">
                    <div className="border border-white p-10 md:p-14">
                        {/* Title */}
                        <h2
                            className="text-white text-center mb-6"
                            style={{
                                fontFamily: "'Cormorant Garamond', Georgia, serif",
                                fontWeight: 500,
                                fontSize: 'calc((2.5 - 1) * 1.2vw + 1rem)',
                                lineHeight: '1.2em',
                            }}
                        >
                            Subscribe to our newsletter
                        </h2>

                        {/* Description */}
                        <p
                            className="text-white/90 text-center mb-10"
                            style={{
                                fontFamily: "'Cormorant Garamond', Georgia, serif",
                                fontWeight: 400,
                                fontSize: 'calc((1.2 - 1) * 1.2vw + 1rem)',
                                lineHeight: '1.6em'
                            }}
                        >
                            Sign up for our newsletter to receive updates and exclusive content.
                        </p>

                        {/* Email Input */}
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email Address"
                                required
                                className="flex-grow px-4 md:px-5 py-3 md:py-4 bg-transparent border border-white text-white placeholder-white/60 focus:outline-none focus:border-white/80"
                                style={{
                                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                                    fontSize: 'clamp(14px, calc((1.2 - 1) * 1.2vw + 1rem), 18px)',
                                }}
                            />
                            <button
                                type="submit"
                                className="px-6 md:px-10 py-3 md:py-4 bg-white text-[#7D8B7A] uppercase tracking-wide font-medium hover:bg-white/90 transition-all duration-300"
                                style={{
                                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                                    fontSize: 'clamp(14px, 16px, 18px)',
                                }}
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}
