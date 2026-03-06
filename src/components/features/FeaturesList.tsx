"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, LayoutPanelLeft, LineChart, Search, ShieldCheck, TrendingUp, Cloud, Lock, Users, Sparkles, Zap, Shield, Globe, Cpu, Layers, Database } from "lucide-react";

const features = [
    {
        title: "DuckDB Ingestion",
        description: "Lightning-fast file processing. Converts CSV/Excel into optimized DuckDB tables for millisecond query response.",
        icon: Database,
    },
    {
        title: "Metadata Engine",
        description: "Automatic generation of metadata.json during upload. Tracks stats, column types, and structural integrity.",
        icon: Layers,
    },
    {
        title: "Anomaly Guard",
        description: "Built-in anomaly.py module scans your dataset for outliers and structural errors automatically.",
        icon: Shield,
    },
    {
        title: "Query API",
        description: "LLM-driven chart data generation. Maps natural language directly to visualized data structures.",
        icon: Zap,
    },
    {
        title: "Data Cleaning",
        description: "Clean.py utilities handle categorical normalization, null replacement, and type casting out of the box.",
        icon: Sparkles,
    },
    {
        title: "Column Insights",
        description: "Prefix /columns access to deep statistical data—min, max, counts, and distribution mapping.",
        icon: Search,
    },
    {
        title: "Export Suite",
        description: "High-fidelity exports for dashboards and tables. Integrated SVG, PDF, and CSV generation.",
        icon: LineChart,
    },
    {
        title: "Secure Access",
        description: "FastAPI-powered CORS middleware and role-based access control for enterprise-grade security.",
        icon: Lock,
    },
    {
        title: "Real-time Sync",
        description: "Live synchronization across Data and Dashboard sections via our centralized processing layer.",
        icon: Users,
    }
];

export const FeaturesList = () => {
    return (
        <section id="features" className="py-2 bg-white relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-black/5 border border-black/10 text-black text-xs font-bold uppercase tracking-widest mb-6"
                    >
                        Powerful Features
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-black mb-6"
                    >
                        Total Control Over Your Data
                    </motion.h2>
                    <p className="text-black/60 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
                        Explore the vast capabilities of our platform. We&apos;ve built everything you need
                        to transform raw information into a competitive advantage.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <Card className="h-full border-black/10 hover:border-black/30 transition-all hover:shadow-2xl hover:shadow-black/5 group rounded-[2rem] p-4 bg-white">
                                <CardHeader>
                                    <div className="w-14 h-14 rounded-2xl bg-black/5 flex items-center justify-center mb-4 group-hover:bg-black group-hover:text-white transition-all duration-300">
                                        <feature.icon size={28} />
                                    </div>
                                    <CardTitle className="text-2xl font-bold text-black tracking-tight">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-black/60 text-base leading-relaxed font-medium">
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
