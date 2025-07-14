import Header from "./header";

interface HeaderWrapperProps {
  lang: string;
}

export default function HeaderWrapper({ lang }: HeaderWrapperProps) {
  return <Header lang={lang} />;
}
