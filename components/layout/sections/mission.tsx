"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MotionDiv } from "@/components/ui/motion";
import { Brain, ShieldCheck, GraduationCap } from "lucide-react";

interface MissionProps {
  icon: React.ElementType;
  title: string;
  description: string;
  highlight: string;
}

const missions: MissionProps[] = [
  {
    icon: Brain,
    title: "Democratizing AI Access",
    description:
      "We are building OneBrain AI as an all-in-one platform to make advanced AI tools affordable and accessible for everyone, everywhere in the world.",
    highlight: "AI for All",
  },
  {
    icon: ShieldCheck,
    title: "Ensuring Digital Excellence",
    description:
      "Through Re-Test, we solve AI-generated code quality issues and provide comprehensive software engineering testing to ensure reliable, bug-free solutions.",
    highlight: "Quality First",
  },
  {
    icon: GraduationCap,
    title: "Empowering Through Knowledge",
    description:
      "With MentorPath AI, we provide global corporate training and learning resources to bridge the skills gap and prepare the workforce for the future.",
    highlight: "Lifelong Learning",
  },
];

export const MissionSection = () => {
  return (
    <section id="mission" className="container py-24 sm:py-32 relative">
      <div className="text-center mb-16">
        <Badge variant="outline" className="mb-4 border-yellow-400/50 text-yellow-400 bg-yellow-400/10 text-sm py-1 px-4 tracking-widest uppercase">
          Inspiring Innovation
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Combining Innovation with{" "}
          <span className="text-transparent bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text">
            Global Impact
          </span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We are on a mission to simplify the digital future by unifying AI accessibility, 
          software quality, and professional development under one roof.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {missions.map(({ icon: Icon, title, description, highlight }) => (
          <MotionDiv
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <Card className="h-full bg-gradient-to-b from-white/5 to-transparent border-white/10 hover:border-yellow-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/10 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <CardHeader className="relative z-10">
                <div className="mb-6 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-yellow-500/20 group-hover:border-yellow-500/50 transition-all duration-300 shadow-lg">
                  <Icon className="w-7 h-7 text-muted-foreground group-hover:text-yellow-400 transition-colors" />
                </div>
                <div className="flex items-start justify-between gap-4">
                  <CardTitle className="text-2xl font-bold">{title}</CardTitle>
                  <Badge variant="secondary" className="shrink-0 text-[10px] uppercase tracking-wider font-medium bg-white/5 text-muted-foreground border-white/10">
                    {highlight}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {description}
                </p>
              </CardContent>
            </Card>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
};

