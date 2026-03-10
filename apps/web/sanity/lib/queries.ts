import { defineQuery } from "next-sanity";

const imageFragment = `
  asset->{
    _id,
    url,
    metadata { lqip, dimensions }
  },
  alt
`;

export const SITE_SETTINGS_QUERY = defineQuery(`
  *[_id == "siteSettings"][0] {
    footerCta {
      title,
      description,
      ctaLabel
    },
    footer {
      copyrightName
    },
    seo {
      siteTitle,
      siteDescription
    }
  }
`);

export const HOME_PAGE_QUERY = defineQuery(`
  *[_id == "homePage"][0] {
    hero {
      title,
      subtitle,
      ctaLabel,
      ctaHref,
      profileImage {
        ${imageFragment}
      }
    },
    tools[] {
      title,
      items
    },
    brands[] {
      name,
      logo {
        ${imageFragment}
      }
    }
  }
`);

export const PROJECTS_QUERY = defineQuery(`
  *[_type == "project" && defined(slug.current)] | order(year desc) {
    _id,
    title,
    "slug": slug.current,
    description,
    role,
    year,
    technologies,
    highlights,
    link,
    linkLabel
  }
`);

export const PROJECT_QUERY = defineQuery(`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    description,
    role,
    year,
    technologies,
    highlights,
    link,
    linkLabel
  }
`);

export const CONTACT_PAGE_QUERY = defineQuery(`
  *[_id == "contactPage"][0] {
    title,
    description,
    contactLinks[] {
      label,
      url
    }
  }
`);
