import React, { useState, useCallback, memo } from "react";
import { Search, ChevronDown, Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useLanguage, Language } from "@/contexts/LanguageContext";

const BNPNavigation = memo(() => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedSegment, setSelectedSegment] = useState("Particulieren");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);
  const [currentMobileView, setCurrentMobileView] = useState<'main' | 'sections'>('main');
  const [selectedMainCategory, setSelectedMainCategory] = useState<any>(null);
  const segments = ["Particulieren", "Ondernemingen", "Private Banking"];
  
  const { language, setLanguage, t } = useLanguage();
  
  const languages = [
    { code: 'nl', name: 'Nederlands' },
    { code: 'fr', name: 'Français' },
    { code: 'en', name: 'English' }
  ];

  const getLanguageName = (code: Language) => {
    return languages.find(lang => lang.code === code)?.name || code;
  };

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode);
  };

  const handleMainCategoryClick = useCallback((item: any) => {
    setSelectedMainCategory(item);
    setCurrentMobileView('sections');
    setExpandedMobileSection(null);
  }, []);

  const handleBackToMain = useCallback(() => {
    setCurrentMobileView('main');
    setSelectedMainCategory(null);
    setExpandedMobileSection(null);
  }, []);

  const handleToggleMobileSection = useCallback((sectionTitle: string) => {
    setExpandedMobileSection(
      expandedMobileSection === sectionTitle ? null : sectionTitle
    );
  }, [expandedMobileSection]);
  const navigationItems = [{
    title: "Dagelijks bankieren",
    sections: [{
      title: "Rekeningen",
      links: [{
        text: "Betaalrekeningen vergelijken",
        href: "/nl/public/particulieren/dagelijks-bankieren/bankrekeningen/zichtrekening-vergelijken"
      }, {
        text: "Betaalrekening voor jongeren",
        href: "/nl/public/particulieren/dagelijks-bankieren/bankrekeningen/zichtrekening/hello4you"
      }, {
        text: "Betaalrekening voor kinderen",
        href: "/nl/public/particulieren/dagelijks-bankieren/bankrekeningen/zichtrekening/jongerenrekening"
      }, {
        text: "Spaarrekeningen – Algemene info",
        href: "/nl/public/particulieren/sparen-en-beleggen/spaarinfo"
      }, {
        text: "Onze spaarrekeningen",
        href: "/nl/public/particulieren/sparen-en-beleggen/spaarrekening-vergelijken"
      }]
    }, {
      title: "Bankkaarten",
      links: [{
        text: "Bancontact-Visa Debit-debetkaart",
        href: "/nl/public/particulieren/dagelijks-bankieren/bankkaarten/debetkaart/visa-debit"
      }, {
        text: "Vergelijk onze kredietkaarten",
        href: "/nl/public/particulieren/dagelijks-bankieren/bankkaarten/kredietkaart"
      }, {
        text: "Visa kredietkaart",
        href: "/nl/public/particulieren/dagelijks-bankieren/bankkaarten/kredietkaart/visa-classic"
      }, {
        text: "Mastercard Gold kredietkaart",
        href: "/nl/public/particulieren/dagelijks-bankieren/bankkaarten/kredietkaart/mastercard-gold"
      }, {
        text: "Kredietkaart voor jongeren",
        href: "/nl/public/particulieren/dagelijks-bankieren/bankkaarten/kredietkaart/visa-hello"
      }, {
        text: "Al onze oplossingen",
        href: "/nl/public/particulieren/dagelijks-bankieren/bankkaarten"
      }]
    }, {
      title: "Betalen",
      links: [{
        text: "Met Easy Banking App",
        href: "/nl/public/particulieren/dagelijks-bankieren/betalingen/easy-banking-app"
      }, {
        text: "Met Easy Banking Web",
        href: "/nl/public/particulieren/dagelijks-bankieren/betalingen/easy-banking-web"
      }, {
        text: "Contactloos betalen",
        href: "/nl/public/particulieren/dagelijks-bankieren/betalingen/mobiel-betalen"
      }, {
        text: "CASH-punten netwerk",
        href: "/nl/public/particulieren/dagelijks-bankieren/betalingen/bankautomaat/points-cash"
      }, {
        text: "In het buitenland",
        href: "/nl/public/particulieren/dagelijks-bankieren/betalingen/betalen-buitenland"
      }, {
        text: "Overschrijven, IBAN, domiciliëring, Zoomit ...",
        href: "/nl/public/particulieren/dagelijks-bankieren/betalingen/soorten-betaalmiddelen"
      }, {
        text: "Veilig online",
        href: "/nl/public/particulieren/dagelijks-bankieren/betalingen/online-veiligheid"
      }]
    }],
    expertise: {
      title: "Onze expertise",
      content: [{
        text: "Selfbanking met Easy Banking App en Web",
        href: "/nl/public/particulieren/dagelijks-bankieren/zelf-bankieren"
      }, {
        text: "Betaaloplossingen",
        href: "https://mylife.bnpparibasfortis.be/nl/nieuwe-betaalmiddelen"
      }, {
        text: "Welke betaalkaart waar en wanneer gebruiken?",
        href: "https://mylife.bnpparibasfortis.be/nl/nieuwe-betaalmiddelen/betaal-optimaal-van-debetkaart-tot-kredietkaart"
      }, {
        text: "Advies op afstand of face-to-face",
        href: "/nl/public/particulieren/dagelijks-bankieren/onze-diensten"
      }]
    },
    banner: {
      title: "Wist u dat ...",
      subtitle: "",
      description: "Easy Banking App, eenmaal gebruiken en u bent verkocht",
      cta: "Download Easy Banking App",
      href: "/nl/public/particulieren/dagelijks-bankieren/betalingen/easy-banking-app"
    }
  }, {
    title: "Sparen en beleggen",
    sections: [{
      title: "Beleggen",
      links: [{
        text: "Beleggen met BNP Paribas Fortis",
        href: "/nl/public/particulieren/sparen-en-beleggen/investeren/bnp-paribas-fortis"
      }, {
        text: "Beleggen voor beginners",
        href: "/nl/public/particulieren/sparen-en-beleggen/investeren/starten"
      }, {
        text: "Beleggen zonder advies",
        href: "/nl/public/particulieren/sparen-en-beleggen/investeren/zelf"
      }, {
        text: "Beleggen met advies",
        href: "/nl/public/particulieren/sparen-en-beleggen/investeren/beleggingsadvies"
      }]
    }, {
      title: "Sparen en beleggen met een doel",
      links: [{
        text: "Pensioensparen",
        href: "/nl/public/particulieren/sparen-en-beleggen/pensioensparen"
      }, {
        text: "Fiscaal sparen",
        href: "/nl/public/particulieren/sparen-en-beleggen/voordelen-pensioensparen"
      }, {
        text: "Financieel beschermen van uw dierbaren",
        href: "/nl/public/particulieren/sparen-en-beleggen/financiele-bescherming"
      }]
    }, {
      title: "Onze beleggingsoplossingen",
      links: [{
        text: "Aanbod van de maand",
        href: "/nl/public/particulieren/sparen-en-beleggen/beleggingsaanbod"
      }, {
        text: "Beleggingsnieuws",
        href: "/nl/public/particulieren/sparen-en-beleggen/beleggingsnieuws"
      }, {
        text: "Spaarrekeningen",
        href: "/nl/public/particulieren/sparen-en-beleggen/spaarrekening-vergelijken"
      }, {
        text: "Aandelen",
        href: "/nl/public/particulieren/sparen-en-beleggen/aandelen"
      }, {
        text: "Beleggingsfondsen",
        href: "/nl/public/particulieren/sparen-en-beleggen/beleggingsfondsen"
      }, {
        text: "Financiële levensverzekeringen",
        href: "/nl/public/particulieren/sparen-en-beleggen/beleggingsverzekeringen"
      }, {
        text: "Kasbons",
        href: "/nl/public/particulieren/sparen-en-beleggen/kasbon"
      }, {
        text: "Obligaties",
        href: "/nl/public/particulieren/sparen-en-beleggen/obligaties"
      }, {
        text: "Gestructureerde producten",
        href: "/nl/public/particulieren/sparen-en-beleggen/gestructureerde-producten"
      }, {
        text: "Al onze oplossingen",
        href: "/nl/public/particulieren/sparen-en-beleggen/beleggingsproducten"
      }]
    }],
    expertise: {
      title: "Onze expertise",
      content: [{
        text: "Beginnen sparen of beleggen?",
        href: "https://mylife.bnpparibasfortis.be/nl/budget/starten-met-sparen-of-beleggen"
      }, {
        text: "Sparen voor uw pensioen : wat moet u weten?",
        href: "https://www.bnpparibasfortis.be/nl/public/article/sparen-en-beleggen/pensioensparen-wat-moet-u-weten"
      }, {
        text: "Expertise via Private Banking",
        href: "/nl/public/private-banking/vermogensbeheer/vermogensplanning"
      }, {
        text: "Priority Banking Exclusive",
        href: "/nl/public/particulieren/dagelijks-bankieren/priority-banking-exclusive"
      }, {
        text: "Advies op afstand of face-to-face",
        href: "/nl/public/particulieren/dagelijks-bankieren/onze-diensten"
      }]
    },
    banner: {
      title: "Wist u dat ...",
      subtitle: "",
      description: "u de financiële actualiteit kan volgen?",
      cta: "Volg het beleggingsnieuws op de voet",
      href: "/nl/public/particulieren/sparen-en-beleggen/beleggingsnieuws"
    }
  }, {
    title: "Lenen",
    sections: [{
      title: "Lenen voor een vastgoedproject",
      links: [{
        text: "Hypothecair krediet",
        href: "/nl/public/particulieren/lenen/woonlening/hypothecaire-lening"
      }, {
        text: "Energielening",
        href: "/nl/public/particulieren/lenen/woonlening/energielening"
      }, {
        text: "Renovatielening",
        href: "/nl/public/particulieren/lenen/woonlening/renovatielening"
      }, {
        text: "Overbruggingskrediet",
        href: "/nl/public/particulieren/lenen/woonlening/overbruggingskrediet"
      }, {
        text: "Al onze oplossingen",
        href: "/nl/public/particulieren/lenen/woonlening"
      }]
    }, {
      title: "Lenen voor een voertuig",
      links: [{
        text: "Lening op afbetaling voor een nieuw voertuig",
        href: "/nl/public/particulieren/lenen/autolening/simulatie"
      }, {
        text: "Lening op afbetaling voor een tweedehands voertuig",
        href: "/nl/public/particulieren/lenen/autolening/tweedehands"
      }, {
        text: "Lening op afbetaling voor een fiets en zachte mobiliteit",
        href: "/nl/public/particulieren/lenen/autolening/fietslening"
      }, {
        text: "Private lease",
        href: "/nl/public/particulieren/lenen/autolening/leasing"
      }, {
        text: "Al onze oplossingen",
        href: "/nl/public/particulieren/lenen/autolening"
      }]
    }, {
      title: "Lenen voor een project",
      links: [{
        text: "Persoonlijke lening - Lening op afbetaling",
        href: "/nl/public/particulieren/lenen/persoonlijke-lening"
      }, {
        text: "Kredietopening",
        href: "/nl/public/particulieren/lenen/geldreserve"
      }, {
        text: "Al onze oplossingen",
        href: "/nl/public/particulieren/lenen/geldreserve"
      }]
    }],
    expertise: {
      title: "Onze expertise",
      content: [{
        text: "Alles weten over duurzaam wonen",
        href: "https://mylife.bnpparibasfortis.be/nl/uw-vastgoedproject"
      }, {
        text: "Alles weten over duurzame mobiliteit",
        href: "https://mylife.bnpparibasfortis.be/nl/mobiliteit"
      }, {
        text: "Alles weten over budgetbeheer",
        href: "https://mylife.bnpparibasfortis.be/nl/budget"
      }, {
        text: "Advies op afstand of face-to-face",
        href: "/nl/public/particulieren/dagelijks-bankieren/onze-diensten"
      }]
    },
    banner: {
      title: "Een EPC-certificaat?",
      subtitle: "",
      description: "Reken op de experts van SoSimply.",
      cta: "Meer weten",
      href: "/nl/public/campagne/conformiteitsattest-woning"
    }
  }, {
    title: "Verzekeren",
    sections: [{
      title: "Beschermen van uw gezin",
      links: [{
        text: "Familiale verzekering",
        href: "/nl/public/particulieren/verzekeren/familiale-verzekeringen/top-familiale"
      }, {
        text: "Globale rechtsbijstand",
        href: "/nl/public/particulieren/verzekeren/familiale-verzekeringen/providis-globale-rechtsbijstand"
      }, {
        text: "Hospitalisatieverzekering",
        href: "/nl/public/particulieren/verzekeren/hospitalisatieverzekering"
      }, {
        text: "Ongevallenverzekering",
        href: "/nl/public/particulieren/verzekeren/familiale-verzekeringen/ongevallenverzekering"
      }, {
        text: "Reisverzekering",
        href: "/nl/public/particulieren/verzekeren/reisverzekering"
      }, {
        text: "Levens- en overlijdensverzekeringen",
        href: "/nl/public/particulieren/verzekeren/levensverzekering"
      }, {
        text: "Al onze oplossingen",
        href: "/nl/public/particulieren/verzekeren/familie-verzekeringen"
      }]
    }, {
      title: "Beschermen van uw woning",
      links: [{
        text: "Woningverzekering eigenaar",
        href: "/nl/public/particulieren/verzekeren/brandverzekeringen/eigenaar"
      }, {
        text: "Woningverzekering huurder",
        href: "/nl/public/particulieren/verzekeren/brandverzekeringen/huurder"
      }, {
        text: "Woningverzekering verhuurder",
        href: "/nl/public/particulieren/verzekeren/brandverzekeringen/verhuurder"
      }, {
        text: "Diefstalverzekering",
        href: "/nl/public/particulieren/verzekeren/brandverzekeringen/diefstalverzekering"
      }, {
        text: "Homiris telebewaking",
        href: "/nl/public/particulieren/verzekeren/homiris"
      }, {
        text: "Rechtsbijstandsverzekering",
        href: "/nl/public/particulieren/verzekeren/brandverzekeringen/rechtsbijstand"
      }, {
        text: "Al onze oplossingen",
        href: "/nl/public/particulieren/verzekeren/brandverzekeringen"
      }]
    }, {
      title: "Beschermen van uw mobiliteit",
      links: [{
        text: "Autoverzekering",
        href: "/nl/public/particulieren/verzekeren/voertuigverzekeringen/auto/burgerlijke-aansprakelijkheid"
      }, {
        text: "Omniumverzekering auto",
        href: "/nl/public/particulieren/verzekeren/voertuigverzekeringen/auto/omnium"
      }, {
        text: "Rechtsbijstandsverzekering auto",
        href: "/nl/public/particulieren/verzekeren/voertuigverzekeringen/auto/rechtsbijstand"
      }, {
        text: "Fietsverzekering en zachte mobiliteit",
        href: "/nl/public/particulieren/verzekeren/voertuigverzekeringen/fietsverzekering"
      }, {
        text: "Motorverzekeringen",
        href: "/nl/public/particulieren/verzekeren/voertuigverzekeringen/motorverzekering"
      }, {
        text: "Bromfietsverzekeringen",
        href: "/nl/public/particulieren/verzekeren/voertuigverzekeringen/bromfietsverzekering"
      }, {
        text: "Pechverhelping",
        href: "/nl/public/particulieren/verzekeren/pechverhelping-bijstand-touring"
      }, {
        text: "Al onze oplossingen",
        href: "/nl/public/particulieren/verzekeren/voertuigverzekeringen"
      }]
    }],
    expertise: {
      title: "Onze expertise",
      content: [{
        text: "Aangifte van een schadegeval",
        href: "/nl/public/particulieren/verzekeren/schadeaangifte"
      }, {
        text: "Gratis check-up van uw verzekeringen",
        href: "/nl/public/particulieren/campagne/check-up-verzekering"
      }, {
        text: "Beveilig uw thuis",
        href: "https://mylife.bnpparibasfortis.be/nl/beschermen-van-u-en-uw-woning"
      }, {
        text: "Bescherm uw gezin bij overlijden",
        href: "https://mylife.bnpparibasfortis.be/nl/family/bescherm-uw-familie-bij-overlijden"
      }, {
        text: "Preventietips natuurrampen",
        href: "https://mylife.bnpparibasfortis.be/nl/al-mijn-verzekeringen/preventie-natuurramp"
      }, {
        text: "Advies op afstand of face-to-face",
        href: "/nl/public/particulieren/dagelijks-bankieren/onze-diensten"
      }]
    },
    banner: {
      title: "Een EPC-certificaat?",
      subtitle: "",
      description: "Reken op de experts van SoSimply.",
      cta: "Meer weten",
      href: "/nl/public/campagne/conformiteitsattest-woning"
    }
  }, {
    title: "Aan uw zijde",
    sections: [{
      title: "Uw behoeften",
      links: [{
        text: "Mobiliteit",
        href: "https://mylife.bnpparibasfortis.be/nl/mobiliteit"
      }, {
        text: "Wonen",
        href: "https://mylife.bnpparibasfortis.be/nl/uw-vastgoedproject"
      }, {
        text: "Budget",
        href: "https://mylife.bnpparibasfortis.be/nl/budget"
      }, {
        text: "Gezin",
        href: "https://mylife.bnpparibasfortis.be/nl/family"
      }, {
        text: "Betaalmiddelen",
        href: "https://mylife.bnpparibasfortis.be/nl/nieuwe-betaalmiddelen"
      }, {
        text: "Studeren in het buitenland",
        href: "https://mylife.bnpparibasfortis.be/nl/studeren-in-het-buitenland"
      }, {
        text: "Een overlijden aangeven",
        href: "/nl/public/particulieren/overlijden"
      }]
    }, {
      title: "Aanpak op maat",
      links: [{
        text: "De bank voor jongeren",
        href: "/nl/public/particulieren/dagelijks-bankieren/bank-voor-jongeren"
      }, {
        text: "Priority Banking Exclusive",
        href: "/nl/public/particulieren/dagelijks-bankieren/priority-banking-exclusive"
      }, {
        text: "Expat in België",
        href: "/nl/public/particulieren/expats"
      }, {
        text: "Bank voor iedereen",
        href: "/nl/public/particulieren/toegankelijkheid-bank"
      }]
    }, {
      title: "Online en mobiele bank",
      links: [{
        text: "Easy Banking App",
        href: "/nl/public/particulieren/dagelijks-bankieren/betalingen/easy-banking-app"
      }, {
        text: "Selfbanking met Easy Banking App en Web",
        href: "/nl/public/particulieren/dagelijks-bankieren/zelf-bankieren"
      }, {
        text: "Beheer uw budget met Easy Banking App",
        href: "/nl/public/particulieren/dagelijks-bankieren/betalingen/easy-banking-app/budgetbeheer-tool"
      }, {
        text: "Easy Banking Web",
        href: "/nl/public/particulieren/dagelijks-bankieren/betalingen/easy-banking-web"
      }, {
        text: "Contactloos betalen",
        href: "/nl/public/particulieren/dagelijks-bankieren/betalingen/mobiel-betalen"
      }, {
        text: "Veilig online",
        href: "/nl/public/particulieren/dagelijks-bankieren/betalingen/online-veiligheid"
      }]
    }],
    expertise: {
      title: "Contacteer ons",
      content: [{
        text: "Aangifte van een schadegeval",
        href: "/nl/public/particulieren/verzekeren/schadeaangifte"
      }, {
        text: "Advies op afstand of face-to-face",
        href: "/nl/public/particulieren/dagelijks-bankieren/onze-diensten"
      }, {
        text: "Uw adviseurs via videogesprek",
        href: "/nl/public/particulieren/dagelijks-bankieren/videogesprek"
      }, {
        text: "Een expert aan de lijn",
        href: "/nl/public/particulieren/dagelijks-bankieren/bankadviseur"
      }, {
        text: "CASH-punten netwerk",
        href: "/nl/public/particulieren/dagelijks-bankieren/betalingen/bankautomaat/points-cash"
      }]
    },
    banner: {
      title: "Wist u dat ...",
      subtitle: "",
      description: "u nu kan huren, en later kopen?",
      cta: "Ontdek HappyNest",
      href: "/nl/public/particulieren/campagne/happynest"
    }
  }];
  const toggleMobileSection = (title: string) => {
    setExpandedMobileSection(expandedMobileSection === title ? null : title);
  };
  return (
    <div className="w-full bg-white border-b shadow-sm sticky top-0 z-50">
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
                  <span>{getLanguageName(language)}</span>
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {languages.map(lang => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code as Language)}
                      className={language === lang.code ? "bg-gray-100" : ""}
                    >
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
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
                <Button variant="ghost" className="lg:hidden p-2">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-md p-0 flex flex-col h-full">
                <div className="border-b border-gray-100">
                  <div className="flex items-center justify-between h-12 px-4">
                    <div className="flex items-center space-x-2">
                      <img src="/lovable-uploads/446ebfd0-a105-4b75-9e1b-125facf1606c.png" alt="BNP Paribas Fortis Logo" className="h-10 w-auto" />
                    </div>
                    <Button variant="ghost" onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                      <X className="w-6 h-6" />
                    </Button>
                  </div>
                </div>

                {/* Mobile Search */}
                <div className="border-b bg-gray-50 px-3 py-1">
                  <Input placeholder="Wat zoekt u?" className="w-full h-8 text-sm" />
                </div>

                {/* Mobile Navigation */}
                <div className="flex-1 overflow-y-auto">
                  {/* Main Categories View */}
                  {currentMobileView === 'main' && navigationItems.map(item => (
                    <div key={item.title} className="border-b">
                      <button 
                        onClick={() => handleMainCategoryClick(item)}
                        className="w-full px-4 py-4 text-left flex items-center justify-between hover:bg-gray-50"
                      >
                        <span className="font-medium text-gray-900">{item.title}</span>
                        <ChevronRight className="w-5 h-5 text-financial-green" />
                      </button>
                    </div>
                  ))}

                  {/* Sections View */}
                  {currentMobileView === 'sections' && selectedMainCategory && (
                    <>
                      {/* Back button */}
                      <div className="border-b bg-gray-50">
                        <button 
                          onClick={handleBackToMain}
                          className="w-full px-4 py-1.5 text-left flex items-center text-financial-green hover:bg-gray-100"
                        >
                          <ChevronRight className="w-4 h-4 rotate-180 mr-2" />
                          <span className="text-sm">Terug</span>
                        </button>
                      </div>
                      
                      {/* Category title */}
                      <div className="px-4 py-2 bg-white border-b-2 border-financial-green">
                        <h3 className="text-base font-bold text-gray-900 uppercase tracking-wide">{selectedMainCategory.title}</h3>
                      </div>

                      {/* Sections */}
                      {selectedMainCategory.sections.map((section: any, idx: number) => (
                        <div key={idx} className="border-b">
                          <button 
                            onClick={() => handleToggleMobileSection(section.title)} 
                            className="w-full px-4 py-4 text-left flex items-center justify-between hover:bg-gray-50"
                          >
                            <span className="font-medium text-gray-900">{section.title}</span>
                            <ChevronRight className={`w-4 h-4 text-financial-green transition-transform ${expandedMobileSection === section.title ? 'rotate-90' : ''}`} />
                          </button>
                          {expandedMobileSection === section.title && (
                            <div className="bg-gray-50 border-t border-gray-200">
                              {section.links.map((link: any, linkIdx: number) => (
                                <a 
                                  key={linkIdx} 
                                  href={link.href} 
                                  className="block px-4 py-3 text-sm text-gray-600 hover:text-financial-green hover:bg-gray-100 border-b border-gray-200 last:border-b-0"
                                >
                                  {link.text}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}

                      {/* Expertise section */}
                      {selectedMainCategory.expertise && (
                        <div className="border-b">
                          <button 
                            onClick={() => handleToggleMobileSection('expertise')} 
                            className="w-full px-4 py-4 text-left flex items-center justify-between hover:bg-gray-50"
                          >
                            <span className="font-medium text-gray-900">{selectedMainCategory.expertise.title}</span>
                            <ChevronRight className={`w-4 h-4 text-financial-green transition-transform ${expandedMobileSection === 'expertise' ? 'rotate-90' : ''}`} />
                          </button>
                          {expandedMobileSection === 'expertise' && (
                            <div className="bg-gray-50 border-t border-gray-200">
                              {selectedMainCategory.expertise.content.map((content: any, idx: number) => (
                                <a 
                                  key={idx} 
                                  href={content.href} 
                                  className="block px-4 py-3 text-sm text-gray-600 hover:text-financial-green hover:bg-gray-100 border-b border-gray-200 last:border-b-0"
                                >
                                  {content.text}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Banner section */}
                      {selectedMainCategory.banner && (
                        <div className="border-b">
                          <button 
                            onClick={() => handleToggleMobileSection('banner')} 
                            className="w-full px-4 py-4 text-left flex items-center justify-between hover:bg-gray-50"
                          >
                            <span className="font-medium text-gray-900">{selectedMainCategory.banner.title}</span>
                            <ChevronRight className={`w-4 h-4 text-financial-green transition-transform ${expandedMobileSection === 'banner' ? 'rotate-90' : ''}`} />
                          </button>
                          {expandedMobileSection === 'banner' && (
                            <div className="bg-gray-50 border-t border-gray-200 px-4 py-4">
                              <p className="text-sm text-gray-600 mb-3">{selectedMainCategory.banner.description}</p>
                              <a 
                                href={selectedMainCategory.banner.href}
                                className="inline-block bg-financial-green text-white px-4 py-2 rounded text-sm hover:bg-financial-green/90"
                              >
                                {selectedMainCategory.banner.cta}
                              </a>
                            </div>
                          )}
                        </div>
                      )}
                    </>
                  )}
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
                      <select value={language} onChange={e => handleLanguageChange(e.target.value as Language)} className="text-sm border border-gray-300 rounded px-2 py-1">
                        {languages.map(lang => <option key={lang.code} value={lang.code}>{lang.name}</option>)}
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
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 ">
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
                            <h4 className="font-semibold text-gray-900 text-sm lg:text-base">{section.title}</h4>
                            <ul className="space-y-2">
                              {section.links.map((link, linkIdx) => <li key={linkIdx}>
                                  <a href={link.href} className="text-xs lg:text-sm text-gray-600 hover:text-financial-green block leading-relaxed">
                                    {link.text}
                                  </a>
                                </li>)}
                            </ul>
                          </div>)}
                        
                        {/* Column 4: Expertise (grey background) */}
                        {item.expertise && <div className="bg-gray-50 p-4 rounded space-y-3">
                            <h4 className="font-semibold text-gray-900">{item.expertise.title}</h4>
                            <ul className="space-y-2">
                              {item.expertise.content.map((content, idx) => <li key={idx}><a href={content.href} className="text-sm text-gray-600 hover:text-financial-green">{content.text}</a></li>)}
                            </ul>
                          </div>}
                        
                        {/* Column 5: Banner */}
                        {item.banner && <div className="bg-financial-green text-white p-6 rounded-lg space-y-4">
                            <div className="text-xs font-bold tracking-wide uppercase">{item.banner.title}</div>
                            {item.banner.subtitle && <h4 className="font-semibold text-base">{item.banner.subtitle}</h4>}
                            <p className="text-sm leading-relaxed">{item.banner.description}</p>
                            <Button 
                              variant="secondary" 
                              size="sm" 
                              className="bg-white text-financial-green hover:bg-gray-50 font-medium rounded-lg px-4 py-2 transition-colors" 
                              asChild
                            >
                              <a href={item.banner.href} className="max-w-full leading-tight text-center block w-full">{item.banner.cta}</a>
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
    </div>
  );
});

BNPNavigation.displayName = 'BNPNavigation';

export default BNPNavigation;