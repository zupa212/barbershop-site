import React from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock } from "lucide-react";
const ThermiLocation = () => {
  const handleMapClick = () => {
    window.open("https://www.google.com/maps/place/Kings+Barbershop+%CE%98%CE%AD%CF%81%CE%BC%CE%B7/@40.5613927,23.0043652,17z/data=!3m1!4b1!4m6!3m5!1s0x14a83fed37d307a9:0x6df3e1264efa8d87!8m2!3d40.5613927!4d23.0043652!16s%2Fg%2F11sb0flbgf?entry=ttu", "_blank");
  };
  const handleBookAppointment = () => {
    window.open("https://www.fresha.com/el/a/kings-barbershop-thermi-thermi-karaoli-kai-dimitrioy-4-fr2zi7of/booking?allOffer=true&menu=true&pId=949345", "_blank");
  };
  return <section className="py-12 bg-gray-900/0">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Location Information */}
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-4">King's Barbershop Θέρμη</h2>
            <p className="flex items-center mb-2">
              <MapPin className="mr-2 h-5 w-5 text-gray-400" />
              <span className="text-gray-300">
                Καραολή και Δημητρίου 4, Θέρμη 570 01
              </span>
            </p>
            <p className="flex items-center mb-2">
              <Phone className="mr-2 h-5 w-5 text-gray-400" />
              <a href="tel:+302310464749" className="text-gray-300 hover:text-primary transition-colors">
                2310 464 749
              </a>
            </p>
            <p className="flex items-center mb-4">
              <Clock className="mr-2 h-5 w-5 text-gray-400" />
              <span className="text-gray-300">Τρίτη -Παρασκευή: 9:00 - 21:00, Σάββατο: 9:00 -  5:00 μ.μ.</span>
            </p>
            <div className="flex gap-4">
              <Button variant="secondary" onClick={handleMapClick}>
                Προβολή στον χάρτη
              </Button>
              <Button onClick={handleBookAppointment}>Κλείστε Ραντεβού</Button>
            </div>
          </div>
          
          {/* Google Maps iframe */}
          <div className="rounded-lg overflow-hidden h-[300px] md:h-[400px]">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6063.459630399197!2d23.020643!3d40.547558!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a8408c114df7a1%3A0xdda10428731974a9!2zzprOsc-BzrHOv867zq4gzrrOsc65IM6UzrfOvM63z4TPgc6vzr_PhSA0LCDOmM6tz4HOvM63IDU3MCAwMQ!5e0!3m2!1sel!2sgr!4v1744545264488!5m2!1sel!2sgr" width="100%" height="100%" style={{
            border: 0
          }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>;
};
export default ThermiLocation;