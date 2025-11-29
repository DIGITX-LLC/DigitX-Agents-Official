"use client";

import { Badge } from "@/components/ui/badge";
import { MotionDiv } from "@/components/ui/motion";
import CardSwap, { Card } from "@/components/ui/CardSwap";
import { FallbackImage } from "@/components/ui/fallback-image";

const products = [
  {
    name: "OneBrain AI",
    description: "The First Multi AI Hub Platform",
    category: "AI Platform",
    icon: "🧠",
    color: "from-purple-400 to-purple-600",
    features: ["Multi AI Models", "Innovation Hub", "AI Ecosystem", "Machine Learning"],
    image: "/screenshot-onebrain-ai-latest.png",
    url: "https://onebrain.app"
  },
  {
    name: "Re-Test",
    description: "Test Engineering Service or Platform",
    category: "Testing Platform",
    icon: "🔧",
    color: "from-green-400 to-green-600", 
    features: ["Test Engineering", "Quality Assurance", "Automation", "Performance Testing"],
    image: "/screenshot-onebrain-ai.png",
    url: "https://re-test.dev"
  },
  {
    name: "MentorPath AI",
    description: "Global Training Solutions for Corporate Trainings",
    category: "Training & Events",
    icon: "🎯",
    color: "from-blue-400 to-blue-600",
    features: ["Corporate Training", "Global Reach", "Expert Trainers", "Custom Solutions"],
    image: "/screenshot-digitx-agent-os.png",
    url: "https://mentorpath.ai"
  }
];

export const ProductsSection = () => {
  return (
    <section className="container pt-0 pb-24 sm:pt-0 sm:pb-32 relative overflow-visible">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
        {/* Left Side - Content */}
        <MotionDiv
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="lg:col-span-2"
        >
          <div className="space-y-6 mt-5">
            <Badge 
              variant="outline" 
              className="border-yellow-400/50 text-yellow-400 bg-yellow-400/10 px-4 py-2"
            >
              Our Product Portfolio
            </Badge>
            
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Comprehensive{" "}
              <span className="text-transparent bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text">
                DigitX Solutions
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              From AI-powered automation to corporate training, we deliver cutting-edge solutions 
              that transform how businesses operate and grow in the digital age.
            </p>


          </div>
        </MotionDiv>

        {/* Right Side - CardSwap Animation */}
        <MotionDiv
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative lg:col-span-3"
        >
          <div className="absolute inset-0 bg-yellow-500/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="relative w-full h-[800px] overflow-visible">
            <CardSwap
               width={700}
               height={500}
               cardDistance={70}
               verticalDistance={80}
               delay={4000}
               pauseOnHover={true}
               easing="elastic"
             >
              {products.map((product, index) => (
                <Card key={index} className="product-card">
                  <div className="h-full bg-black/80 border border-white/10 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm">
                    {/* Modern Browser Tab Bar */}
                    <div className="bg-black/40 backdrop-blur-xl px-4 py-3 border-b border-white/5 flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                      </div>
                      
                      {/* Address Bar */}
                      <div className="flex-1 bg-white/5 border border-white/10 rounded-lg h-8 flex items-center px-3 gap-2 text-xs text-muted-foreground font-mono">
                        <span className="text-green-500">🔒</span>
                        <span className="truncate flex-1">{product.url}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col h-full">
                      {/* Product Image - Fixed height container */}
                      <div className="relative w-full h-56 overflow-hidden group">
                        <FallbackImage 
                          src={product.image} 
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, 400px"
                          fallbackSrc="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop&crop=top"
                          quality={75}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                        
                        <div className="absolute bottom-4 left-4 right-4">
                          <Badge 
                            variant="outline" 
                            className={`bg-black/50 border-white/10 text-white backdrop-blur-md`}
                          >
                            {product.category}
                          </Badge>
                        </div>
                      </div>

                      <div className="p-6 flex flex-col flex-1 justify-between bg-gradient-to-b from-black/0 to-black/40">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                            <span className="text-3xl">{product.icon}</span>
                            {product.name}
                          </h3>

                          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                            {product.description}
                          </p>
                        </div>

                        <div className="space-y-6">
                          <div className="flex flex-wrap gap-2">
                            {product.features.map((feature, idx) => (
                              <div 
                                key={idx}
                                className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-[10px] text-zinc-300 uppercase tracking-wider font-medium"
                              >
                                {feature}
                              </div>
                            ))}
                          </div>
                          
                          <button 
                            onClick={() => window.open(product.url, '_blank')}
                            className="w-full py-3.5 bg-yellow-500 hover:bg-yellow-400 text-black rounded-xl font-bold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20 flex items-center justify-center gap-2"
                          >
                            Visit Platform
                            <span className="text-lg">→</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}; 