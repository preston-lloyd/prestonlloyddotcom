import Link from "next/link";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import FooterCTA from "@/components/Footer/FooterCTA";
import { sanityFetch } from "@/sanity/lib/live";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";

export const metadata = {
  title: "Work",
  description: "Selected projects and case studies by Preston Lloyd — software engineer and designer.",
};

export default async function WorkPage() {
  const { data: projectsData } = await sanityFetch({ query: PROJECTS_QUERY });
  const projects = projectsData ?? [];

  return (
    <>
      <Container asChild>
        <section className="py-16">
          <div className="mb-16">
            <Heading size="6xl" asChild className="mb-4">
              <h1>Selected Work</h1>
            </Heading>
            <p className="text-lg text-stone-500 max-w-2xl">
              A selection of projects I&apos;ve worked on — from full-stack applications to design systems and APIs.
            </p>
          </div>

          {projects.length > 0 ? (
            <div className="grid gap-8 lg:gap-12">
              {projects.map((project: { _id: string; slug: string; title: string; description: string; role?: string; year?: string; technologies?: string[]; linkLabel?: string }) => (
                <article
                  key={project._id}
                  className="group border border-stone-700 rounded-xl p-6 lg:p-8 hover:border-stone-600 transition-colors"
                >
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
                      <p className="text-stone-400 mb-6">{project.description}</p>
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
              ))}
            </div>
          ) : (
            <p className="text-stone-500">No projects yet. Add projects in Sanity Studio to see them here.</p>
          )}
        </section>
      </Container>

      <FooterCTA />
    </>
  );
}
