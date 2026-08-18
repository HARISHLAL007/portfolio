"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export const ParallaxBackground = () => {
    const { scrollY } = useScroll();
    
    // Background moves slower than foreground
    const y1 = useTransform(scrollY, [0, 5000], [0, 1000]);
    const y2 = useTransform(scrollY, [0, 5000], [0, 2000]);
    const y3 = useTransform(scrollY, [0, 5000], [0, -500]); // Moves up slightly

    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-background">
            {/* Dark gradient base */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-[#050505] to-background" />
            
            {/* Deep Parallax Grid */}
            <motion.div 
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    y: y1,
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                    height: '200vh',
                    top: '-50vh'
                }}
            />

            {/* Floating Orbs layer 1 */}
            <motion.div style={{ y: y2 }} className="absolute inset-0 h-[200vh] top-[-50vh]">
                <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-neon-cyan/5 blur-[120px] rounded-full mix-blend-screen" />
                <div className="absolute top-[60%] right-[10%] w-[600px] h-[600px] bg-neon-purple/5 blur-[150px] rounded-full mix-blend-screen" />
                <div className="absolute top-[80%] left-[30%] w-[400px] h-[400px] bg-neon-pink/5 blur-[120px] rounded-full mix-blend-screen" />
            </motion.div>

            {/* Floating Orbs layer 2 (Faster) */}
            <motion.div style={{ y: y3 }} className="absolute inset-0 h-[200vh] top-[-50vh]">
                <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] bg-neon-cyan/5 blur-[100px] rounded-full mix-blend-screen" />
                <div className="absolute top-[70%] left-[5%] w-[400px] h-[400px] bg-neon-purple/5 blur-[100px] rounded-full mix-blend-screen" />
            </motion.div>
        </div>
    );
};
