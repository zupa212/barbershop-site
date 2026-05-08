
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { MapPin } from "lucide-react";

const LocationGallery = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <Badge variant="outline" className="mb-4 border-primary text-primary px-4 py-1.5">Οι Τοποθεσίες μας</Badge>
              <h2 className="text-4xl font-bold">Παρουσίαση <span className="text-primary">Franchise</span></h2>
            </div>
            <p className="text-gray-300 md:max-w-md mt-4 md:mt-0">
              Εξερευνήστε τις υπάρχουσες τοποθεσίες franchise μας και εμπνευστείτε από την κομψότητα και τη φινέτσα του King's Barber.
            </p>
          </div>
        </div>
        
        <Carousel className="max-w-6xl mx-auto">
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Card className="bg-gray-900 border border-gray-800 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative group">
                    <img 
                      src="/uploads/06966beb-5d8c-4127-b7ce-cef1bb75e3e4.png" 
                      alt="Franchise Location" 
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button variant="ghost" className="text-white border border-white hover:bg-white/20">Προβολή Γκαλερί</Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">Θεσσαλονίκη - Πανόραμα</h3>
                      <Badge className="bg-primary text-black">Ναυαρχίδα</Badge>
                    </div>
                    <p className="text-gray-300 mb-4">Η κεντρική μας τοποθεσία με κορυφαίες υπηρεσίες και εγκαταστάσεις.</p>
                    <div className="flex items-center text-gray-400">
                      <MapPin className="h-4 w-4 mr-2 text-primary" /> 
                      <span className="text-sm">Πανόραμα, Θεσσαλονίκη</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Card className="bg-gray-900 border border-gray-800 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative group">
                    <img 
                      src="/uploads/11c0238c-cc38-44c6-8fc5-5bf072012a02.png" 
                      alt="Franchise Location" 
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button variant="ghost" className="text-white border border-white hover:bg-white/20">Προβολή Γκαλερί</Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">Θεσσαλονίκη - Θέρμη</h3>
                      <Badge className="bg-primary/80 text-black">Δημοφιλής</Badge>
                    </div>
                    <p className="text-gray-300 mb-4">Η δεύτερη τοποθεσία μας εξυπηρετεί την περιοχή της Θέρμης με αριστεία.</p>
                    <div className="flex items-center text-gray-400">
                      <MapPin className="h-4 w-4 mr-2 text-primary" /> 
                      <span className="text-sm">Θέρμη, Θεσσαλονίκη</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Card className="bg-gray-900 border border-gray-800 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative group">
                    <img 
                      src="/uploads/ee6f4e4f-abd8-462c-b431-8d73b32c3253.png" 
                      alt="Kalamaria Location" 
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button variant="ghost" className="text-white border border-white hover:bg-white/20">Προβολή Γκαλερί</Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">Θεσσαλονίκη - Καλαμαριά</h3>
                      <Badge className="bg-primary/60 text-black">Επιτυχία</Badge>
                    </div>
                    <p className="text-gray-300 mb-4">Η τρίτη επιτυχημένη τοποθεσία μας στην περιοχή της Καλαμαριάς.</p>
                    <div className="flex items-center text-gray-400">
                      <MapPin className="h-4 w-4 mr-2 text-primary" /> 
                      <span className="text-sm">Καλαμαριά, Θεσσαλονίκη</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-2 bg-black/50 border border-primary text-primary hover:bg-primary hover:text-black" />
          <CarouselNext className="right-2 bg-black/50 border border-primary text-primary hover:bg-primary hover:text-black" />
        </Carousel>
      </div>
    </section>
  );
};

export default LocationGallery;
