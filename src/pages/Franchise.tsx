
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/franchise/HeroSection";
import VideoSection from "@/components/franchise/VideoSection";
import WhyChooseUs from "@/components/franchise/WhyChooseUs";
import LocationGallery from "@/components/franchise/LocationGallery";
import CeoSection from "@/components/franchise/CeoSection";
import BenefitsTabs from "@/components/franchise/BenefitsTabs";
import Testimonials from "@/components/franchise/Testimonials";
import ContactForm from "@/components/franchise/ContactForm";
import OwnershipJourney from "@/components/franchise/OwnershipJourney";

const Franchise = () => {
  // Update document title using useEffect, which is safer for client-side updates
  useEffect(() => {
    document.title = "Ευκαιρίες Franchise - King's Barber";
  }, []);
  
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <VideoSection />
      <WhyChooseUs />
      <LocationGallery />
      <CeoSection />
      <BenefitsTabs />
      <Testimonials />
      <OwnershipJourney />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Franchise;
