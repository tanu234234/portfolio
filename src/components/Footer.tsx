import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative py-16 border-t border-[#B08D57]/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center space-y-4"
        >
          <p className="font-space-grotesk font-bold text-xl text-[#2D2926]">Tanushree.</p>
          <p className="text-[#6B645C] text-sm">
            Designed & Developed with Curiosity, Consistency and Code.
          </p>
          <p className="text-[#6B645C] text-sm font-medium">
            &copy; 2026 Tanushree K A.
          </p>
          <p className="text-[#6B645C] text-xs">
            Built using React, TypeScript, Tailwind CSS and Framer Motion.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
