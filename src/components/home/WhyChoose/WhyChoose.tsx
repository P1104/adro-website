"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, Database, MessageSquare, Check, ArrowRight, Rocket, LineChart, Users, BrainCircuit } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";


interface WhyChooseProps {
    competitor?: string;
}

export const WhyChoose = ({ competitor = "Traditional BI tools" }: WhyChooseProps) => {
    const useCases = [
        {
            icon: Rocket,
            label: "Startup",
            tag: "Scale Faster",
            desc: "Go from raw data to actionable insights in minutes — no BI team required.",
            dark: false,
        },
        {
            icon: LineChart,
            label: "Analysts",
            tag: "Work Smarter",
            desc: "Skip the query writing. Ask in plain English and get charts instantly.",
            dark: false,
        },
        {
            icon: Users,
            label: "Teams",
            tag: "Zero Friction",
            desc: "Collaborate on dashboards without needing technical expertise.",
            dark: false,
        },
        {
            icon: BrainCircuit,
            label: "Enterprise",
            tag: "AI Native",
            desc: "Embed AI analytics into every business decision at scale.",
            dark: false,
        },
    ];

    const workflowSteps = [
        {
            step: "01",
            label: "Upload Data",
            icon: Database,
            description: "Drop in any CSV, Excel, or connect your database. ADRO understands your schema automatically.",
        },
        {
            step: "02",
            label: "Ask Questions",
            icon: MessageSquare,
            description: "Type questions in plain English. No SQL, no formulas, no configuration needed.",
        },
        {
            step: "03",
            label: "Generate Insights",
            icon: Sparkles,
            description: "AI surfaces patterns, anomalies, and trends your team would have missed.",
        },
        {
            step: "04",
            label: "Build Dashboards",
            icon: Zap,
            description: "Turn any insight into a live dashboard with one click. Share with your team instantly.",
        },
    ];

    return (
        <section className="bg-white">
            <div className="container mx-auto px-4">


                <div className="py-12 px-16">
                    <div className="max-w-4xl mb-24 mx-auto text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-4xl font-black text-black mb-8 tracking-tighter leading-tight"
                        >
                            Why Teams Choose ADRO
                        </motion.h2>
                        <p className="text-xl md:text-2xl text-black/60 mx-auto max-w-2xl font-medium leading-relaxed">
                            Instant Insights Instead of Manual Dashboards
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
                        <div className="space-y-12">
                            <div className="flex gap-6">
                                <div className="w-14 h-14 rounded-2xl bg-black/5 border border-black/10 flex items-center justify-center shrink-0">
                                    <Sparkles className="text-black" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-black mb-3">Instant Insights</h3>
                                    <p className="text-black/60 font-medium leading-relaxed">
                                        Traditional BI tools require hours of dashboard design. ADRO automatically generates dashboards and insights the moment a dataset is uploaded.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="w-14 h-14 rounded-2xl bg-black/5 border border-black/10 flex items-center justify-center shrink-0">
                                    <MessageSquare className="text-black" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-black mb-3">Ask Questions to Your Data</h3>
                                    <p className="text-black/60 font-medium leading-relaxed">
                                        Instead of writing queries or formulas, simply ask questions like:
                                        "Show revenue trends over time", "Which region performed best?", or "Generate a sales performance dashboard".
                                        ADRO analyzes your dataset and generates charts instantly.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="w-14 h-14 rounded-2xl bg-black/5 border border-black/10 flex items-center justify-center shrink-0">
                                    <Zap className="text-black" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-black mb-3">No Complex Setup</h3>
                                    <p className="text-black/60 font-medium leading-relaxed">
                                        Tools like {competitor} require data modeling, configuration, and technical knowledge. ADRO removes this complexity by automatically understanding dataset structure and generating insights.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <Card className="p-10 border-black/10 rounded-[2.5rem] bg-black/5 shadow-inner">
                            <div className="space-y-6">
                                <div className="p-4 bg-white rounded-2xl border border-black/5 shadow-sm">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-2 h-2 rounded-full bg-black/40" />
                                        <span className="text-[10px] font-bold text-black/40 uppercase tracking-widest">Natural Query</span>
                                    </div>
                                    <p className="text-black font-bold">"Show revenue trends over time"</p>
                                </div>
                                <div className="p-4 bg-white rounded-2xl border border-black/5 shadow-sm ml-8">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-2 h-2 rounded-full bg-black/40" />
                                        <span className="text-[10px] font-bold text-black/40 uppercase tracking-widest">Natural Query</span>
                                    </div>
                                    <p className="text-black font-bold">"Which region performed best?"</p>
                                </div>
                                <div className="p-4 bg-white rounded-2xl shadow-xl">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Sparkles size={14} className="text-black" />
                                        <span className="text-[10px] font-bold text-black uppercase tracking-widest">ADRO AI</span>
                                    </div>
                                    <p className="text-black font-medium">Analyzing dataset... Generating sales performance dashboard.</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>

                {/* ── 2. When to Use ADRO ───────────────────────────────────── */}
                <div className="py-12 px-16 ">
                    <div className="max-w-6xl mx-auto">
                        <div className="max-w-4xl mb-16 mx-auto text-center">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-2xl md:text-4xl font-black text-black mb-6 tracking-tighter leading-tight"
                            >
                                When to Use ADRO
                            </motion.h2>
                            <p className="text-black/60 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                                ADRO is built for teams that need to move fast — instant dashboards, zero setup, and AI that works out of the box.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
                            {useCases.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                >
                                    <Card
                                        className={`p-7 rounded-3xl h-full border flex flex-col gap-5 transition-shadow hover:shadow-md ${item.dark
                                            ? "bg-black border-black text-white"
                                            : "bg-white border-black/10 text-black"
                                            }`}
                                    >
                                        <div
                                            className={`w-11 h-11 rounded-2xl flex items-center justify-center ${item.dark ? "bg-white/10" : "bg-black/5 border border-black/10"
                                                }`}
                                        >
                                            <item.icon
                                                size={20}
                                                className={item.dark ? "text-white" : "text-black"}
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2 flex-1">
                                            <p
                                                className={`text-[10px] font-bold uppercase tracking-widest ${item.dark ? "text-white/40" : "text-black/40"
                                                    }`}
                                            >
                                                {item.label}
                                            </p>
                                            <p className={`text-lg font-black tracking-tight ${item.dark ? "text-white" : "text-black"}`}>
                                                {item.tag}
                                            </p>
                                            <p className={`text-sm font-medium leading-relaxed ${item.dark ? "text-white/60" : "text-black/60"}`}>
                                                {item.desc}
                                            </p>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>

                        <Card className="p-8 rounded-3xl border-black/10 bg-black/[0.02]">
                            <p className="text-xs font-bold text-black/40 uppercase tracking-widest mb-5">Perfect for</p>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    "Startups analyzing business data",
                                    "Executives and Analysts who want faster insights",
                                    "Teams without BI expertise",
                                    "Companies that want AI-powered analytics",
                                ].map((text, i) => (
                                    <div key={i} className="flex items-center gap-2.5 bg-white border border-black/10 rounded-full px-4 py-2 shadow-sm">
                                        <div className="w-4 h-4 rounded-full bg-black flex items-center justify-center shrink-0">
                                            <Check size={10} className="text-white" />
                                        </div>
                                        <span className="text-sm font-semibold text-black">{text}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>
                </div>
            </div>

            {/* <div className="py-12 px-4 md:px-16 mt-8 ">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mb-16 mx-auto text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-4xl font-black text-black mb-6 tracking-tighter leading-tight"
                        >
                            The ADRO Workflow
                        </motion.h2>
                        <p className="text-black/60 text-xl md:text-2xl mx-auto max-w-2xl font-medium leading-relaxed">
                            AI-powered analytics made simple.
                        </p>
                    </div>

                
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-4 gap-0 relative">

                   
                            <div className="hidden md:block absolute top-[3.25rem] left-[12.5%] right-[12.5%] h-px bg-black/10 z-0" />

                            {workflowSteps.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="relative z-10 flex flex-col items-center text-center px-4"
                                >
                             
                                    <div className="w-[6.5rem] h-[6.5rem] rounded-3xl bg-white border-2 border-black/10 flex items-center justify-center mb-6 shadow-sm group-hover:border-black transition-colors">
                                        <item.icon size={30} className="text-black" />
                                    </div>

                                    <Badge
                                        variant="outline"
                                        className="text-[10px] font-bold tracking-[0.15em] uppercase text-black/40 border-black/10 mb-3 rounded-full px-3 py-1"
                                    >
                                        Step {item.step}
                                    </Badge>

                                    <h3 className="text-lg font-black text-black tracking-tight mb-2">{item.label}</h3>
                                    <p className="text-sm text-black/50 font-medium leading-relaxed">{item.description}</p>

                                    {i < workflowSteps.length - 1 && (
                                        <div className="hidden md:flex absolute -right-3 top-10 w-6 h-6 items-center justify-center z-20">
                                            <ArrowRight size={16} className="text-black/20" />
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </div>
            </div> */}
        </section>
    );
};