import { Badge } from "@/components/ui/badge";
const CeoSection = () => {
  return <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-2/5">
              <div className="relative">
                <div className="absolute -inset-4 border border-primary z-0"></div>
                <div className="relative z-10 overflow-hidden">
                  <img src="/uploads/b7386d59-3864-4f1e-94ef-6012ff3a4279.png" alt="CEO Portrait" className="w-full h-auto object-cover" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary text-black p-4 z-20">
                  <p className="font-bold">Κονσούλας Γιάννης</p>
                  <p className="text-sm">Ιδρυτής & CEO</p>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-3/5">
              <Badge variant="outline" className="mb-6 border-primary text-primary px-4 py-1.5">Ηγεσία</Badge>
              <h2 className="text-4xl font-bold mb-8">Μήνυμα από τον <span className="text-primary">CEO</span> μας</h2>
              
              <div className="relative">
                <div className="absolute -left-8 top-0 text-6xl text-primary/30 font-serif">"</div>
                <p className="text-gray-300 mb-6 text-lg italic pl-6">
                  Στο King's Barbershop, έχουμε χτίσει κάτι περισσότερο από μια απλή επιχείρηση κουρέματος—έχουμε δημιουργήσει μια κουλτούρα αριστείας, αυθεντικής φιλοξενίας και ακριβούς τεχνογνωσίας. Το πρόγραμμα franchise μας είναι σχεδιασμένο για να μοιραστεί αυτό το όραμα με παθιασμένους επιχειρηματίες που θέλουν να γίνουν μέρος της αναπτυσσόμενης οικογένειάς μας.
                </p>
                <p className="text-gray-300 mb-6 text-lg italic pl-6">
                  Η επιτυχία μας προέρχεται από την ακλόνητη δέσμευσή μας στην ποιότητα, την αφοσίωσή μας στην εξυπηρέτηση πελατών και την ικανότητά μας να δημιουργούμε χώρους όπου οι άνδρες μπορούν να αισθάνονται άνετα, με αυτοπεποίθηση και καλά περιποιημένοι. Ως ιδιοκτήτης franchise, θα επωφεληθείτε από την καθιερωμένη αναγνωρισιμότητα του brand μας, τα αποδεδειγμένα λειτουργικά συστήματα και τη συνεχή υποστήριξη.
                </p>
                <p className="text-gray-300 mb-8 text-lg italic pl-6">
                  Σας προσκαλώ να συμμετάσχετε σε αυτό το συναρπαστικό ταξίδι καθώς συνεχίζουμε να επαναπροσδιορίζουμε την ανδρική περιποίηση σε όλη την Ελλάδα και πέρα από αυτή.
                </p>
                <div className="relative">
                  <div className="absolute -right-8 bottom-0 text-6xl text-primary/30 font-serif">"</div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-xl font-bold mb-1">Κονσούλας Γιάννης</h4>
                <p className="text-primary">Ιδρυτής &amp; CEO, King's Barbershop</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CeoSection;