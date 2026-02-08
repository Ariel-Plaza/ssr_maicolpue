import { PhoneIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logoImg from "@/assets/logo.svg";

const Header = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  const phoneNumber = "+56979684536";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <img 
              src={logoImg} 
              alt="SSR Maicolpue Logo" 
              className="w-10 h-10 object-contain" 
            />
            <div className="flex flex-col">
              <h1 className="font-display font-bold text-lg leading-none text-foreground">SSR Maicolpue</h1>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">Agua Potable Rural</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("infraestructura")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Infraestructura
            </button>
            <button
              onClick={() => scrollToSection("equipo")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Equipo
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Nosotros
            </button>
            <Link
              to="/tarifas-acuerdos"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Tarifas
            </Link>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Contacto
            </button>
          </nav>

          {/* CTA */}
          <a href={`tel:${phoneNumber}`} className="hidden sm:flex">
          <Button variant="default" size="sm" className="hidden sm:flex">
            <PhoneIcon className="w-4 h-4" />
            Contáctanos
            </Button>
            </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
