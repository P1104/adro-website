"use client";

import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText, Gamepad2, AlertTriangle, UserCheck, GraduationCap, Zap,
  Box, Truck, ShieldCheck, Activity, HeartPulse, Shield, Thermometer,
  Maximize2, CloudDownload, TrendingUp, Target, DollarSign, Users, Briefcase
} from "lucide-react";
import dynamic from "next/dynamic";
import { useMemo, useState, useEffect } from "react";

const ReactECharts = dynamic(() => import("echarts-for-react"), { ssr: false });

const datasets = [
  {
    id: "gaming",
    topic: "Gaming Addiction Survey",
    summaries: [
      { title: "Total Survey Responses", value: "100", subtitle: "Total number of respondents", icon: "📊", colorClass: "bg-blue-500", textClass: "text-blue-600 bg-blue-50" },
      { title: "Income Data Available", value: "67", subtitle: "Respondents who provided income information", icon: "💰", colorClass: "bg-red-500", textClass: "text-red-500 bg-red-50" },
      { title: "Most Common Income Range", value: "₹70K - ₹2.7L", subtitle: "Highest frequency income bracket", icon: "🏦", colorClass: "bg-red-500", textClass: "text-red-500 bg-red-50" },
      { title: "High Income Earners", value: "14", subtitle: "Earning more than ₹8,45,000", icon: "💎", colorClass: "bg-red-500", textClass: "text-red-500 bg-red-50" },
      { title: "Avg Age", value: "11", subtitle: "Most common age group", icon: "🎓", colorClass: "bg-purple-500", textClass: "text-purple-600 bg-purple-50" }
    ],
    charts: [
      { id: "g1", title: "Online Gaming Distribution", type: "pie", labels: ["Yes", "No", "Sometimes"], data: [45, 20, 35], colors: ["#ef4444", "#2dd4bf", "#facc15"] },
      { id: "g2", title: "Gaming Addiction Fear", type: "bar", labels: ["High", "Medium", "Low"], data: [38, 25, 4], colors: ["#ef4444", "#f59e0b", "#22c55e"] },
      { id: "g3", title: "Demographics by Gender", type: "donut", labels: ["Female", "Male"], data: [64, 36], colors: ["#f472b6", "#60a5fa"] },
      { id: "g4", title: "Kids Age Group Distribution", type: "area", labels: ["6-12", "18+", "13-17", "4-5", "0-3"], data: [25, 23, 10, 8, 1], color: "#8b5cf6" },
      { id: "g5", title: "Income Level Distribution", type: "pie2", labels: ["<₹70K", "₹70K-2.7L", "₹2.7L-8.45L", ">₹8.45L"], data: [30, 25, 15, 30], colors: ["#475569", "#6ee7b7", "#2dd4bf", "#6366f1"] },
      { id: "g6", title: "Top Cities by Response", type: "hbar", labels: ["Pune", "Chennai", "Hyd", "Mumbai", "Delhi", "Blr", "Kolkata", "Other"], data: [1, 2, 3, 5, 6, 14, 17, 19] }
    ]
  },
  {
    id: "sales",
    topic: "B2B Sales Revenue",
    summaries: [
      { title: "Quarterly Revenue", value: "$4.2M", subtitle: "Total closed won revenue", icon: "💵", colorClass: "bg-emerald-500", textClass: "text-emerald-600 bg-emerald-50" },
      { title: "Active Opportunities", value: "342", subtitle: "Deals in negotiation phase", icon: "🎯", colorClass: "bg-blue-500", textClass: "text-blue-600 bg-blue-50" },
      { title: "Win Rate", value: "68%", subtitle: "Average conversion this quarter", icon: "📈", colorClass: "bg-indigo-500", textClass: "text-indigo-600 bg-indigo-50" },
      { title: "Avg Deal Size", value: "$45K", subtitle: "Average ACV across all segments", icon: "💼", colorClass: "bg-purple-500", textClass: "text-purple-600 bg-purple-50" },
      { title: "New Leads", value: "1,204", subtitle: "Inbound leads generated this week", icon: "👥", colorClass: "bg-orange-500", textClass: "text-orange-600 bg-orange-50" }
    ],
    charts: [
      { id: "s1", title: "Revenue by Region", type: "pie", labels: ["North America", "EMEA", "APAC", "LATAM"], data: [45, 30, 15, 10], colors: ["#3b82f6", "#8b5cf6", "#ec4899", "#f59e0b"] },
      { id: "s2", title: "Quarterly Pipeline Growth", type: "bar", labels: ["Q1", "Q2", "Q3", "Q4"], data: [2.1, 3.4, 4.2, 5.8], colors: ["#10b981", "#3b82f6", "#8b5cf6", "#f43f5e"] },
      { id: "s3", title: "Deal Sources", type: "donut", labels: ["Inbound", "Outbound", "Partners", "Referral"], data: [40, 35, 15, 10], colors: ["#0ea5e9", "#f59e0b", "#10b981", "#8b5cf6"] },
      { id: "s4", title: "Monthly Revenue Trend", type: "area", labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], data: [1.2, 1.5, 1.8, 2.4, 3.1, 4.2], color: "#10b981" },
      { id: "s5", title: "Product Category Revenue", type: "pie2", labels: ["Enterprise", "Professional", "Starter", "Add-ons"], data: [55, 25, 10, 10], colors: ["#4f46e5", "#0ea5e9", "#f59e0b", "#ec4899"] },
      { id: "s6", title: "Top Performing Reps", type: "hbar", labels: ["Sarah J.", "Mike T.", "David L.", "Emma W.", "Chris B.", "Alex K."], data: [1.2, 1.0, 0.8, 0.7, 0.5, 0.4] }
    ]
  },
  {
    id: "ecommerce",
    topic: "E-Commerce Logistics",
    summaries: [
      { title: "Orders", value: "12,840", subtitle: "Orders processed today", icon: "📦", colorClass: "bg-orange-500", textClass: "text-orange-600 bg-orange-50" },
      { title: "On-Time", value: "94.2%", subtitle: "Delivery success rate", icon: "🚚", colorClass: "bg-emerald-500", textClass: "text-emerald-600 bg-emerald-50" },
      { title: "Delayed", value: "5.8%", subtitle: "Delayed shipments", icon: "⏳", colorClass: "bg-red-500", textClass: "text-red-500 bg-red-50" },
      { title: "Prime", value: "72%", subtitle: "Premium subscribers", icon: "👑", colorClass: "bg-indigo-500", textClass: "text-indigo-600 bg-indigo-50" },
      { title: "Avg Time", value: "2.4h", subtitle: "Processing time per order", icon: "⚡", colorClass: "bg-cyan-500", textClass: "text-cyan-600 bg-cyan-50" }
    ],
    charts: [
      { id: "e1", title: "Shipping Status", type: "pie", labels: ["Delivered", "In Transit", "Processing"], data: [75, 15, 10], colors: ["#22c55e", "#f59e0b", "#3b82f6"] },
      { id: "e2", title: "Delay Reasons", type: "bar", labels: ["Weather", "Traffic", "Warehouse"], data: [45, 30, 25], colors: ["#3b82f6", "#ef4444", "#f97316"] },
      { id: "e3", title: "Customer Type", type: "donut", labels: ["Prime", "Standard"], data: [72, 28], colors: ["#6366f1", "#94a3b8"] },
      { id: "e4", title: "Orders per Hour", type: "area", labels: ["8AM", "12PM", "4PM", "8PM", "12AM"], data: [120, 350, 800, 600, 450], color: "#0ea5e9" },
      { id: "e5", title: "Box Sizes Used", type: "pie2", labels: ["Small", "Med", "Large", "XL"], data: [40, 35, 15, 10], colors: ["#e2e8f0", "#94a3b8", "#64748b", "#334155"] },
      { id: "e6", title: "Top Warehouses", type: "hbar", labels: ["WH-8", "WH-7", "WH-6", "WH-5", "WH-4", "WH-3", "WH-2", "WH-1"], data: [15, 25, 40, 50, 75, 90, 120, 150] }
    ]
  },
  {
    id: "healthcare",
    topic: "Healthcare Patient Monitoring",
    summaries: [
      { title: "Patients", value: "1,204", subtitle: "Active patients currently", icon: "🏥", colorClass: "bg-rose-500", textClass: "text-rose-600 bg-rose-50" },
      { title: "Stable", value: "88%", subtitle: "Patients in stable condition", icon: "✅", colorClass: "bg-emerald-500", textClass: "text-emerald-600 bg-emerald-50" },
      { title: "Critical", value: "12%", subtitle: "ICU / Critical care", icon: "🚨", colorClass: "bg-red-500", textClass: "text-red-500 bg-red-50" },
      { title: "Admissions", value: "45", subtitle: "Admitted today", icon: "📈", colorClass: "bg-blue-500", textClass: "text-blue-600 bg-blue-50" },
      { title: "Avg Temp", value: "98.6°", subtitle: "Average baseline normal", icon: "🌡️", colorClass: "bg-yellow-500", textClass: "text-yellow-600 bg-yellow-50" }
    ],
    charts: [
      { id: "h1", title: "Patient Condition Grid", type: "pie", labels: ["Stable", "Fair", "Critical"], data: [65, 23, 12], colors: ["#22c55e", "#facc15", "#ef4444"] },
      { id: "h2", title: "Age Demographics", type: "bar", labels: ["0-18", "19-40", "41-65", "65+"], data: [10, 25, 40, 25], colors: ["#38bdf8", "#818cf8", "#c084fc", "#f472b6"] },
      { id: "h3", title: "Gender Layout", type: "donut", labels: ["Female", "Male"], data: [52, 48], colors: ["#ec4899", "#3b82f6"] },
      { id: "h4", title: "Hourly Admissions", type: "area", labels: ["6AM", "10AM", "2PM", "6PM", "10PM"], data: [5, 12, 18, 8, 2], color: "#ef4444" },
      { id: "h5", title: "Ward Utilization", type: "pie2", labels: ["ICU", "General", "Maternity", "ER"], data: [20, 45, 15, 20], colors: ["#ef4444", "#3b82f6", "#ec4899", "#f59e0b"] },
      { id: "h6", title: "Top Diagnoses", type: "hbar", labels: ["Flu", "Fracture", "Cardiac", "Asthma", "Diabetes", "Stroke", "Cancer", "Other"], data: [150, 120, 90, 80, 75, 40, 30, 20] }
    ]
  },
  {
    id: "sales",
    topic: "B2B Sales Pipeline Analytics",
    summaries: [
      { title: "Quarterly Revenue", value: "$4.2M", subtitle: "Total closed won revenue", icon: "💵", colorClass: "bg-emerald-500", textClass: "text-emerald-600 bg-emerald-50" },
      { title: "Active Opportunities", value: "342", subtitle: "Deals in negotiation phase", icon: "🎯", colorClass: "bg-blue-500", textClass: "text-blue-600 bg-blue-50" },
      { title: "Win Rate", value: "68%", subtitle: "Average conversion this quarter", icon: "📈", colorClass: "bg-indigo-500", textClass: "text-indigo-600 bg-indigo-50" },
      { title: "Avg Deal Size", value: "$45K", subtitle: "Average ACV across all segments", icon: "💼", colorClass: "bg-purple-500", textClass: "text-purple-600 bg-purple-50" },
      { title: "New Leads", value: "1,204", subtitle: "Inbound leads generated this week", icon: "👥", colorClass: "bg-orange-500", textClass: "text-orange-600 bg-orange-50" }
    ],
    charts: [
      { id: "s1", title: "Revenue by Region", type: "pie", labels: ["North America", "EMEA", "APAC", "LATAM"], data: [45, 30, 15, 10], colors: ["#3b82f6", "#8b5cf6", "#ec4899", "#f59e0b"] },
      { id: "s2", title: "Quarterly Pipeline Growth", type: "bar", labels: ["Q1", "Q2", "Q3", "Q4"], data: [2.1, 3.4, 4.2, 5.8], colors: ["#10b981", "#3b82f6", "#8b5cf6", "#f43f5e"] },
      { id: "s3", title: "Deal Sources", type: "donut", labels: ["Inbound", "Outbound", "Partners", "Referral"], data: [40, 35, 15, 10], colors: ["#0ea5e9", "#f59e0b", "#10b981", "#8b5cf6"] },
      { id: "s4", title: "Monthly Revenue Trend", type: "area", labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], data: [1.2, 1.5, 1.8, 2.4, 3.1, 4.2], color: "#10b981" },
      { id: "s5", title: "Product Category Revenue", type: "pie2", labels: ["Enterprise", "Professional", "Starter", "Add-ons"], data: [55, 25, 10, 10], colors: ["#4f46e5", "#0ea5e9", "#f59e0b", "#ec4899"] },
      { id: "s6", title: "Top Performing Reps", type: "hbar", labels: ["Sarah J.", "Mike T.", "David L.", "Emma W.", "Chris B.", "Alex K."], data: [1.2, 1.0, 0.8, 0.7, 0.5, 0.4] }
    ]
  }
];

const getChartOptions = (chart: any) => {
  const { type, labels, data, colors, color } = chart;

  if (type === "pie" || type === "donut" || type === "pie2") {
    return {
      animationDuration: 1200,
      animationEasing: "cubicOut",
      tooltip: { trigger: "item", backgroundColor: 'rgba(255, 255, 255, 0.9)', textStyle: { color: '#333' } },
      legend: { bottom: 0, itemWidth: 8, itemHeight: 8, textStyle: { fontSize: 11, color: '#666' }, icon: 'circle' },
      series: [{
        type: "pie",
        radius: type === "donut" ? ["45%", "65%"] : ["35%", "65%"],
        center: ['50%', '42%'],
        itemStyle: { borderRadius: type === "donut" ? 8 : 4, borderColor: '#fff', borderWidth: 2 },
        label: { show: false },
        data: data.map((v: number, i: number) => ({
          value: v,
          name: labels[i],
          itemStyle: { color: colors?.[i % colors.length] || "#8b5cf6" }
        })),
      }],
    };
  }

  if (type === "bar") {
    return {
      animationDuration: 1200,
      animationEasing: "cubicOut",
      tooltip: { trigger: "axis", axisPointer: { type: "shadow" }, backgroundColor: 'rgba(255, 255, 255, 0.9)', textStyle: { color: '#333' } },
      grid: { top: 15, right: 15, bottom: 20, left: 10, containLabel: true },
      xAxis: {
        type: "category",
        data: labels,
        axisLabel: { interval: 0, fontSize: 11, color: '#666' },
        axisLine: { show: false },
        axisTick: { show: false },
      },
      yAxis: {
        type: "value",
        splitLine: { lineStyle: { color: "#f3f4f6", type: 'dashed' } },
        axisLabel: { fontSize: 11, color: '#9ca3af' },
      },
      series: [{
        data: data.map((v: number, i: number) => ({
          value: v,
          itemStyle: { color: colors?.[i % colors.length] || "#8b5cf6" }
        })),
        type: "bar",
        barWidth: "45%",
        itemStyle: { borderRadius: [6, 6, 0, 0] },
      }],
    };
  }

  if (type === "area") {
    return {
      animationDuration: 1200,
      animationEasing: "cubicOut",
      tooltip: { trigger: "axis", backgroundColor: 'rgba(255, 255, 255, 0.9)', textStyle: { color: '#333' } },
      grid: { top: 15, right: 15, bottom: 20, left: 10, containLabel: true },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: labels,
        axisLabel: { interval: 0, fontSize: 11, color: '#666' },
        axisLine: { lineStyle: { color: "#e5e7eb" } },
        axisTick: { show: false },
      },
      yAxis: {
        type: "value",
        splitLine: { lineStyle: { color: "#f3f4f6", type: 'dashed' } },
        axisLabel: { fontSize: 11, color: '#9ca3af' },
      },
      series: [{
        data: data,
        type: "line",
        smooth: 0.4,
        symbol: "circle",
        symbolSize: 8,
        itemStyle: { color: color || "#8b5cf6", borderColor: '#fff', borderWidth: 2 },
        lineStyle: { width: 3 },
        areaStyle: {
          color: {
            type: "linear", x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: "rgba(139,92,246,0.3)" },
              { offset: 1, color: "rgba(139,92,246,0)" },
            ],
          },
        },
      }],
    };
  }

  if (type === "hbar") {
    return {
      animationDuration: 1200,
      animationEasing: "cubicOut",
      tooltip: { trigger: "axis", axisPointer: { type: "shadow" }, backgroundColor: 'rgba(255, 255, 255, 0.9)', textStyle: { color: '#333' } },
      grid: { top: 5, right: 30, bottom: 15, left: 10, containLabel: true },
      xAxis: {
        type: "value",
        splitLine: { lineStyle: { color: "#f3f4f6", type: 'dashed' } },
        axisLabel: { fontSize: 11, color: '#9ca3af' },
      },
      yAxis: {
        type: "category",
        data: labels,
        axisLabel: { fontSize: 11, color: '#666' },
        axisLine: { show: false },
        axisTick: { show: false },
      },
      series: [{
        type: "bar",
        barWidth: "60%",
        itemStyle: {
          borderRadius: [0, 4, 4, 0],
          color: (params: any) => {
            const hcolors = ["#f87171", "#fb923c", "#fbbf24", "#f43f5e", "#f59e0b", "#0ea5e9", "#2dd4bf", "#f472b6"];
            return hcolors[params.dataIndex % hcolors.length];
          },
        },
        data: data,
      }],
    };
  }

  return {};
};

const SummaryCard = ({ title, value, subtitle, icon, colorClass }: any) => {
  return (
    <div className="bg-white/40 backdrop-blur-md rounded-[20px] border border-white/60 p-4 flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all h-[110px]">
      <div className="flex items-start justify-between mb-3 relative z-10 gap-2">
        <span className="text-[11px] font-bold text-gray-600 leading-tight truncate px-0">{title}</span>
        <div className="flex-shrink-0 flex items-center justify-center w-[24px] h-[24px] bg-[#f8f9fa] border border-[#e5e7eb] rounded-md shadow-sm text-sm">
          {icon}
        </div>
      </div>
      <div className="relative z-10 flex flex-col justify-end">
        <div className="text-[26px] font-black text-gray-900 leading-none mb-1.5 tabular-nums tracking-tight">
          {value}
        </div>
        <div className="text-[10px] text-gray-500 font-medium leading-tight max-w-[95%]">{subtitle}</div>
      </div>
    </div>
  );
};

const itemVariants = {
  hidden: { scale: 0.1, x: 0, y: 0, filter: "blur(20px)", opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    x: 0,
    y: 0,
    filter: "blur(0px)",
    opacity: 1,
    transition: {
      type: "spring" as any,
      stiffness: 150,
      damping: 15,
      delay: i * 0.05
    }
  }),
  exit: (i: number) => ({
    scale: 0.1,
    filter: "blur(20px)",
    opacity: 0,
    transition: { duration: 0.5, ease: "backIn" as any, delay: i * 0.03 }
  })
};

export const Hero = () => {
  const [activeSetIndex, setActiveSetIndex] = useState(0);

  useEffect(() => {
    // Cycles the dataset completely every 10 seconds to make it look truly real-time
    const interval = setInterval(() => {
      setActiveSetIndex((prev) => (prev + 1) % datasets.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const activeDataset = datasets[activeSetIndex];

  return (
    <section className="relative pt-28 pb-16 overflow-hidden min-h-[85vh] flex items-center bg-[#fafafa]">
      {/* Dynamic Background Blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-indigo-500/[0.04] blur-[100px] rounded-full"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], x: [0, -40, 0], y: [0, 60, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-emerald-500/[0.03] blur-[100px] rounded-full"
      />

      <div className="container mx-auto px-4 relative z-10 w-full max-w-7xl">
        <div className="flex flex-col items-center text-center mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm text-gray-700 text-[10px] font-black tracking-widest uppercase mb-6">
              <Zap size={12} className="text-indigo-600 animate-pulse" />
              Automated Data Intelligence Platform
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-gray-900 mb-6 leading-[1.1]">
              ADRO – Ask Your Data Anything.
            </h1>
            <p className="text-base md:text-lg text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
              ADRO is an AI data analytics platform that converts raw datasets into meaningful insights and interactive dashboards. Upload Excel or CSV files, let AI automatically clean and analyze your data.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button
                size="lg"
                className="h-14 px-8 bg-gray-900 text-white font-black text-[15px] hover:bg-gray-800 transition-all rounded-2xl shadow-[0_8px_20px_-8px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.4)]"
              >
                Start Exploring Data
              </Button>
            </div>
          </motion.div>

          {/* Dashboard Section (MacOS styled glass) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
            className="w-full relative"
          >
            {/* The Glass Container */}
            <div className="bg-white/30 backdrop-blur-2xl rounded-2xl border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] overflow-hidden relative">

              {/* Subtle inner highlight to emulate 3D glass edge */}
              <div className="absolute inset-0 rounded-2xl border border-white/80 pointer-events-none" />

              {/* MacOS Header */}
              <div className="bg-white/40 backdrop-blur-md border-b border-white/50 px-4 py-3 flex items-center justify-between relative z-10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  {activeDataset.topic} - Live
                </div>
                <div className="w-[52px]" /> {/* Spacer for strict centering */}
              </div>

              <div className="p-4 md:p-8">
                {/* Top Summary Cards with Animation */}
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-6 relative">
                  <AnimatePresence mode="popLayout">
                    {activeDataset.summaries.map((summary, idx) => (
                      <motion.div
                        key={`${activeDataset.id}-sum-${idx}`}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        custom={idx}
                        className="col-span-1"
                        transition={{ delay: idx * 0.05 }}
                      >
                        <SummaryCard {...summary} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Charts Grid with Animation */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 relative">
                  <AnimatePresence mode="popLayout">
                    {activeDataset.charts.map((chart, idx) => (
                      <motion.div
                        key={`${activeDataset.id}-chart-${chart.id}`}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="bg-white/40 backdrop-blur-md rounded-[20px] border border-white/60 p-5 flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow relative overflow-hidden"
                        transition={{ delay: idx * 0.05 + 0.1 }}
                      >
                        <div className="flex items-center justify-between mb-2 relative z-10 w-full">
                          <span className="text-sm font-bold text-gray-800 truncate pr-2">{chart.title}</span>
                          <div className="flex items-center gap-1.5 flex-shrink-0">

                          </div>
                        </div>
                        <div style={{ height: "220px", position: "relative", width: "100%" }} className="z-10 mt-2">
                          <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}>
                            <ReactECharts
                              option={getChartOptions(chart)}
                              style={{ height: "100%", width: "100%" }}
                              opts={{ renderer: "svg" }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
