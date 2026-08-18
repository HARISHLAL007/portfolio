"use client";

import { motion } from "framer-motion";
import { Activity, BrainCircuit, Code2, FlaskConical } from "lucide-react";
import { ScrambleText } from "@/components/ui/ScrambleText";
import { WordReveal } from "@/components/ui/WordReveal";

export const About = () => {
    return (
        <section id="about" className="py-20 relative">
            <div className="container px-4 md:px-6 mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-12 flex items-center gap-4">
                        <span className="text-neon-cyan">01.</span> <ScrambleText text="About Me" />
                        <div className="h-px bg-neutral-800 flex-1 ml-4 block sm:hidden md:block"></div>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Bio */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0 },
                                show: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.2 }
                                }
                            }}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-100px" }}
                            className="space-y-6 text-neutral-400 text-lg leading-relaxed"
                        >
                            <motion.div variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }}>
                                <WordReveal className="text-white font-medium" text="I am a Second-year B.Tech CSE undergraduate (CGPA 9.51/10) with a Minor in AI & Machine Learning at SRM IST, Chennai — with hands-on experience in full-stack development, database systems, and machine learning." />
                            </motion.div>
                            <motion.div variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }}>
                                <WordReveal className="text-neon-cyan font-medium" text="Particularly strong in NLP — built safety-critical BERT-based systems achieving 94.5% recall and have an active ICWSM 2026 research submission." />
                            </motion.div>
                            <motion.p variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }}>
                                Keen to contribute to engineering and research challenges across software, data, and AI domains.
                            </motion.p>
                        </motion.div>

                        {/* Highlights Grid */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0 },
                                show: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.2, delayChildren: 0.4 }
                                }
                            }}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-100px" }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                        >
                            <motion.div
                                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                                whileHover={{ y: -5 }}
                                className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-neon-cyan/50 transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-full bg-neon-cyan/10 flex items-center justify-center mb-4 text-neon-cyan group-hover:scale-110 transition-transform">
                                    <BrainCircuit className="w-6 h-6" />
                                </div>
                                <h3 className="text-white font-semibold mb-2">Safety-Critical NLP</h3>
                                <p className="text-sm text-neutral-500">BERT-based systems with recall-focused evaluation for content moderation.</p>
                            </motion.div>

                            <motion.div
                                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                                whileHover={{ y: -5 }}
                                className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-neon-purple/50 transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-full bg-neon-purple/10 flex items-center justify-center mb-4 text-neon-purple group-hover:scale-110 transition-transform">
                                    <Code2 className="w-6 h-6" />
                                </div>
                                <h3 className="text-white font-semibold mb-2">Full-Stack Development</h3>
                                <p className="text-sm text-neutral-500">React, Node.js, Express.js, FastAPI, MySQL &amp; PostgreSQL.</p>
                            </motion.div>

                            <motion.div
                                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                                whileHover={{ y: -5 }}
                                className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-neon-pink/50 transition-colors group col-span-2"
                            >
                                <div className="w-12 h-12 rounded-full bg-neon-pink/10 flex items-center justify-center mb-4 text-neon-pink group-hover:scale-110 transition-transform">
                                    <FlaskConical className="w-6 h-6" />
                                </div>
                                <h3 className="text-white font-semibold mb-2">UROP Research · ICWSM 2026 Submission</h3>
                                <p className="text-sm text-neutral-500">Active manuscript preparation for ICWSM 2026 conference submission on safety-critical NLP &amp; content moderation under Dr. G. Balamurugan.</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
