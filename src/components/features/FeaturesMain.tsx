"use client";

import { FeaturesHero } from "./FeaturesHero";
import { FeaturesList } from "./FeaturesList";
import { DetailedInsights } from "./DetailedInsights";
// import { CTA } from "@/components/home/CTA/CTA";

export const FeaturesMain = () => {
    return (
        <main className="flex flex-col w-full">
            <FeaturesHero />
            <FeaturesList />
            <DetailedInsights />
            {/* <CTA /> */}
        </main>
    );
};
