
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('/uploads/c0298917-75e1-473e-a785-255bee752a30.png')`,
        }}
      />
      
      {/* Diagonal overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 100%)',
          clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'
        }}
      />
      
      <div className="relative pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-up">
            <h1 className="text-4xl sm:text-6xl font-bold text-secondary mb-8">
              Premium Grooming for the Modern Gentleman
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto">
              Experience exceptional craftsmanship and style at Barbers of the North
            </p>
            <Button
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6"
              onClick={() => window.location.href = "#book"}
            >
              Book Your Visit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
