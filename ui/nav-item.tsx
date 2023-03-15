'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { INavItem } from './navbar';

export function NavItem({ link }: { link: INavItem }) {
  const pathname = usePathname();
  const isActive = pathname === link.href;

  return (
    <>
      <input
        type="radio"
        id={`nav-item-${link.id}`}
        name="nav-link"
        defaultChecked={isActive}
        className="appearance-none"
      />
      <Link
        href={link.href}
        id={`nav-item-${link.id}`}
        className={clsx(
          !isActive && 'hover:text-black dark:hover:text-white cursor-pointer ',
          'w-1/6 z-10 flex gap-3 items-center justify-center   select-none font-semibold text-md xl:text-md rounded py-2 transition-all duration-300 ease-in text-secondary '
        )}
      >
        {link.text}
      </Link>
    </>
  );
}
