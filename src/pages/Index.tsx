import BNPNavigation from "@/components/BNPNavigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Home, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <BNPNavigation />
      
      {/* Main Content */}
      <main className="space-y-16 py-12">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Uw bank <span className="text-primary">voor het leven</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              BNP Paribas Fortis is uw vertrouwde partner voor al uw bankzaken. 
              Van dagelijks bankieren tot investeren en verzekeren.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Word klant
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                Easy Banking
              </Button>
            </div>
          </div>
        </section>

        {/* Investment Products Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Beleggingsproducten volgens de markt</h2>
            <p className="text-lg text-muted-foreground">
              We bieden producten aan op basis van de marktomstandigheden
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Producten van de maand</h3>
              <p className="text-muted-foreground mb-4">
                Met volledige of gedeeltelijke kapitaalbescherming, vanaf 1.000 euro.
              </p>
              <Button variant="outline" size="sm">
                Ontdek meer <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

            <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Obligaties</h3>
              <p className="text-muted-foreground mb-4">
                Beleggen in obligaties. Lees het Prospectus voor aankoop.
              </p>
              <Button variant="outline" size="sm">
                Meer info <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

            <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                <Home className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Flexinvest</h3>
              <p className="text-muted-foreground mb-4">
                Gratis plan d'investissement. Frais d'entrée: 2,50% du montant investi.
              </p>
              <Button variant="outline" size="sm">
                Investeer nu <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* Financial Reports Section */}
        <section className="bg-muted/50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Financial Reports</h2>
              <p className="text-lg text-muted-foreground">
                Toegang tot onze financiële rapporten en documentatie
              </p>
            </div>
            
            <div className="bg-card border rounded-lg p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-4 px-2 font-semibold text-foreground">Document</th>
                      <th className="text-left py-4 px-2 font-semibold text-foreground">PDF</th>
                      <th className="text-left py-4 px-2 font-semibold text-foreground">Size</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-4 px-2 text-muted-foreground">Pillar 3 disclosure 2024</td>
                      <td className="py-4 px-2">
                        <Button variant="link" size="sm" className="h-auto p-0">
                          PDF
                        </Button>
                      </td>
                      <td className="py-4 px-2 text-muted-foreground">17234 KB</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-2 text-muted-foreground">Additional Pillar 3 disclosure 2024</td>
                      <td className="py-4 px-2">
                        <Button variant="link" size="sm" className="h-auto p-0">
                          PDF
                        </Button>
                      </td>
                      <td className="py-4 px-2 text-muted-foreground">3199 KB</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-2 text-muted-foreground">Annual Report 2024 BNP Paribas Fortis sa/nv</td>
                      <td className="py-4 px-2">
                        <Button variant="link" size="sm" className="h-auto p-0">
                          PDF
                        </Button>
                      </td>
                      <td className="py-4 px-2 text-muted-foreground">2834 KB</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Fees Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Frais et taxes dus</h2>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Plan d'investissement gratuit
                </h3>
                <p className="text-muted-foreground mb-4">
                  Ce plan d'investissement est gratuit. Il en va de même si vous désirez y mettre un terme.
                </p>
                <p className="text-muted-foreground mb-6">
                  Des frais d'entrée sont en revanche dus à chaque fois que vous effectuez un placement 
                  dans le fonds de votre choix : 2,50% du montant investi (sauf indication contraire).
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button>
                    En savoir plus
                  </Button>
                  <Button variant="outline">
                    Commencer
                  </Button>
                </div>
              </div>
              <div className="text-center">
                <div className="w-64 h-64 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-32 h-32 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;