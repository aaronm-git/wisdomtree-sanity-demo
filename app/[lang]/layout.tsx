import "@/app/globals.css";

export default async function layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  );
}
