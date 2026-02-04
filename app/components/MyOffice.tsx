import Image from "next/image";

export default function MyOffice() {
    return (
        <section className="w-full bg-[#7D8B7A] py-16 sm:py-20 md:py-24 lg:py-28 px-5 sm:px-6 md:px-12 lg:px-20">
            <div className="max-w-[1400px] mx-auto">
                {/* Section Title */}
                <h2
                    className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-white"
                    style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontWeight: 600,
                        fontStyle: 'normal',
                        lineHeight: 'calc(1.2 * (1 + (1 - 3.0) / 25))',
                        fontSize: 'calc((3.0 - 1) * 1.2vw + 1rem)',
                        letterSpacing: '0em',
                        textTransform: 'none',
                        textShadow: '2px 4px 8px rgba(0, 0, 0, 0.3)',
                    }}
                >
                    Our Office
                </h2>

                {/* Description */}
                <p
                    className="text-center text-white/90 mb-8 sm:mb-10 md:mb-12 lg:mb-16 max-w-[800px] mx-auto"
                    style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontWeight: 400,
                        fontSize: 'clamp(15px, calc((1.2 - 1) * 1.2vw + 1rem), 20px)',
                        lineHeight: '1.6em',
                    }}
                >
                    My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease when they arrive.
                </p>

                {/* Office Images Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-10 md:mb-12 lg:mb-16 max-w-[1000px] mx-auto">
                    {/* Image 1 */}
                    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)]">
                        <Image
                            src="/office1.jpeg"
                            alt="Therapy office with comfortable seating and natural light"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 45vw"
                            quality={90}
                        />
                    </div>

                    {/* Image 2 */}
                    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)]">
                        <Image
                            src="/office2.jpeg"
                            alt="Calm therapy space with modern furnishings"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 45vw"
                            quality={90}
                        />
                    </div>
                </div>

                {/* Office Info and Hours */}
                <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-16 lg:gap-24 text-center">
                    {/* Address with Map Icon */}
                    <div className="flex flex-col items-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mb-2 sm:mb-3 md:mb-4 rounded-full bg-white/20 flex items-center justify-center">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <h3
                            className="text-white mb-2"
                            style={{
                                fontFamily: "'Cormorant Garamond', Georgia, serif",
                                fontWeight: 500,
                                fontStyle: 'normal',
                                fontSize: 'clamp(20px, calc((2 - 1) * 1.2vw + 1rem), 32px)',
                                lineHeight: '1.2em',
                            }}
                        >
                            Address
                        </h3>
                        <p
                            className="text-white/90"
                            style={{
                                fontFamily: "'Cormorant Garamond', Georgia, serif",
                                fontWeight: 400,
                                fontSize: 'clamp(14px, calc((1.2 - 1) * 1.2vw + 1rem), 18px)',
                                lineHeight: '1.6em',
                            }}
                        >
                            123th Street 45 W<br />
                            Santa Monica, CA 90401
                        </p>
                    </div>

                    {/* Hours with Clock Icon */}
                    <div className="flex flex-col items-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mb-2 sm:mb-3 md:mb-4 rounded-full bg-white/20 flex items-center justify-center">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3
                            className="text-white mb-2"
                            style={{
                                fontFamily: "'Cormorant Garamond', Georgia, serif",
                                fontWeight: 500,
                                fontStyle: 'normal',
                                fontSize: 'clamp(20px, calc((2 - 1) * 1.2vw + 1rem), 32px)',
                                lineHeight: '1.2em',
                            }}
                        >
                            Hours
                        </h3>
                        <p
                            className="text-white/90"
                            style={{
                                fontFamily: "'Cormorant Garamond', Georgia, serif",
                                fontWeight: 400,
                                fontSize: 'clamp(14px, calc((1.2 - 1) * 1.2vw + 1rem), 18px)',
                                lineHeight: '1.6em',
                            }}
                        >
                            Monday – Friday<br />
                            10am – 6pm
                        </p>
                    </div>

                    {/* Sessions with Video Icon */}
                    <div className="flex flex-col items-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mb-2 sm:mb-3 md:mb-4 rounded-full bg-white/20 flex items-center justify-center">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3
                            className="text-white mb-2"
                            style={{
                                fontFamily: "'Cormorant Garamond', Georgia, serif",
                                fontWeight: 500,
                                fontStyle: 'normal',
                                fontSize: 'clamp(20px, calc((2 - 1) * 1.2vw + 1rem), 32px)',
                                lineHeight: '1.2em',
                            }}
                        >
                            Sessions
                        </h3>
                        <p
                            className="text-white/90"
                            style={{
                                fontFamily: "'Cormorant Garamond', Georgia, serif",
                                fontWeight: 400,
                                fontSize: 'clamp(14px, calc((1.2 - 1) * 1.2vw + 1rem), 18px)',
                                lineHeight: '1.6em',
                            }}
                        >
                            In-person & Telehealth<br />
                            for California clients
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
