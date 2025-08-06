import React, { memo, useCallback } from 'react';
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

const TitleWidth: React.FC<TitleWidthProps> = memo(({
  label,
  title,
  description,
  links,
  className,
  centerAlign = true
}) => {
  const baseClasses = centerAlign ? "text-center" : "text-left";
  
  const handleLinkClick = useCallback((link: LinkItem) => {
    if (link.onClick) {
      link.onClick();
    }
  }, []);
  
  return (
    <header className={cn("w-full max-w-4xl mx-auto px-3 py-10", baseClasses, className)}>
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
        <nav className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4 justify-items-center md:justify-items-stretch" aria-label="Quick action links">
          {links.map((link, index) => {
            const LinkContent = () => (
              <div className="flex items-center justify-center md:justify-start gap-2 p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:shadow-md group cursor-pointer w-full max-w-sm md:max-w-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2">
                {link.icon && (
                  <div className="flex-shrink-0">
                    <link.icon className="w-4 h-4 text-primary group-hover:text-primary/80 transition-colors" aria-hidden="true" />
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
                  key={`${link.text}-${index}`}
                  href={link.href}
                  className="block focus:outline-none"
                  onClick={() => handleLinkClick(link)}
                  aria-label={link.text}
                >
                  <LinkContent />
                </a>
              );
            }

            if (link.onClick) {
              return (
                <button
                  key={`${link.text}-${index}`}
                  onClick={() => handleLinkClick(link)}
                  className="block w-full focus:outline-none"
                  aria-label={link.text}
                >
                  <LinkContent />
                </button>
              );
            }

            return (
              <div key={`${link.text}-${index}`} aria-label={link.text}>
                <LinkContent />
              </div>
            );
          })}
        </nav>
      )}
    </header>
  );
});

TitleWidth.displayName = 'TitleWidth';

export default TitleWidth;