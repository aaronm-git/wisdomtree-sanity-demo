import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'whats-new-block',
  title: "What's New Block",
  description: 'A block that displays a list of what is new from the blog.',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
});
