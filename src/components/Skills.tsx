import { motion } from "framer-motion";
import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#B08D57] mb-4">Skills</p>
          <h2 className="text-3xl lg:text-5xl font-bold font-space-grotesk tracking-tight text-[#2D2926]">
            Technologies & Tools
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group p-6 rounded-2xl bg-white shadow-[0_2px_20px_rgba(176,141,87,0.06)] border border-[#E7DED2] hover:shadow-[0_8px_30px_rgba(176,141,87,0.1)] hover:border-[#B08D57]/15 transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#B08D57]/5 flex items-center justify-center group-hover:bg-[#B08D57]/10 transition-colors duration-300">
                    <Icon size={20} className="text-[#B08D57]" />
                  </div>
                  <h3 className="text-base font-semibold font-space-grotesk text-[#2D2926]">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-xs font-medium text-[#6B645C] bg-[#F5EFE6] rounded-lg"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
