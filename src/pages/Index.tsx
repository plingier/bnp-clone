import BNPNavigation from "@/components/BNPNavigation";
import ProductHeader from "@/components/ProductHeader";
import bankingAppImage from "@/assets/banking-app-phone.jpg";
import TitleWidth from "@/components/TitleWidth";
import RichText from "@/components/RichText";
import { ProductCardGrid } from "@/components/ProductCard";
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
                  src: "/lovable-uploads/446ebfd0-a105-4b75-9e1b-125facf1606c.png",
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
                  src: "/lovable-uploads/4d9b0298-f3f2-425f-927e-dc2df46d839d.png",
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
      </div>
    </div>
  );
};

export default Index;
