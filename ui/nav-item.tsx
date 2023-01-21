'use client';

import { usePathname, useRouter } from 'next/navigation';
import { INavItem } from './navbar';

export function NavItem({ link }: { link: INavItem }) {
  const pathname = usePathname();
  const router = useRouter();
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
      <label
        onClick={() => router.push(link.href)}
        htmlFor={`nav-item-${link.id}`}
        className="cursor-pointer w-1/6 flex gap-3 items-center justify-center truncate uppercase select-none font-semibold text-md xl:text-lg rounded py-2"
      >
        {link.text}
      </label>
    </>
  );
}
