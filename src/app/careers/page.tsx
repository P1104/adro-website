"use client";

import { motion } from "framer-motion";
import { Briefcase, Heart, Rocket, Coffee, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const positions = [
    {
        title: "Senior AI Engineer",
        department: "Engineering",
        location: "Remote / Bangalore",
        type: "Full-time"
    },
    {
        title: "Data Visualization Specialist",
        department: "Design",
        location: "Remote / Bangalore",
        type: "Full-time"
    },
    {
        title: "Product Manager (Data)",
        department: "Product",
        location: "Remote / Bangalore",
        type: "Full-time"
    },
    {
        title: "Backend Developer (Node.js)",
        department: "Engineering",
        location: "Remote / Bangalore",
        type: "Full-time"
    }
];

export default function CareersPage() {
    return (
        <div className="pt-32 pb-24">
            {/* Careers Hero */}
            <section className="container mx-auto px-4 mb-32 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6"
                >
                    Join Our Mission
                </motion.div>
                <h1 className="text-5xl md:text-7xl font-extrabold text-foreground mb-8 tracking-tight max-w-5xl mx-auto">
                    Help Us Build the <span className="text-primary">Future of Data</span>.
                </h1>
                <p className="text-xl text-muted-foreground font-medium leading-relaxed max-w-3xl mx-auto">
                    We&apos;re looking for curious, driven, and passionate individuals to help us simplify complexity and unlock intelligence worldwide.
                </p>
            </section>

            {/* Culture */}
            <section className="bg-muted/30 py-24 mb-32 border-y border-border">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Our Culture</h2>
                        <p className="text-muted-foreground font-medium">Why you&apos;ll love working at ADRO.</p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { title: "Impact First", icon: Rocket, desc: "Solve real problems that matter to businesses of all sizes." },
                            { title: "People Hard", icon: Heart, desc: "We support each other and celebrate our collective wins." },
                            { title: "Continuous Growth", icon: Coffee, desc: "Never stop learning with our generous education stipends." },
                            { title: "Work Anywhere", icon: Globe, desc: "We are a remote-first team spread across the globe." }
                        ].map((item, i) => (
                            <div key={i} className="text-center p-6">
                                <div className="w-16 h-16 rounded-2xl bg-white border border-border flex items-center justify-center mx-auto mb-6 shadow-sm">
                                    <item.icon className="text-primary" size={28} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-muted-foreground text-sm font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="container mx-auto px-4 mb-32">
                <div className="max-w-4xl mx-auto">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Open Positions</h2>
                            <p className="text-muted-foreground font-medium mt-2">Come and make an impact with us.</p>
                        </div>
                        <div className="hidden md:block">
                            <span className="text-sm font-bold text-primary uppercase tracking-widest">{positions.length} Openings</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {positions.map((pos, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group bg-white p-8 rounded-[2rem] border border-border hover:border-primary/50 hover:shadow-xl transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
                            >
                                <div>
                                    <h3 className="text-2xl font-extrabold text-foreground group-hover:text-primary transition-colors">{pos.title}</h3>
                                    <div className="flex flex-wrap gap-4 mt-3">
                                        <span className="text-sm font-bold bg-muted px-4 py-1.5 rounded-full text-muted-foreground">{pos.department}</span>
                                        <span className="text-sm font-bold bg-muted px-4 py-1.5 rounded-full text-muted-foreground">{pos.location}</span>
                                        <span className="text-sm font-bold bg-muted px-4 py-1.5 rounded-full text-muted-foreground">{pos.type}</span>
                                    </div>
                                </div>
                                <Button variant="ghost" className="group-hover:translate-x-2 transition-transform h-12 w-12 rounded-full border border-border flex items-center justify-center">
                                    <ArrowRight size={20} />
                                </Button>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-muted-foreground font-medium mb-6">Don&apos;t see a perfect fit? Send us your resume anyway!</p>
                        <Button size="lg" className="h-14 px-8 rounded-xl bg-foreground text-white font-bold text-lg hover:bg-foreground/90 transition-all">
                            General Application
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}

const Globe = ({ size, className }: { size: number, className: string }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
);
