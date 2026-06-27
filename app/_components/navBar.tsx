"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ThemeButton } from "./themeButton";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    {
      title: "Works",
      href: "/works",
    },
    {
      title: "Blog",
      href: "/blogs",
    },
    {
      title: "Contact",
      href: "/",
    },
  ];

  const button = useMemo(() => (
    <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className={`mr-2 my-1 flex flex-col justify-between w-5 h-4 cursor-pointer md:hidden
                            ${menuOpen ? "[&>span:nth-child(1)]:rotate-45 [&>span:nth-child(2)]:scale-y-0 [&>span:nth-child(3)]:-rotate-45" : ""}`}
            aria-label="Toggle menu"
          >
            <span className="block h-0.75 bg-font rounded transition-transform duration-300 origin-top-left"></span>
            <span className="block h-0.75 bg-font rounded transition-transform duration-200"></span>
            <span className="block h-0.75 bg-font rounded transition-transform duration-300 origin-bottom-left"></span>
          </button>
  ), [setMenuOpen, menuOpen])

  return (
    <section className="sticky top-0 z-10">
      
        {/* {Menu Overlay for small screens} */}
        <ul
          className={`fixed inset-0  flex flex-col items-center justify-start pt-28 bg-background space-y-6 shadow-inner 
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

       {/* {Top NavBar actual} */}
      <div
        className={`bg-background/90 ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)] py-2 transform transition-transform duration-100 ${isVisible || menuOpen? "translate-y-0" : "-translate-y-full"} ${menuOpen ? "" : "backdrop-blur-[4px]"}`}
      >
        <div
          className={`max-w-sections mx-auto flex flex-row justify-end gap-8`}
        >
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
            <ThemeButton />
          </ul>
          
          {/* Hamburger Icon (hidden on md and up) */}
          {button}
        </div>
      </div>
    </section>
  );
};
export default NavBar;
