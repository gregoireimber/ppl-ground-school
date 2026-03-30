'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="w-64 bg-slate-50 border-r border-slate-200 min-h-screen p-6">
      <div className="mb-8">
        <Link href="/">
          <h1 className="text-2xl font-bold text-primary-600">PPL Ground School</h1>
        </Link>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
            Study
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
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
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
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
          <ul className="space-y-2">
            <li>
              <Link
                href="/quiz/quick"
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/quiz/quick')
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                Quick Quiz
              </Link>
            </li>
          </ul>
        </div>

        <div className="pt-6 border-t border-slate-200">
          <p className="text-xs text-slate-500">
            UK PPL(A) Ground School
            <br />9 Subjects • 120 Questions
          </p>
        </div>
      </div>
    </nav>
  );
}
