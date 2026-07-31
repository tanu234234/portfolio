import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "../data/portfolio";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastY && y > 160);
      lastY = y;
    };

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.35 }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.toLowerCase());
      if (el) sectionObserver.observe(el);
    });

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      sectionObserver.disconnect();
    };
  }, []);

  const scrollTo = useCallback((id: string) => {
    setActive(id);
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <motion.nav
        initial={{ y: -120, opacity: 0 }}
        animate={{ y: hidden ? -120 : 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 28 }}
        className="mt-5 pointer-events-auto"
      >
        <div className="flex items-center gap-1 px-3 py-2 rounded-full bg-white/70 backdrop-blur-xl border border-[#B08D57]/10 shadow-[0_8px_30px_rgba(176,141,87,0.08)]">
          <button
            onClick={() => scrollTo("home")}
            className="px-3 lg:px-4 text-sm font-bold font-space-grotesk tracking-tight text-[#2D2926] hover:text-[#B08D57] transition-colors duration-300"
          >
            Tanushree.
          </button>

          <div className="hidden md:flex items-center gap-0.5 ml-2">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className={`relative px-3 py-1.5 text-sm font-medium transition-colors duration-300 rounded-full ${
                  active === item.toLowerCase()
                    ? "text-white"
                    : "text-[#6B645C] hover:text-[#2D2926]"
                }`}
              >
                <span className="relative z-10">{item}</span>
                {active === item.toLowerCase() && (
                  <motion.div
                    layoutId="navPill"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    className="absolute inset-0 bg-[#B08D57] rounded-full shadow-[0_4px_12px_rgba(176,141,87,0.3)]"
                  />
                )}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[#6B645C] hover:text-[#2D2926]"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="md:hidden mt-2 rounded-3xl bg-white/80 backdrop-blur-xl border border-[#B08D57]/10 shadow-[0_20px_50px_rgba(176,141,87,0.12)] p-3"
            >
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className={`block w-full text-left px-4 py-3 rounded-2xl text-sm font-medium transition-colors ${
                    active === item.toLowerCase()
                      ? "bg-[#B08D57] text-white"
                      : "text-[#6B645C] hover:text-[#2D2926] hover:bg-[#F5EFE6]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
