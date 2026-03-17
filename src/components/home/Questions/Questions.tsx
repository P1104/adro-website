"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Database } from "lucide-react";
import { SectionTitle } from "../SectionTitle";

const SAMPLE_QUESTIONS = [
  "Show me revenue trends by product category for Q3",
  "What's the distribution of customer age groups?",
  "Compare marketing spend vs sales growth this month",
  "Identify the top 5 performing regions by profit margin",
  "Analyze customer churn rate across tiers"
];

export const Questions = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SAMPLE_QUESTIONS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col items-center">
          <SectionTitle title="Ask Questions. Get Instant Insights" />
          <p className="text-xs text-gray-300 font-medium mb-12 text-center max-w-4xl leading-relaxed">
            ADRO analyzes your dataset and instantly generates charts, dashboards, and insights based on your natural language queries.
          </p>

          {/* Minimalist Command Bar with Vertical Rotation */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full flex items-center gap-4 px-6 py-4 bg-white border border-gray-200 rounded-2xl shadow-sm mb-12 transition-all h-[72px] overflow-hidden"
          >
            <MessageSquare size={18} className="text-gray-400 flex-shrink-0" />

            <div className="flex-1 relative h-7 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="text-lg font-medium text-gray-400 absolute inset-0 whitespace-nowrap"
                >
                  "{SAMPLE_QUESTIONS[index]}"
                </motion.span>
              </AnimatePresence>
            </div>

            <div className="h-4 w-px bg-gray-200 flex-shrink-0" />
            {/* <span className="text-sm font-black text-gray-900 uppercase tracking-widest px-2 cursor-pointer flex-shrink-0">
              Analyze
            </span> */}
          </motion.div>

          {/* Minimalist Insight Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full bg-gray-50/50 border border-gray-100 rounded-3xl p-8 md:p-10 relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center">
                  <Database size={14} className="text-white" />
                </div>
                <p className="text-[10px] text-black uppercase tracking-widest">Insight Engine</p>
              </div>
              {/* <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest border border-gray-200 px-3 py-1 rounded-full">
                Processed in 0.4s
              </div> */}
            </div>

            <div className="grid md:grid-cols-[1.5fr,1fr] gap-12 items-center">
              <div className="text-left space-y-4">
                <h3 className="text-xl font-black text-gray-900 leading-tight">Revenue Analysis Summary</h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  Your revenue increased by <span className="text-black font-black">24%</span> in Q3. The growth was primarily driven by the <span className="text-black font-black underline decoration-1">Enterprise segment</span> in North America, which outperformed expectations.
                </p>
                <div className="pt-4 flex gap-8">
                  {/* <div>
                    <div className="text-[10px] font-black text-gray-400 uppercase mb-1">Growth rate</div>
                    <div className="text-2xl font-black text-black">+24.8%</div>
                  </div> */}
                  {/* <div>
                    <div className="text-[10px] font-black text-gray-400 uppercase mb-1">Confidence</div>
                    <div className="text-2xl font-black text-black">99.2%</div>
                  </div> */}
                </div>
              </div>

              <div className="h-32 flex items-end gap-2 justify-center px-4">
                {[40, 70, 45, 90, 65].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className={`w-full rounded-t-lg ${i === 3 ? 'bg-black' : 'bg-gray-200'}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
