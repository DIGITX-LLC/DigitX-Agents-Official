"use client";

import { Badge } from "@/components/ui/badge";
import { MotionDiv } from "@/components/ui/motion";
import CardSwap, { Card } from "@/components/ui/CardSwap";
import { FallbackImage } from "@/components/ui/fallback-image";

const products = [
  {
    name: "OneBrain AI",
    description: "Bangladesh's First Multi AI Hub Platform",
    category: "AI Platform",
    icon: "🧠",
    color: "from-purple-400 to-purple-600",
    features: ["Multi AI Models", "Local Innovation", "AI Hub", "Machine Learning"],
    image: "/oneBrain.png",
    url: "https://onebrain.app"
  },
  {
    name: "Re-Test",
    description: "Test Engineering Service or Platform",
    category: "Testing Platform",
    icon: "🔧",
    color: "from-green-400 to-green-600",
    features: ["Test Engineering", "Quality Assurance", "Automation", "Performance Testing"],
    image: "/retest.png",
    url: "https://re-test.dev"
  },
  {
    name: "DigitX Events",
    description: "Global Training Solutions for Corporate Trainings",
    category: "Training & Events",
    icon: "🎯",
    color: "from-blue-400 to-blue-600",
    features: ["Corporate Training", "Global Reach", "Expert Trainers", "Custom Solutions"],
    image: "/screenshot-digitx-agent-os.png",
    url: "https://digitxevents.com"
  },
  {
    name: "DigitX Agent OS",
    description: "Global AI Agents Development Solution",
    category: "AI Agent OS",
    icon: "🤖",
    color: "from-yellow-400 to-amber-500",
    features: ["AI Agents", "Workflow Automation", "Global Solution", "Enterprise Ready"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop&crop=top",
    url: "https://digitxagent.com"
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
                <Card key={index} className="product-card relative z-0">
                  <div className="h-full bg-gradient-to-br from-gray-900 to-black border border-yellow-400/30 rounded-lg overflow-hidden overflow-visible relative">
                    {/* Modern Browser Tab Bar */}
                    <div className="bg-gradient-to-r from-slate-900/95 via-gray-800/95 to-slate-900/95 backdrop-blur-md px-4 py-3 border-b border-yellow-400/20 shadow-2xl">
                      <div className="flex items-center gap-3 mb-2.5">
                        {/* Modern Window Controls */}
                        <div className="flex items-center gap-2">
                          <div className="group w-3 h-3 bg-gradient-to-br from-red-400 to-red-600 rounded-full shadow-lg hover:shadow-red-400/50 hover:scale-110 transition-all duration-300 cursor-pointer relative">
                            <div className="absolute inset-0 bg-red-400/30 rounded-full blur-sm group-hover:blur-md transition-all duration-300"></div>
                          </div>
                          <div className="group w-3 h-3 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg hover:shadow-yellow-400/50 hover:scale-110 transition-all duration-300 cursor-pointer relative">
                            <div className="absolute inset-0 bg-yellow-400/30 rounded-full blur-sm group-hover:blur-md transition-all duration-300"></div>
                          </div>
                          <div className="group w-3 h-3 bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-lg hover:shadow-green-400/50 hover:scale-110 transition-all duration-300 cursor-pointer relative">
                            <div className="absolute inset-0 bg-green-400/30 rounded-full blur-sm group-hover:blur-md transition-all duration-300"></div>
                          </div>
                        </div>

                        {/* Stylish Tab */}
                        <div className="flex-1 ml-3">
                          <div className="group relative bg-gradient-to-r from-gray-800/90 to-gray-700/90 backdrop-blur-sm border border-yellow-400/40 rounded-t-xl px-4 py-2 max-w-60 flex items-center gap-3 hover:border-yellow-400/60 hover:shadow-lg hover:shadow-yellow-400/20 transition-all duration-500 overflow-hidden">

                            {/* Subtle animated glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-transparent to-amber-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>

                            {/* Icon with enhanced styling */}
                            <div className="relative text-xl shrink-0 filter drop-shadow-lg group-hover:scale-110 group-hover:drop-shadow-2xl transition-all duration-300 z-10">
                              {product.icon}
                            </div>

                            {/* URL with modern typography */}
                            <span className="relative text-xs text-slate-200 truncate font-semibold tracking-wide group-hover:text-white transition-all duration-300 z-10">
                              {product.name === "DigitX Events" ? "digitxevents.com" :
                                product.name === "Re-Test" ? "re-test.dev" :
                                  product.name === "OneBrain AI" ? "onebrain.app" :
                                    product.name === "DigitX Agent OS" ? "digitx.ai" : product.name}
                            </span>

                            {/* Premium close button */}
                            <div className="relative w-4 h-4 rounded-full bg-gray-600/60 hover:bg-gradient-to-br hover:from-red-400 hover:to-red-600 flex items-center justify-center ml-auto transition-all duration-300 cursor-pointer group-hover:scale-110 z-10 shadow-md">
                              <div className="text-gray-300 hover:text-white text-xs font-bold transition-colors duration-300">×</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Premium Address Bar */}
                      <div className="bg-gradient-to-r from-slate-900/80 to-gray-900/80 backdrop-blur-md border border-yellow-400/30 rounded-xl px-4 py-2.5 flex items-center gap-3 shadow-inner hover:border-yellow-400/50 transition-all duration-300 group">
                        <div className="text-green-400 text-sm filter drop-shadow-sm">🔒</div>
                        <span className="text-sm text-slate-200 font-mono tracking-wide group-hover:text-white transition-colors duration-300 flex-1 truncate">
                          {product.url}
                        </span>
                        <div className="flex items-center gap-2">
                          <div className="text-slate-400 hover:text-yellow-400 text-sm cursor-pointer transition-colors duration-300">⭐</div>
                          <div className="text-slate-400 hover:text-yellow-400 text-sm cursor-pointer transition-colors duration-300 hover:rotate-180 transition-transform">⟳</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col h-full relative">
                      {/* Product Image - Fixed height container */}
                      <div className="relative w-full h-48 overflow-visible">
                        <FallbackImage
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 400px"
                          fallbackSrc="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop&crop=top"
                          quality={75}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      </div>

                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${product.color} opacity-5 rounded-lg pointer-events-none z-0`} />

                      <div className="pb-7 px-6 mb-5 h-full flex flex-col flex-1 justify-between relative z-10">
                        {/* Header */}
                        <div className="mb-4">
                          <h3 className="text-lg font-bold text-white mb-2">
                            {product.name}
                          </h3>
                          <Badge
                            variant="outline"
                            className={`border-yellow-400/50 text-yellow-400 bg-yellow-400/20 text-xs`}
                          >
                            {product.category}
                          </Badge>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                          {product.description}
                        </p>

                        {/* Features */}
                        <div className="mt-auto mb-20 space-y-2">
                          <div className="grid grid-cols-2 gap-2 mb-1">
                            {product.features.map((feature, idx) => (
                              <div
                                key={idx}
                                className="px-3 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-md text-xs text-yellow-400 text-center font-medium"
                              >
                                {feature}
                              </div>
                            ))}
                          </div>

                          {/* Visit Site Button */}
                          <button
                            onClick={() => window.open(product.url, '_blank')}
                            className="w-full py-2 bg-yellow-400/20 hover:bg-yellow-400/30 border border-yellow-400/50 rounded-lg text-yellow-400 text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20 z-50 relative"
                          >
                            Visit Site →
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