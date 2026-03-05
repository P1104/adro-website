import Link from "next/link";
import { Twitter, Linkedin, Github } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="pt-24 pb-12 border-t border-white/5 bg-background">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-16">
                    <div className="col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="w-6 h-6 rounded bg-primary/20 border border-primary/50 flex items-center justify-center">
                                <div className="w-2.5 h-2.5 bg-primary rounded-sm shadow-[0_0_5px_#00E5FF]" />
                            </div>
                            <span className="text-lg font-bold tracking-tight text-grey-700">ADRO <span className="text-primary">Insights</span></span>
                        </Link>
                        <p className="text-muted-foreground text-sm max-w-xs mb-6">
                            Empowering developers and businesses with AI-driven visual data intelligence.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="p-2 border border-white/5 rounded-lg hover:border-primary/50 text-muted-foreground hover:text-primary transition-all">
                                <Twitter size={18} />
                            </Link>
                            <Link href="#" className="p-2 border border-white/5 rounded-lg hover:border-primary/50 text-muted-foreground hover:text-primary transition-all">
                                <Linkedin size={18} />
                            </Link>
                            <Link href="#" className="p-2 border border-white/5 rounded-lg hover:border-primary/50 text-muted-foreground hover:text-primary transition-all">
                                <Github size={18} />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-grey-700 font-bold mb-6 text-sm">Product</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li><Link href="#features" className="hover:text-primary transition-colors">Features</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Documentation</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-grey-700 font-bold mb-6 text-sm">Company</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-primary transition-colors">About</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-4">
                    <p className="text-muted-foreground text-[10px] md:text-xs">
                        © 2026 ADRO Insights. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-[10px] md:text-xs text-muted-foreground">
                        <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
