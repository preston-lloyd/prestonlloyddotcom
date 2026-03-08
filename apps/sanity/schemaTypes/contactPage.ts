import { defineType, defineField, defineArrayMember } from "sanity";
export const contactPage = defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", type: "text" }),
    defineField({
      name: "contactLinks",
      type: "array",
      title: "Direct Contact Links",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "label", type: "string", validation: (r) => r.required() }),
            defineField({ name: "url", type: "url", validation: (r) => r.required() }),
          ],
          preview: {
            select: { label: "label" },
            prepare: ({ label }) => ({ title: label || "Contact Link" }),
          },
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Contact Page" }),
  },
});
