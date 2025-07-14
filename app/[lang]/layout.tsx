import "@/app/globals.css";

export default async function layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: "en-us" | "en-uk" | "es" | "fr" }>;
}) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  );
}
