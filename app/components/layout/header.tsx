"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Logo from "@/app/images/logo.png";

interface Dictionary {
  navigation: {
    wisdomtreeInvestments: string;
    wisdomtreePrime: string;
    wisdomtreeConnect: string;
    investorRelations: string;
    localSites: string;
    thoughtLeadership: string;
    aboutUs: string;
    press: string;
    careers: string;
    contact: string;
    usInvestors: string;
    europeInvestors: string;
    unitedStates: string;
    switzerland: string;
    germany: string;
    finland: string;
    france: string;
    unitedKingdom: string;
    ireland: string;
    italy: string;
    luxembourg: string;
    netherlands: string;
    norway: string;
    sweden: string;
  };
  header: {
    companyName: string;
  };
  common: {
    menu: string;
  };
}

interface HeaderProps {
  lang: "en-us" | "en-uk" | "es" | "fr";
  dict: Dictionary;
}

export default function Header({ lang, dict }: HeaderProps) {
  const [isInvestmentsDropdownOpen, setIsInvestmentsDropdownOpen] =
    useState(false);
  const [isLocalSitesDropdownOpen, setIsLocalSitesDropdownOpen] =
    useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileInvestmentsOpen, setMobileInvestmentsOpen] = useState(false);
  const [mobileLocalSitesOpen, setMobileLocalSitesOpen] = useState(false);

  const investmentsDropdownRef = useRef<HTMLDivElement>(null);
  const localSitesDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        investmentsDropdownRef.current &&
        !investmentsDropdownRef.current.contains(event.target as Node)
      ) {
        setIsInvestmentsDropdownOpen(false);
      }
      if (
        localSitesDropdownRef.current &&
        !localSitesDropdownRef.current.contains(event.target as Node)
      ) {
        setIsLocalSitesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const investorRegions = [
    {
      key: "usInvestors",
      href: "https://www.wisdomtree.com/investments",
      external: true,
    },
    {
      key: "europeInvestors",
      href: "https://www.wisdomtree.eu",
      external: true,
    },
  ];

  const localSites: Array<{
    key: string;
    href: string;
    external: boolean;
    enabled: boolean;
    customLabel?: string;
  }> = [
    { key: "unitedStates", href: "/en-us", external: false, enabled: true },
    { key: "unitedKingdom", href: "/en-uk", external: false, enabled: true },
    { key: "france", href: "/fr", external: false, enabled: true },
    // Note: Using a custom label for Spain since it's not in the dictionary
    {
      key: "spain",
      href: "/es",
      external: false,
      enabled: true,
      customLabel:
        lang === "es" ? "España" : lang === "fr" ? "Espagne" : "Spain",
    },
    // Disabled sites - not supported in current implementation
    { key: "switzerland", href: "#", external: false, enabled: false },
    { key: "germany", href: "#", external: false, enabled: false },
    { key: "finland", href: "#", external: false, enabled: false },
    { key: "ireland", href: "#", external: false, enabled: false },
    { key: "italy", href: "#", external: false, enabled: false },
    { key: "luxembourg", href: "#", external: false, enabled: false },
    { key: "netherlands", href: "#", external: false, enabled: false },
    { key: "norway", href: "#", external: false, enabled: false },
    { key: "sweden", href: "#", external: false, enabled: false },
  ];

  return (
    <header className="bg-slate-900 text-white">
      {/* Top navigation bar - Desktop only */}
      <div className="hidden md:block bg-slate-800 px-4 py-2">
        <div className="max-w-7xl mx-auto flex justify-end items-center space-x-6 text-sm">
          {/* WisdomTree Investments Dropdown */}
          <div className="relative" ref={investmentsDropdownRef}>
            <button
              onClick={() =>
                setIsInvestmentsDropdownOpen(!isInvestmentsDropdownOpen)
              }
              className="flex items-center space-x-1 hover:text-gray-300 transition-colors"
            >
              <span>{dict.navigation.wisdomtreeInvestments}</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isInvestmentsDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 bg-white text-gray-900 shadow-lg rounded-md py-2 min-w-48 z-50">
                {investorRegions.map((region) => (
                  <a
                    key={region.key}
                    href={region.href}
                    target={region.external ? "_blank" : undefined}
                    rel={region.external ? "noopener noreferrer" : undefined}
                    className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                  >
                    {
                      dict.navigation[
                        region.key as keyof typeof dict.navigation
                      ]
                    }
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Direct Links */}
          <a
            href="https://www.wisdomtreeprime.com/?utm_source=referral&utm_medium=wisdomtree.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            {dict.navigation.wisdomtreePrime}
          </a>
          <a
            href="https://www.wisdomtreeconnect.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            {dict.navigation.wisdomtreeConnect}
          </a>
          <a
            href="http://ir.wisdomtree.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            {dict.navigation.investorRelations}
          </a>

          {/* Local Sites Dropdown */}
          <div className="relative" ref={localSitesDropdownRef}>
            <button
              onClick={() =>
                setIsLocalSitesDropdownOpen(!isLocalSitesDropdownOpen)
              }
              className="flex items-center space-x-1 hover:text-gray-300 transition-colors"
            >
              <span>{dict.navigation.localSites}</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isLocalSitesDropdownOpen && (
              <div className="absolute top-full right-0 mt-1 bg-white text-gray-900 shadow-lg rounded-md py-2 min-w-48 z-50 max-h-80 overflow-y-auto">
                {localSites.map((site) => (
                  <a
                    key={site.key}
                    href={site.enabled ? site.href : undefined}
                    target={site.external ? "_blank" : undefined}
                    rel={site.external ? "noopener noreferrer" : undefined}
                    className={`block px-4 py-2 transition-colors ${
                      site.enabled
                        ? "hover:bg-gray-100"
                        : "text-gray-400 cursor-not-allowed"
                    }`}
                    onClick={
                      !site.enabled ? (e) => e.preventDefault() : undefined
                    }
                  >
                    {site.customLabel ||
                      dict.navigation[site.key as keyof typeof dict.navigation]}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="px-4 py-4 bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={`/${lang}`} className="flex items-center">
              <Image
                src={Logo}
                alt={dict.header.companyName}
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href={`/${lang}/about-wisdomtree`}
              className="text-gray-900 hover:text-gray-600 transition-colors font-medium tracking-wide"
            >
              {dict.navigation.aboutUs}
            </Link>
            <Link
              href={`/${lang}/thought-leadership`}
              className="text-gray-900 hover:text-gray-600 transition-colors font-medium tracking-wide"
            >
              {dict.navigation.thoughtLeadership}
            </Link>
            <Link
              href={`/${lang}/about-wisdomtree/press-room`}
              className="text-gray-900 hover:text-gray-600 transition-colors font-medium tracking-wide"
            >
              {dict.navigation.press}
            </Link>
            <Link
              href={`/${lang}/about-wisdomtree/careers-at-wisdomtree`}
              className="text-gray-900 hover:text-gray-600 transition-colors font-medium tracking-wide"
            >
              {dict.navigation.careers}
            </Link>
            <Link
              href={`/${lang}/about-wisdomtree/contact-us`}
              className="text-gray-900 hover:text-gray-600 transition-colors font-medium tracking-wide"
            >
              {dict.navigation.contact}
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-900 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label={dict.common.menu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-4 py-2 space-y-1">
            {/* Primary Navigation */}
            <Link
              href={`/${lang}/about-wisdomtree`}
              className="block py-2 text-white hover:text-gray-300 transition-colors font-medium tracking-wide"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {dict.navigation.aboutUs}
            </Link>
            <Link
              href={`/${lang}/thought-leadership`}
              className="block py-2 text-white hover:text-gray-300 transition-colors font-medium tracking-wide"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {dict.navigation.thoughtLeadership}
            </Link>
            <Link
              href={`/${lang}/about-wisdomtree/press-room`}
              className="block py-2 text-white hover:text-gray-300 transition-colors font-medium tracking-wide"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {dict.navigation.press}
            </Link>
            <Link
              href={`/${lang}/about-wisdomtree/careers-at-wisdomtree`}
              className="block py-2 text-white hover:text-gray-300 transition-colors font-medium tracking-wide"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {dict.navigation.careers}
            </Link>
            <Link
              href={`/${lang}/about-wisdomtree/contact-us`}
              className="block py-2 text-white hover:text-gray-300 transition-colors font-medium tracking-wide"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {dict.navigation.contact}
            </Link>

            {/* Divider */}
            <hr className="border-slate-600 my-4" />

            {/* Secondary Navigation */}
            <div className="space-y-2">
              {/* WisdomTree Investments */}
              <div>
                <button
                  onClick={() =>
                    setMobileInvestmentsOpen(!mobileInvestmentsOpen)
                  }
                  className="flex items-center justify-between w-full py-2 text-white hover:text-gray-300 transition-colors"
                >
                  <span>{dict.navigation.wisdomtreeInvestments}</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      mobileInvestmentsOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {mobileInvestmentsOpen && (
                  <div className="pl-4 space-y-1">
                    {investorRegions.map((region) => (
                      <a
                        key={region.key}
                        href={region.href}
                        target={region.external ? "_blank" : undefined}
                        rel={
                          region.external ? "noopener noreferrer" : undefined
                        }
                        className="block py-1 text-gray-300 hover:text-white transition-colors"
                      >
                        {
                          dict.navigation[
                            region.key as keyof typeof dict.navigation
                          ]
                        }
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Direct Links */}
              <a
                href="https://www.wisdomtreeprime.com/?utm_source=referral&utm_medium=wisdomtree.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 text-white hover:text-gray-300 transition-colors"
              >
                {dict.navigation.wisdomtreePrime}
              </a>
              <a
                href="https://www.wisdomtreeconnect.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 text-white hover:text-gray-300 transition-colors"
              >
                {dict.navigation.wisdomtreeConnect}
              </a>
              <a
                href="http://ir.wisdomtree.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 text-white hover:text-gray-300 transition-colors"
              >
                {dict.navigation.investorRelations}
              </a>

              {/* Local Sites */}
              <div>
                <button
                  onClick={() => setMobileLocalSitesOpen(!mobileLocalSitesOpen)}
                  className="flex items-center justify-between w-full py-2 text-white hover:text-gray-300 transition-colors"
                >
                  <span>{dict.navigation.localSites}</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      mobileLocalSitesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {mobileLocalSitesOpen && (
                  <div className="pl-4 space-y-1 max-h-40 overflow-y-auto">
                    {localSites.map((site) => (
                      <a
                        key={site.key}
                        href={site.enabled ? site.href : undefined}
                        target={site.external ? "_blank" : undefined}
                        rel={site.external ? "noopener noreferrer" : undefined}
                        className={`block py-1 transition-colors ${
                          site.enabled
                            ? "text-gray-300 hover:text-white"
                            : "text-gray-500 cursor-not-allowed"
                        }`}
                        onClick={
                          !site.enabled ? (e) => e.preventDefault() : undefined
                        }
                      >
                        {site.customLabel ||
                          dict.navigation[
                            site.key as keyof typeof dict.navigation
                          ]}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
