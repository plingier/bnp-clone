import React, { useState, useCallback, memo, useMemo, useEffect } from "react";
import { Search, ChevronDown, Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { useNavigate, useLocation } from "react-router-dom";
import BNPPFlogo from "@/assets/BNPPFlogo.png";

const BNPNavigation = memo(() => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedSegment, setSelectedSegment] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);
  const [currentMobileView, setCurrentMobileView] = useState<'main' | 'sections'>('main');
  const [selectedMainCategory, setSelectedMainCategory] = useState<any>(null);
  
  const { language, setLanguage, t, getLocalizedUrl } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  
  const languages = [
    { code: 'nl', name: 'Nederlands' },
    { code: 'fr', name: 'Français' },
    { code: 'en', name: 'English' },
    { code: 'pl', name: 'Polski' }
  ];

  // Generate translated segments based on current language
  const segments = useMemo(() => [
    t('nav.segments.particulieren'),
    t('nav.segments.ondernemingen'),
    t('nav.segments.privateBanking')
  ], [t]);

  // Update selectedSegment when language changes
  useEffect(() => {
    if (segments.length > 0 && !segments.includes(selectedSegment)) {
      setSelectedSegment(segments[0]);
    }
  }, [segments, selectedSegment]);

  const getLanguageName = (code: Language) => {
    return languages.find(lang => lang.code === code)?.name || code;
  };

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode);
    
    // Get the current pathname from React Router
    const currentPath = location.pathname;
    
    // Handle both development and production basenames
    const basename = import.meta.env.PROD ? '/bnp-clone' : '';
    
    // Remove basename from current path if it exists
    let pathWithoutBasename = currentPath;
    if (basename && currentPath.startsWith(basename)) {
      pathWithoutBasename = currentPath.slice(basename.length);
    }
    
    // Extract the route path (remove language prefix)
    const langMatch = pathWithoutBasename.match(/^\/([a-z]{2})(\/.*)?$/);
    let routePath = '';
    
    if (langMatch) {
      // If there's a language prefix, extract the route part
      routePath = langMatch[2] || '';
    } else {
      // If no language prefix, use the full path
      routePath = pathWithoutBasename;
    }
    
    // Ensure routePath starts with / if it's not empty and doesn't already start with /
    if (routePath && !routePath.startsWith('/')) {
      routePath = `/${routePath}`;
    }
    
    // Construct the new path - just the language and route, let React Router handle the basename
    const newPath = `/${langCode}${routePath}`;
    
    // Navigate to the new path
    navigate(newPath, { replace: true });
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

  // Generate navigation items based on current language
  const navigationItems = useMemo(() => {
    const getLocalizedHref = (baseHref: string) => {
      // Replace language prefix in URLs
      const langPrefix = language === 'nl' ? 'nl' : language === 'fr' ? 'fr' : language === 'en' ? 'en' : 'pl';
      const localizedPath = baseHref.replace(/^\/[a-z]{2}\//, `/${langPrefix}/`);
      
      // Always add /bnp-clone/ prefix
      return `/bnp-clone${localizedPath}`;
    };

    return [{
      title: t('nav.dailyBanking'),
      sections: [{
        title: t('nav.accounts'),
        links: [{
          text: t('nav.compareAccounts'),
          href: getLocalizedHref("/nl/public/particulieren/dagelijks-bankieren/bankrekeningen/zichtrekening-vergelijken")
        }, {
          text: t('nav.youthAccount'),
          href: getLocalizedHref("/nl/public/particulieren/dagelijks-bankieren/bankrekeningen/zichtrekening/hello4you")
        }, {
          text: t('nav.childrenAccount'),
          href: getLocalizedHref("/nl/public/particulieren/dagelijks-bankieren/bankrekeningen/zichtrekening/jongerenrekening")
        }, {
          text: t('nav.savingsInfo'),
          href: getLocalizedHref("/nl/public/particulieren/sparen-en-beleggen/spaarinfo")
        }, {
          text: t('nav.ourSavings'),
          href: getLocalizedHref("/nl/public/particulieren/sparen-en-beleggen/spaarrekening-vergelijken")
        }]
      }, {
        title: t('nav.cards'),
        links: [{
          text: t('nav.debitCard'),
          href: getLocalizedHref("/nl/public/particulieren/dagelijks-bankieren/bankkaarten/debetkaart/visa-debit")
        }, {
          text: t('nav.compareCards'),
          href: getLocalizedHref("/nl/public/particulieren/dagelijks-bankieren/bankkaarten/kredietkaart")
        }, {
          text: t('nav.visaCard'),
          href: getLocalizedHref("/nl/public/particulieren/dagelijks-bankieren/bankkaarten/kredietkaart/visa-classic")
        }, {
          text: t('nav.mastercardGold'),
          href: getLocalizedHref("/nl/public/particulieren/dagelijks-bankieren/bankkaarten/kredietkaart/mastercard-gold")
        }, {
          text: t('nav.youthCard'),
          href: getLocalizedHref("/nl/public/particulieren/dagelijks-bankieren/bankkaarten/kredietkaart/visa-hello")
        }, {
          text: t('nav.allSolutions'),
          href: getLocalizedHref("/nl/public/particulieren/dagelijks-bankieren/bankkaarten")
        }]
      }, {
        title: t('nav.payments'),
        links: [{
          text: t('nav.easyBankingApp'),
          href: getLocalizedHref("/nl/public/particulieren/dagelijks-bankieren/betalingen/easy-banking-app")
        }, {
          text: t('nav.easyBankingWeb'),
          href: getLocalizedHref("/nl/public/particulieren/dagelijks-bankieren/betalingen/easy-banking-web")
        }, {
          text: t('nav.contactlessPay'),
          href: getLocalizedHref("/nl/public/particulieren/dagelijks-bankieren/betalingen/mobiel-betalen")
        }, {
          text: t('nav.cashNetwork'),
          href: getLocalizedHref("/nl/public/particulieren/dagelijks-bankieren/betalingen/bankautomaat/points-cash")
        }, {
          text: t('nav.abroad'),
          href: getLocalizedHref("/nl/public/particulieren/dagelijks-bankieren/betalingen/betalen-buitenland")
        }, {
          text: t('nav.paymentMethods'),
          href: getLocalizedHref("/nl/public/particulieren/dagelijks-bankieren/betalingen/soorten-betaalmiddelen")
        }, {
          text: t('nav.secureOnline'),
          href: getLocalizedHref("/nl/public/particulieren/dagelijks-bankieren/betalingen/online-veiligheid")
        }]
      }],
      expertise: {
        title: t('nav.ourExpertise'),
        content: [{
          text: t('nav.selfBanking'),
          href: getLocalizedHref("/nl/public/particulieren/dagelijks-bankieren/zelf-bankieren")
        }, {
          text: t('nav.paymentSolutions'),
          href: "https://mylife.bnpparibasfortis.be/nl/nieuwe-betaalmiddelen"
        }, {
          text: t('nav.cardUsage'),
          href: "https://mylife.bnpparibasfortis.be/nl/nieuwe-betaalmiddelen/betaal-optimaal-van-debetkaart-tot-kredietkaart"
        }, {
          text: t('nav.remoteAdvice'),
          href: getLocalizedHref("/nl/public/particulieren/dagelijks-bankieren/onze-diensten")
        }]
      },
      banner: {
        title: "Wist u dat ...",
        subtitle: "",
        description: "Easy Banking App, eenmaal gebruiken en u bent verkocht",
        cta: "Download Easy Banking App",
        href: getLocalizedHref("/nl/public/particulieren/dagelijks-bankieren/betalingen/easy-banking-app")
      }
    }, {
      title: t('nav.savingsInvesting'),
      sections: [{
        title: t('nav.investing'),
        links: [{
          text: t('nav.investingWithBNP'),
          href: getLocalizedHref("/nl/public/particulieren/sparen-en-beleggen/investeren/bnp-paribas-fortis")
        }, {
          text: t('nav.investingBeginners'),
          href: getLocalizedHref("/nl/public/particulieren/sparen-en-beleggen/investeren/starten")
        }, {
          text: t('nav.investingNoAdvice'),
          href: getLocalizedHref("/nl/public/particulieren/sparen-en-beleggen/investeren/zelf")
        }, {
          text: t('nav.investingWithAdvice'),
          href: getLocalizedHref("/nl/public/particulieren/sparen-en-beleggen/investeren/beleggingsadvies")
        }]
      }, {
        title: t('nav.savingsGoals'),
        links: [{
          text: t('nav.pensionSaving'),
          href: getLocalizedHref("/nl/public/particulieren/sparen-en-beleggen/pensioensparen")
        }, {
          text: t('nav.taxSaving'),
          href: getLocalizedHref("/nl/public/particulieren/sparen-en-beleggen/voordelen-pensioensparen")
        }, {
          text: t('nav.financialProtection'),
          href: getLocalizedHref("/nl/public/particulieren/sparen-en-beleggen/financiele-bescherming")
        }]
      }, {
        title: t('nav.investmentSolutions'),
        links: [{
          text: t('nav.monthlyOffer'),
          href: getLocalizedHref("/nl/public/particulieren/sparen-en-beleggen/beleggingsaanbod")
        }, {
          text: t('nav.investmentNews'),
          href: getLocalizedHref("/nl/public/particulieren/sparen-en-beleggen/beleggingsnieuws")
        }, {
          text: t('nav.savingsAccounts'),
          href: getLocalizedHref("/nl/public/particulieren/sparen-en-beleggen/spaarrekening-vergelijken")
        }, {
          text: t('nav.stocks'),
          href: getLocalizedHref("/nl/public/particulieren/sparen-en-beleggen/aandelen")
        }, {
          text: t('nav.investmentFunds'),
          href: getLocalizedHref("/nl/public/particulieren/sparen-en-beleggen/beleggingsfondsen")
        }, {
          text: t('nav.lifeInsurance'),
          href: getLocalizedHref("/nl/public/particulieren/sparen-en-beleggen/beleggingsverzekeringen")
        }, {
          text: t('nav.certificates'),
          href: getLocalizedHref("/nl/public/particulieren/sparen-en-beleggen/kasbon")
        }, {
          text: t('nav.bonds'),
          href: getLocalizedHref("/nl/public/particulieren/sparen-en-beleggen/obligaties")
        }, {
          text: t('nav.structuredProducts'),
          href: getLocalizedHref("/nl/public/particulieren/sparen-en-beleggen/gestructureerde-producten")
        }, {
          text: t('nav.allSolutions'),
          href: getLocalizedHref("/nl/public/particulieren/sparen-en-beleggen/beleggingsproducten")
        }]
      }],
      expertise: {
        title: t('nav.ourExpertise'),
        content: [{
          text: t('nav.investingWithBNP'),
          href: getLocalizedHref("/nl/public/particulieren/sparen-en-beleggen/investeren/bnp-paribas-fortis")
        }, {
          text: t('nav.investingBeginners'),
          href: getLocalizedHref("/nl/public/particulieren/sparen-en-beleggen/investeren/starten")
        }, {
          text: t('nav.investingNoAdvice'),
          href: getLocalizedHref("/nl/public/particulieren/sparen-en-beleggen/investeren/zelf")
        }, {
          text: t('nav.investingWithAdvice'),
          href: getLocalizedHref("/nl/public/particulieren/sparen-en-beleggen/investeren/beleggingsadvies")
        }]
      },
      banner: {
        title: "Wist u dat ...",
        subtitle: "",
        description: "Beleggen kan ook eenvoudig zijn",
        cta: "Ontdek onze oplossingen",
        href: getLocalizedHref("/nl/public/particulieren/sparen-en-beleggen/beleggingsproducten")
      }
    }, {
      title: t('nav.lending'),
      sections: [{
        title: t('nav.realEstate'),
        links: [{
          text: t('nav.mortgageCredit'),
          href: getLocalizedHref("/nl/hypothecair-krediet")
        }, {
          text: t('nav.energyLoan'),
          href: getLocalizedHref("/nl/public/particulieren/lenen/woonlening/energielening")
        }, {
          text: t('nav.renovationLoan'),
          href: getLocalizedHref("/nl/public/particulieren/lenen/woonlening/renovatielening")
        }, {
          text: t('nav.bridgingCredit'),
          href: getLocalizedHref("/nl/public/particulieren/lenen/woonlening/overbruggingskrediet")
        }, {
          text: t('nav.allSolutions'),
          href: getLocalizedHref("/nl/public/particulieren/lenen/woonlening")
        }]
      }, {
        title: t('nav.vehicle'),
        links: [{
          text: t('nav.newVehicleLoan'),
          href: getLocalizedHref("/nl/public/particulieren/lenen/autolening/simulatie")
        }, {
          text: t('nav.usedVehicleLoan'),
          href: getLocalizedHref("/nl/public/particulieren/lenen/autolening/tweedehands")
        }, {
          text: t('nav.bikeLoan'),
          href: getLocalizedHref("/nl/public/particulieren/lenen/autolening/fietslening")
        }, {
          text: t('nav.privateLease'),
          href: getLocalizedHref("/nl/public/particulieren/lenen/autolening/leasing")
        }, {
          text: t('nav.allSolutions'),
          href: getLocalizedHref("/nl/public/particulieren/lenen/autolening")
        }]
      }, {
        title: t('nav.project'),
        links: [{
          text: t('nav.personalLoan'),
          href: getLocalizedHref("/nl/public/particulieren/lenen/persoonlijke-lening")
        }, {
          text: t('nav.creditOpening'),
          href: getLocalizedHref("/nl/public/particulieren/lenen/geldreserve")
        }, {
          text: t('nav.allSolutions'),
          href: getLocalizedHref("/nl/public/particulieren/lenen/geldreserve")
        }]
      }],
      expertise: {
        title: t('nav.ourExpertise'),
        content: [{
          text: t('nav.mortgageCredit'),
          href: getLocalizedHref("/nl/hypothecair-krediet")
        }, {
          text: t('nav.energyLoan'),
          href: getLocalizedHref("/nl/public/particulieren/lenen/woonlening/energielening")
        }, {
          text: t('nav.renovationLoan'),
          href: getLocalizedHref("/nl/public/particulieren/lenen/woonlening/renovatielening")
        }, {
          text: t('nav.bridgingCredit'),
          href: getLocalizedHref("/nl/public/particulieren/lenen/woonlening/overbruggingskrediet")
        }]
      },
      banner: {
        title: "Wist u dat ...",
        subtitle: "",
        description: "u ook kunt lenen voor energiebesparende werken?",
        cta: "Ontdek onze energielening",
        href: getLocalizedHref("/nl/public/particulieren/lenen/woonlening/energielening")
      }
    }, {
      title: t('nav.insurance'),
      sections: [{
        title: t('nav.familyProtection'),
        links: [{
          text: t('nav.familyInsurance'),
          href: getLocalizedHref("/nl/public/particulieren/verzekeren/familiale-verzekeringen/top-familiale")
        }, {
          text: t('nav.legalAssistance'),
          href: getLocalizedHref("/nl/public/particulieren/verzekeren/familiale-verzekeringen/providis-globale-rechtsbijstand")
        }, {
          text: t('nav.hospitalization'),
          href: getLocalizedHref("/nl/public/particulieren/verzekeren/hospitalisatieverzekering")
        }, {
          text: t('nav.accidentInsurance'),
          href: getLocalizedHref("/nl/public/particulieren/verzekeren/familiale-verzekeringen/ongevallenverzekering")
        }, {
          text: t('nav.travelInsurance'),
          href: getLocalizedHref("/nl/public/particulieren/verzekeren/reisverzekering")
        }, {
          text: t('nav.lifeDeathInsurance'),
          href: getLocalizedHref("/nl/public/particulieren/verzekeren/levensverzekering")
        }, {
          text: t('nav.allSolutions'),
          href: getLocalizedHref("/nl/public/particulieren/verzekeren/familie-verzekeringen")
        }]
      }, {
        title: t('nav.homeProtection'),
        links: [{
          text: t('nav.homeInsuranceOwner'),
          href: getLocalizedHref("/nl/public/particulieren/verzekeren/brandverzekeringen/eigenaar")
        }, {
          text: t('nav.homeInsuranceTenant'),
          href: getLocalizedHref("/nl/public/particulieren/verzekeren/brandverzekeringen/huurder")
        }, {
          text: t('nav.homeInsuranceLandlord'),
          href: getLocalizedHref("/nl/public/particulieren/verzekeren/brandverzekeringen/verhuurder")
        }, {
          text: t('nav.theftInsurance'),
          href: getLocalizedHref("/nl/public/particulieren/verzekeren/brandverzekeringen/diefstalverzekering")
        }, {
          text: t('nav.homiris'),
          href: getLocalizedHref("/nl/public/particulieren/verzekeren/homiris")
        }, {
          text: t('nav.legalAssistanceInsurance'),
          href: getLocalizedHref("/nl/public/particulieren/verzekeren/brandverzekeringen/rechtsbijstand")
        }, {
          text: t('nav.allSolutions'),
          href: getLocalizedHref("/nl/public/particulieren/verzekeren/brandverzekeringen")
        }]
      }, {
        title: t('nav.mobilityProtection'),
        links: [{
          text: t('nav.carInsurance'),
          href: getLocalizedHref("/nl/public/particulieren/verzekeren/voertuigverzekeringen/auto/burgerlijke-aansprakelijkheid")
        }, {
          text: t('nav.carOmnium'),
          href: getLocalizedHref("/nl/public/particulieren/verzekeren/voertuigverzekeringen/auto/omnium")
        }, {
          text: t('nav.carLegalAssistance'),
          href: getLocalizedHref("/nl/public/particulieren/verzekeren/voertuigverzekeringen/auto/rechtsbijstand")
        }, {
          text: t('nav.bikeInsurance'),
          href: getLocalizedHref("/nl/public/particulieren/verzekeren/voertuigverzekeringen/fietsverzekering")
        }, {
          text: t('nav.motorcycleInsurance'),
          href: getLocalizedHref("/nl/public/particulieren/verzekeren/voertuigverzekeringen/motorverzekering")
        }, {
          text: t('nav.mopedInsurance'),
          href: getLocalizedHref("/nl/public/particulieren/verzekeren/voertuigverzekeringen/bromfietsverzekering")
        }, {
          text: t('nav.roadsideAssistance'),
          href: getLocalizedHref("/nl/public/particulieren/verzekeren/pechverhelping-bijstand-touring")
        }, {
          text: t('nav.allSolutions'),
          href: getLocalizedHref("/nl/public/particulieren/verzekeren/voertuigverzekeringen")
        }]
      }],
      expertise: {
        title: t('nav.ourExpertise'),
        content: [{
          text: t('nav.familyInsurance'),
          href: getLocalizedHref("/nl/public/particulieren/verzekeren/familiale-verzekeringen/top-familiale")
        }, {
          text: t('nav.homeInsuranceOwner'),
          href: getLocalizedHref("/nl/public/particulieren/verzekeren/brandverzekeringen/eigenaar")
        }, {
          text: t('nav.carInsurance'),
          href: getLocalizedHref("/nl/public/particulieren/verzekeren/voertuigverzekeringen/auto/burgerlijke-aansprakelijkheid")
        }, {
          text: t('nav.allSolutions'),
          href: getLocalizedHref("/nl/public/particulieren/verzekeren")
        }]
      },
      banner: {
        title: "Wist u dat ...",
        subtitle: "",
        description: "u ook kunt verzekeren voor zachte mobiliteit?",
        cta: "Ontdek onze fietsverzekering",
        href: getLocalizedHref("/nl/public/particulieren/verzekeren/voertuigverzekeringen/fietsverzekering")
      }
    }, {
      title: t('nav.byYourSide'),
      sections: [{
        title: t('nav.yourNeeds'),
        links: [{
          text: t('nav.mobility'),
          href: "https://mylife.bnpparibasfortis.be/nl/mobiliteit"
        }, {
          text: t('nav.housing'),
          href: "https://mylife.bnpparibasfortis.be/nl/uw-vastgoedproject"
        }, {
          text: t('nav.budget'),
          href: "https://mylife.bnpparibasfortis.be/nl/budget"
        }, {
          text: t('nav.family'),
          href: "https://mylife.bnpparibasfortis.be/nl/family"
        }, {
          text: t('nav.paymentMethods2'),
          href: "https://mylife.bnpparibasfortis.be/nl/nieuwe-betaalmiddelen"
        }, {
          text: t('nav.studyAbroad'),
          href: "https://mylife.bnpparibasfortis.be/nl/studeren-in-het-buitenland"
        }, {
          text: t('nav.deathNotification'),
          href: getLocalizedHref("/nl/public/particulieren/overlijden")
        }]
      }, {
        title: t('nav.customApproach'),
        links: [{
          text: t('nav.youthBank'),
          href: getLocalizedHref("/nl/public/particulieren/dagelijks-bankieren/bank-voor-jongeren")
        }, {
          text: t('nav.priorityBanking'),
          href: getLocalizedHref("/nl/public/particulieren/dagelijks-bankieren/priority-banking-exclusive")
        }, {
          text: t('nav.expat'),
          href: getLocalizedHref("/nl/public/particulieren/expats")
        }, {
          text: t('nav.bankForEveryone'),
          href: getLocalizedHref("/nl/public/particulieren/toegankelijkheid-bank")
        }]
      }, {
        title: t('nav.onlineMobile'),
        links: [{
          text: t('nav.easyBankingApp'),
          href: getLocalizedHref("/nl/public/particulieren/dagelijks-bankieren/betalingen/easy-banking-app")
        }, {
          text: t('nav.selfBanking'),
          href: getLocalizedHref("/nl/public/particulieren/dagelijks-bankieren/zelf-bankieren")
        }, {
          text: t('nav.budgetManagement'),
          href: getLocalizedHref("/nl/public/particulieren/dagelijks-bankieren/betalingen/easy-banking-app/budgetbeheer-tool")
        }, {
          text: t('nav.easyBankingWeb'),
          href: getLocalizedHref("/nl/public/particulieren/dagelijks-bankieren/betalingen/easy-banking-web")
        }, {
          text: t('nav.contactlessPay'),
          href: getLocalizedHref("/nl/public/particulieren/dagelijks-bankieren/betalingen/mobiel-betalen")
        }, {
          text: t('nav.secureOnline'),
          href: getLocalizedHref("/nl/public/particulieren/dagelijks-bankieren/betalingen/online-veiligheid")
        }]
      }],
      expertise: {
        title: t('nav.contactUs'),
        content: [{
          text: t('nav.damageReport'),
          href: getLocalizedHref("/nl/public/particulieren/verzekeren/schadeaangifte")
        }, {
          text: t('nav.remoteAdvice'),
          href: getLocalizedHref("/nl/public/particulieren/dagelijks-bankieren/onze-diensten")
        }, {
          text: t('nav.videoConsultation'),
          href: getLocalizedHref("/nl/public/particulieren/dagelijks-bankieren/videogesprek")
        }, {
          text: t('nav.expertOnLine'),
          href: getLocalizedHref("/nl/public/particulieren/dagelijks-bankieren/bankadviseur")
        }, {
          text: t('nav.cashNetwork'),
          href: getLocalizedHref("/nl/public/particulieren/dagelijks-bankieren/betalingen/bankautomaat/points-cash")
        }]
      },
      banner: {
        title: "Wist u dat ...",
        subtitle: "",
        description: "u nu kan huren, en later kopen?",
        cta: "Ontdek HappyNest",
        href: getLocalizedHref("/nl/public/particulieren/campagne/happynest")
      }
    }];
  }, [language, t]);
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
                  src={BNPPFlogo} 
                  alt="BNP Paribas Fortis Logo" 
                  className="h-10 w-auto cursor-pointer hover:opacity-80 transition-opacity"
                  width="120"
                  height="40"
                  loading="eager"
                  decoding="async"
                  onClick={() => navigate(getLocalizedUrl(''))}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      navigate(getLocalizedUrl(''));
                    }
                  }}
                />
              </div>
            </div>

            {/* Right side utility items */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              <span className="text-xs xl:text-sm text-gray-600">{t('nav.siteSectionFor')}</span>
              
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
                {t('nav.contactUs')}
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
                    <Input placeholder={t('nav.searchPlaceholder')} className="w-full" onKeyDown={e => {
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
                      <img 
                        src={BNPPFlogo} 
                        alt="BNP Paribas Fortis Logo" 
                        className="h-10 w-auto cursor-pointer hover:opacity-80 transition-opacity" 
                        onClick={() => {
                          navigate(getLocalizedUrl(''));
                          setIsMobileMenuOpen(false);
                        }}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            navigate(getLocalizedUrl(''));
                            setIsMobileMenuOpen(false);
                          }
                        }}
                      />
                    </div>
                    <Button variant="ghost" onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                      <X className="w-6 h-6" />
                    </Button>
                  </div>
                </div>

                {/* Mobile Search */}
                <div className="border-b bg-gray-50 px-3 py-1">
                  <Input placeholder={t('nav.searchPlaceholder')} className="w-full h-8 text-sm" />
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
                          <span className="text-sm">{t('nav.back')}</span>
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
                    {t('nav.buttons.openAccount')}
                  </Button>
                  <Button className="w-full bg-financial-green hover:bg-financial-green/90">
                    {t('nav.buttons.signIn')}
                  </Button>
                  
                  {/* Mobile utility links */}
                  <div className="pt-4 space-y-2 border-t">
                    <div className="text-sm text-gray-600">{t('nav.siteSectionFor')}</div>
                    <select value={selectedSegment} onChange={e => setSelectedSegment(e.target.value)} className="w-full p-2 border border-gray-300 rounded">
                      {segments.map(segment => <option key={segment} value={segment}>{segment}</option>)}
                    </select>
                    <div className="flex space-x-4">
                      <a href="/contact" className="text-sm text-financial-green">{t('nav.contactUs')}</a>
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
                {t('nav.buttons.openAccount')}
              </Button>
              <Button className="bg-financial-green hover:bg-financial-green/90 text-slate-50 bg-emerald-700 hover:bg-emerald-600">
                {t('nav.buttons.signIn')}
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