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
      "bg-card border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group",
      className
    )}>
      {/* Image Section */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-32 md:h-32 lg:h-full object-cover object-[center_33%] transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      {/* Content Section */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-xl font-semibold text-foreground leading-tight">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
        
        {/* Action Button */}
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
  const getGridColumns = () => {
    switch (cardsPerRow) {
      case 2:
        return "grid-cols-1 md:grid-cols-2";
      case 3:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
      case 4:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
      default:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
    }
  };

  return (
    <div className={cn(
      "grid gap-6",
      getGridColumns(),
      className
    )}>
      {cards.map((card, index) => (
        <ProductCard key={index} {...card} />
      ))}
    </div>
  );
};