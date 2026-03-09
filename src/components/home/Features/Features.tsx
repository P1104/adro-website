"use client";

import { motion } from "framer-motion";
import {
  Database,
  Shield,
  Zap,
  BarChart3,
  LineChart,
  Upload,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { cn } from "@/lib/utils";

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-black/5 p-2 md:rounded-[2rem] md:p-3 container bg-white group transition-all duration-300">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-[1.5rem] border-[0.75px] bg-white p-6 shadow-sm group-hover:shadow-2xl group-hover:shadow-black/[0.03] md:p-6 transition-all duration-300">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-black/5 bg-black/5 p-2 group-hover:bg-black group-hover:text-white transition-all duration-300">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-bold tracking-tight md:text-2xl md:leading-[1.875rem] text-balance text-black">
                {title}
              </h3>
              <p className="text-black/50 text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] font-medium">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-black/[0.01] border-black/5">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-4 tracking-tighter">
            The Technical Engine
          </h2>
          <div className="max-w-2xl mx-auto text-black/60">
            <TextGenerateEffect
              words="ADRO turns your CSV and Excel data into intelligent dashboards instantly — no setup, no coding, just powerful insights."
              className="font-medium text-lg leading-relaxed justify-center"
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-6 xl:max-h-[42rem] xl:grid-rows-2 max-w-6xl mx-auto">
            <GridItem
              area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
              icon={<Upload className="h-5 w-5" />}
              title="Automatic Metadata Intelligence"
              description="Upload your dataset and ADRO instantly detects column types, generates metadata, and calculates key statistics."
            />

            <GridItem
              area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
              icon={<Database className="h-5 w-5" />}
              title="Unified AI Data Model"
              description="Automatically identifies dataset structure, relationships, metrics, and patterns — no setup or configuration required."
            />

            <GridItem
              area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/2/8]"
              icon={<BarChart3 className="h-5 w-5" />}
              title="Natural Language Querying"
              description="Ask questions about your data in plain language and instantly receive meaningful insights and visualizations."
            />

            <GridItem
              area="md:[grid-area:2/7/3/13] xl:[grid-area:2/5/3/8]"
              icon={<LineChart className="h-5 w-5" />}
              title="Dataset Statistics Engine"
              description="View column-level insights including min, max, counts, and distributions — generated directly from your metadata."
            />

            <GridItem
              area="md:[grid-area:3/1/4/7] xl:[grid-area:1/8/2/13]"
              icon={<Zap className="h-5 w-5" />}
              title="Instant Chart & Dashboard Generation"
              description="Generate charts and dashboards directly from your dataset — no complex BI tools or manual setup needed."
            />

            <GridItem
              area="md:[grid-area:3/7/4/13] xl:[grid-area:2/8/3/13]"
              icon={<Shield className="h-5 w-5" />}
              title="Private Local Data Processing"
              description="Your data stays with you. ADRO processes everything locally so you can analyze securely without external services."
            />
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Link
            href="/features"
            className="inline-flex items-center gap-2 text-black font-extrabold uppercase tracking-widest text-[10px] hover:gap-3 transition-all opacity-40 hover:opacity-100"
          >
            Explore All Capabilities <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
