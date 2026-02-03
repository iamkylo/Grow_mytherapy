import Image from "next/image";
import ScrollAnimate from "./ScrollAnimate";

export default function NotAlone() {
    const bulletPoints = [
        "Looking put-together while falling apart inside",
        "Constant worry that won't quiet down",
        "Trouble sleeping or truly relaxing",
        "Waiting for the next thing to go wrong",
        "Feeling disconnected from who you really are"
    ];

    return (
        <section className="flex flex-col md:flex-row w-full min-h-[500px] md:min-h-[600px]">
            {/* Image - Top on mobile, Left on desktop */}
            <ScrollAnimate animation="fade-left" className="w-full md:w-1/2 relative h-[300px] sm:h-[350px] md:h-auto order-1">
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
                        src="/slide 3.png"
                        alt="You don't have to do this alone"
                        fill
                        priority
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        quality={90}
                    />
                    <div className="fluidImageOverlay"></div>
                </div>
            </ScrollAnimate>

            {/* Content - Below image on mobile, Right on desktop */}
            <ScrollAnimate animation="fade-up" delay={0.1} className="w-full md:w-1/2 flex flex-col justify-between bg-[#D4CEC4] order-2">
                <div className="px-5 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-24 lg:py-32 flex flex-col justify-center flex-grow">
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
                        You don't have to carry this <em className="italic">alone</em>.
                    </h2>

                    {/* Subheading */}
                    <p
                        className="mb-3 sm:mb-4 md:mb-6 text-[#2C3E50]"
                        style={{
                            fontFamily: "'Cormorant Garamond', Georgia, serif",
                            fontWeight: 500,
                            fontSize: 'clamp(15px, calc((1.2 - 1) * 1.2vw + 1rem), 20px)',
                            lineHeight: '1.7em'
                        }}
                    >
                        If any of this sounds familiar, know that change is possible:
                    </p>

                    {/* Bullet List */}
                    <ul className="mb-4 sm:mb-5 md:mb-6 lg:mb-8 space-y-1.5 sm:space-y-2 pl-1">
                        {bulletPoints.map((point, index) => (
                            <li
                                key={index}
                                className="text-[#2C3E50] flex items-start"
                                style={{
                                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                                    fontWeight: 400,
                                    fontSize: 'clamp(14px, calc((1.2 - 1) * 1.2vw + 1rem), 20px)',
                                    lineHeight: '1.6em'
                                }}
                            >
                                <span className="mr-2 sm:mr-3">•</span>
                                <span className="text-[#2C3E50]">{point}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Closing Paragraph */}
                    <p
                        className="text-[#2C3E50]"
                        style={{
                            fontFamily: "'Cormorant Garamond', Georgia, serif",
                            fontWeight: 400,
                            fontSize: 'clamp(14px, calc((1.2 - 1) * 1.2vw + 1rem), 20px)',
                            lineHeight: '1.7em'
                        }}
                    >
                        My goal isn't just relief—it's helping you build resilience, self-understanding, and a life that feels like yours again.
                    </p>
                </div>

                {/* Work With Me Bar */}
                <a
                    href="/services"
                    className="group w-full bg-transparent py-5 sm:py-6 md:py-7 px-5 sm:px-6 md:px-12 lg:px-20 flex items-center justify-center text-[#2C3E50] hover:bg-[#7D8B7A] hover:text-white hover:border-[#7D8B7A] transition-all duration-500 ease-out border-t border-[#2C3E50]/30"
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
                        Explore My Approach
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
