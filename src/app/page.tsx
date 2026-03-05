import { HomeHero } from "@/components/home/HomeHero";
import { HomeFeatures } from "@/components/home/HomeFeatures";
import { HomeCTA } from "@/components/home/HomeCTA";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeFeatures />
      <HomeCTA />
    </>
  );
}
