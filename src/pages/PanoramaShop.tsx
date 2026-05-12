
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
import PanoramaLocation from "@/components/PanoramaLocation";
import SEO from "@/components/SEO";
import { buildLocationPageSchema, seoPages } from "@/lib/seo";

const PanoramaShop = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      <SEO page={seoPages.panorama} schema={buildLocationPageSchema("panorama")} />
      <Navbar />
      <Hero />
      <PanoramaLocation />
      <Gallery showOnlyPanorama={true} />
      <Parallax />
      <TeamSection hideLeadershipControls={true} />
      <StoreHours showOnlyPanorama={true} />
      <Testimonials />
      <ContactForm />
      <Services />
      <InstagramFeed compact />
      <Footer />
    </main>
  );
};

export default PanoramaShop;
