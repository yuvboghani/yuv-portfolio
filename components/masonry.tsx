"use client"
import React, { useMemo, useState, useEffect } from "react"
import { motion } from "motion/react"

interface MasonryItem {
  id: string | number
  element: React.ReactNode
  height?: number
}

interface MasonryProps {
  items: MasonryItem[]
  columns?: number
  gap?: number
  className?: string
  // Animation props
  ease?: string
  duration?: number
  stagger?: number
  animateFrom?: "bottom" | "top" | "left" | "right"
  scaleOnHover?: boolean
  hoverScale?: number
  blurToFocus?: boolean // Note: strict blur-to-focus requires more complex state, implementing simple hover
  colorShiftOnHover?: boolean
}

export function Masonry({
  items,
  columns = 3,
  gap = 4,
  className = "",
  ease = "power3.out", // mapping to 'easeOut' in standard framer, or custom cubic-bezier
  duration = 0.6,
  stagger = 0.05,
  animateFrom = "bottom",
  scaleOnHover = true,
  hoverScale = 0.95,
}: MasonryProps) {
  const [mounted, setMounted] = useState(false)
  const [columnCount, setColumnCount] = useState(columns)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Responsive column adjustment (simple)
  useEffect(() => {
    if (!mounted) return
    const handleResize = () => {
      if (window.innerWidth < 640) setColumnCount(1)
      else if (window.innerWidth < 1024) setColumnCount(2)
      else setColumnCount(columns)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [columns, mounted])

  const columnsData = useMemo(() => {
    const cols: MasonryItem[][] = Array.from({ length: columnCount }, () => [])
    items.forEach((item, index) => {
      cols[index % columnCount].push(item)
    })
    return cols
  }, [items, columnCount])

  if (!mounted) return null // Prevent hydration mismatch by rendering nothing initially on client until mounted

  // Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: animateFrom === "bottom" ? 50 : 0,
      x: animateFrom === "left" ? -50 : animateFrom === "right" ? 50 : 0
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration, ease: "easeOut" }
    },
  }

  return (
    <div
      className={`grid grid-cols-${columnCount} gap-${gap} ${className}`}
      style={{ gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))` }}
    >
      {columnsData.map((col, colIndex) => (
        <motion.div
          key={colIndex}
          className={`flex flex-col gap-${gap}`}
          variants={containerVariants}
          initial="hidden"
          animate="show" // Changed from whileInView to animate for better reliability
          viewport={{ once: true, margin: "-50px" }}
        >
          {col.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={scaleOnHover ? { scale: hoverScale } : undefined}
              className="w-full relative group"
            >
              {item.element}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  )
}
