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
import { Helmet } from "react-helmet";

const KalamariaShop = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      <Helmet>
        <title></title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="geo.region" content="" />
        <meta name="geo.placename" content="" />
        <meta name="geo.position" content="" />
      </Helmet>
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
      <InstagramFeed />
      <Footer />
    </main>
  );
};

export default KalamariaShop;