import { BenefitsSection } from "@/components/layout/sections/benefits";
import { Career } from "@/components/layout/sections/career";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ProductsSection } from "@/components/layout/sections/products";
import { ServicesSection } from "@/components/layout/sections/services";
import { DreamTeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export const metadata = {
  title: "DigitX Bangladesh - AI Agent OS Built for Bangladesh",
  description: "Revolutionize your business with OneBrain AI, Re-test, and DigitX Events. Advanced AI solutions designed specifically for Bangladesh's growing tech ecosystem and digital transformation.",
  openGraph: {
    type: "website",
    url: "https://digitx.com/bd",
    title: "DigitX Bangladesh - AI Agent OS Built for Bangladesh",
    description: "Revolutionize your business with OneBrain AI, Re-test, and DigitX Events. Advanced AI solutions designed specifically for Bangladesh's growing tech ecosystem.",
    images: [
      {
        url: "https://digitx.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DigitX Bangladesh - AI Agent OS",
      },
    ],
  },
};

export default function BangladeshPage() {
  return (
    <>
      <HeroSection />
      <ProductsSection />
      <BenefitsSection isBangladesh={true} />
      <FeaturesSection isBangladesh={true} />
      <ServicesSection isBangladesh={true} />
      <PricingSection />
      <TestimonialSection isBangladesh={true} />
      <Career />
      <DreamTeamSection />
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </>
  );
} 