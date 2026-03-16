"use client";

import { motion } from "framer-motion";
import { Check, X, ShieldCheck, Database, MessageSquare, Sparkles, Zap, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { WhyChoose } from "@/components/home/WhyChoose/WhyChoose";

interface ComparisonPageProps {
    competitor: string;
    description: string;
    features: {
        feature: string;
        adro: string;
        competitorValue: string;
        isBetter: boolean;
    }[];
    seoTitle: string;
    seoDescription: string;
}

export const ComparisonPageTemplate = ({ competitor, description, features }: ComparisonPageProps) => {
    return (
        <main className="flex flex-col w-full min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-16 overflow-hidden bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 text-black text-[10px] font-bold tracking-widest uppercase mb-8">
                            <ShieldCheck size={14} className="text-black" />
                            ADRO vs {competitor}
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black text-black mb-8 tracking-tighter leading-tight">
                            Better Alternative to {competitor} <br />
                            <span className="text-black/40 text-2xl md:text-4xl">A Faster Way to Turn Data Into Insights.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-black/40 max-w-2xl mx-auto font-medium leading-relaxed">
                            {description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Feature Comparison Table Section (Simplified Overview) */}
            <section className="py-24 px-16 bg-slate-50/50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {features.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <Card className="h-full border-slate-200 p-10 rounded-[2rem] bg-white shadow-sm hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-500">
                                        <h3 className="text-xl font-bold text-slate-900 mb-8 tracking-tight uppercase text-xs opacity-40">{item.feature}</h3>

                                        <div className="space-y-8">
                                            <div>
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center shrink-0">
                                                        <Check size={12} className="text-white" />
                                                    </div>
                                                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-900">ADRO Advantage</span>
                                                </div>
                                                <p className="text-lg font-bold text-slate-900 leading-snug">{item.adro}</p>
                                            </div>

                                            <div className="pt-8 border-t border-slate-100">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div className="w-5 h-5 rounded-full border border-slate-200 flex items-center justify-center shrink-0">
                                                        <X size={12} className="text-slate-300" />
                                                    </div>
                                                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{competitor}</span>
                                                </div>
                                                <p className="text-base font-medium text-slate-400 leading-relaxed">{item.competitorValue}</p>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Teams Choose ADRO */}
            <WhyChoose competitor={competitor} />

            {/* Workflow Section */}
            <section className="py-32 px-16 bg-black text-white rounded-[4rem] mx-8 mb-32 overflow-hidden relative shadow-2xl shadow-black/20">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mb-24 mx-auto text-center">
                        <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-tight">The ADRO Workflow</h2>
                        <p className="text-white/60 text-xl md:text-2xl mx-auto max-w-2xl font-medium">AI-powered analytics made simple.</p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-12 max-w-5xl mx-auto">
                        {[
                            { step: "01", label: "Upload Data", icon: Database },
                            { step: "02", label: "Ask Questions", icon: MessageSquare },
                            { step: "03", label: "Generate Insights", icon: Sparkles },
                            { step: "04", label: "Build Dashboards", icon: Zap },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center gap-6 group relative">
                                <div className="w-24 h-24 rounded-3xl bg-white/10 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-500">
                                    <item.icon className="text-white group-hover:text-slate-900 transition-colors" size={32} />
                                </div>
                                <div className="text-center">
                                    <span className="text-[10px] font-bold text-white/40 tracking-[0.2em] uppercase mb-2 block">{item.step}</span>
                                    <p className="text-xl font-bold">{item.label}</p>
                                </div>
                                {i < 3 && (
                                    <ArrowRight className="hidden md:block absolute -right-16 top-10 text-white/20" size={24} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            </section>

            {/* When to Use Section */}
            <section className="py-32 px-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-24 items-center">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-black text-black mb-8 tracking-tighter leading-tight">When to Use ADRO</h2>
                                <p className="text-black/60 text-lg md:text-xl mb-12 font-medium leading-relaxed">
                                    ADRO is ideal for teams that need to move fast. If you want instant dashboards without complex setup, ADRO provides a simpler and faster solution.
                                </p>
                                <ul className="space-y-6">
                                    {[
                                        "Startups analyzing business data",
                                        "Analysts who want faster insights",
                                        "Teams without BI expertise",
                                        "Companies that want AI-powered analytics"
                                    ].map((text, i) => (
                                        <li key={i} className="flex items-center gap-4 text-slate-900 font-bold">
                                            <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
                                                <Check size={14} className="text-slate-900" />
                                            </div>
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-6 pt-12">
                                    <Card className="p-8 border-slate-200 rounded-3xl bg-white shadow-sm">
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Startup</p>
                                        <p className="text-slate-900 font-bold">Scale Faster</p>
                                    </Card>
                                    <Card className="p-8 border-slate-200 rounded-3xl bg-slate-900">
                                        <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-2">Analysts</p>
                                        <p className="text-white font-bold">Work Smarter</p>
                                    </Card>
                                </div>
                                <div className="space-y-6">
                                    <Card className="p-8 border-slate-200 rounded-3xl bg-slate-50">
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Teams</p>
                                        <p className="text-slate-900 font-bold">Zero Friction</p>
                                    </Card>
                                    <Card className="p-8 border-slate-200 rounded-3xl bg-white shadow-sm">
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Enterprise</p>
                                        <p className="text-slate-900 font-bold">AI Native</p>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-40 px-16 bg-white text-center border-t border-slate-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-10 tracking-tight">Evolve Your Data Strategy</h2>
                    <p className="text-slate-500 text-xl max-w-2xl mx-auto mb-16 font-medium leading-relaxed">
                        Redefine how your organization interacts with data. Transition from manual visualization to autonomous intelligence.
                    </p>
                    <button className="px-12 py-5 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10">
                        Start Your Transformation
                    </button>
                </div>
            </section>

            <Footer />
        </main>
    );
};
