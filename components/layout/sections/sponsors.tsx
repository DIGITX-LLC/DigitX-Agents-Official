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
      <h2 className="text-lg md:text-xl text-center mb-6">
        The Countries We are Currently Deploying AI Agents
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
              className="flex items-center text-xl md:text-2xl font-medium"
            >
              <Icon
                name={icon as keyof typeof icons}
                size={32}
                color="white"
                className="mr-2"
              />
              {name}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
