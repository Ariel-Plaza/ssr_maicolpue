const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div>
              <h3 className="font-display font-bold text-lg">SSR Maicolpue</h3>
              <p className="text-sm text-background/60">Agua Potable Rural</p>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#inicio" className="text-background/70 hover:text-background transition-colors">
              Inicio
            </a>
            <a href="#servicios" className="text-background/70 hover:text-background transition-colors">
              Servicios
            </a>
            <a href="#nosotros" className="text-background/70 hover:text-background transition-colors">
              Nosotros
            </a>
            <a href="#contacto" className="text-background/70 hover:text-background transition-colors">
              Contacto
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-background/50">
            © {currentYear} SSR Maicolpue. Todos los derechos reservados.
          </p>
        </div>

        {/* Decorative wave */}
        <div className="mt-8 pt-8 border-t border-background/10 text-center">
          <p className="text-xs text-background/40">
            Maicolpue, Osorno - Región de Los Lagos, Chile
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
