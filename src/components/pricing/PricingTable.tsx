"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const tiers = [
    {
        name: "Starter",
        price: "$0",
        description: "Perfect for exploring the core capabilities of Adro.",
        features: [
            "1 Data file per month",
            "Core Data Explorer",
            "Automatic Dashboards",
            "Standard Export (PNG/JPG)",
            "Community Support",
        ],
        cta: "Start for Free",
        popular: false,
    },
    {
        name: "Pro",
        price: "$49",
        description: "Advanced intelligence for professional analysts and teams.",
        features: [
            "20 Data files per month",
            "Advanced Modeling Engine",
            "Predictive Analytics",
            "Team Collaboration (5 seats)",
            "Priority Support",
            "Full Export (SVG/PDF/CSV)",
        ],
        cta: "Get Started Now",
        popular: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "Maximum security and custom training for large-scale operations.",
        features: [
            "Unlimited data files",
            "Custom AI Model Training",
            "SOC2 Compliance",
            "Dedicated Support",
            "API Access",
            "On-premise Options",
        ],
        cta: "Contact Sales",
        popular: false,
    },
];

export const PricingTable = () => {
    return (
        <section id="pricing" className="py-24 bg-black/[0.02]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-black/5 border border-black/10 text-black text-xs font-bold uppercase tracking-widest mb-6"
                    >
                        Transparent Pricing
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-black mb-6"
                    >
                        Intelligence That Scales
                    </motion.h2>
                    <p className="text-black/60 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
                        Whether you&apos;re a solo founder or a Fortune 500 company, we have the right
                        plan to help you dominate your market through better data understanding.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className={`h-full border-black/10 flex flex-col rounded-[2.5rem] p-4 transition-all hover:shadow-2xl hover:shadow-black/5 ${tier.popular ? 'border-black ring-1 ring-black shadow-xl scale-105 z-10 bg-white' : 'bg-white'}`}>
                                <CardHeader className="text-center pb-8 border-b border-black/5">
                                    <CardTitle className="text-3xl font-bold text-black mb-4">{tier.name}</CardTitle>
                                    <div className="flex items-baseline justify-center gap-1">
                                        <span className="text-6xl font-black text-black">{tier.price}</span>
                                        {tier.price !== "Custom" && <span className="text-black/50 font-medium">/month</span>}
                                    </div>
                                    <CardDescription className="pt-6 text-black/60 font-medium text-base">{tier.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="pt-10 flex-grow">
                                    <ul className="space-y-5">
                                        {tier.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-4 text-black text-sm font-bold leading-tight">
                                                <div className="w-5 h-5 rounded-full bg-black/5 flex items-center justify-center shrink-0 mt-0.5">
                                                    <Check size={12} className="text-black" />
                                                </div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter className="pt-8">
                                    <Button
                                        className={`w-full h-16 rounded-2xl font-black text-xl transition-all shadow-lg ${tier.popular ? 'bg-black text-white hover:bg-black/90 shadow-black/20' : 'bg-white border-black/20 text-black hover:bg-black/5 border shadow-none'}`}
                                        variant={tier.popular ? "default" : "outline"}
                                    >
                                        {tier.cta}
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
