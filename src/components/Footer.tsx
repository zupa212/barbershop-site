import { Instagram, Mail, MapPin, Phone, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
const Footer = () => {
  const { t, language, setLanguage } = useLanguage();
  
  return <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">King's Barbershop Πανόραμα</h3>
            <div className="space-y-2">
              <a href="tel:+302310026267" className="flex items-center gap-2 hover:text-primary">
                <Phone size={20} />
                <span>231 002 6267</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <span>Ελ. Βενιζέλου 92Α, Πανόραμα 552 36</span>
              </div>
              <a href="https://www.instagram.com/kings_barbershop_panorama/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary">
                <Instagram size={20} />
                <span>@kings_barbershop_panorama</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">King's Barbershop Thermi</h3>
            <div className="space-y-2">
              <a href="tel:+302313012230" className="flex items-center gap-2 hover:text-primary">
                <Phone size={20} />
                <span>231 301 2230</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <span>Ηρώων Πολυτεχνείου 18, Θέρμη 570 01</span>
              </div>
              <a href="https://www.instagram.com/kings_barbershop_thermi/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary">
                <Instagram size={20} />
                <span>@kings_barbershop_thermi</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">King's Barbershop Καλαμαριά</h3>
            <div className="space-y-2">
              <a href="tel:+302310404067" className="flex items-center gap-2 hover:text-primary">
                <Phone size={20} />
                <span>231 040 4067</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <span>Κοτυώρων 37, Καλαμαριά 551 31</span>
              </div>
              <a href="https://www.instagram.com/kings_barbershop_kalamaria/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary">
                <Instagram size={20} />
                <span>@kings_barbershop_kalamaria</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.linksTitle')}</h3>
            <div className="space-y-2">
              <Link to="/" className="flex items-center gap-2 hover:text-primary">
                <span>{t('footer.home')}</span>
              </Link>
              <Link to="/kings-barbershop-panorama" className="flex items-center gap-2 hover:text-primary">
                <span>{t('footer.panorama')}</span>
              </Link>
              <Link to="/kings-barbershop-thermi" className="flex items-center gap-2 hover:text-primary">
                <span>{t('footer.thermi')}</span>
              </Link>
              <Link to="/kings-barbershop-kalamaria" className="flex items-center gap-2 hover:text-primary">
                <span>{t('footer.kalamaria')}</span>
              </Link>
              <Link to="/franchise" className="flex items-center gap-2 hover:text-primary">
                <span>{t('footer.franchise')}</span>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          {/* Language Switcher */}
          <div className="flex justify-center gap-2 mb-6">
            <button
              onClick={() => setLanguage('el')}
              className={`px-4 py-2 text-sm font-medium rounded transition-all ${
                language === 'el'
                  ? 'bg-primary text-black'
                  : 'bg-black text-primary border border-primary hover:bg-primary/10'
              }`}
            >
              GR
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-4 py-2 text-sm font-medium rounded transition-all ${
                language === 'en'
                  ? 'bg-primary text-black'
                  : 'bg-black text-primary border border-primary hover:bg-primary/10'
              }`}
            >
              EN
            </button>
          </div>
          
          <div className="flex justify-center gap-4 mb-4">
            <a href="https://www.instagram.com/kings_barbershop_panorama/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-primary transition-colors">
              <Instagram size={24} />
              <span>Instagram</span>
            </a>
            <a href="https://www.tiktok.com/@barbershop.kings" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-primary transition-colors">
              <img src="/uploads/fb7e2707-c7d8-42ed-b71e-8950d415f14f.png" alt="TikTok" width="24" height="24" />
              <span>TikTok</span>
            </a>
          </div>
          <p className="text-gray-400 text-center">&copy; {new Date().getFullYear()} King's Barber. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>;
};
export default Footer;