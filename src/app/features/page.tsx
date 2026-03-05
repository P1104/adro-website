"use client";

import { motion } from "framer-motion";
import { Brain, LayoutPanelLeft, LineChart, Search, ShieldCheck, Zap, Database, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const featureGroups = [
    {
        title: "Intelligent Analysis",
        features: [
            {
                title: "LLM-Powered Insights",
                description: "Our core engine uses advanced language models to understand the semantic context of your data, providing insights that go beyond simple numbers.",
                icon: Brain
            },
            {
                title: "Anomaly Detection",
                description: "Automatically identify outliers and significant deviations in your datasets before they become problems.",
                icon: Zap
            }
        ]
    },
    {
        title: "Visualization",
        features: [
            {
                title: "Auto-Layout Engine",
                description: "Drop a file and get a perfectly structured dashboard. No manual alignment or chart selection required.",
                icon: LayoutPanelLeft
            },
            {
                title: "Real-time Interactivity",
                description: "Every chart is dynamic. Filter, drill down, and explore your data with a fluid, lightning-fast interface.",
                icon: LineChart
            }
        ]
    },
    {
        title: "Accessibility",
        features: [
            {
                title: "Natural Language Ask",
                description: "Chat with your data. Ask complex questions and receive immediate visual and textual explanations.",
                icon: Search
            },
            {
                title: "Zero-Setup BI",
                description: "No database connectors or complex SQL needed. ADRO works directly with your documents.",
                icon: Database
            }
        ]
    }
];

export default function FeaturesPage() {
    return (
        <div className="pt-32 pb-24 bg-white">
            {/* Features Hero */}
            <section className="container mx-auto px-4 mb-32">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-widest mb-6"
                    >
                        Product Features
                    </motion.div>
                    <h1 className="text-6xl md:text-7xl font-extrabold text-foreground mb-8 tracking-tight">
                        Built for the <span className="text-primary italic">Modern Analyst</span>.
                    </h1>
                    <p className="text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto">
                        ADRO simplifies the entire data pipeline from raw file to insight,
                        eliminating the friction of traditional BI tools.
                    </p>
                </div>
            </section>

            {/* Feature Grid */}
            <section className="container mx-auto px-4 mb-32">
                <div className="space-y-32">
                    {featureGroups.map((group, groupIdx) => (
                        <div key={groupIdx}>
                            <h2 className="text-3xl font-bold mb-12 border-l-4 border-primary pl-6">{group.title}</h2>
                            <div className="grid md:grid-cols-2 gap-12">
                                {group.features.map((feature, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="group p-10 rounded-[2.5rem] bg-muted/10 border border-border hover:border-primary/30 transition-all hover:shadow-2xl hover:shadow-primary/5"
                                    >
                                        <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                            <feature.icon size={32} />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4 tracking-tight">{feature.title}</h3>
                                        <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                                            {feature.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Technical CTA */}
            <section className="container mx-auto px-4">
                <div className="bg-foreground rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                        <div className="max-w-2xl text-center lg:text-left">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Enterprise-Grade Security</h2>
                            <p className="text-white/70 text-lg font-medium mb-0">
                                Your data never leaves your secure environment. ADRO is SOC2 compliant and
                                built with privacy-first architecture, ensuring your intelligence is for your eyes only.
                            </p>
                        </div>
                        <Button size="lg" className="h-16 px-10 bg-white text-foreground hover:bg-white/90 font-bold text-xl rounded-2xl transition-all flex items-center gap-3">
                            Read Security Whitepaper <ArrowRight size={20} />
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
