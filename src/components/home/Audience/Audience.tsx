// "use client";

// import { motion } from "framer-motion";
// import { SectionTitle } from "../SectionTitle";

// export const Audience = () => (
//   <div className="py-24 bg-[#fafafa]">
//     <div className="container mx-auto px-4 max-w-6xl">
//       <div className="flex flex-col items-center text-center">
//         <SectionTitle title="Built for Modern Data Teams" subtitle="Empowering everyone to turn data into decisions quickly." />
//         <div className="flex flex-wrap justify-center gap-3 max-w-4xl">
//           {[
//             "Startups & Founders",
//             "Data Analysts",
//             "Product Teams",
//             "Business Leaders",
//             "Enterprise Data Teams"
//           ].map((item, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.05 }}
//               className="px-6 py-3 bg-white border border-gray-200 rounded-full font-black text-gray-900 shadow-sm hover:border-black transition-colors cursor-default"
//             >
//               {item}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   </div>
// );