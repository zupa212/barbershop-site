
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Panagiotis Z.",
      role: "Customer",
      text: "Propably the best Barber shop in Thessaloniki.. So professional and cozy atmosphere ... I recoοmend it without 2nd thought !!"
    },
    {
      name: "Γιώργος Κ.",
      role: "Πελάτης",
      text: "Άψογη εξυπηρέτηση και επαγγελματισμός. Το προτείνω ανεπιφύλακτα!"
    },
    {
      name: "Νίκος Μ.",
      role: "Πελάτης",
      text: "Εξαιρετική εμπειρία, άριστο αποτέλεσμα. Θα ξαναέρθω σίγουρα!"
    },
    {
      name: "Δημήτρης Α.",
      role: "Πελάτης",
      text: "Κορυφαίοι επαγγελματίες στη Θεσσαλονίκη. Το καλύτερο κούρεμα που έχω κάνει ποτέ!"
    },
    {
      name: "Κώστας Π.",
      role: "Πελάτης",
      text: "Πολύ καλή ατμόσφαιρα, φιλικό προσωπικό και άψογη εξυπηρέτηση. Συνιστώ ανεπιφύλακτα."
    },
    {
      name: "Αλέξανδρος Τ.",
      role: "Πελάτης",
      text: "Επισκέπτομαι το King's Barbershop εδώ και 2 χρόνια. Πάντα φεύγω απόλυτα ικανοποιημένος!"
    }
  ];

  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">Τι είπαν για εμάς</h2>
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <Card className="bg-muted border-primary/20">
                  <CardContent className="p-6">
                    <p className="text-gray-300 mb-4 italic">{testimonial.text}</p>
                    <div className="flex flex-col">
                      <span className="text-primary font-semibold">{testimonial.name}</span>
                      <span className="text-gray-400 text-sm">{testimonial.role}</span>
                    </div>
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

export default Testimonials;
