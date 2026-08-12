"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineMenu as MenuIcon } from "react-icons/ai";
import { useTheme } from "next-themes";
import { GoSun as SunIcon, GoMoon as MoonIcon } from "react-icons/go";

import Container from "./Container";

const emptySubscribe = () => () => {};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
  const pathName = usePathname();
  const { theme, setTheme } = useTheme();

  return (
    <nav className="relative z-50 border-b border-purple-100/80 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-[#211b31]/85">
      <div className="h-1.5 bg-linear-to-r from-purple-500 via-fuchsia-400 to-orange-400"></div>
      <Container>
        <>
          <div className="flex h-24 items-center justify-between">
            <Link href="/" prefetch className="group flex items-center gap-3">
              <img
                src="images/goat-logo.svg"
                className="h-12 w-12 transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-6 dark:invert dark:filter"
                alt="A stylistic goat logo"
              />
              <h1 className="text-2xl font-extrabold tracking-tight text-slate-800 sm:text-3xl dark:text-white">
                Todd Goates
              </h1>
            </Link>
            <ul className="hidden items-center gap-1 text-base text-slate-600 md:visible md:flex dark:text-slate-200">
              <li>
                <Link
                  href="/"
                  prefetch
                  onClick={() => setIsOpen(false)}
                  className={`transition-colors duration-300 ${
                    pathName === "/"
                      ? "rounded-full bg-purple-100 px-4 py-2 font-bold text-purple-700 dark:bg-purple-400/15 dark:text-purple-300"
                      : "rounded-full px-4 py-2 font-semibold hover:bg-purple-50 hover:text-purple-600 dark:hover:bg-white/5 dark:hover:text-purple-300"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  prefetch
                  onClick={() => setIsOpen(false)}
                  className={`transition-colors duration-300 ${
                    pathName === "/about"
                      ? "rounded-full bg-purple-100 px-4 py-2 font-bold text-purple-700 dark:bg-purple-400/15 dark:text-purple-300"
                      : "rounded-full px-4 py-2 font-semibold hover:bg-purple-50 hover:text-purple-600 dark:hover:bg-white/5 dark:hover:text-purple-300"
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  prefetch
                  onClick={() => setIsOpen(false)}
                  className={`transition-colors duration-300 ${
                    pathName === "/projects"
                      ? "rounded-full bg-purple-100 px-4 py-2 font-bold text-purple-700 dark:bg-purple-400/15 dark:text-purple-300"
                      : "rounded-full px-4 py-2 font-semibold hover:bg-purple-50 hover:text-purple-600 dark:hover:bg-white/5 dark:hover:text-purple-300"
                  }`}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  prefetch
                  onClick={() => setIsOpen(false)}
                  className={`transition-colors duration-300 ${
                    pathName === "/contact"
                      ? "rounded-full bg-purple-100 px-4 py-2 font-bold text-purple-700 dark:bg-purple-400/15 dark:text-purple-300"
                      : "rounded-full px-4 py-2 font-semibold hover:bg-purple-50 hover:text-purple-600 dark:hover:bg-white/5 dark:hover:text-purple-300"
                  }`}
                >
                  Contact
                </Link>
              </li>
              <li className="ml-2 flex size-10 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-300/10 dark:text-orange-300">
                {mounted ? (
                  <>
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
                      <button
                        aria-label="Switch to dark mode"
                        className="mt-px"
                      >
                        <SunIcon
                          className="size-6 transition-colors duration-300 hover:text-orange-300"
                          onClick={() => setTheme("dark")}
                        />
                      </button>
                    )}
                  </>
                ) : (
                  <div className="mt-px size-6" />
                )}
              </li>
            </ul>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full bg-purple-100 p-3 text-purple-700 md:hidden dark:bg-white/10 dark:text-purple-200"
              aria-label="Toggle menu"
            >
              <MenuIcon className="text-2xl dark:text-gray-50" />
            </button>
          </div>
          <div
            className={`rounded-b-3xl border-t border-purple-100 bg-white p-6 shadow-xl dark:border-white/10 dark:bg-[#211b31] ${
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
                {mounted ? (
                  <>
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
                  </>
                ) : (
                  <div className="size-6" />
                )}
              </li>
            </ul>
          </div>
        </>
      </Container>
    </nav>
  );
}
