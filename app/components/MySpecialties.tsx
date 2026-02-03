import Image from "next/image";
import ScrollAnimate from "./ScrollAnimate";

interface Specialty {
    title: string;
    description: string;
    image: string;
    objectPosition?: string;
}

export default function MySpecialties() {
    const specialties: Specialty[] = [
        {
            title: "Anxiety & Panic",
            description: "Constant worry, tension in your body, sleepless nights. You look fine on the outside, but inside you're exhausted. Let's find your way back to calm.",
            image: "/specialty-1.jpg",
            objectPosition: "center center"
        },
        {
            title: "Trauma Recovery",
            description: "Whether from a single event or years of difficult experiences, we'll work at your pace—with care, safety, and techniques like EMDR that help your nervous system heal.",
            image: "/specialty-2.jpg",
            objectPosition: "center center"
        },
        {
            title: "Burnout & Perfectionism",
            description: "You've pushed through for so long, you've lost touch with yourself. Therapy can be a space to slow down, breathe, and remember who you are beyond the hustle.",
            image: "/specialty-3.jpg",
            objectPosition: "center 40%"
        }
    ];

    return (
        <section className="w-full bg-[#FAF8F5] py-16 md:py-24 px-6 md:px-12 lg:px-20">
            <div className="max-w-[1400px] mx-auto">
                {/* Section Title */}
                <ScrollAnimate animation="fade-up">
                    <h2
                        className="text-center mb-8 md:mb-12 lg:mb-16 text-[#2C3E50]"
                        style={{
                            fontFamily: "'Cormorant Garamond', Georgia, serif",
                            fontWeight: 600,
                            fontSize: 'calc((3 - 1) * 1.2vw + 1rem)',
                            lineHeight: 'calc(1.2 * (1 + (1 - 3) / 25))',
                            letterSpacing: '-0.01em',
                        }}
                    >
                        My Specialties
                    </h2>
                </ScrollAnimate>

                {/* Specialties Grid */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-8">
                    {specialties.map((specialty, index) => (
                        <ScrollAnimate key={index} animation="fade-up" delay={index * 0.1}>
                            <div
                                className="bg-[#EDE8E0] p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out cursor-pointer h-full"
                            >
                                {/* Title */}
                                <h3
                                    className="mb-2 sm:mb-3 md:mb-4 text-[#2C3E50] text-left"
                                    style={{
                                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                                        fontWeight: 550,
                                        fontSize: 'clamp(18px, calc((1.5 - 1) * 1.2vw + 1rem), 24px)',
                                        lineHeight: '1.4em',
                                    }}
                                >
                                    {specialty.title}
                                </h3>

                                {/* Description */}
                                <p
                                    className="mb-4 sm:mb-5 md:mb-6 lg:mb-8 text-[#2C3E50] text-left"
                                    style={{
                                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                                        fontWeight: 400,
                                        fontSize: 'clamp(16px, calc((1 - 1) * 1.2vw + 0.875rem), 20px)',
                                        lineHeight: '1.7em'
                                    }}
                                >
                                    {specialty.description}
                                </p>

                                {/* Circular Image with Shadow */}
                                <div className="mt-auto flex justify-center">
                                    <div className="relative w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] rounded-full overflow-hidden shadow-[0_15px_40px_-10px_rgba(44,62,80,0.4)]">
                                        <Image
                                            src={specialty.image}
                                            alt={specialty.title}
                                            fill
                                            className="object-cover"
                                            style={{ objectPosition: specialty.objectPosition || 'center center' }}
                                            sizes="(max-width: 640px) 140px, (max-width: 768px) 160px, (max-width: 1024px) 200px, 250px"
                                            quality={100}
                                        />
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimate>
                    ))}
                </div>
            </div>
        </section>
    );
}
