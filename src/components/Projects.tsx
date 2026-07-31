import { motion } from "framer-motion";
import { projects } from "../data/portfolio";
import ProjectCard, { type ProjectData } from "./ProjectCard";

const mockupStyles = [
  { kind: "dashboard", lines: [65, 42, 80, 35, 58], bars: [70, 45, 90, 60] },
  { kind: "browser", lines: [75, 50, 88, 40] },
  { kind: "split", lines: [60, 38, 72] },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 lg:py-40">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B08D57]/15 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24 lg:mb-40"
        >
          <p className="text-xs font-medium tracking-[0.35em] uppercase text-[#B08D57] mb-4">Projects</p>
          <h2 className="text-4xl lg:text-6xl font-bold font-space-grotesk tracking-tight text-[#2D2926]">
            Selected Work
          </h2>
        </motion.div>

        <div className="space-y-32 lg:space-y-56">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project as ProjectData}
              index={index}
              mockup={mockupStyles[index % mockupStyles.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
