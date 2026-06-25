"use client";

import Link from "next/link";
import { useState } from "react";
import {  ThemeButton } from "./themeButton";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    {
      title: "Works",
      href: "works",
    },
    {
      title: "Blog",
      href: "blogs",
    },
    {
      title: "Contact",
      href: "/",
    },
  ];

  return (
    <section className="sticky top-0 z-10 md:backdrop-blur-[4px] bg-background/90 ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)] py-2">
    <div className="max-w-sections mx-auto flex flex-row justify-end gap-8 ">

      <ul
        className={`fixed inset-0 z-50 flex flex-col items-center justify-start pt-28 bg-background space-y-6 shadow-inner 
                            transform transition-transform duration-300 md:hidden
                            ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {navItems.map((navItem) => (
          <li key={navItem.title}>
            <Link
              href={navItem.href}
              className="text-lg font-medium cursor-pointer hover:text-red-400"
              onClick={() => setMenuOpen(false)}
            >
              {navItem.title}
            </Link>
          </li>
        ))}
        <ThemeButton />
      </ul>

      <ul className="hidden md:flex md:flex-row md:space-x-6 md:translate-x-0 md:pt-0 md:space-y-0 md:bg-transparent md:shadow-none px-3">
        {navItems.map((navItem) => (
          <li key={navItem.title}>
            <Link
              href={navItem.href}
              className="text-lg font-medium cursor-pointer hover:text-red-400"
            >
              {navItem.title}
            </Link>
          </li>
        ))}
        <ThemeButton/>
      </ul>

      {/* Hamburger Icon (hidden on md and up) */}
      <button
        onClick={() => setMenuOpen((prev) => !prev)}
        className={`mr-2 my-1 z-60 flex flex-col justify-between w-5 h-4 cursor-pointer md:hidden
                            ${menuOpen ? "[&>span:nth-child(1)]:rotate-45 [&>span:nth-child(2)]:scale-y-0 [&>span:nth-child(3)]:-rotate-45" : ""}`}
        aria-label="Toggle menu"
      >
        <span className="block h-0.75 bg-font rounded transition-transform duration-300 origin-top-left"></span>
        <span className="block h-0.75 bg-font rounded transition-transform duration-200"></span>
        <span className="block h-0.75 bg-font rounded transition-transform duration-300 origin-bottom-left"></span>
      </button>
    </div>
    </section>
  );
};
export default NavBar;
