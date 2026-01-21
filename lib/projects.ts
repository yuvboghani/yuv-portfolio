// Shared project data used across the portfolio
export interface Project {
    slug: string
    title: string
    tagline: string
    description: string
    fullDescription: string
    tags: string[]
    image: string
    icon?: string
    accentColor: string
    demoLink?: string
    githubLink?: string
    blogSlug?: string
    status: "deployed" | "development" | "concept"
    featured: boolean
}

export const projects: Project[] = [
    {
        slug: "aevum",
        title: "Aevum",
        tagline: "AI-Powered Time Intelligence",
        description: "Smart calendar assistant with natural language scheduling",
        fullDescription:
            "Aevum is an intelligent time management system that uses NLP to understand natural language scheduling requests. It integrates with Google Calendar and uses LLM-powered analysis to optimize your schedule, suggest meeting times, and provide insights into time allocation patterns.",
        tags: ["Next.js", "OpenAI", "Google Calendar API", "TypeScript", "Prisma"],
        image: "/aevum-hero.png",
        accentColor: "#6366f1",
        status: "deployed",
        featured: true,
    },
    {
        slug: "clarityflow",
        title: "ClarityFlow",
        tagline: "Visual Task Management",
        description: "Kanban-style project management with AI summaries",
        fullDescription:
            "ClarityFlow reimagines project management with real-time collaboration, AI-powered task summarization, and beautiful visualizations. Built for teams who want clarity in their workflow without the complexity of enterprise tools.",
        tags: ["React", "Supabase", "Gemini AI", "Framer Motion", "WebSockets"],
        image: "/data-analytics-dashboard-metrics.jpg",
        accentColor: "#10b981",
        status: "concept",
        featured: false,
    },
    {
        slug: "firewatch",
        title: "FireWatch",
        tagline: "HPC Wildfire Simulation",
        description: "WRF-SFire modeling on Penn State's ICDS Roar Cluster",
        fullDescription:
            "A supercomputing initiative running on the Penn State ICDS Roar Cluster. This project compiles and executes the WRF-SFire model to simulate the 2018 Camp Fire in Butte County, CA. It involves complex compilation of Fortran/C static libraries to resolve architecture-specific (SIGILL) errors and integrates high-resolution LANDFIRE fuel data.",
        tags: ["C/Fortran", "WRF-SFire", "MPI/OpenMP", "Python", "HPC", "Linux"],
        image: "/neural-network-deep-learning-research.jpg",
        accentColor: "#f59e0b",
        status: "development",
        featured: false,
    },
    {
        slug: "buxbalance",
        title: "BuxBalance",
        tagline: "Financial Command Center",
        description: "AI-powered personal finance with magic bento UI",
        fullDescription:
            "A hybrid personal finance platform combining the aesthetic visibility of Monarch Money with the subscription rigor of Rocket Money. Features a 'Magic Bento' UI, AI-powered transaction categorization using Gemini 2.5 Flash, and a massive interactive Sankey diagram for cash flow visualization.",
        tags: ["Next.js", "Firebase", "Gemini AI", "Plaid", "Recharts", "Framer Motion"],
        image: "/stock-market-charts.jpg",
        accentColor: "#8b5cf6",
        status: "development",
        featured: false,
    },
    {
        slug: "chatdnd",
        title: "ChatDnD",
        tagline: "Multi-Agent AI Dungeon Master",
        description: "LangGraph-powered conversational game engine",
        fullDescription:
            "Built a conversational AI system using LangGraph and MongoDB for managing complex multi-agent interactions in D&D gameplay. Integrated WebSockets for real-time communication.",
        tags: ["Python", "LangGraph", "MongoDB", "WebSockets"],
        image: "/fantasy-dungeon-ai.jpg",
        accentColor: "#dc2626",
        status: "deployed",
        featured: false,
    },
    {
        slug: "lidar-fusion",
        title: "LiDAR Fusion Project",
        tagline: "Real-Time 3D Spatial Localization",
        description: "Sensor fusion pipeline for autonomous vehicles",
        fullDescription:
            "Engineered a real-time sensor fusion pipeline in ROS 2 Humble using Python and OpenCV, implementing robust synchronization of high-frequency LiDAR and camera data via Best Effort QoS policies. Integrated this fused output with YOLO object detection to assign precise distance metrics to 2D bounding boxes.",
        tags: ["ROS 2", "LiDAR", "Sensor Fusion", "OpenCV", "Python", "YOLO"],
        image: "/autonomous-vehicle-self-driving-car.jpg",
        accentColor: "#0ea5e9",
        status: "deployed",
        featured: false,
    },
]

export const featuredProjects = projects.filter((p) => p.featured)

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug)
}
