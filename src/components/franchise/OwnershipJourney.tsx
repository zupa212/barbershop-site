
import { Badge } from "@/components/ui/badge";

const OwnershipJourney = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-6">
            <Badge variant="outline" className="border-primary text-primary px-4 py-1.5 text-base">
              Επένδυση
            </Badge>
          </div>
          
          <h2 className="text-4xl font-bold text-center mb-12">
            Ο δρόμος για την <span className="text-primary">Ιδιοκτησία</span>
          </h2>
          
          <p className="text-center text-gray-300 max-w-3xl mx-auto mb-16 text-lg">
            Το να γίνετε ιδιοκτήτης franchise του King's Barber είναι μια απλή διαδικασία σχεδιασμένη να σας προετοιμάσει για επιτυχία από την πρώτη μέρα.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-12">
              <div className="flex items-start gap-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-black font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Αρχική Αίτηση</h3>
                  <p className="text-gray-300">
                    Υποβάλετε την αίτησή σας και η ομάδα μας θα επικοινωνήσει μαζί σας για να συζητήσει τις ευκαιρίες.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-black font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Συνάντηση</h3>
                  <p className="text-gray-300">
                    Συναντηθείτε με την ομάδα μας για να μάθετε για το επιχειρηματικό μοντέλο και να κάνετε ερωτήσεις.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-12">
              <div className="flex items-start gap-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-black font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Επιλογή Τοποθεσίας</h3>
                  <p className="text-gray-300">
                    Θα σας βοηθήσουμε να εντοπίσετε και να εξασφαλίσετε την τέλεια τοποθεσία για το franchise σας.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-black font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Εκπαίδευση & Εγκαίνια</h3>
                  <p className="text-gray-300">
                    Ολοκληρώστε το εκπαιδευτικό μας πρόγραμμα και προετοιμαστείτε για ένα επιτυχημένο άνοιγμα.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnershipJourney;
