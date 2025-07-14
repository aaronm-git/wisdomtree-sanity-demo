import { groq } from "next-sanity";

export const GET_PAGE_REFERENCE = groq`
  *[_type == "page" && slug.current == $slug && language == $language][0]
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
