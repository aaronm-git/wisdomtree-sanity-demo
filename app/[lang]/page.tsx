// import { getDictionary } from "./dictionaries";
import HeaderWrapper from "@/app/components/layout/header-wrapper";
import { client } from "@/sanity/lib/client";
import RenderContentBlocks from "@/app/RenderContentBlocks";
import { GET_PAGE_REFERENCE } from "@/sanity/lib/queries";
import { GET_PAGE_REFERENCEResult } from "@/sanity.types";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: "en-us" | "en-uk" | "es" | "fr" }>;
}) {
  const { lang } = await params;
  // const dict = await getDictionary(lang);

  const page: GET_PAGE_REFERENCEResult = await client.fetch(
    GET_PAGE_REFERENCE,
    {
      slug: "home",
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
