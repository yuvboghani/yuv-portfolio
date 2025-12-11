"use client"

import { Masonry } from "@/components/masonry"
import { motion } from "motion/react"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function FunPage() {
  const [photos, setPhotos] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadPhotos() {
      try {
        const response = await fetch("/api/photography")
        const data = await response.json()
        setPhotos(data.images || [])
      } catch (error) {
        console.error("Failed to load photos:", error)
        setPhotos([])
      } finally {
        setLoading(false)
      }
    }
    loadPhotos()
  }, [])

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

        {loading ? (
          <div className="flex items-center justify-center py-24">
            <div className="w-8 h-8 border-2 border-[#42B0D5] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : photos.length === 0 ? (
          <div className="text-center py-24 text-neutral-400 font-space-grotesk">
            <p className="text-xl mb-2">No photos yet</p>
            <p className="text-sm">Add images to <code className="text-[#42B0D5]">public/photography/</code> to display them here</p>
          </div>
        ) : (
          <Masonry
            items={photos.map((photo, index) => ({
              id: index,
              element: (
                <div className="overflow-hidden rounded-xl relative group">
                  <Image
                    src={photo}
                    alt={`Photography ${index + 1}`}
                    width={600}
                    height={400}
                    className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-500 cursor-pointer"
                    priority={true}
                    quality={75}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )
            }))}
            columns={3}
            gap={4}
            className="w-full mb-24"
          />
        )}
      </div>
    </main>
  )
}
