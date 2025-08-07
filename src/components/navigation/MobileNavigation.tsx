import React, { useCallback } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import BNPPFlogo from "@/assets/BNPPFlogo.png";

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

interface MobileNavigationProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  navigationItems: NavigationItem[];
  expandedMobileSection: string | null;
  currentMobileView: 'main' | 'sections';
  selectedMainCategory: NavigationItem | null;
  selectedSegment: string;
  setSelectedSegment: (segment: string) => void;
  selectedLanguage: string;
  setSelectedLanguage: (language: string) => void;
  segments: string[];
  languages: string[];
  onMainCategoryClick: (item: NavigationItem) => void;
  onBackToMain: () => void;
  onToggleMobileSection: (title: string) => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  navigationItems,
  expandedMobileSection,
  currentMobileView,
  selectedMainCategory,
  selectedSegment,
  setSelectedSegment,
  selectedLanguage,
  setSelectedLanguage,
  segments,
  languages,
  onMainCategoryClick,
  onBackToMain,
  onToggleMobileSection
}) => {
  const handleKeyDown = useCallback((e: React.KeyboardEvent, action: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  }, []);

  return (
    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          className="lg:hidden p-2"
          aria-label="Open hoofdmenu"
          aria-expanded={isMobileMenuOpen}
        >
          <Menu className="w-6 h-6" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent 
        side="right" 
        className="w-full max-w-md p-0 flex flex-col h-full"
        aria-label="Navigatiemenu"
      >
        <div className="border-b border-gray-100">
          <div className="flex items-center justify-between h-12 px-4">
            <div className="flex items-center space-x-2">
              <img 
                src={BNPPFlogo} 
                alt="BNP Paribas Fortis Logo" 
                className="h-10 w-auto"
                width="120"
                height="40"
                loading="lazy"
                decoding="async"
              />
            </div>
            <Button 
              variant="ghost" 
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Sluit menu"
            >
              <X className="w-6 h-6" aria-hidden="true" />
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="border-b bg-gray-50 px-3 py-1">
          <label htmlFor="mobile-search" className="sr-only">Zoeken</label>
          <Input 
            id="mobile-search"
            placeholder="Wat zoekt u?" 
            className="w-full h-8 text-sm" 
          />
        </div>

        {/* Mobile Navigation */}
        <nav className="flex-1 overflow-y-auto" aria-label="Hoofdnavigatie">
          {/* Main Categories View */}
          {currentMobileView === 'main' && (
            <ul role="menu">
              {navigationItems.map(item => (
                <li key={item.title} className="border-b" role="none">
                  <button 
                    onClick={() => onMainCategoryClick(item)}
                    onKeyDown={(e) => handleKeyDown(e, () => onMainCategoryClick(item))}
                    className="w-full px-4 py-4 text-left flex items-center justify-between hover:bg-gray-50 focus:bg-gray-50 focus:outline-none"
                    role="menuitem"
                    aria-label={`Open ${item.title} submenu`}
                  >
                    <span className="font-medium text-gray-900">{item.title}</span>
                    <ChevronRight className="w-5 h-5 text-financial-green" aria-hidden="true" />
                  </button>
                </li>
              ))}
            </ul>
          )}

          {/* Sections View */}
          {currentMobileView === 'sections' && selectedMainCategory && (
            <>
              {/* Back button */}
              <div className="border-b bg-gray-50">
                <button 
                  onClick={onBackToMain}
                  onKeyDown={(e) => handleKeyDown(e, onBackToMain)}
                  className="w-full px-4 py-1.5 text-left flex items-center text-financial-green hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                  aria-label="Terug naar hoofdmenu"
                >
                  <ChevronRight className="w-4 h-4 rotate-180 mr-2" aria-hidden="true" />
                  <span className="text-sm">Terug</span>
                </button>
              </div>
              
              {/* Category title */}
              <div className="px-4 py-2 bg-white border-b-2 border-financial-green">
                <h2 className="text-base font-bold text-gray-900 uppercase tracking-wide">
                  {selectedMainCategory.title}
                </h2>
              </div>

              {/* Sections */}
              <ul role="menu">
                {selectedMainCategory.sections.map((section, idx) => (
                  <li key={idx} className="border-b" role="none">
                    <button 
                      onClick={() => onToggleMobileSection(section.title)}
                      onKeyDown={(e) => handleKeyDown(e, () => onToggleMobileSection(section.title))}
                      className="w-full px-4 py-4 text-left flex items-center justify-between hover:bg-gray-50 focus:bg-gray-50 focus:outline-none"
                      role="menuitem"
                      aria-expanded={expandedMobileSection === section.title}
                      aria-label={`${expandedMobileSection === section.title ? 'Sluit' : 'Open'} ${section.title} submenu`}
                    >
                      <span className="font-medium text-gray-900">{section.title}</span>
                      <ChevronRight 
                        className={`w-4 h-4 text-financial-green transition-transform ${
                          expandedMobileSection === section.title ? 'rotate-90' : ''
                        }`} 
                        aria-hidden="true"
                      />
                    </button>
                    {expandedMobileSection === section.title && (
                      <ul className="bg-gray-50 border-t border-gray-200" role="menu">
                        {section.links.map((link, linkIdx) => (
                          <li key={linkIdx} role="none">
                            <a 
                              href={link.href} 
                              className="block px-4 py-3 text-sm text-gray-600 hover:text-financial-green hover:bg-gray-100 border-b border-gray-200 last:border-b-0 focus:outline-none focus:bg-gray-100"
                              role="menuitem"
                            >
                              {link.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}

                {/* Expertise section */}
                {selectedMainCategory.expertise && (
                  <li className="border-b" role="none">
                    <button 
                      onClick={() => onToggleMobileSection('expertise')}
                      onKeyDown={(e) => handleKeyDown(e, () => onToggleMobileSection('expertise'))}
                      className="w-full px-4 py-4 text-left flex items-center justify-between hover:bg-gray-50 focus:bg-gray-50 focus:outline-none"
                      role="menuitem"
                      aria-expanded={expandedMobileSection === 'expertise'}
                      aria-label={`${expandedMobileSection === 'expertise' ? 'Sluit' : 'Open'} ${selectedMainCategory.expertise.title} submenu`}
                    >
                      <span className="font-medium text-gray-900">{selectedMainCategory.expertise.title}</span>
                      <ChevronRight 
                        className={`w-4 h-4 text-financial-green transition-transform ${
                          expandedMobileSection === 'expertise' ? 'rotate-90' : ''
                        }`} 
                        aria-hidden="true"
                      />
                    </button>
                    {expandedMobileSection === 'expertise' && (
                      <ul className="bg-gray-50 border-t border-gray-200" role="menu">
                        {selectedMainCategory.expertise.content.map((content, idx) => (
                          <li key={idx} role="none">
                            <a 
                              href={content.href} 
                              className="block px-4 py-3 text-sm text-gray-600 hover:text-financial-green hover:bg-gray-100 border-b border-gray-200 last:border-b-0 focus:outline-none focus:bg-gray-100"
                              role="menuitem"
                            >
                              {content.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                )}

                {/* Banner section */}
                {selectedMainCategory.banner && (
                  <li className="border-b" role="none">
                    <button 
                      onClick={() => onToggleMobileSection('banner')}
                      onKeyDown={(e) => handleKeyDown(e, () => onToggleMobileSection('banner'))}
                      className="w-full px-4 py-4 text-left flex items-center justify-between hover:bg-gray-50 focus:bg-gray-50 focus:outline-none"
                      role="menuitem"
                      aria-expanded={expandedMobileSection === 'banner'}
                      aria-label={`${expandedMobileSection === 'banner' ? 'Sluit' : 'Open'} ${selectedMainCategory.banner.title} submenu`}
                    >
                      <span className="font-medium text-gray-900">{selectedMainCategory.banner.title}</span>
                      <ChevronRight 
                        className={`w-4 h-4 text-financial-green transition-transform ${
                          expandedMobileSection === 'banner' ? 'rotate-90' : ''
                        }`} 
                        aria-hidden="true"
                      />
                    </button>
                    {expandedMobileSection === 'banner' && (
                      <div className="bg-gray-50 border-t border-gray-200 px-4 py-4">
                        <p className="text-sm text-gray-600 mb-3">{selectedMainCategory.banner.description}</p>
                        <a 
                          href={selectedMainCategory.banner.href}
                          className="inline-block bg-financial-green text-white px-4 py-2 rounded text-sm hover:bg-financial-green/90 focus:outline-none focus:ring-2 focus:ring-financial-green focus:ring-offset-2"
                          role="button"
                        >
                          {selectedMainCategory.banner.cta}
                        </a>
                      </div>
                    )}
                  </li>
                )}
              </ul>
            </>
          )}
        </nav>

        {/* Mobile CTAs */}
        <div className="p-4 space-y-3 border-t">
          <Button 
            variant="outline" 
            className="w-full"
            aria-label="Open een nieuwe bankrekening"
          >
            Open een rekening
          </Button>
          <Button 
            className="w-full bg-financial-green hover:bg-financial-green/90"
            aria-label="Aanmelden bij online banking"
          >
            Aanmelden
          </Button>
          
          {/* Mobile utility links */}
          <div className="pt-4 space-y-2 border-t">
            <div className="text-sm text-gray-600">Deze sectie van de site is voor</div>
            <label htmlFor="mobile-segment-select" className="sr-only">Selecteer klantsegment</label>
            <select 
              id="mobile-segment-select"
              value={selectedSegment} 
              onChange={(e) => setSelectedSegment(e.target.value)} 
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-financial-green"
            >
              {segments.map(segment => (
                <option key={segment} value={segment}>{segment}</option>
              ))}
            </select>
            <div className="flex space-x-4">
              <a 
                href="/bnp-clone/contact" 
                className="text-sm text-financial-green focus:outline-none focus:ring-2 focus:ring-financial-green focus:ring-offset-2 rounded"
                aria-label="Contacteer ons voor hulp en vragen"
              >
                Contacteer ons
              </a>
              <label htmlFor="mobile-language-select" className="sr-only">Selecteer taal</label>
              <select 
                id="mobile-language-select"
                value={selectedLanguage} 
                onChange={(e) => setSelectedLanguage(e.target.value)} 
                className="text-sm border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-financial-green"
              >
                {languages.map(language => (
                  <option key={language} value={language}>{language}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;