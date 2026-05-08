
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import emailjs from '@emailjs/browser';
import { useLanguage } from "@/contexts/LanguageContext";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  subject: z.string().min(2, {
    message: "Subject must be at least 2 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();
  
  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: "Panorama",
      info: "2310 340 470",
      description: "Βενιζέλου 12, Πανόραμα"
    },
    {
      icon: <Phone size={24} />,
      title: "Thermi",
      info: "2310 464 749",
      description: "Καραολή και Δημητρίου 4, Θέρμη"
    },
    {
      icon: <Clock size={24} />,
      title: "Ωράριο Λειτουργίας",
      info: "Τρίτη - Παρασκευή: 10:00 π.μ. – 9:00 μ.μ.",
      description: "Σάββατο: 10:00 π.μ. – 5:00 μ.μ.\nΚυριακή - Δευτέρα: Κλειστά"
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      info: "",
      description: "We reply within 24 hours"
    }
  ];

  const panoramaBookingUrl = "https://www.fresha.com/el/a/kings-barbershop-panorama-panorama-venizeloy-12-i9fmuc5j/booking?allOffer=true&pId=949345";
  const thermiBookingUrl = "https://www.fresha.com/el/a/kings-barbershop-thermi-thermi-karaoli-kai-dimitrioy-4-fr2zi7of/booking?allOffer=true&pId=949345";
  const kalamariaBookingUrl = "https://www.fresha.com/el/a/kings-barbershop-kalamaria-kalamaria-kotyoron-37-j00634ss/booking?allOffer=true&menu=true&pId=949345";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // EmailJS configuration — set in .env (VITE_EMAILJS_*)
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    
    // Prepare template parameters
    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      from_phone: values.phone,
      subject: values.subject,
      message: values.message
    };
    
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        toast({
          title: "Booking Request Sent",
          description: "Thank you for your booking request. We'll respond shortly.",
        });
        form.reset();
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        toast({
          title: "Error",
          description: "There was a problem sending your message. Please try again.",
          variant: "destructive"
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }

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
                {index === 2 ? (
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
