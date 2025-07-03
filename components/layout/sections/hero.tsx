"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { MotionDiv, useScroll, useTransform } from "@/components/ui/motion";
import { useRef } from "react";

export const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.02]);
  const glow = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.6]);

  return (
    <section ref={ref} className="container w-full px-4 sm:px-6 lg:px-8">
      <div className="grid place-items-center lg:max-w-screen-xl gap-6 sm:gap-8 mx-auto pt-16 pb-4 sm:pt-20 md:pt-32 md:pb-8">
        <MotionDiv 
          className="text-center space-y-6 sm:space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Badge variant="outline" className="text-xs sm:text-sm py-2 px-3">
            <span className="mr-2">
              <Badge className="bg-gradient-to-r from-yellow-400 to-amber-500 text-xs">New</Badge>
            </span>
            <span className="hidden sm:inline"> AI Agent OS is coming soon </span>
            <span className="sm:hidden"> AI Agent OS Soon </span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              The Future of
              <span className="text-transparent px-1 sm:px-2 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text block sm:inline sm:whitespace-nowrap">
                AI Agent OS
              </span>
              is Here
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-base sm:text-lg md:text-xl text-muted-foreground px-4 sm:px-0">
            {`Transform your business with our revolutionary AI Agent Operating System. Build, deploy, and manage intelligent agents that automate complex workflows, boost productivity, and drive innovation across any industry.`}
          </p>

          <MotionDiv 
            className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row items-center justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Button className="w-full sm:w-80 md:w-auto md:px-8 font-bold group/arrow bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-black border-0">
              Start Building Agents
              <ArrowRight className="size-4 sm:size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>

            <Button
              asChild
              variant="secondary"
              className="w-full sm:w-80 md:w-auto md:px-8 font-bold"
            >
              {/* <Link
                href="https://github.com/nobruf/shadcn-landing-page.git"
                target="_blank"
              >
                View Demo
              </Link> */}
            </Button>
          </MotionDiv>
        </MotionDiv>

        <MotionDiv 
          className="relative group mt-8 sm:mt-12 md:mt-14 w-full"
          style={{ y, scale }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          <MotionDiv 
            className="absolute top-2 sm:-top-4 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-16 sm:h-24 lg:h-80 bg-yellow-400 rounded-full blur-3xl"
            style={{ opacity: glow }}
          ></MotionDiv>
          
          {/* AI Dashboard Mockup */}
          <div className="w-full max-w-[1200px] mx-auto rounded-lg relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 overflow-hidden">
            {/* Dashboard Header */}
            <div className="bg-gray-800/80 px-3 sm:px-6 py-3 sm:py-4 border-b border-gray-700/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <Image
                    src="/DIGITX White.png"
                    alt="DigitX"
                    width={60}
                    height={20}
                    className="h-4 sm:h-6 w-auto"
                  />
                  <span className="text-xs sm:text-sm text-gray-400 hidden sm:inline">AI Agent OS - Dashboard</span>
                </div>
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs sm:text-sm text-green-400">Live</span>
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-3 sm:p-6 space-y-4 sm:space-y-6">
              {/* Agent Status Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
                <div className="bg-gray-800/60 rounded-lg p-3 sm:p-4 border border-gray-700/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-xs sm:text-sm">Active Agents</p>
                      <p className="text-lg sm:text-2xl font-bold text-white">24</p>
                    </div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 bg-black rounded-sm"></div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/60 rounded-lg p-3 sm:p-4 border border-gray-700/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-xs sm:text-sm">Tasks Completed</p>
                      <p className="text-lg sm:text-2xl font-bold text-white">1,247</p>
                    </div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-sm"></div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/60 rounded-lg p-3 sm:p-4 border border-gray-700/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-xs sm:text-sm">Efficiency</p>
                      <p className="text-lg sm:text-2xl font-bold text-white">94%</p>
                    </div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-sm"></div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/60 rounded-lg p-3 sm:p-4 border border-gray-700/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-xs sm:text-sm">Cost Saved</p>
                      <p className="text-lg sm:text-2xl font-bold text-white">$45K</p>
                    </div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-sm"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Dashboard Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                {/* Agent List */}
                <div className="lg:col-span-2 bg-gray-800/60 rounded-lg p-4 sm:p-6 border border-gray-700/30">
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Active AI Agents</h3>
                  <div className="space-y-2 sm:space-y-3">
                    {[
                      { name: "Customer Service Agent", status: "Running", load: "78%" },
                      { name: "Data Analysis Agent", status: "Running", load: "45%" },
                      { name: "Sales Automation Agent", status: "Running", load: "92%" },
                      { name: "Content Generation Agent", status: "Idle", load: "12%" }
                    ].map((agent, i) => (
                      <div key={i} className="flex items-center justify-between p-2 sm:p-3 bg-gray-700/30 rounded-lg">
                        <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
                          <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full flex-shrink-0 ${agent.status === 'Running' ? 'bg-green-400 animate-pulse' : 'bg-gray-500'}`}></div>
                          <span className="text-white text-xs sm:text-sm truncate">{agent.name}</span>
                        </div>
                        <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
                          <span className="text-xs sm:text-sm text-gray-400">{agent.load}</span>
                          <span className={`text-xs sm:text-sm px-2 py-1 rounded ${agent.status === 'Running' ? 'bg-green-400/20 text-green-400' : 'bg-gray-500/20 text-gray-400'}`}>
                            {agent.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Performance Chart */}
                <div className="bg-gray-800/60 rounded-lg p-4 sm:p-6 border border-gray-700/30">
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Performance</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-xs sm:text-sm">CPU Usage</span>
                      <span className="text-white text-xs sm:text-sm">67%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-yellow-400 to-amber-500 h-2 rounded-full" style={{ width: '67%' }}></div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-xs sm:text-sm">Memory</span>
                      <span className="text-white text-xs sm:text-sm">43%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-400 to-cyan-500 h-2 rounded-full" style={{ width: '43%' }}></div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-xs sm:text-sm">Network</span>
                      <span className="text-white text-xs sm:text-sm">89%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full" style={{ width: '89%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Workflow Visualization */}
              <div className="bg-gray-800/60 rounded-lg p-4 sm:p-6 border border-gray-700/30">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Workflow Pipeline</h3>
                <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                  {[
                    { step: "Data Input", status: "complete" },
                    { step: "AI Processing", status: "active" },
                    { step: "Analysis", status: "pending" },
                    { step: "Output", status: "pending" }
                  ].map((step, i) => (
                    <div key={i} className="flex items-center w-full sm:w-auto">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border-2 ${
                        step.status === 'complete' ? 'bg-green-400 border-green-400' :
                        step.status === 'active' ? 'bg-gradient-to-r from-yellow-400 to-amber-500 border-amber-500 animate-pulse' :
                        'bg-gray-700 border-gray-600'
                      }`}>
                        <span className="text-xs sm:text-sm font-bold text-black">{i + 1}</span>
                      </div>
                      <div className="ml-3 text-center sm:text-left">
                        <p className="text-xs sm:text-sm text-white">{step.step}</p>
                        <p className={`text-xs ${
                          step.status === 'complete' ? 'text-green-400' :
                          step.status === 'active' ? 'text-amber-400' :
                          'text-gray-500'
                        }`}>{step.status}</p>
                      </div>
                      {i < 3 && <div className="hidden sm:block w-6 md:w-8 h-px bg-gray-600 ml-4"></div>}
                      {i < 3 && <div className="sm:hidden w-full h-px bg-gray-600 mt-2"></div>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-16 sm:h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </MotionDiv>
      </div>
    </section>
  );
};
