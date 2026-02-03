import Image from "next/image";

export default function ContactHero() {
    return (
        <section className="w-full bg-[#D4CEC4] py-20 md:py-28 lg:py-36 px-6 md:px-12 lg:px-20">
            <div className="max-w-[1400px] mx-auto">
                {/* Title */}
                <h1
                    className="text-[#2C3E50]"
                    style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontWeight: 500,
                        fontStyle: 'normal',
                        fontSize: 'calc((4.5 - 1) * 1.2vw + 1rem)',
                        lineHeight: 'calc(1.2 * (1 + (1 - 4.5) / 25))',
                        letterSpacing: '0em',
                        textTransform: 'none',
                        whiteSpace: 'pre-wrap',
                        margin: '2rem 0',
                        marginBottom: '3rem',
                    }}
                >
                    Let's Connect
                </h1>

                {/* Content Grid */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    {/* Left Side - Text and Images */}
                    <div className="w-full lg:w-1/2">
                        {/* Text Content */}
                        <p
                            className="text-[#2C3E50]"
                            style={{
                                fontFamily: "'Cormorant Garamond', Georgia, serif",
                                fontWeight: 500,
                                fontStyle: 'normal',
                                fontSize: 'calc((1.2 - 1) * 1.2vw + 1rem)',
                                lineHeight: '1.6em',
                                letterSpacing: '0em',
                                whiteSpace: 'pre-wrap',
                                margin: '1rem 0',
                            }}
                        >
                            Ready to take the first step?
                        </p>
                        <p
                            className="text-[#2C3E50] mb-12"
                            style={{
                                fontFamily: "'Cormorant Garamond', Georgia, serif",
                                fontWeight: 400,
                                fontStyle: 'normal',
                                fontSize: 'calc((1.2 - 1) * 1.2vw + 1rem)',
                                lineHeight: '1.6em',
                                letterSpacing: '0em',
                                whiteSpace: 'pre-wrap',
                                margin: '1rem 0',
                            }}
                        >
                            I offer in-person sessions from my Santa Monica office and secure telehealth for California clients. Reach out for a free 15-minute consultation.
                        </p>

                        {/* Overlapping Images */}
                        <div className="relative h-[400px] w-full max-w-[400px]">
                            {/* Main arched image - Dr. Maya */}
                            <div className="absolute left-0 top-0 w-[250px] h-[350px]">
                                <div
                                    className="w-full h-full overflow-hidden shadow-[0_15px_40px_-10px_rgba(44,62,80,0.3)]"
                                    style={{ borderRadius: '50% 50% 0 0 / 33.33% 33.33% 0 0' }}
                                >
                                    <Image
                                        src="/dr-maya-reynolds.png"
                                        alt="Dr. Maya Reynolds, PsyD"
                                        fill
                                        className="object-cover"
                                        sizes="250px"
                                        quality={90}
                                    />
                                </div>
                            </div>
                            {/* Circular overlay image - Office */}
                            <div className="absolute right-0 bottom-0 w-[180px] h-[180px] rounded-full overflow-hidden shadow-[0_10px_30px_-8px_rgba(44,62,80,0.35)]">
                                <Image
                                    src="/office1.jpeg"
                                    alt="Therapy Office"
                                    fill
                                    className="object-cover"
                                    sizes="180px"
                                    quality={90}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Note Box */}
                    <div className="w-full lg:w-1/2 flex items-start">
                        <div className="bg-[#2C3E50] p-8 md:p-10 max-w-[500px] rounded-2xl shadow-xl">
                            <p
                                className="text-white"
                                style={{
                                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                                    fontSize: '16px',
                                    lineHeight: '1.7'
                                }}
                            >
                                <span className="font-bold">ABOUT MY APPROACH:</span> I believe therapy works best when clients feel respected, understood, and actively involved in the process. My goal is not just symptom relief, but helping clients develop insight, resilience, and a stronger relationship with themselves over time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
