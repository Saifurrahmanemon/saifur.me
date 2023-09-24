'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { INavItem } from './navbar';

export function NavItem({ link }: { link: INavItem }) {
  const pathname = usePathname();
  const isActive = pathname === link.href;

  return (
    <>
      <Link
        key={link.href}
        href={link.href}
        className={clsx(
          'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle',
          {
            'font-medium': isActive
          }
        )}
      >
        <span className="relative py-[5px] px-[10px]">
          {link.text}
          {pathname === link.href ? (
            <motion.div
              className="absolute inset-0 bg-neutral-100 dark:bg-neutral-900 z-[-1] rounded shadow-md  dark:shadow-blue-500/30 dark:backdrop-blur-sm dark:bg-zinc-800/25 shadow-blue-500/20 "
              layoutId="sidebar"
              transition={{
                type: 'spring',
                stiffness: 350,
                damping: 30
              }}
            />
          ) : null}
        </span>
      </Link>
    </>
  );
}
