import React from 'react';
import { Button } from '@/components/ui/button';

interface BannerProps {
  image: string;
  title: string;
  buttonText: string;
  onButtonClick?: () => void;
  buttonHref?: string;
  className?: string;
}

const Banner: React.FC<BannerProps> = ({
  image,
  title,
  buttonText,
  onButtonClick,
  buttonHref,
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
      {/* Background Image */}
      <div className="relative aspect-[2/1] md:aspect-[3/1]">
        <img 
          src={image} 
          alt="" 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
        
        {/* Text Box - Bottom Left */}
        <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 md:p-6 max-w-xs md:max-w-sm shadow-lg">
          <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 leading-tight">
            {title}
          </h3>
          <Button 
            onClick={handleClick}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-4 py-2 rounded-md transition-all duration-200"
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {children}
      </div>
    </div>
  );
};

export { Banner, BannerContainer };