"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { notFound } from "next/navigation"
import { X, ArrowRight } from "lucide-react"
import { getProjectBySlug } from "@/lib/projects"

interface ProjectLandingPageProps {
    slug: string
}

export default function ProjectLandingPage({ slug }: ProjectLandingPageProps) {
    const project = getProjectBySlug(slug)

    if (!project) {
        notFound()
    }

    return (
        <main className="relative min-h-screen text-white flex items-center justify-center p-4 md:p-6">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-7xl mx-auto w-full relative"
            >
                {/* Back Button */}
                <Link
                    href="/"
                    className="absolute top-0 left-0 z-20 flex items-center gap-2 px-4 py-2 
                    bg-white/5 backdrop-blur-sm border border-white/10 rounded-full
                    text-neutral-400 hover:text-white hover:bg-white/10 hover:border-white/20
                    transition-all duration-300 font-space-grotesk text-sm uppercase tracking-wider"
                >
                    <X className="w-4 h-4" />
                    <span className="hidden sm:inline">Back to Home</span>
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center pt-16 lg:pt-0">
                    {/* LEFT COLUMN - Project Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="order-2 lg:order-1"
                    >
                        <div
                            className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10
                        hover:bg-white/[0.07] transition-colors duration-500"
                            style={{
                                boxShadow: `0 0 80px ${project.accentColor}15, 0 0 40px ${project.accentColor}10`,
                            }}
                        >
                            {/* Project Header */}
                            <div className="flex items-start gap-4 mb-6">
                                <div
                                    className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0"
                                    style={{ boxShadow: `0 0 0 2px ${project.accentColor}40` }}
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h2
                                        className="font-syncopate text-2xl md:text-3xl font-bold uppercase tracking-tight"
                                        style={{ color: project.accentColor }}
                                    >
                                        {project.title}
                                    </h2>
                                    <p className="font-space-grotesk text-neutral-400 text-sm uppercase tracking-wide mt-1">
                                        {project.tagline}
                                    </p>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="font-space-grotesk text-neutral-300 leading-relaxed mb-6">
                                {project.fullDescription}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1.5 rounded-full text-xs font-space-grotesk font-medium uppercase tracking-wide"
                                        style={{
                                            backgroundColor: `${project.accentColor}15`,
                                            color: project.accentColor,
                                            border: `1px solid ${project.accentColor}30`,
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Action Button - Updated to point to demoLink or external home */}
                            <a
                                href={project.demoLink || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-space-grotesk font-bold uppercase tracking-wide text-black
                          transition-all duration-300 hover:scale-[1.02] hover:shadow-lg w-full md:w-auto justify-center"
                                style={{
                                    backgroundColor: project.accentColor,
                                    boxShadow: `0 10px 40px ${project.accentColor}40`,
                                }}
                            >
                                Try it out
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN - User Portrait (kept from SplitHero) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="order-1 lg:order-2 flex justify-center"
                    >
                        <div className="relative">
                            {/* Portrait Image */}
                            <div className="relative aspect-[3/4] w-full max-w-sm lg:max-w-md">
                                <div
                                    className="absolute inset-0 rounded-3xl blur-2xl opacity-40"
                                    style={{
                                        background: `linear-gradient(135deg, ${project.accentColor}, #9333ea)`,
                                    }}
                                />
                                <img
                                    src="/images/img-20230917-014947-373.webp"
                                    alt="Yuv Boghani"
                                    className="relative w-full h-full object-cover rounded-3xl border-2"
                                    style={{ borderColor: `${project.accentColor}40` }}
                                />

                                {/* Floating Name Badge */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="absolute -bottom-4 -right-4 md:bottom-6 md:right-6 
                           bg-black/80 backdrop-blur-xl border border-white/20 
                           rounded-2xl px-5 py-3 shadow-2xl"
                                >
                                    <p className="font-syncopate font-bold text-lg uppercase tracking-tight text-white">
                                        Yuv Boghani
                                    </p>
                                    <p className="font-space-grotesk text-xs text-[#42B0D5] uppercase tracking-wide">
                                        Computational Data Sciences
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </main>
    )
}
