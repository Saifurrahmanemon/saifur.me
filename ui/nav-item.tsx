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
        key={link.id}
        href={link.href}
        className={clsx('text-hover-primary flex align-middle', {
          'font-medium': isActive
        })}
      >
        <span className="relative py-[5px] px-[10px]">
          {link.text}
          {pathname === link.href ? (
            <motion.div
              className="absolute inset-0 rounded shadow-sm dark:bg-neutral-900 dark:bg-zinc-800/25 shadow-blue-500/20 "
              layoutId="nav"
            />
          ) : null}
        </span>
      </Link>
    </>
  );
}
