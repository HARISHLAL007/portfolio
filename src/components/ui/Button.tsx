"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

import { Magnetic } from "./Magnetic";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
        const baseStyles =
            "relative inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:pointer-events-none rounded-full overflow-hidden group";

        const variants = {
            primary:
                "bg-white text-black hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]",
            secondary:
                "bg-background text-foreground border border-neutral-800 hover:border-neon-cyan hover:text-neon-cyan shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]",
            outline:
                "border-2 border-foreground text-foreground hover:bg-foreground hover:text-background",
            ghost: "hover:bg-white/10 text-foreground",
        };

        const sizes = {
            sm: "h-9 px-4 text-xs",
            md: "h-11 px-8 text-sm",
            lg: "h-14 px-10 text-base",
        };

        return (
            <Magnetic>
                <motion.button
                    ref={ref}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(baseStyles, variants[variant], sizes[size], className)}
                    {...props}
                >
                    <span className="relative z-10 flex items-center gap-2">{children as React.ReactNode}</span>
                    {variant === "primary" && (
                        <div className="absolute inset-0 z-0 bg-gradient-to-r from-neon-cyan to-neon-purple opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    )}
                </motion.button>
            </Magnetic>
        );
    }
);

Button.displayName = "Button";
