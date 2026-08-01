import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Download, ChevronDown } from "lucide-react";
import { socialLinks } from "../data/portfolio";
import { GithubIcon, LinkedinIcon } from "./CustomIcons";
import MagneticButton from "./MagneticButton";
import { useState } from "react";

const headline = ["Building Software.", "Solving Problems.", "Learning Every Day."];

const badges = [
  { label: "Java", delay: 0 },
  { label: "DSA", delay: 1.2 },
  { label: "Learning SQL", delay: 2.4 },
  { label: "2027 Graduate", delay: 3.6 },
];

const socials = [
  { href: socialLinks.github, label: "GitHub", Icon: GithubIcon },
  { href: socialLinks.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: socialLinks.email, label: "Email", Icon: Mail },
];

export default function Hero() {
  const { scrollY } = useScroll();
  const portraitY = useTransform(scrollY, [0, 600], [0, 80]);
  const contentY = useTransform(scrollY, [0, 600], [0, -40]);
  const [resumeNote, setResumeNote] = useState(false);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleResumeClick = () => {
    setResumeNote(true);
    window.setTimeout(() => setResumeNote(false), 3500);
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden noise">
      <div className="absolute inset-0 grid-bg" />

      {/* Radial gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_85%_20%,rgba(176,141,87,0.07),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(50%_40%_at_10%_85%,rgba(199,169,123,0.05),transparent_70%)]" />

      {/* Floating blurred circles */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-[#B08D57]/[0.06] blur-3xl"
        style={{ top: "10%", right: "-5%" }}
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-[#C7A97B]/[0.05] blur-3xl"
        style={{ bottom: "5%", left: "30%" }}
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Vertical social rail */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-6"
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-[#B08D57]/30" />
        {socials.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={label}
            className="text-[#6B645C] hover:text-[#B08D57] transition-all duration-300 hover:scale-110"
          >
            <Icon size={16} />
          </a>
        ))}
        <div className="w-px h-16 bg-gradient-to-b from-[#B08D57]/30 to-transparent" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:pl-32 lg:pr-16 pt-36 lg:pt-48 min-h-screen flex items-center">
        <div className="w-full grid lg:grid-cols-12 gap-12 lg:gap-16 items-center pb-24">
          {/* Editorial content */}
          <motion.div style={{ y: contentY }} className="lg:col-span-7 space-y-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs font-medium tracking-[0.35em] uppercase text-[#B08D57]"
            >
              Hello, I'm
            </motion.p>

            <h1 className="font-space-grotesk font-bold tracking-tight leading-[1.02] text-[#2D2926] -ml-1 lg:-ml-3">
              <motion.span
                initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="block whitespace-nowrap text-[clamp(2.2rem,7.2vw,6.75rem)]"
              >
                Tanushree{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B08D57] to-[#C7A97B]">
                  K A
                </span>
              </motion.span>
            </h1>

            {/* Headline staggered */}
            <div className="space-y-2 pt-2">
              {headline.map((line, i) => (
                <motion.p
                  key={line}
                  initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.7 + i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="text-xl lg:text-2xl font-medium text-[#6B645C]"
                >
                  {line}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="space-y-1"
            >
              <p className="text-base text-[#6B645C]">Computer Science and Business Systems Undergraduate</p>
              <p className="text-base text-[#6B645C]">
                Class of <span className="text-[#B08D57] font-medium">2027</span>
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.25, duration: 0.8 }}
              className="text-[#6B645C] leading-relaxed max-w-xl"
            >
              Computer Science and Business Systems undergraduate focused on mastering Java, Data Structures & Algorithms, and building real-world software projects through continuous learning and curiosity.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="flex flex-wrap items-center gap-5"
            >
              <MagneticButton
                onClick={scrollToProjects}
                className="px-8 py-4 bg-[#8A6A44] text-white rounded-full text-sm font-semibold shadow-[0_8px_30px_rgba(138,106,68,0.28)] hover:bg-[#7A5B39] hover:shadow-[0_12px_40px_rgba(138,106,68,0.38)] hover:scale-[1.03] transition-all duration-500 cursor-pointer"
              >
                Explore Projects
              </MagneticButton>

              <MagneticButton
                onClick={handleResumeClick}
                className="px-8 py-4 bg-white/70 backdrop-blur-xl border border-[#E7DED2] shadow-[0_8px_30px_rgba(138,106,68,0.08)] text-[#2D2926] rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-white hover:border-[#B08D57]/40 hover:scale-[1.03] transition-all duration-500 cursor-pointer"
              >
                <Download size={16} />
                Download Resume
              </MagneticButton>

              <motion.p
                initial={false}
                animate={{ opacity: resumeNote ? 1 : 0, y: resumeNote ? 0 : 6 }}
                transition={{ duration: 0.3 }}
                className="text-sm text-[#6B645C] font-medium"
                aria-live="polite"
              >
                {resumeNote && "Resume will be uploaded shortly."}
              </motion.p>
            </motion.div>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-4 pt-8">
              {badges.map((badge) => (
                <motion.span
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.8 + badge.delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-flex"
                >
                  <motion.span
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: badge.delay }}
                    className="inline-flex"
                  >
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-xl border border-[#B08D57]/15 text-xs font-semibold text-[#2D2926] shadow-[0_4px_20px_rgba(176,141,87,0.1)] whitespace-nowrap transition-all duration-300 hover:bg-white hover:border-[#B08D57]/40 hover:scale-[1.05] hover:shadow-[0_8px_24px_rgba(176,141,87,0.18)] cursor-default">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B08D57]" />
                      {badge.label}
                    </span>
                  </motion.span>
                </motion.span>
              ))}
            </div>

            {/* Badge / status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-xl border border-[#B08D57]/10 rounded-full text-sm text-[#B08D57] font-medium shadow-[0_2px_15px_rgba(176,141,87,0.06)]"
            >
              <span className="relative flex w-2 h-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B08D57] opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B08D57]" />
              </span>
              Open to Internship & Placement Opportunities (2027)
            </motion.div>
          </motion.div>

          {/* Portrait */}
         <div className="order-1 lg:order-2 lg:col-span-5 relative flex justify-center">
            <motion.div
              style={{ y: portraitY }}
              className="relative"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative -mr-28 lg:-mr-36"
              >
                {/* Warm beige glow behind portrait */}
                <div className="absolute -inset-12 bg-[radial-gradient(60%_60%_at_50%_45%,rgba(199,169,123,0.18),rgba(176,141,87,0.08)_55%,transparent_78%)] blur-2xl" />
                <div className="absolute -inset-20 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(231,222,210,0.35),transparent_70%)] blur-3xl" />

                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  <img
                    src="/portfolio.png"
                    alt="Tanushree K A portrait"
                    className="portrait-feather relative w-[min(100%,560px)] h-[88vh] object-cover object-top"
                    loading="eager"
                    decoding="async"
                    width={760}
                    height={760}
                  />
                  {/* Soft light from below blending portrait into the page */}
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#FAF7F2]/90 via-[#FAF7F2]/30 to-transparent pointer-events-none" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#6B645C]">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="text-[#B08D57]"
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
