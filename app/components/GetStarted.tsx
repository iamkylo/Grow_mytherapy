import ScrollAnimate from "./ScrollAnimate";

export default function GetStarted() {
    return (
        <section className="w-full bg-[#7D8B7A] pt-8 md:pt-12 lg:pt-16 pb-20 md:pb-28 lg:pb-36 px-6 md:px-12 lg:px-20">
            <ScrollAnimate animation="fade-up" className="max-w-[700px] mx-auto text-center">
                {/* Heading */}
                <h2
                    className="mb-8 md:mb-10 leading-[1.2] text-white"
                    style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontWeight: 600,
                        fontSize: 'clamp(32px, 5vw, 48px)',
                        lineHeight: '1.2',
                        letterSpacing: '-0.02em',
                    }}
                >
                    <span style={{ whiteSpace: 'nowrap' }}>Whenever you're ready,</span><br />
                    <span style={{ whiteSpace: 'nowrap' }}>I'm here.</span>
                </h2>

                {/* Paragraph */}
                <p
                    className="mb-10 md:mb-12 text-white/90 max-w-[550px] mx-auto"
                    style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontWeight: 400,
                        fontSize: 'clamp(16px, 2.5vw, 20px)',
                        lineHeight: '1.8',
                        letterSpacing: '0.01em'
                    }}
                >
                    You don't need to have everything figured out.<br />
                    Just take the first small step—I'll meet you where you are.
                </p>

                {/* Button */}
                <a
                    href="/contact"
                    className="inline-flex items-center px-8 md:px-12 py-4 md:py-5 bg-white text-[#2C3E50] tracking-wide rounded-full shadow-[0_4px_20px_-4px_rgba(44,62,80,0.15)] transition-all duration-500 ease-out cursor-pointer hover:bg-[#2C3E50] hover:text-white hover:shadow-[0_8px_30px_-4px_rgba(44,62,80,0.25)]"
                    style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: 'clamp(15px, 2vw, 18px)',
                        fontWeight: 600,
                        textDecoration: 'none',
                        letterSpacing: '0.02em'
                    }}
                >
                    Schedule a Consultation
                </a>
            </ScrollAnimate>
        </section>
    );
}
