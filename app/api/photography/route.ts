import { NextResponse } from "next/server"
import { list } from "@vercel/blob"
import fs from "fs"
import path from "path"

export async function GET() {
    try {
        // First, try to get images from Vercel Blob (production)
        if (process.env.BLOB_READ_WRITE_TOKEN) {
            const { blobs } = await list({ prefix: "photography/" })

            if (blobs.length > 0) {
                const images = blobs
                    .filter((blob) => {
                        const ext = path.extname(blob.pathname).toLowerCase()
                        return [".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"].includes(ext)
                    })
                    .map((blob) => blob.url)

                return NextResponse.json({ images })
            }
        }

        // Fallback to local filesystem (development)
        const photographyDir = path.join(process.cwd(), "public", "photography")

        if (!fs.existsSync(photographyDir)) {
            return NextResponse.json({ images: [] })
        }

        const files = fs.readdirSync(photographyDir)
        const imageExtensions = [".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]
        const images = files
            .filter((file) => {
                const ext = path.extname(file).toLowerCase()
                return imageExtensions.includes(ext)
            })
            .map((file) => `/photography/${file}`)

        return NextResponse.json({ images })
    } catch (error) {
        console.error("Photography API error:", error)
        return NextResponse.json({ images: [] })
    }
}
