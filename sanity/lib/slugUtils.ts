import { client } from './client';

type SlugContext = {
  document?: {
    language?: string;
    _id?: string;
  };
};

export const createSlugUniqueValidator = (
  documentType: string
): ((value: string, context: SlugContext) => Promise<boolean>) => {
  return async (value: string, context: SlugContext) => {
    const { document } = context;
    const currentLanguage = document?.language;
    const currentId = document?._id;

    // Get the base ID (without draft prefix) to exclude both draft and published versions
    const baseId = currentId?.replace(/^drafts\./, '');

    if (!currentLanguage) {
      // For documents without language, check uniqueness among other documents without language
      const existingSlug = await client.fetch(
        `*[_type == $documentType && slug.current == $value && !defined(language) && _id != $currentId && _id != $draftId && _id != $baseId][0]`,
        {
          documentType,
          value,
          currentId,
          draftId: `drafts.${baseId}`,
          baseId,
        }
      );
      return !existingSlug;
    } else {
      // For documents with language, check uniqueness within the same language
      const existingSlug = await client.fetch(
        `*[_type == $documentType && slug.current == $value && language == $language && _id != $currentId && _id != $draftId && _id != $baseId][0]`,
        {
          documentType,
          value,
          language: currentLanguage,
          currentId,
          draftId: `drafts.${baseId}`,
          baseId,
        }
      );
      return !existingSlug;
    }
  };
};
