import { projects } from "@/lib/projects"
import ProjectLandingPage from "./project-landing-page"

// Generate static params for all projects
export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }))
}

interface ProjectPageProps {
    params: Promise<{ slug: string }>
}

export default async function Page({ params }: ProjectPageProps) {
    const { slug } = await params
    return <ProjectLandingPage slug={slug} />
}
