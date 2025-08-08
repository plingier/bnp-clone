import BNPNavigation from "@/components/BNPNavigation";
import { Button } from "@/components/ui/button";
import { Search, ArrowRight, Gift, PhoneCall } from "lucide-react";
import TitleWidth from "@/components/TitleWidth";
import { Banner, BannerContainer } from "@/components/Banner";
import RichText from "@/components/RichText";
import { ProductCardGrid } from "@/components/ProductCard";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t, getLocalizedUrl } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <BNPNavigation />
      
      {/* Main Content */}
      <main className="space-y-16">
        {/* TitleWidth at the top */}
        <TitleWidth
          label={t('nav.welcome')}
          title={t('nav.howCanWeHelp')}
          links={[
            {
              text: t('nav.findAnswer'),
              href: "#hypotheek",
              icon: Search
            },
            {
              text: t('nav.makeAppointment'),
              href: "#app",
              icon: ArrowRight
            },
            {
              text: t('nav.phoneNumber'),
              href: "#afspraak",
              icon: PhoneCall
            }
          ]}
        />

        {/* Banner - 1 in a row (full variant) */}
        <div className="!mt-2.5">
          <BannerContainer variant="full">
            <Banner
              image="https://www.bnpparibasfortis.be/media/images/R1/welcome-summer.jpg"
              title={t('banner.winAirpods.title')}
              description={t('banner.winAirpods.description')}
              buttonText={t('banner.winAirpods.button')}
              buttonHref="test"
              variant="full"
            />
          </BannerContainer>
        </div>

        {/* Banner - 2 in a row (split variant) */}
        <div className="!mt-2.5">
          <BannerContainer variant="split">
            <Banner
              image="https://www.bnpparibasfortis.be/media/images/R2/verification-du-beneficiaire-p.jpg"
              title={t('banner.verification.title')}
              description={t('banner.verification.description')}
              buttonText={t('banner.verification.button')}
              buttonHref="#app"
              variant="split"
            />
            <Banner
              image="https://www.bnpparibasfortis.be/media/images/R2/argent-de-poche-ados-investir.jpg"
              title={t('banner.teenager.title')}
              description={t('banner.teenager.description')}
              buttonText={t('banner.teenager.button')}
              buttonHref="#duurzaam"
              variant="split"
            />
          </BannerContainer>
        </div>

        {/* RichText section */}
        <RichText
          image={{ src: "https://www.bnpparibasfortis.be/media/images/R2/easy-banking-app-new-p-nl.png", alt: "Bankieren op uw telefoon" }}
          title={t('richtext.title')}
          description={t('richtext.description')}
          checklist={[
            { text: t('richtext.checklist.item1'), checked: true },
            { text: t('richtext.checklist.item2'), checked: true },
            { text: t('richtext.checklist.item3'), checked: true },
            { text: t('richtext.checklist.item4'), checked: true },
            { text: t('richtext.checklist.item5'), checked: true },
            { text: t('richtext.checklist.item6'), checked: true },
            { text: t('richtext.checklist.item7'), checked: true },
          ]}
          callToAction={{ text: t('richtext.button'), href: "#afspraak" }}
          imagePosition="left"
        />

        {/* Another TitleWidth */}
        <TitleWidth
          label={t('titlewidth.label')}
          title={t('titlewidth.title')}
          description={t('titlewidth.description')}
        />

        {/* ProductCardGrid - 4 in a row */}
        <ProductCardGrid
          cardsPerRow={4}
          cards={[
            {
              image: { src: "https://www.bnpparibasfortis.be/media/images/R2/credit-energie2.jpg", alt: t('productcard.housing.title') },
              title: t('productcard.housing.title'),
              description: t('productcard.housing.description'),
              button: { text: t('productcard.housing.button'), href: getLocalizedUrl("hypothecaire-lening") },
            },
            {
              image: { src: "https://www.bnpparibasfortis.be/media/images/R2/assurance-moto-pri-p.jpg", alt: t('productcard.budget.title') },
              title: t('productcard.budget.title'),
              description: t('productcard.budget.description'),
              button: { text: t('productcard.budget.button'), href: "#budget" },
            },
            {
              image: { src: "https://www.bnpparibasfortis.be/public/media/images/R2/assurance-vie-et-deces.jpg", alt: t('productcard.family.title') },
              title: t('productcard.family.title'),
              description: t('productcard.family.description'),
              button: { text: t('productcard.family.button'), href: "#familie" },
            },
            {
              image: { src: "https://www.bnpparibasfortis.be/public/media/images/R2/financement-vehicule.jpg", alt: t('productcard.mobility.title') },
              title: t('productcard.mobility.title'),
              description: t('productcard.mobility.description'),
              button: { text: t('productcard.mobility.button'), href: "#mobiliteit" },
            },
          ]}
        />
      </main>
    </div>
  );
};

export default Index;