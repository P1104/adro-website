import { Hero } from "./Hero/Hero";
import { Features } from "./Features/Features";
import { WhyChoose } from "./WhyChoose/WhyChoose";
import { Problem } from "./Problem/Problem";
import { Approach } from "./Approach/Approach";
import { Questions } from "./Questions/Questions";
import { Impact } from "./Impact/Impact";
import { CTA } from "./CTA/CTA";

export const HomeMain = () => {
    return (
        <main className="flex flex-col w-full bg-white">
            <Hero />
            <Problem />
            <Approach />
            <Questions />
            <Impact />
            <WhyChoose />
            <Features />
            <CTA />

        </main>
    );
};