import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { WaterDrop } from "@/components/icons";
import { Link } from "react-router-dom";

const TarifasAcuerdos = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full gradient-ocean flex items-center justify-center shadow-water">
                <WaterDrop className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-display font-bold text-lg text-foreground">SSR Maicolpue</h1>
                <p className="text-xs text-muted-foreground">Agua Potable Rural</p>
              </div>
            </Link>
            <Link to="/">
              <Button variant="outline" size="sm">
                Volver al Inicio
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4 text-center">
            Tarifas y Acuerdos
          </h1>
          <p className="text-muted-foreground text-center mb-12">
            Información sobre tarifas vigentes y acuerdos tomados en asambleas de socios
          </p>

          {/* Tarifas */}
          <section className="mb-12">
            <h2 className="font-display font-semibold text-2xl text-foreground mb-6">
              Tarifas Vigentes
            </h2>
            <Card className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-foreground">Cargo fijo mensual</span>
                  <span className="font-semibold text-primary">$ ---</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-foreground">Consumo por m³ (hasta 15 m³)</span>
                  <span className="font-semibold text-primary">$ ---</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-foreground">Consumo por m³ (sobre 15 m³)</span>
                  <span className="font-semibold text-primary">$ ---</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-foreground">Derecho de conexión</span>
                  <span className="font-semibold text-primary">$ ---</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                * Las tarifas son actualizadas según acuerdos en asamblea de socios
              </p>
            </Card>
          </section>

          {/* Acuerdos */}
          <section>
            <h2 className="font-display font-semibold text-2xl text-foreground mb-6">
              Acuerdos de Asambleas
            </h2>
            <div className="space-y-4">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      Acta Asamblea [Fecha]
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Resumen de los acuerdos tomados en esta asamblea...
                    </p>
                    <Button variant="outline" size="sm" disabled>
                      Descargar PDF
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-dashed border-2">
                <div className="text-center py-4">
                  <svg
                    className="w-12 h-12 text-muted-foreground mx-auto mb-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  <p className="text-muted-foreground">
                    Aquí se agregarán más actas y acuerdos de asambleas
                  </p>
                </div>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default TarifasAcuerdos;
