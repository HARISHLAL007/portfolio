"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import { TypewriterText } from "@/components/ui/TypewriterText";

export const Experience = () => {
    return (
        <section id="experience" className="py-20 relative bg-neutral-950/50">
            <div className="container px-4 md:px-6 mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 flex items-center gap-4">
                        <span className="text-neon-cyan">04.</span> <TypewriterText text="Experience & Education" />
                        <div className="h-px bg-neutral-800 flex-1 ml-4 hidden sm:block"></div>
                    </h2>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0 },
                            show: {
                                opacity: 1,
                                transition: { staggerChildren: 0.3 }
                            }
                        }}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        className="max-w-3xl mx-auto space-y-12"
                    >

                        {/* Experience 1 (Intern) */}
                        <motion.div variants={{ hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="relative pl-8 md:pl-0">
                            <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-neutral-800"></div>

                            <motion.div
                                whileHover={{ x: 5 }}
                                className="relative md:grid md:grid-cols-5 gap-8 items-start group"
                            >
                                <div className="hidden md:flex flex-col items-end col-span-1 pt-1 text-sm text-neutral-500 font-mono">
                                    <span>Jan 2026</span>
                                    <span>Apr 2026</span>
                                </div>

                                {/* Timeline node */}
                                <div className="absolute left-[-37px] md:static md:col-span-1 flex justify-center mt-1">
                                    <div className="w-[10px] h-[10px] rounded-full bg-neon-cyan shadow-[0_0_10px_#00f0ff] ring-4 ring-neutral-950 group-hover:scale-150 transition-transform z-10" />
                                    {/* Vertical Line for Desktop */}
                                    <motion.div
                                        initial={{ scaleY: 0 }}
                                        whileInView={{ scaleY: 1 }}
                                        transition={{ duration: 1, ease: "easeInOut" }}
                                        className="hidden md:block absolute top-6 bottom-[-3rem] w-px bg-neutral-800 -z-10 left-[26%] origin-top"
                                    />
                                </div>

                                <div className="md:col-span-3 pb-8">
                                    <h3 className="text-xl font-bold text-white mb-1">AI/ML Intern</h3>
                                    <div className="text-neon-cyan font-medium mb-3 flex items-center gap-2">
                                        <Briefcase className="w-4 h-4" /> Innovexis (IntelliHire Staffing Solution)
                                    </div>
                                    <div className="flex items-center gap-2 mb-4 text-xs text-neutral-500 md:hidden font-mono">
                                        <Calendar className="w-3 h-3" /> Jan 2026 - Apr 2026
                                    </div>
                                    <ul className="space-y-2 text-neutral-400 text-sm leading-relaxed list-disc list-inside">
                                        <li>Delivered three industry machine learning engagements end to end, covering data cleaning, exploratory analysis, feature engineering, hyperparameter tuning and model evaluation in Python.</li>
                                        <li>Scope: Tesla Stock Price Prediction (SimpleRNN & LSTM) · Real Estate Investment Advisor (Streamlit, MLflow) · PhonePe Transaction Insights (SQL analytics and visualisation).</li>
                                    </ul>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Experience 2 */}
                        <motion.div variants={{ hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="relative pl-8 md:pl-0">
                            <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-neutral-800"></div>

                            <motion.div
                                whileHover={{ x: 5 }}
                                className="relative md:grid md:grid-cols-5 gap-8 items-start group"
                            >
                                <div className="hidden md:flex flex-col items-end col-span-1 pt-1 text-sm text-neutral-500 font-mono">
                                    <span>Nov 2025</span>
                                    <span>Jan 2026</span>
                                </div>

                                {/* Timeline node */}
                                <div className="absolute left-[-37px] md:static md:col-span-1 flex justify-center mt-1">
                                    <div className="w-[10px] h-[10px] rounded-full bg-neon-cyan shadow-[0_0_10px_#00f0ff] ring-4 ring-neutral-950 group-hover:scale-150 transition-transform z-10" />
                                    {/* Vertical Line for Desktop */}
                                    <motion.div
                                        initial={{ scaleY: 0 }}
                                        whileInView={{ scaleY: 1 }}
                                        transition={{ duration: 1, ease: "easeInOut" }}
                                        className="hidden md:block absolute top-6 bottom-[-3rem] w-px bg-neutral-800 -z-10 left-[26%] origin-top"
                                    />
                                </div>

                                <div className="md:col-span-3 pb-8">
                                    <h3 className="text-xl font-bold text-white mb-1">Undergraduate Research Assistant (UROP)</h3>
                                    <div className="text-neon-cyan font-medium mb-3 flex items-center gap-2">
                                        <Briefcase className="w-4 h-4" /> SRM IST — Advisor: Dr. G. Balamurugan
                                    </div>
                                    <div className="flex items-center gap-2 mb-4 text-xs text-neutral-500 md:hidden font-mono">
                                        <Calendar className="w-3 h-3" /> Nov 2025 - Jan 2026
                                    </div>
                                    <ul className="space-y-2 text-neutral-400 text-sm leading-relaxed list-disc list-inside">
                                        <li>Researching safety-critical NLP systems for content moderation, designing recall-focused evaluation pipelines that penalise false negatives over headline accuracy.</li>
                                        <li>Fine-tuned and calibrated transformer classifiers and authored the resulting manuscript, currently under review at Computers in Human Behavior (Elsevier).</li>
                                    </ul>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Experience 2 */}
                        <motion.div variants={{ hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="relative pl-8 md:pl-0">
                            <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-neutral-800"></div>

                            <motion.div
                                whileHover={{ x: 5 }}
                                className="relative md:grid md:grid-cols-5 gap-8 items-start group"
                            >
                                <div className="hidden md:flex flex-col items-end col-span-1 pt-1 text-sm text-neutral-500 font-mono">
                                    <span>Jan 2025</span>
                                    <span>Mar 2025</span>
                                </div>

                                {/* Timeline node */}
                                <div className="absolute left-[-37px] md:static md:col-span-1 flex justify-center mt-1">
                                    <div className="w-[10px] h-[10px] rounded-full bg-neon-purple shadow-[0_0_10px_#b026ff] ring-4 ring-neutral-950 group-hover:scale-150 transition-transform z-10" />
                                    {/* Vertical Line for Desktop */}
                                    <motion.div
                                        initial={{ scaleY: 0 }}
                                        whileInView={{ scaleY: 1 }}
                                        transition={{ duration: 1, ease: "easeInOut" }}
                                        className="hidden md:block absolute top-6 bottom-[-3rem] w-px bg-neutral-800 -z-10 left-[26%] origin-top"
                                    />
                                </div>

                                <div className="md:col-span-3 pb-8">
                                    <h3 className="text-xl font-bold text-white mb-1">AI-ML Virtual Internship</h3>
                                    <div className="text-neon-purple font-medium mb-3 flex items-center gap-2">
                                        <Briefcase className="w-4 h-4" /> Google for Developers & AICTE
                                    </div>
                                    <div className="flex items-center gap-2 mb-4 text-xs text-neutral-500 md:hidden font-mono">
                                        <Calendar className="w-3 h-3" /> Jan 2025 - Mar 2025
                                    </div>
                                    <ul className="space-y-2 text-neutral-400 text-sm leading-relaxed list-disc list-inside">
                                        <li>Completed 10-week intensive program in ML model development, evaluation, and deployment best practices.</li>
                                    </ul>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Experience 3: AI/ML Technical Member */}
                        <motion.div variants={{ hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="relative pl-8 md:pl-0">
                            <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-neutral-800"></div>

                            <motion.div
                                whileHover={{ x: 5 }}
                                className="relative md:grid md:grid-cols-5 gap-8 items-start group"
                            >
                                <div className="hidden md:flex flex-col items-end col-span-1 pt-1 text-sm text-neutral-500 font-mono">
                                    <span>2025</span>
                                    <span>Present</span>
                                </div>

                                {/* Timeline node */}
                                <div className="absolute left-[-37px] md:static md:col-span-1 flex justify-center mt-1">
                                    <div className="w-[10px] h-[10px] rounded-full bg-neon-cyan shadow-[0_0_10px_#00f0ff] ring-4 ring-neutral-950 group-hover:scale-150 transition-transform z-10" />
                                    {/* Vertical Line for Desktop */}
                                    <motion.div
                                        initial={{ scaleY: 0 }}
                                        whileInView={{ scaleY: 1 }}
                                        transition={{ duration: 1, ease: "easeInOut" }}
                                        className="hidden md:block absolute top-6 bottom-[-3rem] w-px bg-neutral-800 -z-10 left-[26%] origin-top"
                                    />
                                </div>

                                <div className="md:col-span-3 pb-8">
                                    <h3 className="text-xl font-bold text-white mb-1">AI/ML Technical Member</h3>
                                    <div className="text-neon-cyan font-medium mb-3 flex items-center gap-2">
                                        <Briefcase className="w-4 h-4" /> SRM Insider
                                    </div>
                                    <div className="flex items-center gap-2 mb-4 text-xs text-neutral-500 md:hidden font-mono">
                                        <Calendar className="w-3 h-3" /> 2025 - Present
                                    </div>
                                    <ul className="space-y-2 text-neutral-400 text-sm leading-relaxed list-disc list-inside">
                                        <li>Delivered 3+ AI/ML projects across more than a year with the club's technical wing, contributing to build sprints and community technical events.</li>
                                        <li>Ranked 3rd overall among 30+ members and awarded Best Project for The Last CEO.</li>
                                    </ul>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Experience 4: Community Outreach Volunteer */}
                        <motion.div variants={{ hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="relative pl-8 md:pl-0">
                            <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-neutral-800"></div>

                            <motion.div
                                whileHover={{ x: 5 }}
                                className="relative md:grid md:grid-cols-5 gap-8 items-start group"
                            >
                                <div className="hidden md:flex flex-col items-end col-span-1 pt-1 text-sm text-neutral-500 font-mono">
                                    <span>Jun 2026</span>
                                </div>

                                {/* Timeline node */}
                                <div className="absolute left-[-37px] md:static md:col-span-1 flex justify-center mt-1">
                                    <div className="w-[10px] h-[10px] rounded-full bg-neon-purple shadow-[0_0_10px_#b026ff] ring-4 ring-neutral-950 group-hover:scale-150 transition-transform z-10" />
                                    {/* Vertical Line for Desktop */}
                                    <motion.div
                                        initial={{ scaleY: 0 }}
                                        whileInView={{ scaleY: 1 }}
                                        transition={{ duration: 1, ease: "easeInOut" }}
                                        className="hidden md:block absolute top-6 bottom-[-3rem] w-px bg-neutral-800 -z-10 left-[26%] origin-top"
                                    />
                                </div>

                                <div className="md:col-span-3 pb-8">
                                    <h3 className="text-xl font-bold text-white mb-1">Community Outreach Volunteer</h3>
                                    <div className="text-neon-purple font-medium mb-3 flex items-center gap-2">
                                        <Briefcase className="w-4 h-4" /> Community Connect, SRM IST
                                    </div>
                                    <div className="flex items-center gap-2 mb-4 text-xs text-neutral-500 md:hidden font-mono">
                                        <Calendar className="w-3 h-3" /> Jun 2026
                                    </div>
                                    <ul className="space-y-2 text-neutral-400 text-sm leading-relaxed list-disc list-inside">
                                        <li>Delivered 21 hours of community service at a higher secondary school in Madurai, conducting AI and technology awareness sessions for Classes X–XII on the responsible use of AI for learning and career growth.</li>
                                    </ul>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Education */}
                        <motion.div variants={{ hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="relative pl-8 md:pl-0">
                            <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-neutral-800"></div>

                            <motion.div
                                whileHover={{ x: 5 }}
                                className="relative md:grid md:grid-cols-5 gap-8 items-start group"
                            >
                                <div className="hidden md:flex flex-col items-end col-span-1 pt-1 text-sm text-neutral-500 font-mono">
                                    <span>Exp 2028</span>
                                </div>

                                {/* Timeline node */}
                                <div className="absolute left-[-37px] md:static md:col-span-1 flex justify-center mt-1">
                                    <div className="w-[10px] h-[10px] rounded-full bg-neon-pink shadow-[0_0_10px_#ff007f] ring-4 ring-neutral-950 group-hover:scale-150 transition-transform z-10" />
                                    {/* Vertical Line for Desktop */}
                                    <motion.div
                                        initial={{ scaleY: 0 }}
                                        whileInView={{ scaleY: 1 }}
                                        transition={{ duration: 1, ease: "easeInOut" }}
                                        className="hidden md:block absolute top-6 bottom-[-3rem] w-px bg-neutral-800 -z-10 left-[26%] origin-top"
                                    />
                                </div>

                                <div className="md:col-span-3">
                                    <h3 className="text-xl font-bold text-white mb-1">B.Tech – Computer Science & Engineering</h3>
                                    <div className="text-neon-pink font-medium mb-3 flex items-center gap-2">
                                        <GraduationCap className="w-4 h-4" /> SRM Institute of Science and Technology, Chennai
                                    </div>
                                    <div className="flex items-center gap-2 mb-4 text-xs text-neutral-500 md:hidden font-mono">
                                        <Calendar className="w-3 h-3" /> Expected Graduation: 2028
                                    </div>
                                    <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neon-pink/50 transition-colors">
                                        <div className="text-xs text-neutral-500 mb-1">CGPA</div>
                                        <div className="text-white font-bold text-lg">9.50 / 10</div>
                                        <div className="text-xs text-neutral-500">(Overall CGPA)</div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Minor */}
                        <motion.div variants={{ hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="relative pl-8 md:pl-0">
                            <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-neutral-800"></div>

                            <motion.div
                                whileHover={{ x: 5 }}
                                className="relative md:grid md:grid-cols-5 gap-8 items-start group"
                            >
                                <div className="hidden md:flex flex-col items-end col-span-1 pt-1 text-sm text-neutral-500 font-mono">
                                    <span>2024 &ndash; 2028</span>
                                </div>

                                {/* Timeline node */}
                                <div className="absolute left-[-37px] md:static md:col-span-1 flex justify-center mt-1">
                                    <div className="w-[10px] h-[10px] rounded-full bg-neon-cyan shadow-[0_0_10px_#00f0ff] ring-4 ring-neutral-950 group-hover:scale-150 transition-transform z-10" />
                                </div>

                                <div className="md:col-span-3">
                                    <h3 className="text-xl font-bold text-white mb-1">Minor – Artificial Intelligence & Machine Learning</h3>
                                    <div className="text-neon-cyan font-medium mb-3 flex items-center gap-2">
                                        <GraduationCap className="w-4 h-4" /> SRM Institute of Science and Technology, Chennai
                                    </div>
                                    <div className="flex items-center gap-2 mb-4 text-xs text-neutral-500 md:hidden font-mono">
                                        <Calendar className="w-3 h-3" /> Minor Specialization
                                    </div>
                                    <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neon-cyan/50 transition-colors">
                                        <div className="text-xs text-neutral-500 mb-1">CGPA</div>
                                        <div className="text-white font-bold text-lg">9.50 / 10</div>
                                        <div className="text-xs text-neutral-500">(Specialization)</div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                    </motion.div>
                </motion.div>
            </div>
        </section >
    );
};
