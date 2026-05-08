
import { useEffect, useState } from "react";

const Parallax = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative h-[400px] w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-fixed bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('/placeholder.svg')",
          transform: `translateY(${offset * 0.5}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/60" />
      </div>
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-black">
          <h2 className="text-4xl font-bold mb-4 animate-fade-up">Stay Sharp</h2>
          <p className="text-xl animate-fade-up">Experience premium grooming services at King's Barber</p>
        </div>
      </div>
    </section>
  );
};

export default Parallax;
