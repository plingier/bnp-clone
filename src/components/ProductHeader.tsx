import { Phone } from "lucide-react";
import heroImage from "@/assets/mortgage-hero.jpg";

interface ProductBlock {
  label: string;
  title: string;
  description: string;
  phone?: string;
}

const ProductHeader = () => {
  const productBlocks: ProductBlock[] = [
    {
      label: "PRAKTISCH",
      title: "Uw woning financieren",
      description: "Hebt u (ver)bouwplannen? Plant u de aankoop van een appartement, huis of bouwgrond? U kunt dit deels financieren met een hypothecair krediet."
    },
    {
      label: "UW VOORDELEN", 
      title: "Ons soepel woonkrediet",
      description: "Ons hypothecair krediet is uniek op de Belgische markt. Het kan aangepast worden naargelang uw financiële situatie. Bovendien geniet u extra interessante rentevoeten en kortingen als u kiest voor een energiezuinig of energiebesparend project."
    },
    {
      label: "MEER INFO",
      title: "Simuleer uw hypothecair krediet online", 
      description: "Maak een simulatie van uw hypothecair krediet en maak dan een afspraak met een van onze adviseurs in het kantoor of ons Easy Banking Centre. Het is heel eenvoudig: vraag om gebeld te worden of bel zelf op het nummer",
      phone: "+3224334136"
    }
  ];

  return (
    <div className="w-full bg-background">
      {/* Hero Header */}
      <div 
        className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        
        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-full">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Hypothecair krediet: simuleer uw krediet online
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Product Blocks */}
      <div className="relative -mt-24 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {productBlocks.map((block, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-accent text-accent-foreground rounded-full">
                    {block.label}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-card-foreground mb-3">
                  {block.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {block.description}
                </p>
                
                {block.phone && (
                  <div className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                    <Phone className="w-4 h-4" />
                    <a 
                      href={`tel:${block.phone}`}
                      className="font-semibold hover:underline"
                    >
                      {block.phone.replace('+32', '0').replace(/(\d{2})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4')}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;