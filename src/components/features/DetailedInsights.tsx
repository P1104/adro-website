"use client";

import { motion } from "framer-motion";
import { Shield, Target, Zap, Globe, Cpu, Layers, Database, Lock, Search, BarChart, TrendingUp, Users } from "lucide-react";

export const DetailedInsights = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-black mb-10 tracking-tighter leading-tight">
                            The Architecture of <br /> Next-Gen Intelligence
                        </h2>
                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center shrink-0">
                                    <Cpu className="text-black" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-black mb-3">Neural Context Engine</h3>
                                    <p className="text-black/60 font-medium leading-relaxed">
                                        ADRO understands semantic relationships across your data. It builds a dynamic knowledge graph that reveals hidden correlations traditional analytics tools often miss.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center shrink-0">
                                    <Layers className="text-black" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-black mb-3">Multi-Modal Data Processing</h3>
                                    <p className="text-black/60 font-medium leading-relaxed">
                                        Analyze CSV, JSON, and PDF datasets in one unified intelligence layer. ADRO combines structured and unstructured data to generate deeper cross-dataset insights.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-black/5 rounded-[3rem] p-12 aspect-square flex items-center justify-center relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black/5 via-transparent to-transparent" />
                        <div className="grid grid-cols-3 gap-6 relative z-10 w-full">
                            {[Database, Lock, Search, BarChart, TrendingUp, Users, Shield, Target, Zap].map((Icon, i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        y: [0, -10, 0],
                                        opacity: [0.3, 1, 0.3]
                                    }}
                                    transition={{
                                        duration: 3 + (i * 0.5),
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="aspect-square bg-white rounded-3xl shadow-xl flex items-center justify-center border border-black/5"
                                >
                                    <Icon className="text-black" size={32} />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div className="prose prose-lg max-w-none text-black/70">
                    <h3 className="text-3xl font-black text-black mb-8">Redefining the Data Lifecycle</h3>
                    <p className="mb-10 font-medium leading-loose">
                        ADRO collapses the entire data lifecycle into a single intelligence layer. Smart data, fast.
                    </p>
                    <div className="grid md:grid-cols-2 gap-12 mb-20">
                        <div className="bg-black p-10 rounded-[2.5rem] text-white">
                            <h4 className="text-2xl font-bold mb-6">Zero-Latency Insights</h4>
                            <p className="opacity-70 font-medium leading-relaxed mb-6">
                                Data is indexed, vectorized, and summarized within milliseconds. Pivot strategy in hours, not weeks.
                            </p>
                            <ul className="space-y-4 font-bold text-sm">
                                <li className="flex items-center gap-3"><Zap size={16} /> Sub-500ms processing for standard CSVs</li>
                                <li className="flex items-center gap-3"><Zap size={16} /> Real-time stream integration API</li>
                                <li className="flex items-center gap-3"><Zap size={16} /> Instant anomaly alerts via Slack/Email</li>
                            </ul>
                        </div>
                        <div className="bg-black/5 p-10 rounded-[2.5rem] border border-black/10">
                            <h4 className="text-2xl font-bold text-black mb-6">Privacy-First Intelligence</h4>
                            <p className="text-black/60 font-medium leading-relaxed mb-6">
                                Your data is isolated, encrypted with AES-256, and processed statelessly. We never use your data to train global models.
                            </p>
                            <ul className="space-y-4 font-bold text-sm text-black">
                                <li className="flex items-center gap-3 text-black/40"><Shield size={16} className="text-black" /> SOC 2 Type II Compliant</li>
                                <li className="flex items-center gap-3 text-black/40"><Shield size={16} className="text-black" /> GDPR & CCPA Ready</li>
                                <li className="flex items-center gap-3 text-black/40"><Shield size={16} className="text-black" /> Private VPC Deployment Options</li>
                            </ul>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};
