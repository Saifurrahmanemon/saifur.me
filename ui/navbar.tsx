'use client';

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
  <main className="max-w-3xl mx-auto p-3 flex flex-col items-center">
    <div className="flex w-full relative">
      {LINKS.map((link) => (
        <NavItem key={link.id} link={link} />
      ))}
      <div className="w-1/6  flex gap-3 items-center justify-center truncate uppercase select-none font-semibold text-md rounded py-2 h-full shadow-md dark:shadow-blue-500/30 dark:backdrop-blur-sm dark:bg-zinc-800 shadow-blue-500/20 absolute transform transition-transform  duration-700  ease-out "></div>
    </div>
  </main>
);

function NavMenu() {
  return (
    <div className="mx-auto my-3 max-w-2xl px-2">
      <nav className=" sticky top-6 z-30 -mx-px rounded-2xl bg-gray-600  backdrop-filter  backdrop-blur-sm bg-opacity-5 border border-gray-200 dark:border-gray-600  shadow-surface-glass">
        <div className="max-w-5xl mx-auto px-4">
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
}

export default NavMenu;
