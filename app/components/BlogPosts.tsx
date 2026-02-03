import Image from "next/image";
import Link from "next/link";

interface BlogPost {
    id: string;
    title: string;
    date: string;
    image: string;
    slug: string;
}

export default function BlogPosts() {
    const blogPosts: BlogPost[] = [
        {
            id: "1",
            title: "Understanding Anxiety: Signs You Might Be Struggling",
            date: "1/15/26",
            image: "/blog 1.jpg",
            slug: "understanding-anxiety"
        },
        {
            id: "2",
            title: "Burnout Recovery: Finding Your Way Back",
            date: "1/8/26",
            image: "/blog 2.png",
            slug: "burnout-recovery"
        },
        {
            id: "3",
            title: "Trauma-Informed Approaches to Healing",
            date: "12/20/25",
            image: "/blog 3.jpe",
            slug: "trauma-informed-healing"
        },
        {
            id: "4",
            title: "The Power of Slowing Down in a Fast-Paced World",
            date: "12/5/25",
            image: "/blog 4.jpg",
            slug: "power-of-slowing-down"
        }
    ];

    return (
        <section className="w-full bg-[#EDE8E0] py-20 md:py-28 lg:py-36 px-6 md:px-12 lg:px-20">
            <div className="max-w-[1200px] mx-auto">
                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-12">
                    {blogPosts.map((post) => (
                        <article
                            key={post.id}
                            className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_-15px_rgba(44,62,80,0.15)] hover:shadow-[0_20px_60px_-15px_rgba(44,62,80,0.25)] hover:-translate-y-2 transition-all duration-500 ease-out"
                        >
                            {/* Post Image */}
                            <Link href={`/blog/${post.slug}`} className="block">
                                <div className="relative w-full aspect-[16/10] overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        quality={90}
                                    />
                                    {/* Subtle gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                            </Link>

                            <div className="p-6 md:p-8 flex flex-col flex-grow">
                                {/* Date */}
                                <p
                                    className="text-[#7D8B7A] mb-3 uppercase tracking-wider"
                                    style={{
                                        fontFamily: "'Montserrat', sans-serif",
                                        fontSize: '12px',
                                        fontWeight: 500,
                                    }}
                                >
                                    {post.date}
                                </p>

                                {/* Post Title */}
                                <h2
                                    className="text-[#2C3E50] mb-4 md:mb-5 flex-grow"
                                    style={{
                                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                                        fontWeight: 600,
                                        fontSize: 'clamp(20px, calc((2 - 1) * 1.2vw + 1rem), 28px)',
                                        lineHeight: '1.35em',
                                    }}
                                >
                                    {post.title}
                                </h2>

                                {/* Read More Link */}
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="inline-flex items-center text-[#2C3E50] group/link"
                                    style={{
                                        fontFamily: "'Montserrat', sans-serif",
                                        fontSize: '14px',
                                        fontWeight: 500,
                                        textDecoration: 'none',
                                    }}
                                >
                                    <span className="border-b border-[#2C3E50]/30 group-hover/link:border-[#2C3E50] transition-colors duration-300">Read More</span>
                                    <span className="ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
