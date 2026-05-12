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
import KalamariaLocation from "@/components/KalamariaLocation";
import SEO from "@/components/SEO";
import { buildLocationPageSchema, seoPages } from "@/lib/seo";

const KalamariaShop = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      <SEO page={seoPages.kalamaria} schema={buildLocationPageSchema("kalamaria")} />
      <Navbar />
      <Hero />
      <KalamariaLocation />
      <Gallery showOnlyKalamaria={true} />
      <Parallax />
      <TeamSection showOnlyKalamaria={true} />
      <StoreHours showOnlyKalamaria={true} />
      <Testimonials />
      <ContactForm />
      <Services />
      <InstagramFeed compact />
      <Footer />
    </main>
  );
};

export default KalamariaShop;
