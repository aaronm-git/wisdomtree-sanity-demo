'use client';
import { documentInternationalization } from '@sanity/document-internationalization';

/**
 * This configuration is used to for the Sanity Studio that's mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './sanity/env';
import { schema } from './sanity/schemaTypes';
import { structure } from './sanity/structure';

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema: {
    types: schema.types,
    templates: prev => [
      ...prev,
      // Page templates
      {
        id: 'page-with-language',
        title: 'Page',
        schemaType: 'page',
        parameters: [{ name: 'language', type: 'string' }],
        value: ({ language }: { language: string }) => ({
          language,
        }),
      },
      {
        id: 'page-no-language',
        title: 'Page',
        schemaType: 'page',
        value: () => ({}),
      },
      // Post templates
      {
        id: 'post-with-language',
        title: 'Post',
        schemaType: 'post',
        parameters: [{ name: 'language', type: 'string' }],
        value: ({ language }: { language: string }) => ({
          language,
        }),
      },
      {
        id: 'post-no-language',
        title: 'Post',
        schemaType: 'post',
        value: () => ({}),
      },
    ],
  },
  plugins: [
    structureTool({ structure }),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    documentInternationalization({
      // Required configuration
      supportedLanguages: [
        { id: 'en-us', title: 'English' },
        { id: 'en-uk', title: 'English (UK)' },
        { id: 'es', title: 'Spanish' },
        { id: 'fr', title: 'French' },
      ],
      schemaTypes: ['page', 'post'],
    }),
  ],
});
