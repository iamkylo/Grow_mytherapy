import Image from "next/image";

export default function BlogHero() {
    return (
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between px-5 sm:px-6 md:px-12 lg:px-16 xl:px-20 pt-8 lg:pt-16 pb-16 sm:pb-20 md:pb-24 gap-8 sm:gap-12 md:gap-16 lg:gap-20">
            {/* Image Section - Top on mobile, Left on desktop */}
            <div className="w-full lg:w-[48%] flex justify-center lg:justify-start order-1 lg:order-1">
                <div className="relative w-[160px] sm:w-[200px] md:w-[300px] lg:w-full lg:max-w-[500px] aspect-[2/3]">
                    {/* Arched frame - rounded top, straight sides and bottom */}
                    <div
                        className="absolute inset-0 overflow-hidden bg-white"
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
                                alt="Dr. Maya Reynolds, PsyD"
                                fill
                                className="object-cover object-center"
                                priority
                                sizes="(max-width: 640px) 160px, (max-width: 768px) 200px, (max-width: 1024px) 300px, 50vw"
                                quality={90}
                            />
                            <div className="fluidImageOverlay"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section - Below image on mobile, Right on desktop */}
            <div className="w-full lg:w-[48%] flex flex-col items-center lg:items-start justify-center text-center lg:text-left px-2 sm:px-4 md:px-8 lg:px-0 order-2 lg:order-2 pt-2 sm:pt-4 md:pt-8 lg:pt-32 lg:pr-12">
                {/* Title */}
                <h1
                    className="text-[#2C3E50] mb-4 sm:mb-6 md:mb-8"
                    style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontWeight: 500,
                        fontStyle: 'normal',
                        fontSize: 'clamp(36px, calc((4.5 - 1) * 1.2vw + 1rem), 72px)',
                        lineHeight: 'calc(1.2 * (1 + (1 - 4.5) / 25))',
                        whiteSpace: 'pre-wrap',
                    }}
                >
                    Dr. Maya's{'\n'}Blog
                </h1>

                {/* Description */}
                <p
                    className="text-[#2C3E50] mb-4 sm:mb-6"
                    style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontWeight: 400,
                        fontStyle: 'normal',
                        fontSize: 'clamp(16px, calc((1.2 - 1) * 1.2vw + 1rem), 20px)',
                        lineHeight: '1.6em',
                        whiteSpace: 'pre-wrap',
                    }}
                >
                    Insights on anxiety, trauma, burnout, and finding balance in a fast-paced world.
                </p>

                {/* Tagline */}
                <p
                    className="text-[#2C3E50]"
                    style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontWeight: 600,
                        fontStyle: 'normal',
                        fontSize: 'clamp(16px, calc((1.2 - 1) * 1.2vw + 1rem), 20px)',
                        lineHeight: '1.6em',
                    }}
                >
                    Welcome to the journey.
                </p>
            </div>
        </div>
    );
}
