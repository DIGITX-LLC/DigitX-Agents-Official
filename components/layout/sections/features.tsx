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
    icon: "Globe",
    title: "Global Innovation",
    description:
      "We deliver world-class technology solutions that compete on a global scale, driving digital transformation across borders.",
  },
  {
    icon: "ShieldCheck",
    title: "Enterprise Reliability",
    description:
      "Built on a foundation of trust and security, our systems are designed to meet the rigorous demands of enterprise operations.",
  },
  {
    icon: "Zap",
    title: "Agile Delivery",
    description:
      "We believe in rapid iteration and deployment, ensuring our clients stay ahead of the curve with the latest technological advancements.",
  },
  {
    icon: "Users",
    title: "Expert Teams",
    description:
      "Our diverse team of experts brings deep industry knowledge and technical prowess to every project we undertake.",
  },
  {
    icon: "Layers",
    title: "Scalable Solutions",
    description:
      "From startups to Fortune 500s, our products and services are built to scale seamlessly as your business grows.",
  },
  {
    icon: "HeartHandshake",
    title: "Client-Centric Approach",
    description:
      "Your success is our priority. We work closely with you to understand your unique challenges and deliver tailored solutions.",
  },
];

export const FeaturesSection = () => {
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
          Why Choose DigitX
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Driving Digital Excellence
        </h2>

        <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
          We combine technical expertise with industry insight to deliver solutions that propel your business into the future.
        </h3>
      </MotionDiv>

      <MotionDiv 
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {featureList.map(({ icon, title, description }) => (
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
