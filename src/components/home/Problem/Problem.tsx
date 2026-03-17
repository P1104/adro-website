"use client";

import { motion } from "framer-motion";
import { Layout, Clock, Code, Database } from "lucide-react";
import { SectionTitle } from "../SectionTitle";

export const Problem = () => (
  <div className="py-24 bg-white">
    <div className="container mx-auto px-4 max-w-6xl">
      <SectionTitle title="Problems with Traditional Data Analytics Tools" />
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-1 mb-6 text-center text-gray-400 font-bold  text-sm"
      >
        Traditional BI tools were designed for manual dashboards — not AI-driven analytics.
      </motion.p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: Layout, title: "Complex BI tools", desc: "Steep learning curves like Power BI or Tableau." },
          { icon: Clock, title: "Time-consuming", desc: "Hours spent on manual dashboard creation." },
          { icon: Code, title: "Technical Barrier", desc: "Requires deep knowledge of SQL or complex formulas." },
          { icon: Database, title: "Manual Prep", desc: "Tedious data cleaning before any analysis can start." }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 bg-white rounded-3xl border border-gray-100 group transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 shadow-sm">
              <item.icon size={24} className="text-gray-900" />
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-3">{item.title}</h3>
            <p className="text-sm text-gray-500 font-medium leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-12 text-center text-gray-400 font-bold uppercase tracking-widest text-xs"
      >
        For many teams, this makes data analysis slow, complex, and difficult to scale.
      </motion.p>
    </div>
  </div>
);
