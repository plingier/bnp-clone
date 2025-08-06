import React, { useState } from "react";
import { Search, ChevronDown, Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
const BNPNavigation = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedSegment, setSelectedSegment] = useState("Particulieren");
  const [selectedLanguage, setSelectedLanguage] = useState("Nederlands");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);
  const segments = ["Particulieren", "Ondernemingen", "Private Banking"];
  const languages = ["Nederlands", "Frans", "Engels"];
  const navigationItems = [{
    title: "Dagelijks bankieren",
    sections: [{
      title: "Rekeningen",
      links: ["Betaalrekeningen vergelijken", "Betaalrekening voor jongeren", "Betaalrekening voor kinderen", "Spaarrekeningen – Algemene info", "Onze spaarrekeningen"]
    }, {
      title: "Bankkaarten",
      links: ["Bancontact-Visa Debit-debetkaart", "Vergelijk onze kredietkaarten", "Visa kredietkaart", "Mastercard Gold kredietkaart", "Kredietkaart voor jongeren", "Al onze oplossingen"]
    }, {
      title: "Betalen",
      links: ["Met Easy Banking App", "Met Easy Banking Web", "Contactloos betalen", "CASH-punten netwerk", "In het buitenland", "Overschrijven, IBAN, domiciliëring, Zoomit ...", "Veilig online"]
    }],
    expertise: {
      title: "Onze expertise",
      content: ["Selfbanking met Easy Banking App en Web", "Betaaloplossingen", "Welke betaalkaart waar en wanneer gebruiken?", "Advies op afstand of face-to-face"]
    },
    banner: {
      title: "Wist u dat ...",
      subtitle: "",
      description: "Easy Banking App, eenmaal gebruiken en u bent verkocht",
      cta: "Download Easy Banking App"
    }
  }, {
    title: "Sparen en beleggen",
    sections: [{
      title: "Beleggen",
      links: ["Beleggen met BNP Paribas Fortis", "Beleggen voor beginners", "Beleggen zonder advies", "Beleggen met advies"]
    }, {
      title: "Sparen en beleggen met een doel",
      links: ["Pensioensparen", "Fiscaal sparen", "Financieel beschermen van uw dierbaren"]
    }, {
      title: "Onze beleggingsoplossingen",
      links: ["Aanbod van de maand", "Beleggingsnieuws", "Spaarrekeningen", "Aandelen", "Beleggingsfondsen", "Financiële levensverzekeringen", "Kasbons", "Obligaties", "Gestructureerde producten", "Al onze oplossingen"]
    }],
    expertise: {
      title: "Onze expertise",
      content: ["Beginnen sparen of beleggen?", "Sparen voor uw pensioen : wat moet u weten?", "Expertise via Private Banking", "Priority Banking Exclusive", "Advies op afstand of face-to-face"]
    },
    banner: {
      title: "Wist u dat ...",
      subtitle: "",
      description: "u de financiële actualiteit kan volgen?",
      cta: "Volg het beleggingsnieuws op de voet"
    }
  }, {
    title: "Lenen",
    sections: [{
      title: "Lenen voor een vastgoedproject",
      links: ["Hypothecair krediet", "Energielening", "Renovatielening", "Overbruggingskrediet", "Al onze oplossingen"]
    }, {
      title: "Lenen voor een voertuig",
      links: ["Lening op afbetaling voor een nieuw voertuig", "Lening op afbetaling voor een tweedehands voertuig", "Lening op afbetaling voor een fiets en zachte mobiliteit", "Private lease", "Al onze oplossingen"]
    }, {
      title: "Lenen voor een project",
      links: ["Persoonlijke lening - Lening op afbetaling", "Kredietopening", "Al onze oplossingen"]
    }],
    expertise: {
      title: "Onze expertise",
      content: ["Alles weten over duurzaam wonen", "Alles weten over duurzame mobiliteit", "Alles weten over budgetbeheer", "Advies op afstand of face-to-face"]
    },
    banner: {
      title: "Een EPC-certificaat?",
      subtitle: "",
      description: "Reken op de experts van SoSimply.",
      cta: "Meer weten"
    }
  }, {
    title: "Verzekeren",
    sections: [{
      title: "Beschermen van uw gezin",
      links: ["Familiale verzekering", "Globale rechtsbijstand", "Hospitalisatieverzekering", "Ongevallenverzekering", "Reisverzekering", "Levens- en overlijdensverzekeringen", "Al onze oplossingen"]
    }, {
      title: "Beschermen van uw woning",
      links: ["Woningverzekering eigenaar", "Woningverzekering huurder", "Woningverzekering verhuurder", "Diefstalverzekering", "Homiris telebewaking", "Rechtsbijstandsverzekering", "Al onze oplossingen"]
    }, {
      title: "Beschermen van uw mobiliteit",
      links: ["Autoverzekering", "Omniumverzekering auto", "Rechtsbijstandsverzekering auto", "Fietsverzekering en zachte mobiliteit", "Motorverzekeringen", "Bromfietsverzekeringen", "Pechverhelping", "Al onze oplossingen"]
    }],
    expertise: {
      title: "Onze expertise",
      content: ["Aangifte van een schadegeval", "Gratis check-up van uw verzekeringen", "Beveilig uw thuis", "Bescherm uw gezin bij overlijden", "Preventietips natuurrampen", "Advies op afstand of face-to-face"]
    },
    banner: {
      title: "Een EPC-certificaat?",
      subtitle: "",
      description: "Reken op de experts van SoSimply.",
      cta: "Meer weten"
    }
  }, {
    title: "Aan uw zijde",
    sections: [{
      title: "Uw behoeften",
      links: ["Mobiliteit", "Wonen", "Budget", "Gezin", "Betaalmiddelen", "Studeren in het buitenland", "Een overlijden aangeven"]
    }, {
      title: "Aanpak op maat",
      links: ["De bank voor jongeren", "Priority Banking Exclusive", "Expat in België", "Bank voor iedereen"]
    }, {
      title: "Online en mobiele bank",
      links: ["Easy Banking App", "Selfbanking met Easy Banking App en Web", "Beheer uw budget met Easy Banking App", "Easy Banking Web", "Contactloos betalen", "Veilig online"]
    }],
    expertise: {
      title: "Contacteer ons",
      content: ["Aangifte van een schadegeval", "Advies op afstand of face-to-face", "Uw adviseurs via videogesprek", "Een expert aan de lijn", "CASH-punten netwerk"]
    },
    banner: {
      title: "Wist u dat ...",
      subtitle: "",
      description: "u nu kan huren, en later kopen?",
      cta: "Ontdek HappyNest"
    }
  }];
  const toggleMobileSection = (title: string) => {
    setExpandedMobileSection(expandedMobileSection === title ? null : title);
  };
  return <div className="w-full bg-white border-b shadow-sm">
      {/* Utility Navigation - Top Row */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <img 
                  src="/lovable-uploads/446ebfd0-a105-4b75-9e1b-125facf1606c.png" 
                  alt="BNP Paribas Fortis Logo" 
                  className="h-8 w-auto"
                />
              </div>
            </div>

            {/* Right side utility items */}
            <div className="hidden md:flex items-center space-x-6">
              <span className="text-sm text-gray-600">Deze sectie van de site is voor</span>
              
              {/* Segment Switcher */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium text-gray-900 hover:text-financial-green">
                  <span>{selectedSegment}</span>
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {segments.map(segment => <DropdownMenuItem key={segment} onClick={() => setSelectedSegment(segment)} className={selectedSegment === segment ? "bg-gray-100" : ""}>
                      {segment}
                    </DropdownMenuItem>)}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Contact Link */}
              <a href="/contact" className="text-sm text-financial-green hover:underline">
                Contacteer ons
              </a>

              {/* Language Selector */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-sm text-gray-900 hover:text-financial-green">
                  <span>{selectedLanguage}</span>
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {languages.map(language => <DropdownMenuItem key={language} onClick={() => setSelectedLanguage(language)} className={selectedLanguage === language ? "bg-gray-100" : ""}>
                      {language}
                    </DropdownMenuItem>)}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Search */}
              <div className="relative">
                <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="p-2 text-gray-600 hover:text-financial-green">
                  <Search className="w-5 h-5" />
                </button>
                {isSearchOpen && <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg p-3 z-50">
                    <Input placeholder="Wat zoekt u?" className="w-full" onKeyDown={e => {
                  if (e.key === 'Enter') {
                    // Redirect to search results
                    setIsSearchOpen(false);
                  }
                }} />
                  </div>}
              </div>
            </div>

            {/* Mobile menu trigger */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="md:hidden p-2">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-md p-0">
                <div className="p-4 border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <img 
                        src="/placeholder-logo.png" 
                        alt="BNP Paribas Fortis Logo" 
                        className="h-8 w-auto"
                      />
                    </div>
                    <Button variant="ghost" onClick={() => setIsMobileMenuOpen(false)}>
                      <X className="w-6 h-6" />
                    </Button>
                  </div>
                </div>

                {/* Mobile Search */}
                <div className="p-4 border-b bg-gray-50">
                  <Input placeholder="Wat zoekt u?" className="w-full" />
                </div>

                {/* Mobile Navigation */}
                <div className="flex-1 overflow-y-auto">
                  {navigationItems.map(item => <div key={item.title} className="border-b">
                      <button onClick={() => toggleMobileSection(item.title)} className="w-full px-4 py-4 text-left flex items-center justify-between hover:bg-gray-50">
                        <span className="font-medium text-gray-900">{item.title}</span>
                        <ChevronRight className={`w-5 h-5 text-financial-green transition-transform ${expandedMobileSection === item.title ? 'rotate-90' : ''}`} />
                      </button>
                      {expandedMobileSection === item.title && <div className="bg-gray-50">
                          {item.sections.map((section, idx) => <div key={idx} className="px-4 py-2">
                              <h4 className="font-medium text-gray-900 mb-2">{section.title}</h4>
                              {section.links.map((link, linkIdx) => <a key={linkIdx} href="#" className="block py-1 text-sm text-gray-600 hover:text-financial-green">
                                  {link}
                                </a>)}
                            </div>)}
                        </div>}
                    </div>)}
                </div>

                {/* Mobile CTAs */}
                <div className="p-4 space-y-3 border-t">
                  <Button variant="outline" className="w-full">
                    Open een rekening
                  </Button>
                  <Button className="w-full bg-financial-green hover:bg-financial-green/90">
                    Aanmelden
                  </Button>
                  
                  {/* Mobile utility links */}
                  <div className="pt-4 space-y-2 border-t">
                    <div className="text-sm text-gray-600">Deze sectie van de site is voor</div>
                    <select value={selectedSegment} onChange={e => setSelectedSegment(e.target.value)} className="w-full p-2 border border-gray-300 rounded">
                      {segments.map(segment => <option key={segment} value={segment}>{segment}</option>)}
                    </select>
                    <div className="flex space-x-4">
                      <a href="/contact" className="text-sm text-financial-green">Contacteer ons</a>
                      <select value={selectedLanguage} onChange={e => setSelectedLanguage(e.target.value)} className="text-sm border border-gray-300 rounded px-2 py-1">
                        {languages.map(language => <option key={language} value={language}>{language}</option>)}
                      </select>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Primary Navigation - Bottom Row */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Navigation Menu */}
            <NavigationMenu>
              <NavigationMenuList>
                {navigationItems.map(item => <NavigationMenuItem key={item.title}>
                    <NavigationMenuTrigger className="text-gray-900 hover:text-financial-green font-medium">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid grid-cols-5 gap-6 p-6 w-screen max-w-7xl">
                        {/* Columns 1-3: Main content */}
                        {item.sections.map((section, idx) => <div key={idx} className="space-y-3">
                            <h4 className="font-semibold text-gray-900">{section.title}</h4>
                            <ul className="space-y-2">
                              {section.links.map((link, linkIdx) => <li key={linkIdx}>
                                  <a href="#" className="text-sm text-gray-600 hover:text-financial-green block">
                                    {link}
                                  </a>
                                </li>)}
                            </ul>
                          </div>)}
                        
                        {/* Column 4: Expertise (grey background) */}
                        {item.expertise && <div className="bg-gray-50 p-4 rounded space-y-3">
                            <h4 className="font-semibold text-gray-900">{item.expertise.title}</h4>
                            <ul className="space-y-2">
                              {item.expertise.content.map((content, idx) => <li key={idx} className="text-sm text-gray-600">{content}</li>)}
                            </ul>
                          </div>}
                        
                        {/* Column 5: Banner */}
                        {item.banner && <div className="bg-financial-green text-white p-4 rounded space-y-3">
                            <div className="text-xs font-bold">{item.banner.title}</div>
                            <h4 className="font-semibold">{item.banner.subtitle}</h4>
                            <p className="text-sm">{item.banner.description}</p>
                            <Button variant="secondary" size="sm" className="bg-white text-financial-green hover:bg-gray-100">
                              {item.banner.cta}
                            </Button>
                          </div>}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>)}
              </NavigationMenuList>
            </NavigationMenu>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-3">
              <Button variant="outline" className="border-financial-green text-financial-green hover:bg-financial-green hover:text-white">
                Open een rekening
              </Button>
              <Button className="bg-financial-green hover:bg-financial-green/90 text-slate-50 bg-emerald-700 hover:bg-emerald-600">
                Aanmelden
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default BNPNavigation;