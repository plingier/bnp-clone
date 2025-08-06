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
    <div className={cn("w-full max-w-4xl mx-auto px-3 py-0", baseClasses, className)}>
      {label && (
        <div className="mb-2">
          <span className="inline-block text-xs font-semibold tracking-wider uppercase text-primary/80 border-l-2 border-primary pl-2">
            {label}
          </span>
        </div>
      )}
      
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 break-words overflow-wrap-anywhere">
        {title}
      </h2>
      
      {description && (
        <div className="max-w-3xl mx-auto">
          <p className="text-base text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      )}
      
      {links && links.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4 justify-items-center md:justify-items-stretch">
          {links.map((link, index) => {
            const LinkContent = () => (
              <div className="flex items-center justify-center md:justify-start gap-2 p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:shadow-md group cursor-pointer w-full max-w-sm md:max-w-none">
                {link.icon && (
                  <div className="flex-shrink-0">
                    <link.icon className="w-4 h-4 text-primary group-hover:text-primary/80 transition-colors" />
                  </div>
                )}
                <span className="text-foreground font-medium group-hover:text-primary transition-colors text-sm">
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