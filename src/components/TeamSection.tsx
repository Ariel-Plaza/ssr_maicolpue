import { Card } from "@/components/ui/card";

interface TeamMember {
  name: string;
  role: string;
  category: "dirigente" | "trabajador";
}

const teamMembers: TeamMember[] = [
  { name: "Nombre Dirigente 1", role: "Presidente", category: "dirigente" },
  { name: "Nombre Dirigente 2", role: "Secretario/a", category: "dirigente" },
  { name: "Nombre Dirigente 3", role: "Tesorero/a", category: "dirigente" },
  { name: "Nombre Dirigente 4", role: "Director/a", category: "dirigente" },
  { name: "Nombre Trabajador 1", role: "Operador", category: "trabajador" },
  { name: "Nombre Trabajador 2", role: "Técnico", category: "trabajador" },
];

const TeamSection = () => {
  const dirigentes = teamMembers.filter((m) => m.category === "dirigente");
  const trabajadores = teamMembers.filter((m) => m.category === "trabajador");

  const PersonCard = ({ member }: { member: TeamMember }) => (
    <Card className="overflow-hidden text-center hover:shadow-water transition-all duration-300">
      <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
          <svg
            className="w-10 h-10 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
      </div>
      <div className="p-4">
        <h4 className="font-display font-semibold text-foreground">{member.name}</h4>
        <p className="text-sm text-primary">{member.role}</p>
      </div>
    </Card>
  );

  return (
    <section id="equipo" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Nuestro Equipo
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Las personas comprometidas con llevar agua de calidad a tu hogar
          </p>
        </div>

        {/* Dirigentes */}
        <div className="mb-12">
          <h3 className="font-display font-semibold text-xl text-foreground mb-6 text-center">
            Directiva
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {dirigentes.map((member, index) => (
              <PersonCard key={index} member={member} />
            ))}
          </div>
        </div>

        {/* Trabajadores */}
        <div>
          <h3 className="font-display font-semibold text-xl text-foreground mb-6 text-center">
            Equipo Operativo
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {trabajadores.map((member, index) => (
              <PersonCard key={index} member={member} />
            ))}
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          * Para agregar fotos reales del equipo, sube las imágenes y se mostrarán aquí
        </p>
      </div>
    </section>
  );
};

export default TeamSection;
