import { Card } from "@/components/ui/card";

// Paso 1: Importamos las imágenes (esto es necesario si están en src)
// Si aún no tienes el archivo físico, VS Code te marcará un error rojo aquí.
import bombaImg from "@/assets/infraestructura/bombaImg.jpg";
import estanque1Img from "@/assets/infraestructura/estanque1Img.jpg";
import valvulaImg from "@/assets/infraestructura/valvulaImg.jpg";
import estanque2Img from "@/assets/infraestructura/estanque2Img.jpg";
import auxiliaresImg from "@/assets/infraestructura/auxiliaresImg.jpg";
import oficinaImg from "@/assets/infraestructura/oficinaImg.jpg";

interface InfrastructureItem {
  title: string;
  description: string;
  imagePlaceholder: string; // El programador la llamó así, así que la mantenemos
}

const infrastructureItems: InfrastructureItem[] = [
  {
    title: "Bomba de Captación",
    description: "Mediante la cual se traslada el agua obtenida desde el río hasta nuestro estanque.",
    imagePlaceholder: bombaImg, // Usamos la variable importada
  },
  {
    title: "Estanque Principal",
    description: "Capacidad de 100.000 Lts, desde el cual se distribuye agua hacia todas las sentinas.",
    imagePlaceholder: estanque1Img,
  },
  {
    title: "Válvula de Ventos",
    description: "Sirve para retirar el aire que está en la matriz de distribución.",
    imagePlaceholder: valvulaImg,
  },
  {
    title: "Estanque Secundario",
    description: "Recibe y distribuye el agua a Maicolpue Río Sur y camino Tril Tril.",
    imagePlaceholder: estanque2Img,
  },
  {
    title: "Estanques Auxiliares",
    description: "Almacenamos agua para tener siempre disponible en caso de corte o emergencia.",
    imagePlaceholder: auxiliaresImg,
  },
  {
    title: "Oficina",
    description: "Ubicada en Playa Central, es base de nuestros operadores para la mantención de la red.",
    imagePlaceholder: oficinaImg,
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
              <div className="aspect-video overflow-hidden border-b border-border">
                {/* Aquí se cumple la instrucción: Subes la imagen y se muestra aquí */}
                <img 
                  src={item.imagePlaceholder} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
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
      </div>
    </section>
  );
};

export default InfrastructureSection;