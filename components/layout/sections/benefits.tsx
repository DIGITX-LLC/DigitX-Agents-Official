import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import { MotionDiv } from "@/components/ui/motion";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Bot",
    title: "Autonomous AI Agents",
    description:
      "Deploy intelligent agents that work 24/7, handling complex tasks, making decisions, and learning from interactions without human intervention.",
  },
  {
    icon: "Workflow",
    title: "Seamless Workflow Integration",
    description:
      "Connect with 500+ business tools and platforms. Our AI agents integrate seamlessly with your existing tech stack and processes.",
  },
  {
    icon: "TrendingUp",
    title: "10x Productivity Boost",
    description:
      "Automate repetitive tasks, accelerate decision-making, and free your team to focus on strategic initiatives that drive real business value.",
  },
  {
    icon: "Shield",
    title: "Enterprise-Grade Security",
    description:
      "Built with SOC 2 compliance, end-to-end encryption, and advanced security protocols to protect your data and business processes.",
  },
];

// Bangladesh-specific version
const bangladeshBenefitList: BenefitsProps[] = [
  {
    icon: "Brain",
    title: "OneBrain AI for Bangladesh",
    description:
      "Advanced AI decision-making platform specifically designed for Bangladesh's unique business ecosystem, helping local companies compete globally with intelligent automation.",
  },
  {
    icon: "TestTube",
    title: "Re-test Quality Assurance",
    description:
      "Revolutionary testing platform ensuring software quality for Bangladesh's rapidly growing tech sector, reducing bugs by 90% and accelerating time-to-market.",
  },
  {
    icon: "Calendar",
    title: "DigitX Events Bangladesh",
    description:
      "Premier AI and tech event platform connecting Bangladesh's innovators, entrepreneurs, and tech enthusiasts to drive digital transformation nationwide.",
  },
  {
    icon: "Users",
    title: "Local Community Impact",
    description:
      "Empowering Bangladesh's tech community in Dhaka, Chittagong, and nationwide with cutting-edge AI tools and fostering innovation across industries.",
  },
  {
    icon: "Zap",
    title: "Lightning-Fast Deployment",
    description:
      "Deploy AI solutions in minutes, not months. Optimized for Bangladesh's infrastructure with local server support and 99.9% uptime guarantee.",
  },
  {
    icon: "ShieldCheck",
    title: "Bangladesh Data Security",
    description:
      "Enterprise-grade security that meets Bangladesh data protection regulations and local compliance requirements with SOC 2 certification.",
  },
];

export const BenefitsSection = ({ isBangladesh = false }: { isBangladesh?: boolean }) => {
  const currentBenefitList = isBangladesh ? bangladeshBenefitList : benefitList;
  const sectionTitle = isBangladesh ? "Why Choose DigitX Bangladesh" : "Why Choose DigitX";
  const sectionSubtitle = isBangladesh 
    ? "AI solutions specially designed for Bangladesh's market that will take your business to the next level" 
    : "Discover how our AI Agent OS transforms businesses across Bangladesh";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const benefitsContent = (
    <MotionDiv 
      className="grid lg:grid-cols-2 gap-4 w-full"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {currentBenefitList.map(({ icon, title, description }, index) => (
        <MotionDiv
          key={title}
          variants={itemVariants}
        >
          <Card
            className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number h-full border-border hover:border-yellow-400/20"
          >
          <CardHeader>
            <div className="flex justify-between">
              <Icon
                name={icon as keyof typeof icons}
                size={32}
                color="currentColor"
                className="mb-6 text-yellow-400"
              />
              <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-yellow-400/30">
                0{index + 1}
              </span>
            </div>

            <CardTitle className="text-foreground group-hover/number:text-yellow-400 transition-colors duration-300">{title}</CardTitle>
          </CardHeader>

            <CardContent className="text-muted-foreground">
              {description}
            </CardContent>
          </Card>
        </MotionDiv>
      ))}
    </MotionDiv>
  );

  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <MotionDiv
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-lg text-yellow-400 mb-2 tracking-wider font-semibold">{sectionTitle}</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {isBangladesh ? "DigitX Bangladesh" : "DigitX AI Solutions"}
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {sectionSubtitle}
          </p>
        </MotionDiv>

        {isBangladesh ? (
          <ScrollArea className="h-[600px] w-full rounded-md border border-yellow-400/20 p-4">
            {benefitsContent}
          </ScrollArea>
        ) : (
          benefitsContent
        )}
      </div>
    </section>
  );
};
