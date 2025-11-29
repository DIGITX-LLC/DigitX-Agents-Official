"use client";

import { Icon } from "@/components/ui/icon";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import { icons } from "lucide-react";
interface countriesProps {
  icon: string;
  name: string;
}

const countries: countriesProps[] = [
  {
    icon: "MapPin",
    name: "United States",
  },
  {
    icon: "Building2",
    name: "United Kingdom",
  },
  {
    icon: "Landmark",
    name: "Germany",
  },
  {
    icon: "Globe",
    name: "Australia",
  },
  {
    icon: "Map",
    name: "Canada",
  },
  {
    icon: "Navigation",
    name: "Singapore",
  },
  {
    icon: "Compass",
    name: "Japan",
  },
  {
    icon: "MapPin",
    name: "Netherlands",
  },
];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="max-w-[75%] mx-auto pb-24 sm:pb-32">
      <h2 className="text-lg md:text-xl text-center mb-10 text-muted-foreground tracking-wide font-light">
        OPERATING ACROSS KEY GLOBAL MARKETS
      </h2>

      <div className="mx-auto">
        <Marquee
          className="gap-[3rem]"
          fade
          innerClassName="gap-[3rem]"
          pauseOnHover
        >
          {countries.map(({ icon, name }) => (
            <div
              key={name}
              className="flex items-center text-lg md:text-xl font-medium bg-white/5 border border-white/10 rounded-full px-6 py-3 hover:bg-white/10 transition-colors cursor-default"
            >
              <Icon
                name={icon as keyof typeof icons}
                size={20}
                className="mr-3 text-yellow-400"
              />
              {name}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
