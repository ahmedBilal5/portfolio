import Link from "next/link";
import {  ThemeButton } from "./themeButton";

interface NavItemProps {
  title: string;
  href: string;
}

const NavBar = () => {
  const navItems = [
    {
      title: "Works",
      href: "",
    },
    {
      title: "Blog",
      href: "",
    },
    {
      title: "Contact",
      href: "",
    },
  ];
  const navLinks = navItems.map((navItem) => (
    <Link
      key={navItem.title}
      href={navItem.href}
      className="text-lg font-medium cursor-pointer hover:text-red-400"
    >
      {navItem.title}
    </Link>
  ));

  return (
    <div className="sticky top-0 z-10 bg-background/90 mt-2 py-2 md:mb-16.5 mb-7 flex flex-row justify-end gap-8 ">
      <input type="checkbox" id="menu-toggle" className="peer hidden" />

      <ul
        className="fixed inset-0 z-50 flex flex-col items-center justify-start pt-28 bg-background space-y-6 shadow-inner 
                            transform translate-x-full transition-transform duration-500 peer-checked:translate-x-0
                            md:hidden"
      >
        {navLinks}
        <ThemeButton />
        {/* <StaticThemeButtonOther/> */}
      </ul>

      <ul className="hidden md:flex md:flex-row md:space-x-6 md:translate-x-0 md:pt-0 md:space-y-0 md:bg-transparent md:shadow-none">
        {navLinks}
        <ThemeButton />
      </ul>

      {/* Hamburger Icon (hidden on md and up) */}
      <label
        htmlFor="menu-toggle"
        className="z-60 flex flex-col justify-between w-8 h-6 cursor-pointer md:hidden
                            peer-checked:[&>span:nth-child(1)]:rotate-45 
                            peer-checked:[&>span:nth-child(2)]:scale-y-0 
                            peer-checked:[&>span:nth-child(3)]:-rotate-45"
      >
        <span className="block h-1 bg-font rounded transition-transform duration-300 origin-top-left"></span>
        <span className="block h-1 bg-font rounded transition-transform duration-200"></span>
        <span className="block h-1 bg-font rounded transition-transform duration-300 origin-bottom-left"></span>
      </label>
    </div>
  );
};
export default NavBar;
