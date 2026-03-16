import { ComparisonPageTemplate } from "@/components/common/ComparisonPageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Better Alternative to Excel for Analytics | ADRO vs Excel",
    description: "Moving beyond spreadsheets? Learn why ADRO is the superior Excel alternative for dynamic dashboards and AI-powered data storytelling.",
};

const features = [
    {
        feature: "Cognitive Depth",
        adro: "AI automatically surfaces trends and anomalies.",
        competitorValue: "Manual row/column analysis prone to human error.",
        isBetter: true,
    },
    {
        feature: "Analytical Logic",
        adro: "Advanced NLP replaces complex formulaic logic.",
        competitorValue: "Broken formulas and manual manual calculation errors.",
        isBetter: true,
    },
    {
        feature: "Dynamic Synthesis",
        adro: "Fully interactive environments with live filters.",
        competitorValue: "Static charts that require manual data refreshing.",
        isBetter: true,
    },
    {
        feature: "Collaboration",
        adro: "Secure, web-based intelligence sharing for teams.",
        competitorValue: "Fragmented version control across email attachments.",
        isBetter: true,
    },
    {
        feature: "Visual Clarity",
        adro: "Premium UI designed for executive-level presenting.",
        competitorValue: "Basic spreadsheet styling with limited design depth.",
        isBetter: true,
    }
];

export default function ExcelPage() {
    return (
        <ComparisonPageTemplate
            competitor="Excel"
            description="Excel is for data entry. ADRO is for data storytelling. Move beyond static spreadsheets to a dynamic, AI-powered analytics ecosystem."
            features={features}
            seoTitle="Better Excel Alternative for Analytics"
            seoDescription="Why modern teams are choosing AI dashboards over static spreadsheets."
        />
    );
}
