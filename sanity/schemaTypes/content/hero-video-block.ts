import { defineField, defineType } from "sanity";

export default defineType({
  name: "hero-video-block",
  title: "Hero Video Block",
  description:
    "This video block is used to display a video in the hero section of the page. Make sure to use a secure URL for the video.",
  type: "object",
  preview: {
    select: {
      title: "heading.heading",
    },
    prepare: ({ title }) => ({ title }),
  },
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "heading-object",
    }),
    defineField({
      name: "videoUrl",
      title: "Video URL",
      type: "video-object",
    }),
  ],
});
