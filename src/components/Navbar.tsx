"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineMenu as MenuIcon } from "react-icons/ai";

import Container from "./Container";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathName = usePathname();

  return (
    <nav className="bg-white border-b border-gray-300 dark:bg-slate-800 dark:border-none">
      <div className="h-4 bg-gradient-to-r from-purple-500 to-orange-500"></div>
      <Container>
        <>
          <div className="flex items-center justify-between p-5 ">
            <Link href="/" prefetch className="flex items-center gap-4">
              <img
                src="images/goat-logo.svg"
                className="w-14 h-14 dark:filter dark:invert"
                alt="A stylistic goat logo"
              />
              <h1 className="text-4xl font-bold text-gray-600 dark:text-gray-50">
                Todd Goates
              </h1>
            </Link>
            <ul className="hidden text-lg text-gray-600 md:visible md:flex md:gap-8 dark:text-gray-50">
              <li className="py-3">
                <Link
                  href="/"
                  prefetch
                  onClick={() => setIsOpen(false)}
                  className={`transition-colors duration-300 ${
                    pathName === "/"
                      ? "text-purple-500 font-semibold"
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
                      ? "text-purple-500 font-semibold"
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
                      ? "text-purple-500 font-semibold"
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
                      ? "text-purple-500 font-semibold"
                      : "font-semibold hover:text-purple-500"
                  }`}
                >
                  Contact
                </Link>
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
            className={`bg-gray-200 p-5 border-b border-gray-300 dark:bg-slate-700 ${
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
                      ? "text-purple-500 font-semibold"
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
                      ? "text-purple-500 font-semibold"
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
                      ? "text-purple-500 font-semibold"
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
                      ? "text-purple-500 font-semibold"
                      : "font-semibold hover:text-purple-500"
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </>
      </Container>
    </nav>
  );
}
