'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logoBlack from '@/public/logo-black.png';
import logoWhite from '@/public/logo-white.png';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import ToggleMode from './ToggleMode';
import { useTheme } from 'next-themes';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { theme, systemTheme } = useTheme();

  const leftLinks = [
    { label: 'Overview', href: '/' },
    { label: 'My Calendar', href: `/calendar` },
    { label: 'Settings', href: '/settings' },
    { label: 'Insights', href: '/insights' },
  ];
  const rightLinks = [
    { label: 'Requests', href: '/requests' },
    { label: 'Profile', href: '/profile' },
  ];

  useEffect(() => {
    setMounted(true);
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const currentPath = usePathname();

  // Determine which logo to use
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const logo = currentTheme === 'dark' ? logoWhite : logoBlack;

  if (!mounted) {
    return null; // or a loading spinner
  }

  return (
    <nav className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-4 ">
        <Link href="/">
          <Image
            src={logo}
            width={150}
            height={150}
            className="bg-transparent"
            alt="Logo"
          />
        </Link>
        {isMobile ? (
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="mobile-menu-button">
              {isOpen ? (
                <X size={24} className="justify-between" />
              ) : (
                <Menu className="justify-between" size={24} />
              )}
            </button>
          </div>
        ) : (
          <div className="flex gap-4">
            {leftLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`navbar-link ${
                  currentPath === link.href &&
                  'cursor-default text-primary/70 hover:text-primary/60'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
      {!isMobile && (
        <div className="flex gap-4">
          {rightLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`navbar-link ${
                currentPath === link.href &&
                'cursor-default text-primary/70 hover:text-primary/60'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
      {isMobile && (
        <div
          className={`md:hidden absolute top-[78px] left-0 right-0 border-b pt-20 pb-4 ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          } transition-all duration-300 ease-in-out overflow-hidden`}
        >
          {[...leftLinks, ...rightLinks].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-2 px-4 navbar-link ${
                currentPath === link.href &&
                'cursor-default text-primary/70 hover:text-primary/60'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
      <ToggleMode />
    </nav>
  );
}
