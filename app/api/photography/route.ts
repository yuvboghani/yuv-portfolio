import { NextResponse } from "next/server"
import { list } from "@vercel/blob"

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function GET() {
    try {
        // Get images from Vercel Blob
        const token = process.env.BLOB_READ_WRITE_TOKEN

        if (!token) {
            console.log("Photography API: No BLOB_READ_WRITE_TOKEN found")
            return NextResponse.json({
                images: [],
                debug: "No BLOB_READ_WRITE_TOKEN environment variable found"
            })
        }

        console.log("Photography API: Fetching from Vercel Blob...")

        const { blobs } = await list({
            prefix: "photography/",
            token: token
        })

        console.log(`Photography API: Found ${blobs.length} blobs`)

        if (blobs.length === 0) {
            return NextResponse.json({
                images: [],
                debug: "No blobs found with prefix 'photography/'"
            })
        }

        const imageExtensions = [".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]
        const images = blobs
            .filter((blob) => {
                const pathname = blob.pathname.toLowerCase()
                return imageExtensions.some(ext => pathname.endsWith(ext))
            })
            .map((blob) => blob.url)

        console.log(`Photography API: Returning ${images.length} images`)

        return NextResponse.json({ images })
    } catch (error) {
        console.error("Photography API error:", error)
        return NextResponse.json({
            images: [],
            error: error instanceof Error ? error.message : "Unknown error"
        })
    }
}
