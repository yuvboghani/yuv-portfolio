"use client"

export default function AevumAppPage() {
    return (
        <div className="fixed inset-0 z-[100] bg-black">
            <iframe
                src="https://aevum-mu.vercel.app/"
                className="w-full h-full border-none"
                title="Aevum Application"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    )
}
