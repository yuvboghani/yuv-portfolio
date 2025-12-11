/**
 * Upload Script for Photography Images to Vercel Blob
 * 
 * Usage:
 *   1. Make sure you have BLOB_READ_WRITE_TOKEN in your .env.local
 *   2. Run: node scripts/upload-photos.mjs
 * 
 * This will upload all images from public/photography/ to Vercel Blob
 */

import { put, list } from "@vercel/blob"
import { readdir, readFile } from "fs/promises"
import { join, extname } from "path"
import { config } from "dotenv"

// Load environment variables
config({ path: ".env.local" })

const PHOTOGRAPHY_DIR = join(process.cwd(), "public", "photography")
const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]

async function uploadPhotos() {
    console.log("🚀 Starting upload to Vercel Blob...\n")

    if (!process.env.BLOB_READ_WRITE_TOKEN) {
        console.error("❌ Error: BLOB_READ_WRITE_TOKEN not found in .env.local")
        console.log("   Run: npx vercel env pull .env.local")
        process.exit(1)
    }

    try {
        // Get existing blobs
        const { blobs: existingBlobs } = await list({ prefix: "photography/" })
        const existingNames = new Set(existingBlobs.map((b) => b.pathname))
        console.log(`📁 Found ${existingBlobs.length} existing images in Blob storage\n`)

        // Get local files
        const files = await readdir(PHOTOGRAPHY_DIR)
        const imageFiles = files.filter((file) =>
            IMAGE_EXTENSIONS.includes(extname(file).toLowerCase())
        )

        console.log(`📷 Found ${imageFiles.length} local images to upload\n`)

        let uploaded = 0
        let skipped = 0

        for (const file of imageFiles) {
            const blobPath = `photography/${file}`

            if (existingNames.has(blobPath)) {
                console.log(`⏭️  Skipping (already exists): ${file}`)
                skipped++
                continue
            }

            const filePath = join(PHOTOGRAPHY_DIR, file)
            const fileBuffer = await readFile(filePath)
            const blob = new Blob([fileBuffer])

            console.log(`⬆️  Uploading: ${file}...`)

            const result = await put(blobPath, blob, {
                access: "public",
                addRandomSuffix: false,
            })

            console.log(`   ✅ Uploaded: ${result.url}\n`)
            uploaded++
        }

        console.log("\n" + "=".repeat(50))
        console.log(`📊 Summary:`)
        console.log(`   - Uploaded: ${uploaded} images`)
        console.log(`   - Skipped: ${skipped} images (already existed)`)
        console.log("=".repeat(50))
        console.log("\n✨ Done!")
    } catch (error) {
        console.error("❌ Error:", error)
        process.exit(1)
    }
}

uploadPhotos()
