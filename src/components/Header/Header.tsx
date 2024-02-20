import { PrismicNextLink } from "@prismicio/next";
import { SettingsDocument } from "../../../prismicio-types";
import css from "./Header.module.css";

interface IProps {
  settings: SettingsDocument<string>;
}

const Header: React.FC<IProps> = ({ settings }) => {
  return (
    <header className={css.header}>
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
      <button type="button" className={css.langBtn}>
        <UkraineIcon className={css.langIcon} />
        Укр
      </button>
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

function UkraineIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="20"
      fill="none"
    >
      <mask
        id="a"
        width="27"
        height="20"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "luminance" }}
      >
        <path fill="#fff" d="M0 0h27v20H0z"></path>
      </mask>
      <g mask="url(#a)">
        <path
          fill="#3195F9"
          fillRule="evenodd"
          d="M0 0v20h27V0H0z"
          clipRule="evenodd"
        ></path>
        <mask
          id="b"
          width="27"
          height="20"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "luminance" }}
        >
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M0 0v20h27V0H0z"
            clipRule="evenodd"
          ></path>
        </mask>
        <g mask="url(#b)">
          <path
            fill="#FECA00"
            fillRule="evenodd"
            d="M0 10v10h27V10H0z"
            clipRule="evenodd"
          ></path>
        </g>
      </g>
    </svg>
  );
}
