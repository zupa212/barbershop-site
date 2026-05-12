import { Button } from "@/components/ui/button";
import { Phone, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactForm = () => {
  const { t } = useLanguage();
  
  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: "Panorama",
      info: "2310340470",
      description: "Βενιζέλου 12, Πανόραμα"
    },
    {
      icon: <Phone size={24} />,
      title: "Thermi",
      info: "2310464749",
      description: "Καραολή και Δημητρίου 4, Εμπορικό LA PIAZZA, Θέρμη"
    },
    {
      icon: <Phone size={24} />,
      title: "Kalamaria",
      info: "231 040 4067",
      description: "Κοτυώρων 37, Καλαμαριά"
    },
    {
      icon: <Clock size={24} />,
      title: "Ωράριο Λειτουργίας",
      info: "Τρίτη - Σάββατο: 9:00 π.μ. – 5:00 μ.μ.",
      description: "Κυριακή - Δευτέρα: Κλειστά"
    }
  ];

  const panoramaBookingUrl = "https://www.fresha.com/el/a/kings-barbershop-panorama-panorama-venizeloy-12-i9fmuc5j/booking?allOffer=true&pId=949345";
  const thermiBookingUrl = "https://www.fresha.com/el/a/kings-barbershop-thermi-thermi-karaoli-kai-dimitrioy-4-fr2zi7of/booking?allOffer=true&pId=949345";
  const kalamariaBookingUrl = "https://www.fresha.com/el/a/kings-barbershop-kalamaria-kalamaria-kotyoron-37-j00634ss/booking?allOffer=true&menu=true&pId=949345";

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-3 text-white">{t('contact.title')}</h2>
        <p className="text-xl text-center mb-6 text-gray-300 max-w-2xl mx-auto">
          {t('contact.subtitle')}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-lg"
            onClick={() => window.open(panoramaBookingUrl, "_blank")}
          >
            {t('contact.bookPanorama')}
          </Button>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-lg"
            onClick={() => window.open(thermiBookingUrl, "_blank")}
          >
            {t('contact.bookThermi')}
          </Button>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-lg"
            onClick={() => window.open(kalamariaBookingUrl, "_blank")}
          >
            {t('contact.bookKalamaria')}
          </Button>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {contactInfo.map((item, index) => (
              <div 
                key={index} 
                className="p-6 rounded-lg bg-white/10 backdrop-blur-sm border-none text-white hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-primary mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                {item.title === "Ωράριο Λειτουργίας" ? (
                  <div className="working-hours">
                    <p className="text-white mb-1">{item.info}</p>
                    {item.description.split('\n').map((line, i) => (
                      <p key={i} className="text-gray-400 text-sm">{line}</p>
                    ))}
                  </div>
                ) : (
                  <>
                    <p className="text-white mb-1">{item.info}</p>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="rounded-lg overflow-hidden h-[300px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.7262290889523!2d23.022533!3d40.6282553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a8385fff7f4b05%3A0xc540b0568dd95c6d!2zzpLOtc69zrnOts6tzrvOv8-FIDEyLCDOoM6xzr3PjM-BzrHOvM6xIDU1MjM2!5e0!3m2!1sen!2sgr!4v1694164125!5m2!1sen!2sgr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Location map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
