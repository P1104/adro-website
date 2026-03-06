"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Database, Zap, Sparkles, Activity } from "lucide-react";
import dynamic from "next/dynamic";
import { useMemo } from "react";

const ReactECharts = dynamic(() => import("echarts-for-react"), { ssr: false });

// Line chart config
const useLineChartOption = () =>
  useMemo(
    () => ({
      animation: true,
      animationDuration: 2000,
      animationEasing: "cubicInOut" as const,
      grid: { top: 10, right: 10, bottom: 10, left: 10 },
      xAxis: {
        type: "category" as const,
        data: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        show: false,
      },
      yAxis: { type: "value" as const, show: false },
      series: [
        {
          data: [
            820, 932, 901, 1290, 1330, 1520, 1200, 1650, 1890, 2150, 2300, 2480,
          ],
          type: "line" as const,
          smooth: true,
          symbol: "circle",
          symbolSize: 6,
          lineStyle: { color: "#6366f1", width: 2.5 },
          itemStyle: { color: "#6366f1", borderWidth: 2, borderColor: "#fff" },
          areaStyle: {
            color: {
              type: "linear" as const,
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: "rgba(99,102,241,0.25)" },
                { offset: 1, color: "rgba(99,102,241,0)" },
              ],
            },
          },
        },
        {
          data: [
            620, 750, 810, 990, 1100, 1250, 1050, 1300, 1500, 1700, 1850, 2000,
          ],
          type: "line" as const,
          smooth: true,
          symbol: "none",
          lineStyle: { color: "#10b981", width: 1.5, type: "dashed" as const },
          areaStyle: {
            color: {
              type: "linear" as const,
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: "rgba(16,185,129,0.12)" },
                { offset: 1, color: "rgba(16,185,129,0)" },
              ],
            },
          },
        },
      ],
      tooltip: {
        trigger: "axis" as const,
        backgroundColor: "rgba(15,23,42,0.9)",
        borderColor: "rgba(99,102,241,0.3)",
        borderRadius: 8,
        textStyle: { color: "#fff", fontSize: 10, fontWeight: "bold" as const },
        formatter: (params: Array<{ value: number }>) =>
          `${(params[0].value / 1000).toFixed(1)}k records`,
      },
    }),
    [],
  );

// Bar chart config
const useBarChartOption = () =>
  useMemo(
    () => ({
      animation: true,
      animationDuration: 1500,
      animationDelay: (idx: number) => idx * 80,
      grid: { top: 5, right: 5, bottom: 5, left: 5 },
      xAxis: {
        type: "category" as const,
        data: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8"],
        show: false,
      },
      yAxis: { type: "value" as const, show: false },
      series: [
        {
          data: [
            { value: 40, itemStyle: { color: "#6366f1" } },
            { value: 65, itemStyle: { color: "#8b5cf6" } },
            { value: 45, itemStyle: { color: "#a78bfa" } },
            { value: 80, itemStyle: { color: "#10b981" } },
            { value: 55, itemStyle: { color: "#14b8a6" } },
            { value: 90, itemStyle: { color: "#f59e0b" } },
            { value: 70, itemStyle: { color: "#f97316" } },
            { value: 85, itemStyle: { color: "#ef4444" } },
          ],
          type: "bar" as const,
          barWidth: "60%",
          itemStyle: {
            borderRadius: [6, 6, 0, 0],
          },
          emphasis: {
            itemStyle: { shadowBlur: 8, shadowColor: "rgba(99,102,241,0.3)" },
          },
        },
      ],
      tooltip: {
        trigger: "axis" as const,
        backgroundColor: "rgba(15,23,42,0.9)",
        borderColor: "rgba(99,102,241,0.3)",
        borderRadius: 8,
        textStyle: { color: "#fff", fontSize: 10, fontWeight: "bold" as const },
      },
    }),
    [],
  );

// Pie chart config
const usePieChartOption = () =>
  useMemo(
    () => ({
      animation: true,
      animationDuration: 1800,
      animationEasing: "cubicInOut" as const,
      series: [
        {
          type: "pie" as const,
          radius: ["55%", "80%"],
          center: ["50%", "50%"],
          avoidLabelOverlap: false,
          label: { show: false },
          labelLine: { show: false },
          data: [
            { value: 45, name: "Cleaned", itemStyle: { color: "#10b981" } },
            { value: 25, name: "Pending", itemStyle: { color: "#6366f1" } },
            { value: 18, name: "Anomalies", itemStyle: { color: "#f59e0b" } },
            { value: 12, name: "Skipped", itemStyle: { color: "#f43f5e" } },
          ],
          emphasis: {
            itemStyle: { shadowBlur: 12, shadowColor: "rgba(99,102,241,0.25)" },
          },
        },
      ],
      tooltip: {
        backgroundColor: "rgba(15,23,42,0.9)",
        borderColor: "rgba(99,102,241,0.3)",
        borderRadius: 8,
        textStyle: { color: "#fff", fontSize: 10, fontWeight: "bold" as const },
        formatter: (params: { name: string; percent: number }) =>
          `${params.name}: ${params.percent}%`,
      },
    }),
    [],
  );

export const Hero = () => {
  const lineOption = useLineChartOption();
  const barOption = useBarChartOption();
  const pieOption = usePieChartOption();

  return (
    <section className="relative pt-28 pb-16 overflow-hidden min-h-[85vh] flex items-center bg-white">
      {/* Dynamic Background Blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-black/[0.03] blur-[100px] rounded-full"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], x: [0, -40, 0], y: [0, 60, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-black/[0.02] blur-[100px] rounded-full"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 text-black text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
              <Zap size={12} className="fill-black animate-pulse" />
              Automated Data Intelligence Platform
            </div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tighter text-black mb-6 leading-[1.1]">
              AI Analytics Made Private. <br />
              <motion.span
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-black/40"
              ></motion.span>
            </h1>
            <p className="text-base md:text-lg text-black/50 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
              A streamlined analytics platform that transforms raw datasets into
              interactive dashboards. Upload your data, automatically clean and
              analyze it, and generate charts or insights using natural language
              queries.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button
                size="lg"
                className="h-14 px-8 bg-black text-white font-black text-lg hover:bg-black/90 transition-all rounded-xl shadow-xl shadow-black/10"
              >
                Start Exploring Data
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 border-black/10 bg-white text-black hover:bg-black/5 transition-all font-bold text-base rounded-xl"
              >
                View Architecture
              </Button>
            </div>
          </motion.div>

          {/* Dashboard Card — Redesigned */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
            className="w-full max-w-4xl relative"
          >
            <div className="bg-white rounded-3xl border border-black/[0.06] p-5 md:p-7 flex flex-col gap-4 relative group shadow-[0_20px_80px_-20px_rgba(0,0,0,0.08)]">
              {/* Header Bar */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-black/[0.06] to-black/[0.02] flex items-center justify-center">
                    <Database size={16} className="text-black/50" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-black text-black/80 tracking-[0.08em] uppercase">
                      Adro Analytics
                    </div>
                    <div className="text-[8px] font-semibold text-black/25 mt-0.5">
                      Real-time Pipeline · 12 sources
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-100">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[8px] font-black text-emerald-600 tracking-wider uppercase">
                      Streaming
                    </span>
                  </div>
                  <div className="hidden sm:flex items-center gap-1">
                    <div className="w-3 h-3 rounded-md bg-black/[0.04]" />
                    <div className="w-3 h-3 rounded-md bg-black/[0.04]" />
                    <div className="w-3 h-3 rounded-md bg-black/[0.08]" />
                  </div>
                </div>
              </div>

              {/* Top Row: 3 Bento Cards */}
              <div className="grid grid-cols-12 gap-4">
                {/* Donut Pie Card */}
                <div className="col-span-4 bg-black/[0.02] rounded-2xl border border-black/[0.04] p-4 min-h-[150px] flex flex-col">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[8px] font-black text-black/25 tracking-widest uppercase">
                      Distribution
                    </span>
                    <Sparkles size={10} className="text-black/15" />
                  </div>
                  <div className="flex-1 min-h-[110px]">
                    <ReactECharts
                      option={pieOption}
                      style={{ height: "100%", width: "100%" }}
                      opts={{ renderer: "svg" }}
                    />
                  </div>
                </div>

                {/* Live Stats Card */}
                <div className="col-span-4 bg-black rounded-2xl p-5 min-h-[150px] flex flex-col justify-between shadow-lg shadow-black/5">
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] font-black text-white/30 tracking-[0.2em] uppercase">
                      Live Metrics
                    </span>
                    <motion.div
                      animate={{ opacity: [0.2, 1, 0.2] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                    />
                  </div>
                  <div className="space-y-3 mt-3">
                    <div>
                      <div className="text-xl font-black text-white leading-none tracking-tight">
                        2.4M
                      </div>
                      <div className="text-[8px] text-white/25 font-semibold mt-0.5">
                        rows processed
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div>
                        <div className="text-[11px] font-black text-white/70">
                          94%
                        </div>
                        <div className="text-[7px] text-white/20 font-semibold">
                          accuracy
                        </div>
                      </div>
                      <div>
                        <div className="text-[11px] font-black text-emerald-400">
                          1.2s
                        </div>
                        <div className="text-[7px] text-white/20 font-semibold">
                          latency
                        </div>
                      </div>
                      <div>
                        <div className="text-[11px] font-black text-white/70">
                          12
                        </div>
                        <div className="text-[7px] text-white/20 font-semibold">
                          sources
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bar Chart Card */}
                <div className="col-span-4 bg-black/[0.02] rounded-2xl border border-black/[0.04] p-4 min-h-[150px] flex flex-col">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[8px] font-black text-black/25 tracking-widest uppercase">
                      Performance
                    </span>
                    <span className="text-[7px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                      +18%
                    </span>
                  </div>
                  <div className="flex-1 min-h-[110px]">
                    <ReactECharts
                      option={barOption}
                      style={{ height: "100%", width: "100%" }}
                      opts={{ renderer: "svg" }}
                    />
                  </div>
                </div>
              </div>

              {/* Bottom: Full-width Line Chart */}
              <div className="bg-black/[0.02] rounded-2xl border border-black/[0.04] p-5 relative overflow-hidden">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] font-black text-black/30 tracking-widest uppercase">
                      Revenue Trend
                    </span>
                    <span className="text-[8px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                      +24.5% YoY
                    </span>
                  </div>
                  <div className="hidden sm:flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-0.5 bg-black/15 rounded-full" />
                      <span className="text-[7px] text-black/25 font-semibold">
                        Current
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-0.5 bg-black/[0.06] rounded-full border-b border-dashed border-black/10" />
                      <span className="text-[7px] text-black/25 font-semibold">
                        Forecast
                      </span>
                    </div>
                  </div>
                </div>
                <div className="h-[140px]">
                  <ReactECharts
                    option={lineOption}
                    style={{ height: "100%", width: "100%" }}
                    opts={{ renderer: "svg" }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
