'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Wrench, Calendar, Phone, Menu } from 'lucide-react';
import { useState } from 'react';

export default function MobileTabBar() {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  // Don't show tab bar on admin pages or auth pages
  if (pathname?.startsWith('/admin') || pathname?.startsWith('/auth')) {
    return null;
  }

  const tabs = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: Wrench },
    { name: 'Book', href: '/book', icon: Calendar, highlight: true },
    { name: 'Call', href: 'tel:+919565555581', icon: Phone, external: true },
    { name: 'More', href: '#', icon: Menu, action: 'menu' },
  ];

  const moreLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Blog', href: '/blog' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href);
  };

  return (
    <>
      {/* Overlay for "More" menu */}
      {showMenu && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setShowMenu(false)}
        >
          <div
            className="absolute bottom-20 right-4 bg-white rounded-2xl shadow-2xl p-4 min-w-[200px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-2">
              {moreLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium"
                  onClick={() => setShowMenu(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Bottom Tab Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 md:hidden shadow-lg">
        <div className="grid grid-cols-5 h-16">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const active = !tab.external && !tab.action && isActive(tab.href);

            if (tab.action === 'menu') {
              return (
                <button
                  key={tab.name}
                  onClick={() => setShowMenu(!showMenu)}
                  className="flex flex-col items-center justify-center space-y-1 transition-colors"
                >
                  <Icon className={`w-5 h-5 ${showMenu ? 'text-[var(--electric-blue)]' : 'text-gray-600'}`} />
                  <span className={`text-xs ${showMenu ? 'text-[var(--electric-blue)] font-semibold' : 'text-gray-600'}`}>
                    {tab.name}
                  </span>
                </button>
              );
            }

            if (tab.highlight) {
              return (
                <Link
                  key={tab.name}
                  href={tab.href}
                  className="flex flex-col items-center justify-center relative"
                >
                  <div className="absolute -top-6 bg-gradient-to-r from-[var(--electric-blue)] to-[var(--dark-navy)] rounded-full p-4 shadow-2xl">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs text-[var(--electric-blue)] font-semibold mt-8">
                    {tab.name}
                  </span>
                </Link>
              );
            }

            if (tab.external) {
              return (
                <a
                  key={tab.name}
                  href={tab.href}
                  className="flex flex-col items-center justify-center space-y-1 transition-colors"
                >
                  <Icon className="w-5 h-5 text-gray-600" />
                  <span className="text-xs text-gray-600">
                    {tab.name}
                  </span>
                </a>
              );
            }

            return (
              <Link
                key={tab.name}
                href={tab.href}
                className="flex flex-col items-center justify-center space-y-1 transition-colors"
              >
                <Icon className={`w-5 h-5 ${active ? 'text-[var(--electric-blue)]' : 'text-gray-600'}`} />
                <span className={`text-xs ${active ? 'text-[var(--electric-blue)] font-semibold' : 'text-gray-600'}`}>
                  {tab.name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
