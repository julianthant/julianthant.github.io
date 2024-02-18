'use client';

import { Menu, Dark_Icon, Light_Icon, Close_Icon, Dropdown_Icon } from './svgs';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/blog/' },
  { name: 'Projects', href: '/projects/' },
  { name: 'Contact Me', href: '/contact/' },
];

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        className="hover:bg-slate-100 rounded-md h-8 w-10 flex items-center justify-center"
        aria-label="mobile navigation button"
        onClick={() => setIsOpen(true)}
      >
        <Menu />
      </button>

      {isOpen &&
        createPortal(
          <>
            <div
              className="fixed inset-0 bg-black/10 backdrop-blur-sm dark:bg-slate-900/80 z-10"
              onClick={() => setIsOpen(false)}
            ></div>
            <nav className="fixed left-auto right-4 top-4 z-20 bg-white rounded-lg w-[20rem] shadow-lg text-slate-900 p-6">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600"
              >
                <Close_Icon />
              </button>
              <ul
                aria-label="mobile navigation links"
                role="list"
                className="space-y-6 grid"
              >
                {navItems.map((item) => (
                  <li key={item.name} className="flex">
                    <Link
                      onClick={() => setIsOpen(false)}
                      href={item.href}
                      className="font-bold text-base flex hover:text-accent-400 cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <div className="flex items-center justify-between">
                    <p className="text-slate-700 font-normal">Switch theme</p>
                    <div className="cursor-pointer relative flex items-center ring-1 ring-slate-900/10 rounded-lg shadow-sm p-2 text-slate-700 font-semibold">
                      <Light_Icon className="w-6 h-6 mr-02" />
                      <p>Light</p>
                      <Dropdown_Icon className="w-6 h-6 ml-2" />
                      <select
                        id="theme"
                        className="absolute appearance-none inset-0 w-full h-full opacity-0 cursor-pointer"
                      >
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                        <option value="system">System</option>
                      </select>
                    </div>
                  </div>
                </div>
              </ul>
            </nav>
          </>,
          document.body
        )}
    </div>
  );
};

export default MobileNavigation;
