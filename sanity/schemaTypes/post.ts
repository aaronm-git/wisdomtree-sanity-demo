import { defineField, defineType } from 'sanity';
import { createSlugUniqueValidator } from '@/sanity/lib/slugUtils';

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
      language: 'language',
    },
    prepare: ({ title, subtitle, language }) => ({
      title: language ? `${title} (${language})` : title,
      subtitle,
    }),
  },
  groups: [
    {
      name: 'content',
      title: 'Content',
      default: true,
    },
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'language',
      title: 'Language',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
      options: {
        documentInternationalization: {
          exclude: true,
        },
      },
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'content',
      options: {
        source: 'title',
        isUnique: createSlugUniqueValidator('post'),
        documentInternationalization: {
          exclude: true,
        },
      },
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image-object',
      group: 'content',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      group: 'content',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'content',
    }),
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
      group: 'language',
    }),
  ],
});
