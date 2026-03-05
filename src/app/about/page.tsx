"use client";

import { motion } from "framer-motion";
import { Zap, Target, Users, Globe } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="pt-32 pb-24">
            {/* About Hero */}
            <section className="container mx-auto px-4 mb-32">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6"
                    >
                        About ADRO
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-extrabold text-foreground mb-8 tracking-tight"
                    >
                        We Bridge the Gap Between <span className="text-primary">Data and Decisions</span>.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted-foreground font-medium leading-relaxed"
                    >
                        ADRO was founded with a simple mission: to make data intelligence accessible to everyone.
                        No more complex BI tools, no more manual spreadsheets. Just pure intelligence at your fingertips.
                    </motion.p>
                </div>
            </section>

            {/* Values */}
            <section className="bg-muted/30 py-24 mb-32 border-y border-border">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            {
                                title: "Our Mission",
                                desc: "To empower organizations with AI-driven insights that drive growth and innovation.",
                                icon: Target
                            },
                            {
                                title: "Our Vision",
                                desc: "To be the global standard for how humans interact with and understand complex data.",
                                icon: Globe
                            },
                            {
                                title: "Our People",
                                desc: "A diverse team of data scientists, engineers, and designers obsessed with simplicity.",
                                icon: Users
                            }
                        ].map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-10 rounded-[2rem] border border-border shadow-sm hover:shadow-xl transition-all"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                                    <value.icon className="text-primary" size={28} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                                <p className="text-muted-foreground font-medium leading-relaxed">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    <div className="flex-1">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">The ADRO Story</h2>
                        <div className="space-y-6 text-lg text-muted-foreground font-medium leading-relaxed">
                            <p>
                                In 2024, we noticed a problem. Companies were collecting more data than ever, but they were
                                struggling to make sense of it. The existing tools were too complex for most users,
                                requiring specialized knowledge that many teams didn&apos;t have.
                            </p>
                            <p>
                                We decided to build something different. A platform that uses the power of Large Language Models
                                to act as a bridge. A tool that doesn&apos;t just show you numbers, but tells you what they mean.
                            </p>
                            <p>
                                Today, ADRO helps hundreds of teams move faster, decide smarter, and understand their business
                                like never before. We&apos;re just getting started.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 relative">
                        <div className="bg-primary/5 rounded-[3rem] p-4 border border-primary/10">
                            <div className="bg-white rounded-[2.5rem] p-12 shadow-2xl shadow-primary/10 border border-border relative overflow-hidden aspect-square flex items-center justify-center">
                                <Zap className="text-primary w-40 h-40 fill-primary/10" />
                                <div className="absolute top-10 right-10 text-6xl font-black text-primary/5">2026</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
