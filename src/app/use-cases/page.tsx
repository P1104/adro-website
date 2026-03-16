import { UseCasesMain } from "@/components/use-cases/UseCasesMain";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Real-World Use Cases for AI Data Analytics | ADRO",
    description: "ADRO helps businesses transform raw datasets into actionable insights across sales, marketing, finance, and operations with AI-driven analytics.",
};

export default function UseCasesPage() {
    return <UseCasesMain />;
}
