import { defineField, defineType } from 'sanity';
import { createSlugUniqueValidator } from '@/sanity/lib/slugUtils';

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
      language: 'language',
    },
    prepare: ({ title, subtitle, language }) => ({
      title: `${title} (${language})`,
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
        isUnique: createSlugUniqueValidator('page'),
        documentInternationalization: {
          exclude: true,
        },
      },
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'page-seo-object',
      group: 'seo',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'hero-video-block' }, { type: 'hero-search-block' }, { type: 'whats-new-block' }],
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
