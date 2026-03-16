"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Sparkles, MessageSquare, Zap, LineChart, Share2 } from "lucide-react";

const features = [
    {
        title: "Upload and Analyze Data Instantly",
        description: "Upload datasets in CSV or Excel format and begin analyzing immediately. ADRO automatically detects column types, metrics, and relationships to prepare your dataset.",
        icon: Database,
    },
    {
        title: "AI-Generated Dashboards",
        description: "Create interactive dashboards automatically using AI. ADRO converts raw datasets into charts, KPIs, and visual reports within seconds. No manual setup required.",
        icon: Sparkles,
    },
    {
        title: "Natural Language Data Queries",
        description: "Ask questions about your data in plain English. Example: 'Show revenue trends over time' or 'Which region performed best?' ADRO generates insights instantly.",
        icon: MessageSquare,
    },
    {
        title: "Intelligent Data Insights",
        description: "ADRO identifies patterns, anomalies, and trends within your data using AI-powered analytics. Understand performance and make smarter decisions.",
        icon: Zap,
    },
    {
        title: "Interactive Visualizations",
        description: "Explore your dataset using dynamic charts and dashboards. Filter data, compare metrics, and drill down into trends for deeper insights.",
        icon: LineChart,
    },
    {
        title: "Export and Share Dashboards",
        description: "Export dashboards and reports in multiple formats including PNG, JPG, Excel, and PDF. Share insights with teams and stakeholders easily.",
        icon: Share2,
    }
];

export const FeaturesList = () => {
    return (
        <section id="features" className="py-14 px-16 bg-white relative">
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
                        className="text-3xl md:text-5xl font-black text-black mb-6"
                    >
                        Take Full Control of Your Data
                    </motion.h2>
                    <p className="text-black/60 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
                        ADRO turns raw datasets into powerful insights, helping you analyze, visualize, and understand your data faster.
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
