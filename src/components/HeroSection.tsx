import { Button } from "@/components/ui/button";
import { WaterDrop } from "@/components/icons";
import WaveBackground from "@/components/WaveBackground";
import heroImage from "@/assets/hero-lake.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 gradient-hero opacity-80" />
      </div>

      {/* Wave Background */}
      <WaveBackground />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Floating water drop */}
          <div className="animate-float mb-8 inline-flex">
            <div className="w-20 h-20 rounded-full bg-card/20 backdrop-blur-md flex items-center justify-center shadow-glow">
              <WaterDrop className="w-10 h-10 text-card" />
            </div>
          </div>

          <h1
            className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-card mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Proveemos Agua a
            <span className="block mt-2">Maicolpue</span>
          </h1>

          <p
            className="text-lg sm:text-xl text-card/90 max-w-2xl mx-auto mb-10 font-body opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Extraída desde el río Maicolpi, agua purificada desde la cordillera de la costa.
            Potabilizada en origen para los hogares de Maicolpue, Región de Los Lagos.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <Button variant="hero" size="lg" onClick={scrollToContact}>
              Solicitar Servicio
            </Button>
            <Button variant="heroOutline" size="lg">
              Conoce Más
            </Button>
          </div>

          {/* Stats */}
          <div
            className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto opacity-0 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="text-center">
              <p className="font-display font-bold text-3xl sm:text-4xl text-card">90%</p>
              <p className="text-sm text-card/70">Cobertura</p>
            </div>
            <div className="text-center">
              <p className="font-display font-bold text-3xl sm:text-4xl text-card">24/7</p>
              <p className="text-sm text-card/70">Disponibilidad</p>
            </div>
            <div className="text-center">
              <p className="font-display font-bold text-3xl sm:text-4xl text-card">100%</p>
              <p className="text-sm text-card/70">Potable</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-32 md:bottom-24 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-card/50 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-card/70 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
