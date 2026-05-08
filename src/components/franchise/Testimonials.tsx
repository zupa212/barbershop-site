
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black relative">
      <div className="absolute inset-0 bg-[url('/uploads/b2cd1a1a-17da-44b7-b8f0-b40b4492eba0.png')] opacity-5 mix-blend-overlay"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 border-primary text-primary px-4 py-1.5">Ιστορίες Επιτυχίας</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Τι λενε οι <span className="text-primary">Πελατες του franchise</span></h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Ακούστε απευθείας από τους ικανοποιημένους πελάτες των καταστημάτων franchise μας.
          </p>
        </div>
        
        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent>
            <CarouselItem>
              <Card className="bg-gray-900 border border-gray-800">
                <CardContent className="p-10">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6">
                      <img
                        src="/uploads/7a117058-8757-4bf1-a667-a5d6b7513e33.png"
                        alt="King's Barber Logo"
                        className="w-20 h-20 object-contain"
                      />
                    </div>
                    <div className="flex mb-6">
                      <Star className="text-primary" fill="#C6A962" />
                      <Star className="text-primary" fill="#C6A962" />
                      <Star className="text-primary" fill="#C6A962" />
                      <Star className="text-primary" fill="#C6A962" />
                      <Star className="text-primary" fill="#C6A962" />
                    </div>
                    <p className="text-gray-300 text-lg italic mb-8 max-w-3xl">
                      "Εξαιρετική εμπειρία! Το κούρεμα μου ήταν τέλειο και το προσωπικό πολύ φιλικό και εξυπηρετικό. 
                      Η ατμόσφαιρα του καταστήματος είναι μοναδική και αξίζει κάθε λεπτό. Θα επιστρέψω σίγουρα!"
                    </p>
                    <Separator className="bg-gray-700 w-16 mb-6" />
                    <h4 className="font-bold text-xl">Γιάννης Κ.</h4>
                    <p className="text-primary">Τακτικός πελάτης</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            
            <CarouselItem>
              <Card className="bg-gray-900 border border-gray-800">
                <CardContent className="p-10">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6">
                      <img
                        src="/uploads/7a117058-8757-4bf1-a667-a5d6b7513e33.png"
                        alt="King's Barber Logo"
                        className="w-20 h-20 object-contain"
                      />
                    </div>
                    <div className="flex mb-6">
                      <Star className="text-primary" fill="#C6A962" />
                      <Star className="text-primary" fill="#C6A962" />
                      <Star className="text-primary" fill="#C6A962" />
                      <Star className="text-primary" fill="#C6A962" />
                      <Star className="text-primary" fill="#C6A962" />
                    </div>
                    <p className="text-gray-300 text-lg italic mb-8 max-w-3xl">
                      "Άψογη εξυπηρέτηση και επαγγελματισμός. Το προτείνω ανεπιφύλακτα! Οι τεχνικές κουρέματος και περιποίησης γενιών είναι κορυφαίες. 
                      Το King's Barber είναι πλέον η μόνιμη επιλογή μου."
                    </p>
                    <Separator className="bg-gray-700 w-16 mb-6" />
                    <h4 className="font-bold text-xl">Δημήτρης Α.</h4>
                    <p className="text-primary">Ικανοποιημένος πελάτης</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            
            <CarouselItem>
              <Card className="bg-gray-900 border border-gray-800">
                <CardContent className="p-10">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6">
                      <img
                        src="/uploads/7a117058-8757-4bf1-a667-a5d6b7513e33.png"
                        alt="King's Barber Logo"
                        className="w-20 h-20 object-contain"
                      />
                    </div>
                    <div className="flex mb-6">
                      <Star className="text-primary" fill="#C6A962" />
                      <Star className="text-primary" fill="#C6A962" />
                      <Star className="text-primary" fill="#C6A962" />
                      <Star className="text-primary" fill="#C6A962" />
                      <Star className="text-primary" fill="#C6A962" />
                    </div>
                    <p className="text-gray-300 text-lg italic mb-8 max-w-3xl">
                      "Κορυφαίοι επαγγελματίες στη Θεσσαλονίκη. Το καλύτερο κούρεμα που έχω κάνει ποτέ! Το φιλικό περιβάλλον 
                      και η άψογη εξυπηρέτηση με κάνουν να επιστρέφω ξανά και ξανά."
                    </p>
                    <Separator className="bg-gray-700 w-16 mb-6" />
                    <h4 className="font-bold text-xl">Αλέξανδρος Τ.</h4>
                    <p className="text-primary">Πιστός πελάτης</p>
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

export default Testimonials;
