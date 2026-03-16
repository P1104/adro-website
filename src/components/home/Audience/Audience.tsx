"use client";

import { motion } from "framer-motion";
import { Rocket, LineChart, Users, Laptop, BrainCircuit, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const teams = [
    {
        icon: Rocket,
        label: "Startups",
        desc: "Move from spreadsheet chaos to live dashboards on day one.",
    },
    {
        icon: LineChart,
        label: "Analysts",
        desc: "Skip the manual work. Let AI surface insights you'd spend hours finding.",
    },
    {
        icon: Users,
        label: "Founders",
        desc: "Get a pulse on your business metrics without hiring a data team.",
    },
    {
        icon: Laptop,
        label: "Product Teams",
        desc: "Track user behavior and KPIs directly from your exported data.",
    },
    {
        icon: BrainCircuit,
        label: "Enterprise Data Teams",
        desc: "Scale AI analytics across departments with zero additional tooling.",
    },
];

export const Audience = () => {
    return (
        <section className="py-24 bg-white border-t border-black/5">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">

                    {/* Header */}
                    <div className="grid lg:grid-cols-2 gap-12 items-end mb-20">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-block px-4 py-1.5 rounded-full bg-black/5 border border-black/10 text-black text-[10px] font-black uppercase tracking-[0.2em] mb-8"
                            >
                                Built For
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-5xl font-black text-black tracking-tighter leading-[1.05]"
                            >
                                Built for Modern <br /> Data Teams
                            </motion.h2>
                        </div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 }}
                            className="text-xl text-black/50 font-medium leading-relaxed"
                        >
                            Whether you're a solo founder or a 500-person enterprise, ADRO turns your raw data into intelligent dashboards — instantly and without any technical setup.
                        </motion.p>
                    </div>

                    {/* Team Cards */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {teams.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.07 }}
                            >
                                <Card className="p-6 rounded-3xl border-black/10 bg-black/[0.02] hover:bg-white hover:border-black/20 hover:shadow-lg hover:shadow-black/5 transition-all h-full flex flex-col gap-5 group">
                                    <div className="w-11 h-11 rounded-2xl bg-white border border-black/10 flex items-center justify-center shadow-sm group-hover:bg-black group-hover:border-black transition-all">
                                        <item.icon size={20} className="text-black group-hover:text-white transition-colors" />
                                    </div>
                                    <div className="flex flex-col gap-1.5 flex-1">
                                        <p className="text-base font-black text-black tracking-tight">{item.label}</p>
                                        <p className="text-sm text-black/50 font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom tagline */}

                </div>
            </div>
        </section>
    );
};