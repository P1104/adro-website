"use client";

// import { SimpleTitle } from "./SimpleTitle/SimpleTitle";
import { Hero } from "./Hero/Hero";
// import { Workflow } from "./Workflow/Workflow";
import { Features } from "./Features/Features";
import { Pricing } from "./Pricing/Pricing";
// import { CTA } from "./CTA/CTA";

export const HomeMain = () => {
    return (
        <main className="flex flex-col w-full">
            <Hero />
            {/* <SimpleTitle /> */}
            {/* <Workflow /> */}
            <Features />
            <Pricing />
            {/* <CTA /> */}
        </main>
    );
};
