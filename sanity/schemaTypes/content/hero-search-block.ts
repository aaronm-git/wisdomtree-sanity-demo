import { defineType, defineField } from "sanity";

export default defineType({
  name: "hero-search-block",
  title: "Hero Search Block",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "heading-object",
    }),
    defineField({
      name: "searchLabel",
      title: "Search Label",
      type: "string",
    }),
    defineField({
      name: "showTopPages",
      title: "Show Top Pages",
      type: "boolean",
    }),
    defineField({
      name: "topPages",
      title: "Top Pages",
      type: "top-pages-object",
      hidden: ({ parent }) => !parent?.showTopPages,
    }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image-object",
    }),
  ],
});
