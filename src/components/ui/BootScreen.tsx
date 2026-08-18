"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const BootScreen = () => {
  const [lines, setLines] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const bootSequence = [
    "> INITIALIZING HARISHLAL.ME",
    "> LOADING PROJECT DATABASE",
    "> CONNECTING AI MODELS",
    "> ACCESS GRANTED"
  ];

  useEffect(() => {
    // Only run once per session to avoid annoying the user on every refresh
    if (sessionStorage.getItem("bootScreenShown")) {
        setIsVisible(false);
        return;
    }

    let delay = 0;
    bootSequence.forEach((line, index) => {
      delay += Math.random() * 300 + 200; // Random delay between 200-500ms
      setTimeout(() => {
        setLines((prev) => [...prev, line]);
        if (index === bootSequence.length - 1) {
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(() => {
                setIsVisible(false);
                sessionStorage.setItem("bootScreenShown", "true");
            }, 800); // Wait for fade out animation
          }, 800);
        }
      }, delay);
    });
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-black text-neon-cyan font-mono p-8 flex flex-col justify-center items-start overflow-hidden"
          exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="max-w-2xl mx-auto w-full md:pl-20">
            {lines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`mb-4 md:text-xl text-lg ${i === lines.length - 1 ? 'text-white font-bold' : ''}`}
              >
                {line}
              </motion.div>
            ))}
            <motion.div
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-4 h-6 bg-neon-cyan mt-2 inline-block"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
