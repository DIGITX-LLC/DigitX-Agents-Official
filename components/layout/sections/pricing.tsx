import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { MotionDiv } from "@/components/ui/motion";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Startup & MVP",
    popular: 0,
    price: 999,
    description:
      "Rapid prototyping and MVP development for startups looking to launch fast and valid ideas.",
    buttonText: "Get a Quote",
    benefitList: [
      "MVP Development",
      "Core Feature Implementation",
      "Basic UI/UX Design",
      "Cloud Setup",
      "1 Month Support",
      "Agile Development",
    ],
  },
  {
    title: "Growth & Scale",
    popular: 1,
    price: 2499,
    description:
      "Comprehensive development and scaling services for growing businesses with expanding needs.",
    buttonText: "Partner with Us",
    benefitList: [
      "Full-Stack Development",
      "Scalable Architecture",
      "Advanced UI/UX",
      "QA & Testing (Re-Test)",
      "3 Months Support",
      "Performance Optimization",
      "Integration Services",
      "Dedicated Team",
    ],
  },
  {
    title: "Enterprise Transformation",
    popular: 0,
    price: 4999,
    description:
      "End-to-end digital transformation, custom AI solutions, and dedicated enterprise support.",
    buttonText: "Contact Sales",
    benefitList: [
      "Custom AI Solutions (OneBrain)",
      "Enterprise Architecture",
      "Legacy Modernization",
      "24/7 Dedicated Support",
      "Security & Compliance",
      "On-Premise Deployment",
      "Strategic Consultancy",
      "Corporate Training",
      "SLA Guarantees",
    ],
  },
];

export const PricingSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center"
      >
        <h2 className="text-lg text-yellow-400 text-center mb-2 tracking-wider">
          Partnership Models
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Flexible Engagement Options
        </h2>

        <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
          Whether you need a dedicated team, a fixed-price project, or enterprise consultancy, we have a model that fits your needs.
        </h3>
      </MotionDiv>

      <MotionDiv 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {plans.map(
          ({ title, popular, price, description, buttonText, benefitList }) => (
            <MotionDiv
              key={title}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card
                className={
                  popular === PopularPlan?.YES
                    ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-yellow-400 lg:scale-[1.1] bg-gradient-to-b from-yellow-400/5 to-amber-500/5 h-full"
                    : "h-full"
                }
              >
              <CardHeader>
                <CardTitle className="pb-2">{title}</CardTitle>

                <CardDescription className="pb-4">
                  {description}
                </CardDescription>

                <div>
                  <span className="text-xl font-bold">Starting at ${price}</span>
                  <span className="text-muted-foreground"> /mo</span>
                </div>
              </CardHeader>

              <CardContent className="flex">
                <div className="space-y-4">
                  {benefitList.map((benefit) => (
                    <span key={benefit} className="flex">
                      <Check className="text-yellow-400 mr-2" />
                      <h3>{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  className={
                    popular === PopularPlan?.YES
                      ? "w-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-black font-semibold"
                      : "w-full border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                  }
                  variant={popular === PopularPlan?.YES ? "default" : "outline"}
                >
                  {buttonText}
                </Button>
                </CardFooter>
              </Card>
            </MotionDiv>
          )
        )}
      </MotionDiv>
    </section>
  );
};
