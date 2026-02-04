import Image from "next/image";
import Link from "next/link";

export default function SocialFeed() {
    const socialImages = [
        { src: "/social-1.png", alt: "Take a deep breath - Therapy wellness post" },
        { src: "/social-2.png", alt: "Healing takes time - Mental health self-care" },
        { src: "/social-3.png", alt: "You are not alone - Support message" },
        { src: "/social-4.png", alt: "Begin your journey - Therapy invitation" },
    ];

    return (
        <section className="w-full bg-[#FAF8F5] py-20 md:py-28 lg:py-36 px-6 md:px-12 lg:px-20">
            <div className="max-w-[1400px] mx-auto">
                {/* Title */}
                <h2
                    className="text-[#2C3E50]"
                    style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontWeight: 500,
                        fontStyle: 'normal',
                        fontSize: 'calc((3 - 1) * 1.2vw + 1rem)',
                        lineHeight: 'calc(1.2 * (1 + (1 - 3) / 25))',
                        letterSpacing: '0em',
                        textTransform: 'none',
                        whiteSpace: 'pre-wrap',
                        margin: '2rem 0',
                    }}
                >
                    Find me on social.
                </h2>

                {/* Social Images Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {socialImages.map((image, index) => (
                        <Link
                            key={index}
                            href="#"
                            className="block relative aspect-square overflow-hidden rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 768px) 50vw, 25vw"
                                quality={90}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
