import BNPNavigation from "@/components/BNPNavigation";
import bankingAppImage from "@/assets/banking-app-phone.jpg";
import TitleWidth from "@/components/TitleWidth";
import { MultiPurposeGrid } from "@/components/MultiPurpose";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <BNPNavigation />
      
      {/* Main Content */}
      <main className="space-y-12 py-8">
        {/* Banking Categories - Main Navigation Content */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            
            {/* Dagelijks bankieren */}
            <div className="space-y-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <img 
                    src="https://www.bnpparibasfortis.be/public/ebw/media/Illustrations/AccountsPacks_HandWithGraph/BNPPF.svg"
                    alt="Rekeningen illustratie"
                    className="w-full h-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h2 className="text-xl font-bold text-foreground mb-6">Dagelijks bankieren</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-3">Rekeningen</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Betaalrekeningen vergelijken</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Betaalrekening voor jongeren</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Betaalrekening voor kinderen</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Spaarrekeningen – Algemene info</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Onze spaarrekeningen</a></li>
                  </ul>
                </div>
                
                <div>
                  <div className="w-12 h-12 mb-3 flex items-center justify-center">
                    <img 
                      src="https://www.bnpparibasfortis.be/public/ebw/media/Illustrations/Cards/BNPPF.svg"
                      alt="Bankkaarten illustratie"
                      className="w-full h-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-3">Bankkaarten</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Bancontact-Visa Debit-debetkaart</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Vergelijk onze kredietkaarten</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Visa kredietkaart</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Mastercard Gold kredietkaart</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Kredietkaart voor jongeren</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Al onze oplossingen</a></li>
                  </ul>
                </div>
                
                <div>
                  <div className="w-12 h-12 mb-3 flex items-center justify-center">
                    <img 
                      src="https://www.bnpparibasfortis.be/public/ebw/media/Illustrations/ApplePay/BNPPF.svg"
                      alt="Betalen illustratie"
                      className="w-full h-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-3">Betalen</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Met Easy Banking App</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Met Easy Banking Web</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contactloos betalen</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">CASH-punten netwerk</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">In het buitenland</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Overschrijven, IBAN, domiciliëring, Zoomit ...</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Veilig online</a></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-3">Onze expertise</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Selfbanking met Easy Banking App en Web</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Betaaloplossingen</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Welke betaalkaart waar en wanneer gebruiken?</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Advies op afstand of face-to-face</a></li>
                  </ul>
                </div>
                
                <div className="bg-primary text-primary-foreground p-4 rounded-lg">
                  <div className="mb-3">
                    <img 
                      src="https://www.bnpparibasfortis.be/public/ebw/media/images/R2/easy-banking-app-2.jpg"
                      alt="Easy Banking App"
                      className="w-full h-20 object-cover rounded"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h4 className="text-xs font-bold tracking-wide uppercase mb-2">Wist u dat ...</h4>
                  <p className="text-sm mb-3">Easy Banking App, eenmaal gebruiken en u bent verkocht</p>
                  <a href="#" className="text-sm underline hover:no-underline">Download Easy Banking App</a>
                </div>
              </div>
            </div>
            
            {/* Sparen en beleggen */}
            <div className="space-y-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <img 
                    src="https://www.bnpparibasfortis.be/public/ebw/media/Illustrations/PhoneInvestGraph/BNPPF.svg"
                    alt="Sparen en beleggen illustratie"
                    className="w-full h-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h2 className="text-xl font-bold text-foreground mb-6">Sparen en beleggen</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-3">Beleggen</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Beleggen met BNP Paribas Fortis</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Beleggen voor beginners</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Beleggen zonder advies</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Beleggen met advies</a></li>
                  </ul>
                </div>
                
                <div>
                  <div className="w-12 h-12 mb-3 flex items-center justify-center">
                    <img 
                      src="https://www.bnpparibasfortis.be/public/ebw/media/Illustrations/SavingPurpose_HandWithPlant/BNPPF.svg"
                      alt="Sparen met doel illustratie"
                      className="w-full h-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-3">Sparen en beleggen met een doel</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Pensioensparen</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Fiscaal sparen</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Financieel beschermen van uw dierbaren</a></li>
                  </ul>
                </div>
                
                <div>
                  <div className="w-12 h-12 mb-3 flex items-center justify-center">
                    <img 
                      src="https://www.bnpparibasfortis.be/public/ebw/media/Illustrations/Invest_PhoneMonitorGraphs/BNPPF.svg"
                      alt="Beleggingsoplossingen illustratie"
                      className="w-full h-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-3">Onze beleggingsoplossingen</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Aanbod van de maand</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Beleggingsnieuws</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Spaarrekeningen</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Aandelen</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Beleggingsfondsen</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Financiële levensverzekeringen</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Kasbons</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Obligaties</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Gestructureerde producten</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Al onze oplossingen</a></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-3">Onze expertise</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Beginnen sparen of beleggen?</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Sparen voor uw pensioen : wat moet u weten?</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Expertise via Private Banking</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Priority Banking Exclusive</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Advies op afstand of face-to-face</a></li>
                  </ul>
                </div>
                
                <div className="bg-primary text-primary-foreground p-4 rounded-lg">
                  <div className="mb-3">
                    <img 
                      src="https://www.bnpparibasfortis.be/public/ebw/media/images/R2/actualite-financiere4.jpg"
                      alt="Financiële actualiteit"
                      className="w-full h-20 object-cover rounded"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h4 className="text-xs font-bold tracking-wide uppercase mb-2">Wist u dat ...</h4>
                  <p className="text-sm mb-3">u de financiële actualiteit kan volgen?</p>
                  <a href="#" className="text-sm underline hover:no-underline">Volg het beleggingsnieuws op de voet</a>
                </div>
              </div>
            </div>
            
            {/* Lenen */}
            <div className="space-y-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <img 
                    src="https://www.bnpparibasfortis.be/public/ebw/media/Illustrations/HouseProject/BNPPF.svg"
                    alt="Lenen illustratie"
                    className="w-full h-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h2 className="text-xl font-bold text-foreground mb-2">Lenen</h2>
                <a href="#" className="text-sm text-primary hover:underline">Onze financieringsmogelijkheden</a>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-3">Lenen voor een vastgoedproject</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Hypothecair krediet</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Energielening</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Renovatielening</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Overbruggingskrediet</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Al onze oplossingen</a></li>
                  </ul>
                </div>
                
                <div>
                  <div className="w-12 h-12 mb-3 flex items-center justify-center">
                    <img 
                      src="https://www.bnpparibasfortis.be/public/ebw/media/Illustrations/CamperVanCarTruck/BNPPF.svg"
                      alt="Voertuig lening illustratie"
                      className="w-full h-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-3">Lenen voor een voertuig</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Lening op afbetaling voor een nieuw voertuig</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Lening op afbetaling voor een tweedehands voertuig</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Lening op afbetaling voor een fiets en zachte mobiliteit</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Private lease</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Al onze oplossingen</a></li>
                  </ul>
                </div>
                
                <div>
                  <div className="w-12 h-12 mb-3 flex items-center justify-center">
                    <img 
                      src="https://www.bnpparibasfortis.be/public/ebw/media/Illustrations/Dreams_PresentPalmtreeSofaRingInCloud/BNPPF.svg"
                      alt="Project lening illustratie"
                      className="w-full h-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-3">Lenen voor een project</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Persoonlijke lening - Lening op afbetaling</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Kredietopening</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Al onze oplossingen</a></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-3">Onze expertise</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Alles weten over duurzaam wonen</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Alles weten over duurzame mobiliteit</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Alles weten over budgetbeheer</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Advies op afstand of face-to-face</a></li>
                  </ul>
                </div>
                
                <div className="bg-primary text-primary-foreground p-4 rounded-lg">
                  <div className="mb-3">
                    <img 
                      src="https://www.bnpparibasfortis.be/public/ebw/media/images/R2/so-simply-p.jpg"
                      alt="SoSimply EPC certificaat"
                      className="w-full h-20 object-cover rounded"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h4 className="text-xs font-bold tracking-wide uppercase mb-2">Een EPC-certificaat?</h4>
                  <p className="text-sm mb-3">Reken op de experts van SoSimply.</p>
                  <a href="#" className="text-sm underline hover:no-underline">Meer weten</a>
                </div>
              </div>
            </div>
            
            {/* Verzekeren */}
            <div className="space-y-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <img 
                    src="https://www.bnpparibasfortis.be/public/ebw/media/Illustrations/FamilyPortratitPhoto/BNPPF.svg"
                    alt="Verzekeren illustratie"
                    className="w-full h-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h2 className="text-xl font-bold text-foreground mb-2">Verzekeren</h2>
                <a href="#" className="text-sm text-primary hover:underline">Onze verzekeringsoplossingen</a>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-3">Beschermen van uw gezin</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Familiale verzekering</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Globale rechtsbijstand</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Hospitalisatieverzekering</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Ongevallenverzekering</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Reisverzekering</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Levens- en overlijdensverzekeringen</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Al onze oplossingen</a></li>
                  </ul>
                </div>
                
                <div>
                  <div className="w-12 h-12 mb-3 flex items-center justify-center">
                    <img 
                      src="https://www.bnpparibasfortis.be/public/ebw/media/Illustrations/HouseUmbrellaSignals/BNPPF.svg"
                      alt="Woningverzekering illustratie"
                      className="w-full h-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-3">Beschermen van uw woning</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Woningverzekering eigenaar</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Woningverzekering huurder</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Woningverzekering verhuurder</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Diefstalverzekering</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Homiris telebewaking</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Rechtsbijstandsverzekering</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Al onze oplossingen</a></li>
                  </ul>
                </div>
                
                <div>
                  <div className="w-12 h-12 mb-3 flex items-center justify-center">
                    <img 
                      src="https://www.bnpparibasfortis.be/public/ebw/media/Illustrations/CarAndTool/BNPPF.svg"
                      alt="Mobiliteitsverzekering illustratie"
                      className="w-full h-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-3">Beschermen van uw mobiliteit</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Autoverzekering</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Omniumverzekering auto</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Rechtsbijstandsverzekering auto</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Fietsverzekering en zachte mobiliteit</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Motorverzekeringen</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Bromfietsverzekeringen</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Pechverhelping</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Al onze oplossingen</a></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-3">Onze expertise</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Aangifte van een schadegeval</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Gratis check-up van uw verzekeringen</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Beveilig uw thuis</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Bescherm uw gezin bij overlijden</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Preventietips natuurrampen</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Advies op afstand of face-to-face</a></li>
                  </ul>
                </div>
                
                <div className="bg-primary text-primary-foreground p-4 rounded-lg">
                  <div className="mb-3">
                    <img 
                      src="https://www.bnpparibasfortis.be/public/ebw/media/images/R2/so-simply-p.jpg"
                      alt="SoSimply EPC certificaat"
                      className="w-full h-20 object-cover rounded"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h4 className="text-xs font-bold tracking-wide uppercase mb-2">Een EPC-certificaat?</h4>
                  <p className="text-sm mb-3">Reken op de experts van SoSimply.</p>
                  <a href="#" className="text-sm underline hover:no-underline">Meer weten</a>
                </div>
              </div>
            </div>
            
            {/* Aan uw zijde */}
            <div className="space-y-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <img 
                    src="https://www.bnpparibasfortis.be/public/ebw/media/Illustrations/HandSeedPlanting/BNPPF.svg"
                    alt="Aan uw zijde illustratie"
                    className="w-full h-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h2 className="text-xl font-bold text-foreground mb-6">Aan uw zijde</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-3">Uw behoeften</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Mobiliteit</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Wonen</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Budget</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Gezin</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Betaalmiddelen</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Studeren in het buitenland</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Een overlijden aangeven</a></li>
                  </ul>
                </div>
                
                <div>
                  <div className="w-12 h-12 mb-3 flex items-center justify-center">
                    <img 
                      src="https://www.bnpparibasfortis.be/public/ebw/media/Illustrations/HandAdjustingFilters/BNPPF.svg"
                      alt="Aanpak op maat illustratie"
                      className="w-full h-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-3">Aanpak op maat</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">De bank voor jongeren</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Priority Banking Exclusive</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Expat in België</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Bank voor iedereen</a></li>
                  </ul>
                </div>
                
                <div>
                  <div className="w-12 h-12 mb-3 flex items-center justify-center">
                    <img 
                      src="https://www.bnpparibasfortis.be/public/ebw/media/Illustrations/Advisor/BNPPF.svg"
                      alt="Online en mobiele bank illustratie"
                      className="w-full h-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-3">Online en mobiele bank</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Easy Banking App</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Selfbanking met Easy Banking App en Web</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Beheer uw budget met Easy Banking App</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Easy Banking Web</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contactloos betalen</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Veilig online</a></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-3">Contacteer ons</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Aangifte van een schadegeval</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Advies op afstand of face-to-face</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Uw adviseurs via videogesprek</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Een expert aan de lijn</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">CASH-punten netwerk</a></li>
                  </ul>
                </div>
                
                <div className="bg-primary text-primary-foreground p-4 rounded-lg">
                  <div className="mb-3">
                    <img 
                      src="https://www.bnpparibasfortis.be/public/ebw/media/images/R2/happy-nest-p.jpg"
                      alt="Happy Nest"
                      className="w-full h-20 object-cover rounded"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h4 className="text-xs font-bold tracking-wide uppercase mb-2">Wist u dat ...</h4>
                  <p className="text-sm mb-3">u van BNP Paribas Fortis heel wat interessante artikels kan lezen?</p>
                  <a href="#" className="text-sm underline hover:no-underline">Ontdek onze tips en adviezen</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Promotional Banners Section */}
        <section className="px-6 md:px-10 lg:px-12">
          <div className="space-y-8">
            <TitleWidth
              label="AANBOD"
              title="Ontdek onze huidige aanbiedingen"
              description="Profiteer van onze speciale voorwaarden en kortingen op diverse bankproducten."
              centerAlign={true}
            />
            
            <MultiPurposeGrid
              itemsPerRow={2}
              items={[
                {
                  title: "Gratis betaalrekening",
                  description: "Open een nieuwe betaalrekening en profiteer van gratis bankieren gedurende de eerste 6 maanden. Inclusief debetkaart en toegang tot Easy Banking.",
                  button: {
                    text: "Rekening openen",
                    href: "#"
                  }
                },
                {
                  title: "Voordelige hypotheekrente",
                  description: "Realiseer uw droomhuis met onze scherpe hypotheekrente. Gratis waardering van uw woning en persoonlijk advies van onze experts.",
                  button: {
                    text: "Simulatie maken",
                    href: "#"
                  }
                }
              ]}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;