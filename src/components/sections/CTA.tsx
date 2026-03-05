"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Zap, ArrowRight } from "lucide-react";

export const CTA = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="glass-card rounded-[40px] p-8 md:p-20 text-center border-primary/20 bg-gradient-to-b from-white/[0.05] to-transparent overflow-hidden relative">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8">
                            <Zap size={14} className="fill-primary" />
                            Get Started Today
                        </div>

                        <h2 className="text-4xl md:text-6xl font-extrabold text-grey-700 mb-6 leading-tight">
                            Your Data Deserves <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                Intelligence
                            </span>
                        </h2>

                        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
                            Upload your Excel file and turn raw numbers into powerful insights.
                            Join thousands of data-driven teams using ADRO Insights.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button size="lg" className="h-16 px-10 bg-primary text-black font-bold text-lg hover:bg-primary/90 shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:shadow-[0_0_50px_rgba(0,229,255,0.6)] transition-all group">
                                Try ADRO Now
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button size="lg" variant="outline" className="h-16 px-10 border-white/10 bg-white/5 text-grey-700 hover:bg-white/10 hover:border-primary/50 transition-all font-semibold">
                                Upload Dataset
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
