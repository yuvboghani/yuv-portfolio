"use server"

import { put, list, del } from "@vercel/blob"
import { NextResponse } from "next/server"

// Upload endpoint - POST /api/upload
export async function POST(request: Request): Promise<NextResponse> {
    try {
        const formData = await request.formData()
        const file = formData.get("file") as File | null

        if (!file) {
            return NextResponse.json({ error: "No file provided" }, { status: 400 })
        }

        // Upload to Vercel Blob
        const blob = await put(`photography/${file.name}`, file, {
            access: "public",
            addRandomSuffix: false, // Keep original filename
        })

        return NextResponse.json({
            success: true,
            url: blob.url,
            pathname: blob.pathname,
        })
    } catch (error) {
        console.error("Upload error:", error)
        return NextResponse.json(
            { error: "Failed to upload file" },
            { status: 500 }
        )
    }
}

// List all blobs - GET /api/upload
export async function GET(): Promise<NextResponse> {
    try {
        const { blobs } = await list({ prefix: "photography/" })

        return NextResponse.json({
            success: true,
            images: blobs.map((blob) => ({
                url: blob.url,
                pathname: blob.pathname,
                size: blob.size,
                uploadedAt: blob.uploadedAt,
            })),
        })
    } catch (error) {
        console.error("List error:", error)
        return NextResponse.json(
            { error: "Failed to list images" },
            { status: 500 }
        )
    }
}

// Delete a blob - DELETE /api/upload
export async function DELETE(request: Request): Promise<NextResponse> {
    try {
        const { url } = await request.json()

        if (!url) {
            return NextResponse.json({ error: "No URL provided" }, { status: 400 })
        }

        await del(url)

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error("Delete error:", error)
        return NextResponse.json(
            { error: "Failed to delete file" },
            { status: 500 }
        )
    }
}
