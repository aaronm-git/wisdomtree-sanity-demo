import { NextRequest, NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";
import { GET_AVAILABLE_LANGUAGES } from "@/sanity/lib/queries";

// Cache for supported locales to avoid repeated Sanity queries
let supportedLocales: string[] | null = null;

async function getSupportedLocales() {
  if (supportedLocales) return supportedLocales;

  try {
    const languages = await client.fetch(GET_AVAILABLE_LANGUAGES);
    supportedLocales = [
      ...new Set(languages.map((item: { language: string }) => item.language)),
    ].filter(Boolean) as string[];
    return supportedLocales;
  } catch (error) {
    // Fallback to configured languages if Sanity is unavailable
    console.error("Error fetching languages from Sanity:", error);
    return ["en-us", "es", "en-uk", "fr"];
  }
}

// Get the preferred locale, similar to the above or using a library
async function getLocale(request: NextRequest) {
  const locales = await getSupportedLocales();
  const acceptLanguage = request.headers.get("accept-language");
  if (!acceptLanguage) return locales[0] || "en-us";

  // Parse the accept-language header to find the best matching locale
  const preferredLanguages = acceptLanguage
    .split(",")
    .map((lang) => lang.split(";")[0].trim());

  // First try to find an exact match
  for (const lang of preferredLanguages) {
    if (locales.includes(lang)) {
      return lang;
    }
  }

  // If no exact match, try to find a language match (e.g., "en" matches "en-us")
  for (const lang of preferredLanguages) {
    const langCode = lang.split("-")[0];
    const matchedLocale = locales.find((locale) => locale.startsWith(langCode));
    if (matchedLocale) {
      return matchedLocale;
    }
  }

  // Fallback to first available locale
  return locales[0] || "en-us";
}

export async function middleware(request: NextRequest) {
  const locales = await getSupportedLocales();

  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = await getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next) and studio paths
    "/((?!api|_next|studio).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
