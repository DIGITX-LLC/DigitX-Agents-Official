import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="flex flex-col items-center space-y-6">
          <Link href="#" className="flex font-bold items-center">
            <Image
              src="/DIGITX White.png"
              alt="DigitX - AI Agent OS"
              width={160}
              height={50}
              className="h-12 w-auto"
            />
          </Link>
        </div>

        <Separator className="my-6" />
        <section className="text-center">
          <p className="text-muted-foreground">
            Built with ❤️ by DigitX • 2025
          </p>
          <p className="text-yellow-400 text-sm mt-2 font-medium">
            Transforming businesses through intelligent automation
          </p>
        </section>
      </div>
    </footer>
  );
};
