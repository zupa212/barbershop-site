import React from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar } from "lucide-react";

const PanoramaLocation = () => {
  const handleGetPanoramaDirections = () => {
    window.open(
      "https://www.google.com/maps/dir/?api=1&destination=Βενιζέλου+12+Πανόραμα+Θεσσαλονίκη",
      "_blank"
    );
  };

  const handleBookAppointment = () => {
    window.open("https://www.fresha.com/el/a/kings-barbershop-panorama-panorama-venizeloy-12-i9fmuc5j/booking?allOffer=true&menu=true&pId=949345", "_blank");
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-white text-center">Η Τοποθεσία μας</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <div className="text-white p-6 rounded-lg border-2 border-gray-800 bg-black/50">
            <h3 className="text-2xl font-bold mb-6 text-primary">King's Barbershop Πανόραμα</h3>
            <div className="space-y-4">
              <p className="text-lg">Βενιζέλου 12, Πανόραμα</p>
              <p className="text-lg">Θεσσαλονίκη, 55236</p>
              <p className="text-lg">Τηλέφωνο: <a href="tel:+302310340470" className="text-primary hover:underline">2310340470</a></p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button
                  onClick={handleGetPanoramaDirections}
                  className="bg-primary hover:bg-primary/90 text-white py-6 text-lg"
                >
                  <MapPin className="mr-2" />
                  Οδηγίες προς το κατάστημα
                </Button>
                
                <Button
                  onClick={handleBookAppointment}
                  className="bg-secondary hover:bg-secondary/90 text-white py-6 text-lg"
                >
                  <Calendar className="mr-2" />
                  Κλείστε Ραντεβού
                </Button>
              </div>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-lg border-2 border-gray-800">
            <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.7262290889523!2d23.022533!3d40.6282553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a8385fff7f4b05%3A0xc540b0568dd95c6d!2zzpLOtc69zrnOts6tzrvOv8-FIDEyLCDOoM6xzr3PjM-BzrHOvM6xIDU1MjM2!5e0!3m2!1sen!2sgr!4v1694164125!5m2!1sen!2sgr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default PanoramaLocation;
