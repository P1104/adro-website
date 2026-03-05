"use client";

import { motion } from "framer-motion";
import { Zap, BarChart3, TrendingUp, ShoppingCart, Banknote, ShieldAlert, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
    {
        title: "E-commerce Growth",
        description: "Analyze sales funnels, customer churn, and inventory levels. ADRO helps you scale by identifying high-performing products and optimization opportunities.",
        icon: ShoppingCart,
        metrics: ["32% Churn Reduction", "2.4x ROI Increase"]
    },
    {
        title: "FinTech & Banking",
        description: "Securely visualize transaction patterns, credit risk, and market trends. Turn complex financial data into clear, risk-mitigating intelligence.",
        icon: Banknote,
        metrics: ["Real-time Risk Alerts", "Instant Compliance Audits"]
    },
    {
        title: "SaaS Analytics",
        description: "Understand your LTV, CAC, and MRR at a granular level. Optimize your product roadmap based on user behavior insights.",
        icon: TrendingUp,
        metrics: ["15% LTV Growth", "Cohort Analysis in Seconds"]
    }
];

export default function SolutionsPage() {
    return (
        <div className="pt-32 pb-24 bg-white">
            {/* Solutions Hero */}
            <section className="container mx-auto px-4 mb-32">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-widest mb-6"
                    >
                        Industry Solutions
                    </motion.div>
                    <h1 className="text-6xl md:text-7xl font-extrabold text-foreground mb-8 tracking-tight">
                        Insights Tailored to <span className="text-secondary">Your Industry</span>.
                    </h1>
                    <p className="text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto">
                        ADRO adapts to your data domain, providing platform-agnostic intelligence
                        across finance, retail, and technology.
                    </p>
                </div>
            </section>

            {/* Solutions List */}
            <section className="container mx-auto px-4 mb-32">
                <div className="grid lg:grid-cols-3 gap-8">
                    {solutions.map((sol, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-10 rounded-[3rem] bg-muted/5 border border-border hover:border-primary/20 hover:bg-white hover:shadow-3xl hover:shadow-primary/5 transition-all group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                <sol.icon className="text-primary" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-6 tracking-tight">{sol.title}</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed font-medium mb-10">
                                {sol.description}
                            </p>
                            <div className="space-y-3 pt-8 border-t border-border/50">
                                {sol.metrics.map((metric, mi) => (
                                    <div key={mi} className="flex items-center gap-3 text-sm font-bold text-foreground/80">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        {metric}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Custom Solution CTA */}
            <section className="container mx-auto px-4">
                <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-white flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden shadow-2xl shadow-primary/20">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2" />
                    <div className="flex-1 relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Need a custom enterprise deployment?</h2>
                        <p className="text-white/80 text-xl font-medium leading-relaxed mb-0">
                            Our team works with Fortune 500 companies to build bespoke data intelligence
                            pipelines that integrate with legacy infrastructure.
                        </p>
                    </div>
                    <div className="relative z-10">
                        <Button size="lg" className="h-16 px-10 bg-white text-primary hover:bg-white/90 font-bold text-xl rounded-2xl shadow-xl transition-all">
                            Speak with Sales
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
