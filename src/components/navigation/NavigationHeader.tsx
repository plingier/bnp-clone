import React, { memo } from "react";
import { Search, ChevronDown } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import BNPPFlogo from "@/assets/BNPPFlogo.png";

interface NavigationHeaderProps {
  selectedSegment: string;
  setSelectedSegment: (segment: string) => void;
  selectedLanguage: string;
  setSelectedLanguage: (language: string) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  segments: string[];
  languages: string[];
}

const NavigationHeader: React.FC<NavigationHeaderProps> = memo(({
  selectedSegment,
  setSelectedSegment,
  selectedLanguage,
  setSelectedLanguage,
  isSearchOpen,
  setIsSearchOpen,
  segments,
  languages
}) => {
  return (
    <div className="border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <img 
                src={BNPPFlogo} 
                alt="BNP Paribas Fortis Logo" 
                className="h-10 w-auto"
                width="120"
                height="40"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>

          {/* Right side utility items */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <span className="text-xs xl:text-sm text-gray-600">Deze sectie van de site is voor</span>
            
            {/* Segment Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger 
                className="flex items-center space-x-1 text-sm font-medium text-gray-900 hover:text-financial-green"
                aria-label="Selecteer klantsegment"
                aria-expanded={false}
              >
                <span>{selectedSegment}</span>
                <ChevronDown className="w-4 h-4" aria-hidden="true" />
              </DropdownMenuTrigger>
              <DropdownMenuContent role="menu">
                {segments.map(segment => (
                  <DropdownMenuItem 
                    key={segment} 
                    onClick={() => setSelectedSegment(segment)} 
                    className={selectedSegment === segment ? "bg-gray-100" : ""}
                    role="menuitem"
                  >
                    {segment}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Contact Link */}
            <a 
              href="/bnp-clone/contact" 
              className="text-sm text-financial-green hover:underline focus:outline-none focus:ring-2 focus:ring-financial-green focus:ring-offset-2 rounded"
              aria-label="Contacteer ons voor hulp en vragen"
            >
              Contacteer ons
            </a>

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger 
                className="flex items-center space-x-1 text-sm text-gray-900 hover:text-financial-green"
                aria-label="Selecteer taal"
                aria-expanded={false}
              >
                <span>{selectedLanguage}</span>
                <ChevronDown className="w-4 h-4" aria-hidden="true" />
              </DropdownMenuTrigger>
              <DropdownMenuContent role="menu">
                {languages.map(language => (
                  <DropdownMenuItem 
                    key={language} 
                    onClick={() => setSelectedLanguage(language)} 
                    className={selectedLanguage === language ? "bg-gray-100" : ""}
                    role="menuitem"
                  >
                    {language}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Search */}
            <div className="relative">
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)} 
                className="p-2 text-gray-600 hover:text-financial-green focus:outline-none focus:ring-2 focus:ring-financial-green focus:ring-offset-2 rounded"
                aria-label="Open zoekfunctie"
                aria-expanded={isSearchOpen}
              >
                <Search className="w-5 h-5" aria-hidden="true" />
              </button>
              {isSearchOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg p-3 z-50">
                  <label htmlFor="search-input" className="sr-only">Zoeken</label>
                  <Input 
                    id="search-input"
                    placeholder="Wat zoekt u?" 
                    className="w-full" 
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        setIsSearchOpen(false);
                      }
                    }}
                    autoFocus
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

NavigationHeader.displayName = 'NavigationHeader';

export default NavigationHeader;