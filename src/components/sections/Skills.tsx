"use client";

import { motion } from "framer-motion";
import {
    SiCplusplus, SiPython, SiJavascript, SiC,
    SiReact, SiNodedotjs, SiExpress, SiFastapi,
    SiOpencv, SiTensorflow, SiPytorch, SiHuggingface,
    SiGit, SiDocker, SiLinux, SiStreamlit, SiMlflow, SiRender
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { BrainCircuit, Activity, Shield } from "lucide-react";
import { TypewriterText } from "@/components/ui/TypewriterText";

const skillsData = [
    {
        category: "Languages",
        color: "text-neon-cyan",
        borderColor: "hover:border-neon-cyan/50",
        items: [
            { name: "C++", icon: SiCplusplus },
            { name: "Python", icon: SiPython },
            { name: "Java", icon: FaJava },
            { name: "C", icon: SiC },
            { name: "JavaScript", icon: SiJavascript },
        ]
    },
    {
        category: "Frameworks",
        color: "text-neon-purple",
        borderColor: "hover:border-neon-purple/50",
        items: [
            { name: "React", icon: SiReact },
            { name: "Node", icon: SiNodedotjs },
            { name: "Express", icon: SiExpress },
            { name: "FastAPI", icon: SiFastapi },
        ]
    },
    {
        category: "AI / ML",
        color: "text-neon-pink",
        borderColor: "hover:border-neon-pink/50",
        items: [
            { name: "TensorFlow", icon: SiTensorflow },
            { name: "PyTorch", icon: SiPytorch },
            { name: "Hugging Face", icon: SiHuggingface },
            { name: "XGBoost", icon: BrainCircuit },
            { name: "BERT", icon: BrainCircuit },
            { name: "YOLOv8", icon: Activity },
            { name: "SHAP", icon: Shield },
            { name: "Streamlit", icon: SiStreamlit },
        ]
    },
    {
        category: "Tools",
        color: "text-neon-cyan",
        borderColor: "hover:border-neon-cyan/50",
        items: [
            { name: "Git", icon: SiGit },
            { name: "Docker", icon: SiDocker },
            { name: "Linux", icon: SiLinux },
            { name: "MLflow", icon: SiMlflow },
            { name: "Render", icon: SiRender },
        ]
    }
];

export const Skills = () => {
    return (
        <section id="skills" className="py-20 relative bg-neutral-950/50">
            <div className="container px-4 md:px-6 mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-12 flex items-center gap-4">
                        <span className="text-neon-purple">02.</span> <TypewriterText text="Technical Skills" />
                        <div className="h-px bg-neutral-800 flex-1 ml-4 hidden sm:block"></div>
                    </h2>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0 },
                            show: {
                                opacity: 1,
                                transition: { staggerChildren: 0.15 }
                            }
                        }}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {skillsData.map((skillGroup, idx) => (
                            <motion.div
                                key={idx}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                                }}
                                whileHover={{ y: -5 }}
                                className={`p-6 rounded-2xl bg-neutral-900 border border-neutral-800 transition-colors ${skillGroup.borderColor} flex flex-col items-center sm:items-start`}
                            >
                                <h3 className={`text-xl font-bold mb-6 ${skillGroup.color}`}>
                                    {skillGroup.category}
                                </h3>
                                <div className="flex flex-col gap-4 w-full">
                                    {skillGroup.items.map((item, itemIdx) => (
                                        <motion.div
                                            key={itemIdx}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2 + (itemIdx * 0.1) }}
                                            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-neutral-800/40 border border-neutral-700/50 hover:bg-neutral-800 hover:border-neutral-600 transition-all group"
                                        >
                                            <item.icon className={`w-6 h-6 text-neutral-400 group-hover:${skillGroup.color.replace('text-', 'text-')} transition-colors`} />
                                            <span className="font-medium text-neutral-300 group-hover:text-white transition-colors">
                                                {item.name}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
