"use client";
import { ChevronsDown, Menu } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
}

const routeList: RouteProps[] = [
  {
    href: "#features",
    label: "Features",
  },
  {
    href: "#services",
    label: "Solutions",
  },
  {
    href: "#pricing",
    label: "Pricing",
  },
  {
    href: "#testimonials",
    label: "Testimonials",
  },
  {
    href: "#contact",
    label: "Contact",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
];

const featureList: FeatureProps[] = [
  {
    title: "Autonomous AI Agents",
    description: "Deploy intelligent agents that work 24/7 to automate your business processes.",
  },
  {
    title: "Enterprise Security",
    description:
      "SOC 2 compliant with enterprise-grade security and data protection.",
  },
  {
    title: "No-Code Platform",
    description:
      "Build and deploy AI agents without any programming knowledge required.",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="backdrop-blur-md bg-background/30 border border-white/10 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky z-40 rounded-2xl flex justify-between items-center p-2 shadow-2xl shadow-black/10 hover:shadow-3xl hover:shadow-black/15 transition-all duration-300 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-white/5 before:to-transparent before:pointer-events-none">
      <Link href="/" className="font-bold text-lg flex items-center relative z-10">
        <Image
          src="/DIGITX White.png"
          alt="DigitX - Inspiring Innovation"
          width={140}
          height={45}
          className="h-11 w-auto"
          priority
        />
      </Link>
      {/* <!-- Mobile --> */}
      <div className="flex items-center lg:hidden relative z-10">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden hover:text-yellow-400 transition-colors"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-background/95 backdrop-blur-md border-white/10 shadow-2xl shadow-black/20"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center">
                    <Image
                      src="/DIGITX White.png"
                      alt="DigitX - Inspiring Innovation"
                      width={120}
                      height={40}
                      className="h-9 w-auto"
                    />
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base hover:bg-white/10 transition-all duration-200"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <NavigationMenu className="hidden lg:block mx-auto relative z-10">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-card text-base hover:bg-white/10 transition-all duration-200 shadow-sm">
              AI Agent OS
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[600px] grid-cols-2 gap-5 p-4 bg-background/95 backdrop-blur-md border border-white/10 shadow-2xl shadow-black/20 rounded-lg">
                <Image
                  src="https://avatars.githubusercontent.com/u/75042455?v=4"
                  alt="DigitX AI Agent OS"
                  className="h-full w-full rounded-md object-cover shadow-lg"
                  width={600}
                  height={600}
                />
                <ul className="flex flex-col gap-2">
                  {featureList.map(({ title, description }) => (
                    <li
                      key={title}
                      className="rounded-md p-3 text-sm hover:bg-white/5 transition-all duration-200 hover:shadow-lg"
                    >
                      <p className="mb-1 font-semibold leading-none text-foreground">
                        {title}
                      </p>
                      <p className="line-clamp-2 text-muted-foreground">
                        {description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            {routeList.map(({ href, label }) => (
              <NavigationMenuLink key={href} asChild>
                <Link href={href} className="text-base px-2 hover:text-yellow-400 transition-colors duration-200">
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
