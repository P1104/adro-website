"use client";

import { motion } from "framer-motion";
import { Check, Zap, Rocket, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
    {
        name: "Starter",
        price: "$0",
        description: "Perfect for testing the power of ADRO AI.",
        features: [
            "Up to 3 Dashboards",
            "5 AI Inquiries / day",
            "Excel & CSV Support",
            "Community Support",
            "Standard Visualizations"
        ],
        cta: "Try Free Now",
        icon: Zap,
        highlight: false
    },
    {
        name: "Pro",
        price: "$49",
        description: "For professionals who need deeper insights.",
        features: [
            "Unlimited Dashboards",
            "Infinite AI Inquiries",
            "Priority Processing",
            "Advanced Anomaly Detection",
            "Custom Theme Support",
            "Email Support"
        ],
        cta: "Start Pro Trial",
        icon: Rocket,
        highlight: true
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "Scale-ready intelligence for large teams.",
        features: [
            "SOC2 Compliance",
            "SAML / SSO Auth",
            "Full Security Whitepaper",
            "Dedicated Account Manager",
            "On-prem Deployment Option",
            "Custom API Integration"
        ],
        cta: "Contact Sales",
        icon: Building2,
        highlight: false
    }
];

export default function PricingPage() {
    return (
        <div className="pt-32 pb-24 bg-white">
            {/* Pricing Hero */}
            <section className="container mx-auto px-4 mb-24 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-widest mb-6"
                >
                    Simple Pricing
                </motion.div>
                <h1 className="text-6xl md:text-7xl font-extrabold text-foreground mb-8 tracking-tight">
                    Intelligence Should Be <span className="text-primary">Affordable</span>.
                </h1>
                <p className="text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto">
                    Choose the plan that fits your data volume and intelligence needs.
                    No hidden fees, no complexity.
                </p>
            </section>

            {/* Pricing Cards */}
            <section className="container mx-auto px-4 mb-32">
                <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`p-10 rounded-[3rem] border flex flex-col h-full transition-all duration-300 relative overflow-hidden ${plan.highlight
                                    ? "border-primary bg-primary/5 shadow-2xl shadow-primary/10"
                                    : "border-border bg-white hover:border-primary/30"
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute top-6 right-8 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                                    Most Popular
                                </div>
                            )}

                            <div className="w-14 h-14 rounded-2xl bg-muted/50 flex items-center justify-center mb-8">
                                <plan.icon className={plan.highlight ? "text-primary" : "text-foreground"} size={28} />
                            </div>

                            <h3 className="text-2xl font-bold mb-2 tracking-tight">{plan.name}</h3>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-5xl font-black text-foreground">{plan.price}</span>
                                {plan.price !== "Custom" && <span className="text-muted-foreground font-bold">/mo</span>}
                            </div>
                            <p className="text-muted-foreground font-medium mb-10 leading-relaxed">
                                {plan.description}
                            </p>

                            <ul className="space-y-5 mb-12 flex-1">
                                {plan.features.map((feature, fi) => (
                                    <li key={fi} className="flex items-center gap-3 text-sm font-semibold text-foreground/80">
                                        <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center">
                                            <Check className="text-emerald-500" size={14} />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button
                                size="lg"
                                className={`w-full h-16 rounded-2xl font-extrabold text-lg transition-all ${plan.highlight
                                        ? "bg-primary text-white hover:bg-primary/90 shadow-xl shadow-primary/20"
                                        : "bg-foreground text-white hover:bg-foreground/90"
                                    }`}
                            >
                                {plan.cta}
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Pricing FAQ or Note */}
            <section className="container mx-auto px-4 text-center">
                <p className="text-muted-foreground font-medium flex items-center justify-center gap-2">
                    All plans come with a 14-day money-back guarantee. <ArrowRight size={16} />
                </p>
            </section>
        </div>
    );
}
