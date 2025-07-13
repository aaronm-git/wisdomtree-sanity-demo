import { getDictionary } from "./dictionaries";
import HeaderWrapper from "@/app/components/layout/header-wrapper";
export default async function Page({
  params,
}: {
  params: Promise<{ lang: "en-us" | "en-uk" | "es" | "fr" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return (
    <div>
      <HeaderWrapper lang={lang} />
      <div>Hello {dict.common.menu}</div>
    </div>
  );
}
