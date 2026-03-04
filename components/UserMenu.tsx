"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function UserMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative z-30" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="rounded-full border border-gray-300 p-1 hover:border-gray-400 transition"
      >
        <Image
          src="/avatar-placeholder.png"
          alt="User avatar"
          width={32}
          height={32}
          className="rounded-full"
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 rounded-md border bg-white shadow-lg text-sm z-90">
          <a className="block text-black px-4 py-2 hover:bg-gray-50 cursor-pointer">
            Profile
          </a>
          <a className="block text-black px-4 py-2 hover:bg-gray-50 cursor-pointer">
            Settings
          </a>
          <div className="border-t my-1" />
          <a className="block px-4 py-2 text-red-600 hover:bg-gray-50 cursor-pointer">
            Sign out
          </a>
        </div>
      )}
    </div>
  );
}
