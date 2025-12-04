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
    title: "Starter",
    popular: 0,
    price: 99,
    description:
      "Perfect for small businesses getting started with AI automation. Deploy your first AI agents and workflows.",
    buttonText: "Start Free Trial",
    benefitList: [
      "Up to 5 AI agents",
      "10,000 monthly interactions",
      "Basic workflow templates",
      "Email support",
      "50+ integrations",
      "Real-time analytics dashboard",
    ],
  },
  {
    title: "Professional",
    popular: 1,
    price: 299,
    description:
      "Scale your automation with advanced AI agents and enterprise-grade features for growing businesses.",
    buttonText: "Get Started",
    benefitList: [
      "Up to 25 AI agents",
      "100,000 monthly interactions",
      "Advanced workflow builder",
      "Priority support",
      "500+ integrations",
      "Custom agent training",
      "Multi-team collaboration",
      "Advanced analytics & reporting",
    ],
  },
  {
    title: "Enterprise",
    popular: 0,
    price: 999,
    description:
      "Unlimited AI agents and workflows with enterprise security, compliance, and dedicated support.",
    buttonText: "Contact Sales",
    benefitList: [
      "Unlimited AI agents",
      "Unlimited interactions",
      "Custom agent development",
      "24/7 dedicated support",
      "All integrations",
      "SOC 2 compliance",
      "On-premise deployment",
      "Advanced security controls",
      "Custom SLA agreements",
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
          DigitX Pricing
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Choose Your AI Agent OS Plan
        </h2>

        <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
          Scale your business automation with DigitX AI Agent OS. Start with our free trial and upgrade as you grow.
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
                  <span className="text-3xl font-bold">${price}</span>
                  <span className="text-muted-foreground"> /month</span>
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
              asChild
              variant={popular === PopularPlan.YES ? "default" : "outline"}
                 className={
              popular === PopularPlan.YES
                ? "w-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-black font-semibold"
                : "w-full border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
               }
            >
         <a href="mailto:admin@digitxgroup.com">
           {buttonText}
            </a>
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
