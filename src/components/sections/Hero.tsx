"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { BarChart3, LineChart, PieChart, Database, Zap } from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
            {/* Background Glows */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 blur-[120px] rounded-full" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Left Side Text */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                                <Zap size={14} className="fill-primary" />
                                Next Generation Analytics
                            </div>
                            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-grey-700 mb-6 leading-[1.1]">
                                Stop Building Dashboards.<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                    Start Understanding Data.
                                </span>
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0">
                                Your data. Instantly visualized. From Excel to insights in seconds.
                                Experience the power of AI-driven data intelligence.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                <Button size="lg" className="h-14 px-8 bg-primary text-black font-bold text-lg hover:bg-primary/90 shadow-[0_0_20px_rgba(0,229,255,0.35)] hover:shadow-[0_0_40px_rgba(0,229,255,0.5)] transition-all">
                                    Try ADRO Now
                                </Button>
                                <Button size="lg" variant="outline" className="h-14 px-8 border-white/10 bg-white/5 text-grey-700 hover:bg-white/10 hover:border-primary/50 transition-all font-semibold">
                                    See Demo
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side Visual - 3D Dashboard Mockup */}
                    <div className="flex-1 relative w-full max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative perspective-1000"
                        >
                            {/* Main Dashboard Card */}
                            <div className="glass-card rounded-2xl overflow-hidden p-6 aspect-[4/3] flex flex-col gap-6 relative group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none" />

                                {/* Header */}
                                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                                    <div className="flex items-center gap-2">
                                        <Database className="text-primary" size={20} />
                                        <span className="text-sm font-medium text-grey-700/80">Revenue_Insights_2026.xlsx</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                        <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                                        <div className="w-2 h-2 rounded-full bg-green-500/50" />
                                    </div>
                                </div>

                                {/* Grid */}
                                <div className="grid grid-cols-2 gap-4 flex-1">
                                    {/* Chart 1 */}
                                    <div className="bg-white/3 rounded-xl border border-white/5 p-4 flex flex-col justify-between">
                                        <div className="flex justify-between items-start">
                                            <span className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Monthly Growth</span>
                                            <LineChart size={16} className="text-primary" />
                                        </div>
                                        <div className="flex items-end gap-1 h-20 mt-4">
                                            {[40, 60, 45, 90, 75, 95].map((h, i) => (
                                                <div
                                                    key={i}
                                                    className="flex-1 bg-primary/40 rounded-t-sm transition-all duration-1000"
                                                    style={{ height: `${h}%`, opacity: 0.3 + (i * 0.1) }}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Chart 2 */}
                                    <div className="bg-white/3 rounded-xl border border-white/5 p-4 flex flex-col justify-between">
                                        <div className="flex justify-between items-start">
                                            <span className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Projected ROI</span>
                                            <PieChart size={16} className="text-secondary" />
                                        </div>
                                        <div className="relative h-24 flex items-center justify-center">
                                            <div className="w-20 h-20 rounded-full border-[6px] border-secondary/20 border-t-secondary shadow-[0_0_15px_rgba(34,211,238,0.3)] animate-spin-slow" />
                                            <span className="absolute text-sm font-bold text-grey-700">84%</span>
                                        </div>
                                    </div>

                                    {/* Chart 3 - Full Width Bottom */}
                                    <div className="col-span-2 bg-white/3 rounded-xl border border-white/5 p-4">
                                        <div className="flex justify-between items-center mb-4">
                                            <span className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Global Distribution</span>
                                            <BarChart3 size={16} className="text-primary" />
                                        </div>
                                        <div className="space-y-3">
                                            {[65, 85, 45].map((w, i) => (
                                                <div key={i} className="space-y-1">
                                                    <div className="flex justify-between text-[10px] text-grey-700/60 uppercase">
                                                        <span>Region {i + 1}</span>
                                                        <span>{w}%</span>
                                                    </div>
                                                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
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
                                    className="absolute -top-6 -right-6 p-4 glass-card rounded-xl border-primary/30 shadow-[0_0_20px_rgba(0,229,255,0.2)]"
                                >
                                    <Zap className="text-primary mb-1" size={16} />
                                    <div className="text-[10px] text-muted-foreground uppercase font-bold">Pro AI Mode</div>
                                    <div className="text-sm font-bold text-grey-700">Enabled</div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
