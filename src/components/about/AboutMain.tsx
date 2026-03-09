"use client";

import { AboutHero } from "./AboutHero";
import { Values } from "./Values";
import { Story } from "./Story";
// import { CTA } from "@/components/home/CTA/CTA";

export const AboutMain = () => {
    return (
        <main className="flex flex-col w-full">
            <AboutHero />
            <Values />
            <Story />
            {/* <CTA /> */}
        </main>
    );
};
