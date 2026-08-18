"use client";

import { AnimatedText } from "@/components/ui/AnimatedText";
import { Button } from "@/components/ui/Button";
import { Copy, Download, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ParticleBackground } from "@/components/ui/ParticleBackground";
import { Scene3D } from "@/components/ui/Scene3D";

import { MagneticButton } from "@/components/ui/MagneticButton";
import { WordReveal } from "@/components/ui/WordReveal";

export const Hero = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
            {/* Background elements */}
            <ParticleBackground />

            <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/20 rounded-full blur-[100px] opacity-20 pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-cyan/20 rounded-full blur-[100px] opacity-10 pointer-events-none" />

            <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-6xl pointer-events-none h-full flex flex-col md:flex-row items-center justify-between">

                {/* Text Content - Left Side */}
                <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-8 md:w-[55%] z-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900/50 px-3 py-1 text-sm font-medium backdrop-blur-md"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-neon-cyan mr-2 animate-pulse"></span>
                        Available for new opportunities
                    </motion.div>

                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
                            <span className="block text-neutral-400 text-2xl md:text-3xl mb-4 font-medium tracking-normal">
                                Hello, I&apos;m
                            </span>
                            <AnimatedText text="Harishlal ME" className="justify-center md:justify-start" delay={1} />
                        </h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="pt-4"
                        >
                            <h2 className="text-xl md:text-2xl text-neon-cyan font-medium mb-4">
                                AI / ML Developer &middot; NLP &middot; Full-Stack Engineer
                            </h2>
                            <div className="max-w-[600px] text-lg text-neutral-400 leading-relaxed">
                                <WordReveal text="Building intelligent AI systems and scalable full-stack products. Second-year Computer Science student at SRM IST (CGPA 9.51) currently preparing an ICWSM 2026 research submission." />
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        className="flex flex-col sm:flex-row items-center md:justify-start gap-4 pt-4 pointer-events-auto"
                    >
                        <a href="/Harishlal_ME_Resume.pdf" download="Harishlal_ME_Resume.pdf" className="pointer-events-auto w-full sm:w-auto">
                            <MagneticButton>
                                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                                    <Download className="w-4 h-4 mr-2" />
                                    Download CV
                                </Button>
                            </MagneticButton>
                        </a>
                        <a href="#contact" className="pointer-events-auto w-full sm:w-auto">
                            <MagneticButton>
                                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                                    <Mail className="w-4 h-4 mr-2" />
                                    Contact Me
                                </Button>
                            </MagneticButton>
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 1 }}
                        className="flex items-center justify-center md:justify-start gap-6 pt-8 pointer-events-auto"
                    >
                        <a href="https://github.com/harishlal-me" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                            <Github className="w-6 h-6" />
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a href="https://linkedin.com/in/harishlal-me" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                            <Linkedin className="w-6 h-6" />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a href="mailto:harishlaloff@gmail.com" className="text-neutral-400 hover:text-white transition-colors">
                            <Mail className="w-6 h-6" />
                            <span className="sr-only">Email</span>
                        </a>
                    </motion.div>
                </div>

                {/* 3D Scene - Right Side (Desktop) / Top (Mobile) */}
                <Scene3D />
            </div>
        </section>
    );
};
