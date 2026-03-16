import { Hero } from "./Hero/Hero";
import { About } from "./About/About";
import { Features } from "./Features/Features";
import { WhyChoose } from "./WhyChoose/WhyChoose";


import { Audience } from "./Audience/Audience";
import { Demo } from "./Demo/Demo";

export const HomeMain = () => {
    return (
        <main className="flex flex-col w-full bg-white">
            <Hero />
            <About />
            <WhyChoose />
            <Features />
            <Audience />
            <Demo />
        </main>
    );
};