import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./CustomIcons";

export interface ProjectData {
  title: string;
  subtitle?: string;
  status?: string;
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  features: string[];
  github: string;
  live: string;
  future?: string[];
}

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  mockup: {
    kind: string;
    lines: number[];
    bars?: number[];
  };
}

export default function ProjectCard({ project, index, mockup }: ProjectCardProps) {
  const featured = index === 0;
  const isRightImage = index === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <div className="relative">
        {index === 2 && (
          <div className="absolute -inset-8 bg-[radial-gradient(50%_60%_at_50%_50%,rgba(176,141,87,0.05),transparent_70%)] rounded-[3rem] pointer-events-none" />
        )}

        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-24 items-center relative ${isRightImage ? "" : "lg:grid-flow-col-dense"}`}>
          {/* Content */}
          <div className={`space-y-8 ${isRightImage ? "" : "lg:col-start-2"}`}>
            <div className="flex items-center gap-5">
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="font-space-grotesk font-bold text-5xl lg:text-7xl text-[#B08D57]/10 group-hover:text-[#B08D57]/20 transition-colors duration-700"
              >
                {String(index + 1).padStart(2, "0")}
              </motion.span>
              <div className="space-y-2">
                {featured && (
                  <span className="inline-block px-3 py-1 text-[10px] font-semibold tracking-[0.15em] uppercase text-[#B08D57] bg-[#B08D57]/5 rounded-full">
                    Featured
                  </span>
                )}
                {project.status && (
                  <span className="inline-block px-3 py-1 text-[10px] font-semibold tracking-[0.15em] uppercase text-amber-600 bg-amber-50 rounded-full">
                    {project.status}
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className={`font-space-grotesk font-bold tracking-tight text-[#2D2926] ${featured ? "text-4xl lg:text-5xl" : "text-3xl lg:text-4xl"}`}>
                {project.title}
              </h3>
              {project.subtitle && (
                <p className="text-[#B08D57] font-medium text-lg">{project.subtitle}</p>
              )}
            </div>

            <p className="text-[#6B645C] leading-relaxed text-lg max-w-xl">{project.description}</p>

            <div className="space-y-4">
              <h4 className="text-xs font-semibold tracking-[0.25em] uppercase text-[#B08D57]">Tech Stack</h4>
              <div className="flex flex-wrap gap-2.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-1.5 text-xs font-medium text-[#6B645C] bg-white/70 backdrop-blur border border-[#B08D57]/10 rounded-full shadow-[0_2px_10px_rgba(176,141,87,0.05)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-semibold tracking-[0.25em] uppercase text-[#B08D57]">Key Features</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2.5 text-sm text-[#6B645C]">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#B08D57]/60 shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-semibold tracking-[0.25em] uppercase text-[#B08D57]">Problem & Solution</h4>
              <div className="space-y-2.5">
                <p className="text-sm text-[#6B645C]">
                  <span className="font-semibold text-[#2D2926]">Problem — </span>{project.problem}
                </p>
                <p className="text-sm text-[#6B645C]">
                  <span className="font-semibold text-[#2D2926]">Solution — </span>{project.solution}
                </p>
              </div>
            </div>

            {project.future && (
              <div className="space-y-3">
                <h4 className="text-xs font-semibold tracking-[0.25em] uppercase text-[#B08D57]">Future Improvements</h4>
                <div className="flex flex-wrap gap-2">
                  {project.future.map((item) => (
                    <span key={item} className="px-3 py-1.5 text-xs text-[#6B645C] bg-[#F5EFE6] rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center gap-6 pt-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link flex items-center gap-2 text-sm font-semibold text-[#2D2926] hover:text-[#B08D57] transition-colors duration-300"
              >
                <GithubIcon size={17} />
                GitHub
                <span className="block max-w-0 overflow-hidden transition-all duration-500 group-hover/link:max-w-8 group-hover/link:ml-1 text-[#B08D57]">
                  →
                </span>
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link flex items-center gap-2 text-sm font-semibold text-[#2D2926] hover:text-[#B08D57] transition-colors duration-300"
              >
                <ExternalLink size={16} />
                Live Demo
                <span className="block max-w-0 overflow-hidden transition-all duration-500 group-hover/link:max-w-8 group-hover/link:ml-1 text-[#B08D57]">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Mockup */}
          <div className={`relative ${isRightImage ? "" : "lg:col-start-1"}`}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="absolute -inset-6 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(176,141,87,0.08),transparent_70%)] blur-2xl group-hover:opacity-150 transition-opacity duration-700" />

              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className={`relative rounded-2xl bg-white border border-[#B08D57]/10 shadow-[0_30px_60px_rgba(176,141,87,0.12)] overflow-hidden ${
                  featured ? "lg:-rotate-2" : "lg:rotate-1"
                }`}
              >
                <div className="flex items-center gap-2 px-4 py-3 border-b border-[#F5EFE6] bg-[#FAF7F2]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                  <div className="flex-1 mx-4 h-5 rounded-md bg-[#F5EFE6] flex items-center px-2">
                    <span className="w-16 h-1.5 rounded bg-[#B08D57]/20" />
                  </div>
                </div>

                <div className={`p-5 ${featured ? "h-72 lg:h-96" : "h-56 lg:h-72"} bg-gradient-to-br from-[#FAF7F2] via-white to-[#F5EFE6]`}>
                  {mockup.kind === "dashboard" && (
                    <div className="h-full grid grid-cols-3 gap-4">
                      <div className="col-span-2 space-y-3">
                        <div className="flex items-end gap-2 h-2/5">
                          {mockup.bars!.map((b, i) => (
                            <div key={i} className="flex-1 rounded-md bg-[#B08D57]/10" style={{ height: `${b * 0.45}%` }} />
                          ))}
                        </div>
                        <div className="space-y-2">
                          {mockup.lines.slice(0, 3).map((w, i) => (
                            <div key={i} className="h-2 rounded bg-[#B08D57]/[0.07]" style={{ width: `${w}%` }} />
                          ))}
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="rounded-xl bg-[#B08D57]/5 p-3 space-y-2">
                          <div className="h-2 w-2/3 rounded bg-[#B08D57]/20" />
                          <div className="h-4 w-1/2 rounded bg-[#B08D57]/40" />
                        </div>
                        <div className="rounded-xl bg-[#C7A97B]/5 p-3 space-y-2">
                          <div className="h-2 w-2/3 rounded bg-[#C7A97B]/20" />
                          <div className="h-4 w-1/3 rounded bg-[#C7A97B]/40" />
                        </div>
                      </div>
                    </div>
                  )}
                  {mockup.kind === "browser" && (
                    <div className="h-full space-y-4">
                      <div className="flex gap-4">
                        <div className="w-1/3 rounded-xl bg-[#B08D57]/5 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-xl bg-[#B08D57]/10" />
                        </div>
                        <div className="flex-1 space-y-2.5">
                          {mockup.lines.map((w, i) => (
                            <div key={i} className="h-2.5 rounded bg-[#B08D57]/[0.08]" style={{ width: `${w}%` }} />
                          ))}
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-3 flex-1 min-h-0">
                        {[0, 1, 2].map((i) => (
                          <div key={i} className="rounded-xl bg-[#C7A97B]/5" />
                        ))}
                      </div>
                    </div>
                  )}
                  {mockup.kind === "split" && (
                    <div className="h-full grid grid-cols-2 gap-4">
                      <div className="rounded-xl bg-[#B08D57]/5 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-[#B08D57]/10" />
                      </div>
                      <div className="space-y-3 py-2">
                        {mockup.lines.map((w, i) => (
                          <div key={i} className="h-2.5 rounded bg-[#B08D57]/[0.08]" style={{ width: `${w}%` }} />
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
