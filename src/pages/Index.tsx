import BNPNavigation from "@/components/BNPNavigation";
import { Button } from "@/components/ui/button";
import { Search, ArrowRight, Gift } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <BNPNavigation />
      
      {/* Main Content */}
      <main className="space-y-0">
        {/* Welcome Hero Section */}
        <section className="bg-primary/5 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <span className="text-sm text-muted-foreground tracking-wider uppercase mb-4 block">WELKOM</span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                Hoe kunnen we u helpen?
              </h1>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-card border rounded-lg p-6 hover:shadow-md transition-shadow">
                <Search className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Een antwoord vinden</h3>
              </div>
              <div className="bg-card border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="w-8 h-8 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">📅</span>
                </div>
                <h3 className="font-semibold mb-2">Een afspraak maken</h3>
              </div>
              <div className="bg-card border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="w-8 h-8 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">📞</span>
                </div>
                <h3 className="font-semibold mb-2">02 762 60 00</h3>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <Button variant="link" className="h-auto p-2 text-primary">
                Kredietkaarten
              </Button>
              <Button variant="link" className="h-auto p-2 text-primary">
                Online en mobiel bankieren
              </Button>
              <Button variant="link" className="h-auto p-2 text-primary">
                Wonen
              </Button>
              <Button variant="link" className="h-auto p-2 text-primary">
                Woningverzekering
              </Button>
              <Button variant="link" className="h-auto p-2 text-primary">
                Pensioen
              </Button>
              <Button variant="link" className="h-auto p-2 text-primary">
                Online veiligheid
              </Button>
            </div>
          </div>
        </section>

        {/* Special Offer Banner */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <Gift className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Win Airpods!</h2>
            <p className="text-lg mb-6">
              Open deze zomer een gratis Welcome Pack-betaalrekening voor kinderen en tieners. En
              maak kans op AirPods!
            </p>
            <Button className="bg-white text-blue-600 hover:bg-gray-100">
              Meer info
            </Button>
          </div>
        </section>

        {/* Green Investment Banner */}
        <section className="bg-green-50 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🌱 GROEN BELEGGEN
            </div>
            <h2 className="text-2xl font-bold text-green-800 mb-4">
              Beleggen met respect voor mens en milieu? Dat kan met ons ESG-aanbod.
            </h2>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              Ontdek ons ESG-aanbod
            </Button>
          </div>
        </section>

        {/* Investment Report Section */}
        <section className="bg-blue-50 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">
                Rapport Beleggingsproducten Particulieren
              </h2>
              <p className="text-blue-700">
                Ontdek transparante informatie over onze beleggingsproducten.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-blue-100">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-blue-900">
                        Productgroep
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-blue-900">
                        Aantal producten
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-blue-900">
                        Gemiddelde jaarlijkse kosten (%)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">Beleggingsfondsen</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-900">245</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-900">1.85%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">Gestructureerde producten</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-900">89</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-900">2.10%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">Aandelen</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-900">1.200+</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-900">0.65%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-4 bg-gray-50 text-center">
                <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                  Download volledig rapport
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Costs Section */}
        <section className="py-12 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Beleggingskosten in perspectief
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-card border rounded-lg p-6">
                <div className="text-3xl font-bold text-primary mb-2">0.65%</div>
                <div className="text-sm text-muted-foreground">Gemiddelde kosten aandelen</div>
              </div>
              <div className="bg-card border rounded-lg p-6">
                <div className="text-3xl font-bold text-primary mb-2">1.85%</div>
                <div className="text-sm text-muted-foreground">Gemiddelde kosten fondsen</div>
              </div>
              <div className="bg-card border rounded-lg p-6">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Transparantie gegarandeerd</div>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              Wij geloven in volledige transparantie over beleggingskosten. Ontdek hoe onze tarieven 
              zich verhouden tot de markt en maak een geïnformeerde keuze.
            </p>
            <Button className="bg-primary hover:bg-primary/90">
              Vergelijk onze tarieven
            </Button>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Klaar om te starten met beleggen?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Maak een afspraak met onze beleggingsexperts en ontdek welke strategie het beste bij u past.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-primary hover:bg-gray-100">
                Maak een afspraak
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Download brochure
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;