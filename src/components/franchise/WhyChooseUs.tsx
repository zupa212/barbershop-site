
import { Badge } from "@/components/ui/badge";
import { Briefcase, CircleDollarSign, School } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 border-primary text-primary px-4 py-1.5">Το Πλεονέκτημα του King's</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-5">Γιατί να Επιλέξετε το Franchise <span className="text-primary">King's Barber</span></h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Το μοντέλο franchise μας είναι σχεδιασμένο για να σας παρέχει όλα όσα χρειάζεστε για να επιτύχετε στον κλάδο της περιποίησης ανδρών υψηλών προδιαγραφών.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="group bg-gray-900 border border-gray-800 hover:border-primary transition-all duration-300 p-10 flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="w-20 h-20 bg-primary/10 border border-primary rounded-full flex items-center justify-center mb-6 relative z-10">
              <CircleDollarSign size={32} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4 relative z-10">Στρατηγική Επένδυση</h3>
            <p className="text-gray-300 relative z-10">Ξεκινήστε το δικό σας franchise King's Barber με μια λογική αρχική επένδυση και κορυφαίες δυνατότητες απόδοσης επένδυσης.</p>
          </div>
          
          <div className="group bg-gray-900 border border-gray-800 hover:border-primary transition-all duration-300 p-10 flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="w-20 h-20 bg-primary/10 border border-primary rounded-full flex items-center justify-center mb-6 relative z-10">
              <Briefcase size={32} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4 relative z-10">Αποδεδειγμένο Επιχειρηματικό Μοντέλο</h3>
            <p className="text-gray-300 relative z-10">Το επιτυχημένο επιχειρηματικό μας μοντέλο έχει βελτιωθεί μετά από χρόνια εμπειρίας στον κλάδο του κουρέματος.</p>
          </div>
          
          <div className="group bg-gray-900 border border-gray-800 hover:border-primary transition-all duration-300 p-10 flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="w-20 h-20 bg-primary/10 border border-primary rounded-full flex items-center justify-center mb-6 relative z-10">
              <School size={32} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4 relative z-10">Ακαδημία Elite</h3>
            <p className="text-gray-300 relative z-10">Ολοκληρωμένα προγράμματα εκπαίδευσης για εσάς και το προσωπικό σας για να εξασφαλίσετε συνεπή ποιότητα σε όλες τις τοποθεσίες.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
