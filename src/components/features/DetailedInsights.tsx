
"use client";

import { motion } from "framer-motion";
import {
    BarChart3,
    Shield,
    Database,
    Layout,
    Cpu,
    Globe,
    Lock,
    MessageSquare,
    Zap,
    Search,
} from "lucide-react";

export const DetailedInsights = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="max-w-4xl mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-black mb-8 tracking-tighter leading-tight"
                    >
                        Rethinking How Humans <br /> Work With Data
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl md:text-2xl text-black/60 font-medium leading-relaxed"
                    >
                        ADRO turns datasets into conversations. Instead of building dashboards,
                        writing SQL, or navigating complex BI tools, you simply upload your
                        data and ask questions.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 text-lg text-black/40 font-medium"
                    >
                        Your dataset becomes an intelligent system that can explain trends,
                        generate charts, build dashboards, and surface insights instantly.
                    </motion.p>
                </div>

                {/* Feature Grid */}
                <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">

                    {/* Left side features */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >

                        {/* MessageSquare */}
                        <div className="flex gap-8">
                            <div className="group w-14 h-14 rounded-2xl bg-white border border-black/10 hover:bg-black transition-all duration-300 flex items-center justify-center shrink-0">
                                <MessageSquare
                                    className="text-black group-hover:text-white transition-colors duration-300"
                                    size={28}
                                />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-black mb-4 tracking-tight">
                                    Talk Directly to Your Data
                                </h3>
                                <p className="text-black/60 font-medium text-lg leading-relaxed">
                                    Ask questions in plain English and ADRO analyzes your dataset to
                                    generate answers, charts, and insights in seconds.
                                </p>
                            </div>
                        </div>

                        {/* Zap */}
                        <div className="flex gap-8">
                            <div className="group w-14 h-14 rounded-2xl bg-white border border-black/10 hover:bg-black transition-all duration-300 flex items-center justify-center shrink-0">
                                <Zap
                                    className="text-black group-hover:text-white transition-colors duration-300"
                                    size={28}
                                />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-black mb-4 tracking-tight">
                                    From Raw Data to Insights Instantly
                                </h3>
                                <p className="text-black/60 font-medium text-lg leading-relaxed">
                                    Upload Excel, CSV, DuckDB, or connect databases and instantly
                                    explore patterns, trends, and key metrics without complex setup.
                                </p>
                            </div>
                        </div>

                        {/* Search */}
                        <div className="flex gap-8">
                            <div className="group w-14 h-14 rounded-2xl bg-white border border-black/10 hover:bg-black transition-all duration-300 flex items-center justify-center shrink-0">
                                <Search
                                    className="text-black group-hover:text-white transition-colors duration-300"
                                    size={28}
                                />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-black mb-4 tracking-tight">
                                    AI-Powered Data Understanding
                                </h3>
                                <p className="text-black/60 font-medium text-lg leading-relaxed">
                                    ADRO detects dataset structure, understands relationships, and
                                    helps you explore data through natural conversations.
                                </p>
                            </div>
                        </div>

                    </motion.div>

                    {/* Animated icon grid */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-black/5 rounded-[3.5rem] p-16 aspect-square flex items-center justify-center relative overflow-hidden"
                    >
                        <div className="grid grid-cols-3 gap-8 relative z-10 w-full">
                            {[Database, Layout, MessageSquare, BarChart3, Cpu, Search, Lock, Globe, Zap].map(
                                (Icon, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ y: [0, -15, 0], opacity: [0.4, 1, 0.4] }}
                                        transition={{
                                            duration: 4 + i * 0.4,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                        className="aspect-square bg-white rounded-[2rem] shadow-2xl shadow-black/5 flex items-center justify-center border border-black/5 hover:scale-110 transition-transform"
                                    >
                                        <Icon className="text-black" size={32} strokeWidth={1.5} />
                                    </motion.div>
                                )
                            )}
                        </div>
                    </motion.div>

                </div>

                {/* Bottom section */}
                <div className="grid md:grid-cols-2 gap-12">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-black p-12 rounded-[3rem] text-white shadow-2xl shadow-black/20"
                    >
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-8">
                            <BarChart3 size={24} />
                        </div>

                        <h4 className="text-3xl font-black mb-6 tracking-tight">
                            Custom & Interactive Charts
                        </h4>

                        <p className="opacity-70 font-medium text-lg leading-relaxed mb-8">
                            Generate charts automatically or choose from multiple chart types to
                            build your own visualizations.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-black/5 p-12 rounded-[3rem] border border-black/10"
                    >
                        <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center mb-8">
                            <Shield className="text-white" size={24} />
                        </div>

                        <h4 className="text-3xl font-black text-black mb-6 tracking-tight">
                            Built for Private & Enterprise Analytics
                        </h4>

                        <p className="text-black/60 font-medium text-lg leading-relaxed">
                            Run ADRO locally with private LLMs or connect to cloud models while
                            keeping full control of your data.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

