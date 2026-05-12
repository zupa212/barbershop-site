
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
import SEO from "@/components/SEO";
import { buildLocationPageSchema, seoPages } from "@/lib/seo";

const ThermiShop = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      <SEO page={seoPages.thermi} schema={buildLocationPageSchema("thermi")} />
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
      <InstagramFeed compact />
      <Footer />
    </main>
  );
};

export default ThermiShop;
