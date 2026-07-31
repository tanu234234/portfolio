import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-3">
      <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#6B645C]/60">Scroll</span>
      <div className="relative w-[2px] h-40 rounded-full bg-[#B08D57]/10">
        <motion.div
          className="absolute left-0 top-0 w-full rounded-full bg-gradient-to-b from-[#B08D57] to-[#C7A97B]"
          style={{ scaleY: scaleX, height: "100%", transformOrigin: "top" }}
        />
        <motion.div
          className="absolute -left-[3px] w-2 h-2 rounded-full bg-[#B08D57] shadow-[0_0_10px_rgba(176,141,87,0.6)]"
          style={{ top: `calc(${scrollYProgress} * 100%)`, y: "-50%" }}
        />
      </div>
    </div>
  );
}
