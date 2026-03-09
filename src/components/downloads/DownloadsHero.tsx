"use client";

import { motion } from "framer-motion";
import { DownloadCloud } from "lucide-react";

export const DownloadsHero = () => {
    return (
        <section className="relative pt-20 pb-16 overflow-hidden">
            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        <DownloadCloud size={16} />
                        Get Adro Desktop
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
                        Take the power of AI <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">to your desktop.</span>
                    </h1>

                    <p className="text-lg text-muted-foreground mb-8">
                        Experience native performance, offline capabilities, and seamless integration with your local file system. Download the right version for your operating system below.
                    </p>
                </motion.div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-3xl rounded-full -z-10 pointer-events-none" />
        </section>
    );
};

