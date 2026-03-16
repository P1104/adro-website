"use client";

import { motion } from "framer-motion";
import { Zap, MessageSquare } from "lucide-react";
import { SectionTitle } from "../SectionTitle";

export const Approach = () => (
  <div className="py-24  border-y border-gray-100">
    <div className="container mx-auto px-4 max-w-4xl text-center">
      <SectionTitle title="The ADRO Approach" />
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-xl md:text-2xl text-gray-900 font-bold leading-relaxed mb-8 tracking-tight"
      >
        ADRO transforms data analysis. Upload your dataset and instantly uncover insights with AI-powered analytics.
      </motion.p>
      <div className="grid md:grid-cols-2 gap-8 text-left">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 bg-white rounded-3xl border border-gray-100"
        >
          <div className="text-black font-black mb-4 flex items-center gap-2">
            <Zap size={20} /> Intelligent Understanding
          </div>
          <p className="text-gray-500 font-medium">ADRO understands your data, analyzes patterns, and instantly generates insights and visualizations.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 bg-white rounded-3xl border border-gray-100"
        >
          <div className="text-black font-black mb-4 flex items-center gap-2">
            <MessageSquare size={20} /> Conversational Analytics
          </div>
          <p className="text-gray-500 font-medium">Data analytics becomes as simple as having a conversation with your dataset.</p>
        </motion.div>
      </div>
    </div>
  </div>
);
