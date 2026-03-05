"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
    return (
        <div className="pt-32 pb-24">
            {/* Contact Hero */}
            <section className="container mx-auto px-4 mb-24 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6"
                >
                    Contact Us
                </motion.div>
                <h1 className="text-5xl md:text-7xl font-extrabold text-foreground mb-8 tracking-tight max-w-5xl mx-auto">
                    Let&apos;s Start a <span className="text-primary">Conversation</span>.
                </h1>
                <p className="text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto">
                    Have questions about ADRO? Want to see a demo? We&apos;re here to help you unlock the power of your data.
                </p>
            </section>

            {/* Main Contact Section */}
            <section className="container mx-auto px-4 mb-32">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Contact Info */}
                    <div className="flex-1 space-y-12">
                        <h2 className="text-4xl font-bold tracking-tight">Get in Touch</h2>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-white border border-border shadow-sm flex items-center justify-center group-hover:border-primary transition-all">
                                    <Mail className="text-primary" size={28} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-1">Email Us</h4>
                                    <p className="text-muted-foreground font-medium">contact@adro-intelligence.com</p>
                                    <p className="text-muted-foreground font-medium text-sm mt-1">Response within 24 hours.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-white border border-border shadow-sm flex items-center justify-center group-hover:border-primary transition-all">
                                    <Phone className="text-primary" size={28} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-1">Call Us</h4>
                                    <p className="text-muted-foreground font-medium">+91-9876543210</p>
                                    <p className="text-muted-foreground font-medium text-sm mt-1">Mon-Fri, 9am - 6pm IST.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-white border border-border shadow-sm flex items-center justify-center group-hover:border-primary transition-all">
                                    <MapPin className="text-primary" size={28} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-1">Visit Us</h4>
                                    <p className="text-muted-foreground font-medium">123 AI Plaza, Tech Park</p>
                                    <p className="text-muted-foreground font-medium text-sm mt-1">Bangalore, Karnataka 560001.</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Link placeholder */}
                        <div className="pt-8 border-t border-border">
                            <h4 className="font-bold mb-4">Follow Our Journey</h4>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                    <Zap size={18} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 md:p-14 rounded-[3rem] border border-border shadow-2xl shadow-primary/5"
                        >
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-foreground">First Name</label>
                                        <input className="w-full px-5 py-4 rounded-xl border border-border focus:border-primary focus:outline-none transition-all font-medium" placeholder="Jane" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-foreground">Last Name</label>
                                        <input className="w-full px-5 py-4 rounded-xl border border-border focus:border-primary focus:outline-none transition-all font-medium" placeholder="Doe" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-foreground">Email Address</label>
                                    <input className="w-full px-5 py-4 rounded-xl border border-border focus:border-primary focus:outline-none transition-all font-medium" placeholder="jane@example.com" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-foreground">Message</label>
                                    <textarea className="w-full px-5 py-4 rounded-xl border border-border focus:border-primary focus:outline-none transition-all font-medium min-h-[160px] resize-none" placeholder="Tell us how we can help..." />
                                </div>
                                <Button size="lg" className="w-full h-16 rounded-2xl bg-primary text-white font-bold text-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-3">
                                    <Send size={20} />
                                    Send Message
                                </Button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
