"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, Apple, Terminal, Download, ChevronRight, Cpu, HardDrive } from "lucide-react";
import { Button } from "@/components/ui/button";

type OSType = "windows" | "macos" | "linux";
type Architecture = "x64" | "arm64" | "apple-silicon" | "intel" | "deb" | "appimage" | "tar";
type GPUConfig = "cpu" | "nvidia" | "amd";

const osData = {
    windows: {
        id: "windows" as OSType,
        name: "Windows",
        icon: Monitor,
        color: "bg-blue-500",
        textColor: "text-blue-600",
        bgLight: "bg-blue-50",
        architectures: [
            { id: "x64", name: "x64 (Intel / AMD)", desc: "Standard for most Windows PCs" },
            { id: "arm64", name: "ARM64", desc: "For Snapdragon/Copilot+ PCs" }
        ],
        gpus: [
            { id: "cpu", name: "CPU Only", desc: "Standard performance" },
            { id: "nvidia", name: "NVIDIA CUDA", desc: "Accelerated AI inference" },
            { id: "amd", name: "AMD ROCm", desc: "Radeon ML acceleration" }
        ]
    },
    macos: {
        id: "macos" as OSType,
        name: "macOS",
        icon: Apple,
        color: "bg-gray-800",
        textColor: "text-gray-800",
        bgLight: "bg-gray-100",
        architectures: [
            { id: "apple-silicon", name: "Apple Silicon", desc: "M1, M2, M3, M4 series" },
            { id: "intel", name: "Intel Mac", desc: "Pre-2020 Macs" }
        ],
        gpus: [
            // MacOS doesn't need GPU selection since Metal handles it natively under the hood
            { id: "cpu", name: "Apple Metal", desc: "Native Core ML acceleration" }
        ]
    },
    linux: {
        id: "linux" as OSType,
        name: "Linux",
        icon: Terminal,
        color: "bg-orange-500",
        textColor: "text-orange-600",
        bgLight: "bg-orange-50",
        architectures: [
            { id: "deb", name: ".deb (Debian/Ubuntu)", desc: "Native package manager" },
            { id: "appimage", name: ".AppImage", desc: "Universal portable binary" },
            { id: "tar", name: ".tar.gz", desc: "Manual installation" }
        ],
        gpus: [
            { id: "cpu", name: "CPU Only", desc: "Universal compatibility" },
            { id: "nvidia", name: "NVIDIA CUDA (Linux)", desc: "Requires proprietary drivers" },
            { id: "amd", name: "AMD ROCm (Linux)", desc: "Requires AMDGPU PRO" }
        ]
    }
};

export const OSSelector = ({
  os,
  setOs,
}: {
  os: OSType;
  setOs: (os: OSType) => void;
}) => {
    
    const [arch, setArch] = useState<string>("x64");
    const [gpu, setGpu] = useState<string>("cpu");

    const activeOS = osData[os];
    const ActiveIcon = activeOS.icon;

    // Handle OS change by resetting the defaults for the newly selected OS
    const handleOSChange = (newOs: OSType) => {
        setOs(newOs);
        setArch(osData[newOs].architectures[0].id);
        setGpu(osData[newOs].gpus[0].id);
    };

    return (
        <section className="py-12 bg-white dark:bg-black/20">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Custom OS Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    {(Object.keys(osData) as OSType[]).map((osKey) => {
                        const data = osData[osKey];
                        const Icon = data.icon;
                        const isActive = os === osKey;

                        return (
                            <button
                                key={osKey}
                                onClick={() => handleOSChange(osKey)}
                                className={`relative flex items-center gap-3 px-8 py-4 rounded-2xl transition-all duration-300 font-bold ${isActive
                                        ? `bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] scale-105 border border-gray-100 ring-2 ring-primary/20 ${data.textColor}`
                                        : "bg-gray-50 text-gray-500 hover:bg-gray-100 border border-transparent hover:scale-105"
                                    }`}
                            >
                                <Icon size={24} className={isActive ? "" : "opacity-60"} />
                                <p>{data.name}</p>
                            </button>
                        );
                    })}
                </div>

                {/* Main Configuration Card */}
                <div className="relative overflow-hidden rounded-[2rem] bg-white border border-gray-100 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.08)] min-h-[500px]">

                    {/* Top Accent Bar */}
                    <div className={`absolute top-0 left-0 w-full h-2 ${activeOS.color} transition-colors duration-500`} />

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={os}
                            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                            transition={{ duration: 0.3 }}
                            className="p-6 md:p-10 flex flex-col lg:flex-row gap-10"
                        >
                            {/* Left Side: Header & Options */}
                            <div className="flex-1 border-r border-gray-100 pr-0 lg:pr-10">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className={`flex items-center justify-center w-16 h-16 rounded-2xl ${activeOS.bgLight} ${activeOS.textColor}`}>
                                        <ActiveIcon size={32} />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-black text-gray-900">Configure for {activeOS.name}</h2>
                                        <p className="text-sm font-medium text-gray-500">Select your hardware configuration</p>
                                    </div>
                                </div>

                                {/* Architecture Selection */}
                                <div className="mb-8">
                                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                                        <Cpu size={16} /> System Architecture
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {activeOS.architectures.map((a) => (
                                            <button
                                                key={a.id}
                                                onClick={() => setArch(a.id)}
                                                className={`text-left p-4 rounded-xl border-2 transition-all ${arch === a.id
                                                        ? `border-${activeOS.textColor.replace('text-', '')} bg-${activeOS.bgLight.replace('bg-', '')}`
                                                        : "border-gray-100 hover:border-gray-200 bg-white"
                                                    }`}
                                                style={{
                                                    borderColor: arch === a.id ? (os === 'windows' ? '#3b82f6' : os === 'macos' ? '#1f2937' : '#f97316') : undefined,
                                                    backgroundColor: arch === a.id ? (os === 'windows' ? '#eff6ff' : os === 'macos' ? '#f3f4f6' : '#fff7ed') : undefined
                                                }}
                                            >
                                                <div className={`font-bold text-[15px] ${arch === a.id ? activeOS.textColor : "text-gray-700"} mb-1`}>
                                                    {a.name}
                                                </div>
                                                <div className="text-xs font-medium text-gray-500">{a.desc}</div>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* GPU Selection */}
                                <div>
                                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                                        <HardDrive size={16} /> Hardware Acceleration
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                        {activeOS.gpus.map((g) => (
                                            <button
                                                key={g.id}
                                                onClick={() => setGpu(g.id)}
                                                className={`text-left p-3 rounded-xl border-2 transition-all ${gpu === g.id ? "border-primary bg-primary/5" : "border-gray-100 hover:border-gray-200 bg-white"
                                                    }`}
                                            >
                                                <div className={`font-bold text-sm ${gpu === g.id ? "text-primary" : "text-gray-700"} mb-1`}>
                                                    {g.name}
                                                </div>
                                                <div className="text-[10px] font-medium text-gray-500 leading-tight">
                                                    {g.desc}
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Final Download */}
                            <div className="w-full lg:w-[350px] flex flex-col justify-center bg-gray-50/50 rounded-2xl p-6 md:p-8 border border-gray-100">
                                <div className="text-center mb-8">
                                    <div className="inline-block p-4 rounded-full bg-white shadow-sm border border-gray-100 mb-4">
                                        <Download size={32} className={activeOS.textColor} />
                                    </div>
                                    <h3 className="text-xl font-black text-gray-900 mb-2">Ready to Install</h3>

                                    {/* Selected Configuration Summary */}
                                    <div className="inline-flex flex-col items-center gap-1.5 px-4 py-3 rounded-xl bg-white border border-gray-100 shadow-sm mb-2 w-full">
                                        <div className="text-sm font-bold text-gray-700">{activeOS.name} • {activeOS.architectures.find(a => a.id === arch)?.name}</div>
                                        <div className="text-xs font-medium text-primary">Acceleration: {activeOS.gpus.find(g => g.id === gpu)?.name}</div>
                                    </div>
                                    <div className="text-xs text-gray-400 font-medium">Estimated size: ~184 MB • v2.4.1</div>
                                </div>

                                <Button
                                    size="lg"
                                    className={`w-full h-14 text-white font-black text-base shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 btn-gradient`}
                                    style={{
                                        backgroundColor: os === 'windows' ? '#3b82f6' : os === 'macos' ? '#1f2937' : '#f97316'
                                    }}
                                >
                                    Download Installer
                                </Button>

                                <div className="mt-4 text-center">
                                    <a href="#" className="text-xs font-bold text-gray-400 hover:text-primary transition-colors hover:underline">
                                        Need the command line version?
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
};
