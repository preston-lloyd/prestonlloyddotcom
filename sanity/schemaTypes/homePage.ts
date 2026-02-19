import { defineType, defineField, defineArrayMember } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "tools", title: "Tools & Skills" },
    { name: "brands", title: "Brands" },
  ],
  fields: [
    defineField({
      name: "hero",
      type: "object",
      group: "hero",
      fields: [
        defineField({ name: "title", type: "string", validation: (r) => r.required() }),
        defineField({ name: "subtitle", type: "text" }),
        defineField({ name: "ctaLabel", type: "string", title: "CTA Button Label" }),
        defineField({ name: "ctaHref", type: "string", title: "CTA Button Link" }),
        defineField({
          name: "profileImage",
          type: "image",
          title: "Profile Image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", type: "string", title: "Alt text" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "tools",
      type: "array",
      group: "tools",
      title: "Skill Groups",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", type: "string", validation: (r) => r.required() }),
            defineField({
              name: "items",
              type: "array",
              of: [defineArrayMember({ type: "string" })],
            }),
          ],
          preview: {
            select: { title: "title" },
            prepare: ({ title }) => ({ title: title || "Skill Group" }),
          },
        }),
      ],
    }),
    defineField({
      name: "brands",
      type: "array",
      group: "brands",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "name", type: "string", validation: (r) => r.required() }),
            defineField({
              name: "logo",
              type: "image",
              options: { hotspot: true },
              fields: [
                defineField({ name: "alt", type: "string", title: "Alt text" }),
              ],
            }),
          ],
          preview: {
            select: { name: "name" },
            prepare: ({ name }) => ({ title: name || "Brand" }),
          },
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Home Page" }),
  },
});
