import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

type MediaItem = {
  type: "image" | "video" | "gif" | "webp";
  src: string;
  poster?: string;
};

const Gallery = ({
  showOnlyPanorama = false,
  showOnlyThermi = false,
  showOnlyKalamaria = false
}) => {
  const [api, setApi] = useState<any>();
  const [secondApi, setSecondApi] = useState<any>();
  const location = useLocation();
  const isPanoramaPage = location.pathname === "/kings-barbershop-panorama" || showOnlyPanorama;
  const isThermiPage = location.pathname === "/kings-barbershop-thermi" || showOnlyThermi;
  const isKalamariaPage = location.pathname === "/kings-barbershop-kalamaria" || showOnlyKalamaria;

  const panoramaMediaItems: MediaItem[] = [{
    type: "image",
    src: "/uploads/7099f1c6-bf7f-4540-92ba-6b2c570ea590.png"
  }, {
    type: "image",
    src: "/uploads/3dce3f04-36ba-4ad2-a644-323cfcf5f86c.png"
  }, {
    type: "image",
    src: "/uploads/eaaa41e4-d99d-41b3-9b8a-2cfc525785ba.png"
  }, {
    type: "image",
    src: "/uploads/8c7aa925-cda9-4d89-9a00-3589f4e66070.png"
  }];

  const kalamariaMediaItems: MediaItem[] = [{
    type: "image",
    src: "/uploads/kalamaria-shop-1.jpg"
  }, {
    type: "image",
    src: "/uploads/kalamaria-shop-2.jpg"
  }, {
    type: "image",
    src: "/uploads/kalamaria-shop-3.jpg"
  }, {
    type: "image",
    src: "/uploads/kalamaria-shop-4.jpg"
  }];

  const thermiMediaItems: MediaItem[] = [{
    type: "image",
    src: "/uploads/5d2a21aa-5f38-41dc-97f9-ea5542f18422.png"
  }, {
    type: "image",
    src: "/uploads/9578646b-acc6-4acd-a585-fecd3233a5e1.png"
  }, {
    type: "image",
    src: "/uploads/570f21f7-b51f-4c52-9c75-10d1f95962d1.png"
  }];

  const generalMediaItems: MediaItem[] = [{
    type: "video",
    src: "https://kingbarbershopcdn.b-cdn.net/0404%20(4)%20(1).mp4",
    poster: "/uploads/186ad242-8663-4ddf-a4d7-02a7ae97a10b.png"
  }, {
    type: "image",
    src: "/uploads/9578646b-acc6-4acd-a585-fecd3233a5e1.png"
  }, {
    type: "video",
    src: "https://kingbarbershopcdn.b-cdn.net/405%20(1).mp4",
    poster: "/uploads/5d2a21aa-5f38-41dc-97f9-ea5542f18422.png"
  }, {
    type: "image",
    src: "/uploads/570f21f7-b51f-4c52-9c75-10d1f95962d1.png"
  }, {
    type: "video",
    src: "https://kingbarbershopcdn.b-cdn.net/406%20(1).mp4",
    poster: "/uploads/42b74b35-2613-486b-ae54-27a52c94f691.png"
  }, {
    type: "image",
    src: "/uploads/67c40099-be46-45a5-a16c-e4469b9a028b.png"
  }, {
    type: "image",
    src: "/uploads/2a2b44aa-309f-4ece-8bad-c1185b758612.png"
  }];

  let mediaItems = generalMediaItems;
  if (isPanoramaPage) {
    mediaItems = panoramaMediaItems;
  } else if (isThermiPage) {
    mediaItems = thermiMediaItems;
  } else if (isKalamariaPage) {
    mediaItems = kalamariaMediaItems;
  }

  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);
    api.scrollSnapList();
    api.scrollTo(0);
    return () => clearInterval(interval);
  }, [api]);

  useEffect(() => {
    if (!secondApi || isPanoramaPage || isThermiPage || isKalamariaPage) return;
    const interval = setInterval(() => {
      secondApi.scrollNext();
    }, 2500);
    secondApi.scrollSnapList();
    secondApi.scrollTo(0);
    return () => clearInterval(interval);
  }, [secondApi, isPanoramaPage, isThermiPage, isKalamariaPage]);

  let locations = [{
    name: "King's Barbershop Panorama",
    description: "Νιώστε την αισθητική σε ένα μοναδικό μπαρμπέρικο.",
    image: "/uploads/a2dc0838-660c-4427-b7d2-0f7b43aac5f9.png",
    bookingUrl: "https://www.fresha.com/el/a/kings-barbershop-panorama-panorama-venizeloy-12-i9fmuc5j/booking?allOffer=true&pId=949345"
  }, {
    name: "King's Barbershop Thermi",
    description: "Το barbering συναντά την κομμωτική. Νιώστε τη διαφορά!",
    image: "/uploads/78bcdd7e-cad9-4335-98ca-c30c34837c71.png",
    bookingUrl: "https://www.fresha.com/el/a/kings-barbershop-thermi-thermi-karaoli-kai-dimitrioy-4-fr2zi7of/booking?allOffer=true&pId=949345"
  }, {
    name: "King's Barbershop Kalamaria",
    description: "Εξαιρετικές υπηρεσίες περιποίησης στην καρδιά της Καλαμαριάς.",
    image: "/uploads/kalamaria-shop-4.jpg",
    bookingUrl: "https://www.fresha.com/el/a/kings-barbershop-kalamaria-kalamaria-kotyoron-37-j00634ss/booking?allOffer=true&menu=true&pId=949345"
  }];
  if (isPanoramaPage) {
    locations = locations.filter(loc => loc.name === "King's Barbershop Panorama");
  } else if (isThermiPage) {
    locations = locations.filter(loc => loc.name === "King's Barbershop Thermi");
  } else if (isKalamariaPage) {
    locations = locations.filter(loc => loc.name === "King's Barbershop Kalamaria");
  }

  const renderMedia = (item: MediaItem, index: number) => {
    switch (item.type) {
      case "video":
        return (
          <video 
            src={item.src} 
            poster={item.poster} 
            className="absolute inset-0 w-full h-full object-cover" 
            autoPlay 
            muted 
            loop 
            playsInline 
            controls={false}
          />
        );
      case "gif":
        return <img src={item.src} alt={`Gallery item ${index + 1}`} className="absolute inset-0 object-cover w-full h-full transition-transform duration-300 hover:scale-110" />;
      case "webp":
      case "image":
      default:
        return <img src={item.src} alt={`Gallery item ${index + 1}`} className="absolute inset-0 object-cover w-full h-full transition-transform duration-300 hover:scale-110" />;
    }
  };

  return <section id="gallery" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {!isPanoramaPage && !isThermiPage && !isKalamariaPage && <>
            <h2 className="text-4xl font-bold text-center text-white mb-12">Our Locations</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-16">
              {locations.map((location, index) => <div key={index} className="relative overflow-hidden rounded-lg border-2 border-gray-800 aspect-[4/3]">
                  <img src={location.image} alt={location.name} className="w-full h-full object-cover brightness-75" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{location.name}</h3>
                    <p className="text-gray-300 mb-4">{location.description}</p>
                    <Button className="bg-primary hover:bg-primary/90 text-white" onClick={() => window.open(location.bookingUrl, "_blank")}>
                      Book Now
                    </Button>
                  </div>
                </div>)}
            </div>
          </>}

        {(isThermiPage || isKalamariaPage) && <>
            <h2 className="text-4xl font-bold text-center text-white mb-12">Our Location</h2>
            
            <div className="max-w-3xl mx-auto mb-16">
              {locations.map((location, index) => <div key={index} className="relative overflow-hidden rounded-lg border-2 border-gray-800 aspect-[4/3]">
                  <img src={location.image} alt={location.name} className="w-full h-full object-cover brightness-75" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{location.name}</h3>
                    <p className="text-gray-300 mb-4">
                      {location.name === "King's Barbershop Thermi" 
                        ? "Το κορυφαίο barbershop στη Θέμη, με μοντέρνες υπηρεσίες κουρέματος και περιποίησης."
                        : "Το κορυφαίο barbershop στην Καλαμαριά, με μοντέρνες υπηρεσίες κουρέματος και περιποίησης."
                      }
                    </p>
                    <Button className="bg-primary hover:bg-primary/90 text-white" onClick={() => window.open(location.bookingUrl, "_blank")}>
                      Book Now
                    </Button>
                  </div>
                </div>)}
            </div>
          </>}

        <h2 className="text-4xl font-bold text-center text-white mb-12">Our Gallery</h2>
        <div className="max-w-7xl mx-auto">
          <Carousel setApi={setApi} className="w-full" opts={{
          loop: true,
          align: "start"
        }}>
            <CarouselContent>
              {mediaItems.map((item, index) => <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pl-4">
                  <div className="relative pb-[177.78%] rounded-xl overflow-hidden border-2 border-gray-800">
                    {renderMedia(item, index)}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
                          <img src="/uploads/f1fb9576-0c3f-4157-b943-5ffdd370766a.png" alt="Profile" className="w-full h-full object-cover" />
                        </div>
                        <span className="ml-2 text-white text-sm font-medium">King's Barbershop</span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>;
};

export default Gallery;
