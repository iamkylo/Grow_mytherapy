import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogHero from "../components/BlogHero";
import BlogPosts from "../components/BlogPosts";
import Newsletter from "../components/Newsletter";

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-[#FAF8F5] flex flex-col">
            <Header />

            <main className="flex-grow">
                <BlogHero />
                <BlogPosts />
                <Newsletter />
            </main>

            <Footer />
        </div>
    );
}
