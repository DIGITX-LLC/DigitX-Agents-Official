import { ContactSection } from "@/components/layout/sections/contact";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { MissionSection } from "@/components/layout/sections/mission";
import { ProductsSection } from "@/components/layout/sections/products";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { DreamTeamSection } from "@/components/layout/sections/team";

export const metadata = {
  title: "DigitX Bangladesh - Center of Excellence",
  description: "Meet our world-class engineering team in Bangladesh, delivering enterprise AI solutions and innovation for the global market.",
  openGraph: {
    type: "website",
    url: "https://digitxgroup.com/bd",
    title: "DigitX Bangladesh - Center of Excellence",
    description: "Meet our world-class engineering team in Bangladesh, delivering enterprise AI solutions and innovation for the global market.",
    images: [
      {
        url: "https://digitxgroup.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DigitX Bangladesh Team",
      },
    ],
  },
};

export default function BangladeshPage() {
  return (
    <main className="relative">
      <HeroSection />
      <SponsorsSection />
      <MissionSection />
      <ProductsSection />
      <ServicesSection />
      <DreamTeamSection />
      <ContactSection showBangladeshAddress={true} />
      <FooterSection />
    </main>
  );
}
