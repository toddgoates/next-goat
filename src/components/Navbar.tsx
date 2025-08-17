"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineMenu as MenuIcon } from "react-icons/ai";
import { useTheme } from "next-themes";
import { GoSun as SunIcon, GoMoon as MoonIcon } from "react-icons/go";

import Container from "./Container";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathName = usePathname();
  const { theme, setTheme } = useTheme();

  return (
    <nav className="border-b border-gray-300 bg-white dark:border-none dark:bg-slate-800">
      <div className="h-4 bg-linear-to-r from-purple-500 to-orange-500"></div>
      <Container>
        <>
          <div className="flex items-center justify-between p-5">
            <Link href="/" prefetch className="flex items-center gap-4">
              <img
                src="images/goat-logo.svg"
                className="h-14 w-14 dark:invert dark:filter"
                alt="A stylistic goat logo"
              />
              <h1 className="text-4xl font-bold text-gray-600 dark:text-gray-50">
                Todd Goates
              </h1>
            </Link>
            <ul className="hidden text-lg text-gray-600 dark:text-gray-50 md:visible md:flex md:gap-8">
              <li className="py-3">
                <Link
                  href="/"
                  prefetch
                  onClick={() => setIsOpen(false)}
                  className={`transition-colors duration-300 ${
                    pathName === "/"
                      ? "font-semibold text-purple-500"
                      : "font-semibold hover:text-purple-500"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li className="py-3">
                <Link
                  href="/about"
                  prefetch
                  onClick={() => setIsOpen(false)}
                  className={`transition-colors duration-300 ${
                    pathName === "/about"
                      ? "font-semibold text-purple-500"
                      : "font-semibold hover:text-purple-500"
                  }`}
                >
                  About
                </Link>
              </li>
              <li className="py-3">
                <Link
                  href="/projects"
                  prefetch
                  onClick={() => setIsOpen(false)}
                  className={`transition-colors duration-300 ${
                    pathName === "/projects"
                      ? "font-semibold text-purple-500"
                      : "font-semibold hover:text-purple-500"
                  }`}
                >
                  Projects
                </Link>
              </li>
              <li className="py-3">
                <Link
                  href="/blog"
                  prefetch
                  onClick={() => setIsOpen(false)}
                  className={`transition-colors duration-300 ${
                    pathName === "/blog" || pathName?.startsWith("/blog/")
                      ? "font-semibold text-purple-500"
                      : "font-semibold hover:text-purple-500"
                  }`}
                >
                  Blog
                </Link>
              </li>
              <li className="py-3">
                <Link
                  href="/contact"
                  prefetch
                  onClick={() => setIsOpen(false)}
                  className={`transition-colors duration-300 ${
                    pathName === "/contact"
                      ? "font-semibold text-purple-500"
                      : "font-semibold hover:text-purple-500"
                  }`}
                >
                  Contact
                </Link>
              </li>
              <li className="py-3">
                {theme === "dark" ? (
                  <button
                    aria-label="Switch to light mode"
                    className="mt-px"
                  >
                    <MoonIcon
                      className="size-6 transition-colors duration-300 hover:text-orange-300"
                      onClick={() => setTheme("light")}
                    />
                  </button>
                ) : (
                  <button aria-label="Switch to dark mode" className="mt-px">
                    <SunIcon
                      className="size-6 transition-colors duration-300 hover:text-orange-300"
                      onClick={() => setTheme("dark")}
                    />
                  </button>
                )}
              </li>
            </ul>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden"
              aria-label="Toggle menu"
            >
              <MenuIcon className="text-2xl dark:text-gray-50" />
            </button>
          </div>
          <div
            className={`border-b border-gray-300 bg-gray-200 p-5 dark:bg-slate-700 ${
              isOpen ? "block md:hidden" : "hidden"
            }`}
          >
            <ul className="text-lg text-gray-600 dark:text-gray-50">
              <li className="py-3">
                <Link
                  href="/"
                  prefetch
                  onClick={() => setIsOpen(false)}
                  className={`transition-colors duration-300 ${
                    pathName === "/"
                      ? "font-semibold text-purple-500"
                      : "font-semibold hover:text-purple-500"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li className="py-3">
                <Link
                  href="/about"
                  prefetch
                  onClick={() => setIsOpen(false)}
                  className={`transition-colors duration-300 ${
                    pathName === "/about"
                      ? "font-semibold text-purple-500"
                      : "font-semibold hover:text-purple-500"
                  }`}
                >
                  About
                </Link>
              </li>
              <li className="py-3">
                <Link
                  href="/projects"
                  prefetch
                  onClick={() => setIsOpen(false)}
                  className={`transition-colors duration-300 ${
                    pathName === "/projects"
                      ? "font-semibold text-purple-500"
                      : "font-semibold hover:text-purple-500"
                  }`}
                >
                  Projects
                </Link>
              </li>
              <li className="py-3">
                <Link
                  href="/blog"
                  prefetch
                  onClick={() => setIsOpen(false)}
                  className={`transition-colors duration-300 ${
                    pathName === "/blog" || pathName?.startsWith("/blog/")
                      ? "font-semibold text-purple-500"
                      : "font-semibold hover:text-purple-500"
                  }`}
                >
                  Blog
                </Link>
              </li>
              <li className="py-3">
                <Link
                  href="/contact"
                  prefetch
                  onClick={() => setIsOpen(false)}
                  className={`transition-colors duration-300 ${
                    pathName === "/contact"
                      ? "font-semibold text-purple-500"
                      : "font-semibold hover:text-purple-500"
                  }`}
                >
                  Contact
                </Link>
              </li>
              <li className="py-3">
                {theme === "dark" ? (
                  <button aria-label="Switch to light mode">
                    <MoonIcon
                      className="size-6 transition-colors duration-300 hover:text-orange-300"
                      onClick={() => setTheme("light")}
                    />
                  </button>
                ) : (
                  <button aria-label="Switch to dark mode">
                    <SunIcon
                      className="size-6 transition-colors duration-300 hover:text-orange-300"
                      onClick={() => setTheme("dark")}
                    />
                  </button>
                )}
              </li>
            </ul>
          </div>
        </>
      </Container>
    </nav>
  );
}
