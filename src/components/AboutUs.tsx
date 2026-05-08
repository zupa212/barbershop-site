const AboutUs = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">ΕΝΑ ΜΟΝΑΔΙΚΟ ΜΠΑΡΜΠΕΡΙΚΟ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-semibold mb-6">Για εμας</h3>
              <div className="space-y-4 text-gray-700">
                At Barbers of the North, we are more than just a barbershop. We are a destination where style meets expertise, 
                and where every cut is crafted with precision and care. Our commitment to excellence and attention to detail 
                has made us a trusted name in premium grooming services.
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6">Αποστολή μας</h3>
              <div className="space-y-4 text-gray-700">
                We strive to provide an exceptional grooming experience that combines traditional barbering techniques 
                with modern style trends. Our goal is to help every client look and feel their absolute best, offering 
                personalized service that exceeds expectations.
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8">
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <img 
                src="/uploads/133ab73d-829c-47d1-bbd5-0719d13e39bb.png" 
                alt="Barber shop interior" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <img 
                src="/uploads/77da6208-fb69-4d33-81c0-936fc35920e9.png" 
                alt="Barber shop atmosphere" 
                className="w-full h-full object-cover sepia"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
