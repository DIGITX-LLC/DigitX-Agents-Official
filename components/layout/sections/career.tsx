import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface CareerBenefit {
  icon: keyof typeof icons;
  title: string;
  description: string;
}

const benefits: CareerBenefit[] = [
  {
    icon: "Home",
    title: "Hybrid Work Model",
    description: "4 days in office collaboration with 1 day work from home flexibility for perfect work-life balance."
  },
  {
    icon: "Coffee",
    title: "Daily Free Meals",
    description: "Enjoy delicious home-made meals every day at the office, prepared fresh with love and care."
  },
  {
    icon: "Cookie",
    title: "Unlimited Snacks",
    description: "Stay energized throughout the day with our unlimited snacks and beverages available 24/7."
  },
  {
    icon: "Calendar",
    title: "Flexible Paid Leaves",
    description: "Take time off when you need it most with our flexible and generous paid leave policy."
  },
  {
    icon: "TrendingUp",
    title: "Performance Bonuses",
    description: "Get rewarded for your excellent work with performance-based bonuses and recognition programs."
  },
  {
    icon: "Plane",
    title: "International Tours",
    description: "Expand your horizons with company-sponsored international tours and global collaboration opportunities."
  }
];

export const Career = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <Badge variant="outline" className="text-sm text-yellow-600 border-yellow-300">
          Career
        </Badge>
        <h2 className="text-lg text-muted-foreground mt-4 mb-2 tracking-wider">
          JOIN OUR TEAM
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
          Why Work With Us
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Discover the amazing benefits and opportunities that make DigitX Bangladesh 
          the perfect place to build your career in AI and technology.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map(({ icon, title, description }) => (
          <Card key={title} className="bg-muted/50 border-yellow-400/20 hover:bg-yellow-50/5 transition-colors">
            <CardHeader>
              <div className="mb-4 p-3 bg-yellow-400/10 rounded-full w-fit">
                <Icon
                  name={icon}
                  size={24}
                  color="currentColor"
                  className="text-yellow-400"
                />
              </div>
              <CardTitle className="text-xl">{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                {description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-lg p-8 border border-yellow-400/20">
          <h3 className="text-2xl font-bold mb-4 text-yellow-400">
            Ready to Start Your Journey?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our innovative team and be part of the AI revolution. We&apos;re always looking for 
            talented individuals who share our passion for technology and excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors"
            >
              Apply Now
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400/10 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}; 