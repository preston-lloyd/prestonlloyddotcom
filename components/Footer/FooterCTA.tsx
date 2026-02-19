import Container from "@/components/Container";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";

export default async function FooterCTA() {
  const { data } = await sanityFetch({ query: SITE_SETTINGS_QUERY });
  const footerCta = data?.footerCta;

  const title = footerCta?.title ?? "Ready to Work Together?";
  const description =
    footerCta?.description ??
    "I'm always looking for new projects and collaborations. If you have a project in mind, please get in touch.";
  const ctaLabel = footerCta?.ctaLabel ?? "Contact Me";

  return (
    <Container className="mt-8">
      <section className="bg-yellow-500 text-white p-8 rounded-xl flex flex-col lg:flex-row justify-between items-end gap-4">
        <div>
          <h2 className="text-2xl font-bold uppercase tracking-widest">{title}</h2>
          <p className="text-lg text-yellow-100 text-balance">{description}</p>
        </div>
        <div className="shrink-0">
          <Link
            href="/contact"
            className="inline-flex text-center uppercase font-medium tracking-widest px-4 py-2 bg-white text-yellow-500 rounded-md"
          >
            {ctaLabel}
          </Link>
        </div>
      </section>
    </Container>
  );
}
