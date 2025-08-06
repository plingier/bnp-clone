import BNPNavigation from "@/components/BNPNavigation";
import ProductHeader from "@/components/ProductHeader";
import TitleWidth from "@/components/TitleWidth";
import { MessageSquare, Calendar, Phone } from "lucide-react";

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
      </div>
    </div>
  );
};

export default Index;
