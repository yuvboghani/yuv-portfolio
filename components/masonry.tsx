"use client"
import React, { useState, useEffect } from "react"
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
  scaleOnHover?: boolean
  hoverScale?: number
}

export function Masonry({
  items,
  columns = 3,
  gap = 4,
  className = "",
  scaleOnHover = true,
  hoverScale = 0.95,
}: MasonryProps) {
  const [columnCount, setColumnCount] = useState(columns)

  // Responsive column adjustment
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setColumnCount(1)
      else if (window.innerWidth < 1024) setColumnCount(2)
      else setColumnCount(columns)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [columns])

  // Distribute items across columns
  const columnsData: MasonryItem[][] = Array.from({ length: columnCount }, () => [])
  items.forEach((item, index) => {
    columnsData[index % columnCount].push(item)
  })

  return (
    <div
      className={`grid ${className}`}
      style={{
        gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
        gap: `${gap * 4}px`
      }}
    >
      {columnsData.map((col, colIndex) => (
        <div
          key={colIndex}
          className="flex flex-col"
          style={{ gap: `${gap * 4}px` }}
        >
          {col.map((item, itemIndex) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: (colIndex * col.length + itemIndex) * 0.03,
                ease: "easeOut"
              }}
              whileHover={scaleOnHover ? { scale: hoverScale } : undefined}
              className="w-full relative group"
            >
              {item.element}
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  )
}
