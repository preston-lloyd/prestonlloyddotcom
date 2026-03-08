import { defineType, defineField, defineArrayMember } from "sanity";
export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      validation: (r) => r.required(),
      options: { source: "title" },
    }),
    defineField({ name: "description", type: "text", validation: (r) => r.required() }),
    defineField({ name: "role", type: "string" }),
    defineField({ name: "year", type: "string" }),
    defineField({
      name: "technologies",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "highlights",
      type: "array",
      title: "Key Achievements",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({ name: "link", type: "url", title: "Project URL" }),
    defineField({ name: "linkLabel", type: "string", title: "Link Button Label" }),
  ],
  orderings: [
    { title: "Year (newest first)", name: "yearDesc", by: [{ field: "year", direction: "desc" }] },
    { title: "Year (oldest first)", name: "yearAsc", by: [{ field: "year", direction: "asc" }] },
    { title: "Title", name: "titleAsc", by: [{ field: "title", direction: "asc" }] },
  ],
  preview: {
    select: { title: "title", year: "year" },
    prepare: ({ title, year }) => ({
      title,
      subtitle: year ? `(${year})` : undefined,
    }),
  },
});
