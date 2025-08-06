import React from 'react';
import { Button } from '@/components/ui/button';

interface BannerProps {
  image: string;
  title: string;
  description?: string;
  buttonText: string;
  onButtonClick?: () => void;
  buttonHref?: string;
  variant?: 'full' | 'split';
  className?: string;
}

const Banner: React.FC<BannerProps> = ({
  image,
  title,
  description,
  buttonText,
  onButtonClick,
  buttonHref,
  variant = 'full',
  className = ''
}) => {
  const handleClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else if (buttonHref) {
      window.open(buttonHref, '_blank');
    }
  };

  return (
    <div className={`relative overflow-hidden rounded-lg group ${className}`}>
      {/* Large Desktop Layout - Image with overlay text */}
      <div className="hidden xl:block">
        <div className={`relative ${variant === 'split' ? 'aspect-[2/1] xl:aspect-[9/4]' : 'aspect-[2/1] xl:aspect-[9/2]'}`}>
          <img 
            src={image} 
            alt="" 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
          
          {/* Text Box - Bottom Left */}
          <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 md:p-6 max-w-sm md:max-w-md lg:max-w-lg shadow-lg">
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 leading-tight">
              {title}
            </h3>
            {description && (
              <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
                {description}
              </p>
            )}
            <Button 
              onClick={handleClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-4 py-2 rounded-md transition-all duration-200"
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>

      {/* Small Desktop, Tablet & Mobile Layout - Product Card Style */}
      <div className="xl:hidden bg-card border border-border shadow-md">
        <div className="relative aspect-[4/1]">
          <img 
            src={image} 
            alt="" 
            className="w-full h-full object-cover object-top"
          />
        </div>
        
        {/* Text Content Below Image */}
        <div className="p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 leading-tight">
            {title}
          </h3>
          {description && (
            <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
              {description}
            </p>
          )}
          <Button 
            onClick={handleClick}
            className={`bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-4 py-2 rounded-md transition-all duration-200 ${variant === 'split' ? 'w-full md:w-auto' : 'w-full'}`}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

interface BannerContainerProps {
  children: React.ReactNode;
  variant?: 'full' | 'split';
  className?: string;
}

const BannerContainer: React.FC<BannerContainerProps> = ({
  children,
  variant = 'full',
  className = ''
}) => {
  if (variant === 'full') {
    return (
      <div className={`px-4 md:px-8 lg:px-16 ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <div className={`px-4 md:px-8 lg:px-16 ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {children}
      </div>
    </div>
  );
};

export { Banner, BannerContainer };