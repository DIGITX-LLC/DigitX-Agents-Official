"use client";

import { ContactSection } from "@/components/layout/sections/contact";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { MissionSection } from "@/components/layout/sections/mission";
import { ProductsSection } from "@/components/layout/sections/products";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <SponsorsSection />
      <MissionSection />
      <ProductsSection />
      <ServicesSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
