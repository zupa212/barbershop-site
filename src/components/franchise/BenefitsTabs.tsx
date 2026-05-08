
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, School, ShieldCheck, TrendingUp, Users } from "lucide-react";

const BenefitsTabs = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 border-primary text-primary px-4 py-1.5">Οφέλη</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Οφέλη <span className="text-primary">Franchise</span></h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Όταν γίνετε μέλος της οικογένειας franchise του King's Barber, αποκτάτε πρόσβαση σε ένα ολοκληρωμένο πακέτο παροχών σχεδιασμένο για να σας εξασφαλίσει επιτυχία.
          </p>
        </div>
        
        <Tabs defaultValue="support" className="max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 bg-gray-900 p-0.5 rounded-none border border-primary mb-12">
            <TabsTrigger value="support" className="rounded-none data-[state=active]:bg-primary data-[state=active]:text-black">Υποστήριξη</TabsTrigger>
            <TabsTrigger value="marketing" className="rounded-none data-[state=active]:bg-primary data-[state=active]:text-black">Μάρκετινγκ</TabsTrigger>
            <TabsTrigger value="training" className="rounded-none data-[state=active]:bg-primary data-[state=active]:text-black">Εκπαίδευση</TabsTrigger>
            <TabsTrigger value="system" className="rounded-none data-[state=active]:bg-primary data-[state=active]:text-black">Σύστημα</TabsTrigger>
          </TabsList>
          
          <TabsContent value="support" className="bg-gray-900 border border-gray-800 p-10">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <div className="bg-primary/10 p-6 border border-primary/30">
                  <Users className="text-primary h-12 w-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Συνεχής Υποστήριξη</h3>
                  <p className="text-gray-300">
                    Η αφοσιωμένη ομάδα υποστήριξης franchise είναι πάντα διαθέσιμη για να βοηθήσει με οποιαδήποτε ζητήματα ή ερωτήσεις.
                  </p>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h4 className="text-xl font-semibold mb-6 text-primary">Πώς Υποστηρίζουμε την Επιτυχία Σας</h4>
                <p className="text-gray-300 mb-8">
                  Από τις καθημερινές λειτουργίες έως τα στρατηγικά σχέδια ανάπτυξης, είμαστε αφοσιωμένοι στην επιτυχία σας με ένα ολοκληρωμένο σύστημα υποστήριξης που εξασφαλίζει την ευημερία του franchise σας.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="text-primary flex-shrink-0" size={24} />
                    <div>
                      <h5 className="font-semibold mb-2">Τεχνική Υποστήριξη 24/7</h5>
                      <p className="text-gray-400">Πρόσβαση στην ομάδα υποστήριξής μας όποτε χρειάζεστε βοήθεια.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="text-primary flex-shrink-0" size={24} />
                    <div>
                      <h5 className="font-semibold mb-2">Τακτικές Αξιολογήσεις Απόδοσης</h5>
                      <p className="text-gray-400">Τριμηνιαίες επιχειρηματικές αξιολογήσεις για τη βελτιστοποίηση της λειτουργίας σας.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="text-primary flex-shrink-0" size={24} />
                    <div>
                      <h5 className="font-semibold mb-2">Διαχείριση Προσωπικού</h5>
                      <p className="text-gray-400">Καθοδήγηση στην πρόσληψη, εκπαίδευση και διατήρηση κορυφαίων ταλέντων.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="text-primary flex-shrink-0" size={24} />
                    <div>
                      <h5 className="font-semibold mb-2">Επισκέψεις Πεδίου</h5>
                      <p className="text-gray-400">Τακτική επιτόπια υποστήριξη από τους ειδικούς franchise μας.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="marketing" className="bg-gray-900 border border-gray-800 p-10">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <div className="bg-primary/10 p-6 border border-primary/30">
                  <TrendingUp className="text-primary h-12 w-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Αριστεία στο Μάρκετινγκ</h3>
                  <p className="text-gray-300">
                    Επωφεληθείτε από τις αποδεδειγμένες στρατηγικές μάρκετινγκ και καμπάνιες που προωθούν την απόκτηση και διατήρηση πελατών.
                  </p>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h4 className="text-xl font-semibold mb-6 text-primary">Μάρκετινγκ που Φέρνει Αποτελέσματα</h4>
                <p className="text-gray-300 mb-8">
                  Παρέχουμε όλα τα εργαλεία που χρειάζεστε για να προωθήσετε αποτελεσματικά το franchise σας, από ψηφιακές καμπάνιες μέχρι πρωτοβουλίες τοπικής κοινωνικής εμπλοκής.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="text-primary flex-shrink-0" size={24} />
                    <div>
                      <h5 className="font-semibold mb-2">Πρότυπα Κοινωνικών Μέσων</h5>
                      <p className="text-gray-400">Έτοιμο περιεχόμενο κοινωνικών μέσων και υλικό καμπάνιας.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="text-primary flex-shrink-0" size={24} />
                    <div>
                      <h5 className="font-semibold mb-2">Υποστήριξη Τοπικού SEO</h5>
                      <p className="text-gray-400">Βελτιστοποίηση για τοπική αναζήτηση για προσέλκυση πελατών από την περιοχή σας.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="text-primary flex-shrink-0" size={24} />
                    <div>
                      <h5 className="font-semibold mb-2">Εποχιακές Προωθήσεις</h5>
                      <p className="text-gray-400">Συντονισμένο προωθητικό υλικό και καμπάνιες.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="text-primary flex-shrink-0" size={24} />
                    <div>
                      <h5 className="font-semibold mb-2">Υποστήριξη Εγκαινίων</h5>
                      <p className="text-gray-400">Ολοκληρωμένη στρατηγική εγκαινίων για τη νέα σας τοποθεσία.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="training" className="bg-gray-900 border border-gray-800 p-10">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <div className="bg-primary/10 p-6 border border-primary/30">
                  <School className="text-primary h-12 w-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Ολοκληρωμένη Εκπαίδευση</h3>
                  <p className="text-gray-300">
                    Το εντατικό πρόγραμμα εκπαίδευσης διασφαλίζει ότι εσείς και το προσωπικό σας έχετε όλες τις δεξιότητες που απαιτούνται για να προσφέρετε την εμπειρία King's Barber.
                  </p>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h4 className="text-xl font-semibold mb-6 text-primary">Η Ακαδημία King's</h4>
                <p className="text-gray-300 mb-8">
                  Επενδύουμε στην επιτυχία σας μέσω ολοκληρωμένων εκπαιδευτικών προγραμμάτων που καλύπτουν κάθε πτυχή της λειτουργίας ενός επιτυχημένου franchise King's Barber.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="text-primary flex-shrink-0" size={24} />
                    <div>
                      <h5 className="font-semibold mb-2">Αρχικό Πρόγραμμα Εκπαίδευσης</h5>
                      <p className="text-gray-400">3-εβδομάδων ολοκληρωμένη εκπαίδευση στην κεντρική μας τοποθεσία.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="text-primary flex-shrink-0" size={24} />
                    <div>
                      <h5 className="font-semibold mb-2">Ανάπτυξη Δεξιοτήτων</h5>
                      <p className="text-gray-400">Τακτικά εργαστήρια για να διατηρούνται οι δεξιότητες της ομάδας σας επίκαιρες.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="text-primary flex-shrink-0" size={24} />
                    <div>
                      <h5 className="font-semibold mb-2">Εκπαίδευση Διαχείρισης</h5>
                      <p className="text-gray-400">Ανάπτυξη ηγεσίας για ιδιοκτήτες franchise και διευθυντές.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="text-primary flex-shrink-0" size={24} />
                    <div>
                      <h5 className="font-semibold mb-2">Διαδικτυακή Πλατφόρμα Μάθησης</h5>
                      <p className="text-gray-400">24/7 πρόσβαση σε εκπαιδευτικό υλικό και πόρους.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="system" className="bg-gray-900 border border-gray-800 p-10">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <div className="bg-primary/10 p-6 border border-primary/30">
                  <Briefcase className="text-primary h-12 w-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Αποδεδειγμένα Συστήματα</h3>
                  <p className="text-gray-300">
                    Το franchise μας συνοδεύεται από εξορθολογισμένα λειτουργικά συστήματα που έχουν τελειοποιηθεί μέσα από χρόνια εμπειρίας.
                  </p>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h4 className="text-xl font-semibold mb-6 text-primary">Λειτουργική Αριστεία</h4>
                <p className="text-gray-300 mb-8">
                  Έχουμε βελτιώσει τα επιχειρηματικά μας συστήματα για να εξαλείψουμε τις εικασίες, επιτρέποντάς σας να επικεντρωθείτε στην ανάπτυξη της επιχείρησής σας και στην παροχή εξαιρετικής εξυπηρέτησης.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="text-primary flex-shrink-0" size={24} />
                    <div>
                      <h5 className="font-semibold mb-2">Σύστημα Κρατήσεων</h5>
                      <p className="text-gray-400">Ιδιόκτητο σύστημα κρατήσεων και POS βελτιστοποιημένο για λειτουργίες κουρείου.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="text-primary flex-shrink-0" size={24} />
                    <div>
                      <h5 className="font-semibold mb-2">Διαχείριση Αποθεμάτων</h5>
                      <p className="text-gray-400">Αυτοματοποιημένες λύσεις παρακολούθησης και παραγγελίας αποθεμάτων.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="text-primary flex-shrink-0" size={24} />
                    <div>
                      <h5 className="font-semibold mb-2">Εργαλεία CRM</h5>
                      <p className="text-gray-400">Διαχείριση σχέσεων πελατών για διατήρηση και ανάπτυξη.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="text-primary flex-shrink-0" size={24} />
                    <div>
                      <h5 className="font-semibold mb-2">Εγχειρίδιο Λειτουργίας</h5>
                      <p className="text-gray-400">Ολοκληρωμένος οδηγός για καθημερινές λειτουργίες και διαδικασίες.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default BenefitsTabs;
