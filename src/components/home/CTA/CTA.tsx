"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const CTA = () => (
  <div className="py-24 bg-white">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto rounded-[3rem] bg-white border border-gray-100 p-12 md:p-20 text-center relative overflow-hidden shadow-sm"
      >


        <div className="relative z-10">
          <h2 className="text-3xl md:text-6xl font-black text-black tracking-tighter mb-8">
            Start Exploring Your Data Today
          </h2>
          <p className="text-xl text-gray-500 font-medium mb-12 max-w-2xl mx-auto">
            Upload your dataset and discover insights instantly with ADRO’s AI-powered analytics platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-16 px-10 bg-black text-white font-black text-lg hover:bg-gray-800 rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95">
              <Link href="/downloads">Get ADRO</Link>
            </Button>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            {["Talk to your data", "Discover insights", "Make better decisions"].map((text, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-400 font-bold uppercase tracking-widest text-[10px]">
                <CheckCircle2 size={14} className="text-gray-300" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);
