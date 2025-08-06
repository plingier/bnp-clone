import React from "react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

interface NavigationItem {
  title: string;
  sections: Array<{
    title: string;
    links: Array<{ text: string; href: string }>;
  }>;
  expertise?: {
    title: string;
    content: Array<{ text: string; href: string }>;
  };
  banner?: {
    title: string;
    subtitle?: string;
    description: string;
    cta: string;
    href: string;
  };
}

interface DesktopNavigationProps {
  navigationItems: NavigationItem[];
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({ navigationItems }) => {
  return (
    <div className="hidden lg:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between">
          {/* Navigation Menu */}
          <NavigationMenu>
            <NavigationMenuList>
              {navigationItems.map(item => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuTrigger 
                    className="text-gray-900 hover:text-financial-green font-medium focus:outline-none focus:ring-2 focus:ring-financial-green focus:ring-offset-2 rounded"
                    aria-label={`Open ${item.title} menu`}
                  >
                    {item.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div 
                      className="grid grid-cols-5 gap-6 p-6 w-screen max-w-7xl"
                      role="region"
                      aria-label={`${item.title} submenu`}
                    >
                      {/* Columns 1-3: Main content */}
                      {item.sections.map((section, idx) => (
                        <div key={idx} className="space-y-3">
                          <h3 className="font-semibold text-gray-900 text-sm lg:text-base">
                            {section.title}
                          </h3>
                          <ul className="space-y-2" role="list">
                            {section.links.map((link, linkIdx) => (
                              <li key={linkIdx} role="listitem">
                                <a 
                                  href={link.href} 
                                  className="text-xs lg:text-sm text-gray-600 hover:text-financial-green block leading-relaxed focus:outline-none focus:ring-2 focus:ring-financial-green focus:ring-offset-2 rounded"
                                >
                                  {link.text}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      
                      {/* Column 4: Expertise (grey background) */}
                      {item.expertise && (
                        <div className="bg-gray-50 p-4 rounded space-y-3">
                          <h3 className="font-semibold text-gray-900">
                            {item.expertise.title}
                          </h3>
                          <ul className="space-y-2" role="list">
                            {item.expertise.content.map((content, idx) => (
                              <li key={idx} role="listitem">
                                <a 
                                  href={content.href} 
                                  className="text-sm text-gray-600 hover:text-financial-green focus:outline-none focus:ring-2 focus:ring-financial-green focus:ring-offset-2 rounded"
                                >
                                  {content.text}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {/* Column 5: Banner */}
                      {item.banner && (
                        <div className="bg-financial-green text-white p-6 rounded-lg space-y-4">
                          <div className="text-xs font-bold tracking-wide uppercase">
                            {item.banner.title}
                          </div>
                          {item.banner.subtitle && (
                            <h4 className="font-semibold text-base">{item.banner.subtitle}</h4>
                          )}
                          <p className="text-sm leading-relaxed">{item.banner.description}</p>
                          <Button 
                            variant="secondary" 
                            size="sm" 
                            className="bg-white text-financial-green hover:bg-gray-50 font-medium rounded-lg px-4 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-financial-green" 
                            asChild
                          >
                            <a 
                              href={item.banner.href} 
                              className="text-center block w-full overflow-hidden text-ellipsis whitespace-nowrap"
                              aria-label={item.banner.cta}
                            >
                              {item.banner.cta}
                            </a>
                          </Button>
                        </div>
                      )}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-3">
            <Button 
              variant="outline" 
              className="border-financial-green text-financial-green hover:bg-financial-green hover:text-white focus:outline-none focus:ring-2 focus:ring-financial-green focus:ring-offset-2"
              aria-label="Open een nieuwe bankrekening"
            >
              Open een rekening
            </Button>
            <Button 
              className="bg-financial-green hover:bg-financial-green/90 text-slate-50 bg-emerald-700 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              aria-label="Aanmelden bij online banking"
            >
              Aanmelden
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopNavigation;