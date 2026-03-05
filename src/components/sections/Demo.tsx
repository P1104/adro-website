"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FileSpreadsheet, ChevronRight, BarChart, CheckCircle2, Search } from "lucide-react";

export const Demo = () => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setStep((prev) => (prev + 1) % 3);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const steps = [
        {
            icon: <FileSpreadsheet className="text-primary" size={24} />,
            label: "Raw Data",
            content: "Upload Excel_Sales_Data.xlsx",
            prompts: ["Processing 5,000 rows...", "Detecting columns...", "Cleaning data..."]
        },
        {
            icon: <Search className="text-secondary" size={24} />,
            label: "Smart Query",
            content: '"Show revenue by month"',
            prompts: ["Analyzing request...", "Scanning Database...", "Generating insight..."]
        },
        {
            icon: <BarChart className="text-primary" size={24} />,
            label: "AI Insight",
            content: "Revenue grew 42% YoY",
            prompts: ["Trend detected!", "Chart rendered!", "Dashboard updated!"]
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto glass-card rounded-3xl overflow-hidden border-primary/20 bg-background/40">
                    <div className="p-8 md:p-12">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                            {/* Left Column - Steps */}
                            <div className="flex-1 space-y-8 w-full">
                                <h3 className="text-2xl font-bold text-grey-700 mb-8">See it in <span className="text-primary">Action</span></h3>
                                <div className="space-y-4">
                                    {steps.map((s, i) => (
                                        <div
                                            key={i}
                                            className={`flex items-center gap-4 p-4 rounded-xl transition-all border duration-500 ${step === i ? "bg-primary/10 border-primary/30 scale-105" : "bg-white/5 border-transparent opacity-50"
                                                }`}
                                        >
                                            <div className={`p-2 rounded-lg ${step === i ? "bg-primary/20" : "bg-white/5"}`}>
                                                {s.icon}
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-xs text-muted-foreground font-bold uppercase tracking-wider">{s.label}</div>
                                                <div className="text-grey-700 font-medium">{s.content}</div>
                                            </div>
                                            {step === i && <CheckCircle2 className="text-primary animate-pulse" size={20} />}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Column - Visualizer */}
                            <div className="flex-1 w-full bg-black/40 rounded-2xl border border-white/5 p-6 h-[300px] flex flex-col justify-between relative shadow-inner">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={step}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="flex-1 flex flex-col items-center justify-center text-center py-8"
                                    >
                                        {step === 0 && (
                                            <div className="w-full flex justify-center gap-2">
                                                {[1, 2, 3, 4].map(i => (
                                                    <motion.div
                                                        key={i}
                                                        animate={{ height: [20, 60, 20] }}
                                                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                                                        className="w-1.5 bg-primary/40 rounded-full"
                                                    />
                                                ))}
                                            </div>
                                        )}
                                        {step === 1 && (
                                            <div className="relative">
                                                <motion.div
                                                    animate={{ scale: [1, 1.2, 1] }}
                                                    transition={{ duration: 2, repeat: Infinity }}
                                                    className="w-24 h-24 rounded-full border-2 border-secondary/30 border-t-secondary animate-spin-slow"
                                                />
                                                <Search className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-secondary" size={32} />
                                            </div>
                                        )}
                                        {step === 2 && (
                                            <div className="flex items-end gap-2 h-32 w-full justify-center">
                                                {[30, 70, 45, 90, 60, 85].map((h, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ height: 0 }}
                                                        animate={{ height: `${h}%` }}
                                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                                        className="bg-primary shadow-[0_0_10px_rgba(0,229,255,0.5)] w-4 rounded-t-sm"
                                                    />
                                                ))}
                                            </div>
                                        )}
                                    </motion.div>
                                </AnimatePresence>

                                <div className="border-t border-white/10 pt-4 font-mono text-[10px] text-primary/60">
                                    {steps[step].prompts.map((p, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.5 + (i * 1) }}
                                        >
                                            {`> ${p}`}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
