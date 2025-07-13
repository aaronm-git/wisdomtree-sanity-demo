import "server-only";

const dictionaries = {
  "en-us": () =>
    import("@/dictionaries/us-en.json").then((module) => module.default),
  "en-uk": () =>
    import("@/dictionaries/en-uk.json").then((module) => module.default),
  es: () => import("@/dictionaries/es.json").then((module) => module.default),
  fr: () => import("@/dictionaries/fr.json").then((module) => module.default),
};

export const getDictionary = async (locale: "en-us" | "en-uk" | "es" | "fr") =>
  dictionaries[locale]();
