import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactHero from "../components/ContactHero";
import BookAppointment from "../components/BookAppointment";
import MyOffice from "../components/MyOffice";
import SocialFeed from "../components/SocialFeed";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-[#D4CEC4] flex flex-col">
            <Header />

            <main className="flex-grow">
                <ContactHero />
                <BookAppointment />
                <MyOffice />
                <SocialFeed />
            </main>

            <Footer />
        </div>
    );
}
