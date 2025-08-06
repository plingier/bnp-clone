import React, { memo, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface MultiPurposeProps {
  title: string;
  description: string;
  button: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  className?: string;
}

interface MultiPurposeGridProps {
  items: MultiPurposeProps[];
  itemsPerRow?: 1 | 2 | 3;
  className?: string;
}

export const MultiPurpose = memo(({ title, description, button, className }: MultiPurposeProps) => {
  const handleClick = useCallback(() => {
    if (button.onClick) {
      button.onClick();
    }
  }, [button.onClick]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  }, [handleClick]);

  return (
    <article className={cn(
      "bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 group h-full flex flex-col",
      className
    )}>
      {/* Title */}
      <h3 className="text-xl font-semibold text-foreground leading-tight mb-4">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
        {description}
      </p>
      
      {/* Action Link/Button */}
      <div className="mt-auto">
        {button.href ? (
          <a
            href={button.href}
            onClick={handleClick}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group/link focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
            aria-label={button.text}
          >
            <span>{button.text}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" aria-hidden="true" />
          </a>
        ) : (
          <button
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group/link focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
            aria-label={button.text}
          >
            <span>{button.text}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" aria-hidden="true" />
          </button>
        )}
      </div>
    </article>
  );
});

MultiPurpose.displayName = 'MultiPurpose';

export const MultiPurposeGrid = memo(({ items, itemsPerRow = 3, className }: MultiPurposeGridProps) => {
  const getGridColumns = () => {
    switch (itemsPerRow) {
      case 1:
        return "grid-cols-1";
      case 2:
        return "grid-cols-1 md:grid-cols-2";
      case 3:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
      default:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
    }
  };

  const getMaxWidth = () => {
    switch (itemsPerRow) {
      case 1:
        return "max-w-2xl mx-auto";
      case 2:
        return "max-w-4xl mx-auto";
      case 3:
        return "max-w-6xl mx-auto";
      default:
        return "max-w-6xl mx-auto";
    }
  };

  return (
    <div 
      className={cn(
        "grid gap-6",
        getGridColumns(),
        getMaxWidth(),
        className
      )}
      role="region"
      aria-label="Multi-purpose content grid"
    >
      {items.map((item, index) => (
        <MultiPurpose key={`${item.title}-${index}`} {...item} />
      ))}
    </div>
  );
});

MultiPurposeGrid.displayName = 'MultiPurposeGrid';