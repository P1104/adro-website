"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/60 backdrop-blur-xl"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-all">
              <div className="w-4 h-4 bg-primary rounded-sm shadow-[0_0_5px_#00E5FF]" />
            </div>
            <span className="text-xl font-bold tracking-tight text-grey-700">ADRO <span className="text-primary">Insights</span></span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link href="#features" className="hover:text-primary transition-colors">Features</Link>
            <Link href="#how-it-works" className="hover:text-primary transition-colors">Process</Link>
            <Link href="#use-cases" className="hover:text-primary transition-colors">Use Cases</Link>
            <Link href="#pricing" className="hover:text-primary transition-colors">Pricing</Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-grey-700 hover:text-primary hover:bg-primary/10">
            Sign In
          </Button>
          <Button className="bg-primary text-black font-semibold hover:bg-primary/90 shadow-[0_0_10px_rgba(0,229,255,0.3)] hover:shadow-[0_0_20px_rgba(0,229,255,0.5)] transition-all">
            Get Started
          </Button>
        </div>
      </div>
    </motion.header>
  );
};
