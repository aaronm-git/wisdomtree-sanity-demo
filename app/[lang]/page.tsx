// import { getDictionary } from "./dictionaries";
import HeaderWrapper from "@/app/components/layout/header-wrapper";
import { client } from "@/sanity/lib/client";
import RenderContentBlocks from "@/app/RenderContentBlocks";
import {
  GET_PAGE_REFERENCE,
  GET_AVAILABLE_LANGUAGES,
} from "@/sanity/lib/queries";
import { GET_PAGE_REFERENCEResult } from "@/sanity.types";

export async function generateStaticParams() {
  const languages = await client.fetch(GET_AVAILABLE_LANGUAGES);
  const uniqueLanguages = [
    ...new Set(languages.map((item: { language: string }) => item.language)),
  ].filter(Boolean) as string[];

  return uniqueLanguages.map((lang) => ({
    lang: lang,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  const page: GET_PAGE_REFERENCEResult = await client.fetch(
    GET_PAGE_REFERENCE,
    {
      slug: "homepage",
      language: lang,
    }
  );

  return (
    <div>
      <HeaderWrapper lang={lang} />
      <RenderContentBlocks blocks={page?.content || []} />
    </div>
  );
}
