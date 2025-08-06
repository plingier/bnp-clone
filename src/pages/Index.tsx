import BNPNavigation from "@/components/BNPNavigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Smartphone, CreditCard, PiggyBank, Car, Heart, Home as HomeIcon, Calculator } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <BNPNavigation />
      
      {/* Main Content */}
      <main className="space-y-0">
        {/* Hero Section */}
        <section 
          className="relative bg-cover bg-center h-[600px] flex items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/lovable-uploads/a0888249-34a7-4a64-8aeb-174b84b4edb1.png')`
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Hoe kunnen we u helpen?
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Ontdek onze diensten en producten die perfect aansluiten bij uw behoeften
              </p>
            </div>
          </div>
        </section>

        {/* Wij Kunnen Section */}
        <section className="bg-primary/5 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">Wij kunnen!</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Van een nieuw spaarboekje tot een woonkrediet, van beleggen tot verzekeringen: 
                  wij staan voor u klaar met advies op maat.
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Ontdek wat we doen
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-card border rounded-lg p-6 text-center">
                  <Smartphone className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Easy Banking App</h3>
                  <p className="text-sm text-muted-foreground">Bankieren waar en wanneer het u uitkomt</p>
                </div>
                <div className="bg-card border rounded-lg p-6 text-center">
                  <CreditCard className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Dagelijks bankieren</h3>
                  <p className="text-sm text-muted-foreground">Alles voor uw dagelijkse financiële behoeften</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <PiggyBank className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Sparen & beleggen</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Laat uw geld werken met onze spaar- en beleggingsoplossingen
                </p>
                <Button variant="link" size="sm" className="h-auto p-0 text-primary">
                  Meer info <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>

              <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <HomeIcon className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Wonen</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Woonkrediet, verzekeringen en advies voor uw droomhuis
                </p>
                <Button variant="link" size="sm" className="h-auto p-0 text-primary">
                  Meer info <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>

              <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <Calculator className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Krediet</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Persoonlijke lening of kredietkaart voor uw projecten
                </p>
                <Button variant="link" size="sm" className="h-auto p-0 text-primary">
                  Meer info <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>

              <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <Heart className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Verzekeren</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Bescherm wat u dierbaar is met onze verzekeringen
                </p>
                <Button variant="link" size="sm" className="h-auto p-0 text-primary">
                  Meer info <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Blijf op de hoogte Section */}
        <section className="bg-muted/30 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Blijf op de hoogte</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600"></div>
                <div className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">Uw fiscale attest in enkele klikken</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Haal uw fiscaal attest op via Easy Banking Web of de app
                  </p>
                  <Button variant="link" size="sm" className="h-auto p-0 text-primary">
                    Meer informatie <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>

              <div className="bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-green-400 to-green-600"></div>
                <div className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">Pas op voor Fraudie via Teams</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Let goed op voor frauduleuze berichten via Teams
                  </p>
                  <Button variant="link" size="sm" className="h-auto p-0 text-primary">
                    Lees meer <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>

              <div className="bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600"></div>
                <div className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">Werk uw gegevens bij via ons CRM-portaal</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Update eenvoudig uw contactgegevens
                  </p>
                  <Button variant="link" size="sm" className="h-auto p-0 text-primary">
                    Meer info <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>

              <div className="bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600"></div>
                <div className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">Touring CardStart, onze tankkaart</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Ontdek de voordelen van onze tankkaart
                  </p>
                  <Button variant="link" size="sm" className="h-auto p-0 text-primary">
                    Ontdek voordelen <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Easy Banking App Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-muted/50 rounded-lg p-8 h-96 flex items-center justify-center">
                  <Smartphone className="w-32 h-32 text-primary" />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Easy Banking App, uw bank binnen handbereik
                </h2>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Uw saldo en bewegingen raadplegen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Overschrijvingen uitvoeren</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Facturen betalen via QR-code</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Contactloos betalen met uw smartphone</span>
                  </li>
                </ul>
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Download Easy Banking App
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Talk About It Section */}
        <section className="bg-muted/30 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                En wat als het tijd was om erover te praten?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-end p-6">
                  <h3 className="text-white font-bold text-xl">Woning</h3>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground mb-4">
                    Droomt u van een eigen huis of appartement? Wij helpen u bij de financiering.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Ontdek
                  </Button>
                </div>
              </div>

              <div className="bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-end p-6">
                  <h3 className="text-white font-bold text-xl">Budgetbeheer</h3>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground mb-4">
                    Houd uw financiën onder controle met onze budgettools en spaaroplossingen.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Ontdek
                  </Button>
                </div>
              </div>

              <div className="bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-end p-6">
                  <h3 className="text-white font-bold text-xl">Familie</h3>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground mb-4">
                    Verzeker de toekomst van uw gezin met onze familie-oplossingen.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Ontdek
                  </Button>
                </div>
              </div>

              <div className="bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600 flex items-end p-6">
                  <h3 className="text-white font-bold text-xl">Mobiliteit</h3>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground mb-4">
                    Autofinanciering, verzekeringen en alles voor uw mobiliteit.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Ontdek
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-primary/5 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Nog vragen?</h2>
            <p className="text-muted-foreground mb-8">
              Neem contact op met onze experts. We helpen u graag verder.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Maak een afspraak
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;