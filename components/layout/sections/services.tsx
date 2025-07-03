import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

enum ProService {
  YES = 1,
  NO = 0,
}
interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}
const serviceList: ServiceProps[] = [
  {
    title: "Customer Service Agents",
    description:
      "Deploy AI agents that handle customer inquiries, resolve issues, and provide 24/7 support across all channels with human-like empathy.",
    pro: 0,
  },
  {
    title: "Data Analysis Agents",
    description:
      "Intelligent agents that analyze complex datasets, generate insights, create reports, and identify business opportunities automatically.",
    pro: 0,
  },
  {
    title: "Sales Automation Agents",
    description: "AI agents that qualify leads, schedule meetings, follow up with prospects, and optimize your entire sales funnel.",
    pro: 0,
  },
  {
    title: "Custom Enterprise Agents",
    description: "Build specialized AI agents tailored to your unique business processes with advanced customization and integration capabilities.",
    pro: 1,
  },
  {
    title: "Workflow Orchestration",
    description: "Coordinate multiple AI agents to handle complex, multi-step business processes with seamless handoffs and decision-making.",
    pro: 1,
  },
  {
    title: "Real-time Monitoring & Analytics",
    description: "Advanced dashboard and analytics to monitor agent performance, track ROI, and optimize workflows in real-time.",
    pro: 1,
  },
];

// Bangladesh-specific services
const bangladeshServiceList: ServiceProps[] = [
  {
    title: "OneBrain AI Solutions",
    description:
      "Advanced AI decision-making platform helping Bangladeshi businesses automate complex decisions and compete in global markets.",
    pro: 0,
  },
  {
    title: "Re-test Quality Assurance",
    description:
      "Automated testing platform specifically designed for Bangladesh's software development teams, reducing bugs and improving delivery speed.",
    pro: 0,
  },
  {
    title: "DigitX Events Platform",
    description: "Connect with Bangladesh's largest tech community through our comprehensive event management and networking platform.",
    pro: 0,
  },
  {
    title: "Local Infrastructure Integration",
    description: "Seamless integration with Bangladesh's telecom, banking, and government systems with built-in compliance and security.",
    pro: 1,
  },
  {
    title: "Bangladesh Developer Support",
    description: "24/7 support in local time zones with Bangladesh-based technical experts who understand local business requirements.",
    pro: 1,
  },
  {
    title: "Custom AI for Bangladesh Market",
    description: "Tailored AI solutions trained on Bangladesh market data, regulations, and business patterns for maximum local effectiveness.",
    pro: 1,
  },
];

export const ServicesSection = ({ isBangladesh = false }: { isBangladesh?: boolean }) => {
  const currentServiceList = isBangladesh ? bangladeshServiceList : serviceList;
  const sectionTitle = isBangladesh ? "DigitX Bangladesh Services" : "AI Agent Capabilities";
  const sectionHeading = isBangladesh 
    ? "Empowering Bangladesh's Digital Future" 
    : "Transform Every Aspect of Your Business";
  const sectionDescription = isBangladesh
    ? "From OneBrain AI to Re-test and DigitX Events, our comprehensive suite of AI solutions is designed specifically for Bangladesh's thriving tech ecosystem."
    : "From customer service to data analysis, our AI Agent OS provides intelligent automation solutions that scale with your business needs.";

  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-yellow-400 text-center mb-2 tracking-wider">
        {sectionTitle}
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        {sectionHeading}
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        {sectionDescription}
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mx-auto">
        {currentServiceList.map(({ title, description, pro }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Badge
              data-pro={ProService.YES === pro}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden"
            >
              PRO
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};
