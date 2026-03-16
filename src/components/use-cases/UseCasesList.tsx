"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, BarChart, PieChart, Activity, Settings, Layout } from "lucide-react";

const useCases = [
    {
        title: "Sales Analytics",
        description: "Monitor revenue trends, compare regional performance, and identify top-selling products with AI-generated dashboards.",
        icon: TrendingUp,
    },
    {
        title: "Marketing Performance Analysis",
        description: "Evaluate campaign performance, track conversion metrics, and discover which channels drive the highest impact.",
        icon: BarChart,
    },
    {
        title: "Financial Reporting",
        description: "Create financial dashboards to track revenue, costs, and key financial KPIs in real time.",
        icon: PieChart,
    },
    {
        title: "Business Intelligence Dashboards",
        description: "Build centralized dashboards that track performance across departments such as sales, marketing, and operations.",
        icon: Layout,
    },
    {
        title: "Operational Insights",
        description: "Uncover operational inefficiencies, monitor workflows, and improve productivity with AI-driven insights.",
        icon: Settings,
    },
    {
        title: "Product Analytics",
        description: "Understand how users interact with your product by analyzing feature usage, engagement trends, and user behavior. ADRO helps product teams uncover insights that improve product performance and user experience.",
        icon: Activity,
    }
];

export const UseCasesList = () => {
    return (
        <section id="use-cases" className="py-20 px-16 bg-white relative">
            <div className="container mx-auto px-4">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {useCases.map((useCase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <Card className="h-full border-black/10 hover:border-black/30 transition-all hover:shadow-2xl hover:shadow-black/5 group rounded-[2rem] p-4 bg-white">
                                <CardHeader>
                                    <div className="w-14 h-14 rounded-2xl bg-black/5 flex items-center justify-center mb-4 group-hover:bg-black group-hover:text-white transition-all duration-300">
                                        <useCase.icon size={28} />
                                    </div>
                                    <CardTitle className="text-2xl font-bold text-black tracking-tight">{useCase.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-black/60 text-base leading-relaxed font-medium">
                                        {useCase.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
