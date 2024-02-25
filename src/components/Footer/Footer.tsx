import css from "./Footer.module.css";

import { PrismicNextLink } from "@prismicio/next";
import { FooterDocument, SettingsDocument } from "../../../prismicio-types";

import Link from "next/link";

interface IProps {
  settings: SettingsDocument<string>;
  footer: FooterDocument<string>;
}

const Footer: React.FC<IProps> = ({ settings, footer }) => {
  const date = new Date().getFullYear();

  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <div className={css.main}>
          <LogoIcon className={css.logo} />
          <span className={css.tagline}>{footer.data.tagline}</span>
        </div>
        <ul className={css.list}>
          <li className={css.item}>
            <span className={css.listLabel}>{footer.data.pages_label}</span>
            <ul className={css.sublist}>
              {settings.data.navigation.map((i, index) => (
                <li key={index}>
                  <PrismicNextLink field={i.link} className={css.subLink}>
                    {i.label}
                  </PrismicNextLink>
                </li>
              ))}
            </ul>
          </li>
          <li className={css.item}>
            <span className={css.listLabel}>{footer.data.socials_label}</span>
            <ul className={css.sublist}>
              {footer.data.socials.map((i, index) => (
                <li key={index}>
                  <PrismicNextLink field={i.link} className={css.subLink}>
                    {i.label}
                  </PrismicNextLink>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
      <div className={css.bottom}>
        <span>
          {date}.{footer.data.copy}
        </span>
        <Link href="https://github.com/DaniilPesotskyi">
          {footer.data.developer}
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

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
