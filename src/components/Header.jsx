import { Menu, X, LogIn } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-black/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#ff9d23] to-amber-600 ring-1 ring-amber-300/30 shadow-lg shadow-amber-500/20" />
            <span className="font-semibold text-white tracking-tight text-lg">ThumbnailGPT</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-zinc-300 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#login"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors"
            >
              <LogIn size={16} />
              Log In
            </a>
            <a
              href="#get-started"
              className="inline-flex rounded-lg bg-[#ff9d23] px-4 py-2 text-sm font-medium text-black hover:brightness-95 shadow-lg shadow-amber-500/30"
            >
              Get Started
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-zinc-300 hover:text-white hover:bg-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="mt-2 space-y-1 rounded-xl border border-white/10 bg-black/60 p-3 backdrop-blur-xl">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-sm text-zinc-200 hover:bg-white/10"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-2">
                <a
                  href="#login"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white hover:bg-white/10"
                >
                  <LogIn size={16} />
                  Log In
                </a>
                <a
                  href="#get-started"
                  className="inline-flex items-center justify-center rounded-lg bg-[#ff9d23] px-3 py-2 text-sm font-medium text-black hover:brightness-95"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
