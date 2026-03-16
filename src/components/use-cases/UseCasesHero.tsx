"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

export const UseCasesHero = () => {
    return (
        <section className="relative pt-32 pb-20 px-16 overflow-hidden bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 text-black text-[10px] font-bold tracking-widest uppercase mb-8">
                        <Rocket size={14} className="fill-black" />
                        Solutions in Action
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-black mb-8 tracking-tighter leading-tight">
                        Real-World Use Cases <br />
                        <span className="text-black/40 text-3xl md:text-5xl">for ADRO.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-black/40 max-w-2xl mx-auto font-medium leading-relaxed">
                        ADRO helps businesses transform raw datasets into actionable insights across multiple industries and functions. From sales analytics to financial reporting, ADRO enables teams to analyze data instantly with AI.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
