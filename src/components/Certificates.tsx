import { motion } from "framer-motion";
import { Award, BadgeCheck, BrainCircuit, Trophy, ScrollText } from "lucide-react";

const certificates = [
  { name: "Microsoft AI Skills Fest", org: "Microsoft", icon: BrainCircuit },
  { name: "CODTECH IT Solutions", org: "4 Week Internship", icon: BadgeCheck },
  { name: "Be10X AI Workshop", org: "Artificial Intelligence", icon: Award },
  { name: "Innovathon", org: "Hackathon Participant", icon: Trophy },
  { name: "National Financial Literacy Quiz 2026", org: "NISM & SEBI", icon: ScrollText },
];

const sizes = [
  "lg:col-span-1 lg:row-span-2",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-2",
  "lg:col-span-2",
];

export default function Certificates() {
  return (
    <section id="certificates" className="relative py-24 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(45%_45%_at_15%_20%,rgba(176,141,87,0.05),transparent_70%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B08D57]/15 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 lg:mb-28"
        >
          <p className="text-xs font-medium tracking-[0.35em] uppercase text-[#B08D57] mb-4">Certificates</p>
          <h2 className="text-4xl lg:text-6xl font-bold font-space-grotesk tracking-tight text-[#2D2926]">
            Recognition
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:grid-rows-2 auto-rows-[minmax(140px,auto)]">
          {certificates.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`${sizes[index]} group relative overflow-hidden rounded-2xl`}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  className="relative h-full p-7 rounded-2xl bg-gradient-to-br from-white via-[#FAF7F2] to-[#F5EFE6] border border-[#B08D57]/10 shadow-[0_8px_25px_rgba(176,141,87,0.05)] hover:shadow-[0_20px_50px_rgba(176,141,87,0.12)] transition-all duration-500 overflow-hidden"
                >
                  {/* Hover glow */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#B08D57]/5 blur-2xl group-hover:bg-[#B08D57]/15 transition-colors duration-700" />
                  <div className="absolute -bottom-10 -left-10 w-28 h-28 rounded-full bg-[#C7A97B]/5 blur-2xl group-hover:bg-[#C7A97B]/15 transition-colors duration-700" />

                  <div className="relative flex items-start justify-between mb-8">
                    <div className="w-11 h-11 rounded-xl bg-[#B08D57]/5 flex items-center justify-center group-hover:bg-[#B08D57] group-hover:text-white transition-all duration-500 group-hover:scale-105">
                      <Icon size={20} className="text-[#B08D57] group-hover:text-white transition-colors duration-500" />
                    </div>
                    <span className="text-3xl font-space-grotesk font-bold text-[#B08D57]/10 group-hover:text-[#B08D57]/20 transition-colors duration-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className={`relative font-space-grotesk font-semibold text-[#2D2926] leading-snug ${index === 0 || index === 4 ? "text-lg lg:text-xl" : "text-base lg:text-lg"}`}>
                    {cert.name}
                  </h3>
                  <p className="relative mt-2 text-xs font-medium text-[#B08D57] uppercase tracking-wide">{cert.org}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
