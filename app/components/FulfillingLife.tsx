import Image from "next/image";
import ScrollAnimate from "./ScrollAnimate";

export default function FulfillingLife() {
    return (
        <section className="flex flex-col md:flex-row w-full bg-[#EDE8E0] min-h-[400px] md:min-h-[500px]">
            {/* Image - Top on mobile, Right on desktop */}
            <ScrollAnimate animation="fade-right" className="w-full md:w-1/2 relative h-[250px] sm:h-[300px] md:h-auto order-1 md:order-2">
                <div
                    className="absolute inset-0"
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
                        src="/slide2.jpg"
                        alt="Fulfilling Life - Therapy Journey"
                        fill
                        priority
                        className="object-cover"
                        style={{ objectPosition: "center 25%" }}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        quality={100}
                        unoptimized
                    />
                    <div className="fluidImageOverlay"></div>
                </div>
            </ScrollAnimate>

            {/* Content - Below image on mobile, Left on desktop */}
            <ScrollAnimate animation="fade-up" delay={0.1} className="w-full md:w-1/2 flex flex-col justify-between order-2 md:order-1">
                <div className="px-5 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-24 lg:py-32 flex flex-col justify-center flex-grow">
                    <h2
                        className="mb-4 sm:mb-5 md:mb-6 lg:mb-8 leading-[1.1] text-[#2C3E50]"
                        style={{
                            fontFamily: "'Cormorant Garamond', Georgia, serif",
                            fontWeight: 600,
                            fontSize: 'clamp(28px, calc((3 - 1) * 1.2vw + 1rem), 52px)',
                            lineHeight: 'calc(1.2 * (1 + (1 - 3) / 25))',
                            letterSpacing: '-0.01em',
                        }}
                    >
                        From surviving to <em className="italic">thriving</em>.
                    </h2>

                    <p
                        className="text-[#2C3E50]"
                        style={{
                            fontFamily: "'Cormorant Garamond', Georgia, serif",
                            fontWeight: 500,
                            fontSize: 'clamp(15px, calc((1.2 - 1) * 1.2vw + 1rem), 20px)',
                            lineHeight: '1.7em',
                            marginBottom: '1rem',
                        }}
                    >
                        Therapy becomes a sanctuary—a place to slow down, reconnect with yourself, and discover more sustainable ways of living.
                    </p>
                    <p
                        className="mb-4 sm:mb-6 md:mb-8 text-[#2C3E50]"
                        style={{
                            fontFamily: "'Cormorant Garamond', Georgia, serif",
                            fontWeight: 400,
                            fontSize: 'clamp(15px, calc((1.2 - 1) * 1.2vw + 1rem), 20px)',
                            lineHeight: '1.7em'
                        }}
                    >
                        Whether you're a creative, entrepreneur, or professional, I'll help you move from white-knuckling through life to actually enjoying it.
                    </p>
                </div>

                {/* Get in Touch Bar */}
                <a
                    href="/contact"
                    className="w-full bg-transparent border-t border-[#2C3E50]/30 py-5 sm:py-6 md:py-7 px-5 sm:px-6 md:px-12 lg:px-20 flex items-center justify-center text-[#2C3E50] hover:bg-[#7D8B7A] hover:text-white hover:border-[#7D8B7A] transition-all duration-500 ease-out group"
                    style={{ textDecoration: 'none' }}
                >
                    <span
                        className="uppercase tracking-wide font-medium mr-3"
                        style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: 'clamp(12px, 14px, 16px)',
                            fontWeight: 500,
                        }}
                    >
                        Learn More
                    </span>
                    <svg
                        className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </a>
            </ScrollAnimate>
        </section>
    );
}
