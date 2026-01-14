"use client"

import { motion } from "motion/react"
import { Github, Linkedin, Mail, MapPin, Phone, Download } from "lucide-react"
import { SkillsCard, skillsData } from "@/components/skills-card"

export default function ContactPage() {
  return (
    <main className="relative min-h-screen text-white px-6 md:px-8 py-24">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="font-syncopate text-5xl md:text-7xl lg:text-8xl font-bold mb-8 uppercase tracking-tight">
            GET IN TOUCH
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 mb-12 leading-relaxed font-space-grotesk text-balance max-w-2xl mx-auto">
            I'm always on the lookout for exciting research collaborations, innovative projects, or new career opportunities. If you have an idea, a question, or just want to build something cool, I'd love to hear from you!
          </p>

          {/* Contact Info Card */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 mb-12 shadow-2xl max-w-2xl mx-auto">
            <div className="space-y-6 text-left">

              {/* Name */}
              <div className="pb-6 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h2 className="font-syncopate text-2xl font-bold">YUV BOGHANI</h2>

                <a
                  href="/YAB Resume 2025N.pdf"
                  download
                  className="flex items-center gap-2 text-sm text-[#42B0D5] hover:text-white transition-colors font-space-grotesk font-medium uppercase tracking-wide group"
                >
                  <span>Download Resume</span>
                  <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </a>
              </div>

              {/* Email & Phone */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-[#42B0D5]/10 rounded-full text-[#42B0D5] group-hover:bg-[#42B0D5] group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <a
                    href="mailto:yuvboghani@gmail.com"
                    className="font-space-grotesk text-sm md:text-base hover:text-[#42B0D5] transition-colors"
                  >
                    yuvboghani@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-[#42B0D5]/10 rounded-full text-[#42B0D5] group-hover:bg-[#42B0D5] group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="font-space-grotesk text-sm md:text-base">(203) 721-1985</span>
                </div>
              </div>

              {/* Addresses */}
              <div className="pt-4 space-y-4">
                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-[#42B0D5]/10 rounded-full text-[#42B0D5] flex-shrink-0 group-hover:bg-[#42B0D5] group-hover:text-white transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="font-space-grotesk text-sm md:text-base">State College, PA</span>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-[#42B0D5]/10 rounded-full text-[#42B0D5] flex-shrink-0 group-hover:bg-[#42B0D5] group-hover:text-white transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="font-space-grotesk text-sm md:text-base">San Diego, CA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 md:gap-6 justify-center mb-12">
            <a
              href="https://github.com/yuvboghani"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-[#42B0D5] hover:border-[#42B0D5] hover:scale-110 transition-all duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/yuv-boghani"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-[#42B0D5] hover:border-[#42B0D5] hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:yuvboghani@gmail.com"
              className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-[#42B0D5] hover:border-[#42B0D5] hover:scale-110 transition-all duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <a
            href="mailto:yuvboghani@gmail.com"
            className="inline-block px-8 py-4 bg-[#42B0D5] rounded-full font-space-grotesk font-bold text-black hover:bg-white hover:scale-105 transition-all duration-300 uppercase tracking-wide"
          >
            Send Message
          </a>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24"
        >
          <h2 className="font-syncopate text-2xl md:text-3xl font-bold uppercase tracking-tight text-center mb-8">
            SKILLS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                <SkillsCard
                  title={category.title}
                  icon={category.icon}
                  skills={category.skills}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  )
}
