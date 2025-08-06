import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LinkItem {
  text: string;
  href?: string;
  icon?: LucideIcon;
  onClick?: () => void;
}

interface TitleWidthProps {
  label?: string;
  title: string;
  description?: string;
  links?: LinkItem[];
  className?: string;
  centerAlign?: boolean;
}

const TitleWidth: React.FC<TitleWidthProps> = ({
  label,
  title,
  description,
  links,
  className,
  centerAlign = true
}) => {
  const baseClasses = centerAlign ? "text-center" : "text-left";
  
  return (
    <div className={cn("w-full max-w-4xl mx-auto px-4 py-8", baseClasses, className)}>
      {label && (
        <div className="mb-4">
          <span className="inline-block text-xs font-semibold tracking-wider uppercase text-muted-foreground">
            {label}
          </span>
        </div>
      )}
      
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
        {title}
      </h2>
      
      {description && (
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      )}
      
      {links && links.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {links.map((link, index) => {
            const LinkContent = () => (
              <div className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md group cursor-pointer">
                {link.icon && (
                  <div className="flex-shrink-0">
                    <link.icon className="w-5 h-5 text-primary group-hover:text-primary/80 transition-colors" />
                  </div>
                )}
                <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                  {link.text}
                </span>
              </div>
            );

            if (link.href) {
              return (
                <a
                  key={index}
                  href={link.href}
                  className="block"
                  onClick={link.onClick}
                >
                  <LinkContent />
                </a>
              );
            }

            if (link.onClick) {
              return (
                <button
                  key={index}
                  onClick={link.onClick}
                  className="block w-full"
                >
                  <LinkContent />
                </button>
              );
            }

            return (
              <div key={index}>
                <LinkContent />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TitleWidth;