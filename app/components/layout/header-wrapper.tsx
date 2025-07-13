import { getDictionary } from "../../[lang]/dictionaries";
import Header from "./header";

interface HeaderWrapperProps {
  lang: "en-us" | "en-uk" | "es" | "fr";
}

export default async function HeaderWrapper({ lang }: HeaderWrapperProps) {
  const dict = await getDictionary(lang);

  return <Header lang={lang} dict={dict} />;
}
