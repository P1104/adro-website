"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";

const comparisonData = [
    {
        feature: "AI Data Analysis",
        adro: "Built-in AI analytics",
        powerBi: "Limited AI features",
        tableau: "Limited AI features",
        excel: "No AI",
    },
    {
        feature: "Natural Language Queries",
        adro: "Ask questions to your data",
        powerBi: "Requires configuration",
        tableau: "Limited support",
        excel: "Not available",
    },
    {
        feature: "Instant Dashboard Generation",
        adro: "Automatic dashboards",
        powerBi: "Manual setup required",
        tableau: "Manual setup required",
        excel: "Manual charts",
    },
    {
        feature: "Data Preparation",
        adro: "AI assisted",
        powerBi: "Requires modeling",
        tableau: "Requires preparation",
        excel: "Manual work",
    },
    {
        feature: "Ease of Use",
        adro: "Simple upload and analyze",
        powerBi: "Moderate learning curve",
        tableau: "Steep learning curve",
        excel: "Depends on formulas",
    },
    {
        feature: "Technical Knowledge Required",
        adro: "None",
        powerBi: "Requires DAX / modeling",
        tableau: "Requires visualization design",
        excel: "Requires formulas",
    },
];

export const ComparisonSection = () => {
    return (
        <section className="py-12 px-16 bg-white relative">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mb-24 mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 text-black text-[10px] font-bold tracking-widest uppercase mb-8"
                    >
                        ADRO vs Traditional BI Tools
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-black mb-8 tracking-tighter leading-tight"
                    >
                        A Faster Way to Turn <br />
                        <span className="text-black/40 text-3xl md:text-5xl">Data Into Insights.</span>
                    </motion.h2>
                    <p className="text-xl md:text-2xl text-black/60 max-w-2xl mx-auto font-medium leading-relaxed">
                        Traditional analytics tools like Power BI, Tableau, and Excel require complex setup, manual dashboard creation, and technical expertise. ADRO changes this by allowing you to talk to your data and discover insights in seconds.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto overflow-x-auto">
                    <Card className="border-slate-200 shadow-xl shadow-slate-200/50 rounded-3xl overflow-hidden bg-white">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-black/5 border-b border-black/10">
                                    <th className="py-6 px-10 text-sm font-bold text-black uppercase tracking-wider">Feature</th>
                                    <th className="py-6 px-10 text-sm font-bold text-black text-center bg-black/5 uppercase tracking-wider">ADRO</th>
                                    <th className="py-6 px-10 text-sm font-bold text-black/40 text-center uppercase tracking-wider">Power BI</th>
                                    <th className="py-6 px-10 text-sm font-bold text-black/40 text-center uppercase tracking-wider">Tableau</th>
                                    <th className="py-6 px-10 text-sm font-bold text-black/40 text-center uppercase tracking-wider">Excel</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonData.map((row, i) => (
                                    <tr key={i} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                                        <td className="py-5 px-10 font-bold text-slate-900 border-r border-slate-100">{row.feature}</td>
                                        <td className="py-5 px-10 bg-slate-50/30 border-r border-slate-100">
                                            <div className="flex flex-col items-center gap-1">
                                                <div className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center mb-1">
                                                    <Check size={14} className="text-white" />
                                                </div>
                                                <span className="text-xs font-bold text-slate-900 text-center">{row.adro}</span>
                                            </div>
                                        </td>
                                        <td className="py-5 px-10 text-center border-r border-black/5">
                                            <span className="text-xs font-medium text-black/40">{row.powerBi}</span>
                                        </td>
                                        <td className="py-5 px-10 text-center border-r border-black/5">
                                            <span className="text-xs font-medium text-black/40">{row.tableau}</span>
                                        </td>
                                        <td className="py-5 px-10 text-center">
                                            <span className="text-xs font-medium text-black/40">{row.excel}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Card>
                </div>

            </div>
        </section>
    );
};
