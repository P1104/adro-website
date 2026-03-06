"use client";

import { motion } from "framer-motion";
import { Tag, ArrowDown } from "lucide-react";

export const PricingHero = () => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-white">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 text-black text-xs font-bold tracking-widest uppercase mb-8">
                        <Tag size={14} className="fill-black" />
                        Pricing Plans
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black text-black mb-10 tracking-tighter leading-tight">
                        Scale Your <br /> <span className="text-black/40">Intelligence Today.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-black/60 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
                        Transparent, simple pricing for every stage of growth. From solo founders
                        exploring their data to enterprises needing global intelligence patterns.
                    </p>
                    <div className="flex justify-center">
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center"
                        >
                            <ArrowDown size={20} className="text-black/40" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
