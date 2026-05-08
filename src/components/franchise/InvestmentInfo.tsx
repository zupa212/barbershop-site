
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CircleDollarSign } from "lucide-react";

const InvestmentInfo = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
          <div className="w-full md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <Badge variant="outline" className="mb-6 border-primary text-primary px-4 py-1.5">Επένδυση</Badge>
            <h2 className="text-4xl font-bold mb-6">Ο δρόμος για την <span className="text-primary">Ιδιοκτησία</span></h2>
            <p className="text-gray-300 text-lg mb-8">
              Το να γίνετε ιδιοκτήτης franchise του King's Barber είναι μια απλή διαδικασία σχεδιασμένη να σας προετοιμάσει για επιτυχία από την πρώτη μέρα.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-primary text-black w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Αρχική Αίτηση</h3>
                  <p className="text-gray-400">Υποβάλετε την αίτησή σας και η ομάδα μας θα επικοινωνήσει μαζί σας για να συζητήσει τις ευκαιρίες.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary text-black w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Συνάντηση</h3>
                  <p className="text-gray-400">Συναντηθείτε με την ομάδα μας για να μάθετε για το επιχειρηματικό μοντέλο και να κάνετε ερωτήσεις.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary text-black w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Επιλογή Τοποθεσίας</h3>
                  <p className="text-gray-400">Θα σας βοηθήσουμε να εντοπίσετε και να εξασφαλίσετε την τέλεια τοποθεσία για το franchise σας.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary text-black w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Εκπαίδευση & Εγκαίνια</h3>
                  <p className="text-gray-400">Ολοκληρώστε το εκπαιδευτικό μας πρόγραμμα και προετοιμαστείτε για ένα επιτυχημένο άνοιγμα.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="bg-gray-900 border border-gray-800 p-10">
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <CircleDollarSign className="text-primary mr-3" size={24} />
                Λεπτομέρειες Επένδυσης
              </h3>
              
              <div className="space-y-6">
                <div className="flex justify-between pb-4 border-b border-gray-800">
                  <span className="text-gray-300">Αρχικό Τέλος Franchise</span>
                  <span className="font-semibold">€25.000 - €35.000</span>
                </div>
                
                <div className="flex justify-between pb-4 border-b border-gray-800">
                  <span className="text-gray-300">Εξοπλισμός & Κατασκευή</span>
                  <span className="font-semibold">€50.000 - €85.000</span>
                </div>
                
                <div className="flex justify-between pb-4 border-b border-gray-800">
                  <span className="text-gray-300">Αρχικό Απόθεμα</span>
                  <span className="font-semibold">€5.000 - €10.000</span>
                </div>
                
                <div className="flex justify-between pb-4 border-b border-gray-800">
                  <span className="text-gray-300">Κεφάλαιο Κίνησης (3 μήνες)</span>
                  <span className="font-semibold">€15.000 - €25.000</span>
                </div>
                
                <div className="flex justify-between pb-4 border-b border-gray-800">
                  <span className="text-gray-300">Ταμείο Μάρκετινγκ</span>
                  <span className="font-semibold">2% των Ακαθάριστων Πωλήσεων</span>
                </div>
                
                <div className="flex justify-between pb-4 border-b border-gray-800">
                  <span className="text-gray-300">Τέλος Δικαιωμάτων</span>
                  <span className="font-semibold">6% των Ακαθάριστων Πωλήσεων</span>
                </div>
                
                <div className="flex justify-between font-bold text-lg text-primary">
                  <span>Εκτιμώμενη Συνολική Επένδυση</span>
                  <span>€95.000 - €155.000</span>
                </div>
              </div>
              
              <div className="mt-10">
                <Button className="w-full bg-primary hover:bg-primary/90 text-black py-6 text-lg rounded-none">
                  Ζητήστε Ενημερωτικό Φυλλάδιο Επένδυσης
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentInfo;
