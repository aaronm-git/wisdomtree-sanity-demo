import { type SchemaTypeDefinition } from "sanity";
import heroBlock from "./content/hero-video-block";
import heroSearchBlock from "./content/hero-search-block";
import * as objects from "./objects";
import page from "./page";

const allObjects = [...Object.values(objects)];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [page, heroBlock, heroSearchBlock, ...allObjects],
};
