import Image from "next/image";

export default function Hero() {
    return (
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 pt-8 lg:pt-16 pb-8 sm:pb-12 lg:pb-0 gap-8 sm:gap-12 md:gap-16 lg:gap-20">
            {/* Image Section - Top on mobile, Left on desktop */}
            <div className="w-full lg:w-[48%] flex justify-center lg:justify-start order-1 lg:order-1">
                <div className="relative w-[180px] sm:w-[240px] md:w-[300px] lg:w-full lg:max-w-[500px] aspect-[3/4] animate-scale-in opacity-0">
                    {/* Shadow layer behind the image */}
                    <div
                        className="absolute inset-0 shadow-[0_30px_80px_-10px_rgba(44,62,80,0.4),0_15px_40px_-5px_rgba(125,139,122,0.3)]"
                        style={{ borderRadius: '50% 50% 0 0 / 33.33% 33.33% 0 0' }}
                    ></div>
                    {/* Arched frame - rounded top, straight sides and bottom */}
                    <div
                        className="absolute inset-0 overflow-hidden bg-white border-4 border-white/50"
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
                                "--image-component-container-height": "457.5px",
                                "--image-component-container-width": "100%",
                            } as React.CSSProperties}
                        >
                            {/* Hero image - Dr. Maya Reynolds */}
                            <Image
                                src="/hero-flower.jpg"
                                alt="Dr. Maya Reynolds smiling warmly in a bright, welcoming therapy office"
                                fill
                                className="object-cover"
                                style={{ objectPosition: '55% 58%' }}
                                priority
                                sizes="(max-width: 640px) 200px, (max-width: 768px) 280px, (max-width: 1024px) 350px, 50vw"
                                quality={100}
                                unoptimized
                            />
                            <div className="fluidImageOverlay"></div>
                            {/* Subtle inner shadow for organic feel */}
                            <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.08)] pointer-events-none" style={{ borderRadius: '50% 50% 0 0 / 33.33% 33.33% 0 0' }}></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Text Section - Below image on mobile, Right on desktop */}
            <div className="w-full lg:w-[48%] flex flex-col items-center justify-center text-center px-2 sm:px-4 md:px-8 lg:px-0 order-2 lg:order-2 pt-8 sm:pt-10 md:pt-16 lg:pt-28">
                {/* Headline - Stacked vertically */}
                <h1
                    className="text-[#1F2A33] leading-[1.1] mb-2 sm:mb-3 md:mb-4 animate-fade-in-up opacity-0 animation-delay-200"
                    style={{
                        fontFamily: "'Canicule Display', serif",
                        fontWeight: 900,
                        fontSize: 'clamp(36px, 5vw, 72px)',
                        lineHeight: '1.1',
                        textAlign: 'center',
                        whiteSpace: 'pre-wrap',
                        letterSpacing: '-0.02em',
                        wordSpacing: '0.08em',
                        textShadow: '0 4px 20px rgba(44, 62, 80, 0.15)',
                    }}
                >
                    <span style={{ whiteSpace: 'nowrap' }}>Reclaim your calm,</span><br /><span style={{ whiteSpace: 'nowrap' }}>Reclaim your life</span>
                </h1>

                {/* Sub-headline */}
                <p
                    className="text-[#1F2A33] mt-1 mb-3 sm:mb-4 md:mb-5 lg:mb-6 animate-fade-in-up opacity-0 animation-delay-300"
                    style={{
                        fontFamily: "'Canicule Display', serif",
                        fontWeight: 400,
                        fontSize: 'clamp(13px, 2.5vw, 19px)',
                        lineHeight: '1.85em',
                    }}
                >
                    Therapy for An<span style={{ fontFamily: "'Cormorant Garamond', serif" }}>x</span>iety, Trauma and Burnout in Santa Monica, CA
                </p>

                {/* CTA Button */}
                <button
                    className="px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 bg-[#2C3E50] text-white tracking-wide rounded-2xl shadow-[0_4px_20px_-4px_rgba(44,62,80,0.25)] transition-all duration-500 ease-out whitespace-nowrap cursor-pointer hover:bg-[#7D8B7A] hover:scale-105 hover:shadow-[0_8px_30px_-4px_rgba(125,139,122,0.35)] focus:outline-none focus:ring-2 focus:ring-[#7D8B7A] focus:ring-offset-2 animate-fade-in-up opacity-0 animation-delay-400"
                    style={{
                        fontFamily: "'Canicule Display', serif",
                        fontSize: 'clamp(17px, 19px, 22px)',
                        fontWeight: 500
                    }}
                    aria-label="Schedule a consultation with Dr. Maya Reynolds"
                >
                    Begin Your Journey
                </button>
            </div>
        </div>
    );
}
