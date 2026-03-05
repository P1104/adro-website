"use client";

import { motion } from "framer-motion";
import { Upload, MessageSquare, LineChart, ArrowRight } from "lucide-react";

const steps = [
    {
        title: "Upload Excel",
        description: "Upload your dataset instantly. Our AI handles all file formats and sizes with ease.",
        icon: Upload,
        color: "primary",
    },
    {
        title: "Ask Questions",
        description: "Ask questions about your data in plain English. AI understands context and intent.",
        icon: MessageSquare,
        color: "secondary",
    },
    {
        title: "Get Instant Insights",
        description: "AI generates charts and dashboards automatically, revealing hidden patterns.",
        icon: LineChart,
        color: "primary",
    },
];

export const Process = () => {
    return (
        <section id="how-it-works" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-grey-700 mb-4"
                    >
                        How ADRO <span className="text-primary">Works</span>
                    </motion.h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Three simple steps to turn your raw data into actionable intelligence.
                        No complex setup, no training required.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2 z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative z-10 group"
                        >
                            <div className="glass-card p-8 rounded-2xl glow-border flex flex-col items-center text-center h-full hover:translate-y-[-8px] transition-all duration-300">
                                <div className={`w-16 h-16 rounded-xl bg-${step.color}/10 border border-${step.color}/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <step.icon className={`text-${step.color}`} size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-grey-700 mb-4">{step.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {step.description}
                                </p>
                                {index < 2 && (
                                    <ArrowRight className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-primary/30 group-hover:text-primary transition-colors" />
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
