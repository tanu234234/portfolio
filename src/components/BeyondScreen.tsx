import { motion } from "framer-motion";
import { Paintbrush, BookMarked, Mic, Users, Feather } from "lucide-react";

const hobbies = [
  { title: "Painting", icon: Paintbrush },
  { title: "Sketching", icon: Feather },
  { title: "Reading Novels", icon: BookMarked },
  { title: "Singing", icon: Mic },
  { title: "Dancing", icon: Feather },
  { title: "Helping My Siblings Learn", icon: Users },
];

export default function BeyondScreen() {
  return (
    <section className="relative py-24 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(50%_45%_at_50%_45%,rgba(176,141,87,0.05),transparent_75%)]" />
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 lg:mb-28"
        >
          <p className="text-xs font-medium tracking-[0.35em] uppercase text-[#B08D57] mb-4">Beyond the Screen</p>
          <h2 className="text-4xl lg:text-6xl font-bold font-space-grotesk tracking-tight text-[#2D2926]">
            Life Outside Code
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Center editorial paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative text-center px-4 lg:px-16 py-16 lg:py-24"
          >
            <motion.span
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="font-space-grotesk text-7xl lg:text-8xl leading-none text-[#B08D57]/10 select-none block"
            >
              "
            </motion.span>
            <p className="text-xl lg:text-2xl leading-relaxed text-[#2D2926] font-medium -mt-4">
              Outside coding, I enjoy expressing creativity through <span className="text-[#B08D57]">painting and sketching</span>, getting lost in <span className="text-[#B08D57]">novels</span>, <span className="text-[#B08D57]">singing</span>, <span className="text-[#B08D57]">dancing</span>, and <span className="text-[#B08D57]">helping my siblings</span> with their homework.
            </p>
            <p className="mt-8 text-lg text-[#6B645C] leading-relaxed max-w-2xl mx-auto">
              These interests remind me that creativity, patience, and continuous learning are just as valuable beyond technology as they are within it.
            </p>
          </motion.div>

          {/* Hobbies grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {hobbies.map((hobby, index) => {
              const Icon = hobby.icon;
              return (
                <motion.div
                  key={hobby.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.07, duration: 0.6 }}
                  className={`${index % 2 === 1 ? "lg:mt-8" : ""}`}
                >
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="group p-6 lg:p-8 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/70 shadow-[0_8px_30px_rgba(176,141,87,0.05)] hover:shadow-[0_15px_40px_rgba(176,141,87,0.1)] hover:border-[#B08D57]/15 transition-all duration-500 text-center cursor-default"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#F5EFE6] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#B08D57]/5 group-hover:scale-110 transition-all duration-500">
                      <Icon size={22} className="text-[#6B645C] group-hover:text-[#B08D57] transition-colors duration-500" />
                    </div>
                    <h3 className="font-space-grotesk font-semibold text-[#2D2926] text-sm lg:text-base">{hobby.title}</h3>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
