"use client"
import { motion } from "framer-motion"
import Link from "next/link"

export default function HomePage() {
  return (
    <main className="relative min-h-screen text-white">
      {/* Hero Section - Above the Fold */}
      <section className="min-h-screen px-4 md:px-6 flex items-center">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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

            <p className="font-space-grotesk text-xl md:text-2xl text-[#42B0D5] mb-8 leading-relaxed">
              Computational Data Sciences Senior @ Penn State
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/experience"
                className="px-8 py-4 bg-[#42B0D5] rounded-full font-space-grotesk font-semibold hover:opacity-90 transition-opacity uppercase tracking-wide text-center"
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
        </div>
      </section>

      <section className="relative px-4 md:px-6 py-24 md:py-32">
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
                my resume. But those platforms only show the destination—they rarely show the journey.
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
                design document. I want to explain why I chose a specific architecture—why I implemented a RAG pipeline
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
    </main>
  )
}
