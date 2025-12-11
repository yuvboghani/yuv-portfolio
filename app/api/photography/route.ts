import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
    const photographyDir = path.join(process.cwd(), "public", "photography")

    try {
        // Check if directory exists
        if (!fs.existsSync(photographyDir)) {
            return NextResponse.json({ images: [] })
        }

        // Read all files from the photography directory
        const files = fs.readdirSync(photographyDir)

        // Filter for image files only
        const imageExtensions = [".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]
        const images = files
            .filter((file) => {
                const ext = path.extname(file).toLowerCase()
                return imageExtensions.includes(ext)
            })
            .map((file) => `/photography/${file}`)

        return NextResponse.json({ images })
    } catch {
        return NextResponse.json({ images: [] })
    }
}
