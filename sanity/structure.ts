import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) => {
  const languageMetadata = S.listItem()
    .title("Translation Metadata")
    .child(
      S.documentList()
        .title("Translation Metadata")
        .filter('_type == "translation.metadata"')
    );

  const pageStructure = S.documentTypeListItems().filter(
    (item) => item.getId() === "page"
  );

  return S.list()
    .title("Content")
    .items([
      ...pageStructure,
      // languageMetadata
    ]);
};
