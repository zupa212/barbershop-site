
import React from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const BlogHeader = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-black to-secondary">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">King's Barber Blog</h1>
        <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto mb-8">
          Ανακαλύψτε συμβουλές για περιποίηση μαλλιών, τις τελευταίες τάσεις στα ανδρικά κουρέματα και νέα από τα καταστήματά μας
        </p>
        
        <div className="max-w-lg mx-auto relative">
          <input 
            type="text" 
            placeholder="Αναζήτηση άρθρων..." 
            className="w-full py-3 px-5 pr-12 bg-white/10 backdrop-blur-sm border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Button size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent hover:bg-white/10">
            <Search className="h-5 w-5 text-gray-400" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogHeader;
