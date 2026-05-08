
import { Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { useLocation } from "react-router-dom";

const InstagramFeed = () => {
  const panoramaInstagramUrl = "https://www.instagram.com/kings_barbershop_panorama/";
  const thermiInstagramUrl = "https://www.instagram.com/kings_barbershop_thermi/";
  const kalamariaInstagramUrl = "https://www.instagram.com/kings_barbershop_kalamaria/";
  const location = useLocation();
  const isPanoramaPage = location.pathname === "/kings-barbershop-panorama";
  const isThermiPage = location.pathname === "/kings-barbershop-thermi";
  const isKalamariaPage = location.pathname === "/kings-barbershop-kalamaria";

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Follow Us on Instagram</h2>
          <p className="text-gray-300 mb-6">Stay updated with our latest styles and promotions</p>
          <div className="flex flex-wrap gap-4 justify-center">
            {/* Show only relevant button on location-specific pages, all buttons on homepage */}
            {(isPanoramaPage || (!isThermiPage && !isKalamariaPage)) && (
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-colors"
                onClick={() => window.open(panoramaInstagramUrl, '_blank')}
              >
                <Instagram className="mr-2 h-5 w-5" />
                @kings_barbershop_panorama
              </Button>
            )}
            
            {(isThermiPage || (!isPanoramaPage && !isKalamariaPage)) && (
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-colors"
                onClick={() => window.open(thermiInstagramUrl, '_blank')}
              >
                <Instagram className="mr-2 h-5 w-5" />
                @kings_barbershop_thermi
              </Button>
            )}
            
            {(isKalamariaPage || (!isPanoramaPage && !isThermiPage)) && (
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-colors"
                onClick={() => window.open(kalamariaInstagramUrl, '_blank')}
              >
                <Instagram className="mr-2 h-5 w-5" />
                @kings_barbershop_kalamaria
              </Button>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Updated Instagram feed images with the new ones */}
          <div className="aspect-square relative overflow-hidden rounded-xl group">
            <img
              src="/uploads/5655312d-26cc-4849-a60f-41e3548ae01e.png"
              alt="Instagram post 1"
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <a href={panoramaInstagramUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                View on Instagram
              </a>
            </div>
          </div>
          <div className="aspect-square relative overflow-hidden rounded-xl group">
            <img
              src="/uploads/f1fb9576-0c3f-4157-b943-5ffdd370766a.png"
              alt="Instagram post 2"
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <a href={panoramaInstagramUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                View on Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
