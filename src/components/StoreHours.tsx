
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const StoreHours = ({ showOnlyPanorama = false, showOnlyThermi = false, showOnlyKalamaria = false }) => {
  const [activeTab, setActiveTab] = useState(showOnlyThermi ? "thermi" : (showOnlyPanorama ? "panorama" : "thermi"));
  
  const panoramaHours = [
    { day: "Δευτέρα", time: "Κλειστά" },
    { day: "Τρίτη", time: "10:00 π.μ. - 9:00 μ.μ." },
    { day: "Τετάρτη", time: "10:00 π.μ. - 9:00 μ.μ." },
    { day: "Πέμπτη", time: "10:00 π.μ. - 9:00 μ.μ." },
    { day: "Παρασκευή", time: "10:00 π.μ. - 9:00 μ.μ." },
    { day: "Σάββατο", time: "10:00 π.μ. - 5:00 μ.μ." },
    { day: "Κυριακή", time: "Κλειστά" },
  ];

  const thermiHours = [
    { day: "Δευτέρα", time: "Κλειστά" },
    { day: "Τρίτη", time: "10:00 π.μ. - 9:00 μ.μ." },
    { day: "Τετάρτη", time: "10:00 π.μ. - 9:00 μ.μ." },
    { day: "Πέμπτη", time: "10:00 π.μ. - 9:00 μ.μ." },
    { day: "Παρασκευή", time: "10:00 π.μ. - 9:00 μ.μ." },
    { day: "Σάββατο", time: "9:00 π.μ. - 5:00 μ.μ." },
    { day: "Κυριακή", time: "Κλειστά" },
  ];

  const kalamariaHours = [
    { day: "Δευτέρα", time: "Κλειστά" },
    { day: "Τρίτη", time: "10:00 π.μ. - 9:00 μ.μ." },
    { day: "Τετάρτη", time: "10:00 π.μ. - 9:00 μ.μ." },
    { day: "Πέμπτη", time: "10:00 π.μ. - 9:00 μ.μ." },
    { day: "Παρασκευή", time: "10:00 π.μ. - 9:00 μ.μ." },
    { day: "Σάββατο", time: "9:00 π.μ. - 5:00 μ.μ." },
    { day: "Κυριακή", time: "Κλειστά" }
  ];
  

  const handleGetPanoramaDirections = () => {
    window.open(
      "https://www.google.com/maps/dir/?api=1&destination=Βενιζέλου+12+Πανόραμα+Θεσσαλονίκη",
      "_blank"
    );
  };

  const handleGetThermiDirections = () => {
    window.open(
      "https://www.google.com/maps/dir/?api=1&destination=Καραολή+και+Δημητρίου+4+Θέρμη+Θεσσαλονίκη",
      "_blank"
    );
  };

  const handleGetKalamariaDirections = () => {
    window.open(
      "https://maps.google.com/?q=Κοτυωρων+37,+Καλαμαριά+551+31,+Greece",
      "_blank"
    );
  };

  if (showOnlyPanorama) {
    return (
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-white text-center">Ωράριο Λειτουργίας</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-6 text-primary">Πανόραμα</h3>
              <div className="space-y-4">
                {panoramaHours.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border-b border-gray-800 pb-2"
                  >
                    <span className="text-lg">{item.day}</span>
                    <span className="text-primary">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="w-full h-[400px] rounded-lg overflow-hidden">
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
              <Button
                onClick={handleGetPanoramaDirections}
                className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg"
              >
                <MapPin className="mr-2" />
                Οδηγίες προς Πανόραμα
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (showOnlyThermi) {
    return (
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-white text-center">Ωράριο Λειτουργίας</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-6 text-primary">Θέρμη</h3>
              <div className="space-y-4">
                {thermiHours.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border-b border-gray-800 pb-2"
                  >
                    <span className="text-lg">{item.day}</span>
                    <span className="text-primary">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="w-full h-[400px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.729631967674!2d23.018068077220825!3d40.5475620476643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a8408c6ac1ad11%3A0x87af423bee4ee3c4!2zzprOsc-BzrHOv867zq4gzrrOsc65IM6UzrfOvM63z4TPgc6vzr_PhSA0LCDOmM6tz4HOvM63IDU3MCAwMQ!5e0!3m2!1sel!2sgr!4v1743940795868!5m2!1sel!2sgr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <Button
                onClick={handleGetThermiDirections}
                className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg"
              >
                <MapPin className="mr-2" />
                Οδηγίες προς Θέρμη
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (showOnlyKalamaria) {
    return (
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-white text-center">Ωράριο Λειτουργίας</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-6 text-primary">Καλαμαριά</h3>
              <div className="space-y-4">
                {kalamariaHours.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border-b border-gray-800 pb-2"
                  >
                    <span className="text-lg">{item.day}</span>
                    <span className="text-primary">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="w-full h-[400px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.234567890123!2d22.123456!3d40.654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKotyoron+37%2C+Kalamaria+551+31%2C+Greece!5e0!3m2!1sen!2sgr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <Button
                onClick={handleGetKalamariaDirections}
                className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg"
              >
                <MapPin className="mr-2" />
                Οδηγίες προς Καλαμαριά
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-white text-center">Ωράριο Λειτουργίας</h2>
        
        <Tabs defaultValue="thermi" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full max-w-md mx-auto mb-8 bg-black border border-gray-700">
            <TabsTrigger 
              value="thermi" 
              className="flex-1 text-lg py-3 text-white data-[state=active]:bg-primary data-[state=active]:text-black focus:relative focus:outline-none"
            >
              Θέρμη
            </TabsTrigger>
            <TabsTrigger 
              value="panorama" 
              className="flex-1 text-lg py-3 text-white data-[state=active]:bg-primary data-[state=active]:text-black focus:relative focus:outline-none"
            >
              Πανόραμα
            </TabsTrigger>
            <TabsTrigger 
              value="kalamaria" 
              className="flex-1 text-lg py-3 text-white data-[state=active]:bg-primary data-[state=active]:text-black focus:relative focus:outline-none"
            >
              Καλαμαριά
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="thermi">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-6 text-primary">Θέρμη</h3>
                <div className="space-y-4">
                  {thermiHours.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center border-b border-gray-800 pb-2"
                    >
                      <span className="text-lg">{item.day}</span>
                      <span className="text-primary">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="w-full h-[400px] rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.729631967674!2d23.018068077220825!3d40.5475620476643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a8408c6ac1ad11%3A0x87af423bee4ee3c4!2zzprOsc-BzrHOv867zq4gzrrOsc65IM6UzrfOvM63z4TPgc6vzr_PhSA0LCDOmM6tz4HOvM63IDU3MCAwMQ!5e0!3m2!1sel!2sgr!4v1743940795868!5m2!1sel!2sgr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <Button
                  onClick={handleGetThermiDirections}
                  className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg"
                >
                  <MapPin className="mr-2" />
                  Οδηγίες προς Θέρμη
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="panorama">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-6 text-primary">Πανόραμα</h3>
                <div className="space-y-4">
                  {panoramaHours.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center border-b border-gray-800 pb-2"
                    >
                      <span className="text-lg">{item.day}</span>
                      <span className="text-primary">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="w-full h-[400px] rounded-lg overflow-hidden">
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
                <Button
                  onClick={handleGetPanoramaDirections}
                  className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg"
                >
                  <MapPin className="mr-2" />
                  Οδηγίες προς Πανόραμα
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="kalamaria">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-6 text-primary">Καλαμαριά</h3>
                <div className="space-y-4">
                  {kalamariaHours.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center border-b border-gray-800 pb-2"
                    >
                      <span className="text-lg">{item.day}</span>
                      <span className="text-primary">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="w-full h-[400px] rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.234567890123!2d22.123456!3d40.654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKotyoron+37%2C+Kalamaria+551+31%2C+Greece!5e0!3m2!1sen!2sgr!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <Button
                  onClick={handleGetKalamariaDirections}
                  className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg"
                >
                  <MapPin className="mr-2" />
                  Οδηγίες προς Καλαμαριά
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default StoreHours;
