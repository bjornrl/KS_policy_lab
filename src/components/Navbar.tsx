"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Circle, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Om laben" },
  { href: "/services", label: "Verktøykasse" },
  { href: "/contact", label: "Start nå" },
  { href: "/blog", label: "Prosjekter" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Menu Button - Mobile Only */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-[60] md:hidden bg-white p-2 rounded-lg border border-zinc-200 shadow-lg"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-[#1e3a8a]" />
        ) : (
          <Menu className="w-6 h-6 text-[#1e3a8a]" />
        )}
      </button>

      {/* Overlay - Mobile Only */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 bg-opacity-50 z-[50] md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Navbar */}
      <nav
        className={`fixed right-0 top-0 h-screen w-64 bg-white border-l border-zinc-200 flex flex-col items-center justify-center z-[55] transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
        }`}
      >
        <ul className="flex flex-col gap-2 w-full px-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 py-3 px-4 rounded-lg transition-all duration-200 group ${
                    isActive
                      ? "text-red-600 font-bold"
                      : "text-zinc-900 hover:text-red-600"
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
          onClick={() => setIsOpen(false)}
          className="w-full mt-40 px-8 bg-red-600 text-white py-4 px-6 text-lg font-semibold hover:bg-red-700 transition-colors"
        >
          Bruk laben
        </Link>
      </nav>
    </>
  );
}
