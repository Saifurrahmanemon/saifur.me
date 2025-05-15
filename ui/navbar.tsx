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
import { findIsPathActive } from '../utils';
import { BlogIcon, HomeIcon, LetterLogo, ProjectIcon } from './icons';
import { NavItem } from './nav-item';
import ThemeSwitch from './theme-switch';

export interface INavItem {
  text: string;
  href: string;
  id: number;
  Icon?: React.ReactNode;
}

// I hate myself 😤
const LINKS: INavItem[] = [
  { text: 'Home', href: '/', id: 0, Icon: <HomeIcon /> },
  { text: 'Writing', href: '/writing', id: 1, Icon: <BlogIcon /> },
  { text: 'Work', href: '/work', id: 1, Icon: <ProjectIcon /> }

  // { text: 'Journey', href: '/journey', id: 2, Icon: <UserIcon /> }
  // { text: 'Projects', href: '/projects', id: 3, Icon: <ProjectIcon /> },
  // { text: 'About', href: '/about', id: 4, Icon: <UserIcon /> }
];

const navItems = (
  <div className="relative flex w-full p-3">
    <LayoutGroup id="nav">
      <div className="flex flex-row p-2 space-x-0 md:mt-0">
        {LINKS.map((link) => (
          <NavItem key={link.text} link={link} />
        ))}
      </div>
    </LayoutGroup>
  </div>
);

function Navbar() {
  return (
    <div className="relative hidden px-2 my-3 sm:block app-max-w">
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
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  let prev: number;

  // logic used to show/hide the navbar on scroll

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (prev > latest) {
      setIsHidden(false);
    }
    if (prev < latest) {
      setIsHidden(true);
    }
    prev = latest;
  });

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  };

  return (
    <div>
      <div>
        <AnimatePresence>
          <motion.header
            layout
            variants={variants}
            animate={isHidden ? 'hidden' : 'visible'}
            transition={{
              ease: 'easeInOut',
              duration: 0.4
            }}
            className="fixed flex items-center justify-between w-full px-4 py-4 z-[500]"
          >
            <LetterLogo h="2rem" />
            <ThemeSwitch />
          </motion.header>
        </AnimatePresence>
      </div>
      <div className="z-[500] fixed bottom-1 w-full  background-drop  px-2">
        <div className="flex items-center justify-around max-w-lg gap-2 px-5 py-0.5 mx-auto border border-gray-300 dark:border-gray-600 rounded-2xl 600 ">
          {LINKS.map((item) => {
            const isPathActive = findIsPathActive({
              linkHref: item.href,
              pathname
            });
            return (
              <Link
                href={item.href}
                key={`${item.text}_mobile`}
                className={clsx(
                  isPathActive ? 'text-primary' : 'text-secondary',
                  'flex flex-col items-center justify-center py-1 cursor-pointer'
                )}
              >
                <div>{item.Icon}</div>
                <p className="text-xs text-hover-primary">{item.text}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function NavMenu() {
  return (
    <header>
      <div className="w-full sm:hidden">
        <MobileMenu />
      </div>

      <div className="w-full">
        <Navbar />
      </div>
    </header>
  );
}
