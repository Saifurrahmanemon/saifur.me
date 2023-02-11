'use client';

import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import React, { Fragment, useState } from 'react';
import { HomeIcon } from './icons';
import { NavItem } from './nav-item';
import ThemeSwitch from './theme-switch';

export interface INavItem {
  text: string;
  href: string;
  id: number;
  Icon?: React.ReactNode;
}

const LINKS: INavItem[] = [
  { text: 'Home', href: '/', id: 0, Icon: <HomeIcon /> },
  { text: 'Blog', href: '/blog', id: 1, Icon: <HomeIcon /> },
  { text: 'Projects', href: '/projects', id: 2, Icon: <HomeIcon /> },
  { text: 'About', href: '/about', id: 3, Icon: <HomeIcon /> }
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

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
    <div
      className={clsx(
        isOpen && 'backdrop-blur-sm',
        'fixed block w-full h-full sm:hidden transition-all delay-150'
      )}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="absolute flex items-center justify-center overflow-hidden border border-gray-200/80 dark:border-gray-600/80 w-14 h-14 rounded-xl right-4 top-4 "
      >
        <div className="flex items-center justify-center w-full h-20 p-2 cursor-pointer group rounded-3xl background-drop ">
          <div className="space-y-2">
            <span
              className={clsx(
                !isOpen ? '' : 'translate-y-1.5 rotate-45',
                'block h-1 w-10 origin-center rounded-full bg-slate-500 transition-all ease-in-out duration-500'
              )}
            ></span>
            <span
              className={clsx(
                !isOpen ? 'w-8' : ' w-10 -translate-y-1.5 -rotate-45',
                'block h-1 origin-center rounded-full bg-slate-500 transition-all ease-in-out duration-500'
              )}
            ></span>
          </div>
        </div>
      </div>
      {isOpen ? (
        <div className="absolute flex flex-col items-center justify-start gap-5 rounded-md right-2 top-20 backdrop-blur-2xl">
          {LINKS.map((item) => (
            <div
              onClick={() => router.push(item.href)}
              key={item.text}
              className="z-10 flex flex-col items-center justify-center p-2 border-b-2 cursor-pointer"
            >
              <div>{item.Icon}</div>
              <p className="text-sm font-bold z-1">{item.text}</p>
            </div>
          ))}
          <div className="p-2">
            <ThemeSwitch />
          </div>
        </div>
      ) : null}
    </div>
  );
}

function NavMenu() {
  return (
    <Fragment>
      <div className="fixed block w-full">{navbar}</div>
      <div>
        <MobileMenu />
      </div>
    </Fragment>
  );
}

export default NavMenu;
