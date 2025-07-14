import { defineField, defineType } from "sanity";

export const headingType = defineType({
  name: "heading-object",
  type: "object",
  fields: [
    defineField({
      name: "eyebrowText",
      title: "Eyebrow Text",
      type: "string",
      description: "The text to display in the eyebrow of the heading.",
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      description: "The text to display in the heading.",
    }),
    defineField({
      name: "subheading",
      title: "Subheading",
      type: "string",
      description: "The text to display in the subheading of the heading.",
    }),
  ],
});

export const videoType = defineType({
  name: "video-object",
  type: "object",
  fields: [
    defineField({
      name: "videoLabel",
      type: "string",
    }),
    defineField({
      name: "thumbnailUrl",
      title: "Thumbnail URL",
      type: "string",
      description:
        "The URL of the thumbnail image for the video. This is used to display a thumbnail image in the hero section of the page.",
    }),
    defineField({
      name: "videoUrl",
      type: "string",
      title: "Video URL",
    }),
  ],
});

export const imageType = defineType({
  name: "image-object",
  type: "object",
  fields: [
    defineField({
      name: "imageUrl",
      type: "string",
      title: "Image URL",
      description: "The URL of the image to display.",
    }),
    defineField({
      name: "altText",
      type: "string",
      title: "Alt Text",
      description:
        "The alt text for the image. This is used to describe the image to screen readers.",
    }),
  ],
});

export const linkType = defineType({
  name: "link-object",
  type: "object",
  preview: {
    select: {
      title: "linkLabel",
      subtitle: "linkUrl",
    },
    prepare: ({ title, subtitle }) => ({ title, subtitle }),
  },
  fields: [
    defineField({
      name: "linkLabel",
      type: "string",
      title: "Link Label",
      description:
        "The label of the link. This is used to display the link text.",
    }),
    defineField({
      name: "linkUrl",
      type: "string",
      title: "Link URL",
      description: "The URL of the link. This is used to navigate to the link.",
    }),
  ],
});
