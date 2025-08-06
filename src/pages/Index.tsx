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
              Welkom bij <span className="text-primary">BNP Paribas Fortis</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Uw vertrouwde bankpartner voor dagelijks bankieren, sparen, beleggen, lenen en verzekeren. 
              Ontdek onze digitale oplossingen en persoonlijk advies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Open een rekening
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                Aanmelden Easy Banking
              </Button>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Onze diensten</h2>
            <p className="text-lg text-muted-foreground">
              Alles wat u nodig heeft voor uw financiële leven
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                <img 
                  src="https://www.bnpparibasfortis.be/public/ebw/media/Illustrations/AccountsPacks_HandWithGraph/BNPPF.svg"
                  alt="Dagelijks bankieren"
                  className="w-8 h-8"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Dagelijks bankieren</h3>
              <p className="text-muted-foreground mb-4">
                Betaalrekeningen, bankkaarten en moderne betaaloplossingen
              </p>
              <Button variant="ghost" size="sm">
                Meer info <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

            <div className="bg-card border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Sparen en beleggen</h3>
              <p className="text-muted-foreground mb-4">
                Bouw uw vermogen op met onze spaar- en beleggingsoplossingen
              </p>
              <Button variant="ghost" size="sm">
                Meer info <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

            <div className="bg-card border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                <Home className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Lenen</h3>
              <p className="text-muted-foreground mb-4">
                Financiering voor uw woning, voertuig of persoonlijke projecten
              </p>
              <Button variant="ghost" size="sm">
                Meer info <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

            <div className="bg-card border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Verzekeren</h3>
              <p className="text-muted-foreground mb-4">
                Bescherm wat voor u belangrijk is met onze verzekeringen
              </p>
              <Button variant="ghost" size="sm">
                Meer info <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="bg-muted/50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Uitgelichte producten</h2>
              <p className="text-lg text-muted-foreground">
                Ontdek onze populairste diensten
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-primary text-primary-foreground rounded-lg p-6">
                <div className="mb-4">
                  <img 
                    src="https://www.bnpparibasfortis.be/public/ebw/media/images/R2/easy-banking-app-2.jpg"
                    alt="Easy Banking App"
                    className="w-full h-32 object-cover rounded"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="text-lg font-bold mb-2">Easy Banking App</h3>
                <p className="mb-4 opacity-90">
                  Bankieren waar en wanneer u wilt. Eenmaal gebruiken en u bent verkocht.
                </p>
                <Button variant="secondary" size="sm">
                  Download nu
                </Button>
              </div>

              <div className="bg-card border rounded-lg p-6">
                <div className="mb-4">
                  <img 
                    src="https://www.bnpparibasfortis.be/public/ebw/media/images/R2/actualite-financiere4.jpg"
                    alt="Beleggingsnieuws"
                    className="w-full h-32 object-cover rounded"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Beleggingsnieuws</h3>
                <p className="text-muted-foreground mb-4">
                  Blijf op de hoogte van de financiële markten en beleggingskansen.
                </p>
                <Button variant="outline" size="sm">
                  Lees meer
                </Button>
              </div>

              <div className="bg-card border rounded-lg p-6">
                <div className="mb-4">
                  <img 
                    src="https://www.bnpparibasfortis.be/public/ebw/media/images/R2/so-simply-p.jpg"
                    alt="SoSimply diensten"
                    className="w-full h-32 object-cover rounded"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Woning-expertise</h3>
                <p className="text-muted-foreground mb-4">
                  Van EPC-certificaat tot energielening. Reken op de experts van SoSimply.
                </p>
                <Button variant="outline" size="sm">
                  Ontdek meer
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Support */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Users className="w-8 h-8 text-primary mr-3" />
                  <h2 className="text-3xl font-bold text-foreground">Aan uw zijde</h2>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Persoonlijk advies op maat
                </h3>
                <p className="text-muted-foreground mb-6">
                  Onze experts staan klaar om u te helpen met advies op afstand of face-to-face. 
                  Of het nu gaat om uw dagelijks bankieren, een vastgoedproject of uw pensioenvoorbereiding.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button>
                    Contacteer ons
                  </Button>
                  <Button variant="outline">
                    Afspraak maken
                  </Button>
                </div>
              </div>
              <div className="text-center">
                <img 
                  src="https://www.bnpparibasfortis.be/public/ebw/media/Illustrations/Dreams_PresentPalmtreeSofaRingInCloud/BNPPF.svg"
                  alt="Persoonlijk advies"
                  className="w-64 h-64 mx-auto"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;