
import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const TeamSection = ({ hideLeadershipControls = false, showOnlyThermi = false, showOnlyKalamaria = false }) => {
  const [activeCeo, setActiveCeo] = useState(null);
  
  // Create refs for both carousels with autoplay
  const [leadershipRef, leadershipApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 2000, stopOnInteraction: false })]
  );
  
  const [barberRef, barberApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 2000, stopOnInteraction: false })]
  );

  const ceoMembers = [
    {
      image: "/uploads/9b7ebf65-b103-41eb-a3da-c9b66448e283.png",
      name: "Μαρία Μπόζα",
      role: "CEO",
      bio: "Η Μαρά Μποζά είναι μια κομμώτρια με πάνω από 20 χρόνια εμπειρίας στον χώρο της ομορφιάς. Ξεκίνησε την καριέρα της στο Κολωνάκι της Αθήνας, όπου απέκτησε τις πρώτες της γνώσεις και δεξιότητες στο κομμωτήριο, κατακτώντας την εμπιστοσύνη των πελατών με την εξαιρετική της τεχνική και δημιουργικότητα. Η επιτυχία της και τα αμέτρητα σεμινάρια σε γνωστούς κομμωτές του εξωτερικού και της Ελλάδας και η εμπειρία που είχε αποκτήσει τη βοήθησε να ξεχωρίσει, ενώ την οδήγησε στο επόμενο βήμα της καριέρας της.\n\nΜετά από αρκετά χρόνια στην Αθήνα, η Μαρά έκανε το μεγάλο βήμα και μετέβη στη Θεσσαλονίκη, όπου αποφάσισε να ανοίξει το δικό της κομμωτήριο στην καρδιά του Πανόραματος, στην οδό Αγίου Γεωργίου 2. Το κομμωτήριο της Μαράς Μποζά σύντομα κέρδισε τη φήμη του για την ποιοτική εξυπηρέτηση, την προσωπική προσέγγιση και τις τελευταίες τάσεις στο χώρο της κομμωτικής. Στόχος της είναι να προσφέρει σε κάθε πελάτη ένα μοναδικό και εξατομικευμένο αποτέλεσμα, με σεβασμό και αφοσίωση στις ανάγκες του.\n\nΗ Μαρά Μποζά και η ομάδα της συνεχίζουν να εξελίσσονται στον τομέα της κομμωτικής, διατηρώντας πάντα το πάθος και την αφοσίωσή της για την τέχνη του styling, ενώ παράλληλα είναι πάντα σε επαφή με τις νέες τάσεις και τεχνικές του χώρου.",
      additionalImage: "/uploads/9b7ebf65-b103-41eb-a3da-c9b66448e283.png"
    },
    {
      image: "/uploads/219d3af8-1e4f-4915-a037-991210ae72e7.png",
      name: "Κονσούλας Γιάννης",
      role: "CEO",
      bio: "Ο Γιάννης Κονσούλας είναι ένας νέος επιχειρηματίας με όραμα και φιλοδοξίες.Ξεκίνησε την επαγγελματική του πορεία με σκοπό να προσφέρει ποιότητα και εξαιρετική εξυπηρέτηση στον τομέα των κουρείων και της περιποίησης. Πριν από δύο χρόνια, το 2023, άνοιξε το πρώτο του κατάστημα, το Kings Barbershop, στο Πανόραμα Θεσσαλονίκης, \nστη διεύθυνση Βενιζέλου 12.Κατάφερε να δημιουργήσει έναν χώρο, που συνδυάζει το στυλ, την άνεση και την επαγγελματική φροντίδα, προσφέροντας εξαιρετικές υπηρεσίες κουρέματος και περιποίησης.\n\nΠέντε μήνες πριν, η επιχείρησή του επεκτάθηκε με το άνοιγμα του δεύτερου καταστήματος στην Καραολή και Δημητρίου 4, στην περιοχή της Θέρμης.Αποδεικνύοντας τη συνεχιζόμενη ανάπτυξη και την επιτυχία του επιχειρηματικού του εγχειρήματος. Η ανάπτυξη όμως της ιδέας δεν σταματάει εδώ.Με στόχο να καλύψει και τις ανάγκες των γυναικών, ετοιμάζει την ίδρυση του τρίτου καταστήματος, το οποίο θα είναι αφιερωμένο στη γυναικεία περιποίηση, στο Πανόραμα Θεσσαλονίκης.\n\nΗ φιλοσοφία του King's βασίζεται στη συνεχιζόμενη εξέλιξη, την καινοτομία και την προσφορά υπηρεσιών υψηλής ποιότητας. Κάθε νέο βήμα του είναι το αποτέλεσμα της αφοσίωσης και της αγάπης του για το αντικείμενο του, αλλά και της συνεχούς αναζήτησης του καλύτερου για τους πελάτες του. Ο στόχος του είναι να επεκτείνει την επιχείρηση του ακόμη περισσότερο, προσφέροντας εξαιρετικές υπηρεσίες και εμπειρίες σε ακόμα περισσότερους ανθρώπους.",
      additionalImage: "/uploads/219d3af8-1e4f-4915-a037-991210ae72e7.png"
    }
  ];

  // Standard team members for regular pages - removed Αλέξανδρος Γκαντίνι and Κυριάκος Γκαντίνι
  const teamMembers = [
    {
      image: "/uploads/56b5ee7b-5bff-4d8d-8c5f-9fe93724290d.png",
      name: "Αποστόλης Ιωσιφίδης",
      role: "ΚΟΜΜΩΤΗΣ"
    },
    {
      image: "/uploads/08e02807-5a37-49ae-a265-0240e30c724b.png",
      name: "Μιχάλης Καλπακίδης",
      role: "ΚΟΜΜΩΤΗΣ"
    },
    {
      image: "/uploads/75f5d32c-ce4e-4392-b22d-c523da8c18ce.png",
      name: "Αναστάσης Ματζανάς",
      role: "ΚΟΜΜΩΤΗΣ"
    },
    {
      image: "/uploads/konstantinos-panitsidis.jpg",
      name: "Κωνσταντίνος Πανιτσίδης",
      role: "ΚΟΜΜΩΤΗΣ"
    },
    {
      image: "/uploads/spyros-deligiorgis.jpg",
      name: "Σπύρος Δεληγιώργης",
      role: "ΚΟΜΜΩΤΗΣ"
    },
    {
      image: "/uploads/christos-giorgis.jpg",
      name: "Χρήστος Γιώργης",
      role: "ΚΟΜΜΩΤΗΣ"
    }
  ];

  // Thermi location specific team members - removed Αλέξανδρος Γκαντίνι and Κυριάκος Γκαντίνι
  const thermiTeamMembers = [
    {
      image: "/uploads/e5091cca-2d71-44ad-8f57-ad68b77c54d0.png",
      name: "Δημήτρης Σταύρου",
      role: "ΚΟΜΜΩΤΗΣ"
    }
  ];

  // Kalamaria location specific team members
  const kalamariaTeamMembers = [
    {
      image: "/uploads/konstantinos-panitsidis.jpg",
      name: "Κωνσταντίνος Πανιτσίδης",
      role: "ΚΟΜΜΩΤΗΣ"
    },
    {
      image: "/uploads/spyros-deligiorgis.jpg",
      name: "Σπύρος Δεληγιώργης",
      role: "ΚΟΜΜΩΤΗΣ"
    },
    {
      image: "/uploads/christos-giorgis.jpg",
      name: "Χρήστος Γιώργης",
      role: "ΚΟΜΜΩΤΗΣ"
    }
  ];

  // Select which team members to display based on the showOnlyThermi or showOnlyKalamaria props
  const displayTeamMembers = showOnlyThermi ? thermiTeamMembers : showOnlyKalamaria ? kalamariaTeamMembers : teamMembers;

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-secondary to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-3 text-white">Meet Our Team</h2>
        <p className="text-xl text-center mb-12 text-gray-300 max-w-2xl mx-auto">
          Expert barbers passionate about crafting the perfect look for every client
        </p>
        
        {/* CEO Carousel - show on all pages including Thermi page */}
        <div className="max-w-6xl mx-auto mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-white">Our Leadership</h3>
            <div className="overflow-hidden" ref={leadershipRef}>
              <div className="flex">
                {ceoMembers.map((member, index) => (
                  <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] pl-4 min-w-0">
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="p-2 cursor-pointer">
                          <div className="rounded-2xl overflow-hidden shadow-lg bg-white/10 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:bg-white/20 group border-2 border-[#FEC6A1]">
                            <div className="relative overflow-hidden">
                              <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                            </div>
                            <div className="p-6 text-center">
                              <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                              <p className="text-primary font-bold mb-4">{member.role}</p>
                            </div>
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-lg bg-black/90 border border-primary text-white max-h-[80vh] overflow-y-auto">
                        <div className="p-6">
                          <h3 className="text-2xl font-bold text-primary mb-4">{member.name}</h3>
                          <div className="space-y-4">
                            <p className="text-gray-300 whitespace-pre-line">{member.bio}</p>
                            
                            {member.additionalImage && (
                              <div className="mt-6 flex justify-center">
                                <img 
                                  src={member.additionalImage} 
                                  alt={`${member.name} additional`} 
                                  className="max-w-full h-auto rounded-lg border-2 border-primary/30"
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                ))}
              </div>
            </div>
        </div>
        
        {/* Team Members Carousel - Bigger slides for Thermi page */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">
            {showOnlyThermi ? "Our Thermi Barbers" : showOnlyKalamaria ? "Our Kalamaria Barbers" : "Our Barbers"}
          </h3>
          <div className="overflow-hidden" ref={barberRef}>
            <div className="flex">
              {displayTeamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className={`flex-[0_0_100%] min-w-0 ${(showOnlyThermi || showOnlyKalamaria) ? 'md:flex-[0_0_50%]' : 'md:flex-[0_0_50%] lg:flex-[0_0_33.333%]'} pl-4`}
                >
                  <div className="p-2">
                    <div className="rounded-2xl overflow-hidden shadow-lg bg-white/10 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:bg-white/20 group">
                      <div className="relative overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${(showOnlyThermi || showOnlyKalamaria) ? 'h-[450px]' : 'h-80'}`}
                        />
                      </div>
                      <div className="p-6 text-center">
                        <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                        <p className="text-primary font-bold mb-4">{member.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
