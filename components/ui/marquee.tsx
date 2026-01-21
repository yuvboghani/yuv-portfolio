"use client"

import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface MarqueeProps {
    children: ReactNode
    className?: string
    reverse?: boolean
    pauseOnHover?: boolean
    /**
     * Duration of one full scroll cycle in seconds
     * @default 40
     */
    duration?: number
    /**
     * Gap between items in pixels
     * @default 16
     */
    gap?: number
}

export function Marquee({
    children,
    className,
    reverse = false,
    pauseOnHover = true,
    duration = 40,
    gap = 16,
}: MarqueeProps) {
    return (
        <div
            className={cn(
                "group flex overflow-hidden [--gap:16px]",
                pauseOnHover && "[--play-state:running] hover:[--play-state:paused]",
                className
            )}
            style={{
                "--duration": `${duration}s`,
                "--gap": `${gap}px`,
            } as React.CSSProperties}
        >
            <div
                className={cn(
                    "flex shrink-0 items-center justify-around gap-[var(--gap)]",
                    "animate-marquee",
                    reverse && "animate-marquee-reverse"
                )}
                style={{
                    animationDuration: "var(--duration)",
                    animationPlayState: "var(--play-state, running)",
                }}
            >
                {children}
            </div>
            <div
                aria-hidden
                className={cn(
                    "flex shrink-0 items-center justify-around gap-[var(--gap)]",
                    "animate-marquee",
                    reverse && "animate-marquee-reverse"
                )}
                style={{
                    animationDuration: "var(--duration)",
                    animationPlayState: "var(--play-state, running)",
                }}
            >
                {children}
            </div>
        </div>
    )
}
