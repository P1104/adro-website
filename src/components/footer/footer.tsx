"use client";

import React from "react";
import Link from "next/link";
import {
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Youtube,
    Zap,
    ArrowRight
} from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-white border-t border-border pt-24 pb-12 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <Zap className="text-primary fill-primary" size={24} />
                            <span className="font-bold text-2xl tracking-tight">ADRO</span>
                        </Link>
                        <p className="text-muted-foreground leading-relaxed font-medium">
                            Transforming raw data into meaningful intelligence.
                            Our AI-driven platform solves complexity and empowers your team with instant insights.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                                <Youtube size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="font-bold text-lg text-foreground">Solutions</h4>
                        <ul className="space-y-4">
                            <li><Link href="/solutions" className="text-muted-foreground hover:text-primary transition-colors font-medium inline-flex items-center group">
                                <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                E-commerce
                            </Link></li>
                            <li><Link href="/solutions" className="text-muted-foreground hover:text-primary transition-colors font-medium inline-flex items-center group">
                                <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                FinTech
                            </Link></li>
                            <li><Link href="/solutions" className="text-muted-foreground hover:text-primary transition-colors font-medium inline-flex items-center group">
                                <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                SaaS
                            </Link></li>
                        </ul>
                    </div>

                    {/* Product */}
                    <div className="space-y-6">
                        <h4 className="font-bold text-lg text-foreground">Product</h4>
                        <ul className="space-y-4">
                            <li><Link href="/features" className="text-muted-foreground hover:text-primary transition-colors font-medium inline-flex items-center group">
                                <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                Features
                            </Link></li>
                            <li><Link href="/pricing" className="text-muted-foreground hover:text-primary transition-colors font-medium inline-flex items-center group">
                                <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                Pricing
                            </Link></li>
                            <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors font-medium inline-flex items-center group">
                                <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                Contact Sales
                            </Link></li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-6">
                        <h4 className="font-bold text-lg text-foreground">Get in Touch</h4>
                        <div className="space-y-4">
                            <a href="mailto:contact@adro-intelligence.com" className="flex items-start gap-3 group">
                                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                    <Mail className="w-5 h-5 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-bold text-foreground">Email</p>
                                    <p className="text-sm text-muted-foreground font-medium group-hover:text-primary transition-colors">contact@adro-intelligence.com</p>
                                </div>
                            </a>
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center">
                                    <Phone className="w-5 h-5 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-bold text-foreground">Location</p>
                                    <p className="text-sm text-muted-foreground font-medium">Bangalore, India</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-center">
                    <p className="text-muted-foreground text-sm font-medium">
                        © 2026 ADRO Intelligence Pvt Ltd. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-sm font-medium text-muted-foreground">
                        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
