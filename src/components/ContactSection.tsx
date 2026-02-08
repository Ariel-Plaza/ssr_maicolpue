import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PhoneIcon, MailIcon, LocationIcon, ClockIcon } from "@/components/icons";
const phoneNumber = "+56979684536";
const emailAddress = "contacto@ssrmaicolpue.cl"
const emailSubject = "Consulta - SSR Maicolpue";
const emailBody = "Hola, me gustaría obtener más información sobre...";

const contactInfo = [
  {
    icon: PhoneIcon,
    title: "Teléfono",
    value: "+56 9 7968 4536",
    description: "Llámanos para consultas",
  },
  {
    icon: MailIcon,
    title: "Email",
    value: "contacto@ssrmaicolpue.cl",
    description: "Escríbenos tus consultas",
  },
  {
    icon: LocationIcon,
    title: "Ubicación",
    value: "Maicolpue, San Juan de la costa",
    description: "Región de Los Lagos, Chile",
  },
  {
    icon: ClockIcon,
    title: "Horario Atención",
    value: "Lun - Vie: 9:00 - 18:00",
    description: "Playa Central - Maicolpue",
  },
];

const ContactSection = () => {
  return (
    <section id="contacto" className="py-24 gradient-wave">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Contáctanos
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            Estamos Para Ayudarte
          </h2>
          <p className="text-muted-foreground text-lg">
            ¿Tienes preguntas sobre nuestro servicio? No dudes en contactarnos.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              variant="elevated"
              className="text-center opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl gradient-ocean flex items-center justify-center mx-auto mb-4 shadow-water">
                  <info.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-1">
                  {info.title}
                </h3>
                <p className="text-primary font-medium mb-1">{info.value}</p>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card variant="glass" className="inline-block max-w-2xl mx-auto">
            <CardContent className="p-8 sm:p-12">
              <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                ¿Necesitas Contactarnos?
              </h3>
              <p className="text-muted-foreground mb-6">
                Si deseas contactarnos o tienes alguna emergencia o quieres reportar una fuga,
                no dudes en comunicarte con nosotros.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={`tel:${phoneNumber}`} className="hidden sm:flex">
                <Button variant="water" size="lg">
                  <PhoneIcon className="w-5 h-5" />
                  Llamar Ahora
                </Button>
                </a>
                <a 
                  href={`mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`}
                  className="hidden sm:flex"
                    >
                <Button variant="outline" size="lg">
                  <MailIcon className="w-5 h-5" />
                  Enviar Email
                  </Button>
                  </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
