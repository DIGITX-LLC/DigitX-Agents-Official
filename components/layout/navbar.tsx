"use client";
import { Menu } from "lucide-react";
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
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const products = [
  {
    title: "OneBrain AI",
    href: "https://onebrain.app",
    description: "Multi AI platform for everyone.",
  },
  {
    title: "Re-Test",
    href: "https://re-test.dev",
    description: "Solving AI Generated App Quality issues.",
  },
  {
    title: "MentorPath AI",
    href: "https://mentorpath.ai",
    description: "Global Corporate Training & Event Solutions.",
  },
];

const services = [
  {
    title: "Enterprise Software",
    href: "#services",
    description: "Custom scalable software solutions for large enterprises.",
  },
  {
    title: "AI Consultancy",
    href: "#services",
    description: "Strategic AI implementation and digital transformation.",
  },
  {
    title: "QA & Testing",
    href: "#services",
    description: "Rigorous quality assurance using our Re-Test platform.",
  },
  {
    title: "Corporate Training",
    href: "#services",
    description: "Upskilling teams with the latest tech through DigitX Events.",
  },
];

const company = [
  {
    title: "About Us",
    href: "#benefits",
    description: "Learn about our mission, vision, and values.",
  },
  {
    title: "Our Team",
    href: "#team",
    description: "Meet the experts behind our innovations.",
  },
  {
    title: "Careers",
    href: "#",
    description: "Join us in shaping the future of technology.",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="backdrop-blur-2xl backdrop-saturate-150 bg-black/40 border border-white/10 w-[90%] md:w-[70%] lg:w-[75%] max-w-6xl top-6 mx-auto sticky z-50 rounded-full flex justify-between items-center py-2 px-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] ring-1 ring-white/5 transition-all duration-300 hover:bg-black/50 hover:ring-white/10">
      <Link href="/" className="font-bold text-lg flex items-center relative z-10 mr-4 lg:mr-8">
        <Image
          src="/DIGITX White.png"
          alt="DigitX"
          width={140}
          height={45}
          className="h-10 w-auto"
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
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-background/95 backdrop-blur-md border-white/10 shadow-2xl shadow-black/20 w-[300px]"
          >
            <div className="overflow-y-auto">
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center">
                    <Image
                      src="/DIGITX White.png"
                      alt="DigitX"
                      width={120}
                      height={40}
                      className="h-8 w-auto"
                    />
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-4 px-2">
                <div className="flex flex-col gap-2">
                  <h4 className="font-semibold text-yellow-400 px-4">Ventures</h4>
                  {products.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 text-sm hover:bg-white/10 rounded-md transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
                
                <div className="flex flex-col gap-2">
                  <h4 className="font-semibold text-yellow-400 px-4">Expertise</h4>
                  {services.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 text-sm hover:bg-white/10 rounded-md transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>

                <div className="flex flex-col gap-2">
                  <h4 className="font-semibold text-yellow-400 px-4">About</h4>
                  {company.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 text-sm hover:bg-white/10 rounded-md transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
                
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 font-semibold hover:text-yellow-400 transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <NavigationMenu className="hidden lg:flex mx-auto relative z-10">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent hover:bg-white/10 hover:text-yellow-400 data-[state=open]:bg-white/10 focus:bg-white/10">Ventures</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-2 p-4 md:w-[400px] lg:w-[400px]">
                {products.map((product) => (
                  <ListItem
                    key={product.title}
                    title={product.title}
                    href={product.href}
                  >
                    {product.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent hover:bg-white/10 hover:text-yellow-400 data-[state=open]:bg-white/10 focus:bg-white/10">Expertise</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {services.map((service) => (
                  <ListItem
                    key={service.title}
                    title={service.title}
                    href={service.href}
                  >
                    {service.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent hover:bg-white/10 hover:text-yellow-400 data-[state=open]:bg-white/10 focus:bg-white/10">About</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-2 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-xl bg-gradient-to-b from-yellow-400/20 to-amber-500/20 p-6 no-underline outline-none focus:shadow-md hover:shadow-xl transition-all duration-300 group border border-yellow-400/10 hover:border-yellow-400/30"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors">
                        DigitX Group
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground group-hover:text-white/90 transition-colors">
                        Innovating the future with advanced technology solutions for enterprises worldwide.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                {company.map((item) => (
                  <ListItem key={item.title} title={item.title} href={item.href}>
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="#contact" legacyBehavior passHref>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-white/10 hover:text-yellow-400 focus:bg-white/10")}>
                Contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex items-center gap-4 relative z-10">
      </div>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-sm hover:scale-[1.02] focus:bg-white/10 group relative overflow-hidden border border-transparent hover:border-white/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]",
            className
          )}
          {...props}
        >
          {/* Hover Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-yellow-500/5 to-yellow-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] w-[200%]" />
          
          <div className="relative z-10">
            <div className="text-base font-semibold leading-none text-foreground group-hover:text-yellow-400 transition-colors mb-2 tracking-tight">
              {title}
            </div>
            <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground group-hover:text-white/80 transition-colors font-light">
              {children}
            </p>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
