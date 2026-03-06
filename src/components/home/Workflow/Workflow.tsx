// "use client";

// import { motion } from "framer-motion";
// import { LogIn, Upload, BarChart3, Search, Download, Database } from "lucide-react";

// const steps = [
//     {
//         icon: LogIn,
//         title: "Login",
//         description: "Sign in to your account to access your personalized data workspace.",
//     },
//     {
//         icon: Upload,
//         title: "Upload Data",
//         description: "Upload your CSV or Excel files. The system automatically cleans and processes your data.",
//     },
//     {
//         icon: Search,
//         title: "Ask Queries",
//         description: "Ask questions in natural language and get instant insights from your data.",
//     },
//     {
//         icon: Database,
//         title: "Dataset Info",
//         description: "View dataset metadata, column stats, and data quality metrics.",
//     },
//     {
//         icon: BarChart3,
//         title: "Plot Dashboards",
//         description: "Create interactive visualizations and charts from your data instantly.",
//     },
//     {
//         icon: Download,
//         title: "Export",
//         description: "Export your dashboards and insights in multiple formats.",
//     },
// ];

// export const Workflow = () => {
//     return (
//         <section className="py-16 bg-white border-t border-black/5">
//             <div className="container mx-auto px-4">
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.6 }}
//                     className="max-w-3xl mx-auto text-center mb-10"
//                 >
//                     <h2 className="text-xl md:text-2xl font-black text-black mb-3 tracking-tight">
//                         How It Works
//                     </h2>
//                     <p className="text-black/50 text-sm font-medium">
//                         Login → Upload Data → Dashboard → Export
//                     </p>
//                 </motion.div>

//                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 max-w-5xl mx-auto">
//                     {steps.map((step, i) => (
//                         <motion.div
//                             key={i}
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.5, delay: i * 0.1 }}
//                             className="text-center"
//                         >
//                             <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-black/5 flex items-center justify-center">
//                                 <step.icon size={18} className="text-black/60" />
//                             </div>
//                             <div className="text-xs font-bold text-black mb-1">{step.title}</div>
//                             <p className="text-[9px] text-black/40 leading-tight">{step.description}</p>
//                         </motion.div>
//                     ))}
//                 </div>

//                 <motion.div
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.6 }}
//                     className="flex justify-center mt-10"
//                 >
//                     <div className="flex items-center gap-2 text-[10px] font-bold text-black/30 uppercase tracking-widest">
//                         <span>Login</span>
//                         <span>→</span>
//                         <span>Data Upload</span>
//                         <span>→</span>
//                         <span>Dashboard</span>
//                         <span>→</span>
//                         <span>Export</span>
//                     </div>
//                 </motion.div>
//             </div>
//         </section>
//     );
// };
