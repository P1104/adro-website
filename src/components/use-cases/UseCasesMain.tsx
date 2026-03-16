"use client";

import { UseCasesHero } from "./UseCasesHero";
import { UseCasesList } from "./UseCasesList";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";

export const UseCasesMain = () => {
    return (
        <main className="flex flex-col w-full min-h-screen bg-white">
            <Navbar />
            <UseCasesHero />
            <UseCasesList />
        </main>
    );
};
