"use client";

import { motion } from "framer-motion";
import { TrendingUp, Globe, Activity, BarChart3, Cpu } from "lucide-react";
import { Card } from "@/components/ui/card";

const cases = [
    {
        icon: TrendingUp,
        title: "Sales Analytics",
        desc: "Track revenue, conversion rates, and sales performance across regions and reps. Spot pipeline gaps before they cost you.",
        tag: "Revenue",
    },
    {
        icon: Globe,
        title: "Marketing Performance",
        desc: "Understand campaign ROI, lead sources, and customer acquisition costs — all from your exported marketing data.",
        tag: "Growth",
    },
    {
        icon: Activity,
        title: "Financial Reporting",
        desc: "Analyze cash flow, expenses, and profitability trends without writing a single formula. Auto-generated P&L visuals in seconds.",
        tag: "Finance",
    },
    {
        icon: BarChart3,
        title: "Business KPI Tracking",
        desc: "Monitor core metrics and goals in real-time. Build executive dashboards that always reflect the latest data.",
        tag: "Operations",
    },
    {
        icon: Cpu,
        title: "Operational Forecasting",
        desc: "Identify bottlenecks, predict future performance, and surface anomalies before they become problems.",
        tag: "AI Insights",
    },
];

export const UseCasesGrid = () => {
    return (
        <section className="py-24 bg-[#fafafa] border-t border-black/5">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">

                    {/* Header */}
                    <div className="max-w-4xl mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 rounded-full bg-black/5 border border-black/10 text-black text-[10px] font-black uppercase tracking-[0.2em] mb-8"
                        >
                            Use Cases
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-black text-black tracking-tighter leading-[1.05] mb-5"
                        >
                            One Platform. <br /> Every Data Use Case.
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 }}
                            className="text-xl text-black/50 font-medium leading-relaxed max-w-2xl"
                        >
                            From sales to operations, ADRO handles every kind of business data — and turns it into dashboards your team actually uses.
                        </motion.p>
                    </div>

                    {/* Asymmetric grid: 2 large + 3 smaller */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {cases.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className={i === 0 ? "lg:col-span-2" : ""}
                            >
                                <Card
                                    className={`p-8 rounded-[2rem] border-black/10 bg-white hover:border-black/20 hover:shadow-xl hover:shadow-black/5 transition-all h-full flex flex-col justify-between gap-10 group ${i === 0 ? "lg:flex-row lg:items-center" : ""
                                        }`}
                                >
                                    <div className={`flex flex-col gap-5 ${i === 0 ? "flex-1" : ""}`}>
                                        <div className="flex items-center justify-between">
                                            <div className="w-12 h-12 rounded-2xl bg-black/5 border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all">
                                                <item.icon size={22} className="text-black group-hover:text-white transition-colors" />
                                            </div>
                                            <span className="text-[10px] font-black uppercase tracking-[0.18em] text-black/30 border border-black/10 px-3 py-1 rounded-full">
                                                {item.tag}
                                            </span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-black text-black tracking-tight mb-2">{item.title}</h3>
                                            <p className="text-base text-black/55 font-medium leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                    {i === 0 && (
                                        <div className="hidden lg:flex flex-col gap-3 shrink-0 w-48">
                                            {["Upload data", "Auto-detect metrics", "Generate visuals", "Export & share"].map((step, j) => (
                                                <div key={j} className="flex items-center gap-3">
                                                    <div className="w-5 h-5 rounded-full bg-black/5 border border-black/10 flex items-center justify-center shrink-0 text-[9px] font-black text-black/40">
                                                        {j + 1}
                                                    </div>
                                                    <span className="text-sm font-semibold text-black/60">{step}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};