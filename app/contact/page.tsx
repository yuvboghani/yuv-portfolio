"use client"

import { motion } from "motion/react"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="relative min-h-screen text-white flex flex-col items-center justify-center px-4 md:px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl w-full"
      >
        <h1 className="font-syncopate text-5xl md:text-7xl lg:text-8xl font-bold mb-8 uppercase tracking-tight">
          GET IN TOUCH
        </h1>
        <p className="text-lg md:text-xl text-neutral-400 mb-12 leading-relaxed font-space-grotesk text-balance">
          I'm always on the lookout for exciting research collaborations, innovative projects, or new career opportunities. If you have an idea, a question, or just want to build something cool, I'd love to hear from you!
        </p>

        {/* Contact Info Card */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 mb-12 shadow-2xl">
          <div className="space-y-6 text-left">

            {/* Name */}
            <div className="pb-6 border-b border-white/10">
              <h2 className="font-syncopate text-2xl font-bold">YUV BOGHANI</h2>
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
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-[#42B0D5]/10 rounded-full text-[#42B0D5] flex-shrink-0 group-hover:bg-[#42B0D5] group-hover:text-white transition-colors mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="font-space-grotesk text-sm md:text-base text-neutral-300">
                  <p className="font-semibold text-white">State College</p>
                  <p>601 Vairo Blvd</p>
                  <p>State College, PA - 16803</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-[#42B0D5]/10 rounded-full text-[#42B0D5] flex-shrink-0 group-hover:bg-[#42B0D5] group-hover:text-white transition-colors mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="font-space-grotesk text-sm md:text-base text-neutral-300">
                  <p className="font-semibold text-white">San Diego</p>
                  <p>3801 Marquette Place</p>
                  <p>San Diego, CA - 92106</p>
                </div>
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
    </main>
  )
}
