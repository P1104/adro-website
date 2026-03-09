"use client";

import { motion } from "framer-motion";
import { Check, Database, Zap, BarChart3, Search, Cloud, Laptop, FileSpreadsheet } from "lucide-react";

const capabilities = [
    "Upload Excel, CSV files",
    "Add custom metadata to help ADRO understand your dataset",
    "AI-powered data cleaning suggestions",
    "Ask questions and generate charts instantly",
    "Build dashboards directly from your dataset",
    "Run locally or integrate with cloud LLMs"
];

export const Demo = () => {
    return (
        <section id="demo" className="py-12 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Side: Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >

                            <h3 className="text-4xl md:text-6xl font-black text-black mb-8 tracking-tighter leading-[1.1]">
                                From Data to Decisions Instantly
                            </h3>

                            <div className="space-y-6 mb-10 text-lg font-medium text-black/70 leading-relaxed">
                                <p>
                                    ADRO transforms the way you analyze data. Upload datasets, connect databases, and instantly explore insights using natural language.
                                </p>
                                <p>
                                    Built for speed and privacy, ADRO automatically cleans data, generates charts, and builds dashboards while letting you ask questions directly to your dataset.
                                </p>
                                <p>
                                    Whether you're analyzing Excel files, CSV datasets, or connected databases, ADRO turns raw data into actionable insights in seconds.
                                </p>
                            </div>

                            <div className="border-t border-black/5 pt-10">
                                <h4 className="text-black font-black uppercase tracking-widest text-xs mb-8">Key Capabilities</h4>
                                <ul className="grid sm:grid-cols-1 gap-5">
                                    {capabilities.map((cap, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                            className="flex items-start gap-4 group"
                                        >
                                            <div className="mt-1 w-5 h-5 rounded-full bg-black flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                                <Check size={12} className="text-white" strokeWidth={4} />
                                            </div>
                                            <span className="text-black font-bold text-sm tracking-tight group-hover:translate-x-1 transition-transform">
                                                {cap}
                                            </span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        {/* Right Side: Visual Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="relative bg-black/[0.02] rounded-[3rem] p-8 aspect-square flex items-center justify-center border border-black/5 overflow-hidden group">
                                {/* Decorative background elements */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,0,0,0.03),transparent)] pointer-events-none" />

                                <div className="grid grid-cols-2 gap-6 relative z-10 w-full max-w-sm">
                                    {[
                                        { Icon: FileSpreadsheet, label: "Excel/CSV", color: "bg-white" },
                                        { Icon: Database, label: "SQL/DuckDB", color: "bg-black text-white" },
                                        { Icon: Search, label: "NL Query", color: "bg-white" },
                                        { Icon: BarChart3, label: "Auto Charts", color: "bg-white" }
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            animate={{
                                                y: [0, -10, 0],
                                            }}
                                            transition={{
                                                duration: 4,
                                                repeat: Infinity,
                                                delay: i * 0.5,
                                                ease: "easeInOut"
                                            }}
                                            className={`${item.color} rounded-[2rem] p-8 aspect-square flex flex-col items-center justify-center gap-4 shadow-2xl shadow-black/5 border border-black/5 hover:scale-105 transition-transform cursor-default group/card`}
                                        >
                                            <item.Icon size={40} strokeWidth={1.5} className="group-hover/card:scale-110 transition-transform" />
                                            <span className="text-[10px] font-black uppercase tracking-widest opacity-40 group-hover/card:opacity-100 transition-opacity">
                                                {item.label}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* <motion.div
                                    animate={{ x: [0, 10, 0], y: [0, -15, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-12 right-12 bg-white border border-black/5 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl backdrop-blur-sm z-20"
                                >
                                    <Cloud size={16} />
                                    <span className="text-[10px] font-black uppercase tracking-widest">Cloud Sync</span>
                                </motion.div>

                                <motion.div
                                    animate={{ x: [0, -10, 0], y: [0, 15, 0] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute bottom-12 left-12 bg-black text-white rounded-2xl px-4 py-3 flex items-center gap-3 shadow-2xl z-20"
                                >
                                    <Laptop size={16} />
                                    <span className="text-[10px] font-black uppercase tracking-widest">Local Mode</span>
                                </motion.div> */}

                                {/* Aesthetic overlays */}
                                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-black/[0.02] rounded-full blur-3xl" />
                                <div className="absolute -top-20 -left-20 w-64 h-64 bg-black/[0.01] rounded-full blur-3xl" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
