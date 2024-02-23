"use client";

import css from "./Header.module.css";

import { PrismicNextLink } from "@prismicio/next";
import { SettingsDocument } from "../../../prismicio-types";
import { PrismicDocument } from "@prismicio/client";

import { useEffect, useState } from "react";

import LangChanger from "./LangChanger/LangChanger";
import clsx from "clsx";

interface IProps {
  settings: SettingsDocument<string>;
  locales: (PrismicDocument<Record<string, any>, string, string> & {
    lang_name: string;
  })[];
}

const Header: React.FC<IProps> = ({ settings, locales }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      if (scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={clsx(css.header, isScrolled && css.scrolled)}>
      <LogoIcon className={css.icon} />
      <nav className={css.nav}>
        <ul className={css.navList}>
          {settings.data.navigation.map((i, index) => (
            <li key={index}>
              <PrismicNextLink field={i.link} className={css.navLink}>
                {i.label}
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>
      <LangChanger locales={locales} />
      <button type="button" className={css.menuBtn}>
        <MenuIcon className={css.icon} />
      </button>
    </header>
  );
};

export default Header;

function LogoIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
        d="M12.333 11.667H7.666a1 1 0 00-1 1v14.666a1 1 0 001 1h4.667a1 1 0 001-1V12.667a1 1 0 00-1-1zm20 0h-4.666a1 1 0 00-1 1v14.666a1 1 0 001 1h4.666a1 1 0 001-1V12.667a1 1 0 00-1-1zm-19 8.333h13.333m-25 4v-8a1 1 0 011-1h3a1 1 0 011 1v8a1 1 0 01-1 1h-3a1 1 0 01-1-1zm36.667 0v-8a1 1 0 00-1-1h-3a1 1 0 00-1 1v8a1 1 0 001 1h3a1 1 0 001-1z"
      ></path>
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3.333"
        d="M6.667 10h26.666M6.667 20h26.666M6.667 30h26.666"
      ></path>
    </svg>
  );
}
