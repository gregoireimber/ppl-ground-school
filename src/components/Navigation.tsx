'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const isActive = (path: string) => {
    return pathname === path;
  };

  const navLinks = (
    <div className="space-y-6">
      <div>
        <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
          Study
        </h2>
        <ul className="space-y-1">
          <li>
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                isActive('/')
                  ? 'bg-primary-100 text-primary-700'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/progress"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                isActive('/progress')
                  ? 'bg-primary-100 text-primary-700'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              Progress
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
          Practice
        </h2>
        <ul className="space-y-1">
          <li>
            <Link
              href="/quiz/quick"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                isActive('/quiz/quick')
                  ? 'bg-primary-100 text-primary-700'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              Quick Quiz
            </Link>
          </li>
          <li>
            <Link
              href="/exam"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                pathname?.startsWith('/exam')
                  ? 'bg-primary-100 text-primary-700'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              Mock Exams
            </Link>
          </li>
        </ul>
      </div>

      <div className="pt-6 border-t border-slate-200">
        <p className="text-xs text-slate-500">
          UK PPL(A) Ground School
          <br />9 Subjects &bull; 120 Questions
        </p>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile header bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold text-primary-600">
          PPL Ground School
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md text-slate-600 hover:bg-slate-100 transition-colors"
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile slide-out drawer */}
      <nav
        className={`md:hidden fixed top-0 left-0 z-50 h-full w-64 bg-white border-r border-slate-200 p-6 pt-16 transform transition-transform duration-200 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="mb-8">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <span className="text-xl font-bold text-primary-600">PPL Ground School</span>
          </Link>
        </div>
        {navLinks}
      </nav>

      {/* Desktop sidebar */}
      <nav className="hidden md:block w-64 shrink-0 bg-slate-50 border-r border-slate-200 min-h-screen p-6">
        <div className="mb-8">
          <Link href="/">
            <span className="text-2xl font-bold text-primary-600">PPL Ground School</span>
          </Link>
        </div>
        {navLinks}
      </nav>
    </>
  );
}
