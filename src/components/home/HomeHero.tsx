"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { BarChart3, LineChart, PieChart, Database, Zap } from "lucide-react";

export const HomeHero = () => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center bg-white">
            {/* Background Glows - Subtle for Light Theme */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Side Text */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-8">
                                <Zap size={14} className="fill-primary" />
                                Next Generation Analytics
                            </div>
                            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-8 leading-[1.1]">
                                Stop Building Dashboards.<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                    Start Understanding Data.
                                </span>
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                                Your data. Instantly visualized. From raw files to intelligence in seconds.
                                Experience the power of AI-driven data understanding.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                <Button size="lg" className="h-14 px-8 bg-primary text-white font-bold text-lg hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all rounded-xl">
                                    Try ADRO Now
                                </Button>
                                <Button size="lg" variant="outline" className="h-14 px-8 border-border bg-white text-foreground hover:bg-muted transition-all font-semibold rounded-xl">
                                    See Demo
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side Visual - Refined Light Dashboard */}
                    <div className="flex-1 relative w-full max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative perspective-1000"
                        >
                            {/* Main Dashboard Card */}
                            <div className="bg-white rounded-3xl border border-border p-8 aspect-[4/3] flex flex-col gap-8 relative group shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/[0.02] to-transparent pointer-events-none" />

                                {/* Header */}
                                <div className="flex items-center justify-between border-b border-border/50 pb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                            <Database className="text-primary" size={20} />
                                        </div>
                                        <span className="text-sm font-bold text-foreground/80">Intelligence_Report_2026.xlsx</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                                    </div>
                                </div>

                                {/* Grid */}
                                <div className="grid grid-cols-2 gap-6 flex-1">
                                    {/* Chart 1 */}
                                    <div className="bg-muted/30 rounded-2xl border border-border p-5 flex flex-col justify-between">
                                        <div className="flex justify-between items-start">
                                            <span className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Monthly Growth</span>
                                            <LineChart size={18} className="text-primary" />
                                        </div>
                                        <div className="flex items-end gap-1.5 h-20 mt-4">
                                            {[40, 60, 45, 90, 75, 95].map((h, i) => (
                                                <div
                                                    key={i}
                                                    className="flex-1 bg-primary/20 hover:bg-primary/40 rounded-t-md transition-all duration-300"
                                                    style={{ height: `${h}%` }}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Chart 2 */}
                                    <div className="bg-muted/30 rounded-2xl border border-border p-5 flex flex-col justify-between">
                                        <div className="flex justify-between items-start">
                                            <span className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Projected ROI</span>
                                            <PieChart size={18} className="text-secondary" />
                                        </div>
                                        <div className="relative h-24 flex items-center justify-center">
                                            <div className="w-20 h-20 rounded-full border-[8px] border-secondary/10 border-t-secondary animate-spin-slow" />
                                            <span className="absolute text-sm font-bold text-foreground">84%</span>
                                        </div>
                                    </div>

                                    {/* Chart 3 - Full Width Bottom */}
                                    <div className="col-span-2 bg-muted/30 rounded-2xl border border-border p-5">
                                        <div className="flex justify-between items-center mb-5">
                                            <span className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Global Distribution</span>
                                            <BarChart3 size={18} className="text-primary" />
                                        </div>
                                        <div className="space-y-4">
                                            {[65, 85, 45].map((w, i) => (
                                                <div key={i} className="space-y-2">
                                                    <div className="flex justify-between text-[11px] text-foreground/60 uppercase font-bold">
                                                        <span>Region {i + 1}</span>
                                                        <span>{w}%</span>
                                                    </div>
                                                    <div className="h-2 w-full bg-white rounded-full overflow-hidden border border-border/50">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            animate={{ width: `${w}%` }}
                                                            transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                                                            className="h-full bg-primary"
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Elements */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -top-10 -right-10 p-5 bg-white rounded-2xl border border-border shadow-2xl z-20"
                                >
                                    <Zap className="text-primary mb-2 fill-primary" size={20} />
                                    <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest mb-1">AI Intelligence</div>
                                    <div className="text-base font-bold text-foreground">Active</div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
