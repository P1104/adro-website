import { ComparisonPageTemplate } from "@/components/common/ComparisonPageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Best Power BI Alternative | ADRO vs Power BI",
    description: "Discover why ADRO is the leading Power BI alternative for teams that want instant AI-driven insights without complex DAX or manual dashboard setup.",
};

const features = [
    {
        feature: "AI Data Analysis",
        adro: "Built-in AI analytics for instant dataset interrogation.",
        competitorValue: "Limited AI features, often requiring separate configuration.",
        isBetter: true,
    },
    {
        feature: "Natural Language Queries",
        adro: "Ask questions to your data and get instant charts.",
        competitorValue: "Requires complex configuration and DAX knowledge.",
        isBetter: true,
    },
    {
        feature: "Deployment Lifecycle",
        adro: "Automatic layouts and KPIs generated within seconds.",
        competitorValue: "Manual setup and extensive dashboard engineering required.",
        isBetter: true,
    },
    {
        feature: "Data Preparation",
        adro: "AI-assisted type detection and automated cleaning.",
        competitorValue: "Requires manual Power Query and data modeling.",
        isBetter: true,
    },
    {
        feature: "Learning Curve",
        adro: "Zero technical knowledge required. Upload and analyze.",
        competitorValue: "Requires mastery of DAX and complex data relationships.",
        isBetter: true,
    }
];

export default function PowerBIPage() {
    return (
        <ComparisonPageTemplate
            competitor="Power BI"
            description="Power BI is built for technical analysts. ADRO is built for everyone who needs insights. Move from complex DAX modeling to instant AI-driven dashboards."
            features={features}
            seoTitle="Best Power BI Alternative | AI Data Analytics"
            seoDescription="Why teams choose ADRO over Power BI for faster AI-powered insights."
        />
    );
}
