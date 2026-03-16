import { FeaturesMain } from "@/components/features/FeaturesMain";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Powerful AI Features for Modern Data Analytics | ADRO",
    description: "ADRO transforms the way teams analyze data by combining AI-driven analytics, automated dashboards, and natural language queries into a single platform.",
};

export default function FeaturesPage() {
    return <FeaturesMain />;
}
