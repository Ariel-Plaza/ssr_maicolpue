import { Card, CardContent } from "@/components/ui/card";
import { WaterDrop, ShieldIcon, UsersIcon, ZapIcon, ClockIcon } from "@/components/icons";

const services = [
  {
    icon: ShieldIcon,
    title: "Protección Contra Bacterias",
    description:
      "El agua del río es naturalmente limpia. Desde el momento de la captación hacemos todo lo posible para asegurarnos de que el agua esté libre de bacterias.",
  },
  {
    icon: WaterDrop,
    title: "Sin Contaminantes",
    description:
      "Durante el proceso de captación y almacenamiento, se realizan muestras de agua para verificación de nivel de cloro. Nuestra agua es la más pura de la Región.",
  },
  {
    icon: ZapIcon,
    title: "Distribución",
    description:
      "Se realiza con bombas, sentinas de distribución, matrices y arranques con las cuales se cubre el 90% de Maicolpue, entregando agua según las especificaciones sanitarias.",
  },
  {
    icon: ClockIcon,
    title: "Mantención",
    description:
      "Mantenimiento constante de toda nuestra red de distribución, bombas y estanques para garantizar un servicio continuo y sin interrupciones.",
  },
  {
    icon: UsersIcon,
    title: "Atención Personalizada",
    description:
      "Equipo comprometido con resolver tus consultas y mantener un servicio de excelencia para la comunidad de Maicolpue.",
  },
  {
    icon: WaterDrop,
    title: "Agua de Cordillera",
    description:
      "Nuestra prístina agua fluye desde la cordillera de la costa. El río Maicolpi proporciona agua fresca y limpia a nuestro pozo de captación.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Nuestros Servicios
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            Nuestro Proceso
          </h2>
          <p className="text-muted-foreground text-lg">
            Desde la captación hasta tu hogar, garantizamos agua pura y segura para Maicolpue.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              variant="feature"
              className="group opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl gradient-ocean flex items-center justify-center mb-6 shadow-water group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
