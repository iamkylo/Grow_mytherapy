import Image from "next/image";
import ScrollAnimate from "./ScrollAnimate";

export default function AboutSection() {
    return (
        <section className="w-full bg-[#EDE8E0] py-16 sm:py-20 md:py-28 lg:py-36 px-5 sm:px-6 md:px-12 lg:px-20">
            <div className="max-w-[1800px] mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-4 sm:gap-6 md:gap-8 lg:gap-12">

                {/* Images Section - Top on mobile, Right on desktop */}
                <ScrollAnimate animation="fade-right" className="w-full lg:w-[55%] relative flex justify-center lg:justify-end order-1 lg:order-2 mb-2 sm:mb-4 lg:mb-0">
                    {/* Main Arched Image */}
                    <div className="relative w-[180px] sm:w-[220px] md:w-[300px] lg:w-[400px] aspect-[2/3]">
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
                                    src="/dr-maya-reynolds.png"
                                    alt="Person holding a bouquet of lilac flowers"
                                    fill
                                    className="object-cover object-center"
                                    sizes="(max-width: 640px) 180px, (max-width: 768px) 220px, (max-width: 1024px) 300px, 400px"
                                    quality={90}
                                />
                                <div className="fluidImageOverlay"></div>
                            </div>
                        </div>
                    </div>

                    {/* Circular Overlay Image - Commented out
                    <div
                        className="absolute bottom-[-20px] sm:bottom-[-30px] md:bottom-[-40px] right-[5%] sm:right-[10%] lg:right-[5%] w-[100px] sm:w-[120px] md:w-[150px] lg:w-[220px] aspect-square rounded-full overflow-hidden shadow-lg"
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
                                src="/dr.png"
                                alt="Dr. Maya Reynolds"
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 100px, (max-width: 768px) 120px, (max-width: 1024px) 150px, 220px"
                                quality={90}
                            />
                            <div className="fluidImageOverlay"></div>
                        </div>
                    </div>
                    */}
                </ScrollAnimate>

                {/* Content Section - Below images on mobile, Left on desktop */}
                <ScrollAnimate animation="fade-up" delay={0.1} className="w-full lg:w-[45%] flex flex-col justify-center pt-4 sm:pt-6 md:pt-8 lg:pt-24 px-0 md:pl-4 lg:pl-12 order-2 lg:order-1">
                    {/* Heading */}
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
                        Hi, I'm Dr. Maya Reynolds.
                    </h2>

                    {/* Paragraph */}
                    <p
                        className="mb-6 sm:mb-8 md:mb-10 text-[#2C3E50]"
                        style={{
                            fontFamily: "'Cormorant Garamond', Georgia, serif",
                            fontWeight: 400,
                            fontSize: 'clamp(15px, calc((1.2 - 1) * 1.2vw + 1rem), 20px)',
                            lineHeight: '1.7em'
                        }}
                    >
                        I'm a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I work with are high-achieving, thoughtful, and self-aware—yet feel exhausted, stuck in overthinking, or emotionally on edge. You don't have to keep pushing through alone.
                    </p>

                    {/* Let's Chat Button */}
                    <div className="flex justify-center lg:justify-start">
                        <button
                            className="px-6 md:px-10 py-3 md:py-4 bg-[#2C3E50] text-white tracking-wide rounded-2xl shadow-[0_4px_20px_-4px_rgba(44,62,80,0.25)] transition-all duration-500 ease-out cursor-pointer hover:bg-[#7D8B7A] hover:scale-105 hover:shadow-[0_8px_30px_-4px_rgba(125,139,122,0.35)]"
                            style={{
                                fontFamily: "'Canicule Display', serif",
                                fontSize: 'clamp(14px, 16px, 18px)',
                                fontWeight: 500
                            }}
                        >
                            Get to Know Me
                        </button>
                    </div>
                </ScrollAnimate>
            </div>
        </section >
    );
}
