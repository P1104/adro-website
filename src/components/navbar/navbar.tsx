"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    Home,
    Zap,
    Layout,
    Globe,
    Tag,
    Mail,
    Menu,
    X,
    LucideIcon
} from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface NavItem {
    name: string;
    url: string;
    icon: LucideIcon;
}

const navItems: NavItem[] = [
    { name: "Home", url: "/", icon: Home },
    { name: "Features", url: "/features", icon: Layout },
    { name: "Solutions", url: "/solutions", icon: Globe },
    { name: "Pricing", url: "/pricing", icon: Tag },
    { name: "Contact", url: "/contact", icon: Mail },
];

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    }, [isMobileMenuOpen]);

    return (
        <>
            {/* Desktop Navbar */}
            <div className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 z-50">
                <div className="flex items-center gap-2 bg-white/70 border border-border backdrop-blur-xl py-2 px-3 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
                    <Link href="/" className="flex items-center gap-2 px-4 mr-2 border-r border-border/50">
                        <Zap className="text-primary fill-primary" size={20} />
                        <span className="font-bold text-lg tracking-tight">ADRO</span>
                    </Link>
                    {navItems.map((item) => {
                        const isActive = pathname === item.url || (item.url !== "/" && pathname.startsWith(item.url));

                        return (
                            <Link
                                key={item.name}
                                href={item.url}
                                className={cn(
                                    "relative cursor-pointer text-sm font-semibold px-5 py-2 rounded-full transition-all duration-300",
                                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                <span className="relative z-10">{item.name}</span>

                                {isActive && (
                                    <motion.div
                                        layoutId="active-pill"
                                        className="absolute inset-0 bg-primary/5 rounded-full"
                                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                    >
                                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-primary rounded-full blur-[1px]" />
                                    </motion.div>
                                )}
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden fixed top-4 right-4 z-50">
                <button
                    onClick={() => setIsMobileMenuOpen(true)}
                    className="p-3 bg-white/90 backdrop-blur-md border border-border rounded-full shadow-lg hover:bg-white transition-all active:scale-95"
                    aria-label="Open menu"
                >
                    <Menu className="w-5 h-5 text-foreground" />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[60] bg-background flex flex-col p-8 md:hidden"
                    >
                        <div className="flex justify-between items-center mb-12">
                            <div className="flex items-center gap-2">
                                <Zap className="text-primary fill-primary" size={24} />
                                <span className="font-bold text-2xl tracking-tight">ADRO</span>
                            </div>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 bg-muted rounded-full hover:bg-muted/80 transition-colors"
                                aria-label="Close menu"
                            >
                                <X className="w-6 h-6 text-foreground" />
                            </button>
                        </div>

                        <nav className="flex flex-col gap-4">
                            {navItems.map((item, index) => {
                                const isActive = pathname === item.url || (item.url !== "/" && pathname.startsWith(item.url));

                                return (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            href={item.url}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={cn(
                                                "flex items-center gap-4 py-4 px-6 rounded-2xl text-2xl font-bold transition-all",
                                                isActive ? "bg-primary/10 text-primary shadow-sm" : "hover:bg-muted text-muted-foreground"
                                            )}
                                        >
                                            <item.icon className="w-6 h-6" />
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </nav>

                        <div className="mt-auto pt-8 border-t border-border/50 text-center">
                            <p className="text-sm text-muted-foreground">© 2026 ADRO Intelligence</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
