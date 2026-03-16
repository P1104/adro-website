"use client";

import { motion } from "framer-motion";
import { DownloadCloud } from "lucide-react";

type OSType = "windows" | "macos" | "linux";

export const DownloadsHero = ({ os }: { os: OSType }) => {

    const gradients = {
        windows: "from-blue-500 to-blue-700",
        macos: "from-gray-300 via-gray-400 to-gray-500",
        linux: "from-orange-400 to-orange-600",
    };

    const glow = {
        windows: "bg-blue-500/10",
        macos: "bg-gray-400/10",
        linux: "bg-orange-500/10",
    };

    return (
        <section className="relative pt-20 pb-16 overflow-hidden">
            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto"
                >

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        <DownloadCloud size={16} />
                        Get Adro Desktop
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
                        Take the power of AI <br className="hidden md:block" />

                        <span
                            className={`text-transparent bg-clip-text bg-gradient-to-r transition-all duration-500 ${gradients[os]}`}
                        >
                            to your desktop.
                        </span>

                    </h1>

                    {/* Description */}
                    <p className="text-lg text-muted-foreground mb-8">
                        Experience native performance, offline capabilities, and seamless integration with your local file system. Download the right version for your operating system below.
                    </p>

                </motion.div>
            </div>

            {/* Background Glow */}
            <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] blur-3xl rounded-full -z-10 pointer-events-none transition-all duration-500 ${glow[os]}`}
            />
        </section>
    );
};