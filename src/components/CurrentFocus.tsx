import { motion } from "framer-motion";
import { currentLearning, currentBuilding } from "../data/portfolio";
import { BookOpen, Code, Target } from "lucide-react";

const focusCards = [
  {
    title: "Currently Learning",
    icon: BookOpen,
    items: currentLearning.map((item) => ({ label: item, type: "bullet" as const })),
  },
  {
    title: "Currently Building",
    icon: Code,
    items: currentBuilding.map((item) => ({ label: item.name, desc: item.desc, type: "detail" as const })),
  },
];

export default function CurrentFocus() {
  return (
    <section className="relative py-24 lg:py-40">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B08D57]/15 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 lg:mb-28"
        >
          <p className="text-xs font-medium tracking-[0.35em] uppercase text-[#B08D57] mb-4">Current Focus</p>
          <h2 className="text-4xl lg:text-6xl font-bold font-space-grotesk tracking-tight text-[#2D2926]">
            What I'm Doing <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B08D57] to-[#C7A97B]">Now</span>
          </h2>
          <p className="mt-6 text-lg text-[#6B645C] max-w-2xl">
            Preparing for Software Engineering Placements <span className="text-[#B08D57] font-medium">(2027)</span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {focusCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="p-8 lg:p-10 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/70 shadow-[0_8px_30px_rgba(176,141,87,0.06)] hover:shadow-[0_20px_50px_rgba(176,141,87,0.12)] transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#B08D57]/5 flex items-center justify-center mb-8 group-hover:bg-[#B08D57]/10">
                  <Icon size={24} className="text-[#B08D57]" />
                </div>
                <h3 className="text-lg font-semibold font-space-grotesk text-[#2D2926] mb-6">{card.title}</h3>
                <ul className="space-y-4">
                  {card.items.map((item) => (
                    <li key={item.label} className="text-[#6B645C]">
                      {item.type === "bullet" ? (
                        <span className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B08D57]" />
                          <span className="font-medium text-[#2D2926]">{item.label}</span>
                        </span>
                      ) : (
                        <span className="block">
                          <span className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#B08D57]" />
                            <span className="font-medium text-[#2D2926]">{item.label}</span>
                          </span>
                          {"desc" in item && item.desc && (
                            <span className="block text-sm mt-1.5 ml-4 text-[#6B645C]">{item.desc}</span>
                          )}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.24, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6 }}
            className="p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-[#B08D57]/5 via-white/70 to-[#C7A97B]/5 backdrop-blur-xl border border-[#B08D57]/15 shadow-[0_8px_30px_rgba(176,141,87,0.08)] hover:shadow-[0_20px_50px_rgba(176,141,87,0.15)] transition-all duration-500"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#B08D57]/10 flex items-center justify-center mb-8">
              <Target size={24} className="text-[#B08D57]" />
            </div>
            <h3 className="text-lg font-semibold font-space-grotesk text-[#2D2926] mb-6">Current Goal</h3>
            <p className="text-[#6B645C] leading-relaxed text-lg">
              Become a <span className="text-[#B08D57] font-medium">Software Engineer</span> capable of building impactful and scalable software.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
