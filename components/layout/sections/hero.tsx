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
    <section ref={ref} className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto pt-20 pb-4 md:pt-32 md:pb-8">
        <MotionDiv 
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2">
              <Badge className="bg-gradient-to-r from-yellow-400 to-amber-500">New</Badge>
            </span>
            <span> AI Agent OS is coming soon </span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              The Future of
              <span className="text-transparent px-2 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text whitespace-nowrap">
                AI Agent OS
              </span>
              is Here
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            {`Transform your business with our revolutionary AI Agent Operating System. Build, deploy, and manage intelligent agents that automate complex workflows, boost productivity, and drive innovation across any industry.`}
          </p>

          <MotionDiv 
            className="space-y-4 md:space-y-0 md:space-x-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Button className="w-5/6 md:w-1/4 font-bold group/arrow bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-black border-0">
              Start Building Agents
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>

            <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold"
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
          className="relative group mt-14"
          style={{ y, scale }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          <MotionDiv 
            className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-yellow-400 rounded-full blur-3xl"
            style={{ opacity: glow }}
          ></MotionDiv>
          
          {/* AI Dashboard Mockup */}
          <div className="w-full md:w-[1200px] mx-auto rounded-lg relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 overflow-hidden">
            {/* Dashboard Header */}
            <div className="bg-gray-800/80 px-6 py-4 border-b border-gray-700/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                                 <div className="flex items-center space-x-2">
                   <Image
                     src="/DIGITX White.png"
                     alt="DigitX"
                     width={80}
                     height={25}
                     className="h-6 w-auto"
                   />
                   <span className="text-sm text-gray-400">AI Agent OS - Dashboard</span>
                 </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-400">Live</span>
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6 space-y-6">
              {/* Agent Status Row */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-gray-800/60 rounded-lg p-4 border border-gray-700/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Active Agents</p>
                      <p className="text-2xl font-bold text-white">24</p>
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center">
                      <div className="w-5 h-5 bg-black rounded-sm"></div>
                    </div>
          </div>
        </div>

                <div className="bg-gray-800/60 rounded-lg p-4 border border-gray-700/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Tasks Completed</p>
                      <p className="text-2xl font-bold text-white">1,247</p>
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                      <div className="w-5 h-5 bg-white rounded-sm"></div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/60 rounded-lg p-4 border border-gray-700/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Efficiency</p>
                      <p className="text-2xl font-bold text-white">94%</p>
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center">
                      <div className="w-5 h-5 bg-white rounded-sm"></div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/60 rounded-lg p-4 border border-gray-700/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Cost Saved</p>
                      <p className="text-2xl font-bold text-white">$45K</p>
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                      <div className="w-5 h-5 bg-white rounded-sm"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Dashboard Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Agent List */}
                <div className="lg:col-span-2 bg-gray-800/60 rounded-lg p-6 border border-gray-700/30">
                  <h3 className="text-lg font-semibold text-white mb-4">Active AI Agents</h3>
                  <div className="space-y-3">
                    {[
                      { name: "Customer Service Agent", status: "Running", load: "78%" },
                      { name: "Data Analysis Agent", status: "Running", load: "45%" },
                      { name: "Sales Automation Agent", status: "Running", load: "92%" },
                      { name: "Content Generation Agent", status: "Idle", load: "12%" }
                    ].map((agent, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${agent.status === 'Running' ? 'bg-green-400 animate-pulse' : 'bg-gray-500'}`}></div>
                          <span className="text-white">{agent.name}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="text-sm text-gray-400">{agent.load}</span>
                          <span className={`text-sm px-2 py-1 rounded ${agent.status === 'Running' ? 'bg-green-400/20 text-green-400' : 'bg-gray-500/20 text-gray-400'}`}>
                            {agent.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Performance Chart */}
                <div className="bg-gray-800/60 rounded-lg p-6 border border-gray-700/30">
                  <h3 className="text-lg font-semibold text-white mb-4">Performance</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">CPU Usage</span>
                      <span className="text-white">67%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-yellow-400 to-amber-500 h-2 rounded-full" style={{ width: '67%' }}></div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Memory</span>
                      <span className="text-white">43%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-400 to-cyan-500 h-2 rounded-full" style={{ width: '43%' }}></div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Network</span>
                      <span className="text-white">89%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full" style={{ width: '89%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Workflow Visualization */}
              <div className="bg-gray-800/60 rounded-lg p-6 border border-gray-700/30">
                <h3 className="text-lg font-semibold text-white mb-4">Workflow Pipeline</h3>
                <div className="flex items-center justify-between">
                  {[
                    { step: "Data Input", status: "complete" },
                    { step: "AI Processing", status: "active" },
                    { step: "Analysis", status: "pending" },
                    { step: "Output", status: "pending" }
                  ].map((step, i) => (
                    <div key={i} className="flex items-center">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                        step.status === 'complete' ? 'bg-green-400 border-green-400' :
                        step.status === 'active' ? 'bg-gradient-to-r from-yellow-400 to-amber-500 border-amber-500 animate-pulse' :
                        'bg-gray-700 border-gray-600'
                      }`}>
                        <span className="text-sm font-bold text-black">{i + 1}</span>
                      </div>
                      <div className="ml-3 text-center">
                        <p className="text-sm text-white">{step.step}</p>
                        <p className={`text-xs ${
                          step.status === 'complete' ? 'text-green-400' :
                          step.status === 'active' ? 'text-amber-400' :
                          'text-gray-500'
                        }`}>{step.status}</p>
                      </div>
                      {i < 3 && <div className="w-8 h-px bg-gray-600 ml-4"></div>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </MotionDiv>
      </div>
    </section>
  );
};
