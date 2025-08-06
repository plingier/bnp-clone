import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
  button: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  className?: string;
}

interface ProductCardGridProps {
  cards: ProductCardProps[];
  cardsPerRow?: 2 | 3 | 4;
  className?: string;
}

export const ProductCard = ({ image, title, description, button, className }: ProductCardProps) => {
  return (
    <div className={cn(
      "bg-card rounded-lg shadow-sm border overflow-hidden group hover:shadow-md transition-shadow duration-300",
      className
    )}>
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      
      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-foreground leading-tight">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
        
        {/* Button */}
        <div className="pt-2">
          {button.href ? (
            <Button asChild className="w-full">
              <a href={button.href} onClick={button.onClick}>
                {button.text}
              </a>
            </Button>
          ) : (
            <Button onClick={button.onClick} className="w-full">
              {button.text}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export const ProductCardGrid = ({ cards, cardsPerRow = 3, className }: ProductCardGridProps) => {
  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  };

  return (
    <div className={cn(
      "grid gap-6",
      gridCols[cardsPerRow],
      className
    )}>
      {cards.map((card, index) => (
        <ProductCard key={index} {...card} />
      ))}
    </div>
  );
};