"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, Trophy, Star } from "lucide-react";
import { TypewriterText } from "@/components/ui/TypewriterText";

const achievements = [
    {
        title: "1st Place | Hackathon, Symposium on Responsible AI",
        category: "Hackathon",
        icon: Trophy,
        date: "Mar 2026",
        description: "Won first place among competing teams at the hackathon conducted by the Department of Computing Technologies in association with the SRM ACM Student Chapter, for SpeakSense AI built inside the 24-hour window.",
        color: "text-neon-pink",
        bg: "bg-neon-pink/10"
    },
    {
        title: "Best Project & Rank 3 | Overall Individual Rankings",
        category: "SRM Insider",
        icon: Star,
        date: "Jun 2026",
        description: "Selected as the club's best project for 'The Last CEO'; placed in the top 3 of 30+ members in the overall individual rankings.",
        color: "text-neon-cyan",
        bg: "bg-neon-cyan/10"
    },
    {
        title: "Elite + Topper (Top 1%) | NPTEL, IIT Roorkee",
        category: "Certification",
        icon: Award,
        date: "Apr 2025",
        description: "Scored 94% in Fundamentals of Object Oriented Programming among 5,246 certified candidates nationally.",
        color: "text-neon-purple",
        bg: "bg-neon-purple/10"
    },
    {
        title: "1st Prize | Reuse and Remodel Product",
        category: "Hackathon",
        icon: Trophy,
        date: "Nov 2024",
        description: "Won first prize in the event organised by the Department of Mechanical Engineering; active participant across multiple inter- and intra-college hackathons and ideathons.",
        color: "text-neon-pink",
        bg: "bg-neon-pink/10"
    },
    {
        title: "Under Review: Computers in Human Behavior (Elsevier)",
        category: "Research",
        icon: BookOpen,
        date: "Current Focus",
        description: "Authored a manuscript on recall-oriented evaluation of transformer classifiers for content moderation, arguing for false-negative suppression as the primary objective in safety-critical detection. Conducted under the UROP programme at SRM IST.",
        color: "text-neon-cyan",
        bg: "bg-neon-cyan/10"
    }
];

export const Achievements = () => {
    return (
        <section id="achievements" className="py-20 relative bg-neutral-950/50">
            <div className="container px-4 md:px-6 mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-12 flex items-center gap-4">
                        <span className="text-neon-cyan">05.</span> <TypewriterText text="Achievements" />
                        <div className="h-px bg-neutral-800 flex-1 ml-4 hidden sm:block"></div>
                    </h2>

                    <div className="grid grid-cols-1 max-w-md mx-auto gap-6">
                        {achievements.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15 }}
                                className="group p-6 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neutral-600 transition-all duration-300 relative overflow-hidden"
                            >
                                <div className={`absolute top-0 right-0 w-32 h-32 ${item.bg} blur-3xl -mr-16 -mt-16 transition-opacity opacity-50 group-hover:opacity-100 rounded-full`} />

                                <div className="flex justify-between items-start mb-6 relative z-10">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.bg} ${item.color}`}>
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <span className="text-xs font-mono text-neutral-500 bg-neutral-950 px-3 py-1 rounded-full border border-neutral-800">
                                        {item.date}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-400 transition-all relative z-10">
                                    {item.title}
                                </h3>

                                <span className={`text-sm font-medium ${item.color} mb-4 block relative z-10`}>
                                    {item.category}
                                </span>

                                <p className="text-neutral-400 text-sm leading-relaxed relative z-10">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
