"use client"

import { motion } from "motion/react"
import { ExternalLink, Book, Download } from "lucide-react"
import Link from "next/link"
import { ConstructionOverlay } from "@/components/ui/construction-overlay"

export default function ProjectsPage() {
  const deployedProjects = [
    {
      title: "Lidar Fusion Project",
      company: "Penn State Advanced Vehicular Team",
      description: "Real-time 3D spatial localization using Sensor Fusion",
      fullDescription:
        "Engineered a real-time sensor fusion pipeline in ROS 2 Humble using Python and OpenCV, implementing robust synchronization of high-frequency LiDAR and camera data via Best Effort QoS policies. Integrated this fused output with YOLO object detection to assign precise distance metrics to 2D bounding boxes, enabling accurate 3D spatial localization for dynamic obstacles.",
      tags: ["ROS 2", "LiDAR", "Sensor Fusion", "OpenCV", "Python", "YOLO"],
      demoLink: "#",
      blogSlug: "lidar-fusion",
      image: "/lidar-fusion-placeholder.jpg",
      lockButtons: true,
    },
    {
      title: "Personal Portfolio V1",

      description: "Immersive 3D/WebGL Identity Platform",
      fullDescription:
        "A high-performance personal website built on Next.js 15. Features a custom 'Silk' WebGL fluid simulation background using React-Three-Fiber, a 'Magic Bento' inspired UI with glassmorphism effects, and a fully typed, scalable architecture deployed on Vercel.",
      tags: ["Next.js 15", "WebGL/R3F", "Tailwind CSS", "Framer Motion", "TypeScript"],
      demoLink: "/",
      blogSlug: "portfolio-v1",
      image: "/images/portfolio-meta-shot.jpg",
      lockButtons: true,
    },
    {
      title: "ChatDnD",

      description: "Multi-Agent AI Dungeon Master with LangGraph",
      fullDescription:
        "Built a conversational AI system using LangGraph and MongoDB for managing complex multi-agent interactions in D&D gameplay. Integrated WebSockets for real-time communication.",
      tags: ["Python", "LangGraph", "MongoDB", "WebSockets"],
      demoLink: "#",
      blogSlug: "chatdnd",
      image: "/fantasy-dungeon-ai.jpg",
      lockButtons: true,
    },
    {
      title: "Bayesian Portfolio Optimization",

      description: "LSTM stock forecasting with Bayesian Networks",
      fullDescription:
        "Developed a sophisticated portfolio management system combining LSTM neural networks with Bayesian inference for stock price prediction using Alpha Vantage data.",
      tags: ["PyTorch", "LSTM", "Finance", "Bayesian"],
      demoLink: "#",
      blogSlug: "bayesian-portfolio",
      image: "/stock-market-charts.jpg",
      lockButtons: true,
    },
    {
      title: "Distributed Storage System",

      description: "Linearized file system in C/C++ with multithreading",
      fullDescription:
        "Engineered a high-performance distributed file system with advanced concurrency control and linearizability guarantees.",
      tags: ["C++", "Systems", "Multithreading"],
      demoLink: "#",
      blogSlug: "distributed-storage",
      image: "/distributed-network-servers-data-center.jpg",
      lockButtons: true,
    },
  ]

  const pipelineProjects = [
    {
      title: "BuxBalance",

      description: "High-Fidelity Financial Command Center",
      fullDescription:
        "A hybrid personal finance platform combining the aesthetic visibility of Monarch Money with the subscription rigor of Rocket Money. Features a 'Magic Bento' UI, AI-powered transaction categorization using Gemini 2.5 Flash, and a massive interactive Sankey diagram for cash flow visualization.",
      tags: ["Next.js", "Firebase/AWS Amplify", "Gemini AI", "Plaid", "Recharts", "Framer Motion"],
      demoLink: "#",
      blogSlug: "buxbalance", // Active link
      image: "/placeholder.svg", // Placeholder for now
      isUnderConstruction: true,
      hasBlog: true,
    },
    {
      title: "BrickByBrick (B3)",

      description: "Supply Chain Optimization Engine for AFOLs",
      fullDescription:
        "An advanced sourcing engine decoupling the 'Part' from the 'Box.' It utilizes a specialized algorithm to source parts for retired Lego sets at a fraction of the cost. Features include a 3D R3F visualization of sets, occlusion analysis for internal parts, and a multi-mode sourcing engine (Purist vs. Builder modes).",
      tags: ["Next.js 15", "Firestore", "Jotai", "React-Three-Fiber", "Python (Raycasting)", "Rebrickable API"],
      demoLink: "#",
      blogSlug: "brickbybrick",
      image: "/placeholder.svg",
      isUnderConstruction: true,
      hasBlog: true, // Enabled as requested
    },
    {
      title: "FireWatch",

      description: "WRF-SFire Wildfire Simulation (HPC)",
      fullDescription:
        "A supercomputing initiative running on the Penn State ICDS Roar Cluster. This project compiles and executes the WRF-SFire model to simulate the 2018 Camp Fire in Butte County, CA. It involves complex compilation of Fortran/C static libraries to resolve architecture-specific (SIGILL) errors and integrates high-resolution LANDFIRE fuel data.",
      tags: ["C/Fortran", "WRF-SFire", "MPI/OpenMP", "Python", "HPC (ICDS Roar)", "Linux"],
      demoLink: "#",
      blogSlug: "firewatch",
      image: "/placeholder.svg",
      isUnderConstruction: true,
      hasBlog: false,
    },
  ]

  return (
    <main className="relative min-h-screen text-white px-4 md:px-6 py-24">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-syncopate text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold uppercase tracking-tight"
          >
            Projects
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <a
              href="/YAB Resume 2025N.pdf"
              download
              className="group flex items-center gap-2 px-5 py-2.5 border border-[#42B0D5]/50 rounded-full text-[#42B0D5] hover:bg-[#42B0D5] hover:text-black transition-all duration-300 font-space-grotesk text-sm font-medium uppercase tracking-wider"
            >
              <span>Download Resume</span>
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Deployed Systems Section */}
        <section className="mb-24">
          <h2 className="font-syncopate text-3xl md:text-4xl font-bold mb-12 uppercase tracking-tight text-[#42B0D5]">
            Deployed Systems
          </h2>
          <div className="space-y-8">
            {deployedProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* In the Pipeline Section */}
        <section>
          <h2 className="font-syncopate text-3xl md:text-4xl font-bold mb-12 uppercase tracking-tight text-yellow-500">
            In the Pipeline
          </h2>
          <div className="space-y-8">
            {pipelineProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}


function ProjectCard({ project, index }: { project: any; index: number }) {
  // Determine if buttons should be locked (either explicitly or because the whole project is under construction)
  const buttonsLocked = project.isUnderConstruction || project.lockButtons;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={index === 0 ? { opacity: 1, y: 0 } : undefined}
      whileInView={index === 0 ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col md:flex-row gap-4 md:gap-6 bg-neutral-900/40 backdrop-blur-sm border-2 border-neutral-800 rounded-2xl overflow-hidden hover:bg-neutral-900/60 hover:border-[#42B0D5]/50 transition-all"
    >
      <div className="md:w-2/5 aspect-video overflow-hidden flex-shrink-0 relative">
        {project.isUnderConstruction ? (
          <ConstructionOverlay type="overlay" className="w-full h-full">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </ConstructionOverlay>
        ) : (
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        )}
      </div>

      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <h3 className="font-syncopate text-2xl font-bold mb-1 uppercase tracking-tight flex items-center gap-3">
            {project.title}
            {project.isUnderConstruction && (
              <ConstructionOverlay type="badge">🚧</ConstructionOverlay>
            )}
          </h3>
          {project.company && (
            <p className="text-[#42B0D5] font-space-grotesk text-lg font-semibold mt-1">
              {project.company}
            </p>
          )}
          <p className="text-[#42B0D5] text-sm font-space-grotesk mb-2 uppercase tracking-wide font-bold mt-2">{project.description}</p>
          <p className="text-neutral-300 mb-4 leading-relaxed font-space-grotesk">{project.fullDescription}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[#42B0D5]/10 border border-[#42B0D5]/30 rounded-full text-xs text-[#42B0D5] font-space-grotesk"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 md:gap-3">
          {buttonsLocked ? (
            <>
              <ConstructionOverlay type="badge">
                <button
                  className="flex items-center justify-center gap-1.5 md:gap-2 px-4 md:px-6 py-2 md:py-3 bg-neutral-800 rounded-full font-space-grotesk font-semibold text-neutral-500 uppercase tracking-wide text-xs md:text-sm cursor-not-allowed"
                >
                  Demo <ExternalLink className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                </button>
              </ConstructionOverlay>
              <ConstructionOverlay type="badge">
                <button
                  className="flex items-center justify-center gap-1.5 md:gap-2 px-4 md:px-6 py-2 md:py-3 bg-neutral-800 border-2 border-neutral-700 rounded-full font-space-grotesk font-semibold text-neutral-500 uppercase tracking-wide text-xs md:text-sm cursor-not-allowed"
                >
                  <span className="hidden sm:inline">Behind the Scenes</span>
                  <span className="sm:hidden">Blog</span>
                  <Book className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                </button>
              </ConstructionOverlay>
            </>
          ) : (
            <>
              <a
                href={project.demoLink}
                className="flex items-center justify-center gap-1.5 md:gap-2 px-4 md:px-6 py-2 md:py-3 bg-[#42B0D5] rounded-full font-space-grotesk font-semibold hover:opacity-90 transition-opacity uppercase tracking-wide text-xs md:text-sm"
              >
                Demo <ExternalLink className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
              </a>

              <Link
                href={`/blog/${project.blogSlug}`}
                className="flex items-center justify-center gap-1.5 md:gap-2 px-4 md:px-6 py-2 md:py-3 border-2 border-[#42B0D5] rounded-full font-space-grotesk font-semibold hover:bg-[#42B0D5]/10 transition-colors uppercase tracking-wide text-xs md:text-sm"
              >
                <span className="hidden sm:inline">Behind the Scenes</span>
                <span className="sm:hidden">Blog</span>
                <Book className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
              </Link>
            </>
          )}
        </div>
      </div>
    </motion.div>
  )
}
