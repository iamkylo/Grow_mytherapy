import Header from "./components/Header";
import Hero from "./components/Hero";
import FulfillingLife from "./components/FulfillingLife";
import NotAlone from "./components/NotAlone";
import MySpecialties from "./components/MySpecialties";
import AboutSection from "./components/AboutSection";
import FAQSection from "./components/FAQSection";
import ProfessionalBackground from "./components/ProfessionalBackground";
import MyOffice from "./components/MyOffice";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] flex flex-col">
      <Header />

      <main className="flex-grow">
        <Hero />
        <FulfillingLife />
        <MySpecialties />
        <NotAlone />
        <AboutSection />
        <FAQSection />
        <ProfessionalBackground />
        <MyOffice />
        <GetStarted />
      </main>

      <Footer />
    </div>
  );
}
