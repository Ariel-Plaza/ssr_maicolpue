import { Card } from "@/components/ui/card";

interface InfrastructureItem {
  title: string;
  description: string;
  imagePlaceholder: string;
}

const infrastructureItems: InfrastructureItem[] = [
  {
    title: "Bomba de Captación",
    description: "Mediante la cual se traslada el agua obtenida desde el río hasta nuestro estanque.",
    imagePlaceholder: "Foto de bomba de captación",
  },
  {
    title: "Estanque Principal",
    description: "Capacidad de 100.000 Lts, desde el cual se distribuye agua hacia todas las sentinas.",
    imagePlaceholder: "Foto de estanque principal",
  },
  {
    title: "Válvula de Ventos",
    description: "Sirve para retirar el aire que está en la matriz de distribución.",
    imagePlaceholder: "Foto de válvula de ventos",
  },
  {
    title: "Estanque Secundario",
    description: "Recibe y distribuye el agua a Maicolpue Río Sur y camino Tril Tril.",
    imagePlaceholder: "Foto de estanque secundario",
  },
  {
    title: "Estanques Auxiliares",
    description: "Almacenamos agua para tener siempre disponible en caso de corte o emergencia.",
    imagePlaceholder: "Foto de estanques auxiliares",
  },
  {
    title: "Oficina",
    description: "Ubicada en Playa Central, es base de nuestros operadores para la mantención de la red.",
    imagePlaceholder: "Foto de oficina",
  },
];

const InfrastructureSection = () => {
  return (
    <section id="infraestructura" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Nuestras Instalaciones
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ubicadas en lugares estratégicos para suministrar agua a toda nuestra red
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {infrastructureItems.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-water transition-all duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center border-b border-border">
                <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/20 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.imagePlaceholder}</p>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          * Para agregar fotos reales, sube las imágenes y se mostrarán aquí
        </p>
      </div>
    </section>
  );
};

export default InfrastructureSection;
