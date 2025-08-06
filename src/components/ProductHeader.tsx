import React, { memo } from "react";
import { Phone } from "lucide-react";
import heroImage from "@/assets/mortgage-hero.jpg";

interface ProductBlock {
  label: string;
  title: string;
  description: string;
  phone?: string;
}

const ProductHeader = memo(() => {
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
    <header className="w-full bg-background">
      {/* Hero Header */}
      <div 
        className="relative h-80 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
        role="banner"
        aria-label="Hypothecair krediet hero sectie"
      >
        {/* Content with Green Banner */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-full">
            <div className="max-w-2xl">
              <div 
                className="inline-block px-8 py-6 text-white"
                style={{ background: 'var(--gradient-overlay)' }}
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Hypothecair krediet: simuleer uw krediet online
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Blocks */}
      <section className="relative -mt-16 z-10" aria-label="Product informatie blokken">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productBlocks.map((block, index) => (
              <article
                key={`${block.label}-${index}`}
                className="bg-white rounded-none p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4">
                  <span className="inline-block text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                    {block.label}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {block.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {block.description}
                </p>
                
                {block.phone && (
                  <div className="flex items-center gap-2 text-foreground">
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    <a 
                      href={`tel:${block.phone}`}
                      className="font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                      style={{ color: 'hsl(var(--financial-green))' }}
                      aria-label={`Bel ons op ${block.phone.replace('+32', '0').replace(/(\d{2})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4')}`}
                    >
                      {block.phone.replace('+32', '0').replace(/(\d{2})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4')}
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </header>
  );
});

ProductHeader.displayName = 'ProductHeader';

export default ProductHeader;