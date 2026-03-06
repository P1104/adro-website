// "use client";

// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Zap } from "lucide-react";

// export const CTA = () => {
//     return (
//         <section className="py-24 relative overflow-hidden bg-white">
//             <div className="container mx-auto px-4 text-center">
//                 <div className="bg-black rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)]">
//                     {/* Decorative elements */}
//                     <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2" />
//                     <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 blur-[100px] rounded-full translate-x-1/2 translate-y-1/2" />

//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         className="relative z-10"
//                     >
//                         <div className="inline-flex items-center justify-center p-5 bg-white/10 rounded-3xl mb-10 backdrop-blur-md border border-white/20">
//                             <Zap className="w-12 h-12 text-white fill-white/20" />
//                         </div>
//                         <h2 className="text-4xl md:text-8xl font-black text-white mb-10 tracking-tighter">
//                             The Future of <br /> Data starts here.
//                         </h2>
//                         <p className="text-white/70 text-xl md:text-2xl font-medium mb-16 max-w-3xl mx-auto leading-relaxed">
//                             Stop guessing. Start knowing. Join thousands of high-growth companies
//                             powering their next billion-dollar decisions with ADRO.
//                         </p>
//                         <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
//                             <Button size="lg" className="h-16 px-12 bg-white text-black hover:bg-white/90 font-black text-xl rounded-2xl shadow-2xl transition-all hover:scale-105 active:scale-95">
//                                 Start Free Trial
//                             </Button>
//                             <Button size="lg" variant="outline" className="h-16 px-12 border-white/20 bg-transparent text-white hover:bg-white/10 font-bold text-xl rounded-2xl backdrop-blur-sm transition-all">
//                                 Request Enterprise Demo
//                             </Button>
//                         </div>
//                     </motion.div>
//                 </div>

//                 <div className="mt-16 text-black/30 text-sm font-bold tracking-widest uppercase">
//                     No Credit Card Required • Pro Plan Trial Included • Cancel Anytime
//                 </div>
//             </div>
//         </section>
//     );
// };
