"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export const Story = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-black mb-10 tracking-tighter leading-tight">The ADRO Story</h2>
                        <div className="space-y-8 text-xl text-black/60 font-medium leading-relaxed">
                            <p>
                                In a world of fragmented data, Adro was born to bridge the Intelligence Gap.
                                We noticed that organizations were drowning in data but starving for clarity.
                                The traditional stack was too slow, too complex, and too disconnected.
                            </p>
                            <p>
                                We built Adro to be the neural layer for your business assets.
                                By integrating exploration, modeling, and analytics into a single high-performance engine,
                                we've eliminated the friction that holds teams back.
                            </p>
                            <p>
                                Today, Adro is the standard for modern intelligence. We don't just process information;
                                we transform it into a competitive advantage, enabling organizations to scale
                                insights at the speed of thought.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex-1 relative w-full lg:max-w-xl"
                    >
                        <div className="bg-black/5 rounded-[3.5rem] p-6 border border-black/10">
                            <div className="bg-black rounded-[3rem] p-16 shadow-2xl shadow-black/20 relative overflow-hidden aspect-square flex items-center justify-center">
                                <Zap className="text-white w-48 h-48 fill-white/10" />
                                <div className="absolute top-12 right-12 text-7xl font-black text-white/5">2026</div>
                                <div className="absolute bottom-12 left-12">
                                    <div className="text-white font-bold tracking-widest uppercase text-sm mb-2 opacity-40">Since Launch</div>
                                    <div className="text-white text-5xl font-black">1.2B INSIGHTS</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
