"use client";

import { motion } from "framer-motion";
import { Brain, LayoutPanelLeft, LineChart, Search, ShieldCheck, TrendingUp } from "lucide-react";

const features = [
    {
        title: "AI Data Analysis",
        description: "Understand complex data instantly with LLM-powered context analysis.",
        icon: Brain,
    },
    {
        title: "Auto Dashboard Generation",
        description: "AI creates beautiful, interactive dashboards automatically from your files.",
        icon: LayoutPanelLeft,
    },
    {
        title: "Instant Charts",
        description: "Generate professional visualizations in seconds with just one click.",
        icon: LineChart,
    },
    {
        title: "Natural Language Queries",
        description: "Ask questions just like you talk to ChatGPT. No SQL or Excel formulas needed.",
        icon: Search,
    },
    {
        title: "No BI Tools Needed",
        description: "Forget complex setups for Power BI or Tableau. Everything is integrated.",
        icon: ShieldCheck,
    },
    {
        title: "Smart Insights",
        description: "AI automatically detects seasonal patterns, trends, and anomalies.",
        icon: TrendingUp,
    },
];

export const Features = () => {
    return (
        <section id="features" className="py-24 bg-white/[0.02] relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6"
                    >
                        Powerful Features
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-grey-700 mb-4"
                    >
                        Intelligence for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Every Byte</span>
                    </motion.h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Experience the next generation of data processing. Our platform is built
                        from the ground up with AI at its core.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-8 rounded-2xl glow-border group hover:bg-white/[0.05] transition-all"
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-black transition-all">
                                <feature.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-grey-700 mb-3 tracking-tight">{feature.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
