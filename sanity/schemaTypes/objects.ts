import { defineField, defineType } from 'sanity';

export const headingType = defineType({
  name: 'heading-object',
  type: 'object',
  fields: [
    defineField({
      name: 'eyebrowText',
      title: 'Eyebrow Text',
      type: 'string',
      description: 'The text to display in the eyebrow of the heading.',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'The text to display in the heading.',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      description: 'The text to display in the subheading of the heading.',
    }),
  ],
});

export const videoType = defineType({
  name: 'video-object',
  type: 'object',
  fields: [
    defineField({
      name: 'videoLabel',
      type: 'string',
    }),
    defineField({
      name: 'thumbnailUrl',
      title: 'Thumbnail URL',
      type: 'string',
      description:
        'The URL of the thumbnail image for the video. This is used to display a thumbnail image in the hero section of the page.',
    }),
    defineField({
      name: 'videoUrl',
      type: 'string',
      title: 'Video URL',
    }),
  ],
});

export const imageType = defineType({
  name: 'image-object',
  type: 'object',
  fields: [
    defineField({
      name: 'imageUrl',
      type: 'string',
      title: 'Image URL',
      description: 'The URL of the image to display.',
    }),
    defineField({
      name: 'altText',
      type: 'string',
      title: 'Alt Text',
      description: 'The alt text for the image. This is used to describe the image to screen readers.',
    }),
  ],
});

export const linkType = defineType({
  name: 'link-object',
  type: 'object',
  preview: {
    select: {
      title: 'linkLabel',
      subtitle: 'linkUrl',
    },
    prepare: ({ title, subtitle }) => ({ title, subtitle }),
  },
  fields: [
    defineField({
      name: 'linkLabel',
      type: 'string',
      title: 'Link Label',
      description: 'The label of the link. This is used to display the link text.',
    }),
    defineField({
      name: 'linkUrl',
      type: 'string',
      title: 'Link URL',
      description: 'The URL of the link. This is used to navigate to the link.',
    }),
  ],
});

export const topPagesType = defineType({
  name: 'top-pages-object',
  type: 'object',
  fields: [
    defineField({
      name: 'topPages',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'page' }],
        },
      ],
      title: 'Top Pages',
      description: 'The top pages to display in the top pages block.',
    }),
    defineField({
      name: 'maxPages',
      type: 'number',
      title: 'Max Pages',
      description: 'The maximum number of pages to display in the top pages block.',
    }),
  ],
});

export const pageSeoObject = defineType({
  name: 'page-seo-object',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The title of the page.',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'The description of the page.',
    }),
    defineField({
      name: 'featuredImage',
      type: 'string',
      title: 'Featured Image URL',
      description: 'The featured image URL of the page.',
    }),
    defineField({
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'The keywords of the page.',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'disallowRobots',
      type: 'boolean',
      title: 'Disallow Robots',
      initialValue: false,
      description: 'Whether to disallow robots from indexing the page.',
    }),
    defineField({
      name: 'canonicalUrl',
      type: 'string',
      title: 'Canonical URL',
      description: 'The canonical URL of the page.',
    }),
  ],
});
