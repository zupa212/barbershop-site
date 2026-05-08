
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import StoreHours from "@/components/StoreHours";
import Footer from "@/components/Footer";
import InstagramFeed from "@/components/InstagramFeed";
import Testimonials from "@/components/Testimonials";
import Parallax from "@/components/Parallax";
import TeamSection from "@/components/TeamSection";
import ContactForm from "@/components/ContactForm";
import ThermiLocation from "@/components/ThermiLocation";
import { Helmet } from "react-helmet";

const ThermiShop = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      <Helmet>
        <title></title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </Helmet>
      <Navbar />
      <Hero />
      <ThermiLocation />
      <Gallery showOnlyThermi={true} />
      <Parallax />
      <TeamSection showOnlyThermi={true} />
      <StoreHours showOnlyThermi={true} />
      <Testimonials />
      <ContactForm />
      <Services />
      <InstagramFeed />
      <Footer />
    </main>
  );
};

export default ThermiShop;
