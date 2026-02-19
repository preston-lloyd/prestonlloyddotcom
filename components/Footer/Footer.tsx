import { sanityFetch } from "@/sanity/lib/live";
import { SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";

export default async function Footer() {
  const { data } = await sanityFetch({ query: SITE_SETTINGS_QUERY });
  const copyrightName = data?.footer?.copyrightName ?? "Preston Lloyd";

  return (
    <footer className="text-center text-sm text-stone-500 py-8">
      <span>© {new Date().getFullYear()} {copyrightName}</span>
    </footer>
  );
}
