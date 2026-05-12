import { Link } from "react-router-dom";
import {
  CalendarCheck,
  CheckCircle2,
  Clock,
  Crown,
  Gem,
  HelpCircle,
  MapPin,
  Paintbrush,
  Phone,
  Scissors,
  Sparkles,
  Star,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  buildHairNailsPageSchema,
  hairNailsFaqs,
  hairNailsSalon,
  seoPages,
} from "@/lib/seo";

const galleryModules = import.meta.glob(
  "@/assets/hair-and-nails/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  { eager: true, import: "default" }
) as Record<string, string>;

const filenameToAlt = (path: string) => {
  const base = path.split("/").pop() ?? "";
  const name = base.replace(/\.[^.]+$/, "");
  const pretty = name.replace(/[-_]+/g, " ").trim();
  return pretty
    ? `King's Hair and Nails Salon Πανόραμα - ${pretty}`
    : "King's Hair and Nails Salon Πανόραμα";
};

const gallery = Object.entries(galleryModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => ({ src, alt: filenameToAlt(path) }));

const phoneHref = "tel:+302310345055";
const mapsHref =
  "https://www.google.com/maps/search/?api=1&query=Αγίου+Γεωργίου+2+Πανόραμα+55236";

const hairServices = [
  "Γυναικείο κούρεμα",
  "Χτένισμα και styling",
  "Βαφή, ανταύγειες και ανανέωση χρώματος",
  "Θεραπείες μαλλιών και λάμψης",
];

const nailServices = [
  "Manicure",
  "Pedicure",
  "Ημιμόνιμο χρώμα",
  "Περιποίηση άκρων και σχήμα",
];

const featureBlocks = [
  {
    icon: Scissors,
    title: "Μαλλιά",
    text: "Κομμωτικές υπηρεσίες για καθαρή γραμμή, υγιή όψη και αποτέλεσμα που ταιριάζει στο προσωπικό σας στυλ.",
  },
  {
    icon: Paintbrush,
    title: "Νύχια",
    text: "Manicure, pedicure και περιποίηση άκρων σε έναν προσεγμένο χώρο με ήρεμη, premium αισθητική.",
  },
  {
    icon: Sparkles,
    title: "Beauty Care",
    text: "Ολοκληρωμένη γυναικεία περιποίηση στο Πανόραμα, με προσοχή στη λεπτομέρεια και στην εμπειρία.",
  },
];

const HairAndNails = () => {
  return (
    <main className="min-h-screen bg-[#070707] text-white">
      <SEO page={seoPages.hairNails} schema={buildHairNailsPageSchema()} />
      <Navbar />

      <section className="relative min-h-screen overflow-hidden pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(183,150,85,0.22),transparent_26%),radial-gradient(circle_at_82%_20%,rgba(98,126,75,0.2),transparent_28%),linear-gradient(135deg,#050506_0%,#17120f_48%,#111711_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#070707] to-transparent" />

        <div className="container relative z-10 mx-auto px-4 pb-20">
          <div className="grid min-h-[calc(100vh-9rem)] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#c8a55f]/50 bg-black/45 px-4 py-2 text-sm font-semibold text-[#f4d58d]">
                <Crown size={16} />
                King&apos;s Beauty Family
              </div>
              <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
                King&apos;s Hair and Nails Salon στο Πανόραμα
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 md:text-xl">
                Ένας νέος χώρος αφιερωμένος στη γυναικεία περιποίηση, για
                μαλλιά, νύχια, styling, manicure και pedicure στην καρδιά του
                Πανόραματος Θεσσαλονίκης.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="h-12 rounded-md bg-[#c8a55f] px-6 font-bold text-black hover:bg-[#d9ba75]"
                >
                  <a href={phoneHref}>
                    <CalendarCheck className="mr-2" size={18} />
                    Κλείστε Ραντεβού
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-12 rounded-md border-white/30 bg-white/5 px-6 text-white hover:bg-white/12"
                >
                  <a href={mapsHref} target="_blank" rel="noopener noreferrer">
                    <MapPin className="mr-2" size={18} />
                    Οδηγίες
                  </a>
                </Button>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <a
                  href={phoneHref}
                  className="rounded-lg border border-white/12 bg-black/35 p-4 transition hover:border-[#c8a55f]/70"
                >
                  <Phone className="mb-3 text-[#c8a55f]" size={22} />
                  <p className="text-sm text-white/55">Τηλέφωνο</p>
                  <p className="font-semibold">2310345055</p>
                </a>
                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/12 bg-black/35 p-4 transition hover:border-[#c8a55f]/70"
                >
                  <MapPin className="mb-3 text-[#c8a55f]" size={22} />
                  <p className="text-sm text-white/55">Διεύθυνση</p>
                  <p className="font-semibold">Αγίου Γεωργίου 2, Πανόραμα</p>
                </a>
                <div className="rounded-lg border border-white/12 bg-black/35 p-4">
                  <Clock className="mb-3 text-[#c8a55f]" size={22} />
                  <p className="text-sm text-white/55">Ωράριο</p>
                  <p className="font-semibold">Τρίτη - Σάββατο 09:00 - 17:00</p>
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -inset-4 rounded-[2rem] border border-[#c8a55f]/30 bg-[#c8a55f]/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-xl border border-white/12 bg-black shadow-2xl">
                <img
                  src={hairNailsSalon.logo}
                  alt="King's Hair and Nails Salon logo"
                  width="1200"
                  height="900"
                  className="aspect-[4/3] w-full object-cover"
                  decoding="async"
                />
              </div>
              <div className="absolute -bottom-8 left-6 right-6 rounded-lg border border-white/12 bg-[#101010]/95 p-5 shadow-2xl backdrop-blur">
                <div className="flex items-start gap-3">
                  <Gem className="mt-1 shrink-0 text-[#c8a55f]" size={24} />
                  <div>
                    <p className="font-semibold text-white">
                      Γυναικεία περιποίηση σε premium περιβάλλον
                    </p>
                    <p className="mt-1 text-sm leading-6 text-white/65">
                      Μαλλιά και νύχια με αισθητική King&apos;s, προσεγμένη
                      εξυπηρέτηση και καθαρή εμπειρία ραντεβού.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#070707] px-4 py-20">
        <div className="container mx-auto">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-[#c8a55f]">
              Hair & Nails
            </p>
            <h2 className="text-3xl font-bold md:text-5xl">
              Υπηρεσίες για γυναίκες στο Πανόραμα
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/68">
              Το King&apos;s Hair and Nails Salon δημιουργήθηκε για γυναίκες
              που θέλουν περιποίηση μαλλιών και νυχιών σε έναν κομψό,
              οργανωμένο και άνετο χώρο.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {featureBlocks.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-lg border border-white/10 bg-[#111111] p-6 shadow-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-[#c8a55f] text-black">
                  <Icon size={24} />
                </div>
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-white/68">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#101010] px-4 py-20">
        <div className="container mx-auto grid gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-6 flex items-center gap-3 text-[#c8a55f]">
              <Scissors size={28} />
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                Κομμωτήριο
              </h2>
            </div>
            <p className="mb-8 leading-8 text-white/70">
              Από καθημερινή ανανέωση μέχρι πιο ολοκληρωμένη αλλαγή, η ομάδα
              δουλεύει με στόχο ένα αποτέλεσμα που δείχνει προσεγμένο και
              παραμένει εύκολο στην καθημερινότητα.
            </p>
            <div className="grid gap-3">
              {hairServices.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-3 rounded-md border border-white/10 bg-black/35 p-4"
                >
                  <CheckCircle2 className="shrink-0 text-[#c8a55f]" size={20} />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-6 flex items-center gap-3 text-[#c8a55f]">
              <Paintbrush size={28} />
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                Nails
              </h2>
            </div>
            <p className="mb-8 leading-8 text-white/70">
              Περιποίηση άκρων με καθαρή αισθητική, σωστή προετοιμασία και
              χρώματα που ολοκληρώνουν το look σας για κάθε περίσταση.
            </p>
            <div className="grid gap-3">
              {nailServices.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-3 rounded-md border border-white/10 bg-black/35 p-4"
                >
                  <CheckCircle2 className="shrink-0 text-[#c8a55f]" size={20} />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#070707] px-4 py-20">
        <div className="container mx-auto">
          <div className="grid overflow-hidden rounded-xl border border-white/10 bg-[#101010] lg:grid-cols-[0.85fr_1.15fr]">
            <div className="flex flex-col justify-center p-8 md:p-10">
              <div className="mb-4 flex items-center gap-2 text-[#c8a55f]">
                <Star size={20} />
                <span className="text-sm font-bold uppercase tracking-[0.22em]">
                  Panorama Salon
                </span>
              </div>
              <h2 className="text-3xl font-bold md:text-4xl">
                Αγίου Γεωργίου 2, Πανόραμα 55236
              </h2>
              <p className="mt-5 leading-8 text-white/68">
                Το νέο γυναικείο salon βρίσκεται στο Πανόραμα Θεσσαλονίκης,
                με εύκολη πρόσβαση για ραντεβού μαλλιών, νυχιών και συνολικής
                περιποίησης.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="rounded-md bg-[#c8a55f] text-black hover:bg-[#d9ba75]">
                  <a href={phoneHref}>
                    <Phone className="mr-2" size={18} />
                    2310345055
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-md border-white/25 bg-transparent text-white hover:bg-white/10">
                  <a href={mapsHref} target="_blank" rel="noopener noreferrer">
                    <MapPin className="mr-2" size={18} />
                    Άνοιγμα στο Google Maps
                  </a>
                </Button>
              </div>
            </div>

            <div className="grid min-h-[430px] gap-px bg-white/10 sm:grid-cols-2">
              <div className="bg-[linear-gradient(rgba(6,6,6,0.2),rgba(6,6,6,0.7)),url('/uploads/kings-hair-nails-logo.svg')] bg-cover bg-center" />
              <div className="flex flex-col justify-between bg-[#171717] p-8">
                <div>
                  <Clock className="mb-5 text-[#c8a55f]" size={32} />
                  <h3 className="text-2xl font-bold">Ωράριο λειτουργίας</h3>
                </div>
                <div className="space-y-4 text-white/75">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span>Τρίτη - Σάββατο</span>
                    <span className="font-semibold text-white">09:00 - 17:00</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span>Δευτέρα</span>
                    <span>Κλειστά</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Κυριακή</span>
                    <span>Κλειστά</span>
                  </div>
                </div>
              </div>
              <div className="flex items-end bg-[linear-gradient(160deg,rgba(200,165,95,0.28),rgba(23,23,23,0.92)),url('/uploads/kings-hair-nails-logo.svg')] bg-cover bg-center p-8 sm:col-span-2">
                <div className="max-w-xl">
                  <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-[#f4d58d]">
                    Beauty by King&apos;s
                  </p>
                  <p className="text-2xl font-bold">
                    Γυναικεία περιποίηση, μαλλιά και νύχια με τη φιλοσοφία
                    ποιότητας του King&apos;s brand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {gallery.length > 0 && (
        <section className="bg-[#070707] px-4 py-20">
          <div className="container mx-auto">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-[#c8a55f]">
                Gallery
              </p>
              <h2 className="text-3xl font-bold md:text-5xl">
                Φωτογραφίες από το salon στο Πανόραμα
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/68">
                Στιγμές από τον χώρο, τα styling, τα νύχια και τις θεραπείες
                μαλλιών στο King&apos;s Hair and Nails Salon.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
              {gallery.map(({ src, alt }) => (
                <div
                  key={src}
                  className="aspect-square overflow-hidden rounded-xl border border-white/10 bg-[#111]"
                >
                  <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-[#0a0a0a] px-4 py-20">
        <div className="container mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-[#c8a55f]">
              Πανόραμα Θεσσαλονίκης
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">
              Κομμωτήριο και nail salon στο Πανόραμα και την ευρύτερη
              Θεσσαλονίκη
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-white/72">
              <p>
                Το King&apos;s Hair and Nails Salon βρίσκεται στην Αγίου
                Γεωργίου 2, στο κέντρο του Πανοράματος, και εξυπηρετεί γυναίκες
                από Πανόραμα, Πυλαία, Θέρμη και ολόκληρη τη Θεσσαλονίκη που
                ψάχνουν ένα προσεγμένο γυναικείο κομμωτήριο και nail salon.
              </p>
              <p>
                Η ομάδα μας εξειδικεύεται σε γυναικείο κούρεμα, βαφή μαλλιών,
                ανταύγειες, χτένισμα, manicure, pedicure και ημιμόνιμο, με
                έμφαση στη λεπτομέρεια, στην υγιή όψη των μαλλιών και στο
                καθαρό αισθητικό αποτέλεσμα στα νύχια.
              </p>
              <p>
                Αν αναζητάτε κομμωτήριο κοντά μου στο Πανόραμα ή στην Πυλαία,
                καλέστε στο 2310345055 για ραντεβού και ζητήστε εξατομικευμένη
                πρόταση για μαλλιά και νύχια.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#101010] p-8">
            <div className="mb-6 flex items-center gap-2 text-[#c8a55f]">
              <HelpCircle size={22} />
              <span className="text-sm font-bold uppercase tracking-[0.24em]">
                Συχνές ερωτήσεις
              </span>
            </div>
            <div className="space-y-5">
              {hairNailsFaqs.map((faq) => (
                <div
                  key={faq.question}
                  className="border-b border-white/10 pb-5 last:border-b-0 last:pb-0"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {faq.question}
                  </h3>
                  <p className="mt-2 leading-7 text-white/70">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#101010] px-4 py-16">
        <div className="container mx-auto flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#c8a55f]">
              Book now
            </p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              Κλείστε το ραντεβού σας στο King&apos;s Hair and Nails Salon
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild className="rounded-md bg-[#c8a55f] px-6 text-black hover:bg-[#d9ba75]">
              <a href={phoneHref}>
                <Phone className="mr-2" size={18} />
                Καλέστε τώρα
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-md border-white/25 bg-transparent px-6 text-white hover:bg-white/10">
              <Link to="/">Επιστροφή στην αρχική</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default HairAndNails;
