"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Logo from "@/app/images/logo.png";

interface HeaderProps {
  lang: string;
}

export default function Header({ lang }: HeaderProps) {
  const [isInvestmentsDropdownOpen, setIsInvestmentsDropdownOpen] =
    useState(false);
  const [isLocalSitesDropdownOpen, setIsLocalSitesDropdownOpen] =
    useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      label: "US Investors",
      href: "https://www.wisdomtree.com/investments",
      external: true,
    },
    {
      key: "europeInvestors",
      label: "Europe Investors",
      href: "https://www.wisdomtree.eu",
      external: true,
    },
  ];

  const localSites: Array<{
    key: string;
    label: string;
    href: string;
    external: boolean;
    enabled: boolean;
  }> = [
    {
      key: "unitedStates",
      label: "United States",
      href: "/en-us",
      external: false,
      enabled: true,
    },
    {
      key: "unitedKingdom",
      label: "United Kingdom",
      href: "/en-uk",
      external: false,
      enabled: true,
    },
    {
      key: "france",
      label: "France",
      href: "/fr",
      external: false,
      enabled: true,
    },
    {
      key: "spain",
      label: "Spain",
      href: "/es",
      external: false,
      enabled: true,
    },
    // Disabled sites - not supported in current implementation
    {
      key: "switzerland",
      label: "Switzerland",
      href: "#",
      external: false,
      enabled: false,
    },
    {
      key: "germany",
      label: "Germany",
      href: "#",
      external: false,
      enabled: false,
    },
    {
      key: "finland",
      label: "Finland",
      href: "#",
      external: false,
      enabled: false,
    },
    {
      key: "ireland",
      label: "Ireland",
      href: "#",
      external: false,
      enabled: false,
    },
    {
      key: "italy",
      label: "Italy",
      href: "#",
      external: false,
      enabled: false,
    },
    {
      key: "luxembourg",
      label: "Luxembourg",
      href: "#",
      external: false,
      enabled: false,
    },
    {
      key: "netherlands",
      label: "Netherlands",
      href: "#",
      external: false,
      enabled: false,
    },
    {
      key: "norway",
      label: "Norway",
      href: "#",
      external: false,
      enabled: false,
    },
    {
      key: "sweden",
      label: "Sweden",
      href: "#",
      external: false,
      enabled: false,
    },
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
              <span>WisdomTree Investments</span>
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

            {/* Dropdown menu */}
            {isInvestmentsDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                <div className="py-1">
                  {investorRegions.map((region) => (
                    <Link
                      key={region.key}
                      href={region.href}
                      target={region.external ? "_blank" : undefined}
                      rel={region.external ? "noopener noreferrer" : undefined}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {region.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Other navigation items */}
          <a
            href="https://www.wisdomtree.com/prime"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            WisdomTree Prime
          </a>
          <a
            href="https://www.wisdomtree.com/connect"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            WisdomTree Connect
          </a>
          <a
            href="https://ir.wisdomtree.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            Investor Relations
          </a>

          {/* Local Sites Dropdown */}
          <div className="relative" ref={localSitesDropdownRef}>
            <button
              onClick={() =>
                setIsLocalSitesDropdownOpen(!isLocalSitesDropdownOpen)
              }
              className="flex items-center space-x-1 hover:text-gray-300 transition-colors"
            >
              <span>Local Sites</span>
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

            {/* Dropdown menu */}
            {isLocalSitesDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                <div className="py-1">
                  {localSites.map((site) => (
                    <Link
                      key={site.key}
                      href={site.href}
                      target={site.external ? "_blank" : undefined}
                      rel={site.external ? "noopener noreferrer" : undefined}
                      className={`block px-4 py-2 text-sm ${
                        site.enabled
                          ? "text-gray-700 hover:bg-gray-100"
                          : "text-gray-400 cursor-not-allowed"
                      }`}
                      onClick={(e) => {
                        if (!site.enabled) {
                          e.preventDefault();
                        }
                      }}
                    >
                      {site.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center space-x-2">
            <Image
              src={Logo}
              alt="WisdomTree"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-xl font-bold">WisdomTree</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href={`/${lang}/about`}
              className="hover:text-gray-300 transition-colors"
            >
              About Us
            </Link>
            <Link
              href={`/${lang}/thought-leadership`}
              className="hover:text-gray-300 transition-colors"
            >
              Thought Leadership
            </Link>
            <Link
              href={`/${lang}/press`}
              className="hover:text-gray-300 transition-colors"
            >
              Press
            </Link>
            <Link
              href={`/${lang}/careers`}
              className="hover:text-gray-300 transition-colors"
            >
              Careers
            </Link>
            <Link
              href={`/${lang}/contact`}
              className="hover:text-gray-300 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-2 mt-4">
              <Link
                href={`/${lang}/about`}
                className="py-2 hover:text-gray-300 transition-colors"
              >
                About Us
              </Link>
              <Link
                href={`/${lang}/thought-leadership`}
                className="py-2 hover:text-gray-300 transition-colors"
              >
                Thought Leadership
              </Link>
              <Link
                href={`/${lang}/press`}
                className="py-2 hover:text-gray-300 transition-colors"
              >
                Press
              </Link>
              <Link
                href={`/${lang}/careers`}
                className="py-2 hover:text-gray-300 transition-colors"
              >
                Careers
              </Link>
              <Link
                href={`/${lang}/contact`}
                className="py-2 hover:text-gray-300 transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
