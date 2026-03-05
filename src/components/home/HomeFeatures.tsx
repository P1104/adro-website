"use client";

import { motion } from "framer-motion";
import { Brain, LayoutPanelLeft, LineChart, Search, ShieldCheck, TrendingUp } from "lucide-react";

const features = [
    {
        title: "AI Data Analysis",
        description: "Understand complex data instantly with LLM-powered context analysis and deep insights.",
        icon: Brain,
    },
    {
        title: "Auto Dashboard Generation",
        description: "AI creates beautiful, interactive dashboards automatically from your raw data files.",
        icon: LayoutPanelLeft,
    },
    {
        title: "Instant Charts",
        description: "Generate professional, presentation-ready visualizations in seconds with just one click.",
        icon: LineChart,
    },
    {
        title: "Natural Language Queries",
        description: "Ask questions just like you talk to an expert. No SQL or complex formulas needed.",
        icon: Search,
    },
    {
        title: "No BI Tools Needed",
        description: "Forget complex setups for Power BI or Tableau. Everything is integrated and ready.",
        icon: ShieldCheck,
    },
    {
        title: "Smart Insights",
        description: "AI automatically detects seasonal patterns, growth trends, and hidden anomalies.",
        icon: TrendingUp,
    },
];

export const HomeFeatures = () => {
    return (
        <section id="features" className="py-24 bg-muted/20 relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
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
                        className="text-4xl md:text-5xl font-bold text-foreground mb-6"
                    >
                        Intelligence for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Every Byte</span>
                    </motion.h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-medium leading-relaxed">
                        Experience the next generation of data processing. Our platform is built
                        from the ground up with AI at its core to simplify your workflow.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-10 rounded-[2rem] border border-border hover:border-primary/30 transition-all hover:shadow-2xl hover:shadow-primary/5 group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                <feature.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">{feature.title}</h3>
                            <p className="text-muted-foreground text-base leading-relaxed font-medium">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
