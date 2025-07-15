import { groq } from 'next-sanity';

export const GET_PAGE_REFERENCE = groq`
  *[_type == "page" && slug.current == $slug][0]
`;

// Query to get page by document ID (for references)
export const GET_PAGE_BY_ID = groq`
  *[_type == "page" && _id == $id][0] {
    _id,
    ...
  }
`;

// Query to get all available languages from pages
export const GET_AVAILABLE_LANGUAGES = groq`
  *[_type == "page"] | order(language asc) {
    language
  }
`;

// Query to get all pages for a specific language
export const GET_PAGES_BY_LANGUAGE = groq`
  *[_type == "page" && language == $language] {
    _id,
    title,
    slug,
    language
  }
`;

// Get a single page by language and slug
export const GET_PAGE_BY_LANGUAGE_AND_SLUG = groq`
  *[_type == "page" && language == $language && slug.current == $slug][0]
`;

// Query to get homepage for all languages
export const GET_ALL_HOMEPAGE_LANGUAGES = groq`
  *[_type == "page" && slug.current == "home"] {
    _id,
    title,
    slug,
    language,
    content
  }
`;

export const GET_POSTS_BY_LANGUAGE = groq`
  *[_type == "post" && language == $language] | order(publishedDate desc)
`;
