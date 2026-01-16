"use client"

import { motion } from "motion/react"
import { Download } from "lucide-react"

export default function ExperiencePage() {
  const experiences = [
    {
      role: "Research Assistant - Whitebox AI Lab",
      company: "Penn State Research",
      companyUrl: "https://neurosymbolic.netlify.app/",
      period: "Aug 2025 - Present",
      bullets: [
        "Working under Prof. Abhinav Verma to reproduce the ArtiSAN Deep Reinforcement Learning framework to optimize atomic structures in High-Entropy Alloys.",
        "Investigating novel reward functions to incorporate configurational entropy for Gibbs Free Energy minimization, while leveraging AlphaFold-inspired mechanisms to interpret and enhance atomic swapping logic.",
      ],
      tags: ["Deep RL", "AlphaFold", "Physics-ML", "Research"],
    },
    {
      role: "NLP Intern",
      company: "Titan Company Limited",
      period: "Jun 2025 - Aug 2025",
      bullets: [
        "Built a real-time voice agent using OpenAI's Realtime API and a custom FastAPI server for conversational AI.",
        "Integrated Twilio & WebSockets to stream low-latency, bi-directional audio to both landline and mobile phone networks.",
        "Built a RAG pipeline using LangChain & a Redis vector database to provide the agent with context-aware responses.",
        "Developed interruption handling and semantic caching to enhance conversational flow and significantly reduce API latency.",
      ],
      tags: ["OpenAI Realtime API", "FastAPI", "Twilio", "RAG", "Redis"],
    },
    {
      role: "Data Science Intern",
      company: "Dr. Reddy's Laboratories",
      period: "Jun 2025 - Aug 2025",
      bullets: [
        "Developed a data pipeline using Python & SQL to calculate the 'cost of poor execution' (COPE) by performing ETL on Google BigQuery data.",
        "Analyzed COPE distribution to identify key risk segments, saving an estimated 180+ hours of manual effort annually.",
        "Leveraged an LLM to accelerate building a multi-view dashboard in React & JavaScript for visualizing COPE metrics.",
        "Optimized legacy data analysis code for historical inventory tracking by implementing Dask for parallel processing.",
      ],
      tags: ["Python", "SQL", "BigQuery", "LLM", "React", "Dask"],
    },
    {
      role: "Research Assistant - NLP Lab",
      company: "Penn State Research",
      companyUrl: "https://nlp.psu.edu/",
      period: "Jan 2025 - May 2025",
      bullets: [
        "Worked under Dr. Wenpeng Yin on a study investigating LLM 'blind compliance' versus metacognitive reasoning, evaluating state-of-the-art models' ability to identify logically flawed premises.",
        "Curated and annotated a specialized dataset of erroneous questions, categorizing logical fallacies to benchmark model robustness and define failure modes in zero-shot reasoning tasks.",
      ],
      tags: ["NLP", "LLM Research", "Benchmarking", "Dataset Creation"],
    },
    {
      role: "Research Intern",
      company: "BITS Pilani",
      period: "May 2024 - Aug 2024",
      bullets: [
        "Developed a modular PyTorch framework to optimize an image classifier via a comparative analysis of CNN architectures.",
        "Implemented Tensor Methods for lossless compression on a dataset of 1.5 million high-resolution images.",
        "Deployed the image classifier into a production app, achieving 98% validation accuracy in predicting structural damage.",
      ],
      tags: ["PyTorch", "CNN", "Tensor Methods", "Computer Vision"],
    },
    {
      role: "Data Analyst",
      company: "The Daily Collegian",
      period: "Jan 2024 - May 2024",
      bullets: [
        "Automated a data pipeline using GraphAPI, Express, and Axios to track user engagement statistics for a Facebook page.",
        "Derived actionable insights from engagement metrics & demographics, boosting engagement by 15% in 4 months.",
      ],
      tags: ["GraphAPI", "Express", "Data Analytics", "Automation"],
    },
    {
      role: "Research Assistant - HTI Lab",
      company: "Penn State Research",
      companyUrl: "https://www.ime.psu.edu/research/facilities-and-labs/human-technology-interaction-lab.aspx",
      period: "Aug 2023 - Aug 2024",
      bullets: [
        "Worked with Dr. Yiqi Zhang on analyzing driver takeover quality in conditionally autonomous vehicles using eye gaze data.",
        "Built an XGBoost classification model using eye gaze & simulator data to predict driver takeover in AVs with 94% accuracy.",
        "Analyzed takeover quality vs. interface design using Tobii2 gaze data; presented findings at a university research exhibition.",
      ],
      tags: ["XGBoost", "Machine Learning", "Eye Tracking", "HCI"],
    },
    {
      role: "Learning Assistant",
      company: "Penn State College of Engineering",
      period: "Jul 2023 - Present",
      bullets: [
        "Worked with instructors to create meaningful assignments and course work for students in a 200 level course (Object-Oriented Programming with Java).",
        "Responsible for assisting with in-class activities, feedback on assignments, grading, and tutoring.",
      ],
      tags: ["Java", "OOP", "Teaching", "Mentorship"],
    },
    {
      role: "Research Assistant - HTI Lab",
      company: "Penn State Research",
      companyUrl: "https://www.ime.psu.edu/research/facilities-and-labs/human-technology-interaction-lab.aspx",
      period: "Oct 2022 - Aug 2023",
      bullets: [
        "Worked with Dr. Yiqi Zhang's group to design various decision-based interaction scenarios between Human driven and Autonomous vehicles.",
        "Augmented the behavior of autonomous vehicles in STISIM using SDL (Scenario Design Language).",
        "Used Action Trigger Settings, Position Settings and Basic Physics to match the constraints set forth in the decision-based interaction scenarios.",
      ],
      tags: ["STISIM", "SDL", "Autonomous Vehicles", "Simulation"],
    },
    {
      role: "Treasurer",
      company: "Indian Cultural and Language Club",
      period: "Sep 2022 - May 2025",
      bullets: [
        "Spearheaded fundraising and organized events for over 10,000 attendees, generating event revenues of $30,000.",
      ],
      tags: ["Leadership", "Finance", "Event Management"],
    },
  ]

  return (
    <main className="relative min-h-screen text-white px-4 md:px-8 lg:px-12 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16 md:mb-24">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-syncopate text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight"
          >
            EXPERIENCE
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

        <div className="relative">
          {/* Vertical spine line */}
          <div className="absolute left-4 md:left-8 top-4 bottom-0 w-0.5 bg-gradient-to-b from-[#42B0D5]/50 via-[#42B0D5] to-[#42B0D5]/10"></div>

          <div className="space-y-12 md:space-y-16 pl-12 md:pl-24">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{ willChange: "opacity, transform" }}
                className="relative w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 hover:bg-white/15 hover:border-[#42B0D5]/40 transition-colors duration-300 group shadow-lg shadow-black/10"
              >
                {/* Glowing dot connector */}
                <div className="absolute -left-[2.35rem] md:-left-[4.4rem] top-6 w-4 h-4 bg-[#0a0a0c] border-2 border-[#42B0D5] rounded-full shadow-[0_0_10px_rgba(66,176,213,0.5)] z-10">
                  <div className="absolute inset-1 bg-[#42B0D5] rounded-full animate-pulse"></div>
                </div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-syncopate text-xl md:text-2xl font-bold uppercase tracking-tight text-white group-hover:text-[#42B0D5] transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-[#42B0D5] font-space-grotesk text-lg font-semibold mt-1">
                      {/* @ts-ignore */}
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-white transition-colors border-b border-[#42B0D5]/30 hover:border-[#42B0D5]"
                        >
                          {exp.company}
                        </a>
                      ) : (
                        exp.company
                      )}
                    </p>
                  </div>
                  <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs md:text-sm text-neutral-400 font-space-grotesk font-medium whitespace-nowrap border border-white/5">
                    {exp.period}
                  </span>
                </div>

                {/* Bullet points */}
                <ul className="space-y-3 mb-6">
                  {exp.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="text-neutral-300 leading-relaxed font-space-grotesk text-sm md:text-base flex items-start"
                    >
                      <span className="text-[#42B0D5] mr-3 mt-1.5 w-1.5 h-1.5 bg-[#42B0D5] rounded-full flex-shrink-0"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#42B0D5]/5 border border-[#42B0D5]/20 rounded-full text-xs text-[#42B0D5]/80 font-space-grotesk"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
