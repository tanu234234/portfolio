import { motion } from "framer-motion";
import { useMousePosition } from "../hooks/useMousePosition";

export default function CursorSpotlight() {
  const { x, y } = useMousePosition();

  return (
    <motion.div
      className="fixed pointer-events-none z-[100] opacity-30"
      style={{
        left: x - 150,
        top: y - 150,
        width: 300,
        height: 300,
        background: "radial-gradient(circle, rgba(176,141,87,0.15) 0%, transparent 70%)",
        borderRadius: "50%",
      }}
      animate={{ x: 0, y: 0 }}
    />
  );
}
