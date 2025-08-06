import React, { memo, useCallback } from "react";
import { Button } from "@/components/ui/button";

interface StickyCTAProps {
  description: string;
  buttonText: string;
  buttonHref?: string;
  onButtonClick?: () => void;
}

export const StickyCTA = memo(({ 
  description, 
  buttonText, 
  buttonHref = "#", 
  onButtonClick 
}: StickyCTAProps) => {
  const handleClick = useCallback(() => {
    if (onButtonClick) {
      onButtonClick();
    } else if (buttonHref !== "#") {
      window.open(buttonHref, '_blank');
    }
  }, [onButtonClick, buttonHref]);

  return (
    <aside 
      className="fixed bottom-0 left-0 right-0 z-50 p-4" 
      role="complementary"
      aria-label="Call to action banner"
    >
      <div className="bg-muted border border-border rounded-lg shadow-lg mx-4 md:mx-8 lg:mx-12">
        <div className="container max-w-7xl mx-auto px-6 md:px-16 lg:px-20 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8">
            <div className="flex-1 min-w-0">
              <p className="text-sm md:text-base text-foreground leading-relaxed">
                {description}
              </p>
            </div>
            
            <div className="flex-shrink-0">
              <Button 
                onClick={handleClick}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 py-2 rounded-lg transition-all duration-200 w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label={buttonText}
              >
                {buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
});

StickyCTA.displayName = 'StickyCTA';