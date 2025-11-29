"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MotionDiv } from "@/components/ui/motion";
import { FallbackImage } from "@/components/ui/fallback-image";
import { 
  LinkedinIcon, 
  TwitterIcon, 
  GithubIcon,
  MailIcon,
  UserIcon,
  BrainIcon,
  CodeIcon,
  PresentationIcon,
  BarChart3Icon,
  ShieldIcon,
  RocketIcon,
  TrendingUpIcon
} from "lucide-react";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import Link from "next/link";

interface AgentTypeProps {
  icon: string;
  name: string;
  description: string;
  capabilities: string[];
  useCases: string[];
  badge: string;
}

interface TeamMember {
  name: string;
  role: string;
  specialization: string;
  image: string;
  badge: string;
  bio: string;
  skills: string[];
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    email?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Amit Das",
    role: "CEO & Founder",
    specialization: "Silicon Valley Software Engineering",
    image: "/amit.png",
    badge: "Silicon Valley Veteran",
    bio: "Silicon Valley talent with over 15 years in software development. Leading DigitX's mission to revolutionize business automation through AI Agent OS.",
    skills: ["Software Development", "AI Strategy", "Product Vision", "Silicon Valley Leadership"],
    social: {
      linkedin: "https://linkedin.com/in/amitdas",
      twitter: "https://twitter.com/amitdas",
      email: "admin@digitxgroup.com"
    }
  },
  {
    name: "Sajib Pal",
    role: "Director of Engineering",
    specialization: "AI Architecture & Engineering",
    image: "/sajib.png",
    badge: "Technical Mastermind",
    bio: "Architect of our AI Agent OS platform. Expert in distributed systems, machine learning, and scalable cloud infrastructure.",
    skills: ["AI/ML Engineering", "System Architecture", "Cloud Computing", "DevOps"],
    social: {
      linkedin: "https://linkedin.com/in/sajibpal",
      github: "https://github.com/sajibpal",
      email: "sajib@digitxgroup.com"
    }
  },
  {
    name: "Arnab Biswas",
    role: "Director of Products",
    specialization: "Product Strategy & Innovation",
    image: "/arnab.png",
    badge: "Product Visionary",
    bio: "Leading product innovation and strategic roadmap for AI Agent OS. Expert in product management, user experience, and market positioning.",
    skills: ["Product Strategy", "Innovation Management", "Market Analysis", "User Experience"],
    social: {
      linkedin: "https://linkedin.com/in/arnabbiswas",
      github: "https://github.com/arnabbiswas",
      email: "arnab@digitxgroup.com"
    }
  },
  {
    name: "Jesan Chowdhury",
    role: "Assistant Director of Product Sales",
    specialization: "Product Sales & Business Development",
    image: "/jesan.png",
    badge: "Sales Expert",
    bio: "Driving product sales growth and building strategic partnerships. Expert in sales processes, customer acquisition, and business development.",
    skills: ["Product Sales", "Business Development", "Customer Acquisition", "Sales Strategy"],
    social: {
      linkedin: "https://linkedin.com/in/jesanchowdhury",
      twitter: "https://twitter.com/jesanchowdhury",
      email: "jesan@digitxgroup.com"
    }
  },
  {
    name: "Trijeet Halder",
    role: "Assistant Director of Engineering",
    specialization: "Software Engineering & Architecture",
    image: "/trijeet.png",
    badge: "Engineering Expert",
    bio: "Building robust software solutions and engineering excellence. Expert in software architecture, system design, and technical leadership.",
    skills: ["Software Engineering", "System Architecture", "Technical Leadership", "AI Development"],
    social: {
      linkedin: "https://linkedin.com/in/shimantohalder",
      github: "https://github.com/shimantohalder",
      email: "shimanto@digitxgroup.com"
    }
  },
  {
    name: "Limu Zaman",
    role: "AI UI/UX Designer",
    specialization: "AI Interface Design & User Experience",
    image: "/limu.png",
    badge: "Design Innovator",
    bio: "Creating intuitive AI-powered interfaces and exceptional user experiences. Expert in designing complex AI systems with human-centered approaches.",
    skills: ["AI Interface Design", "User Experience", "Interaction Design", "Design Systems"],
    social: {
      linkedin: "https://linkedin.com/in/limuzaman",
      twitter: "https://twitter.com/limuzaman",
      email: "limu@digitxgroup.com"
    }
  },
  {
    name: "Priya Ghosh",
    role: "People Operation and Management Director",
    specialization: "Human Resources & Operations",
    image: "/priya.png",
    badge: "People Leader",
    bio: "Leading people operations and driving organizational excellence. Expert in talent management, employee engagement, and operational efficiency.",
    skills: ["Human Resources", "Operations Management", "Talent Development", "Organizational Strategy"],
    social: {
      linkedin: "https://linkedin.com/in/priyaghosh",
      twitter: "https://twitter.com/priyaghosh",
      email: "priya@digitxgroup.com"
    }
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const TeamSection = () => {
  const agentTypes: AgentTypeProps[] = [
    {
      icon: "Headphones",
      name: "Customer Service Agent",
      description: "24/7 intelligent customer support automation that never sleeps.",
      capabilities: ["Multi-language Support", "Sentiment Analysis", "Ticket Routing", "FAQ Resolution"],
      useCases: ["Live Chat", "Email Support", "Voice Assistance"],
      badge: "Most Popular"
    },
    {
      icon: "TrendingUp",
      name: "Sales Automation Agent",
      description: "Drive revenue growth with AI-powered sales processes.",
      capabilities: ["Lead Scoring", "Pipeline Management", "Follow-up Automation", "CRM Integration"],
      useCases: ["Lead Generation", "Deal Closing", "Customer Nurturing"],
      badge: "High ROI"
    },
    {
      icon: "BarChart3",
      name: "Data Analysis Agent",
      description: "Transform raw data into actionable business insights instantly.",
      capabilities: ["Pattern Recognition", "Predictive Analytics", "Report Generation", "KPI Monitoring"],
      useCases: ["Business Intelligence", "Market Research", "Performance Tracking"],
      badge: "Enterprise Ready"
    },
    {
      icon: "FileText",
      name: "Content Generation Agent",
      description: "Create compelling content at scale with AI creativity.",
      capabilities: ["Content Writing", "SEO Optimization", "Brand Voice", "Multi-format Support"],
      useCases: ["Blog Posts", "Marketing Copy", "Product Descriptions"],
      badge: "Creative AI"
    },
    {
      icon: "GitBranch",
      name: "Workflow Orchestration Agent",
      description: "Automate complex business processes across multiple systems.",
      capabilities: ["Process Automation", "System Integration", "Task Scheduling", "Error Handling"],
      useCases: ["Supply Chain", "HR Processes", "Financial Operations"],
      badge: "Integration Master"
    },
    {
      icon: "Shield",
      name: "Security & Compliance Agent",
      description: "Protect your business with intelligent security monitoring.",
      capabilities: ["Threat Detection", "Compliance Monitoring", "Risk Assessment", "Incident Response"],
      useCases: ["Cybersecurity", "Audit Compliance", "Data Protection"],
      badge: "Security First"
    },
    {
      icon: "Users",
      name: "HR Management Agent",
      description: "Streamline human resources with intelligent automation.",
      capabilities: ["Recruitment Screening", "Employee Onboarding", "Performance Tracking", "Policy Management"],
      useCases: ["Talent Acquisition", "Employee Engagement", "HR Analytics"],
      badge: "People Focused"
    },
    {
      icon: "DollarSign",
      name: "Financial Operations Agent",
      description: "Optimize financial processes with precision and accuracy.",
      capabilities: ["Invoice Processing", "Expense Management", "Financial Reporting", "Fraud Detection"],
      useCases: ["Accounting Automation", "Budget Planning", "Financial Analysis"],
      badge: "Precision Driven"
    }
  ];

  return (
    <section id="team" className="container w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-sm sm:text-base lg:text-lg text-yellow-400 text-center mb-2 tracking-wider font-medium">
          Intelligent Automation
        </h2>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold leading-tight">
          Specialized AI Solutions
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {agentTypes.map(
          (
            { icon, name, description, capabilities, useCases, badge },
            index
          ) => (
            <Card
              key={index}
              className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-yellow-400/20"
            >
              <CardHeader className="text-center pb-3 sm:pb-4 px-4 sm:px-6 pt-4 sm:pt-6">
                <div className="mx-auto mb-3 sm:mb-4 p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={20}
                    className="sm:w-7 sm:h-7"
                    color="black"
                  />
                </div>
                <div className="space-y-2">
                  <Badge className="bg-yellow-400/10 text-yellow-400 hover:bg-yellow-400/20 text-xs px-2 py-1">
                    {badge}
                  </Badge>
                  <CardTitle className="text-base sm:text-lg leading-tight">
                    {name}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="flex flex-col flex-1 space-y-3 sm:space-y-4 px-4 sm:px-6 pb-4 sm:pb-6">
                <p className="text-sm sm:text-base text-muted-foreground text-center leading-relaxed">
                  {description}
                </p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-xs sm:text-sm mb-2 text-yellow-400">Key Capabilities:</h4>
                    <ul className="text-xs space-y-1">
                      {capabilities.map((capability, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2 flex-shrink-0 mt-1.5"></div>
                          <span className="leading-relaxed">{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-xs sm:text-sm mb-2 text-yellow-400">Use Cases:</h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {useCases.map((useCase, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs px-2 py-1">
                          {useCase}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};

export const DreamTeamSection = () => {
  return (
    <section className="container w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
          Meet The{" "}
          <span className="text-transparent bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text">
            Dream Team
          </span>
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
          The brilliant minds behind DigitX. Our diverse team of experts from our Bangladesh Center of Excellence is revolutionizing how businesses interact with artificial intelligence.
        </p>
      </MotionDiv>

      <MotionDiv
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 justify-items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {teamMembers.map((member) => (
          <MotionDiv key={member.name} variants={itemVariants} className="w-full">
            <div className="group relative w-full overflow-hidden rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                <FallbackImage
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  fallbackSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                />
                
                {/* Social Links Overlay */}
                <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 translate-x-12 group-hover:translate-x-0 transition-transform duration-300 ease-out">
                  {member.social.linkedin && (
                    <Link href={member.social.linkedin} target="_blank" className="p-2 bg-black/50 hover:bg-yellow-400 hover:text-black rounded-full backdrop-blur-md transition-colors text-white">
                      <LinkedinIcon size={18} />
                    </Link>
                  )}
                  {member.social.twitter && (
                    <Link href={member.social.twitter} target="_blank" className="p-2 bg-black/50 hover:bg-yellow-400 hover:text-black rounded-full backdrop-blur-md transition-colors text-white">
                      <TwitterIcon size={18} />
                    </Link>
                  )}
                  {member.social.github && (
                    <Link href={member.social.github} target="_blank" className="p-2 bg-black/50 hover:bg-yellow-400 hover:text-black rounded-full backdrop-blur-md transition-colors text-white">
                      <GithubIcon size={18} />
                    </Link>
                  )}
                  {member.social.email && (
                    <Link href={`mailto:${member.social.email}`} className="p-2 bg-black/50 hover:bg-yellow-400 hover:text-black rounded-full backdrop-blur-md transition-colors text-white">
                      <MailIcon size={18} />
                    </Link>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 relative z-20">
                <div className="mb-2">
                  <Badge variant="outline" className="border-yellow-500/30 text-yellow-400 bg-yellow-400/10 text-[10px] uppercase tracking-wider mb-2">
                    {member.badge}
                  </Badge>
                  <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-yellow-400/80 font-medium">
                    {member.role}
                  </p>
                </div>
                
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4 group-hover:line-clamp-none transition-all duration-300">
                  {member.bio}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                  {member.skills.slice(0, 3).map((skill) => (
                    <span key={skill} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-white/60 border border-white/5">
                      {skill}
                    </span>
                  ))}
                  {member.skills.length > 3 && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-white/60 border border-white/5">
                      +{member.skills.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </MotionDiv>
        ))}
      </MotionDiv>

      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mt-12 sm:mt-16"
      >
        <div className="bg-gradient-to-r from-yellow-400/5 to-amber-500/5 rounded-2xl p-6 sm:p-10 border border-yellow-400/10 backdrop-blur-sm mx-4 sm:mx-0 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500/5 via-transparent to-transparent opacity-50" />
          <h3 className="relative z-10 text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 leading-tight">
            <span className="text-transparent bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text">
              Working from Bangladesh for Global Companies from 2019
            </span>
          </h3>
          <p className="relative z-10 text-sm sm:text-base lg:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Since 2019, our talented team based in Bangladesh has been delivering world-class AI solutions to global companies. We combine local expertise with international standards, building cutting-edge technology that serves businesses worldwide.
          </p>
        </div>
      </MotionDiv>
    </section>
  );
};
