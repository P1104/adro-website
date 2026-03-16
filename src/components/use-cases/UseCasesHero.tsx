import { Variants, motion } from "framer-motion";
import { Rocket } from "lucide-react";

export const UseCasesHero = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { 
                duration: 0.5, 
                ease: [0.33, 1, 0.68, 1] // Equivalent to circOut
            },
        },
    };

    return (
        <section className="relative pt-24 pb-12 overflow-hidden bg-white border-b border-black/5">
            {/* Subtle structural lines */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/5 to-transparent" />
            <div className="absolute left-1/4 top-0 bottom-0 w-px bg-black/[0.02]" />
            <div className="absolute right-1/4 top-0 bottom-0 w-px bg-black/[0.02]" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-4xl mx-auto text-center"
                >
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/10 text-black text-[10px] font-black tracking-[0.2em] uppercase mb-8 shadow-sm"
                    >
                        <Rocket size={12} className="text-black" />
                        Solutions in Action
                    </motion.div>

                    <motion.h1 
                        variants={itemVariants}
                        className="text-4xl md:text-7xl font-black text-black mb-6 tracking-tighter leading-[0.95]"
                    >
                        Real-World Use Cases <br />
                        <span className="text-black/30">Built for ADRO</span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-black/50 max-w-2xl mx-auto font-medium leading-relaxed"
                    >
                        Organizations use ADRO to transform raw data into instant business intelligence. 
                        Explore how different teams unlock insights with AI.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};
