import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'nl' | 'fr' | 'en' | 'pl';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  getLocalizedUrl: (path: string) => string;
  getCurrentLanguageFromUrl: () => Language;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

// Utility function to get language from URL
export const getLanguageFromUrl = (pathname: string): Language => {
  const langMatch = pathname.match(/^\/([a-z]{2})(\/|$)/);
  if (langMatch && ['nl', 'fr', 'en', 'pl'].includes(langMatch[1])) {
    return langMatch[1] as Language;
  }
  return 'en'; // Default to English
};

// Utility function to generate localized URL
export const generateLocalizedUrl = (path: string, language: Language): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // If path already has a language prefix, replace it
  if (/^[a-z]{2}\//.test(cleanPath)) {
    return `/${language}/${cleanPath.slice(3)}`;
  }
  
  // Add language prefix
  return `/${language}/${cleanPath}`;
};

const translations = {
  nl: {
    // Navigation
    'nav.welcome': 'Welkom bij BNP Paribas Fortis',
    'nav.howCanWeHelp': 'Hoe kunnen we u helpen?',
    'nav.findAnswer': 'Een antwoord vinden',
    'nav.makeAppointment': 'Een afspraak maken',
    'nav.phoneNumber': '02 762 60 00',
    
    // Navigation Items
    'nav.dailyBanking': 'Dagelijks bankieren',
    'nav.savingsInvesting': 'Sparen en beleggen',
    'nav.lending': 'Lenen',
    'nav.insurance': 'Verzekeren',
    'nav.byYourSide': 'Aan uw zijde',
    
    // Navigation Sections
    'nav.accounts': 'Rekeningen',
    'nav.cards': 'Bankkaarten',
    'nav.payments': 'Betalen',
    'nav.investing': 'Beleggen',
    'nav.savingsGoals': 'Sparen en beleggen met een doel',
    'nav.investmentSolutions': 'Onze beleggingsoplossingen',
    'nav.realEstate': 'Lenen voor een vastgoedproject',
    'nav.vehicle': 'Lenen voor een voertuig',
    'nav.project': 'Lenen voor een project',
    'nav.familyProtection': 'Beschermen van uw gezin',
    'nav.homeProtection': 'Beschermen van uw woning',
    'nav.mobilityProtection': 'Beschermen van uw mobiliteit',
    'nav.yourNeeds': 'Uw behoeften',
    'nav.customApproach': 'Aanpak op maat',
    'nav.onlineMobile': 'Online en mobiele bank',
    'nav.contactUs': 'Contacteer ons',
    
    // Navigation Links
    'nav.compareAccounts': 'Betaalrekeningen vergelijken',
    'nav.youthAccount': 'Betaalrekening voor jongeren',
    'nav.childrenAccount': 'Betaalrekening voor kinderen',
    'nav.savingsInfo': 'Spaarrekeningen – Algemene info',
    'nav.ourSavings': 'Onze spaarrekeningen',
    'nav.debitCard': 'Bancontact-Visa Debit-debetkaart',
    'nav.compareCards': 'Vergelijk onze kredietkaarten',
    'nav.visaCard': 'Visa kredietkaart',
    'nav.mastercardGold': 'Mastercard Gold kredietkaart',
    'nav.youthCard': 'Kredietkaart voor jongeren',
    'nav.allSolutions': 'Al onze oplossingen',
    'nav.easyBankingApp': 'Met Easy Banking App',
    'nav.easyBankingWeb': 'Met Easy Banking Web',
    'nav.contactlessPay': 'Contactloos betalen',
    'nav.cashNetwork': 'CASH-punten netwerk',
    'nav.abroad': 'In het buitenland',
    'nav.paymentMethods': 'Overschrijven, IBAN, domiciliëring, Zoomit ...',
    'nav.secureOnline': 'Veilig online',
    'nav.ourExpertise': 'Onze expertise',
    'nav.selfBanking': 'Selfbanking met Easy Banking App en Web',
    'nav.paymentSolutions': 'Betaaloplossingen',
    'nav.cardUsage': 'Welke betaalkaart waar en wanneer gebruiken?',
    'nav.remoteAdvice': 'Advies op afstand of face-to-face',
    'nav.investingWithBNP': 'Beleggen met BNP Paribas Fortis',
    'nav.investingBeginners': 'Beleggen voor beginners',
    'nav.investingNoAdvice': 'Beleggen zonder advies',
    'nav.investingWithAdvice': 'Beleggen met advies',
    'nav.pensionSaving': 'Pensioensparen',
    'nav.taxSaving': 'Fiscaal sparen',
    'nav.financialProtection': 'Financieel beschermen van uw dierbaren',
    'nav.monthlyOffer': 'Aanbod van de maand',
    'nav.investmentNews': 'Beleggingsnieuws',
    'nav.savingsAccounts': 'Spaarrekeningen',
    'nav.stocks': 'Aandelen',
    'nav.investmentFunds': 'Beleggingsfondsen',
    'nav.lifeInsurance': 'Financiële levensverzekeringen',
    'nav.certificates': 'Kasbons',
    'nav.bonds': 'Obligaties',
    'nav.structuredProducts': 'Gestructureerde producten',
    'nav.mortgageCredit': 'Hypothecair krediet',
    'nav.energyLoan': 'Energielening',
    'nav.renovationLoan': 'Renovatielening',
    'nav.bridgingCredit': 'Overbruggingskrediet',
    'nav.newVehicleLoan': 'Lening op afbetaling voor een nieuw voertuig',
    'nav.usedVehicleLoan': 'Lening op afbetaling voor een tweedehands voertuig',
    'nav.bikeLoan': 'Lening op afbetaling voor een fiets en zachte mobiliteit',
    'nav.privateLease': 'Private lease',
    'nav.personalLoan': 'Persoonlijke lening - Lening op afbetaling',
    'nav.creditOpening': 'Kredietopening',
    'nav.familyInsurance': 'Familiale verzekering',
    'nav.legalAssistance': 'Globale rechtsbijstand',
    'nav.hospitalization': 'Hospitalisatieverzekering',
    'nav.accidentInsurance': 'Ongevallenverzekering',
    'nav.travelInsurance': 'Reisverzekering',
    'nav.lifeDeathInsurance': 'Levens- en overlijdensverzekeringen',
    'nav.homeInsuranceOwner': 'Woningverzekering eigenaar',
    'nav.homeInsuranceTenant': 'Woningverzekering huurder',
    'nav.homeInsuranceLandlord': 'Woningverzekering verhuurder',
    'nav.theftInsurance': 'Diefstalverzekering',
    'nav.homiris': 'Homiris telebewaking',
    'nav.legalAssistanceInsurance': 'Rechtsbijstandsverzekering',
    'nav.carInsurance': 'Autoverzekering',
    'nav.carOmnium': 'Omniumverzekering auto',
    'nav.carLegalAssistance': 'Rechtsbijstandsverzekering auto',
    'nav.bikeInsurance': 'Fietsverzekering en zachte mobiliteit',
    'nav.motorcycleInsurance': 'Motorverzekeringen',
    'nav.mopedInsurance': 'Bromfietsverzekeringen',
    'nav.roadsideAssistance': 'Pechverhelping',
    'nav.mobility': 'Mobiliteit',
    'nav.housing': 'Wonen',
    'nav.budget': 'Budget',
    'nav.family': 'Gezin',
    'nav.paymentMethods2': 'Betaalmiddelen',
    'nav.studyAbroad': 'Studeren in het buitenland',
    'nav.deathNotification': 'Een overlijden aangeven',
    'nav.youthBank': 'De bank voor jongeren',
    'nav.priorityBanking': 'Priority Banking Exclusive',
    'nav.expat': 'Expat in België',
    'nav.bankForEveryone': 'Bank voor iedereen',
    'nav.budgetManagement': 'Beheer uw budget met Easy Banking App',
    'nav.damageReport': 'Aangifte van een schadegeval',
    'nav.videoConsultation': 'Uw adviseurs via videogesprek',
    'nav.expertOnLine': 'Een expert aan de lijn',
    
    // Navigation UI
    'nav.siteSectionFor': 'Deze sectie van de site is voor',
    'nav.searchPlaceholder': 'Wat zoekt u?',
    'nav.back': 'Terug',
    
    // Segments (Target Audience)
    'nav.segments.particulieren': 'Particulieren',
    'nav.segments.ondernemingen': 'Ondernemingen',
    'nav.segments.privateBanking': 'Private Banking',
    
    // Navigation Buttons
    'nav.buttons.openAccount': 'Open een rekening',
    'nav.buttons.signIn': 'Aanmelden',
    
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
    
    // Navigation Items
    'nav.dailyBanking': 'Banque au quotidien',
    'nav.savingsInvesting': 'Épargne et investissement',
    'nav.lending': 'Emprunter',
    'nav.insurance': 'Assurer',
    'nav.byYourSide': 'À vos côtés',
    
    // Navigation Sections
    'nav.accounts': 'Comptes',
    'nav.cards': 'Cartes bancaires',
    'nav.payments': 'Paiements',
    'nav.investing': 'Investir',
    'nav.savingsGoals': 'Épargner et investir avec un objectif',
    'nav.investmentSolutions': 'Nos solutions d\'investissement',
    'nav.realEstate': 'Emprunter pour un projet immobilier',
    'nav.vehicle': 'Emprunter pour un véhicule',
    'nav.project': 'Emprunter pour un projet',
    'nav.familyProtection': 'Protéger votre famille',
    'nav.homeProtection': 'Protéger votre logement',
    'nav.mobilityProtection': 'Protéger votre mobilité',
    'nav.yourNeeds': 'Vos besoins',
    'nav.customApproach': 'Approche sur mesure',
    'nav.onlineMobile': 'Banque en ligne et mobile',
    'nav.contactUs': 'Contactez-nous',
    
    // Navigation Links
    'nav.compareAccounts': 'Comparer les comptes de paiement',
    'nav.youthAccount': 'Compte de paiement pour jeunes',
    'nav.childrenAccount': 'Compte de paiement pour enfants',
    'nav.savingsInfo': 'Comptes d\'épargne – Informations générales',
    'nav.ourSavings': 'Nos comptes d\'épargne',
    'nav.debitCard': 'Carte de débit Bancontact-Visa',
    'nav.compareCards': 'Comparer nos cartes de crédit',
    'nav.visaCard': 'Carte de crédit Visa',
    'nav.mastercardGold': 'Carte de crédit Mastercard Gold',
    'nav.youthCard': 'Carte de crédit pour jeunes',
    'nav.allSolutions': 'Toutes nos solutions',
    'nav.easyBankingApp': 'Avec Easy Banking App',
    'nav.easyBankingWeb': 'Avec Easy Banking Web',
    'nav.contactlessPay': 'Paiement sans contact',
    'nav.cashNetwork': 'Réseau CASH-points',
    'nav.abroad': 'À l\'étranger',
    'nav.paymentMethods': 'Virements, IBAN, domiciliation, Zoomit ...',
    'nav.secureOnline': 'Sécurité en ligne',
    'nav.ourExpertise': 'Notre expertise',
    'nav.selfBanking': 'Selfbanking avec Easy Banking App et Web',
    'nav.paymentSolutions': 'Solutions de paiement',
    'nav.cardUsage': 'Quelle carte de paiement où et quand utiliser ?',
    'nav.remoteAdvice': 'Conseil à distance ou en face à face',
    'nav.investingWithBNP': 'Investir avec BNP Paribas Fortis',
    'nav.investingBeginners': 'Investir pour débutants',
    'nav.investingNoAdvice': 'Investir sans conseil',
    'nav.investingWithAdvice': 'Investir avec conseil',
    'nav.pensionSaving': 'Épargne-pension',
    'nav.taxSaving': 'Épargne fiscale',
    'nav.financialProtection': 'Protection financière de vos proches',
    'nav.monthlyOffer': 'Offre du mois',
    'nav.investmentNews': 'Actualités d\'investissement',
    'nav.savingsAccounts': 'Comptes d\'épargne',
    'nav.stocks': 'Actions',
    'nav.investmentFunds': 'Fonds d\'investissement',
    'nav.lifeInsurance': 'Assurances-vie financières',
    'nav.certificates': 'Certificats de dépôt',
    'nav.bonds': 'Obligations',
    'nav.structuredProducts': 'Produits structurés',
    'nav.mortgageCredit': 'Crédit hypothécaire',
    'nav.energyLoan': 'Prêt énergie',
    'nav.renovationLoan': 'Prêt rénovation',
    'nav.bridgingCredit': 'Crédit relais',
    'nav.newVehicleLoan': 'Prêt à tempérament pour un véhicule neuf',
    'nav.usedVehicleLoan': 'Prêt à tempérament pour un véhicule d\'occasion',
    'nav.bikeLoan': 'Prêt à tempérament pour un vélo et mobilité douce',
    'nav.privateLease': 'Location privée',
    'nav.personalLoan': 'Prêt personnel - Prêt à tempérament',
    'nav.creditOpening': 'Ouverture de crédit',
    'nav.familyInsurance': 'Assurance familiale',
    'nav.legalAssistance': 'Assistance juridique globale',
    'nav.hospitalization': 'Assurance hospitalisation',
    'nav.accidentInsurance': 'Assurance accidents',
    'nav.travelInsurance': 'Assurance voyage',
    'nav.lifeDeathInsurance': 'Assurances vie et décès',
    'nav.homeInsuranceOwner': 'Assurance habitation propriétaire',
    'nav.homeInsuranceTenant': 'Assurance habitation locataire',
    'nav.homeInsuranceLandlord': 'Assurance habitation bailleur',
    'nav.theftInsurance': 'Assurance vol',
    'nav.homiris': 'Télésurveillance Homiris',
    'nav.legalAssistanceInsurance': 'Assurance assistance juridique',
    'nav.carInsurance': 'Assurance auto',
    'nav.carOmnium': 'Assurance omnium auto',
    'nav.carLegalAssistance': 'Assurance assistance juridique auto',
    'nav.bikeInsurance': 'Assurance vélo et mobilité douce',
    'nav.motorcycleInsurance': 'Assurances moto',
    'nav.mopedInsurance': 'Assurances cyclomoteur',
    'nav.roadsideAssistance': 'Assistance dépannage',
    'nav.mobility': 'Mobilité',
    'nav.housing': 'Logement',
    'nav.budget': 'Budget',
    'nav.family': 'Famille',
    'nav.paymentMethods2': 'Moyens de paiement',
    'nav.studyAbroad': 'Étudier à l\'étranger',
    'nav.deathNotification': 'Déclarer un décès',
    'nav.youthBank': 'La banque pour jeunes',
    'nav.priorityBanking': 'Priority Banking Exclusive',
    'nav.expat': 'Expatrié en Belgique',
    'nav.bankForEveryone': 'Banque pour tous',
    'nav.budgetManagement': 'Gérez votre budget avec Easy Banking App',
    'nav.damageReport': 'Déclaration de sinistre',
    'nav.videoConsultation': 'Vos conseillers via vidéoconsultation',
    'nav.expertOnLine': 'Un expert au téléphone',
    
    // Navigation UI
    'nav.siteSectionFor': 'Cette section du site est pour',
    'nav.searchPlaceholder': 'Que cherchez-vous ?',
    'nav.back': 'Retour',
    
    // Segments (Target Audience)
    'nav.segments.particulieren': 'Particuliers',
    'nav.segments.ondernemingen': 'Entreprises',
    'nav.segments.privateBanking': 'Banque Privée',
    
    // Navigation Buttons
    'nav.buttons.openAccount': 'Ouvrir un compte',
    'nav.buttons.signIn': 'Se connecter',
    
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
    
    // Navigation Items
    'nav.dailyBanking': 'Daily banking',
    'nav.savingsInvesting': 'Savings and investing',
    'nav.lending': 'Borrowing',
    'nav.insurance': 'Insurance',
    'nav.byYourSide': 'By your side',
    
    // Navigation Sections
    'nav.accounts': 'Accounts',
    'nav.cards': 'Bank cards',
    'nav.payments': 'Payments',
    'nav.investing': 'Investing',
    'nav.savingsGoals': 'Saving and investing with a goal',
    'nav.investmentSolutions': 'Our investment solutions',
    'nav.realEstate': 'Borrowing for a real estate project',
    'nav.vehicle': 'Borrowing for a vehicle',
    'nav.project': 'Borrowing for a project',
    'nav.familyProtection': 'Protecting your family',
    'nav.homeProtection': 'Protecting your home',
    'nav.mobilityProtection': 'Protecting your mobility',
    'nav.yourNeeds': 'Your needs',
    'nav.customApproach': 'Custom approach',
    'nav.onlineMobile': 'Online and mobile banking',
    'nav.contactUs': 'Contact us',
    
    // Navigation Links
    'nav.compareAccounts': 'Compare current accounts',
    'nav.youthAccount': 'Current account for young people',
    'nav.childrenAccount': 'Current account for children',
    'nav.savingsInfo': 'Savings accounts – General information',
    'nav.ourSavings': 'Our savings accounts',
    'nav.debitCard': 'Bancontact-Visa Debit card',
    'nav.compareCards': 'Compare our credit cards',
    'nav.visaCard': 'Visa credit card',
    'nav.mastercardGold': 'Mastercard Gold credit card',
    'nav.youthCard': 'Credit card for young people',
    'nav.allSolutions': 'All our solutions',
    'nav.easyBankingApp': 'With Easy Banking App',
    'nav.easyBankingWeb': 'With Easy Banking Web',
    'nav.contactlessPay': 'Contactless payment',
    'nav.cashNetwork': 'CASH-points network',
    'nav.abroad': 'Abroad',
    'nav.paymentMethods': 'Transfers, IBAN, direct debit, Zoomit ...',
    'nav.secureOnline': 'Secure online',
    'nav.ourExpertise': 'Our expertise',
    'nav.selfBanking': 'Self-banking with Easy Banking App and Web',
    'nav.paymentSolutions': 'Payment solutions',
    'nav.cardUsage': 'Which payment card where and when to use?',
    'nav.remoteAdvice': 'Remote or face-to-face advice',
    'nav.investingWithBNP': 'Investing with BNP Paribas Fortis',
    'nav.investingBeginners': 'Investing for beginners',
    'nav.investingNoAdvice': 'Investing without advice',
    'nav.investingWithAdvice': 'Investing with advice',
    'nav.pensionSaving': 'Pension saving',
    'nav.taxSaving': 'Tax saving',
    'nav.financialProtection': 'Financial protection of your loved ones',
    'nav.monthlyOffer': 'Monthly offer',
    'nav.investmentNews': 'Investment news',
    'nav.savingsAccounts': 'Savings accounts',
    'nav.stocks': 'Stocks',
    'nav.investmentFunds': 'Investment funds',
    'nav.lifeInsurance': 'Financial life insurance',
    'nav.certificates': 'Deposit certificates',
    'nav.bonds': 'Bonds',
    'nav.structuredProducts': 'Structured products',
    'nav.mortgageCredit': 'Mortgage credit',
    'nav.energyLoan': 'Energy loan',
    'nav.renovationLoan': 'Renovation loan',
    'nav.bridgingCredit': 'Bridging credit',
    'nav.newVehicleLoan': 'Installment loan for a new vehicle',
    'nav.usedVehicleLoan': 'Installment loan for a used vehicle',
    'nav.bikeLoan': 'Installment loan for a bike and soft mobility',
    'nav.privateLease': 'Private lease',
    'nav.personalLoan': 'Personal loan - Installment loan',
    'nav.creditOpening': 'Credit opening',
    'nav.familyInsurance': 'Family insurance',
    'nav.legalAssistance': 'Global legal assistance',
    'nav.hospitalization': 'Hospitalization insurance',
    'nav.accidentInsurance': 'Accident insurance',
    'nav.travelInsurance': 'Travel insurance',
    'nav.lifeDeathInsurance': 'Life and death insurance',
    'nav.homeInsuranceOwner': 'Home insurance owner',
    'nav.homeInsuranceTenant': 'Home insurance tenant',
    'nav.homeInsuranceLandlord': 'Home insurance landlord',
    'nav.theftInsurance': 'Theft insurance',
    'nav.homiris': 'Homiris monitoring',
    'nav.legalAssistanceInsurance': 'Legal assistance insurance',
    'nav.carInsurance': 'Car insurance',
    'nav.carOmnium': 'Car omnium insurance',
    'nav.carLegalAssistance': 'Car legal assistance insurance',
    'nav.bikeInsurance': 'Bike insurance and soft mobility',
    'nav.motorcycleInsurance': 'Motorcycle insurance',
    'nav.mopedInsurance': 'Moped insurance',
    'nav.roadsideAssistance': 'Roadside assistance',
    'nav.mobility': 'Mobility',
    'nav.housing': 'Housing',
    'nav.budget': 'Budget',
    'nav.family': 'Family',
    'nav.paymentMethods2': 'Payment methods',
    'nav.studyAbroad': 'Study abroad',
    'nav.deathNotification': 'Report a death',
    'nav.youthBank': 'The bank for young people',
    'nav.priorityBanking': 'Priority Banking Exclusive',
    'nav.expat': 'Expat in Belgium',
    'nav.bankForEveryone': 'Bank for everyone',
    'nav.budgetManagement': 'Manage your budget with Easy Banking App',
    'nav.damageReport': 'Damage report',
    'nav.videoConsultation': 'Your advisors via video consultation',
    'nav.expertOnLine': 'An expert on the line',
    
    // Navigation UI
    'nav.siteSectionFor': 'This section of the site is for',
    'nav.searchPlaceholder': 'What are you looking for?',
    'nav.back': 'Back',
    
    // Segments (Target Audience)
    'nav.segments.particulieren': 'Individuals',
    'nav.segments.ondernemingen': 'Businesses',
    'nav.segments.privateBanking': 'Private Banking',
    
    // Navigation Buttons
    'nav.buttons.openAccount': 'Open an account',
    'nav.buttons.signIn': 'Sign in',
    
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
  pl: {
    // Navigation
    'nav.welcome': 'Witamy w BNP Paribas Fortis',
    'nav.howCanWeHelp': 'Jak możemy Ci pomóc?',
    'nav.findAnswer': 'Znajdź odpowiedź',
    'nav.makeAppointment': 'Umów wizytę',
    'nav.phoneNumber': '02 762 60 00',
    
    // Navigation Items
    'nav.dailyBanking': 'Bankowość codzienna',
    'nav.savingsInvesting': 'Oszczędności i inwestycje',
    'nav.lending': 'Pożyczanie',
    'nav.insurance': 'Ubezpieczenia',
    'nav.byYourSide': 'U Twojego boku',
    
    // Navigation Sections
    'nav.accounts': 'Konta',
    'nav.cards': 'Karty bankowe',
    'nav.payments': 'Płatności',
    'nav.investing': 'Inwestowanie',
    'nav.savingsGoals': 'Oszczędzanie i inwestowanie z celem',
    'nav.investmentSolutions': 'Nasze rozwiązania inwestycyjne',
    'nav.realEstate': 'Pożyczanie na projekt nieruchomości',
    'nav.vehicle': 'Pożyczanie na pojazd',
    'nav.project': 'Pożyczanie na projekt',
    'nav.familyProtection': 'Ochrona Twojej rodziny',
    'nav.homeProtection': 'Ochrona Twojego domu',
    'nav.mobilityProtection': 'Ochrona Twojej mobilności',
    'nav.yourNeeds': 'Twoje potrzeby',
    'nav.customApproach': 'Podejście na miarę',
    'nav.onlineMobile': 'Bankowość online i mobilna',
    'nav.contactUs': 'Skontaktuj się z nami',
    
    // Navigation Links
    'nav.compareAccounts': 'Porównaj konta osobiste',
    'nav.youthAccount': 'Konto osobiste dla młodych',
    'nav.childrenAccount': 'Konto osobiste dla dzieci',
    'nav.savingsInfo': 'Konta oszczędnościowe – Informacje ogólne',
    'nav.ourSavings': 'Nasze konta oszczędnościowe',
    'nav.debitCard': 'Karta debetowa Bancontact-Visa',
    'nav.compareCards': 'Porównaj nasze karty kredytowe',
    'nav.visaCard': 'Karta kredytowa Visa',
    'nav.mastercardGold': 'Karta kredytowa Mastercard Gold',
    'nav.youthCard': 'Karta kredytowa dla młodych',
    'nav.allSolutions': 'Wszystkie nasze rozwiązania',
    'nav.easyBankingApp': 'Z Easy Banking App',
    'nav.easyBankingWeb': 'Z Easy Banking Web',
    'nav.contactlessPay': 'Płatność bezgotówkowa',
    'nav.cashNetwork': 'Sieć punktów CASH',
    'nav.abroad': 'Za granicą',
    'nav.paymentMethods': 'Przelewy, IBAN, domicylowanie, Zoomit ...',
    'nav.secureOnline': 'Bezpieczeństwo online',
    'nav.ourExpertise': 'Nasza ekspertyza',
    'nav.selfBanking': 'Self-banking z Easy Banking App i Web',
    'nav.paymentSolutions': 'Rozwiązania płatnicze',
    'nav.cardUsage': 'Którą kartę płatniczą gdzie i kiedy używać?',
    'nav.remoteAdvice': 'Rada zdalna lub twarzą w twarz',
    'nav.investingWithBNP': 'Inwestowanie z BNP Paribas Fortis',
    'nav.investingBeginners': 'Inwestowanie dla początkujących',
    'nav.investingNoAdvice': 'Inwestowanie bez porady',
    'nav.investingWithAdvice': 'Inwestowanie z poradą',
    'nav.pensionSaving': 'Oszczędzanie emerytalne',
    'nav.taxSaving': 'Oszczędzanie podatkowe',
    'nav.financialProtection': 'Ochrona finansowa Twoich bliskich',
    'nav.monthlyOffer': 'Oferta miesiąca',
    'nav.investmentNews': 'Wiadomości inwestycyjne',
    'nav.savingsAccounts': 'Konta oszczędnościowe',
    'nav.stocks': 'Akcje',
    'nav.investmentFunds': 'Fundusze inwestycyjne',
    'nav.lifeInsurance': 'Ubezpieczenia na życie finansowe',
    'nav.certificates': 'Certyfikaty depozytowe',
    'nav.bonds': 'Obligacje',
    'nav.structuredProducts': 'Produkty strukturyzowane',
    'nav.mortgageCredit': 'Kredyt hipoteczny',
    'nav.energyLoan': 'Pożyczka energetyczna',
    'nav.renovationLoan': 'Pożyczka remontowa',
    'nav.bridgingCredit': 'Kredyt pomostowy',
    'nav.newVehicleLoan': 'Pożyczka ratalna na nowy pojazd',
    'nav.usedVehicleLoan': 'Pożyczka ratalna na używany pojazd',
    'nav.bikeLoan': 'Pożyczka ratalna na rower i mobilność miękka',
    'nav.privateLease': 'Leasing prywatny',
    'nav.personalLoan': 'Pożyczka osobista - Pożyczka ratalna',
    'nav.creditOpening': 'Otwarcie kredytu',
    'nav.familyInsurance': 'Ubezpieczenie rodzinne',
    'nav.legalAssistance': 'Globalna pomoc prawna',
    'nav.hospitalization': 'Ubezpieczenie hospitalizacji',
    'nav.accidentInsurance': 'Ubezpieczenie od wypadków',
    'nav.travelInsurance': 'Ubezpieczenie podróżne',
    'nav.lifeDeathInsurance': 'Ubezpieczenia na życie i śmierć',
    'nav.homeInsuranceOwner': 'Ubezpieczenie domu właściciela',
    'nav.homeInsuranceTenant': 'Ubezpieczenie domu najemcy',
    'nav.homeInsuranceLandlord': 'Ubezpieczenie domu wynajmującego',
    'nav.theftInsurance': 'Ubezpieczenie od kradzieży',
    'nav.homiris': 'Monitoring Homiris',
    'nav.legalAssistanceInsurance': 'Ubezpieczenie pomocy prawnej',
    'nav.carInsurance': 'Ubezpieczenie samochodu',
    'nav.carOmnium': 'Ubezpieczenie omnium samochodu',
    'nav.carLegalAssistance': 'Ubezpieczenie pomocy prawnej samochodu',
    'nav.bikeInsurance': 'Ubezpieczenie roweru i mobilności miękkiej',
    'nav.motorcycleInsurance': 'Ubezpieczenie motocykla',
    'nav.mopedInsurance': 'Ubezpieczenie motoroweru',
    'nav.roadsideAssistance': 'Pomoc drogowa',
    'nav.mobility': 'Mobilność',
    'nav.housing': 'Mieszkanie',
    'nav.budget': 'Budżet',
    'nav.family': 'Rodzina',
    'nav.paymentMethods2': 'Metody płatności',
    'nav.studyAbroad': 'Studia za granicą',
    'nav.deathNotification': 'Zgłoś śmierć',
    'nav.youthBank': 'Bank dla młodych',
    'nav.priorityBanking': 'Priority Banking Exclusive',
    'nav.expat': 'Ekspat w Belgii',
    'nav.bankForEveryone': 'Bank dla wszystkich',
    'nav.budgetManagement': 'Zarządzaj swoim budżetem z Easy Banking App',
    'nav.damageReport': 'Zgłoszenie szkody',
    'nav.videoConsultation': 'Twoi doradcy przez konsultację wideo',
    'nav.expertOnLine': 'Ekspert na linii',
    
    // Navigation UI
    'nav.siteSectionFor': 'Ta sekcja strony jest dla',
    'nav.searchPlaceholder': 'Czego szukasz?',
    'nav.back': 'Wstecz',
    
    // Segments (Target Audience)
    'nav.segments.particulieren': 'Osoby fizyczne',
    'nav.segments.ondernemingen': 'Przedsiębiorstwa',
    'nav.segments.privateBanking': 'Bankowość prywatna',
    
    // Navigation Buttons
    'nav.buttons.openAccount': 'Otwórz konto',
    'nav.buttons.signIn': 'Zaloguj się',
    
    // Banners
    'banner.winAirpods.title': 'Wygraj Airpods!',
    'banner.winAirpods.description': 'Otwórz bezpłatne konto osobiste Welcome Pack dla dzieci i nastolatków tego lata. I miej szansę wygrać AirPods!',
    'banner.winAirpods.button': 'Otwórz konto',
    'banner.verification.title': 'Weryfikacja nazwiska beneficjenta rozpoczyna się od 30 czerwca',
    'banner.verification.description': 'Automatyczna dodatkowa kontrola przelewów przez Easy Banking App sprawia, że płatności są jeszcze bezpieczniejsze, bardziej niezawodne i wydajne',
    'banner.verification.button': 'Czytaj więcej',
    'banner.teenager.title': 'Uczysz swojego nastolatka zarządzać kieszonkowym?',
    'banner.teenager.description': 'Odkryj, jak inni rodzice patrzą na ten temat.',
    'banner.teenager.button': 'Do artykułu',
    
    // RichText
    'richtext.title': 'Easy Banking App, Twój bank na wyciągnięcie ręki',
    'richtext.description': 'Odkryj wszystkie możliwości naszej Easy Banking App i spraw, aby Twoje operacje bankowe były jeszcze prostsze i bezpieczniejsze.',
    'richtext.checklist.item1': 'Zarządzaj swoimi operacjami bankowymi w pełnym bezpieczeństwie',
    'richtext.checklist.item2': 'Łatwo zarządzaj swoimi kartami płatniczymi',
    'richtext.checklist.item3': 'Miej oko na swoje inwestycje',
    'richtext.checklist.item4': 'Płać i otrzymuj pieniądze z Payconiq i Bancontact',
    'richtext.checklist.item5': 'Analizuj swój budżet i oszczędzaj pieniądze',
    'richtext.checklist.item6': 'Uzyskaj dostęp do usług niebankowych',
    'richtext.checklist.item7': 'Uprość swoje życie, jak 2,5 miliona innych użytkowników',
    'richtext.button': 'Pobierz Easy Banking App',
    
    // TitleWidth
    'titlewidth.label': 'BANK DLA ZMIENIAJĄCEGO SIĘ ŚWIATA',
    'titlewidth.title': 'A co jeśli nadszedł czas, aby o tym porozmawiać?',
    'titlewidth.description': 'Masz projekt, który leży Ci na sercu? Podziel się nim z nami i zróbmy wszystko razem, aby się spełnił!',
    
    // ProductCards
    'productcard.housing.title': 'Mieszkanie',
    'productcard.housing.description': 'Nowy dom lub projekty renowacyjne? Prace oszczędzające energię w zasięgu wzroku?',
    'productcard.housing.button': 'Więcej informacji',
    'productcard.budget.title': 'Zarządzanie budżetem',
    'productcard.budget.description': 'Mieszkanie, samochód, jedzenie, rozrywka... masz pytania dotyczące zarządzania budżetem rodzinnym?',
    'productcard.budget.button': 'Więcej informacji',
    'productcard.family.title': 'Rodzina',
    'productcard.family.description': 'Rozpoczynasz wspólne życie, przygotowujesz się na przybycie pierwszego dziecka lub stajesz przed utratą pracy?',
    'productcard.family.button': 'Więcej informacji',
    'productcard.mobility.title': 'Mobilność',
    'productcard.mobility.description': 'Każdy swoja nowa mobilność! Jak najlepiej nawigujesz w naszej zmieniającej się społeczeństwie?',
    'productcard.mobility.button': 'Więcej informacji',
  },
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('nl');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  const getLocalizedUrl = (path: string): string => {
    return generateLocalizedUrl(path, language);
  };

  const getCurrentLanguageFromUrl = (): Language => {
    if (typeof window !== 'undefined') {
      return getLanguageFromUrl(window.location.pathname);
    }
    return language;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getLocalizedUrl, getCurrentLanguageFromUrl }}>
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