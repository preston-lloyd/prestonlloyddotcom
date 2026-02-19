import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import { sanityFetch } from "@/sanity/lib/live";
import { PROJECT_QUERY, PROJECTS_QUERY } from "@/sanity/lib/queries";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const { data: projectsData } = await sanityFetch({
    query: PROJECTS_QUERY,
    perspective: "published",
    stega: false,
  });
  const projects = projectsData ?? [];
  return projects.map((p: { slug: string }) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const { data: project } = await sanityFetch({
    query: PROJECT_QUERY,
    params: { slug },
    stega: false,
  });
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const { data: project } = await sanityFetch({
    query: PROJECT_QUERY,
    params: { slug },
  });

  if (!project) {
    notFound();
  }

  return (
    <Container asChild>
      <article className="py-16">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-yellow-500 transition-colors mb-12"
        >
          ← Back to Work
        </Link>

        <header className="mb-12">
          <div className="flex flex-wrap gap-3 mb-4">
            {project.role && (
              <span className="text-sm font-medium text-yellow-500/90 uppercase tracking-wider">
                {project.role}
              </span>
            )}
            {project.year && (
              <span className="text-sm text-stone-500">{project.year}</span>
            )}
          </div>
          <Heading size="6xl" asChild className="mb-6">
            <h1>{project.title}</h1>
          </Heading>
          <p className="text-xl text-stone-400 max-w-3xl">{project.description}</p>
        </header>

        {(project.technologies?.length ?? 0) > 0 && (
          <div className="flex flex-wrap gap-2 mb-12">
            {project.technologies!.map((tech: string) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-sm bg-stone-800/60 border border-stone-700 rounded-md text-stone-400"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {project.highlights && project.highlights.length > 0 && (
          <section className="mb-12">
            <Heading size="xl" asChild className="mb-6">
              <h2>Key Achievements</h2>
            </Heading>
            <ul className="space-y-3">
              {project.highlights.map((highlight: string, index: number) => (
                <li key={index} className="flex items-start gap-3 text-stone-400">
                  <span className="text-yellow-500 shrink-0">→</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {project.link && (
          <Button asChild>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.linkLabel ?? "View Live Site"}
            </a>
          </Button>
        )}

        <div className="mt-16 pt-8 border-t border-stone-700">
          <Button asChild>
            <Link href="/work">← Back to All Work</Link>
          </Button>
        </div>
      </article>
    </Container>
  );
}
