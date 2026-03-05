"use client";

import { motion } from "framer-motion";
import { User, Target, Wallet, Cpu, Library, Users } from "lucide-react";

const useCases = [
    {
        title: "Startup Founders",
        role: "Track business performance",
        icon: User,
    },
    {
        title: "Marketing Teams",
        role: "Analyze campaign data",
        icon: Target,
    },
    {
        title: "Finance Teams",
        role: "Understand revenue patterns",
        icon: Wallet,
    },
    {
        title: "Operations",
        role: "Monitor operational metrics",
        icon: Cpu,
    },
    {
        title: "Analysts",
        role: "Explore datasets easily",
        icon: Library,
    },
    {
        title: "Students",
        role: "Learn from real data",
        icon: Users,
    },
];

export const UseCases = () => {
    return (
        <section id="use-cases" className="py-24 bg-white/[0.01]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-grey-700 mb-4">
                        Built for <span className="text-primary">Everyone</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        From CEOs to University students, ADRO provides deep insights
                        for every role and requirement.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                    {useCases.map((useCase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-6 md:p-8 rounded-2xl flex flex-col items-center text-center group hover:bg-white/[0.03] transition-all cursor-default"
                        >
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/5 flex items-center justify-center mb-4 md:mb-6 border border-white/5 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all">
                                <useCase.icon className="text-primary" size={24} />
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-grey-700 mb-2">{useCase.title}</h3>
                            <p className="text-xs md:text-sm text-muted-foreground">{useCase.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
