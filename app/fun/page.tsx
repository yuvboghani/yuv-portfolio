"use client"

import { Masonry } from "@/components/masonry"
import { motion } from "motion/react"

export default function FunPage() {
  const photos = [
    "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=600&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=400&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=550&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=350&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=500&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=400&h=450&fit=crop&auto=format",
  ]



  return (
    <main className="relative min-h-screen text-white px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="font-fraunces text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-16 text-balance tracking-tight uppercase"
        >
          Photography
        </motion.h1>

        <Masonry
          items={photos.map((photo, index) => ({
            id: index,
            element: (
              <div className="overflow-hidden rounded-xl">
                <img
                  src={photo}
                  alt={`Photography ${index + 1}`}
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
                />
              </div>
            )
          }))}
          columns={3}
          gap={4}
          className="w-full mb-24"
        />
      </div>
    </main>
  )
}
