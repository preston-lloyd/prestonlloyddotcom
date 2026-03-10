import Link from "next/link"
import Heading from "@/components/Heading"
import Button from "@/components/Button"
import FadeIn from "@/components/FadeIn"
import { Project } from "@/lib/projects"

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <FadeIn amount={0.2} delay={0.35}>
      <article className="group border border-stone-700 rounded-xl p-6 lg:p-8 hover:border-stone-600 transition-colors">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <div className="flex-1">
            <div className="flex flex-wrap gap-3 mb-3">
              {project.role && (
                <span className="text-sm font-medium text-yellow-500/90 uppercase tracking-wider">
                  {project.role}
                </span>
              )}
              {project.year && (
                <span className="text-sm text-stone-500">{project.year}</span>
              )}
            </div>
            
            <Heading size="3xl" asChild className="mb-4 group-hover:text-yellow-500/90 transition-colors">
              <h2>{project.title}</h2>
            </Heading>

            <p className="text-stone-400 mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {(project.technologies ?? []).map((tech: string) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm bg-stone-800/60 border border-stone-700 rounded-md text-stone-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="shrink-0">
            <Button asChild>
              <Link href={`/work/${project.slug}`}>
                {project.linkLabel ?? "View Project"}
              </Link>
            </Button>
          </div>
        </div>
      </article>
    </FadeIn>
  )
}