// "use client";

// import { motion } from "framer-motion";
// import { LineChart, Megaphone, DollarSign as FinanceIcon, Settings } from "lucide-react";
// import { SectionTitle } from "../SectionTitle";

// export const Value = () => (
//   <div className="py-24 bg-white">
//     <div className="container mx-auto px-4 max-w-6xl">
//       <SectionTitle title="Where ADRO Creates Value" subtitle="Unlock AI-powered analytics and insights across every department." />
//       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {[
//           { icon: LineChart, title: "Sales Analytics", desc: "Understand revenue trends and product performance." },
//           { icon: Megaphone, title: "Marketing Analytics", desc: "Track campaign performance and customer engagement." },
//           { icon: FinanceIcon, title: "Financial Analytics", desc: "Monitor financial KPIs and reporting metrics." },
//           { icon: Settings, title: "Operational Analytics", desc: "Identify inefficiencies and optimize processes." }
//         ].map((item, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: i * 0.1 }}
//             className="group"
//           >
//             <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 border border-gray-100">
//               <item.icon size={28} className="text-black" />
//             </div>
//             <h4 className="text-xl font-black text-gray-900 mb-3 tracking-tight">{item.title}</h4>
//             <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   </div>
// );
