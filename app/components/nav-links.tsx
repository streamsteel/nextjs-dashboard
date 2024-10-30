'use client';
 
import {
  UserGroupIcon,
  HomeIcon,
  XMarkIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
 
const links = [
    {
        "name": "Home",
        "href": "/",
        "icon": HomeIcon,
    },
    {
        "name": "Roles",
        "href": "/roles",
        "icon": UserGroupIcon,
    },
    {
        "name": "Address",
        "href": "/address",
        "icon": XMarkIcon,
    },
    {
        "name": "About",
        "href": "/about",
        "icon": DocumentDuplicateIcon,
    },
]
 
export default function NavLinks() {
  const pathname = usePathname();
 
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center gap-2 rounded-md p-4 text-sm font-medium hover:bg-sky-100 hover:text-blue-400 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}