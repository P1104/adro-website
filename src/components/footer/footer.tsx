"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Mail, Phone, Linkedin, Instagram, Zap, ArrowRight } from "lucide-react";

export function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Triggers when 10% of the footer is visible
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);
  

  return (
    <footer className="w-full pt-10 pb-8 bg-white overflow-hidden">
      <div
        ref={footerRef}
        className={`max-w-7xl mx-auto px-10 py-8 relative z-10 
                    /* SILVER GLASS TINT */
                    backdrop-blur-2xl bg-slate-50/40 
                    border border-slate-200/60 rounded-[2.5rem] 
                    shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08)]
                    
                    /* FADE OUT/IN ANIMATION LOGIC */
                    transition-all duration-1000 ease-out
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                  `}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col gap-3">
                <Link href="/" className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image
                    src="/logo.svg"
                    alt="ADRO logo"
                    width={40}
                    height={40}
                    className="object-cover"
                    />
                </div>

                <span className="text-lg font-bold text-slate-900">
                    ADRO
                </span>
                </Link>
 
            <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
              Transforming raw data into meaningful intelligence.
              ADRO uses AI to simplify analytics.
            </p>

            <div className="flex gap-4 mt-1 text-slate-400">
              <a href="https://www.linkedin.com/company/equilibrate-ai/" className="hover:text-slate-900 transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" className="hover:text-slate-900 transition-colors">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900">product</h3>
    
            <Link href="/features" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
             Features
            </Link>
            <Link href="/use-cases" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
             Use Cases
            </Link>
             <Link href="/downloads" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
             Downloads
            </Link>
             <Link href="/docs" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
             Docs
            </Link>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900">Legal</h3>
    
            <Link href="#" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
              Terms of Service
            </Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900">Get in Touch</h3>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Mail size={14} className="text-slate-400" />
             <a
  href="mailto:support@equilibrateai.com?subject=Support%20Request"
  className="hover:text-slate-900"
>
  support@equilibrateai.com
</a>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Phone size={14} className="text-slate-400" />
              <a href="tel:+919606024155" className="hover:text-slate-900">+91 9606024155</a>
            </div>
          </div>
        </div>

        {/* Reduced spacing for the bottom bar */}
        <div className="mt-8 pt-5 border-t border-slate-200/50 text-center text-[12px] font-medium text-slate-400">
          © {new Date().getFullYear()} Equilibrate.AI Technologies private limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}