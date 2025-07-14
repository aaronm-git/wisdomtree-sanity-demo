import { groq } from "next-sanity";

export const GET_PAGE_REFERENCE = groq`
  *[_type == "page" && slug.current == $slug && language == $language][0]
`;
