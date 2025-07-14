import { defineField, defineType } from "sanity";

export default defineType({
  name: "page",
  title: "Page",
  type: "document",
  groups: [
    {
      name: "content",
      title: "Content",
      default: true,
    },
    {
      name: "language",
      title: "Language",
    },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "content",
      options: {
        documentInternationalization: {
          exclude: true,
        },
      },
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "content",
      options: {
        isUnique: () => {
          return true;
        },
        documentInternationalization: {
          exclude: true,
        },
      },
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "hero-video-block" }],
      group: "content",
    }),
    defineField({
      name: "language",
      type: "string",
      readOnly: true,
      hidden: false,
      group: "language",
    }),
  ],
});
