"use client";

import { motion } from "framer-motion";
import { Target, Globe, Users } from "lucide-react";

const values = [
    {
        title: "Intelligence First",
        desc: "We prioritize clarity and actionable insights over raw data volume. Every feature is built to bridge the distance between data and action.",
        icon: Target
    },
    {
        title: "Absolute Simplicity",
        desc: "Complexity is the enemy of progress. We believe the most powerful technology should feel invisible to the end user.",
        icon: Globe
    },
    {
        title: "Infinite Scale",
        desc: "Our platform is designed to grow with you. From single datasets to global enterprise networks, Adro scales without compromise.",
        icon: Users
    }
];

export const Values = () => {
    return (
        <section className="py-24 bg-black/[0.02]">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-12">
                    {values.map((value, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-10 rounded-[2.5rem] border border-black/5 hover:border-black/20 transition-all hover:shadow-2xl hover:shadow-black/5 group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-black/5 flex items-center justify-center mb-8 group-hover:bg-black group-hover:text-white transition-all duration-300">
                                <value.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 tracking-tight text-black">{value.title}</h3>
                            <p className="text-black/60 font-medium leading-relaxed">{value.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
