
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Calendar, ChevronRight } from "lucide-react";
import { useWindowScroll } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useWindowScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();
  
  const bookingUrl = "https://www.fresha.com/el/providers/kings-barbershop-dtf1yzvb?pId=949345&locale=el&allOffer=true";

  // Update the scroll state
  useEffect(() => {
    setIsScrolled(scrollY > 10);
  }, [scrollY]);

  // Function to handle menu toggle
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle booking
  const handleBookNow = () => {
    window.open(bookingUrl, "_blank");
  };

  // Combined function to handle booking and close menu
  const handleBookAndCloseMenu = () => {
    setIsOpen(false);
    handleBookNow();
  };

  // Helper function to determine if a link is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo - positioned to the left and enlarged */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/uploads/8ab1f84b-2d00-49d8-b59d-7340c4b75f78.png" 
                alt="King's Barber Logo" 
                width="96"
                height="96"
                decoding="async"
                className="h-24 mr-2" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`${isActive('/') ? 'text-primary font-bold' : 'text-white'} hover:text-primary transition`}
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/kings-barbershop-panorama" 
              className={`${isActive('/kings-barbershop-panorama') ? 'text-primary font-bold' : 'text-white'} hover:text-primary transition`}
            >
              {t('nav.panorama')}
            </Link>
            <Link 
              to="/kings-barbershop-thermi" 
              className={`${isActive('/kings-barbershop-thermi') ? 'text-primary font-bold' : 'text-white'} hover:text-primary transition`}
            >
              {t('nav.thermi')}
            </Link>
            <Link 
              to="/kings-barbershop-kalamaria" 
              className={`${isActive('/kings-barbershop-kalamaria') ? 'text-primary font-bold' : 'text-white'} hover:text-primary transition`}
            >
              {t('nav.kalamaria')}
            </Link>
            <Link 
              to="/kings-hair-and-nails-panorama" 
              className={`${isActive('/kings-hair-and-nails-panorama') ? 'text-primary font-bold' : 'text-white'} hover:text-primary transition`}
            >
              {t('nav.hairNails')}
            </Link>
            <Link 
              to="/franchise" 
              className={`${isActive('/franchise') ? 'text-primary font-bold' : 'text-white'} hover:text-primary transition`}
            >
              {t('nav.franchise')}
            </Link>
            <Button 
              onClick={handleBookNow}
              className="bg-primary hover:bg-primary/80 text-white flex items-center gap-2 px-6 rounded-md transition-all shadow-lg hover:shadow-primary/20 animate-pulse"
            >
              <Calendar size={18} />
              {t('nav.bookNow')}
              <ChevronRight size={16} />
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <Button 
              onClick={handleBookNow}
              size="sm"
              className="bg-primary hover:bg-primary/80 text-white flex items-center"
            >
              <Calendar size={16} className="mr-1" />
              Book
            </Button>
            
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`${isActive('/') ? 'text-primary font-bold' : 'text-white'} hover:text-primary transition`}
              onClick={() => setIsOpen(false)}
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/kings-barbershop-panorama" 
              className={`${isActive('/kings-barbershop-panorama') ? 'text-primary font-bold' : 'text-white'} hover:text-primary transition`}
              onClick={() => setIsOpen(false)}
            >
              {t('nav.panorama')}
            </Link>
            <Link 
              to="/kings-barbershop-thermi" 
              className={`${isActive('/kings-barbershop-thermi') ? 'text-primary font-bold' : 'text-white'} hover:text-primary transition`}
              onClick={() => setIsOpen(false)}
            >
              {t('nav.thermi')}
            </Link>
            <Link 
              to="/kings-barbershop-kalamaria" 
              className={`${isActive('/kings-barbershop-kalamaria') ? 'text-primary font-bold' : 'text-white'} hover:text-primary transition`}
              onClick={() => setIsOpen(false)}
            >
              {t('nav.kalamaria')}
            </Link>
            <Link 
              to="/kings-hair-and-nails-panorama" 
              className={`${isActive('/kings-hair-and-nails-panorama') ? 'text-primary font-bold' : 'text-white'} hover:text-primary transition`}
              onClick={() => setIsOpen(false)}
            >
              {t('nav.hairNails')}
            </Link>
            <Link 
              to="/franchise" 
              className={`${isActive('/franchise') ? 'text-primary font-bold' : 'text-white'} hover:text-primary transition`}
              onClick={() => setIsOpen(false)}
            >
              {t('nav.franchise')}
            </Link>
            <Button 
              onClick={handleBookAndCloseMenu}
              className="bg-primary hover:bg-primary/80 text-white w-full flex items-center justify-center gap-2"
            >
              <Calendar size={18} />
              {t('nav.bookNow')}
              <ChevronRight size={16} />
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
