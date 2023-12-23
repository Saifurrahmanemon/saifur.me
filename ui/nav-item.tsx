import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { INavItem } from './navbar';

export function NavItem({ link }: { link: INavItem }) {
  const pathname = usePathname();

  const isPathActive =
    pathname === link.href ||
    (link.href.length > 1 && pathname.startsWith(link.href));

  return (
    <>
      <Link
        key={link.id}
        href={link.href}
        className="flex align-middle text-hover-primary"
      >
        <span className="relative py-[5px] px-[10px]">
          {link.text}
          {isPathActive ? (
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
