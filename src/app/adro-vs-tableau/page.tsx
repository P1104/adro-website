import { ComparisonPageTemplate } from "@/components/common/ComparisonPageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tableau Alternative for AI Dashboards | ADRO vs Tableau",
    description: "Compare ADRO and Tableau. Learn why ADRO is the best Tableau alternative for users seeking automated data visualization and AI insights.",
};

const features = [
    {
        feature: "Insight Velocity",
        adro: "Generate a full visual report instantly upon upload.",
        competitorValue: "Manual visualization design for every individual chart.",
        isBetter: true,
    },
    {
        feature: "AI Integration",
        adro: "Native AI that understands context without extra setup.",
        competitorValue: "AI features typically limited or required as add-ons.",
        isBetter: true,
    },
    {
        feature: "Exploration Paradigm",
        adro: "Talk to your data in plain English for instant answers.",
        competitorValue: "Limited syntax support with steep learning curves.",
        isBetter: true,
    },
    {
        feature: "Infrastructure",
        adro: "No configuration required for enterprise-grade visuals.",
        competitorValue: "Requires specialized prep and canvas configuration.",
        isBetter: true,
    },
    {
        feature: "Strategic Access",
        adro: "Empower every team member with data intelligence.",
        competitorValue: "Insights often siloed behind technical expert teams.",
        isBetter: true,
    }
];

export default function TableauPage() {
    return (
        <ComparisonPageTemplate
            competitor="Tableau"
            description="Tableau is for visual artists. ADRO is for decision-makers. Skip the manual dashboard building and start discovering insights in under 60 seconds."
            features={features}
            seoTitle="Tableau Alternative for AI Dashboards"
            seoDescription="How ADRO automates visual analytics for faster business decisions."
        />
    );
}
