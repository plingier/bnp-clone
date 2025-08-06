import BNPNavigation from "@/components/BNPNavigation";
import ProductHeader from "@/components/ProductHeader";
import bankingAppImage from "@/assets/banking-app-phone.jpg";
import TitleWidth from "@/components/TitleWidth";
import RichText from "@/components/RichText";
import { ProductCardGrid } from "@/components/ProductCard";
import { MultiPurposeGrid } from "@/components/MultiPurpose";
import { StickyCTA } from "@/components/StickyCTA";
import { Banner, BannerContainer } from "@/components/Banner";
import { MessageSquare, Calendar, Phone, ArrowRight, CreditCard } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <BNPNavigation />
      <ProductHeader />
      
      {/* TitleWidth Component Examples */}
      <div className="space-y-16 py-16">
        {/* Example 1: With Links */}
        <TitleWidth
          label="WELKOM"
          title="Hoe kunnen we u helpen?"
          links={[
            {
              text: "Een antwoord vinden",
              icon: MessageSquare,
              href: "#"
            },
            {
              text: "Een afspraak maken",
              icon: Calendar,
              href: "#"
            },
            {
              text: "02 762 60 00",
              icon: Phone,
              href: "tel:0276260000"
            }
          ]}
        />
        
        {/* Example 2: With Description */}
        <TitleWidth
          label="DAGELIJKS BANKIEREN"
          title="Vergelijk onze packs"
          description="Een of twee houders, met debet- en/of kredietkaarten*, toegang tot online en mobiel bankieren ... Ontdek de basisinhoud van onze verschillende betaalrekeningen, die u naar wens kunt personaliseren."
        />
        
        {/* RichText Component Examples */}
        <div className="space-y-16">
          <RichText
            image={{
              src: bankingAppImage,
              alt: "Person holding phone with easy banking app interface"
            }}
            title="Maak uw droomhuis werkelijkheid"
            description="Met ons hypothecair krediet kunt u tot 100% van de waarde van uw woning financieren. Profiteer van concurrerende rentevoeten en flexibele terugbetalingsopties die aangepast zijn aan uw financiële situatie."
            checklist={[
              { text: "Tot 100% financiering mogelijk" },
              { text: "Concurrerende rentevoeten" },
              { text: "Flexibele terugbetalingsopties" },
              { text: "Persoonlijke begeleiding" },
              { text: "Online simulatie beschikbaar" }
            ]}
            callToAction={{
              text: "Start uw simulatie",
              variant: "default",
              icon: ArrowRight,
              href: "#simulatie"
            }}
            imagePosition="left"
          />
          
          <RichText
            image={{
              src: "/lovable-uploads/4d9b0298-f3f2-425f-927e-dc2df46d839d.png",
              alt: "Banking services illustration"
            }}
            title="Digitaal bankieren gemaakt eenvoudig"
            description="Beheer al uw bankzaken online of via onze mobiele app. Van dagelijkse transacties tot investeringen, alles is binnen handbereik met onze geavanceerde digitale tools."
            checklist={[
              { text: "24/7 toegang tot uw rekeningen" },
              { text: "Veilige online betalingen" },
              { text: "Mobiele app voor iOS en Android" },
              { text: "Real-time notificaties" },
              { text: "Uitgavenanalyse en budgettering", checked: false }
            ]}
            callToAction={{
              text: "Ontdek onze app",
              variant: "outline",
              icon: CreditCard,
              onClick: () => console.log("App download clicked")
            }}
            imagePosition="right"
          />
        </div>
        
        {/* ProductCard Component Examples */}
        <div className="px-6 md:px-10 lg:px-12">
          <div className="space-y-16">
            {/* 3 Cards Grid */}
            <div className="space-y-8">
              <TitleWidth
                label="VERZEKERINGEN"
                title="Onze populaire verzekeringen"
                description="Bescherm uzelf en uw bezittingen met onze uitgebreide verzekeringspakketten."
              />
          
              <ProductCardGrid
                cardsPerRow={3}
                cards={[
                  {
                    image: {
                      src: bankingAppImage,
                      alt: "Top Woning diefstalverzekering"
                    },
                    title: "Top Woning diefstalverzekering van AG",
                    description: "Deze aanvullende waarborg voorziet een tussenkomst bij diefstal of bij schade veroorzaakt door een poging tot diefstal.",
                    button: {
                      text: "Deze waarborg ontdekken",
                      href: "#"
                    }
                  },
                  {
                    image: {
                      src: bankingAppImage,
                      alt: "Rechtsbijstand Brandverzekering"
                    },
                    title: "Rechtsbijstand Brandverzekering van AG",
                    description: "Met deze aanvullende rechtsbijstandsverzekering kunt u rekenen op juridische bijstand bij een probleem met uw woning.",
                    button: {
                      text: "Deze waarborg ontdekken",
                      href: "#"
                    }
                  },
                  {
                    image: {
                      src: bankingAppImage,
                      alt: "Homiris alarmsysteem"
                    },
                    title: "Homiris alarmsysteem",
                    description: "Homiris beschermt uw huis en uw dierbaren 24/7 tegen inbraak en brand. Abonnement inclusief levering, installatie en onderhoud.",
                    button: {
                      text: "Alles over Homiris",
                      href: "#"
                    }
                  }
                ]}
              />
            </div>
            
            {/* 2 Cards Grid */}
            <div className="space-y-8">
              <TitleWidth
                label="KREDIET"
                title="Financieringsoplossingen"
                description="Realiseer uw projecten met onze flexibele kredietoplossingen."
              />
              
              <ProductCardGrid
                cardsPerRow={2}
                cards={[
                  {
                    image: {
                      src: bankingAppImage,
                      alt: "Persoonlijk krediet"
                    },
                    title: "Persoonlijk krediet",
                    description: "Financier uw persoonlijke projecten met onze voordelige rentevoeten en flexibele terugbetalingsopties.",
                    button: {
                      text: "Meer informatie",
                      href: "#"
                    }
                  },
                  {
                    image: {
                      src: bankingAppImage,
                      alt: "Autolening"
                    },
                    title: "Autolening",
                    description: "Koop uw droomauto met onze speciale autofinancieringsproducten. Concurrerende tarieven gegarandeerd.",
                    button: {
                      text: "Simulatie starten",
                      href: "#"
                    }
                  }
                ]}
              />
            </div>
            
            {/* 4 Cards Grid */}
            <div className="space-y-8">
              <TitleWidth
                label="DIGITALE DIENSTEN"
                title="Onze mobiele en online diensten"
                description="Beheer uw financiën eenvoudig met onze digitale tools en applicaties."
              />
              
              <ProductCardGrid
                cardsPerRow={4}
                cards={[
                  {
                    image: {
                      src: bankingAppImage,
                      alt: "Mobile Banking"
                    },
                    title: "Mobile Banking",
                    description: "Bankieren op elk moment, waar u ook bent.",
                    button: {
                      text: "Download app",
                      href: "#"
                    }
                  },
                  {
                    image: {
                      src: bankingAppImage,
                      alt: "Online Banking"
                    },
                    title: "Online Banking",
                    description: "Veilig en gebruiksvriendelijk internetbankieren.",
                    button: {
                      text: "Inloggen",
                      href: "#"
                    }
                  },
                  {
                    image: {
                      src: bankingAppImage,
                      alt: "Investment Platform"
                    },
                    title: "Investment Platform",
                    description: "Beheer uw beleggingen online.",
                    button: {
                      text: "Ontdekken",
                      href: "#"
                    }
                  },
                  {
                    image: {
                      src: bankingAppImage,
                      alt: "Digital Wallet"
                    },
                    title: "Digital Wallet",
                    description: "Contactloos betalen met uw smartphone.",
                    button: {
                      text: "Meer info",
                      href: "#"
                    }
                  }
                ]}
              />
            </div>
          </div>
        </div>

        {/* MultiPurpose Component Examples */}
        <div className="px-6 md:px-10 lg:px-12">
          <div className="space-y-16">
            {/* Single Column Layout */}
            <div className="space-y-8">
              <TitleWidth
                label="SINGLE COLUMN"
                title="Pakket Diefstal+"
                description="Uitgebreide dekking voor al uw bezittingen met onze premium verzekeringspakketten."
              />
              
              <MultiPurposeGrid
                itemsPerRow={1}
                items={[
                  {
                    title: "Pack Diefstal+",
                    description: "Voeg dit optionele pack toe aan uw verzekering Top Woning van AG en profiteer van extra waarborgen en dienstverlening bij diefstal.",
                    button: {
                      text: "Commercieel document",
                      href: "#"
                    }
                  }
                ]}
              />
            </div>

            {/* Two Column Layout */}
            <div className="space-y-8">
              <TitleWidth
                label="TWO COLUMNS"
                title="Dual Protection Packages"
                description="Kies uit onze populaire verzekeringspakketten voor optimale bescherming."
              />
              
              <MultiPurposeGrid
                itemsPerRow={2}
                items={[
                  {
                    title: "Pack Diefstal+",
                    description: "Voeg dit optionele pack toe aan uw verzekering Top Woning van AG en profiteer van extra waarborgen en dienstverlening bij diefstal.",
                    button: {
                      text: "Commercieel document",
                      href: "#"
                    }
                  },
                  {
                    title: "Pack Tuin",
                    description: "Met Pack Tuin breidt u de waarborgen van uw verzekering Top Woning van AG uit naar uw tuin en/of het ingericht terras van uw appartement.",
                    button: {
                      text: "Commercieel document",
                      href: "#"
                    }
                  }
                ]}
              />
            </div>

            {/* Three Column Layout */}
            <div className="space-y-8">
              <TitleWidth
                label="THREE COLUMNS"
                title="Complete Protection Suite"
                description="Ontdek onze volledige range van verzekeringspakketten voor elke situatie."
              />
              
              <MultiPurposeGrid
                itemsPerRow={3}
                items={[
                  {
                    title: "Pack Diefstal+",
                    description: "Voeg dit optionele pack toe aan uw verzekering Top Woning van AG en profiteer van extra waarborgen en dienstverlening bij diefstal.",
                    button: {
                      text: "Commercieel document",
                      href: "#"
                    }
                  },
                  {
                    title: "Pack Tuin",
                    description: "Met Pack Tuin breidt u de waarborgen van uw verzekering Top Woning van AG uit naar uw tuin en/of het ingericht terras van uw appartement.",
                    button: {
                      text: "Commercieel document",
                      href: "#"
                    }
                  },
                  {
                    title: "Waarborg Alle Risico's Woning van AG",
                    description: "Deze waarborg is een optionele aanvulling op de brandverzekering Top Woning van AG voor eigenaars. Hij dekt alle mogelijke materiële schade, ongeacht de oorzaak.",
                    button: {
                      text: "Ontdek de waarborg Alle Risico's Woning van AG",
                      href: "#"
                    }
                  }
                ]}
              />
            </div>
          </div>
        </div>

        {/* Banner Component Examples */}
        <div className="space-y-16">
          {/* Full Width Banner */}
          <div className="space-y-8">
            <TitleWidth
              label="PROMOTIONS"
              title="Special Offers"
              description="Ontdek onze exclusieve aanbiedingen en win geweldige prijzen."
            />
            
            <BannerContainer variant="full">
              <Banner
                image="/lovable-uploads/84721fde-4535-4825-b301-ea1c05430448.png"
                title="Win Airpods!"
                description="Open deze zomer een gratis Welcome Pack-betaalrekening voor kinderen en tieners. En maak kans op AirPods!"
                buttonText="Een rekening openen"
                onButtonClick={() => console.log('Banner CTA clicked')}
              />
            </BannerContainer>
          </div>

          {/* Two Banner Split Layout */}
          <div className="space-y-8">
            <TitleWidth
              label="FINANCIAL TIPS"
              title="Discover Our Services"
              description="Leer meer over onze digitale diensten en financiële tips voor jongeren."
            />
            
            <BannerContainer variant="split">
              <Banner
                image="/lovable-uploads/45902985-98fa-4bb0-a81a-9fb9150b7aac.png"
                title="Automatische extra controle op overschrijvingen via Easy Banking App maakt betalingen nog veiliger, betrouwbaarder en efficiënter"
                description="Verificatie van de naam van de begunstigde start vanaf 30 juni"
                buttonText="Lees er meer over"
                onButtonClick={() => console.log('Banking banner clicked')}
              />
              <Banner
                image="/lovable-uploads/45902985-98fa-4bb0-a81a-9fb9150b7aac.png"
                title="Uw tiener leren omgaan met zakgeld?"
                description="Ontdek hoe andere ouders kijken naar dit topic."
                buttonText="Naar het artikel"
                onButtonClick={() => console.log('Teen banking banner clicked')}
              />
            </BannerContainer>
          </div>
        </div>
      </div>
      
      {/* Sticky CTA Component */}
      <StickyCTA 
        description="Klaar om uw verzekering aan te passen? Neem contact op voor persoonlijk advies en offerte op maat."
        buttonText="Contact opnemen"
        onButtonClick={() => console.log('CTA clicked')}
      />
    </div>
  );
};

export default Index;
