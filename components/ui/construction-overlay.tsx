"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Lock, Construction } from "lucide-react"
import { toast } from "sonner"

interface ConstructionOverlayProps {
    type: "overlay" | "badge"
    children: React.ReactNode
    className?: string
    message?: string
}

export function ConstructionOverlay({
    type,
    children,
    className,
    message = "I'm sorry I'm probably reading the Stormlight Archives, but I'll get to this soon lol!",
}: ConstructionOverlayProps) {
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        toast.info(message, {
            icon: <Construction className="w-4 h-4 animate-bounce" />, // Added bounce animation for creativity
            duration: 4000,
        })
    }

    if (type === "badge") {
        return (
            <div
                className={cn("relative inline-block", className)}
                onClickCapture={handleClick}
            >
                <div className="pointer-events-none opacity-50 blur-[0.5px] grayscale">
                    {children}
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-yellow-500/10 border border-yellow-500/50 text-yellow-500 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full backdrop-blur-md flex items-center gap-1">
                        <Lock className="w-3 h-3" />
                        <span>Dev</span>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div
            className={cn("relative group cursor-not-allowed overflow-hidden rounded-lg", className)}
            onClickCapture={handleClick}
        >
            <div className="pointer-events-none opacity-60 blur-sm grayscale group-hover:blur-md transition-all duration-300">
                {children}
            </div>
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/20 backdrop-blur-[2px] transition-all duration-300 group-hover:bg-black/40">
                <div className="flex flex-col items-center gap-2 p-4 rounded-xl border border-white/10 bg-black/40 shadow-2xl backdrop-blur-md transform transition-transform duration-300 group-hover:scale-105">
                    <div className="p-3 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full border border-yellow-500/30">
                        <Construction className="w-6 h-6 text-yellow-500" />
                    </div>
                    <span className="font-syncopate font-bold text-sm uppercase tracking-wider text-yellow-500">
                        In Development
                    </span>
                </div>
            </div>
        </div>
    )
}
