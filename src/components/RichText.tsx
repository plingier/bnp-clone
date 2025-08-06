import React, { memo, useCallback } from 'react';
import { Check, LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ChecklistItem {
  text: string;
  checked?: boolean;
}

interface CallToAction {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link';
  icon?: LucideIcon;
}

interface RichTextProps {
  image: {
    src: string;
    alt: string;
    className?: string;
  };
  title: string;
  description: string;
  checklist?: ChecklistItem[];
  callToAction?: CallToAction;
  imagePosition?: 'left' | 'right';
  className?: string;
}

const RichText: React.FC<RichTextProps> = memo(({
  image,
  title,
  description,
  checklist = [],
  callToAction,
  imagePosition = 'left',
  className
}) => {
  const isImageLeft = imagePosition === 'left';

  const handleCtaClick = useCallback(() => {
    if (callToAction?.onClick) {
      callToAction.onClick();
    }
  }, [callToAction?.onClick]);

  return (
    <section className={cn("w-full", className)} aria-label="Rich text content">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center",
          isImageLeft ? "lg:grid-flow-col" : "lg:grid-flow-col-dense"
        )}>
          {/* Image Column */}
          <div className={cn(
            "order-1",
            !isImageLeft && "lg:order-2"
          )}>
            <div className="relative">
              <img
                src={image.src}
                alt={image.alt}
                className={cn(
                  "w-full h-32 md:h-48 lg:h-96 xl:h-[28rem] rounded-lg shadow-lg object-cover object-[center_33%]",
                  image.className
                )}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Text Column */}
          <div className={cn(
            "order-2 space-y-6",
            !isImageLeft && "lg:order-1"
          )}>
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              {title}
            </h2>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>

            {/* Checklist */}
            {checklist.length > 0 && (
              <ul className="space-y-3" role="list" aria-label="Feature checklist">
                {checklist.map((item, index) => (
                  <li key={`${item.text}-${index}`} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div 
                        className={cn(
                          "w-5 h-5 rounded-full flex items-center justify-center",
                          item.checked !== false 
                            ? "bg-[hsl(var(--financial-green))]" 
                            : "border-2 border-muted-foreground"
                        )}
                        role="img"
                        aria-label={item.checked !== false ? "Completed" : "Not completed"}
                      >
                        {item.checked !== false && (
                          <Check className="w-3 h-3 text-white" aria-hidden="true" />
                        )}
                      </div>
                    </div>
                    <span className={cn(
                      "text-foreground",
                      item.checked === false && "text-muted-foreground"
                    )}>
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {/* Call to Action */}
            {callToAction && (
              <div className="pt-2">
                {callToAction.href ? (
                  <Button
                    asChild
                    variant={callToAction.variant || 'default'}
                    className="animate-fade-in"
                  >
                    <a 
                      href={callToAction.href} 
                      onClick={handleCtaClick} 
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                      aria-label={callToAction.text}
                    >
                      {callToAction.icon && (
                        <callToAction.icon className="w-4 h-4 mr-2" aria-hidden="true" />
                      )}
                      {callToAction.text}
                    </a>
                  </Button>
                ) : (
                  <Button
                    variant={callToAction.variant || 'default'}
                    onClick={handleCtaClick}
                    className="animate-fade-in"
                    aria-label={callToAction.text}
                  >
                    {callToAction.icon && (
                      <callToAction.icon className="w-4 h-4 mr-2" aria-hidden="true" />
                    )}
                    {callToAction.text}
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
});

RichText.displayName = 'RichText';

export default RichText;