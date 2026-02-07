import { PhoneIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <div>
              <h1 className="font-display font-bold text-lg text-foreground">SSR Maicolpue</h1>
              <p className="text-xs text-muted-foreground">Agua Potable Rural</p>
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
          <Button variant="default" size="sm" className="hidden sm:flex">
            <PhoneIcon className="w-4 h-4" />
            Contáctanos
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
