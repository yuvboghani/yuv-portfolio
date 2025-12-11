"use client"

import { type LucideIcon, Terminal, BrainCircuit, Globe, Container, Database, GraduationCap } from "lucide-react"

interface SkillsCardProps {
    title: string
    icon: LucideIcon
    skills: string[]
}

export const skillsData = [
    {
        title: "Languages",
        icon: Terminal,
        skills: ["Python", "C", "C++", "Java", "SQL", "R", "JS/TS", "Bash", "Verilog"],
    },
    {
        title: "AI & Data",
        icon: BrainCircuit,
        skills: ["PyTorch", "TensorFlow", "PySpark", "Scikit-learn", "Pandas", "OpenCV", "XGBoost", "RAG", "LLMs"],
    },
    {
        title: "Web & Backend",
        icon: Globe,
        skills: ["React", "Next.js", "FastAPI", "Flask", "Spring Boot", "Node.js", "WebSockets"],
    },
    {
        title: "DevOps & Tools",
        icon: Container,
        skills: ["AWS", "GCP", "Docker", "CI/CD", "Git", "GDB", "Valgrind", "Linux"],
    },
    {
        title: "Databases",
        icon: Database,
        skills: ["PostgreSQL", "MongoDB", "Redis", "HDFS", "NoSQL"],
    },
    {
        title: "Coursework",
        icon: GraduationCap,
        skills: ["OS", "Comp Arch", "DSA", "NLP", "Deep Learning", "Computer Vision"],
    },
]

export function SkillsCard({ title, icon: Icon, skills }: SkillsCardProps) {
    return (
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 h-full min-w-[280px] hover:border-[#42B0D5]/50 transition-colors group">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
                <Icon className="w-5 h-5 text-[#42B0D5]/50 group-hover:text-[#42B0D5] transition-colors" />
                <h3 className="font-syncopate text-lg font-bold uppercase tracking-tight">
                    {title}
                </h3>
            </div>

            {/* Skill Pills */}
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="px-3 py-1 bg-[#42B0D5]/10 text-[#42B0D5] border border-[#42B0D5]/20 rounded-full text-xs font-space-grotesk"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    )
}
