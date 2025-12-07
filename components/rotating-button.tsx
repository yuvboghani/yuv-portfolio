"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function RotatingButton() {
  const [isProject, setIsProject] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => setIsProject((prev) => !prev), 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <Link href={isProject ? "/projects" : "/experience"}>
      <button className="relative overflow-hidden rounded-full bg-[#42B0D5] p-[2px] group">
        <div className="relative h-12 w-48 bg-[#101012] rounded-full flex items-center justify-center overflow-hidden transition-colors group-hover:bg-[#1a1a1e]">
          <AnimatePresence mode="wait">
            <motion.span
              key={isProject ? "projects" : "experience"}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute font-medium text-white flex items-center gap-2"
            >
              {isProject ? "View Projects" : "View Experience"}
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </AnimatePresence>
        </div>
      </button>
    </Link>
  )
}
