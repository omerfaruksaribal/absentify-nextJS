'use client';

import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main
      className={`grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8
      }`}
    >
      <div className="text-center">
        <p className="text-base font-semibold text-primary">404</p>
        <h1
          className={`mt-4 text-3xl font-bold tracking-tight sm:text-5xl ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}
        >
          Page not found
        </h1>
        <p
          className={`mt-6 text-base leading-7 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          Sorry, we could not find the page you are looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
}
