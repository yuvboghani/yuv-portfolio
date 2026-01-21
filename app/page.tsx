"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { X, ArrowRight } from "lucide-react"
import { SkillsCard, skillsData } from "@/components/skills-card"
import { ProjectTicker } from "@/components/project-ticker"
import type { Project } from "@/lib/projects"

export default function HomePage() {
  const [focusedProject, setFocusedProject] = useState<Project | null>(null)

  const clearFocusedProject = () => {
    setFocusedProject(null)
  }

  return (
    <main className="relative min-h-screen text-white">
      {/* Dynamic Hero Section */}
      <section className="min-h-screen px-4 md:px-6 flex items-center relative overflow-hidden">
        <AnimatePresence mode="wait">
          {focusedProject === null ? (
            <StandardHero key="standard" />
          ) : (
            <SplitHero
              key="split"
              project={focusedProject}
              onClose={clearFocusedProject}
            />
          )}
        </AnimatePresence>
      </section>

      {/* Project Ticker - Between Hero and About */}
      <ProjectTicker onSelectProject={setFocusedProject} />

      {/* About Section */}
      <section className="relative px-4 md:px-6 pt-16 md:pt-20 pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 space-y-12"
          >
            {/* About Me */}
            <div>
              <h2 className="font-syncopate font-bold text-3xl md:text-4xl uppercase mb-6 tracking-tight">ABOUT ME</h2>
              <p className="font-space-grotesk text-base md:text-lg text-neutral-300 leading-relaxed">
                Hey there! I'm Yuv Boghani. I'm a Computational Data Science student at The Pennsylvania State
                University, and I spend most of my time building fun and unique applications for software and ML systems
                that solve real-world problems I'm passionate about.
              </p>
              <p className="font-space-grotesk text-base md:text-lg text-neutral-300 leading-relaxed mt-4">
                If you've landed here, you might have already glanced at my LinkedIn or seen the polished summaries on
                my resume. But those platforms only show the destination - they rarely show the journey.
              </p>
            </div>

            {/* Why I Created This Site */}
            <div>
              <h3 className="font-syncopate font-bold text-2xl md:text-3xl uppercase mb-6 tracking-tight">
                WHY I CREATED THIS SITE
              </h3>
              <p className="font-space-grotesk text-base md:text-lg text-neutral-300 leading-relaxed mb-4">
                I built this portfolio to provide the 'Director's Cut' of my engineering work. A repository can show you
                the code, but it doesn't explain the late-night architectural debates or the spark of inspiration that
                started it all. I wanted a space to peel back the curtain on two main things:
              </p>
              <p className="font-space-grotesk text-base md:text-lg text-neutral-300 leading-relaxed mb-4">
                <span className="text-[#42B0D5] font-semibold">The System Design:</span> I treat this site as a living
                design document. I want to explain why I chose a specific architecture - why I implemented a RAG pipeline
                instead of fine-tuning for my D&D agent, or why I chose C for a distributed storage system. It's about
                the constraints, the trade-offs, and the engineering logic that isn't visible in a README file.
              </p>
              <p className="font-space-grotesk text-base md:text-lg text-neutral-300 leading-relaxed">
                <span className="text-[#42B0D5] font-semibold">The Story Behind the Code:</span> Every project here is a
                personal journey. This is where I blog about the inspiration, the unexpected pivots, and the challenges
                that forced me to rethink my approach. It's a transparent look at how a project evolves from a 'what if'
                idea into a deployed system.
              </p>
            </div>

            {/* My Process */}
            <div>
              <h3 className="font-syncopate font-bold text-2xl md:text-3xl uppercase mb-6 tracking-tight">
                MY PROCESS: "FAILURE IS NOT AN OPTION"
              </h3>
              <p className="font-space-grotesk text-base md:text-lg text-neutral-300 leading-relaxed mb-4">
                For the longest time, I've had a sticker on my tablet from NASA's Apollo 13 mission that read, 'Failure is not
                an option.' My brother gave it to me, and honestly, I ignored it for years. I didn't think much of it
                until recently, when the meaning finally clicked.
              </p>
              <p className="font-space-grotesk text-base md:text-lg text-neutral-300 leading-relaxed mb-4">
                I realized it's not about guaranteeing success every single time—it's about how hard you can try without
                losing hope. It's about the resilience to keep working the problem when everything is going wrong.
              </p>
              <p className="font-space-grotesk text-base md:text-lg text-neutral-300 leading-relaxed">
                I don't always get everything right, and I might not always execute perfectly on the first try. But the
                philosophy I live by is giving my absolute all until the very last moment. Whether it's debugging a race
                condition or solving a complex research problem, my approach is simple: Never give up, never say die.
              </p>
            </div>

            {/* Let's Connect */}
            <div>
              <h3 className="font-syncopate font-bold text-2xl md:text-3xl uppercase mb-6 tracking-tight">
                LET'S CONNECT
              </h3>
              <p className="font-space-grotesk text-base md:text-lg text-neutral-300 leading-relaxed">
                Engineering is better when it's collaborative. If you want to discuss a cool project you're working on,
                debate the specs of the newest phones, geek out over new AI products, or just chat about F1, movies, or
                the latest in commercial tech, I'd love to hear from you. Take a look around the projects, read the
                stories behind them, and feel free to reach out!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative px-6 md:px-8 py-24 md:py-32">
        <div className="max-w-6xl mx-auto w-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-syncopate text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-center mb-16"
          >
            SKILLS
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {skillsData.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SkillsCard
                  title={category.title}
                  icon={category.icon}
                  skills={category.skills}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

// ============================================================================
// STANDARD HERO (View A) - Default "Hi, I'm Yuv" layout
// ============================================================================
function StandardHero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
    >
      {/* Left Column - Text */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-left"
      >
        <h1 className="font-syncopate font-bold text-5xl md:text-7xl lg:text-8xl mb-6 uppercase tracking-tight leading-tight">
          YUV BOGHANI
        </h1>

        <div className="font-space-grotesk text-lg md:text-xl text-[#42B0D5] mb-8 leading-relaxed space-y-1">
          <p>Computational Data Sciences Senior | Penn State</p>
          <p>Based in San Diego</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/experience"
            className="px-8 py-4 border-2 border-[#42B0D5] rounded-full font-space-grotesk font-semibold hover:bg-[#42B0D5]/10 transition-colors uppercase tracking-wide text-center"
          >
            Explore Experience
          </Link>
          <Link
            href="/projects"
            className="px-8 py-4 border-2 border-[#42B0D5] rounded-full font-space-grotesk font-semibold hover:bg-[#42B0D5]/10 transition-colors uppercase tracking-wide text-center"
          >
            View Projects
          </Link>
        </div>
      </motion.div>

      {/* Right Column - Image */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-center md:justify-end"
      >
        <div className="relative aspect-[4/5] w-full max-w-md">
          <div className="absolute inset-0 bg-gradient-to-br from-[#42B0D5] to-[#9333ea] rounded-3xl blur-xl opacity-30"></div>
          <img
            src="/images/img-20230917-014947-373.webp"
            alt="Yuv Boghani"
            className="relative w-full h-full object-cover rounded-3xl border-2 border-[#42B0D5]/30"
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

// ============================================================================
// SPLIT HERO (View B) - Project Focus with User Photo
// ============================================================================
interface SplitHeroProps {
  project: Project
  onClose: () => void
}

function SplitHero({ project, onClose }: SplitHeroProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto w-full"
    >
      {/* Close Button */}
      <motion.button
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        onClick={onClose}
        className="absolute top-24 right-6 md:right-10 z-20 flex items-center gap-2 px-4 py-2 
                   bg-white/5 backdrop-blur-sm border border-white/10 rounded-full
                   text-neutral-400 hover:text-white hover:bg-white/10 hover:border-white/20
                   transition-all duration-300 font-space-grotesk text-sm uppercase tracking-wider"
      >
        <X className="w-4 h-4" />
        <span className="hidden sm:inline">Back to Home</span>
      </motion.button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center pt-8 lg:pt-0">
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

            {/* Action Button */}
            <Link
              href={`/${project.slug}`}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-space-grotesk font-bold uppercase tracking-wide text-black
                         transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              style={{
                backgroundColor: project.accentColor,
                boxShadow: `0 10px 40px ${project.accentColor}40`,
              }}
            >
              Continue to {project.title}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* RIGHT COLUMN - User Portrait */}
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
  )
}
