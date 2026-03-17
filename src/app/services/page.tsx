"use client";

import { motion } from "framer-motion";
import { BarChart3, LineChart, PieChart, Database, Search, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
    {
        title: "AI Data Analysis",
        description: "Our LLM-powered engine analyzes your datasets in real-time, identifying complex correlations and hidden patterns that manual analysis might miss.",
        icon: Database,
        color: "bg-blue-500"
    },
    {
        title: "Dynamic Visualizations",
        description: "Convert raw Excel or CSV files into interactive, high-fidelity dashboards instantly. No configuration, no drag-and-drop, just results.",
        icon: PieChart,
        color: "bg-cyan-500"
    },
    {
        title: "Predictive Forecasting",
        description: "Leverage advanced machine learning to project future trends, seasonal patterns, and growth opportunities based on your historical data.",
        icon: LineChart,
        color: "bg-purple-500"
    },
    {
        title: "Natural Language Interaction",
        description: "Query your data using plain English. Ask 'What was our best-selling product in Q3?' and get instant, accurate visual answers.",
        icon: Search,
        color: "bg-amber-500"
    },
    {
        title: "Enterprise Security",
        description: "We take your data privacy seriously. All processing is done with bank-grade encryption and strict adherence to global compliance standards.",
        icon: ShieldCheck,
        color: "bg-emerald-500"
    },
    {
        title: "Custom Dashboards",
        description: "Tailor your intelligence experience with custom KPIs and metrics that matter most to your specific business goals.",
        icon: BarChart3,
        color: "bg-red-500"
    },
];

export default function ServicesPage() {
    return (
        <div className="pt-32 pb-24">
            {/* Services Hero */}
            <section className="container mx-auto px-4 mb-32 text-center">
                <motion.p
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6"
                >
                    Our Capabilities
                </motion.p>
                <h1 className="text-5xl md:text-7xl font-extrabold text-foreground mb-8 tracking-tight max-w-5xl mx-auto">
                    Intelligent Solutions for a Data-Driven World.
                </h1>
                <p className="text-xl text-muted-foreground font-medium leading-relaxed max-w-3xl mx-auto">
                    Explore our suite of AI-powered services designed to transform how you interact with and understand your data.
                </p>
            </section>

            {/* Services Grid */}
            <section className="container mx-auto px-4 mb-32">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-10 rounded-[2.5rem] border border-border shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all group"
                        >
                            <div className={`w-16 h-16 rounded-2xl ${service.color}/10 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500`}>
                                <service.icon className={`text-foreground`} size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 tracking-tight">{service.title}</h3>
                            <p className="text-muted-foreground font-medium leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Secondary CTA */}
            <section className="container mx-auto px-4">
                <div className="bg-muted/50 rounded-[3rem] p-12 md:p-20 flex flex-col lg:flex-row items-center gap-12 border border-border">
                    <div className="flex-1">
                        <h2 className="text-4xl font-bold mb-6 tracking-tight">Need a custom solution?</h2>
                        <p className="text-lg text-muted-foreground font-medium leading-relaxed mb-8">
                            We understand that every business has unique data needs. Our team can help you build custom
                            intelligence pipelines tailored to your specific requirements.
                        </p>
                        <Button size="lg" className="h-14 px-8 rounded-xl bg-foreground text-white font-bold text-lg hover:bg-foreground/90 transition-all">
                            Talk to Our Experts
                        </Button>
                    </div>
                    <div className="flex-1 w-full flex justify-center lg:justify-end">
                        <div className="relative">
                            <div className="w-64 h-64 bg-primary/20 rounded-full blur-[60px] animate-pulse" />
                            <Zap className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary w-24 h-24 fill-primary/10" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
