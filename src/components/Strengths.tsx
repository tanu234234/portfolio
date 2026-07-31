import { motion } from "framer-motion";
import { MessageSquareText, Zap, Puzzle, Compass, Palette, RefreshCcw, Users, BookOpenCheck } from "lucide-react";

const strengths = [
  { name: "Communication", desc: "Clear ideas, clear code", icon: MessageSquareText },
  { name: "Quick Learner", desc: "Fast on new technologies", icon: Zap },
  { name: "Problem Solving", desc: "Breaking down complexity", icon: Puzzle },
  { name: "Curiosity", desc: "Always asking why", icon: Compass },
  { name: "Creativity", desc: "Design meets function", icon: Palette },
  { name: "Adaptability", desc: "Comfortable with change", icon: RefreshCcw },
  { name: "Team Collaboration", desc: "Build together, grow together", icon: Users },
  { name: "Continuous Learning", desc: "Improving every single day", icon: BookOpenCheck },
];

export default function Strengths() {
  return (
    <section className="relative py-24 lg:py-40">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_85%_80%,rgba(176,141,87,0.05),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 lg:mb-28"
        >
          <p className="text-xs font-medium tracking-[0.35em] uppercase text-[#B08D57] mb-4">Strengths</p>
          <h2 className="text-4xl lg:text-6xl font-bold font-space-grotesk tracking-tight text-[#2D2926]">
            How I Work
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {strengths.map((strength, index) => {
            const Icon = strength.icon;
            const offsets = [0, 30, -20, 45, 15, -30, 25, 0];

            return (
              <motion.div
                key={strength.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`${index % 4 === 1 || index % 4 === 2 ? "lg:mt-10" : ""}`}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  animate={{ y: [offsets[index] * 0.3, offsets[index] * 0.3 + 5, offsets[index] * 0.3] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                  className="p-6 lg:p-7 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/70 shadow-[0_8px_30px_rgba(176,141,87,0.06)] hover:shadow-[0_15px_40px_rgba(176,141,87,0.12)] hover:border-[#B08D57]/20 transition-all duration-500 group cursor-default"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#B08D57]/5 flex items-center justify-center mb-5 group-hover:bg-[#B08D57]/10 group-hover:scale-110 transition-all duration-500">
                    <Icon size={22} className="text-[#B08D57]" />
                  </div>
                  <h3 className="font-space-grotesk font-semibold text-[#2D2926] mb-1">{strength.name}</h3>
                  <p className="text-xs lg:text-sm text-[#6B645C] leading-relaxed">{strength.desc}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
