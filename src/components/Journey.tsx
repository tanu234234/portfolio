import { motion } from "framer-motion";
import { Coffee, Code, Database, SquareCode, Server, Rocket } from "lucide-react";

const journeySteps = [
  { label: "Java", desc: "Core language foundation", icon: Coffee },
  { label: "DSA", desc: "Strengthening problem solving", icon: Code },
  { label: "SQL", desc: "Databases & queries", icon: Database },
  { label: "JavaScript", desc: "Modern web interactivity", icon: SquareCode },
  { label: "Backend Development", desc: "APIs, servers & logic", icon: Server },
  { label: "Placement Preparation", desc: "Ready for 2027", icon: Rocket },
];

export default function Journey() {
  return (
    <section id="journey" className="relative py-24 lg:py-40">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_10%_30%,rgba(176,141,87,0.04),transparent_70%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B08D57]/15 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 lg:mb-28"
        >
          <p className="text-xs font-medium tracking-[0.35em] uppercase text-[#B08D57] mb-4">My Journey</p>
          <h2 className="text-4xl lg:text-6xl font-bold font-space-grotesk tracking-tight text-[#2D2926]">
            The Path Forward
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connector line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute hidden md:block left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] origin-top bg-gradient-to-b from-[#B08D57] via-[#C7A97B]/40 to-transparent rounded-full"
          />

          <div className="grid md:grid-cols-2 gap-y-20 md:gap-x-24">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative ${isLeft ? "md:text-right" : "md:text-left"} ${isLeft ? "md:justify-self-end" : "md:justify-self-start"} ${isLeft ? "md:w-[calc(100%-3rem)]" : "md:w-[calc(100%-3rem)]"}`}
                >
                  {/* Node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 250, damping: 18 }}
                    className={`absolute top-1/2 -translate-y-1/2 hidden md:flex ${isLeft ? "-right-12" : "-left-12"} w-6 h-6 items-center justify-center`}
                  >
                    <span className="w-3 h-3 rounded-full bg-[#B08D57] ring-4 ring-[#B08D57]/15" />
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 250, damping: 20 }}
                    className={`inline-flex md:flex ${isLeft ? "md:flex-row-reverse md:items-center md:gap-6" : "md:flex-row md:items-center md:gap-6"} items-center gap-4`}
                  >
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white border border-[#B08D57]/10 shadow-[0_8px_25px_rgba(176,141,87,0.08)] flex items-center justify-center group-hover:shadow-[0_12px_35px_rgba(176,141,87,0.15)] transition-all duration-500">
                      <Icon size={24} className="text-[#B08D57]" />
                    </div>
                    <div className={`${isLeft ? "md:text-right" : "md:text-left"}`}>
                      <h3 className="font-space-grotesk font-bold text-xl text-[#2D2926]">{step.label}</h3>
                      <p className="text-sm text-[#6B645C] mt-0.5">{step.desc}</p>
                    </div>
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
