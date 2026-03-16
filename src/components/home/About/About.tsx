"use client";

import { motion } from "framer-motion";
import { UploadCloud, LayoutDashboard, BrainCircuit, Sparkles, BarChart3, Share2 } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Card } from "@/components/ui/card";

const pills = [
    { icon: UploadCloud, label: "Upload CSV or Excel" },
    { icon: BrainCircuit, label: "AI analyzes your data" },
    { icon: LayoutDashboard, label: "Dashboards generated instantly" },
];

export const About = () => {
    return (
        <section className="py-16 bg-white border-t border-black/5">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">

                        {/* Left — text */}
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-block px-4 py-1.5 rounded-full bg-black/5 border border-black/10 text-black text-[10px] font-black uppercase tracking-[0.2em] mb-6"
                            >
                                What ADRO Does
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.08 }}
                                className="text-3xl md:text-4xl font-black text-black tracking-tighter leading-[1.08] mb-5"
                            >
                                Transform Raw Data into{" "}
                                <span className="text-black/30">Actionable Intelligence</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.14 }}
                                className="text-base md:text-lg text-black/55 font-medium leading-relaxed"
                            >
                                ADRO is an AI-powered analytics platform that turns CSV and Excel files into interactive dashboards instantly — no formulas, no BI tools, no setup.
                            </motion.p>
                        </div>

                        {/* Right — 3 step cards */}
                        <div className="flex flex-col gap-3">
                            {pills.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.09 }}
                                >
                                    <Card className="flex items-center gap-5 px-6 py-5 rounded-2xl border-black/8 bg-black/[0.02] hover:bg-white hover:border-black/15 hover:shadow-md hover:shadow-black/5 transition-all group">
                                        <div className="w-10 h-10 rounded-xl bg-white border border-black/10 flex items-center justify-center shrink-0 shadow-sm group-hover:bg-black group-hover:border-black transition-all">
                                            <item.icon size={18} className="text-black group-hover:text-white transition-colors" />
                                        </div>
                                        <div className="flex items-center justify-between flex-1">
                                            <span className="font-bold text-black tracking-tight">{item.label}</span>
                                            <span className="text-[10px] font-black text-black/25 uppercase tracking-widest">
                                                {String(i + 1).padStart(2, "0")}
                                            </span>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.35 }}
                                className="text-xs text-black/35 font-bold uppercase tracking-widest pt-2 pl-1"
                            >
                                From trend analysis to KPI visualization — all instant.
                            </motion.p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};