import { type SchemaTypeDefinition } from 'sanity';
import heroBlock from './content/hero-video-block';
import heroSearchBlock from './content/hero-search-block';
import whatsNewBlock from './content/whats-new-block';
import * as objects from './objects';
import page from './page';
import post from './post';

const allObjects = [...Object.values(objects)];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [page, heroBlock, heroSearchBlock, whatsNewBlock, post, ...allObjects],
};
