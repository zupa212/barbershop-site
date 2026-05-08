import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock } from "lucide-react";

const KalamariaLocation = () => {
  const handleGetKalamariaDirections = () => {
    window.open("https://maps.google.com/?q=Κοτυωρων+37,+Καλαμαριά+551+31,+Greece", "_blank");
  };

  const handleBookAppointment = () => {
    window.open("https://www.fresha.com/el/a/kings-barbershop-kalamaria-kalamaria-kotyoron-37-j00634ss/booking?allOffer=true&menu=true&pId=949345", "_blank");
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-primary">
              King's Barber Καλαμαριά
            </h2>
            
            <div className="space-y-6 text-lg">
              <div className="flex items-center gap-3">
                <MapPin className="text-primary" size={24} />
                <div>
                  <p className="font-semibold">Διεύθυνση</p>
                  <p className="text-gray-300">Κοτυωρων 37, Καλαμαριά 551 31</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="text-primary" size={24} />
                <div>
                  <p className="font-semibold">Τηλέφωνο</p>
                  <p className="text-gray-300">231 040 4067</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="text-primary" size={24} />
                <div>
                  <p className="font-semibold">Ωράριο Λειτουργίας</p>
                  <div className="text-gray-300 space-y-1">
                    <p>Δευτέρα - Σάββατο: 9:00 - 21:00</p>
                    <p>Κυριακή: Κλειστά</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button 
                onClick={handleGetKalamariaDirections}
                className="bg-primary hover:bg-primary/80 text-black font-semibold"
              >
                Οδηγίες
              </Button>
              <Button 
                onClick={handleBookAppointment}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-black"
              >
                Κλείσε Ραντεβού
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.234567890123!2d22.123456!3d40.654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKotyoron+37%2C+Kalamaria+551+31%2C+Greece!5e0!3m2!1sen!2sgr!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KalamariaLocation;