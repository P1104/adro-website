"use client";

import { motion } from "framer-motion";
import { TrendingUp, Activity, Maximize2, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Impact = () => (
  <div className="py-24 bg-white text-gray-900 border-y border-gray-100">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: TrendingUp, label: "Identify Trends Faster" },
              { icon: Activity, label: "Understand Performance" },
              { icon: Maximize2, label: "Explore Interactively" },
              { icon: Zap, label: "No Complexity" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 border border-gray-100 p-6 rounded-3xl"
              >
                <item.icon size={32} className="text-black mb-4" />
                <h3 className="font-black text-lg leading-tight">{item.label}</h3>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <Badge variant="outline" className="mb-6 text-black border-gray-200 uppercase tracking-[0.2em] font-black">Real Business Impact</Badge>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 text-gray-900">
            From Data to Decisions — Faster
          </h2>
          <div className="space-y-6 text-lg text-gray-500 font-medium leading-relaxed">
            <p>ADRO eliminates the traditional analytics workflow. Instead of spending hours building dashboards, users can explore insights instantly through natural language interaction.</p>
            <p>This allows teams to focus on decision making instead of data preparation, making data analytics accessible to both technical and non-technical users.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
