import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Video, Users, CheckCircle, Clock, Building } from "lucide-react";

export const CommunitySection = () => {
  return (
    <section id="community" className="py-12 ">
      <hr className="border-secondary" />
      <div className="container py-20 sm:py-20">
        <div className="lg:w-[70%] mx-auto">
          <Card className="bg-background border-none shadow-none text-center flex flex-col items-center justify-center">
            <CardHeader>
              <div className="mb-6">
                <Badge className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-semibold px-4 py-2 mb-4">
                  📅 Enterprise Solutions
                </Badge>
              </div>
              <CardTitle className="text-4xl md:text-5xl font-bold flex flex-col items-center">
                <div className="mb-6 p-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center">
                  <Calendar className="w-10 h-10 text-black" />
                </div>
                <div>
                  Ready to see
                  <span className="text-transparent pl-2 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text">
                    AI Agents in Action?
                  </span>
                </div>
              </CardTitle>
            </CardHeader>
            
            <CardContent className="lg:w-[90%] space-y-6">
              <p className="text-xl text-muted-foreground">
                Book a personalized demo with our AI experts. See exactly how DigitX AI Agent OS will transform your business operations! 🎯
              </p>

              {/* Demo Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
                <div className="flex flex-col items-center p-4 rounded-lg bg-muted/30">
                  <Video className="w-8 h-8 text-yellow-400 mb-2" />
                  <h4 className="font-semibold">Live Demo</h4>
                  <p className="text-sm text-muted-foreground text-center">See AI agents working in real-time</p>
                </div>
                <div className="flex flex-col items-center p-4 rounded-lg bg-muted/30">
                  <Users className="w-8 h-8 text-yellow-400 mb-2" />
                  <h4 className="font-semibold">Expert Consultation</h4>
                  <p className="text-sm text-muted-foreground text-center">1-on-1 with our AI specialists</p>
                </div>
                <div className="flex flex-col items-center p-4 rounded-lg bg-muted/30">
                  <Building className="w-8 h-8 text-yellow-400 mb-2" />
                  <h4 className="font-semibold">Custom Solutions</h4>
                  <p className="text-sm text-muted-foreground text-center">Tailored to your industry needs</p>
                </div>
              </div>

              {/* What You'll See */}
              <div className="bg-muted/20 rounded-lg p-6 space-y-4">
                <h3 className="text-lg font-semibold text-yellow-400 mb-4">What You&apos;ll See in Your Demo:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-sm">AI agents automating your workflows</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-sm">Real-time performance analytics</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-sm">Integration with your existing tools</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-sm">ROI projections for your business</span>
                  </div>
                </div>
              </div>

              {/* Booking Form */}
              <div className="max-w-lg mx-auto space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <Input 
                    type="text" 
                    placeholder="Your Name"
                    className="flex-1"
                  />
                  <Input 
                    type="email" 
                    placeholder="Business Email"
                    className="flex-1"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <Input 
                    type="text" 
                    placeholder="Company Name"
                    className="flex-1"
                  />
                  <Input 
                    type="text" 
                    placeholder="Team Size"
                    className="flex-1"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-black font-semibold py-3">
                  📅 Book Your Free Enterprise Demo
                </Button>
                <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>30 minutes</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Video className="w-4 h-4" />
                    <span>Via Zoom/Teams</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-4 h-4" />
                    <span>100% Free</span>
                  </div>
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex flex-col gap-3">
              <p className="text-sm text-muted-foreground max-w-md">
                Join <span className="font-semibold text-yellow-400">200+</span> enterprise clients who&apos;ve already seen 
                <span className="font-semibold text-yellow-400"> 40% efficiency gains</span> with our AI agents
              </p>
              <p className="text-xs text-muted-foreground">
                * No sales pressure • Technical deep-dive available • Custom implementation roadmap included
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
      <hr className="border-secondary" />
    </section>
  );
};
