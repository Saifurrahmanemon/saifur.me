'use client';

import clsx from 'clsx';
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useMotionValueEvent,
  useScroll
} from 'framer-motion';
import { useRouter } from 'next/navigation';
import React, { Fragment, useState } from 'react';
import { BlogIcon, BuildIcon, HomeIcon, LatterLogo, UserIcon } from './icons';
import { NavItem } from './nav-item';
import ThemeSwitch from './theme-switch';

export interface INavItem {
  text: string;
  href: string;
  id: number;
  Icon?: React.ReactNode;
}
export const navMaxWidth = 'max-w-2xl mx-auto';

const LINKS: INavItem[] = [
  { text: 'Home', href: '/', id: 0, Icon: <HomeIcon /> },
  { text: 'Blog', href: '/blog', id: 1, Icon: <BlogIcon /> },
  { text: 'Projects', href: '/projects', id: 2, Icon: <BuildIcon /> },
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
        navMaxWidth
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
              <LatterLogo />
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

const mobileVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3
    }
  },
  closed: {
    y: -20,
    opacity: 0,
    transition: {
      duration: 0.3
    }
  },
  iconShow: {
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.3
    }
  },
  iconHide: {
    opacity: 0,
    transition: {
      ease: 'easeIn',
      duration: 0.3
    }
  }
};

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
    <div>
      <div className="fixed">
        <div
          onClick={() => router.push('/')}
          className="absolute cursor-pointer left-4 top-6"
        >
          <LatterLogo h="2rem" />
        </div>
      </div>
      <motion.div
        className={clsx(
          isOpen && 'backdrop-blur-sm w-full h-full',
          'fixed block w-full  sm:hidden transition-all duration-300'
        )}
      >
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="absolute flex items-center justify-center overflow-hidden border w-11 h-11 border-gray-200/80 dark:border-gray-600/80 rounded-xl right-5 top-4 "
        >
          <div className="flex items-center justify-center w-full h-16 p-2 cursor-pointer group rounded-3xl background-drop ">
            <div className="space-y-2">
              <span
                className={clsx(
                  !isOpen ? '' : 'translate-y-1.5 rotate-45',
                  'block h-1 w-7 origin-center rounded-full bg-slate-500 transition-all ease-in-out duration-300'
                )}
              ></span>
              <span
                className={clsx(
                  !isOpen ? 'w-5' : ' w-7 -translate-y-1.5 -rotate-45',
                  'block h-1 origin-center rounded-full bg-slate-500 transition-all ease-in-out duration-300'
                )}
              ></span>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isOpen ? (
            <motion.div
              initial={false}
              exit={{ opacity: 0 }}
              className="absolute flex flex-col items-center justify-start gap-5 rounded-md right-2 top-20 backdrop-blur-2xl"
            >
              {LINKS.map((item) => (
                <motion.div
                  onClick={() => {
                    router.push(item.href);
                    setIsOpen((state) => !state);
                  }}
                  key={item.text}
                  variants={mobileVariants}
                  animate={isOpen ? 'open' : 'closed'}
                  initial="closed"
                  exit="closed"
                  whileTap={{ scale: 0.95 }}
                  className="z-10 flex flex-col items-center justify-center p-2 border-b-2 cursor-pointer"
                >
                  <div>{item.Icon}</div>
                  <p className="text-sm z-1">{item.text}</p>
                </motion.div>
              ))}
              <motion.div
                variants={mobileVariants}
                initial="iconHide"
                animate="iconShow"
                exit="iconHide"
                className="p-2"
              >
                <ThemeSwitch />
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

function NavMenu() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  let prev: number;

  // logic we use to show/hide the navbar on scroll

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
    <Fragment>
      <motion.div
        variants={variants}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
        className="w-full"
      >
        <Navbar />
      </motion.div>
      <div className="sm:hidden">
        <MobileMenu />
      </div>
    </Fragment>
  );
}

export default NavMenu;
