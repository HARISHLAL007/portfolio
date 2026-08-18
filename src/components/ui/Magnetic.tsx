"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Magnetic = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouse = (e: MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    
    // Check if mouse is within a certain distance of the element
    const padding = 20; // Active distance
    const isInside = 
      clientX >= left - padding && 
      clientX <= left + width + padding && 
      clientY >= top - padding && 
      clientY <= top + height + padding;

    if (isInside) {
        setIsHovered(true);
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
    } else {
        setIsHovered(false);
        setPosition({ x: 0, y: 0 });
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouse);
    return () => {
        window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block relative"
    >
      {children}
    </motion.div>
  );
};
