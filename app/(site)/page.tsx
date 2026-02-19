import Link from "next/link";
import Container from "@/components/Container";
import Square from "@/components/Square";
import FontSwitcherHeading from "@/components/FontSwitcherHeading";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import FooterCTA from "@/components/Footer/FooterCTA";
import SanityImage from "@/components/SanityImage";
import { sanityFetch } from "@/sanity/lib/live";
import { SITE_SETTINGS_QUERY, HOME_PAGE_QUERY } from "@/sanity/lib/queries";

export async function generateMetadata() {
  const { data } = await sanityFetch({ query: SITE_SETTINGS_QUERY, stega: false });
  const seo = data?.seo;
  return {
    title: seo?.siteTitle ?? "Preston Lloyd",
    description: seo?.siteDescription ?? "Preston Lloyd is a software engineer and designer.",
  };
}

export default async function Home() {
  const { data } = await sanityFetch({ query: HOME_PAGE_QUERY });
  const { hero, tools = [], brands = [] } = data;

  return (
    <>
      <Container asChild>
        <section>
          <div className="grid grid-cols-2 gap-4 items-center min-h-[70vh]">
            <div className="flex flex-col gap-4">
              <FontSwitcherHeading asChild>
                <h1 className="text-8xl text-stone-100">{hero?.title}</h1>
              </FontSwitcherHeading>

              <p className="text-lg">
                {hero?.subtitle}
              </p>

              <div className="flex gap-4">
                {(hero?.ctaHref && hero?.ctaLabel) && (
                  <Button asChild>
                    <Link href={hero.ctaHref}>
                      {hero.ctaLabel}
                    </Link>
                  </Button>
                )}
              </div>
            </div>
            <div className="relative">
              <Square color="bg-yellow-500/40" className="border border-yellow-500/40 w-56 absolute -top-8 left-4 -z-1" />
              {hero?.profileImage?.asset && (
                <SanityImage
                  value={hero.profileImage}
                  width={512}
                  height={512}
                  className="border border-white/60 rounded-xl w-full grayscale"
                />
              )}
              <Square color="bg-yellow-500/40" className="border border-yellow-500/40 backdrop-blur w-36 absolute -bottom-12 -right-8" />
            </div>
          </div>
        </section>
      </Container>

      <Container asChild>
        <section className="py-24">
          <Heading size="4xl" className="mb-8">My Tools</Heading>

          <div className="grid grid-cols-3 gap-4">
            {tools.map((group: { _key?: string; title: string; items?: string[] }, index: number) => (
              <div key={group._key ?? index} className="border border-stone-700 rounded-xl p-4">
                <Heading size="xl" asChild className="mb-4">
                  <h3>{group.title}</h3>
                </Heading>
                <ul>
                  {(group.items ?? []).map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </Container>

      <Container asChild>
        <section className="py-24">
          <Heading size="4xl" className="mb-8">Brands I&apos;ve Worked With</Heading>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {brands.map((brand: { _key?: string; name: string; logo?: { asset?: unknown } }, index: number) => (
              <div
                key={brand._key ?? index}
                className="aspect-square rounded-xl border border-stone-700 flex items-center justify-center text-stone-600 text-sm font-medium hover:border-stone-600 hover:text-stone-500 transition-colors overflow-hidden"
              >
                {brand.logo?.asset ? (
                  <SanityImage value={brand.logo as { asset?: { _id?: string; url?: string; metadata?: { lqip?: string } }; alt?: string }} width={120} height={120} className="object-contain p-4" />
                ) : (
                  brand.name
                )}
              </div>
            ))}
          </div>
        </section>
      </Container>

      <FooterCTA />
    </>
  );
}
