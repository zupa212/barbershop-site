import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      title: t('services.haircut'),
      description: t('services.haircutDesc')
    },
    {
      title: t('services.beardGrooming'),
      description: t('services.beardGroomingDesc')
    },
    {
      title: t('services.hotTowelShave'),
      description: t('services.hotTowelShaveDesc')
    },
    {
      title: t('services.fullPackage'),
      description: t('services.fullPackageDesc')
    }
  ];

  return (
    <section id="services" className="py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">{t('services.title')}</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2500,
              stopOnInteraction: false, // This ensures it continues after hover/touch
              stopOnMouseEnter: false, // This ensures it continues on hover
              stopOnFocusIn: false, // This ensures it continues when focused
            }),
          ]}
          className="w-full hover:cursor-grab active:cursor-grabbing touch-pan-y"
        >
          <CarouselContent>
            {services.map((service, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 transition-transform duration-300 hover:scale-105">
                <Card className="bg-muted border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-primary">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{service.description}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Services;