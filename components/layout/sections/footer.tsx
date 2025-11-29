import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Github, Facebook } from "lucide-react";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-black/20 border border-white/10 rounded-2xl backdrop-blur-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-col gap-4">
            <Link href="#" className="flex font-bold items-center">
              <Image
                src="/DIGITX White.png"
                alt="DigitX"
                width={140}
                height={45}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Pioneering the future of digital excellence. We build the tools, platforms, and systems that empower the world to innovate.
            </p>
            <div className="flex gap-4 mt-2">
              <Link href="#" className="text-muted-foreground hover:text-yellow-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-yellow-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-yellow-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg text-foreground">Ventures</h3>
            <Link href="https://onebrain.app" className="text-muted-foreground hover:text-yellow-400 transition-colors text-sm">
              OneBrain AI
            </Link>
            <Link href="https://re-test.dev" className="text-muted-foreground hover:text-yellow-400 transition-colors text-sm">
              Re-Test
            </Link>
            <Link href="https://mentorpath.ai" className="text-muted-foreground hover:text-yellow-400 transition-colors text-sm">
              MentorPath AI
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg text-foreground">Company</h3>
            <Link href="#" className="text-muted-foreground hover:text-yellow-400 transition-colors text-sm">
              About Us
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-yellow-400 transition-colors text-sm">
              Careers
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-yellow-400 transition-colors text-sm">
              Contact
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg text-foreground">Legal</h3>
            <Link href="#" className="text-muted-foreground hover:text-yellow-400 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-yellow-400 transition-colors text-sm">
              Terms of Service
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-yellow-400 transition-colors text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>

        <Separator className="bg-white/10 my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            &copy; 2025 DigitX Group. All rights reserved.
          </p>
          <p className="font-medium">
            Designed for <span className="text-yellow-400">Excellence</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
