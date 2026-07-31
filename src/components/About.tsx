import { motion } from "framer-motion";
import { aboutParagraph, drives, belief } from "../data/portfolio";
import { Brain, Lightbulb, Target, Sparkles, HeartHandshake } from "lucide-react";

const driveIcons = [Brain, Lightbulb, Target, Sparkles, HeartHandshake];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(50%_40%_at_80%_20%,rgba(176,141,87,0.05),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_10%_70%,rgba(199,169,123,0.04),transparent_70%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B08D57]/15 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 lg:mb-28"
        >
          <p className="text-xs font-medium tracking-[0.35em] uppercase text-[#B08D57] mb-4">About</p>
          <h2 className="text-4xl lg:text-6xl font-bold font-space-grotesk tracking-tight text-[#2D2926]">
            Turning Curiosity <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B08D57] to-[#C7A97B]">Into Code</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-12"
            >
              <div>
                <h3 className="text-sm font-semibold tracking-[0.25em] uppercase text-[#B08D57] mb-6">Who I Am</h3>
                <p className="text-xl lg:text-2xl leading-relaxed text-[#2D2926] font-medium">
                  {aboutParagraph.split("passionate about")[0]}passionate about{" "}
                  <span className="text-[#B08D57]">Java</span>,{" "}
                  <span className="text-[#B08D57]">Data Structures & Algorithms</span>, and{" "}
                  <span className="text-[#B08D57]">Web Development</span>. I enjoy solving real-world problems through technology while continuously improving my technical skills by building practical projects.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold tracking-[0.25em] uppercase text-[#B08D57] mb-6">What Drives Me</h3>
                <div className="flex flex-wrap gap-3">
                  {drives.map((drive, i) => {
                    const Icon = driveIcons[i];
                    return (
                      <motion.div
                        key={drive}
                        whileHover={{ y: -4 }}
                        className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/60 backdrop-blur border border-[#B08D57]/10 shadow-[0_4px_15px_rgba(176,141,87,0.05)] hover:shadow-[0_8px_25px_rgba(176,141,87,0.1)] hover:border-[#B08D57]/20 transition-all duration-500"
                      >
                        <Icon size={16} className="text-[#B08D57] shrink-0" />
                        <span className="text-sm font-medium text-[#2D2926]">{drive}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="lg:sticky lg:top-32"
            >
              <div className="relative p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-white to-[#F5EFE6] border border-[#B08D57]/10 shadow-[0_20px_60px_rgba(176,141,87,0.08)] overflow-hidden">
                <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-[#B08D57]/5 blur-2xl" />
                <motion.span
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="font-space-grotesk text-8xl leading-none text-[#B08D57]/10 select-none block"
                >
                  "
                </motion.span>
                <p className="text-lg leading-relaxed text-[#6B645C] -mt-4">
                  {belief}
                </p>
                <div className="mt-8 pt-6 border-t border-[#B08D57]/10">
                  <p className="font-space-grotesk font-bold text-[#2D2926]">Tanushree K A</p>
                  <p className="text-sm text-[#6B645C]">CSBS Undergraduate · Class of 2027</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
