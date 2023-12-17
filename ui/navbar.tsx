'use client';

import clsx from 'clsx';
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useMotionValueEvent,
  useScroll
} from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { BlogIcon, HomeIcon, LetterLogo, ProjectIcon, UserIcon } from './icons';
import { NavItem } from './nav-item';
import ThemeSwitch from './theme-switch';

export interface INavItem {
  text: string;
  href: string;
  id: number;
  Icon?: React.ReactNode;
}
export const appMaxWidth = 'max-w-2xl mx-auto';

const LINKS: INavItem[] = [
  { text: 'Home', href: '/', id: 0, Icon: <HomeIcon /> },
  { text: 'Writing', href: '/writing', id: 1, Icon: <BlogIcon /> },
  { text: 'Projects', href: '/projects', id: 2, Icon: <ProjectIcon /> },
  { text: 'About', href: '/about', id: 3, Icon: <UserIcon /> }
];

const navItems = (
  <div className="relative flex w-full p-3">
    <LayoutGroup id="nav">
      <div className="flex flex-row p-2 space-x-0 md:mt-0">
        {LINKS.map((link) => (
          <NavItem key={link.id} link={link} />
        ))}
      </div>
    </LayoutGroup>
  </div>
);

function Navbar() {
  return (
    <div
      className={clsx(
        'relative hidden max-w-2xl px-2 mx-auto my-3 sm:block',
        appMaxWidth
      )}
    >
      <nav
        style={{
          transition: 'backdrop-filter 0.3s ease-out'
        }}
        className="z-30 -mx-px bg-gray-600 border border-gray-200 top-1 rounded-2xl backdrop-filter backdrop-blur-[3px] bg-opacity-5 dark:border-gray-600 shadow-surface-glass"
      >
        <div className="max-w-5xl px-4 mx-auto">
          <div className="flex items-center justify-end h-16">
            <div>
              <LetterLogo />
            </div>
            <div className="w-full">{navItems}</div>

            <div>
              <ThemeSwitch />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

function MobileMenu() {
  const pathname = usePathname();
  return (
    <div>
      <div>
        <div className="fixed flex items-center justify-between w-full px-4 py-4">
          <LetterLogo h="2rem" />
          <ThemeSwitch />
        </div>
      </div>
      <div className="z-[500] fixed bottom-0 w-full py-2 bg-gray-600 rounded-2xl background-drop  dark:border-gray-600 border-t">
        <div className="flex items-center justify-around max-w-lg gap-2 px-5 mx-auto">
          {LINKS.map((item) => (
            <Link
              href={item.href}
              key={item.text}
              className={clsx(
                pathname === item.href ? 'text-primary' : 'text-secondary',
                'flex flex-col items-center justify-center py-1 cursor-pointer'
              )}
            >
              <div>{item.Icon}</div>
              <p className="text-sm text-hover-primary">{item.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function NavMenu() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  let prev: number;

  // logic used to show/hide the navbar on scroll

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (prev > latest) {
      setHidden(false);
    }
    if (prev < latest) {
      setHidden(true);
    }
    prev = latest;
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -25 }
  };

  return (
    <AnimatePresence>
      <motion.div
        layout
        variants={variants}
        animate={{ opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="w-full sm:hidden"
      >
        <MobileMenu />
      </motion.div>
      <div className="w-full">
        <Navbar />
      </div>
    </AnimatePresence>
  );
}
