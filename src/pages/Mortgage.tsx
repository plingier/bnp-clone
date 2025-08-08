import BNPNavigation from "@/components/BNPNavigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StickyCTA } from "@/components/StickyCTA";
import { Banner } from "@/components/Banner";
import { ProductCard } from "@/components/ProductCard";
import RichText from "@/components/RichText";
import TitleWidth from "@/components/TitleWidth";
import { Calculator, Home, Shield, TrendingUp, Phone, Calendar, CheckCircle, Zap } from "lucide-react";
import mortgageHero from "@/assets/mortgage-hero.jpg";

const Mortgage = () => {
  return (
    <div className="min-h-screen bg-background">
      <BNPNavigation />
      
      {/* Legal Notice */}
      <div className="bg-muted/30 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground text-center">
            Let op, geld lenen kost ook geld.
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-80 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${mortgageHero})` }}>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-full">
            <div className="max-w-2xl">
              <div className="inline-block px-8 py-6 bg-primary/90 text-primary-foreground rounded-lg">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Hypothecair krediet: simuleer uw krediet online
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="relative -mt-16 z-10 space-y-16 py-12">
        {/* Product Blocks Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Home className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-xl font-semibold text-foreground">PRAKTISCH</h3>
              </div>
              <h4 className="text-lg font-medium text-foreground mb-3">Uw woning financieren</h4>
              <p className="text-muted-foreground">
                Hebt u (ver)bouwplannen? Plant u de aankoop van een appartement, huis of bouwgrond? 
                U kunt dit deels financieren met een hypothecair krediet.
              </p>
            </Card>

            <Card className="bg-white p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-xl font-semibold text-foreground">UW VOORDELEN</h3>
              </div>
              <h4 className="text-lg font-medium text-foreground mb-3">Ons soepel woonkrediet</h4>
              <p className="text-muted-foreground">
                Ons hypothecair krediet is uniek op de Belgische markt. Het kan aangepast worden naargelang 
                uw financiële situatie. Bovendien geniet u extra interessante rentevoeten en kortingen als u 
                kiest voor een energiezuinig of energiebesparend project.
              </p>
            </Card>

            <Card className="bg-white p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Calculator className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-xl font-semibold text-foreground">MEER INFO</h3>
              </div>
              <h4 className="text-lg font-medium text-foreground mb-3">Simuleer uw hypothecair krediet online</h4>
              <p className="text-muted-foreground mb-4">
                Maak een simulatie van uw hypothecair krediet en maak dan een afspraak met een van onze adviseurs 
                in het kantoor of ons Easy Banking Centre.
              </p>
              <p className="text-sm text-muted-foreground">
                Het is heel eenvoudig: vraag om gebeld te worden of bel zelf op het nummer 02 433 41 36.
              </p>
            </Card>
          </div>
        </section>

        {/* Calculator Section */}
        <section id="calculator" className="bg-muted/50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Bereken uw hypothecair krediet</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Wilt u een woning financieren? Bepaal uw terugbetalingscapaciteit en bereken zelf het bedrag 
                van uw hypothecair krediet met onze simulator.
              </p>
            </div>
            
            <Card className="p-8">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Te lenen bedrag (€)
                    </label>
                    <input 
                      type="number" 
                      placeholder="200.000"
                      className="w-full p-3 border border-border rounded-md bg-background text-foreground"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Looptijd (jaren)
                    </label>
                    <select className="w-full p-3 border border-border rounded-md bg-background text-foreground">
                      <option>20 jaar</option>
                      <option>25 jaar</option>
                      <option>30 jaar</option>
                    </select>
                  </div>
                </div>
                
                <div className="text-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Simuleer uw hypothecair krediet
                  </Button>
                </div>
                
                <div className="text-center space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Hulp nodig? Klik op de link "Hoeveel moet ik lenen?" of "Hoeveel kan ik maandelijks terugbetalen?".
                  </p>
                  <p className="text-sm text-muted-foreground">
                    U kunt meteen een afspraak maken om uw aanvraag af te ronden.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Flexibility Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Kies voor meer soepelheid</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              De looptijd van een hypothecair krediet ligt doorgaans tussen de 10 en 25 jaar. 
              U kiest dus beter voor een lening die mee evolueert met uw financiële situatie en gezinssituatie.
            </p>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="bg-primary/5 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ontdek de voordelen van het hypothecair krediet
              </h2>
              <p className="text-lg text-muted-foreground">
                Van een gewaarborgde hypotheekrente tot een groen hypotheeklabel, ontdek alle voordelen van een hypothecair krediet.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6">
                <div className="flex items-start mb-4">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      4 maanden gewaarborgde hypotheekrente
                    </h3>
                    <p className="text-muted-foreground">
                      Wanneer u een hypothecair krediet aanvraagt, hebt u 1 maand de tijd om op ons aanbod in te gaan. 
                      Daarna hebt u nog 3 maanden om de verkoopakte van uw toekomstige woning door de notaris te laten 
                      opmaken en ze te ondertekenen.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start mb-4">
                  <TrendingUp className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Uw rentevoet zelf verlagen? Dat kan!
                    </h3>
                    <p className="text-muted-foreground">
                      Het principe is eenvoudig: u kunt de rentevoet van uw nieuwe lening verlagen door aan 5 voorwaarden 
                      te voldoen. Zo moet bijvoorbeeld de energieprestatie (EPC) van uw woning kleiner of gelijk zijn aan 150 kwH/m2/jaar.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start mb-4">
                  <Calendar className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Eerste 3 jaar minder afbetalen
                    </h3>
                    <p className="text-muted-foreground">
                      U kunt ervoor kiezen om uw eerste maandelijkse aflossingen te verminderen en alleen interest te betalen. 
                      U begint dan ten laatste na 36 maanden kapitaal terug te betalen.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start mb-4">
                  <Zap className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      EEM-label voor energiezuinige projecten
                    </h3>
                    <p className="text-muted-foreground">
                      We zijn de eerste bank in België die het Europese Energy Efficient Mortgage Label toepassen. 
                      Het garandeert extra interessante rentevoeten voor CO2-uitstootbeperkende doeleinden.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Insurance Banner */}
        <Banner
          image={mortgageHero}
          title="De schuldsaldoverzekering"
          description="Voor velen is de aankoop van hun eigen woning een levenswerk. We willen dat door niks laten verstoren. Met de schuldsaldoverzekering kunnen u en uw familie er in alle gemoedsrust van genieten."
          buttonText="Meer weten"
          buttonHref="/bnp-clone/verzekeringen"
        />

        {/* Flexible Lending Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Het terugbetaalde kapitaal opnieuw opnemen? Dat kan.
            </h2>
            <p className="text-muted-foreground mb-8">
              Hebt u een hypothecair krediet op maat lopen en wilt u uw woning renoveren? Dan kunt u het kapitaal 
              dat u al terugbetaald hebt, opnieuw opnemen (na toestemming van de bank). Onder bepaalde voorwaarden 
              en volgens uw behoeften zelfs tot 120% van het oorspronkelijke kapitaal.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Uw situatie</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Uw Hypothecair krediet op maat</span>
                    <span className="font-medium">100.000 EUR</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Reeds terugbetaald</span>
                    <span className="font-medium">20.000 EUR</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Geplande renovatie</span>
                    <span className="font-medium">40.000 EUR</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Wat kunt u opnieuw opnemen</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Reeds terugbetaalde bedrag</span>
                    <span className="font-medium">20.000 EUR</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">+20% van uw oorspronkelijke krediet</span>
                    <span className="font-medium">20.000 EUR</span>
                  </div>
                  <div className="flex justify-between border-t pt-3">
                    <span className="font-semibold text-foreground">Totaal opnieuw op te nemen</span>
                    <span className="font-bold text-primary">40.000 EUR</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Sticky CTA */}
        <StickyCTA
          description="Hoeveel zal mijn hypothecair krediet kosten?"
          buttonText="Simuleer uw hypothecair krediet"
          buttonHref="#calculator"
        />

        {/* Personal Advice Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Wilt u persoonlijk advies?</h2>
                <p className="text-muted-foreground mb-6">
                  Wacht u op een offerte, hebt u nog wat meer tijd nodig of weet u niet goed welk krediet het beste 
                  past bij uw project? Wilt u advies of hebt u begeleiding nodig bij de aanvraag? Een expert-adviseur 
                  staat voor u klaar.
                </p>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Bel ons op het nummer 02 433 41 36 of maak een afspraak in uw kantoor.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button>
                      <Phone className="w-4 h-4 mr-2" />
                      Bel ons
                    </Button>
                    <Button variant="outline">
                      <Calendar className="w-4 h-4 mr-2" />
                      Maak een afspraak
                    </Button>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="w-64 h-64 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="w-32 h-32 text-primary" />
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Related Products */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TitleWidth
            title="Ontdek onze andere oplossingen voor uw woning"
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProductCard
              image={{ src: "https://www.bnpparibasfortis.be/public/media/images/R2/pret-renovation3.jpg", alt: "Renovatielening" }}
              title="Renovatielening"
              description="Wilt u uw huis omtoveren volgens uw eigen wensen? Bij ons financiert u uw renovatiewerken tegen een interessant tarief."
              button={{ text: "Ontdek de Renovatielening", href: "/bnp-clone/renovatielening" }}
            />
            
            <ProductCard
              image={{ src: "https://www.bnpparibasfortis.be/public/media/images/R2/pret-renovation3.jpg", alt: "Energielening" }}
              title="Energielening"
              description="Isolatie, zonnepanelen, een groendak... Wilt u het energieverbruik van uw woning verlagen en het wooncomfort vergroten?"
              button={{ text: "Ontdek de Energielening", href: "/bnp-clone/energielening" }}
            />
            
            <ProductCard
              image={{ src: "https://www.bnpparibasfortis.be/public/media/images/R2/pret-renovation3.jpg", alt: "Verzekering Top Woning" }}
              title="Verzekering Top Woning"
              description="De brandverzekering Top Woning van AG biedt u gemoedsrust. Deze brandverzekering dekt uw woning en inboedel."
              button={{ text: "Ontdek de verzekering", href: "/bnp-clone/verzekeringen" }}
            />
            
            <ProductCard
              image={{ src: "https://www.bnpparibasfortis.be/public/media/images/R2/pret-renovation3.jpg", alt: "SoSimply certificaten" }}
              title="SoSimply certificaten"
              description="Een nieuw EPC-certificaat, asbestattest of keuringsattest voor elektriciteit of gas nodig? Reken op de erkende professionals."
              button={{ text: "Alles over SoSimply", href: "/bnp-clone/sosimply" }}
            />
          </div>
        </section>

        {/* Final Banner */}
        <Banner
          image={mortgageHero}
          title="Van uw budget naar een hypothecair krediet tot het verzekeren van uw woning"
          description="Hoeveel kan ik juist lenen? Hoe werkt een hypothecair krediet? Hoe bescherm ik mijn woning? We geven u het antwoord op deze en vele andere vragen."
          buttonText="Vertel me meer"
          buttonHref="/bnp-clone/gids"
        />

        {/* Legal Information */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-6 bg-muted/30">
            <h3 className="text-lg font-semibold text-foreground mb-4">Wettelijke informatie</h3>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                Kredietvorm: hypothecair krediet voor (on)roerend goed. De bepalingen inzake hypothecair krediet in hoofdstuk 2 
                van titel 4 van boek VII van het Wetboek van Economisch Recht zijn van toepassing. Onder voorbehoud van aanvaarding 
                van uw aanvraag door BNP Paribas Fortis nv, kredietgever, Warandeberg 3, 1000 Brussel – RPR Brussel – BTW BE 0403.199.702.
              </p>
              <p>
                Energielening - Kredietvorm: Lening op Afbetaling. De bepalingen inzake consumentenkrediet uit hoofdstuk 1 van titel 4 
                van boek VII Wetboek Economisch Recht zijn van toepassing.
              </p>
            </div>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Mortgage;