
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Briefcase, Crown, Scissors } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-14">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h2 className="text-4xl font-bold mb-6">Η <span className="text-primary">Εμπειρία</span> King's Barbershop</h2>
            <p className="text-lg text-gray-300 mb-8">
              Βιώστε την πολυτέλεια και τη κομψότητα που προσφέρει το King's Barber σε κάθε τοποθεσία. Το μοντέλο franchise μας είναι χτισμένο σε μια βάση αριστείας, κορυφαίας εξυπηρέτησης και ένα αποδεδειγμένο επιχειρηματικό μοντέλο που σας εξασφαλίζει επιτυχία.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-start">
                <div className="rounded-full bg-primary/20 p-2 mr-4">
                  <Crown className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Κορυφαία Αναγνώριση Επωνυμίας</h3>
                  <p className="text-gray-400">Επωφεληθείτε από την καθιερωμένη φήμη μας και την πιστή πελατειακή βάση.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="rounded-full bg-primary/20 p-2 mr-4">
                  <Scissors className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Προγράμματα Εξειδικευμένης Εκπαίδευσης</h3>
                  <p className="text-gray-400">Ολοκληρωμένη εκπαίδευση για εσάς και την ομάδα σας που εξασφαλίζει σταθερή ποιότητα.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="rounded-full bg-primary/20 p-2 mr-4">
                  <Briefcase className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Αποδεδειγμένο Επιχειρηματικό Μοντέλο</h3>
                  <p className="text-gray-400">Οι εξορθολογισμένες λειτουργίες και τα συστήματά μας κάνουν σαφή το δρόμο σας προς την επιτυχία.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="relative aspect-video overflow-hidden border-2 border-primary">
              <img 
                src="/uploads/eaaa41e4-d99d-41b3-9b8a-2cfc525785ba.png" 
                alt="King's Barber Experience" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors">
                <div className="w-20 h-20 rounded-full border-2 border-primary flex items-center justify-center">
                  <ArrowRight className="text-primary" size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
