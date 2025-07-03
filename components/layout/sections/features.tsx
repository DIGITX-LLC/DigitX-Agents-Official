import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import { MotionDiv } from "@/components/ui/motion";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "Brain",
    title: "Advanced AI Intelligence",
    description:
      "DigitX AI agents leverage cutting-edge machine learning and natural language processing to understand context and make intelligent decisions.",
  },
  {
    icon: "Zap",
    title: "Lightning-Fast Deployment",
    description:
      "Get your AI agents up and running in minutes, not months. DigitX's no-code platform makes deployment effortless for any business.",
  },
  {
    icon: "Network",
    title: "Seamless Integration",
    description:
      "Connect with 500+ popular business tools, APIs, and databases. DigitX agents work with your existing tech stack.",
  },
  {
    icon: "BarChart3",
    title: "Real-Time Analytics",
    description:
      "Monitor performance, track KPIs, and optimize workflows with DigitX's comprehensive analytics dashboard and reporting tools.",
  },
  {
    icon: "Lock",
    title: "Enterprise Security",
    description:
      "Bank-level security with SOC 2 compliance, end-to-end encryption, and advanced access controls to protect your business data.",
  },
  {
    icon: "Users",
    title: "Multi-Agent Orchestration",
    description:
      "Coordinate multiple AI agents to handle complex workflows with seamless collaboration and intelligent task distribution.",
  },
];

// Bangladesh-specific features
const bangladeshFeatureList: FeaturesProps[] = [
  {
    icon: "Brain",
    title: "OneBrain AI Decision Engine",
    description:
      "Advanced AI specifically trained on Bangladesh business patterns, regulations, and market dynamics for superior local decision-making.",
  },
  {
    icon: "TestTube",
    title: "Re-test Automated QA",
    description:
      "Revolutionary testing automation that understands Bangladesh's development practices, reducing testing time by 80% for local teams.",
  },
  {
    icon: "Calendar",
    title: "DigitX Events Integration",
    description:
      "Connect with Bangladesh's largest tech community through our event platform, featuring 50+ monthly events and networking opportunities.",
  },
  {
    icon: "MapPin",
    title: "Local Infrastructure Support",
    description:
      "Optimized for Bangladesh's internet infrastructure with local data centers in Dhaka and Chittagong for ultra-low latency.",
  },
  {
    icon: "Users",
    title: "Bangladeshi Developer Focused",
    description:
      "Built by and for Bangladeshi developers with local language support, time zones, and culturally relevant AI training data.",
  },
  {
    icon: "ShieldCheck",
    title: "Bangladesh Compliance Ready",
    description:
      "Pre-configured to meet Bangladesh data protection laws, banking regulations, and government compliance requirements.",
  },
];

export const FeaturesSection = ({ isBangladesh = false }: { isBangladesh?: boolean }) => {
  const currentFeatureList = isBangladesh ? bangladeshFeatureList : featureList;
  const sectionTitle = isBangladesh ? "DigitX Bangladesh Features" : "DigitX Features";
  const sectionHeading = isBangladesh 
    ? "What Makes DigitX Perfect for Bangladesh" 
    : "What Makes DigitX AI Agent OS Different";
  const sectionDescription = isBangladesh
    ? "Experience AI solutions built specifically for Bangladesh's unique business environment, connecting local innovation with global technology standards."
    : "Experience the next generation of business automation with DigitX's revolutionary AI Agent Operating System, designed for enterprise-scale innovation.";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="features" className="container py-24 sm:py-32">
      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center"
      >
        <h2 className="text-lg text-yellow-400 text-center mb-2 tracking-wider">
          {sectionTitle}
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          {sectionHeading}
        </h2>

        <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
          {sectionDescription}
        </h3>
      </MotionDiv>

      <MotionDiv 
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {currentFeatureList.map(({ icon, title, description }) => (
          <MotionDiv 
            key={title}
            variants={itemVariants}
          >
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-yellow-400/20 p-2 rounded-full ring-8 ring-yellow-400/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="#fbbf24"
                    className="text-yellow-400"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </MotionDiv>
        ))}
      </MotionDiv>
    </section>
  );
};
