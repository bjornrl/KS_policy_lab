"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Circle } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Om laben" },
  { href: "/services", label: "Verktøykasse" },
  { href: "/contact", label: "Start nå" },
  { href: "/blog", label: "Prosjekter" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed right-0 top-0 h-screen w-64 bg-white dark:bg-black border-l border-zinc-200 dark:border-zinc-800 flex flex-col items-center justify-center z-50">
      <ul className="flex flex-col gap-2 w-full px-8">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center gap-3 py-3 px-4 rounded-lg transition-all duration-200 group ${
                  isActive
                    ? "text-red-600 font-bold"
                    : "text-zinc-900 dark:text-zinc-400 hover:text-red-600"
                }`}
              >
                <Circle
                  className={`w-4 h-4 transition-all duration-200 ${
                    isActive
                      ? "block text-red-600"
                      : "hidden group-hover:opacity-100 text-red-600"
                  }`}
                />
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
      <Link
        href="/contact"
        className="w-full mt-40 bg-red-600 text-white py-4 px-6 text-lg font-semibold hover:bg-red-700 transition-colors"
      >
        Bruk laben{" "}
      </Link>
    </nav>
  );
}
