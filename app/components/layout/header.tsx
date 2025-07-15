'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import Logo from '@/app/images/logo.png';

interface HeaderProps {
  lang: string;
}

export default function Header({ lang }: HeaderProps) {
  const [isInvestmentsDropdownOpen, setIsInvestmentsDropdownOpen] = useState(false);
  const [isLocalSitesDropdownOpen, setIsLocalSitesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const investmentsDropdownRef = useRef<HTMLDivElement>(null);
  const localSitesDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (investmentsDropdownRef.current && !investmentsDropdownRef.current.contains(event.target as Node)) {
        setIsInvestmentsDropdownOpen(false);
      }
      if (localSitesDropdownRef.current && !localSitesDropdownRef.current.contains(event.target as Node)) {
        setIsLocalSitesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const investorRegions = [
    {
      key: 'usInvestors',
      label: 'US Investors',
      href: 'https://www.wisdomtree.com/investments',
      external: true,
    },
    {
      key: 'europeInvestors',
      label: 'Europe Investors',
      href: 'https://www.wisdomtree.eu',
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
      key: 'unitedStates',
      label: 'United States',
      href: '/en-us',
      external: false,
      enabled: true,
    },
    {
      key: 'unitedKingdom',
      label: 'United Kingdom',
      href: '/en-uk',
      external: false,
      enabled: true,
    },
    {
      key: 'france',
      label: 'France',
      href: '/fr',
      external: false,
      enabled: true,
    },
    {
      key: 'spain',
      label: 'Spain',
      href: '/es',
      external: false,
      enabled: true,
    },
    // Disabled sites - not supported in current implementation
    {
      key: 'switzerland',
      label: 'Switzerland',
      href: '#',
      external: false,
      enabled: false,
    },
    {
      key: 'germany',
      label: 'Germany',
      href: '#',
      external: false,
      enabled: false,
    },
    {
      key: 'finland',
      label: 'Finland',
      href: '#',
      external: false,
      enabled: false,
    },
    {
      key: 'ireland',
      label: 'Ireland',
      href: '#',
      external: false,
      enabled: false,
    },
    {
      key: 'italy',
      label: 'Italy',
      href: '#',
      external: false,
      enabled: false,
    },
    {
      key: 'luxembourg',
      label: 'Luxembourg',
      href: '#',
      external: false,
      enabled: false,
    },
    {
      key: 'netherlands',
      label: 'Netherlands',
      href: '#',
      external: false,
      enabled: false,
    },
    {
      key: 'norway',
      label: 'Norway',
      href: '#',
      external: false,
      enabled: false,
    },
    {
      key: 'sweden',
      label: 'Sweden',
      href: '#',
      external: false,
      enabled: false,
    },
  ];

  return (
    <header>
      {/* Main header */}
      <div className="bg-white px-4 py-4 text-slate-800">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between">
          {/* Logo */}
          <div className="flex items-start justify-between space-x-2">
            <Link href={`/${lang}`} className="flex space-x-2">
              <Image src={Logo} alt="WisdomTree" className="h-10 w-auto md:h-18" />
              <span className="sr-only">WisdomTree</span>
            </Link>
          </div>

          {/* Top navigation */}
          <div className="hidden px-4 py-2 md:block">
            <div className="mx-auto flex max-w-7xl items-center justify-end space-x-6 text-sm">
              {/* WisdomTree Investments Dropdown */}
              <div className="relative" ref={investmentsDropdownRef}>
                <button
                  onClick={() => setIsInvestmentsDropdownOpen(!isInvestmentsDropdownOpen)}
                  className="flex items-center space-x-1 transition-colors hover:text-slate-600"
                >
                  <span>WisdomTree Investments</span>
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown menu */}
                {isInvestmentsDropdownOpen && (
                  <div className="absolute right-0 z-50 mt-2 w-48 rounded-md border border-gray-200 bg-white shadow-lg">
                    <div className="py-1">
                      {investorRegions.map(region => (
                        <Link
                          key={region.key}
                          href={region.href}
                          target={region.external ? '_blank' : undefined}
                          rel={region.external ? 'noopener noreferrer' : undefined}
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
                className="transition-colors hover:text-slate-600"
              >
                WisdomTree Prime
              </a>
              <a
                href="https://www.wisdomtree.com/connect"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-slate-600"
              >
                WisdomTree Connect
              </a>
              <a
                href="https://ir.wisdomtree.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-slate-600"
              >
                Investor Relations
              </a>

              {/* Local Sites Dropdown */}
              <div className="relative" ref={localSitesDropdownRef}>
                <button
                  onClick={() => setIsLocalSitesDropdownOpen(!isLocalSitesDropdownOpen)}
                  className="flex items-center space-x-1 transition-colors hover:text-slate-600"
                >
                  <span>Local Sites</span>
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown menu */}
                {isLocalSitesDropdownOpen && (
                  <div className="absolute right-0 z-50 mt-2 w-48 rounded-md border border-gray-200 bg-white shadow-lg">
                    <div className="py-1">
                      {localSites.map(site => (
                        <Link
                          key={site.key}
                          href={site.href}
                          target={site.external ? '_blank' : undefined}
                          rel={site.external ? 'noopener noreferrer' : undefined}
                          className={`block px-4 py-2 text-sm ${
                            site.enabled ? 'text-gray-700 hover:bg-gray-100' : 'cursor-not-allowed text-gray-400'
                          }`}
                          onClick={e => {
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

          {/* Desktop Navigation */}
          <nav className="hidden w-full items-center space-x-8 font-extrabold md:mt-6 md:flex">
            <Link href={`/${lang}/about`} className="transition-colors hover:text-slate-600">
              About Us
            </Link>
            <Link href={`/${lang}/thought-leadership`} className="transition-colors hover:text-slate-600">
              Thought Leadership
            </Link>
            <Link href={`/${lang}/press`} className="transition-colors hover:text-slate-600">
              Press
            </Link>
            <Link href={`/${lang}/careers`} className="transition-colors hover:text-slate-600">
              Careers
            </Link>
            <Link href={`/${lang}/contact`} className="transition-colors hover:text-slate-600">
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mt-4 border-t border-gray-700 pb-4 md:hidden">
            <nav className="mt-4 flex flex-col space-y-2">
              <Link href={`/${lang}/about`} className="py-2 transition-colors hover:text-slate-600">
                About Us
              </Link>
              <Link href={`/${lang}/thought-leadership`} className="py-2 transition-colors hover:text-slate-600">
                Thought Leadership
              </Link>
              <Link href={`/${lang}/press`} className="py-2 transition-colors hover:text-slate-600">
                Press
              </Link>
              <Link href={`/${lang}/careers`} className="py-2 transition-colors hover:text-slate-600">
                Careers
              </Link>
              <Link href={`/${lang}/contact`} className="py-2 transition-colors hover:text-slate-600">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
