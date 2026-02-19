import Container from "@/components/Container";
import Heading from "@/components/Heading";
import FooterCTA from "@/components/Footer/FooterCTA";
import ProjectCard from "./ProjectCard";
import { sanityFetch } from "@/sanity/lib/live";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";

export const metadata = {
  title: "Work",
  description: "Selected projects and case studies by Preston Lloyd — software engineer.",
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
                <ProjectCard key={project._id} project={project} />
              ))}
            </div>
          ) : (
            <p className="text-stone-500">No projects found. Something is broken...</p>
          )}
        </section>
      </Container>

      <FooterCTA />
    </>
  );
}
