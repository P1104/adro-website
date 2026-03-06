"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Clock, Copy, Check } from "lucide-react";
import {
    Stepper,
    StepperDescription,
    StepperIndicator,
    StepperItem,
    StepperSeparator,
    StepperTitle,
    StepperTrigger,
} from "@/components/ui/stepper";
import { DocSection, DocSubSection, DocContentBlock } from "./docs-data";

interface DocsContentProps {
    sections: DocSection[];
    activeSubSection: string;
}

function CopyButton({ text }: { text: string }) {
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    return (
        <button
            onClick={handleCopy}
            className="absolute top-3 right-3 p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white/60 hover:text-white"
        >
            {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
    );
}

function estimateReadingTime(sub: DocSubSection): number {
    let words = 0;
    sub.content.forEach((block) => {
        if (block.text) words += block.text.split(" ").length;
        if (block.items) block.items.forEach((item) => (words += item.split(" ").length));
    });
    return Math.max(1, Math.ceil(words / 200));
}

function renderBlock(block: DocContentBlock, index: number) {
    switch (block.type) {
        case "paragraph":
            return (
                <p key={index} className="docs-paragraph text-[15px] leading-[1.8] text-black/55 font-medium">
                    {block.text}
                </p>
            );

        case "heading":
            return (
                <h4 key={index} className="text-lg font-bold mt-8 mb-3 tracking-tight text-black flex items-center gap-2">
                    <span className="w-1 h-5 bg-black rounded-full inline-block" />
                    {block.text}
                </h4>
            );

        case "list":
            return (
                <ul key={index} className="docs-list space-y-2.5 my-4">
                    {block.items?.map((item, i) => {
                        const dashIndex = item.indexOf(" — ") !== -1 ? item.indexOf(" — ") : item.indexOf(" - ");
                        if (dashIndex !== -1) {
                            const title = item.substring(0, dashIndex);
                            const rest = item.substring(dashIndex);
                            return (
                                <li key={i} className="docs-list-item flex items-start gap-3 text-black/55">
                                    <span className="docs-list-bullet mt-[9px]" />
                                    <span className="text-sm leading-relaxed">
                                        <span className="font-bold text-black">{title}</span>{rest}
                                    </span>
                                </li>
                            );
                        }
                        return (
                            <li key={i} className="docs-list-item flex items-start gap-3 text-black/55">
                                <span className="docs-list-bullet mt-[9px]" />
                                <span className="text-sm leading-relaxed">{item}</span>
                            </li>
                        );
                    })}
                </ul>
            );

        case "code":
            return (
                <div key={index} className="relative my-6 rounded-xl overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-2 bg-[#1e1e1e] border-b border-white/5">
                        <span className="text-xs font-mono text-white/40">Code</span>
                    </div>
                    <pre className="bg-[#1a1a1a] p-4 text-sm font-mono text-green-400 overflow-x-auto">
                        <code>{block.text}</code>
                    </pre>
                    {block.text && <CopyButton text={block.text} />}
                </div>
            );

        case "callout":
            return (
                <div
                    key={index}
                    className={`docs-callout rounded-xl border p-4 my-6 flex gap-3 ${block.variant === "tip"
                        ? "bg-emerald-50/60 border-emerald-200/60 text-emerald-800"
                        : block.variant === "warning"
                            ? "bg-amber-50/60 border-amber-200/60 text-amber-800"
                            : "bg-blue-50/60 border-blue-200/60 text-blue-800"
                        }`}
                >
                    <span className="text-lg leading-none mt-0.5">
                        {block.variant === "tip" ? "💡" : block.variant === "warning" ? "⚠️" : "ℹ️"}
                    </span>
                    <p className="text-sm font-medium leading-relaxed">{block.text}</p>
                </div>
            );

        default:
            return null;
    }
}

function findActiveContent(
    sections: DocSection[],
    activeSubSectionId: string
): { section: DocSection; subSection: DocSubSection } | null {
    for (const section of sections) {
        for (const sub of section.subSections) {
            if (sub.id === activeSubSectionId) {
                return { section, subSection: sub };
            }
        }
    }
    return null;
}

export default function DocsContent({
    sections,
    activeSubSection,
}: DocsContentProps) {
    const [activeStep, setActiveStep] = useState<number>(1);
    const result = findActiveContent(sections, activeSubSection);

    if (!result) {
        return (
            <main className="docs-content">
                <div className="docs-content-inner px-6 md:px-12 py-16">
                    <div className="flex flex-col gap-6 py-12 text-center items-center">
                        <Badge variant="outline" className="w-fit text-xs font-bold uppercase tracking-widest">Welcome</Badge>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter font-black max-w-3xl text-black">
                            ADRO Documentation
                        </h1>
                        <p className="text-lg text-black/40 max-w-2xl leading-relaxed font-medium">
                            Everything you need to get started with ADRO. Upload data, ask questions, and generate dashboards in minutes.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8 w-full max-w-3xl">
                            {[
                                { step: "01", label: "Upload", desc: "CSV or Excel files" },
                                { step: "02", label: "Ask", desc: "Natural language queries" },
                                { step: "03", label: "Analyze", desc: "AI-powered insights" },
                                { step: "04", label: "Export", desc: "PNG, PDF, Excel" },
                            ].map((item) => (
                                <div key={item.step} className="p-5 rounded-2xl border border-black/8 bg-black/[0.02] hover:border-black/15 hover:shadow-sm transition-all cursor-default">
                                    <span className="text-[10px] font-black text-black/25 mb-2 block uppercase tracking-widest">Step {item.step}</span>
                                    <h5 className="font-bold text-base text-black mb-0.5">{item.label}</h5>
                                    <p className="text-[11px] text-black/40 font-medium">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    const { section, subSection } = result;
    const readTime = estimateReadingTime(subSection);

    return (
        <main className="docs-content">
            <div className="docs-content-inner px-6 md:px-12 py-10 md:py-16">
                <div className="flex flex-col gap-8">
                    {/* Header */}
                    <div className="flex flex-col gap-4 pb-8 border-b border-black/5">
                        <div className="flex items-center gap-3 flex-wrap">
                            {subSection.badge && (
                                <Badge variant="outline" className="text-[10px] font-bold uppercase tracking-widest">{subSection.badge}</Badge>
                            )}
                            <div className="flex items-center gap-1.5 text-[11px] text-black/30 font-medium">
                                <Clock size={12} />
                                {readTime} min read
                            </div>
                        </div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl tracking-tighter font-black text-black max-w-2xl leading-tight">
                            {subSection.title}
                        </h1>
                        <div className="flex items-center gap-2 text-sm text-black/30 font-medium">
                            <span>{section.title}</span>
                            <span className="text-black/15">/</span>
                            <span className="text-black/60">{subSection.title}</span>
                        </div>
                    </div>

                    {/* Stepper View */}
                    {subSection.steps && subSection.steps.length > 0 ? (
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-4">
                            <div className="lg:col-span-8 order-2 lg:order-1">
                                <div className="rounded-2xl border border-black/8 bg-black/[0.02] aspect-video overflow-hidden shadow-sm relative group">
                                    <Image
                                        src={subSection.steps[activeStep - 1]?.image || "/logo.png"}
                                        alt={`Step ${activeStep}`}
                                        fill
                                        className="object-contain p-4 group-hover:scale-[1.02] transition-transform duration-500"
                                    />
                                </div>
                                <div className="mt-8 space-y-4">
                                    {subSection.content.map((block, i) => renderBlock(block, i))}
                                </div>
                            </div>

                            <div className="lg:col-span-4 order-1 lg:order-2">
                                <div className="sticky top-24">
                                    <h3 className="text-[11px] font-bold text-black/30 uppercase tracking-widest mb-4">Steps</h3>
                                    <Stepper
                                        value={activeStep}
                                        onValueChange={setActiveStep}
                                        orientation="vertical"
                                        className="min-w-[240px]"
                                    >
                                        {subSection.steps.map(({ title, description }, idx) => {
                                            const stepNum = idx + 1;
                                            return (
                                                <StepperItem
                                                    key={idx}
                                                    step={stepNum}
                                                    className="relative items-start"
                                                >
                                                    <StepperTrigger
                                                        className="items-start pb-12 last:pb-0 group/trigger"
                                                        onClick={() => setActiveStep(stepNum)}
                                                    >
                                                        <StepperIndicator className="group-hover/trigger:border-primary transition-colors" />
                                                        <div className="mt-0.5 space-y-1 px-2 text-left">
                                                            <StepperTitle className="text-sm md:text-base">{title}</StepperTitle>
                                                            <StepperDescription className="text-xs md:text-sm line-clamp-2">
                                                                {description}
                                                            </StepperDescription>
                                                        </div>
                                                    </StepperTrigger>
                                                    {stepNum < (subSection.steps?.length || 0) && (
                                                        <StepperSeparator className="absolute inset-y-0 left-3 top-[2.25rem] -order-1 m-0 -translate-x-1/2 h-[calc(100%-2.25rem)]" />
                                                    )}
                                                </StepperItem>
                                            );
                                        })}
                                    </Stepper>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-8">
                            {subSection.mainImage && (
                                <div className="rounded-2xl border border-black/8 bg-black/[0.02] aspect-[21/9] overflow-hidden shadow-sm relative">
                                    <Image
                                        src={subSection.mainImage}
                                        alt={subSection.title}
                                        fill
                                        className="object-contain p-8"
                                    />
                                </div>
                            )}
                            <div className="max-w-3xl space-y-4">
                                {subSection.content.map((block, i) => renderBlock(block, i))}
                            </div>
                        </div>
                    )}

                    {/* Bottom Navigation */}
                    <div className="docs-bottom-nav flex justify-between gap-4">
                        {(() => {
                            const allSubs = sections.flatMap((s) =>
                                s.subSections.map((sub) => ({
                                    ...sub,
                                    sectionTitle: s.title,
                                }))
                            );
                            const currentIndex = allSubs.findIndex((s) => s.id === activeSubSection);
                            const prev = currentIndex > 0 ? allSubs[currentIndex - 1] : null;
                            const next = currentIndex < allSubs.length - 1 ? allSubs[currentIndex + 1] : null;

                            return (
                                <>
                                    {prev ? (
                                        <button
                                            onClick={() => {
                                                setActiveStep(1);
                                                window.dispatchEvent(new CustomEvent("docs-navigate", { detail: prev.id }));
                                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                            }}
                                            className="group flex flex-col items-start gap-1.5 p-4 rounded-xl border border-black/8 hover:border-black/15 hover:bg-black/[0.02] transition-all text-left max-w-[260px]"
                                        >
                                            <span className="text-[10px] font-bold text-black/30 uppercase tracking-widest">← Previous</span>
                                            <span className="font-bold text-sm text-black group-hover:underline">{prev.title}</span>
                                            <span className="text-[11px] text-black/30 font-medium">{prev.sectionTitle}</span>
                                        </button>
                                    ) : <div />}
                                    {next && (
                                        <button
                                            onClick={() => {
                                                setActiveStep(1);
                                                window.dispatchEvent(new CustomEvent("docs-navigate", { detail: next.id }));
                                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                            }}
                                            className="group flex flex-col items-end gap-1.5 p-4 rounded-xl border border-black/8 hover:border-black/15 hover:bg-black/[0.02] transition-all text-right max-w-[260px]"
                                        >
                                            <span className="text-[10px] font-bold text-black/30 uppercase tracking-widest">Next →</span>
                                            <span className="font-bold text-sm text-black group-hover:underline">{next.title}</span>
                                            <span className="text-[11px] text-black/30 font-medium">{next.sectionTitle}</span>
                                        </button>
                                    )}
                                </>
                            );
                        })()}
                    </div>
                </div>
            </div>
        </main>
    );
}
