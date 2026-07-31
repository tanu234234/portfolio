import { motion } from "framer-motion";
import { GraduationCap, Sparkles } from "lucide-react";

interface TimelineItem {
  label: string;
  value: string;
  detail?: string;
  isCurrent?: boolean;
}

const timeline: TimelineItem[] = [
  { label: "10th Standard", value: "86.7%" },
  { label: "Pre-University (PCMB)", value: "86.66%" },
  {
    label: "Bachelor of Engineering",
    value: "Computer Science and Business Systems",
    detail: "CGPA 8.65 / 10 · Expected Graduation 2027",
    isCurrent: true,
  },
];

const story = [
  "My academic journey began in the ",
  "PCMB",
  " stream, where I developed strong analytical and logical thinking skills.",
  " As I explored technology, I discovered my passion for ",
  "Computer Science",
  " and Business Systems. Since then, I have focused on learning ",
  "Java",
  ", Data Structures & Algorithms, Web Development, and building practical software projects.",
];

export default function Education() {
  return (
    <section id="education" className="relative py-24 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_90%_10%,rgba(176,141,87,0.05),transparent_70%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B08D57]/15 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 lg:mb-32"
        >
          <p className="text-xs font-medium tracking-[0.35em] uppercase text-[#B08D57] mb-4">Education</p>
          <h2 className="text-4xl lg:text-6xl font-bold font-space-grotesk tracking-tight text-[#2D2926]">
            Academic Journey
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Editorial story */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="font-space-grotesk text-8xl lg:text-9xl leading-none text-[#B08D57]/10 select-none"
              >
                "
              </motion.div>

              <p className="text-xl lg:text-2xl leading-relaxed text-[#2D2926] font-medium -mt-6">
                {story.map((part, i) => {
                  const highlight = i % 2 === 1;
                  return highlight ? (
                    <span key={i} className="text-[#B08D57]">{part}</span>
                  ) : (
                    <span key={i}>{part}</span>
                  );
                })}
              </p>

              <div className="mt-10 flex items-center gap-4 text-sm text-[#6B645C]">
                <GraduationCap size={18} className="text-[#B08D57]" />
                <span>K S School of Engineering and Management · VTU Affiliated</span>
              </div>
            </motion.div>
          </div>

          {/* Vertical timeline */}
          <div className="lg:col-span-6">
            <div className="relative">
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute left-[7px] top-2 bottom-2 w-[2px] origin-top bg-gradient-to-b from-[#B08D57] via-[#C7A97B]/40 to-[#B08D57]/10 rounded-full"
              />

              <div className="space-y-16">
                {timeline.map((item, index) => (
                  <div key={item.label} className="relative pl-10">
                    {/* Glowing node */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2, type: "spring", stiffness: 300, damping: 20 }}
                      className="absolute left-0 top-1.5"
                    >
                      <span className="relative flex w-[16px] h-[16px]">
                        {item.isCurrent && (
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B08D57] opacity-30" />
                        )}
                        <span className={`relative inline-flex rounded-full w-full h-full ${item.isCurrent ? "bg-[#B08D57] ring-4 ring-[#B08D57]/15" : "bg-white border-2 border-[#B08D57]"}`} />
                      </span>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <p className="text-sm font-semibold tracking-wide uppercase text-[#6B645C]">{item.label}</p>
                        {item.isCurrent && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-[10px] font-semibold text-[#B08D57] bg-[#B08D57]/5 rounded-full">
                            <Sparkles size={10} />
                            Current
                          </span>
                        )}
                      </div>
                      <p className="font-space-grotesk font-bold text-2xl lg:text-3xl text-[#2D2926]">{item.value}</p>
                      {item.detail && (
                        <p className="mt-2 text-sm text-[#6B645C]">{item.detail}</p>
                      )}
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
