'use client';

import clsx from 'clsx';
import { Fragment, useState } from 'react';
import { NavItem } from './nav-item';
import ThemeSwitch from './theme-switch';

export interface INavItem {
  text: string;
  href: string;
  id: number;
}

const LINKS: INavItem[] = [
  { text: 'Home', href: '/', id: 0 },
  { text: 'Blog', href: '/blog', id: 1 },
  { text: 'Projects', href: '/projects', id: 2 },
  { text: 'About', href: '/about', id: 3 }
];

const navItems = (
  <section className="flex flex-col items-center max-w-3xl p-3 mx-auto">
    <div className="relative flex w-full">
      {LINKS.map((link) => (
        <NavItem key={link.id} link={link} />
      ))}
      <div className="absolute flex items-center justify-center w-1/6 h-full gap-3 py-2 font-semibold uppercase truncate transition-transform duration-700 ease-out transform rounded shadow-md select-none text-md dark:shadow-blue-500/30 dark:backdrop-blur-sm dark:bg-zinc-800/25 shadow-blue-500/20 "></div>
    </div>
  </section>
);

const navbar = (
  <div className="relative hidden max-w-2xl px-2 mx-auto my-3 sm:block">
    <nav className="z-30 -mx-px bg-gray-600 border border-gray-200 top-1 rounded-2xl backdrop-filter backdrop-blur-sm bg-opacity-5 dark:border-gray-600 shadow-surface-glass">
      <div className="max-w-5xl px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="w-full">{navItems}</div>
          <div className="">
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </nav>
  </div>
);

function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const mobileMenu = (
    <div
      className="fixed block w-full h-full sm:hidden"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="absolute flex items-center justify-center overflow-hidden border border-gray-200/80 dark:border-gray-600/80 w-14 h-14 rounded-xl right-4 top-4">
        <div className="flex items-center justify-center w-20 h-20 p-2 cursor-pointer group rounded-3xl backdrop-filter backdrop-blur-[1px] bg-opacity-5  shadow-surface-glass">
          <div className="space-y-2">
            <span
              className={clsx(
                isOpen ? '' : 'translate-y-1.5 rotate-45',
                'block h-1 w-10 origin-center rounded-full bg-slate-500 transition-all ease-in-out duration-500'
              )}
            ></span>
            <span
              className={clsx(
                isOpen ? 'w-8' : ' w-10 -translate-y-1.5 -rotate-45',
                'block h-1 origin-center rounded-full bg-slate-500 transition-all ease-in-out duration-500'
              )}
            ></span>
          </div>
        </div>
      </div>
      <div className="absolute flex flex-col items-start justify-start h-full right-4 top-12">
        {LINKS.map((item) => (
          <div key={item.text}>{item.text}</div>
        ))}
      </div>
    </div>
  );

  return (
    <Fragment>
      <div className="fixed block w-full">{navbar}</div>
      <div>{mobileMenu}</div>
    </Fragment>
  );
}

export default NavMenu;
