
import { Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { officialInstagramUrl } from "@/lib/seo";

type InstagramFeedProps = {
  compact?: boolean;
};

const InstagramFeed = ({ compact = false }: InstagramFeedProps) => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Ακολουθήστε μας στο Instagram</h2>
          <p className="text-gray-300 mb-6">Δείτε τα τελευταία κουρέματα, styles και νέα από τα καταστήματά μας</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-colors"
              onClick={() => window.open(officialInstagramUrl, "_blank")}
            >
              <Instagram className="mr-2 h-5 w-5" />
              @kings_barbershop_official
            </Button>
          </div>
        </div>

        {compact ? (
          <div className="mx-auto max-w-xl">
            <div className="aspect-square relative overflow-hidden rounded-xl group">
              <img
                src="/uploads/5655312d-26cc-4849-a60f-41e3548ae01e.png"
                alt="King's Barbershop Instagram κούρεμα"
                loading="lazy"
                decoding="async"
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <a href={officialInstagramUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                  Δείτε στο Instagram
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="aspect-square relative overflow-hidden rounded-xl group">
              <img
                src="/uploads/5655312d-26cc-4849-a60f-41e3548ae01e.png"
                alt="King's Barbershop Instagram κούρεμα"
                loading="lazy"
                decoding="async"
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <a href={officialInstagramUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                  Δείτε στο Instagram
                </a>
              </div>
            </div>
            <div className="aspect-square relative overflow-hidden rounded-xl group">
              <img
                src="/uploads/f1fb9576-0c3f-4157-b943-5ffdd370766a.png"
                alt="King's Barbershop Instagram barber style"
                loading="lazy"
                decoding="async"
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <a href={officialInstagramUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                  Δείτε στο Instagram
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default InstagramFeed;
