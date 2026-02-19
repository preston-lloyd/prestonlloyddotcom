import Container from "@/components/Container";
import Heading from "@/components/Heading";
import { submitContactForm } from "./actions";
import ContactForm from "./ContactForm";
import { sanityFetch } from "@/sanity/lib/live";
import { CONTACT_PAGE_QUERY } from "@/sanity/lib/queries";

export async function generateMetadata() {
  const { data } = await sanityFetch({ query: CONTACT_PAGE_QUERY, stega: false });
  return {
    title: data?.title ?? "Contact",
    description: data?.description ?? "Get in touch with Preston Lloyd for projects, collaborations, or just to say hello.",
  };
}

export default async function ContactPage() {
  const { data } = await sanityFetch({ query: CONTACT_PAGE_QUERY });

  const title = data?.title ?? "Get in Touch";
  const description =
    data?.description ??
    "I'm always open to discussing new projects, collaborations, or opportunities. Send me a message and I'll get back to you as soon as I can.";
  const contactLinks = data?.contactLinks ?? [
    { label: "hello@prestonlloyd.com", url: "mailto:hello@prestonlloyd.com" },
    { label: "LinkedIn", url: "https://linkedin.com/in/prestonlloyd" },
  ];

  return (
    <Container asChild>
      <section className="py-16">
        <div className="max-w-2xl">
          <Heading size="6xl" asChild className="mb-4">
            <h1>{title}</h1>
          </Heading>
          <p className="text-lg text-stone-500 mb-12">{description}</p>

          <ContactForm submitAction={submitContactForm} />

          <div className="mt-16 pt-12 border-t border-stone-700">
            <h3 className="text-sm font-medium text-stone-500 uppercase tracking-wider mb-4">
              Or reach out directly
            </h3>
            <ul className="space-y-2">
              {contactLinks.map(
                (
                  link: { _key?: string; label: string; url: string },
                  index: number
                ) => (
                  <li key={link._key ?? index}>
                    <a
                      href={link.url}
                      target={link.url.startsWith("http") ? "_blank" : undefined}
                      rel={
                        link.url.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-stone-400 hover:text-yellow-500 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </section>
    </Container>
  );
}
