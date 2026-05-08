import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import StoreHours from "@/components/StoreHours";
import Footer from "@/components/Footer";
import InstagramFeed from "@/components/InstagramFeed";
import Testimonials from "@/components/Testimonials";
import Parallax from "@/components/Parallax";
import TeamSection from "@/components/TeamSection";
import ContactForm from "@/components/ContactForm";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
const Index = () => {
  return <main className="min-h-screen bg-black text-white">
      <Helmet>
        <title></title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="" />
        <meta name="geo.region" content="" />
        <meta name="geo.placename" content="" />
      </Helmet>
      <Navbar />
      <Hero />
      <div className="py-4 px-6 bg-gradient-to-r from-black to-gray-900 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">King's Barbershop Θεσσαλονίκη  </h1>
        <p className="text-lg md:text-xl max-w-4xl mx-auto">
          Το <strong>King's Barber</strong> (Kingsbarbershop) είναι το <strong>κορυφαίο barbershop</strong> στη <strong>Θεσσαλονίκη</strong> που προσφέρει premium <strong>υπηρεσίες κουρέματος</strong> και <strong>περιποίησης</strong> για άνδρες. Επισκεφθείτε τα καταστήματά μας σε <Link to="/kings-barbershop-panorama" className="text-primary underline hover:text-primary/80 font-semibold">Πανόραμα</Link>, <Link to="/kings-barbershop-thermi" className="text-primary underline hover:text-primary/80 font-semibold">Θέρμη</Link> και <Link to="/kings-barbershop-kalamaria" className="text-primary underline hover:text-primary/80 font-semibold">Καλαμαριά</Link> για την καλύτερη εμπειρία <strong>κουρεματος Θεσσαλονικη</strong>.
        </p>
      </div>
      <Gallery />
      <Parallax />
      <section id="locations" className="py-12 px-4 bg-black">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Τα Καταστήματά μας - Kingsbarbershop</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-r from-black to-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-3">King's Barber Πανόραμα</h3>
              <p className="mb-4">Το πρώτο μας κατάστημα με την καλύτερη ομάδα barbers στη Θεσσαλονίκη για ποιοτικό κουρεμα Θεσσαλονικη.</p>
              <Link to="/kings-barbershop-panorama" className="text-primary underline hover:text-primary/80 font-semibold flex items-center gap-2">
                Μάθετε περισσότερα <ChevronRight size={16} />
              </Link>
            </div>
            <div className="bg-gradient-to-r from-black to-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-3">King's Barber Θέρμη</h3>
              <p className="mb-4">Το νέο μας barbershop με μοντέρνο σχεδιασμό και εξειδικευμένες υπηρεσίες από έμπειρους barbers.</p>
              <Link to="/kings-barbershop-thermi" className="text-primary underline hover:text-primary/80 font-semibold flex items-center gap-2">
                Μάθετε περισσότερα <ChevronRight size={16} />
              </Link>
            </div>
            <div className="bg-gradient-to-r from-black to-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-3">King's Barber Καλαμαριά</h3>
              <p className="mb-4">Το νεότερο μας κατάστημα με σύγχρονες υπηρεσίες στην καρδιά της Καλαμαριάς.</p>
              <Link to="/kings-barbershop-kalamaria" className="text-primary underline hover:text-primary/80 font-semibold flex items-center gap-2">
                Μάθετε περισσότερα <ChevronRight size={16} />
              </Link>
            </div>
          </div>
          <div className="mt-10 text-center">
            <h3 className="text-2xl font-bold mb-4">Ενδιαφέρεστε για το Franchise μας;</h3>
            <p className="mb-6">Γίνετε μέλος της οικογένειας Kingsbarbershop και ανοίξτε το δικό σας επιτυχημένο barbershop στην Θεσσαλονίκη ή σε άλλη περιοχή</p>
            <Link to="/franchise" className="inline-block bg-primary hover:bg-primary/80 text-black px-8 py-3 rounded-md font-bold transition-all shadow-lg hover:shadow-primary/20">
              Franchise Opportunities
            </Link>
          </div>
        </div>
      </section>
      <TeamSection hideLeadershipControls={false} showOnlyThermi={false} />
      <StoreHours />
      <Testimonials />
      <ContactForm />
      <section className="py-12 px-4 bg-black">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Γιατί να επιλέξετε το Kingsbarbershop;</h2>
          <p className="text-lg max-w-4xl mx-auto mb-8">
            Στο Kingsbarbershop, οι έμπειροι barbers μας προσφέρουν κορυφαία υπηρεσία κουρεματος Θεσσαλονικη με προσοχή στη λεπτομέρεια και εξατομικευμένη εξυπηρέτηση. Επισκεφθείτε μας για να απολαύσετε την απόλυτη εμπειρία στο καλύτερο barbershop της Θεσσαλονίκης.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gradient-to-r from-black to-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">Τεχνογνωσία</h3>
              <p>Οι barbers μας είναι άριστα εκπαιδευμένοι στις τελευταίες τεχνικές για κάθε στυλ κουρέματος.</p>
            </div>
            <div className="bg-gradient-to-r from-black to-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">Ποιότητα</h3>
              <p>Χρησιμοποιούμε μόνο προϊόντα κορυφαίας ποιότητας για την περιποίηση και το κουρεμα.</p>
            </div>
            <div className="bg-gradient-to-r from-black to-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">Εμπειρία</h3>
              <p>Κάθε επίσκεψη στο barbershop μας είναι σχεδιασμένη για να σας προσφέρει μια ξεχωριστή εμπειρία.</p>
            </div>
          </div>
        </div>
      </section>
      <Services />
      <InstagramFeed />
      <Footer />
    </main>;
};
export default Index;