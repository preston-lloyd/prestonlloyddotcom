import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  groups: [
    { name: "footerCta", title: "Footer CTA", default: true },
    { name: "footer", title: "Footer" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      name: "footerCta",
      type: "object",
      group: "footerCta",
      fields: [
        defineField({ name: "title", type: "string", validation: (r) => r.required() }),
        defineField({ name: "description", type: "text" }),
        defineField({ name: "ctaLabel", type: "string", title: "CTA Button Label" }),
      ],
    }),
    defineField({
      name: "footer",
      type: "object",
      group: "footer",
      fields: [
        defineField({
          name: "copyrightName",
          type: "string",
          title: "Copyright Name",
          description: "e.g. Preston Lloyd",
        }),
      ],
    }),
    defineField({
      name: "seo",
      type: "object",
      group: "seo",
      fields: [
        defineField({ name: "siteTitle", type: "string", title: "Site Title" }),
        defineField({ name: "siteDescription", type: "text", title: "Site Description" }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site Settings" }),
  },
});
