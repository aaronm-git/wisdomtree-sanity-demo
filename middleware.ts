import { NextRequest, NextResponse } from "next/server";

const locales = ["en-us", "es", "en-uk", "fr"];

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get("accept-language");
  if (!acceptLanguage) return "en-us";
  
  // Parse the accept-language header to find the best matching locale
  const preferredLanguages = acceptLanguage.split(",").map(lang => lang.split(";")[0].trim());
  
  // First try to find an exact match
  for (const lang of preferredLanguages) {
    if (locales.includes(lang)) {
      return lang;
    }
  }
  
  // If no exact match, try to find a language match (e.g., "en" matches "en-us")
  for (const lang of preferredLanguages) {
    const langCode = lang.split("-")[0];
    const matchedLocale = locales.find(locale => locale.startsWith(langCode));
    if (matchedLocale) {
      return matchedLocale;
    }
  }
  
  // Fallback to default
  return "en-us";
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
