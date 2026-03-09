"use client";

import { DownloadsHero } from "./DownloadsHero";
import { OSSelector } from "./OSSelector";

export const DownloadsMain = () => {
    return (
        <main className="min-h-screen bg-background pt-24">
            <DownloadsHero />
            <OSSelector />
        </main>
    );
};

