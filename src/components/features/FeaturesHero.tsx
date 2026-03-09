"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { Zap, Database, BarChart3, Clock, Shield, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useEffect, useRef } from "react";

function AnimatedCounter({ target, suffix = "", prefix = "", decimals = 0 }: { target: number; suffix?: string; prefix?: string; decimals?: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (v) => {
        if (decimals > 0) return v.toFixed(decimals);
        return Math.round(v).toLocaleString();
    });

    useEffect(() => {
        if (isInView) {
            animate(count, target, { duration: 2, ease: "easeOut" });
        }
    }, [isInView, count, target]);

    return (
        <span ref={ref} className="tabular-nums">
            {prefix}<motion.span>{rounded}</motion.span>{suffix}
        </span>
    );
}

const stats = [
    {
        icon: Database,
        value: 500,
        suffix: "ms",
        prefix: "<",
        label: "Query Response",
        description: "Avg processing time for standard CSV datasets",
        decimals: 0,
    },
    {
        icon: BarChart3,
        value: 10,
        suffix: "x",
        prefix: "",
        label: "Faster Insights",
        description: "Compared to traditional BI pipeline workflows",
        decimals: 0,
    },
    {
        icon: Shield,
        value: 99.9,
        suffix: "%",
        prefix: "",
        label: "Uptime",
        description: "Enterprise-grade reliability with zero data loss",
        decimals: 1,
    },
    {
        icon: Clock,
        value: 24,
        suffix: "/7",
        prefix: "",
        label: "Anomaly Monitoring",
        description: "Continuous scanning with real-time alert system",
        decimals: 0,
    },
    {
        icon: TrendingUp,
        value: 50,
        suffix: "M+",
        prefix: "",
        label: "Rows Processed",
        description: "Handled daily across all active deployments",
        decimals: 0,
    },
    {
        icon: Zap,
        value: 3,
        suffix: "s",
        prefix: "<",
        label: "Time to First Chart",
        description: "From file upload to interactive visualization",
        decimals: 0,
    },
];

export const FeaturesHero = () => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-white">
            <div className="container mx-auto px-4">
                {/* Hero Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 text-black text-[10px] font-bold tracking-widest uppercase mb-8">
                        <Zap size={14} className="fill-black" />
                        System Architecture
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-black mb-8 tracking-tighter leading-tight">
                        Engineered for <br />
                        <span className="text-black/40 text-3xl md:text-5xl">Clarity & Control.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-black/40 max-w-2xl mx-auto font-medium leading-relaxed">
                        Explore the powerful technical foundation of ADRO. From automated DuckDB data ingestion to metadata-driven anomaly detection, every component is optimized for fast, intelligent data analysis.
                    </p>
                </motion.div>

                {/* Animated Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <Card className="group relative rounded-2xl border-black/8 bg-white hover:border-black/20 hover:shadow-xl hover:shadow-black/5 transition-all duration-500 p-6 h-full overflow-hidden cursor-default">
                                {/* Hover background glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-black/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-5">
                                        <div className="w-11 h-11 rounded-xl bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                                            <stat.icon size={20} />
                                        </div>
                                        <div className="px-2.5 py-1 rounded-full bg-black/5 text-[10px] font-bold text-black/40 uppercase tracking-wider">
                                            Live
                                        </div>
                                    </div>

                                    <div className="text-4xl md:text-5xl font-black text-black tracking-tighter mb-2 leading-none">
                                        <AnimatedCounter
                                            target={stat.value}
                                            suffix={stat.suffix}
                                            prefix={stat.prefix}
                                            decimals={stat.decimals}
                                        />
                                    </div>

                                    <h3 className="text-sm font-bold text-black mb-1 tracking-tight">
                                        {stat.label}
                                    </h3>
                                    <p className="text-xs text-black/40 font-medium leading-relaxed">
                                        {stat.description}
                                    </p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
