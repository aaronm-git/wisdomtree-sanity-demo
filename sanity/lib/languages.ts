// Supported languages from Sanity config
export const SUPPORTED_LANGUAGES = [
  { id: "en-us", title: "English" },
  { id: "en-uk", title: "English (UK)" },
  { id: "es", title: "Spanish" },
  { id: "fr", title: "French" },
] as const;

export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number]["id"];

export const DEFAULT_LANGUAGE: SupportedLanguage = "en-us";

export const getLanguageTitle = (id: string): string => {
  const language = SUPPORTED_LANGUAGES.find((lang) => lang.id === id);
  return language?.title || id;
};

export const isValidLanguage = (lang: string): lang is SupportedLanguage => {
  return SUPPORTED_LANGUAGES.some((language) => language.id === lang);
};
