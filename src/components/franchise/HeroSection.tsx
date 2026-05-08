
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Crown, Star, Phone } from "lucide-react";

const HeroSection = () => {
  // Handle scroll to contact form
  const scrollToContactForm = () => {
    const contactFormElement = document.getElementById('franchise-contact-form');
    if (contactFormElement) {
      contactFormElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  // Handle phone call with updated number
  const initiatePhoneCall = () => {
    window.location.href = 'tel:+306989673173';
  };

  return <section className="pt-40 pb-32 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
        <img src="/uploads/a2dc0838-660c-4427-b7d2-0f7b43aac5f9.png" alt="Franchise Background" className="w-full h-full object-cover opacity-40" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center mb-8">
            <Crown className="text-primary mr-3" size={28} />
            <Badge variant="outline" className="border-primary text-primary px-4 py-1.5 text-base uppercase tracking-wider font-light">
              Κορυφαία Ευκαιρία Franchise
            </Badge>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Χτίστε την <span className="text-primary">Αυτοκρατορία</span> σας με το King's Barber
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mb-10 leading-relaxed">Γίνε μέλος ενός κορυφαίου αναπτυσσόμενου  Franchise κουρείου στην Ελλάδα και γίνετε μέρος μιας κληρονομιάς που βασίζεται στην αριστεία, την τέχνη και την ασύγκριτη εμπειρία των επισκεπτών.</p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-black px-8 py-7 text-lg rounded-none" onClick={scrollToContactForm}>
              Υποβολή Αίτησης <ArrowRight className="ml-2" />
            </Button>
            
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 py-7 text-lg rounded-none" onClick={initiatePhoneCall}>
              <Phone className="mr-2" size={20} /> Καλέστε Μας
            </Button>
          </div>
          
          <div className="mt-16 flex items-center gap-8">
            <div className="flex items-center">
              <Star className="text-primary mr-2" size={20} fill="#C6A962" />
              <span className="text-lg">3+ Τοποθεσίες</span>
            </div>
            
            <div className="flex items-center">
              <Star className="text-primary mr-2" size={20} fill="#C6A962" />
              <span className="text-lg">20+ Χρόνια Εμπειρίας</span>
            </div>
            
            <div className="flex items-center">
              <Star className="text-primary mr-2" size={20} fill="#C6A962" />
              <span className="text-lg">Πολυβραβευμένο/ Αναγνωρισμενο</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
