"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        question: "How does ADRO's AI-powered data analysis actually work?",
        answer: "ADRO uses a multi-layered approach to data understanding. First, it performs automated schema detection to understand the structure of your files. Then, it utilizes proprietary Large Language Models (LLMs) to perform semantic analysis—this means it understands the meaning of your column headers and the context of the entries. Finally, it builds a temporary vector representation of the data to allow for natural language querying. It&apos;s like giving your data a brain that you can talk to directly."
    },
    {
        question: "Is my corporate data used to train your AI models?",
        answer: "Absolutely not. One of our core architectural principles is data isolation. Your data is processed in a secured, stateless environment. We use enterprise-grade LLM deployments that explicitly guarantee your data is never used for training purposes. Your insights are yours alone, and they remain within your private workspace. We are SOC 2 Type II compliant to ensure the highest standards of data stewardship."
    },
    {
        question: "What file formats does the platform support?",
        answer: "We support a wide range of structured and semi-structured formats, including CSV, Excel (.xlsx, .xls), JSON, XML, and Parquet. Additionally, our Enterprise tier includes OCR capabilities for extracting structured data from PDF reports and scanned documents. Our system is designed to handle messy data, automatically normalized date formats, currency symbols, and missing values so you don't have to."
    },
    {
        question: "How does the 'Natural Language Querying' differ from SQL?",
        answer: "SQL is a technical language that requires you to know exactly HOW the data is stored. ADRO&apos;s natural language querying allows you to focus on WHAT you want to know. Instead of writing &apos;SELECT region, AVG(sales) FROM table GROUP BY region&apos;, you simply ask &apos;Show me average sales by region.&apos; Our AI translates your intent into complex data operations, handling joins, aggregations, and filters automatically. This empowers non-technical team members to be data-driven without learning a new language."
    },
    {
        question: "Can I integrate ADRO with my existing data warehouse like Snowflake or BigQuery?",
        answer: "Yes. While our primary focus is making file-based data intelligent, our Pro and Enterprise tiers include connectors for major data warehouses. You can sync specific tables or views directly into ADRO, allowing you to use our AI interpretation layer on top of your existing infrastructure. We also offer a REST API for custom integrations into your internal tools and workflows."
    },
    {
        question: "What kind of visualization types are available out of the box?",
        answer: "ADRO includes over 25+ premium visualization types, ranging from standard line, bar, and pie charts to more complex Sankey diagrams, heatmaps, and geographic maps. The best part? You don&apos;t have to choose. Our &apos;Auto-Dashboard&apos; feature analyzes your data and automatically selects the most effective visualization style to convey each specific insight. Every chart remains fully interactive with drill-down capabilities."
    },
    {
        question: "What is the limit on the size of data files I can upload?",
        answer: "Starter accounts can upload files up to 50MB. Pro accounts support up to 500MB per file, and Enterprise accounts can handle files up to 5GB or utilize direct database connections for &apos;Big Data&apos; processing. Our processing engine is optimized for high performance, ensuring that even large datasets are analyzed and summarized in under 30 seconds."
    },
    {
        question: "Does ADRO offer any predictive analytics capabilities?",
        answer: "Yes, our &apos;Intelligence+&apos; engine (available in Pro and Enterprise) provides automated forecasting and predictive modeling. It can identify historical trends and project future performance for metrics like revenue, churn, and inventory. It also performs anomaly detection, alerting you instantly if a metric deviates significantly from its predicted range, allowing you to act before a trend becomes a problem."
    },
    {
        question: "How modular is the platform for team collaboration?",
        answer: "ADRO is built for teams. You can create shared workspaces, invite collaborators with granular roles (Viewer, Editor, Admin), and leave comments directly on specific charts or insights. You can also create public sharing links with password protection for stakeholders who don&apos;t have an ADRO account, making it the central hub for your organization&apos;s intelligence."
    },
    {
        question: "What kind of support can I expect?",
        answer: "Starter users have access to our comprehensive documentation and community forum. Pro users receive priority email support with a guaranteed response time of under 4 hours. Enterprise customers are assigned a dedicated account manager and have access to 24/7 support via Phone, Slack, and Video conferencing, as well as customized onboarding for their entire team."
    }
];

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-black/[0.02]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-black/5 border border-black/10 text-black text-xs font-bold uppercase tracking-widest mb-6"
                    >
                        Questions & Answers
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-black mb-6"
                    >
                        Everything You Need to Know
                    </motion.h2>
                    <p className="text-black/60 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
                        Find answers to common questions about our platform, security, and how to
                        get the most out of your data intelligence journey.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-white rounded-[2rem] border border-black/10 overflow-hidden transition-all hover:border-black/30 shadow-sm"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-8 py-8 flex items-center justify-between text-left transition-colors"
                            >
                                <span className="text-xl font-bold text-black pr-8">{faq.question}</span>
                                <div className={`shrink-0 w-8 h-8 rounded-full bg-black/5 flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                                </div>
                            </button>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    className="px-8 pb-8"
                                >
                                    <p className="text-black/60 font-medium leading-loose text-lg border-t border-black/5 pt-6">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <p className="text-black/50 font-bold text-lg mb-8">Still have more questions?</p>
                    <button className="bg-black text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-black/90 transition-all shadow-2xl shadow-black/20">
                        Get in Touch with our Experts
                    </button>
                </div>
            </div>
        </section>
    );
};
