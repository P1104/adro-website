"use client";

import { motion } from "framer-motion";
import { Globe, ArrowDown } from "lucide-react";

export const AboutHero = () => {
    return (
        <section className="relative pt-12 pb-2 overflow-hidden bg-white">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 text-black text-xs font-bold tracking-widest uppercase mb-8">
                        <Globe size={14} className="fill-black" />
                        Our Identity
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black text-black mb-10 tracking-tighter leading-tight">
                        Bridging the <br /> <span className="text-black/40">Intelligence Gap.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-black/60 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
                        ADRO was founded with a simple mission: to make data intelligence
                        accessible to everyone. We believe that understanding your business
                        shouldn't require a PhD in data science.
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
