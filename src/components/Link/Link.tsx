import css from "./Link.module.css";

import { KeyTextField, LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";

interface IProps {
  link: LinkField;
  label: KeyTextField;
}

const Link: React.FC<IProps> = ({ link, label }) => {
  return (
    <PrismicNextLink field={link} className={css.link}>
      <div className={css.iconWrap}>
        <ArrowIcon className={css.icon} />
      </div>
      {label}
    </PrismicNextLink>
  );
};

export default Link;

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      fill="none"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.667"
        d="M12.691 22.053l-.013-18.53m7.291 7.059l-7.291-7.28-7.292 7.28"
      ></path>
    </svg>
  );
}
