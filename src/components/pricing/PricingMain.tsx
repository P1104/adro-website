"use client";

import { PricingHero } from "./PricingHero";
import { PricingTable } from "./PricingTable";
import { FAQ } from "./FAQ";
// import { CTA } from "@/components/home/CTA/CTA";

export const PricingMain = () => {
    return (
        <main className="flex flex-col w-full">
            <PricingHero />
            <PricingTable />
            <FAQ />
            {/* <CTA /> */}
        </main>
    );
};
