"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface ThemeButtonProps {
  currentTheme: Themes;
  onClick?: () => void;
  
}

enum Themes {
  DARK= "dark",
  LIGHT="light"
}

export const CrescentButton = ({currentTheme, onClick}: ThemeButtonProps) => {
  return (
    <button onClick={onClick}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-6 h-6 transition-colors duration-300 ${
          currentTheme === Themes.DARK ? "fill-[#C2C5DE] stroke-[#C2C5DE]" : "fill-none stroke-[#374151]"
        }`}
>
      <g clip-path="url(#clip0_2516_169)">
      <path d="M20.3541 15.354C18.7173 16.0122 16.9232 16.1748 15.1948 15.8217C13.4663 15.4686 11.8797 14.6153 10.6323 13.3678C9.38484 12.1204 8.53151 10.5338 8.17839 8.80535C7.82527 7.0769 7.98791 5.28277 8.64611 3.646C6.70782 4.42673 5.10148 5.85739 4.10244 7.69272C3.1034 9.52805 2.77391 11.6537 3.17043 13.7054C3.56695 15.757 4.6648 17.6069 6.27577 18.9378C7.88674 20.2687 9.9105 20.9977 12.0001 21C13.797 21.0001 15.5529 20.4624 17.0417 19.4562C18.5305 18.45 19.6841 17.0213 20.3541 15.354Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <defs>
      <clipPath id="clip0_2516_169">
      <rect width="24" height="24" fill="white"/>
      </clipPath>
      </defs>
    </svg>
    </button>
  )
}

export const ThemeButton = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  interface ThemeOption {
    id: string;
    label: string;
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !theme) {
      const systemTheme =
        resolvedTheme 
        ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light");

      setTheme(systemTheme);
    }
  }, [mounted, theme, resolvedTheme, setTheme]);

  // if (!mounted) {
  //   return (
  //       theme === Themes.LIGHT ? <StaticCrescentButton key={Themes.LIGHT} currentTheme={Themes.LIGHT} />: <StaticCrescentButton key={Themes.DARK} currentTheme={Themes.DARK} />
  //   );
  // }

  const effectiveTheme = resolvedTheme || theme;
  console.log("effective theme: ", effectiveTheme)
  return (
       effectiveTheme === Themes.DARK? 
        <CrescentButton
          key={Themes.DARK}
          currentTheme={Themes.DARK}
          onClick={() => setTheme(Themes.LIGHT)}
        />:
        <CrescentButton
          key={Themes.LIGHT}
          currentTheme={Themes.LIGHT}
          onClick={() => setTheme(Themes.DARK)}
        />
  );
};

