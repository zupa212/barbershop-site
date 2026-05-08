
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Hero = () => {
  const isMobile = useIsMobile();
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();
  const isPanoramaPage = location.pathname === "/kings-barbershop-panorama";
  const isThermiPage = location.pathname === "/kings-barbershop-thermi";

  // Handle parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div className="relative min-h-screen">
      {/* Black background instead of image */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Diagonal overlay with parallax effect */}
      <div className="absolute inset-0 overflow-hidden" style={{
      clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0% 100%)'
    }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url('/uploads/3bb4c8fb-d5ca-4c2d-a111-376820b1103e.png')`,
        opacity: 0.85,
        transform: `translateY(${scrollY * 0.35}px)` // Increased parallax effect multiplier from 0.15 to 0.35
      }} />
      </div>
      
      <div className="relative pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          {/* Adding H2 tag for SEO - visible and styled for design */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 opacity-80">Kingsbarbershop Θεσσαλονίκη</h2>
          
          {/* Only render content div for desktop */}
          {!isMobile && <div className="animate-fade-up mx-[39px] my-[180px] py-[90px] rounded-none">
              {isPanoramaPage && <h2 className="text-5xl font-bold text-white mb-6">PANORAMA</h2>}
              {isThermiPage && <h2 className="text-5xl font-bold text-white mb-6">ΘΕΡΜΗ</h2>}
              <Button className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6" onClick={() => window.location.href = "#contact"}>
                Κλείστε Ραντεβού - Κούρεμα Θεσσαλονίκη
              </Button>
            </div>}
          
          {/* Mobile content - only display Book Now button without other content */}
          {isMobile && <div className="flex flex-col items-center justify-center mt-80">
              {isPanoramaPage && <h2 className="text-4xl font-bold text-white mb-6">PANORAMA</h2>}
              {isThermiPage && <h2 className="text-4xl font-bold text-white mb-6">ΘΕΡΜΗ</h2>}
              <Button className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6" onClick={() => window.location.href = "#contact"}>
                Κλείστε Ραντεβού
              </Button>
            </div>}
        </div>
      </div>
    </div>;
};

export default Hero;
