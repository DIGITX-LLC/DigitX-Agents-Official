"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { MotionDiv } from "@/components/ui/motion";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Sarah Chen",
    userName: "VP of Operations, TechFlow Inc",
    comment:
      "DigitX AI Agent OS transformed our customer service. Our AI agents handle 80% of inquiries automatically, reducing response time from hours to seconds. ROI was achieved within 2 months.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Marcus Rodriguez",
    userName: "CEO, DataVenture Solutions",
    comment:
      "The workflow automation capabilities of DigitX are incredible. We've automated our entire lead qualification process and increased our sales team's productivity by 300%.",
    rating: 4.9,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Emily Watson",
    userName: "CTO, FinanceFirst Corp",
    comment:
      "Security and compliance were our top concerns. DigitX's enterprise-grade security and SOC 2 compliance gave us confidence to deploy AI agents across our financial operations.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "David Park",
    userName: "Head of Analytics, RetailMax",
    comment:
      "DigitX's data analysis agents process thousands of transactions daily, providing insights that helped us increase revenue by 25%. The platform is incredibly intuitive.",
    rating: 4.8,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Jessica Liu",
    userName: "Operations Director, HealthTech Pro",
    comment:
      "Deploying AI agents with DigitX was surprisingly simple. No coding required, and our agents were live within a day. The integration with our existing systems was seamless.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Michael Thompson",
    userName: "Founder, StartupHub",
    comment:
      "As a startup, we needed enterprise-level automation without the enterprise budget. DigitX AI Agent OS delivered exactly that. It's like having a team of 20 working 24/7.",
    rating: 4.9,
  },
];

// Bangladesh-specific testimonials
const bangladeshReviewList: ReviewProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Rifat Rahman",
    userName: "CTO, Dhaka FinTech Solutions",
    comment:
      "OneBrain AI helped our fintech startup make smarter lending decisions. Built specifically for Bangladesh's market, it understands local financial patterns better than any global solution.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Nadia Khan",
    userName: "Engineering Lead, Chittagong Soft",
    comment:
      "Re-test revolutionized our QA process. We went from 2-week testing cycles to 2-day cycles. The platform understands how Bangladesh developers work and adapts accordingly.",
    rating: 4.9,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Fahim Ahmed",
    userName: "Founder, TechMela Bangladesh",
    comment:
      "DigitX Events connected our startup with the entire Bangladesh tech ecosystem. We've hosted 50+ events and built a community of 10,000+ developers nationwide.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Sharmin Akter",
    userName: "Data Scientist, Bangla Analytics",
    comment:
      "The local infrastructure support is incredible. With servers in Dhaka, our AI models run 3x faster than international solutions. Perfect for Bangladesh's internet conditions.",
    rating: 4.8,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Mahbub Hassan",
    userName: "CEO, Dhaka Digital Agency",
    comment:
      "Having 24/7 support in our time zone makes all the difference. The Bangladesh team understands our business needs and regulatory requirements perfectly.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Rashida Begum",
    userName: "Product Manager, Bangladeshi E-commerce",
    comment:
      "DigitX's Bangladesh-trained AI helped us increase sales by 40%. It understands local customer behavior, seasonal patterns, and cultural preferences perfectly.",
    rating: 4.9,
  },
];

export const TestimonialSection = ({ isBangladesh = false }: { isBangladesh?: boolean }) => {
  const currentReviewList = isBangladesh ? bangladeshReviewList : reviewList;
  const sectionTitle = isBangladesh ? "Bangladesh Success Stories" : "Customer Success Stories";
  const sectionHeading = isBangladesh 
    ? "Trusted by 500+ Bangladesh Businesses" 
    : "Trusted by 1000+ Businesses Worldwide";

  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <MotionDiv 
        className="text-center mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-lg text-yellow-400 text-center mb-2 tracking-wider">
          {sectionTitle}
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          {sectionHeading}
        </h2>
      </MotionDiv>

      <MotionDiv
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Carousel
          opts={{
            align: "start",
          }}
          className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
        >
        <CarouselContent>
          {currentReviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-yellow-400 text-yellow-400" />
                    <Star className="size-4 fill-yellow-400 text-yellow-400" />
                    <Star className="size-4 fill-yellow-400 text-yellow-400" />
                    <Star className="size-4 fill-yellow-400 text-yellow-400" />
                    <Star className="size-4 fill-yellow-400 text-yellow-400" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="https://avatars.githubusercontent.com/u/75042455?v=4"
                        alt="radix"
                      />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </MotionDiv>
    </section>
  );
};
