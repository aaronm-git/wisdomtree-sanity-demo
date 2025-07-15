import type { StructureResolver } from 'sanity/structure';
import { SUPPORTED_LANGUAGES } from './lib/languages';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = S => {
  // const languageMetadata = S.listItem()
  //   .title("Translation Metadata")
  //   .child(
  //     S.documentList()
  //       .title("Translation Metadata")
  //       .filter('_type == "translation.metadata"')
  //   );

  const pageStructure = S.listItem()
    .title('Pages')
    .child(
      S.list()
        .title('Pages by Language')
        .items([
          // All pages (no language filter)
          S.listItem().title('All Pages').child(S.documentTypeList('page').title('All Pages')),
          S.divider(),
          // Language-specific pages
          ...SUPPORTED_LANGUAGES.map(lang =>
            S.listItem()
              .title(`${lang.title} Pages`)
              .child(
                S.documentTypeList('page')
                  .title(`${lang.title} Pages`)
                  .filter(`_type == "page" && language == "${lang.id}"`)
                  .initialValueTemplates([
                    S.initialValueTemplateItem('page-with-language', {
                      language: lang.id,
                    }),
                  ])
              )
          ),
          S.divider(),
          // Pages without language
          S.listItem()
            .title('Pages (No Language)')
            .child(
              S.documentTypeList('page')
                .title('Pages (No Language)')
                .filter('_type == "page" && !defined(language)')
                .initialValueTemplates([S.initialValueTemplateItem('page-no-language')])
            ),
        ])
    );

  const postStructure = S.listItem()
    .title('Blog')
    .child(
      S.list()
        .title('Posts by Language')
        .items([
          // All posts (no language filter)
          S.listItem().title('All Posts').child(S.documentTypeList('post').title('All Posts')),
          S.divider(),
          // Language-specific posts
          ...SUPPORTED_LANGUAGES.map(lang =>
            S.listItem()
              .title(`${lang.title} Posts`)
              .child(
                S.documentTypeList('post')
                  .title(`${lang.title} Posts`)
                  .filter(`_type == "post" && language == "${lang.id}"`)
                  .initialValueTemplates([
                    S.initialValueTemplateItem('post-with-language', {
                      language: lang.id,
                    }),
                  ])
              )
          ),
          S.divider(),
          // Posts without language
          S.listItem()
            .title('Posts (No Language)')
            .child(
              S.documentTypeList('post')
                .title('Posts (No Language)')
                .filter('_type == "post" && !defined(language)')
                .initialValueTemplates([S.initialValueTemplateItem('post-no-language')])
            ),
        ])
    );

  return S.list().title('Content').items([
    pageStructure,
    postStructure,
    // languageMetadata
  ]);
};
