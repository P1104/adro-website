"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

export const HomeCTA = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary/20">
                    {/* Decorative elements */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/20 blur-[80px] rounded-full translate-x-1/2 translate-y-1/2" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative z-10"
                    >
                        <Zap className="w-16 h-16 text-white mx-auto mb-8 fill-white/20" />
                        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">
                            Ready to unlock your data&apos;s potential?
                        </h2>
                        <p className="text-white/80 text-xl font-medium mb-12 max-w-3xl mx-auto leading-relaxed">
                            Join hundreds of data-driven companies using ADRO to turn complexity into clarity.
                            Start your free intelligence journey today.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Button size="lg" className="h-16 px-10 bg-white text-primary hover:bg-white/90 font-bold text-xl rounded-2xl shadow-xl transition-all active:scale-95">
                                Get Started Free
                            </Button>
                            <Button size="lg" variant="outline" className="h-16 px-10 border-white/20 bg-white/10 text-white hover:bg-white/20 font-bold text-xl rounded-2xl backdrop-blur-sm transition-all">
                                Schedule a Demo
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
