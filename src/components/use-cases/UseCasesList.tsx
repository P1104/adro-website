"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, BarChart, PieChart, Activity, Settings, Layout } from "lucide-react";

const useCases = [
    {
        title: "Sales Analytics",
        description: "Track revenue trends, analyze regional sales performance, and identify top-performing products using AI-generated dashboards. Sales teams can instantly visualize performance and make data-driven decisions.",
        icon: TrendingUp,
    },
    {
        title: "Marketing Performance Analysis",
        description: "Analyze campaign performance, track conversion metrics, and identify the most effective marketing channels. ADRO helps marketing teams turn campaign data into actionable insights.",
        icon: BarChart,
    },
    {
        title: "Financial Reporting",
        description: "Generate financial dashboards from accounting or finance datasets. Visualize revenue trends, cost breakdowns, and financial KPIs instantly.",
        icon: PieChart,
    },
    {
        title: "Business Intelligence Dashboards",
        description: "Create company-wide dashboards that monitor performance across departments including operations, sales, and marketing. ADRO simplifies business intelligence with automated AI analytics.",
        icon: Layout,
    },
    {
        title: "Operational Insights",
        description: "Analyze operational data to identify inefficiencies, optimize workflows, and improve productivity. Operational teams can use ADRO to make faster, smarter decisions.",
        icon: Settings,
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
