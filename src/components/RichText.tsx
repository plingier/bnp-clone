import React from 'react';
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

const RichText: React.FC<RichTextProps> = ({
  image,
  title,
  description,
  checklist = [],
  callToAction,
  imagePosition = 'left',
  className
}) => {
  const isImageLeft = imagePosition === 'left';

  return (
    <div className={cn("w-full", className)}>
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
                  "w-full h-auto rounded-lg shadow-lg object-cover",
                  image.className
                )}
                loading="lazy"
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
              <div className="space-y-3">
                {checklist.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className={cn(
                        "w-5 h-5 rounded-full flex items-center justify-center",
                        item.checked !== false 
                          ? "bg-[hsl(var(--financial-green))]" 
                          : "border-2 border-muted-foreground"
                      )}>
                        {item.checked !== false && (
                          <Check className="w-3 h-3 text-white" />
                        )}
                      </div>
                    </div>
                    <span className={cn(
                      "text-foreground",
                      item.checked === false && "text-muted-foreground"
                    )}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
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
                    <a href={callToAction.href} onClick={callToAction.onClick}>
                      {callToAction.icon && (
                        <callToAction.icon className="w-4 h-4 mr-2" />
                      )}
                      {callToAction.text}
                    </a>
                  </Button>
                ) : (
                  <Button
                    variant={callToAction.variant || 'default'}
                    onClick={callToAction.onClick}
                    className="animate-fade-in"
                  >
                    {callToAction.icon && (
                      <callToAction.icon className="w-4 h-4 mr-2" />
                    )}
                    {callToAction.text}
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RichText;