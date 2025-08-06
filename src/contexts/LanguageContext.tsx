import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'nl' | 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

const translations = {
  nl: {
    // Navigation
    'nav.welcome': 'Welkom bij BNP Paribas Fortis',
    'nav.howCanWeHelp': 'Hoe kunnen we u helpen?',
    'nav.findAnswer': 'Een antwoord vinden',
    'nav.makeAppointment': 'Een afspraak maken',
    'nav.phoneNumber': '02 762 60 00',
    
    // Banners
    'banner.winAirpods.title': 'Win Airpods!',
    'banner.winAirpods.description': 'Open deze zomer een gratis Welcome Pack-betaalrekening voor kinderen en tieners. En maak kans op AirPods!',
    'banner.winAirpods.button': 'Een rekening openen',
    'banner.verification.title': 'Verificatie van de naam van de begunstigde start vanaf 30 juni',
    'banner.verification.description': 'Authomatische extra controle op overschrijvingen via Easy Banking App maakt betalingen nog veiliger, betrouwbaarder en efficienter',
    'banner.verification.button': 'Lees meer',
    'banner.teenager.title': 'Uw tiener leren omgaan met zakgeld?',
    'banner.teenager.description': 'Ontdek hoe andere ouders kijken naar dit topic.',
    'banner.teenager.button': 'Naar het artikel',
    
    // RichText
    'richtext.title': 'Easy Banking App, uw bank binnen handbereik',
    'richtext.description': 'Ontdek alle mogelijkheden van onze Easy Banking App en maak uw bankzaken nog eenvoudiger en veiliger.',
    'richtext.checklist.item1': 'Regel uw bankzaken in alle veiligheid',
    'richtext.checklist.item2': 'Beheer makkelijk uw betaalkaarten',
    'richtext.checklist.item3': 'Hou uw beleggingen in het oog',
    'richtext.checklist.item4': 'Betaal en ontvang geld met Payconiq en Bancontact',
    'richtext.checklist.item5': 'Analyseer uw budget en bespaar geld',
    'richtext.checklist.item6': 'Krijg toegang tot niet-bancaire diensten',
    'richtext.checklist.item7': 'Vereenvoudig uw leven, net als de 2,5 miljoen andere gebruikers',
    'richtext.button': 'Download Easy Banking App',
    
    // TitleWidth
    'titlewidth.label': 'DE BANK VOOR EEN WERELD IN VERANDERING',
    'titlewidth.title': 'En wat als het tijd was om erover te praten?',
    'titlewidth.description': 'Hebt u een project dat u nauw aan het hart ligt? Deel het met ons en laten we er samen alles aan doen om het te realiseren!',
    
    // ProductCards
    'productcard.housing.title': 'Woning',
    'productcard.housing.description': 'Nieuwe woning of renovatieprojecten? Energiebesparend werk in zicht?',
    'productcard.housing.button': 'Meer info',
    'productcard.budget.title': 'Budgetbeheer',
    'productcard.budget.description': 'Woning, auto, voeding, vrije tijd ... hebt u vragen over het beheer van uw gezinsbudget?',
    'productcard.budget.button': 'Meer info',
    'productcard.family.title': 'Familie',
    'productcard.family.description': 'Begint u samen aan een leven, bereidt u zich voor op de komst van uw eerste kind of staat u voor het verlies van een baan?',
    'productcard.family.button': 'Meer info',
    'productcard.mobility.title': 'Mobiliteit',
    'productcard.mobility.description': 'Ieder zijn eigen nieuwe mobiliteit! Hoe navigeert u het beste in onze veranderende samenleving?',
    'productcard.mobility.button': 'Meer info',
  },
  fr: {
    // Navigation
    'nav.welcome': 'Bienvenue chez BNP Paribas Fortis',
    'nav.howCanWeHelp': 'Comment pouvons-nous vous aider ?',
    'nav.findAnswer': 'Trouver une réponse',
    'nav.makeAppointment': 'Prendre un rendez-vous',
    'nav.phoneNumber': '02 762 60 00',
    
    // Banners
    'banner.winAirpods.title': 'Gagnez des Airpods !',
    'banner.winAirpods.description': 'Ouvrez un compte de dépôt Welcome Pack gratuit pour enfants et adolescents cet été. Et courez la chance de gagner des AirPods !',
    'banner.winAirpods.button': 'Ouvrir un compte',
    'banner.verification.title': 'La vérification du nom du bénéficiaire commence le 30 juin',
    'banner.verification.description': 'Le contrôle automatique supplémentaire des virements via l\'Easy Banking App rend les paiements encore plus sûrs, fiables et efficaces',
    'banner.verification.button': 'En savoir plus',
    'banner.teenager.title': 'Apprendre à votre adolescent à gérer son argent de poche ?',
    'banner.teenager.description': 'Découvrez comment d\'autres parents voient ce sujet.',
    'banner.teenager.button': 'Vers l\'article',
    
    // RichText
    'richtext.title': 'Easy Banking App, votre banque à portée de main',
    'richtext.description': 'Découvrez toutes les possibilités de notre Easy Banking App et rendez vos opérations bancaires encore plus simples et sécurisées.',
    'richtext.checklist.item1': 'Gérez vos opérations bancaires en toute sécurité',
    'richtext.checklist.item2': 'Gérez facilement vos cartes de paiement',
    'richtext.checklist.item3': 'Surveillez vos investissements',
    'richtext.checklist.item4': 'Payez et recevez de l\'argent avec Payconiq et Bancontact',
    'richtext.checklist.item5': 'Analysez votre budget et économisez de l\'argent',
    'richtext.checklist.item6': 'Accédez aux services non bancaires',
    'richtext.checklist.item7': 'Simplifiez votre vie, comme les 2,5 millions d\'autres utilisateurs',
    'richtext.button': 'Télécharger Easy Banking App',
    
    // TitleWidth
    'titlewidth.label': 'LA BANQUE POUR UN MONDE EN MUTATION',
    'titlewidth.title': 'Et si c\'était le moment d\'en parler ?',
    'titlewidth.description': 'Avez-vous un projet qui vous tient à cœur ? Partagez-le avec nous et faisons tout ensemble pour le réaliser !',
    
    // ProductCards
    'productcard.housing.title': 'Logement',
    'productcard.housing.description': 'Nouvelle maison ou projets de rénovation ? Travaux d\'économie d\'énergie en vue ?',
    'productcard.housing.button': 'Plus d\'info',
    'productcard.budget.title': 'Gestion budgétaire',
    'productcard.budget.description': 'Logement, voiture, alimentation, loisirs... avez-vous des questions sur la gestion du budget familial ?',
    'productcard.budget.button': 'Plus d\'info',
    'productcard.family.title': 'Famille',
    'productcard.family.description': 'Commencez-vous une vie ensemble, vous préparez-vous à l\'arrivée de votre premier enfant ou faites-vous face à une perte d\'emploi ?',
    'productcard.family.button': 'Plus d\'info',
    'productcard.mobility.title': 'Mobilité',
    'productcard.mobility.description': 'Chacun sa nouvelle mobilité ! Comment naviguez-vous le mieux dans notre société en mutation ?',
    'productcard.mobility.button': 'Plus d\'info',
  },
  en: {
    // Navigation
    'nav.welcome': 'Welcome to BNP Paribas Fortis',
    'nav.howCanWeHelp': 'How can we help you?',
    'nav.findAnswer': 'Find an answer',
    'nav.makeAppointment': 'Make an appointment',
    'nav.phoneNumber': '02 762 60 00',
    
    // Banners
    'banner.winAirpods.title': 'Win Airpods!',
    'banner.winAirpods.description': 'Open a free Welcome Pack current account for children and teenagers this summer. And stand a chance to win AirPods!',
    'banner.winAirpods.button': 'Open an account',
    'banner.verification.title': 'Beneficiary name verification starts from June 30',
    'banner.verification.description': 'Automatic additional control of transfers via Easy Banking App makes payments even safer, more reliable and efficient',
    'banner.verification.button': 'Read more',
    'banner.teenager.title': 'Teaching your teenager to manage pocket money?',
    'banner.teenager.description': 'Discover how other parents view this topic.',
    'banner.teenager.button': 'To the article',
    
    // RichText
    'richtext.title': 'Easy Banking App, your bank at your fingertips',
    'richtext.description': 'Discover all the possibilities of our Easy Banking App and make your banking operations even simpler and more secure.',
    'richtext.checklist.item1': 'Manage your banking operations in complete security',
    'richtext.checklist.item2': 'Easily manage your payment cards',
    'richtext.checklist.item3': 'Keep an eye on your investments',
    'richtext.checklist.item4': 'Pay and receive money with Payconiq and Bancontact',
    'richtext.checklist.item5': 'Analyze your budget and save money',
    'richtext.checklist.item6': 'Access non-banking services',
    'richtext.checklist.item7': 'Simplify your life, like the 2.5 million other users',
    'richtext.button': 'Download Easy Banking App',
    
    // TitleWidth
    'titlewidth.label': 'THE BANK FOR A CHANGING WORLD',
    'titlewidth.title': 'And what if it was time to talk about it?',
    'titlewidth.description': 'Do you have a project that is close to your heart? Share it with us and let\'s do everything together to make it happen!',
    
    // ProductCards
    'productcard.housing.title': 'Housing',
    'productcard.housing.description': 'New home or renovation projects? Energy-saving work in sight?',
    'productcard.housing.button': 'More info',
    'productcard.budget.title': 'Budget management',
    'productcard.budget.description': 'Housing, car, food, leisure... do you have questions about managing your family budget?',
    'productcard.budget.button': 'More info',
    'productcard.family.title': 'Family',
    'productcard.family.description': 'Are you starting a life together, preparing for the arrival of your first child or facing job loss?',
    'productcard.family.button': 'More info',
    'productcard.mobility.title': 'Mobility',
    'productcard.mobility.description': 'Everyone their own new mobility! How do you navigate best in our changing society?',
    'productcard.mobility.button': 'More info',
  },
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('nl');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 