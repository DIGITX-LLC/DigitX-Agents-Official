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
    icon: "Brain",
    title: "Comprehensive AI Ecosystem",
    description:
      "Access a full suite of AI tools through OneBrain AI, from decision-making engines to autonomous agents, all under one roof.",
  },
  {
    icon: "TestTube",
    title: "Flawless Software Delivery",
    description:
      "Leverage our Re-Test platform to automate quality assurance, ensuring your software is bug-free and market-ready faster than ever.",
  },
  {
    icon: "Users",
    title: "Global Talent Development",
    description:
      "Upskill your workforce with MentorPath AI corporate training programs, designed to keep your team at the forefront of technology.",
  },
  {
    icon: "Workflow",
    title: "End-to-End Automation",
    description:
      "From simple tasks to complex enterprise workflows, our automation solutions provide the scalability your business needs.",
  },
];

export const BenefitsSection = () => {
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
      {benefitList.map(({ icon, title, description }, index) => (
        <MotionDiv
          key={title}
          variants={itemVariants}
        >
          <Card
            className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-yellow-500/30 transition-all duration-300 group/number h-full backdrop-blur-sm"
          >
          <CardHeader>
            <div className="flex justify-between items-start">
              <div className="p-3 rounded-xl bg-yellow-500/10 text-yellow-400 mb-4 group-hover/number:bg-yellow-500/20 transition-colors">
                <Icon
                  name={icon as keyof typeof icons}
                  size={28}
                  color="currentColor"
                />
              </div>
              <span className="text-5xl font-bold text-white/5 transition-all duration-500 group-hover/number:text-yellow-500/10 select-none">
                0{index + 1}
              </span>
            </div>

            <CardTitle className="text-xl font-semibold text-foreground group-hover/number:text-yellow-400 transition-colors duration-300">{title}</CardTitle>
          </CardHeader>

            <CardContent className="text-muted-foreground leading-relaxed">
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
          <h2 className="text-lg text-yellow-400 mb-4 tracking-widest font-semibold uppercase">Strategic Advantage</h2>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Building the Future <br />
            <span className="text-transparent bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text">
              Together
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            We deliver more than just technology. We provide the ecosystem, expertise, and vision to help you lead in a digital-first world.
          </p>
        </MotionDiv>

        {benefitsContent}
      </div>
    </section>
  );
};
