import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ServiceProps {
  title: string;
  description: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "Enterprise Software Development",
    description: "Custom software solutions tailored to complex business needs, ensuring scalability, security, and performance at an enterprise level.",
  },
  {
    title: "AI & Machine Learning Solutions",
    description: "End-to-end AI implementation from strategy to deployment, leveraging our proprietary platforms like OneBrain AI.",
  },
  {
    title: "Software Quality Assurance",
    description: "Comprehensive testing services using our Re-Test platform to ensure flawless software delivery and user experience.",
  },
  {
    title: "Corporate Training & Events",
    description: "Global training programs and tech events organized through MentorPath AI to upskill teams and foster community growth.",
  },
  {
    title: "Digital Transformation Consultancy",
    description: "Strategic guidance to help organizations navigate digital change, modernize infrastructure, and adopt new technologies.",
  },
  {
    title: "SaaS Product Development",
    description: "Full-cycle product development services for startups and enterprises, from ideation to launch and maintenance.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-yellow-400 text-center mb-2 tracking-wider">
        Our Expertise
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Comprehensive IT Services & Solutions
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        We offer a diverse range of high-quality services to drive your business forward, from custom development to strategic consultancy.
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mx-auto">
        {serviceList.map(({ title, description }) => (
          <Card
            key={title}
            className="bg-white/5 border-white/10 hover:border-yellow-500/30 transition-all duration-300 h-full backdrop-blur-sm group hover:shadow-xl hover:shadow-yellow-500/5"
          >
            <CardHeader>
              <CardTitle className="text-xl mb-2 group-hover:text-yellow-400 transition-colors">{title}</CardTitle>
              <CardDescription className="text-muted-foreground/80 leading-relaxed">{description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};
