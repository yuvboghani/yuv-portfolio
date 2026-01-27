"use client"

import { featuredProjects, type Project } from "@/lib/projects"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

export function ProjectTicker() {
    // If no featured projects, don't render the section
    if (featuredProjects.length === 0) {
        return null
    }

    return (
        <section className="relative py-20 md:py-24 overflow-hidden">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12 md:mb-16"
            >
                <p className="font-space-grotesk text-sm uppercase tracking-[0.3em] text-neutral-400 mb-3">
                    Live Services
                </p>
                <h2 className="font-syncopate text-2xl md:text-3xl font-bold uppercase tracking-tight">
                    Featured Work
                </h2>
            </motion.div>

            {/* Centered Project Display */}
            <div className="flex justify-center items-center px-6 md:px-12">
                {featuredProjects.map((project) => (
                    <ProjectCard
                        key={project.slug}
                        project={project}
                    />
                ))}
            </div>
        </section>
    )
}

interface ProjectCardProps {
    project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
    // Always link to the project description page, not directly to the demo
    const href = `/${project.slug}`

    return (
        <Link
            href={href}
            className="group relative flex-shrink-0 w-[320px] md:w-[400px] aspect-[16/10] 
                 rounded-2xl overflow-hidden cursor-pointer
                 transition-all duration-500 ease-out
                 hover:scale-[1.03] hover:shadow-2xl"
            style={{
                boxShadow: `0 10px 40px ${project.accentColor}20`,
            }}
        >
            {/* Background Image */}
            <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover 
                    transition-all duration-500 ease-out
                    group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent
                    group-hover:from-black/80 group-hover:via-black/40
                    transition-all duration-500"
            />

            {/* Accent Color Overlay on Hover */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{
                    background: `linear-gradient(135deg, ${project.accentColor}40, transparent)`,
                }}
            />

            {/* Content Container */}
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                {/* Status Badge */}
                <div className="absolute top-4 right-4 md:top-6 md:right-6">
                    <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-space-grotesk font-medium backdrop-blur-sm
                            ${project.status === "deployed"
                                ? "bg-emerald-500/30 text-emerald-300 border border-emerald-500/40"
                                : project.status === "development"
                                    ? "bg-yellow-500/30 text-yellow-300 border border-yellow-500/40"
                                    : "bg-blue-500/30 text-blue-300 border border-blue-500/40"
                            }`}
                    >
                        <span
                            className={`w-1.5 h-1.5 rounded-full animate-pulse ${project.status === "deployed"
                                ? "bg-emerald-400"
                                : project.status === "development"
                                    ? "bg-yellow-400"
                                    : "bg-blue-400"
                                }`}
                        />
                        {project.status === "deployed" ? "Live" : project.status === "development" ? "Dev" : "Soon"}
                    </span>
                </div>

                {/* Project Info */}
                <div className="space-y-2">
                    <h3
                        className="font-syncopate text-xl md:text-2xl font-bold uppercase tracking-tight text-white 
                            group-hover:text-opacity-100 transition-colors duration-300"
                        style={{
                            textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                        }}
                    >
                        {project.title}
                    </h3>
                    <p
                        className="font-space-grotesk text-sm text-neutral-300 line-clamp-2"
                        style={{
                            textShadow: '0 1px 5px rgba(0,0,0,0.5)',
                        }}
                    >
                        {project.tagline}
                    </p>
                </div>

                {/* View Project Link */}
                <div className="mt-4 flex items-center gap-2 text-sm font-space-grotesk font-medium uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: project.accentColor }}
                >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                </div>
            </div>

            {/* Border Glow Effect */}
            <div
                className="absolute inset-0 rounded-2xl border-2 border-transparent 
                    group-hover:border-opacity-50 transition-all duration-500 pointer-events-none"
                style={{
                    borderColor: `${project.accentColor}00`,
                }}
            />
            <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    boxShadow: `inset 0 0 0 2px ${project.accentColor}50`,
                }}
            />
        </Link>
    )
}
