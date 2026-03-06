"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import Link from "next/link";

const previewTiers = [
    {
        name: "Starter",
        price: "$0",
        features: ["1 Data file / mo", "Core Explorer", "Standard Export"],
        cta: "Try Now",
        link: "/pricing"
    },
    {
        name: "Pro",
        price: "$49",
        features: ["Unlimited files", "Advanced Modeling", "Team Workspaces"],
        cta: "Go Pro",
        link: "/pricing",
        popular: true
    }
];

export const Pricing = () => {
    return (
        <section id="pricing" className="py-20 bg-black/[0.01] border-y border-black/5">
            <div className="container mx-auto px-4 text-center">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4 tracking-tighter">Flexible Data Analytics</h2>
                    <p className="text-black/40 text-base font-medium">Choose the plan that fits your data exploration needs.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
                    {previewTiers.map((tier, index) => (
                        <Card key={index} className={`rounded-[2rem] p-6 text-left border-black/5 shadow-none transition-all hover:shadow-xl hover:shadow-black/[0.02] bg-white ${tier.popular ? 'ring-1 ring-black border-black' : ''}`}>
                            <CardHeader className="p-0 pb-6 mb-6 border-b border-black/5 flex flex-row items-center justify-between">
                                <div>
                                    <CardTitle className="text-lg font-extrabold text-black/40 mb-1 uppercase tracking-widest">{tier.name}</CardTitle>
                                    <div className="text-4xl font-black text-black">{tier.price}<span className="text-xs text-black/40 font-bold ml-1">/mo</span></div>
                                </div>
                                {tier.popular && <span className="bg-black text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter">Popular</span>}
                            </CardHeader>
                            <CardContent className="p-0 mb-8">
                                <ul className="space-y-3">
                                    {tier.features.map((f, i) => (
                                        <li key={i} className="flex items-center gap-2.5 text-xs font-bold text-black/60">
                                            <Check size={12} className="text-black opacity-30" /> {f}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter className="p-0">
                                <Button asChild className={`w-full h-12 rounded-xl font-black text-sm ${tier.popular ? 'bg-black text-white' : 'bg-white border-black/20 text-black border shadow-none hover:bg-black/5'}`}>
                                    <Link href={tier.link}>{tier.cta}</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                <Link
                    href="/pricing"
                    className="inline-flex items-center gap-2 text-black font-extrabold uppercase tracking-widest text-[10px] hover:gap-3 transition-all opacity-60 hover:opacity-100"
                >
                    Compare All Plans <ArrowRight size={14} />
                </Link>
            </div>
        </section>
    );
};
