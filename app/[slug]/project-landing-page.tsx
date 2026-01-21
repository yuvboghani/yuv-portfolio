"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink, Github, Book, Sparkles } from "lucide-react"
import { getProjectBySlug } from "@/lib/projects"
import type { Project } from "@/lib/projects"

interface ProjectLandingPageProps {
    slug: string
}

export default function ProjectLandingPage({ slug }: ProjectLandingPageProps) {
    const project = getProjectBySlug(slug)

    if (!project) {
        notFound()
    }

    return (
        <main
            className="relative min-h-screen text-white"
            style={{
                background: `radial-gradient(ellipse at top, ${project.accentColor}08 0%, transparent 50%)`,
            }}
        >
            {/* Navigation Bar */}
            <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link
                        href="/"
                        className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full
                       text-neutral-300 hover:text-white hover:bg-white/10 transition-all duration-300
                       font-space-grotesk text-sm uppercase tracking-wider"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span className="hidden sm:inline">Back to Portfolio</span>
                        <span className="sm:hidden">Back</span>
                    </Link>

                    <div className="flex items-center gap-3">
                        {project.demoLink && (
                            <a
                                href={project.demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 rounded-full font-space-grotesk font-semibold text-sm uppercase tracking-wide
                           transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: project.accentColor,
                                    color: "#000",
                                }}
                            >
                                <span className="hidden sm:inline">Live Demo</span>
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        )}
                        {project.githubLink && (
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full
                           text-neutral-300 hover:text-white hover:bg-white/10 transition-all duration-300
                           font-space-grotesk text-sm"
                            >
                                <Github className="w-4 h-4" />
                            </a>
                        )}
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16">
                {/* Background Glow */}
                <div
                    className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 pointer-events-none"
                    style={{ backgroundColor: project.accentColor }}
                />

                <div className="relative max-w-5xl mx-auto text-center">
                    {/* Status Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
                        style={{
                            backgroundColor: `${project.accentColor}15`,
                            border: `1px solid ${project.accentColor}30`,
                        }}
                    >
                        <span
                            className={`w-2 h-2 rounded-full ${project.status === "deployed"
                                ? "bg-emerald-400 animate-pulse"
                                : project.status === "development"
                                    ? "bg-yellow-400 animate-pulse"
                                    : "bg-blue-400"
                                }`}
                        />
                        <span
                            className="font-space-grotesk text-sm uppercase tracking-wider"
                            style={{ color: project.accentColor }}
                        >
                            {project.status === "deployed"
                                ? "Live & Deployed"
                                : project.status === "development"
                                    ? "In Development"
                                    : "Coming Soon"}
                        </span>
                    </motion.div>

                    {/* Project Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-syncopate text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight mb-4"
                        style={{ color: project.accentColor }}
                    >
                        {project.title}
                    </motion.h1>

                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="font-space-grotesk text-xl md:text-2xl text-neutral-300 mb-8"
                    >
                        {project.tagline}
                    </motion.p>

                    {/* Tech Stack Pills */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-2 mb-12"
                    >
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full
                           font-space-grotesk text-sm text-neutral-300"
                            >
                                {tag}
                            </span>
                        ))}
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative mx-auto max-w-4xl"
                    >
                        <div
                            className="absolute inset-0 rounded-3xl blur-3xl opacity-30"
                            style={{ backgroundColor: project.accentColor }}
                        />
                        <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-neutral-900">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <section className="relative px-6 py-24">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Sparkles className="w-6 h-6" style={{ color: project.accentColor }} />
                            <h2 className="font-syncopate text-2xl md:text-3xl font-bold uppercase tracking-tight">
                                About This Project
                            </h2>
                        </div>

                        <p className="font-space-grotesk text-lg text-neutral-300 leading-relaxed">
                            {project.fullDescription}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="relative px-6 py-24">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-syncopate text-3xl md:text-4xl font-bold uppercase tracking-tight text-center mb-16"
                    >
                        Key Features
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Modern Architecture",
                                description: "Built with the latest technologies and best practices for scalability and performance.",
                            },
                            {
                                title: "Intelligent Design",
                                description: "AI-powered features that learn and adapt to provide personalized experiences.",
                            },
                            {
                                title: "Seamless Experience",
                                description: "Thoughtfully crafted UX with smooth animations and intuitive interactions.",
                            },
                        ].map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6
                           hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300"
                            >
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                                    style={{ backgroundColor: `${project.accentColor}20` }}
                                >
                                    <div
                                        className="w-3 h-3 rounded-full"
                                        style={{ backgroundColor: project.accentColor }}
                                    />
                                </div>
                                <h3 className="font-syncopate text-lg font-bold uppercase tracking-tight mb-2">
                                    {feature.title}
                                </h3>
                                <p className="font-space-grotesk text-neutral-400 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Behind the Scenes CTA */}
            {project.blogSlug && (
                <section className="relative px-6 py-24">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 text-center overflow-hidden"
                        >
                            {/* Background decoration */}
                            <div
                                className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] opacity-20 pointer-events-none"
                                style={{ backgroundColor: project.accentColor }}
                            />

                            <Book className="w-12 h-12 mx-auto mb-6" style={{ color: project.accentColor }} />

                            <h2 className="font-syncopate text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4">
                                Behind the Scenes
                            </h2>

                            <p className="font-space-grotesk text-neutral-400 mb-8 max-w-xl mx-auto">
                                Dive deep into the engineering decisions, challenges overcome, and lessons learned
                                while building {project.title}.
                            </p>

                            <Link
                                href={`/blog/${project.blogSlug}`}
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-space-grotesk font-bold uppercase tracking-wide
                           transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: project.accentColor,
                                    color: "#000",
                                    boxShadow: `0 10px 40px ${project.accentColor}40`,
                                }}
                            >
                                Read the Story
                                <ArrowLeft className="w-5 h-5 rotate-180" />
                            </Link>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Footer Navigation */}
            <section className="relative px-6 py-16 border-t border-white/10">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors font-space-grotesk"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Portfolio
                    </Link>

                    <Link
                        href="/projects"
                        className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors font-space-grotesk"
                    >
                        View All Projects
                        <ArrowLeft className="w-4 h-4 rotate-180" />
                    </Link>
                </div>
            </section>
        </main>
    )
}
