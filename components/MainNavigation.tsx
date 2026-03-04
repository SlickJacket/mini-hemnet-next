"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import UserMenu from "./UserMenu";

export default function MainNavigation() {
  const pathname = usePathname();

  const linkClasses = (path: string) =>
    `hover:text-gray-900 transition ${
      pathname.startsWith(path) ? "text-gray-900 font-medium" : "text-gray-600"
    }`;

  return (
    <nav className="border-b bg-white sticky top-0 z-90">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        <Link
          href="/listings"
          className="font-semibold text-lg whitespace-nowrap text-black"
        >
          Mini Hemnet
        </Link>

        <div className="flex items-center gap-6 text-sm whitespace-nowrap">
          <Link href="/listings" className={linkClasses("/listings")}>
            Listings
          </Link>
          <Link href="/about" className={linkClasses("/about")}>
            About
          </Link>

          <UserMenu />
        </div>
      </div>
    </nav>
  );
}
