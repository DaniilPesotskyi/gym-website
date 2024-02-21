"use client";

import css from "./LangChanger.module.css";

import { PrismicDocument } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";

import { useState } from "react";
import { useParams } from "next/navigation";

interface IProps {
  locales: (PrismicDocument<Record<string, any>, string, string> & {
    lang_name: string;
  })[];
}

const localeLabels: { [key: string]: string } = {
  "en-us": "Eng",
  "uk-ua": "Укр",
};

const LangChanger: React.FC<IProps> = ({ locales }) => {
  const [isOpen, setIsOpen] = useState(false);
  const params = useParams();

  const onBackdropClick = () => {};

  return (
    <div className={css.wrap}>
      {locales.map(
        (locale) =>
          locale.lang !== params.lang && (
            <PrismicNextLink
              key={locale.lang}
              href={locale.url as string}
              locale={locale.lang}
              aria-label={`Change language to ${locale.lang_name}`}
              className={css.btn}
            >
              {params.lang === "uk-ua" ? (
                <UkraineIcon className={css.icon} />
              ) : (
                <AmericaIcon className={css.icon} />
              )}
              {localeLabels[params.lang as string] || ""}
            </PrismicNextLink>
          )
      )}
    </div>
  );
};

export default LangChanger;

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

function AmericaIcon({ className }: { className?: string }) {
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
        width="26"
        height="20"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "luminance" }}
      >
        <path fill="#fff" d="M0 0h26v20H0z"></path>
      </mask>
      <g mask="url(#a)">
        <path
          fill="#F7FCFF"
          fillRule="evenodd"
          d="M0 0h26v20H0V0z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#E31D1C"
          fillRule="evenodd"
          d="M0 12.222v1.667h26v-1.667H0zm0 3.056v1.666h26v-1.666H0zm0-9.167v1.667h26V6.11H0zm0 12.222V20h26v-1.667H0zm0-9.166v1.666h26V9.167H0zM0 0v1.667h26V0H0zm0 3.056v1.666h26V3.056H0z"
          clipRule="evenodd"
        ></path>
        <path fill="#2E42A5" d="M0 0h16.25v10.833H0z"></path>
        <path
          fill="#F7FCFF"
          fillRule="evenodd"
          d="M1.4 2.449l-.59.424.198-.755-.523-.478h.684l.23-.616.268.616h.584l-.459.478.178.755-.57-.424zm3.25 0l-.59.424.198-.755-.523-.478h.684l.23-.616.268.616h.584l-.459.478.178.755-.57-.424zm2.66.424l.59-.424.57.424-.178-.755.459-.478h-.584l-.269-.616-.23.616h-.683l.523.478-.199.755zm3.84-.424l-.59.424.198-.755-.523-.478h.684l.23-.616.268.616h.584l-.459.478.178.755-.57-.424zM.81 6.206l.59-.424.57.424-.178-.754.459-.479h-.584l-.269-.616-.23.616H.486l.523.479-.199.754zm3.84-.424l-.59.424.198-.754-.523-.479h.684l.23-.616.268.616h.584l-.459.479.178.754-.57-.424zm2.66.424l.59-.424.57.424-.178-.754.459-.479h-.584l-.269-.616-.23.616h-.683l.523.479-.199.754zm3.84-.424l-.59.424.198-.754-.523-.479h.684l.23-.616.268.616h.584l-.459.479.178.754-.57-.424zM.81 9.54l.59-.424.57.424-.178-.755.459-.478h-.584l-.269-.616-.23.616H.486l.523.478-.199.755zm3.84-.424l-.59.424.198-.755-.523-.478h.684l.23-.616.268.616h.584l-.459.478.178.755-.57-.424zm2.66.424l.59-.424.57.424-.178-.755.459-.478h-.584l-.269-.616-.23.616h-.683l.523.478-.199.755zm3.84-.424l-.59.424.198-.755-.523-.478h.684l.23-.616.268.616h.584l-.459.478.178.755-.57-.424zm2.66-6.243l.59-.424.57.424-.178-.755.459-.478h-.584l-.269-.616-.23.616h-.683l.524.478-.2.755zm.59 2.91l-.59.423.198-.754-.523-.479h.684l.23-.616.268.616h.584l-.459.479.178.754-.57-.424zm-.59 3.757l.59-.424.57.424-.178-.755.459-.478h-.584l-.269-.616-.23.616h-.683l.524.478-.2.755zM3.023 4.116l-.59.424.2-.755-.524-.478h.684l.23-.616.268.616h.584l-.459.478.178.755-.57-.424zm2.66.424l.59-.424.57.424-.177-.755.459-.478h-.584l-.269-.616-.23.616H5.36l.523.478-.199.755zm3.84-.424l-.59.424.2-.755-.524-.478h.684l.23-.616.268.616h.584l-.459.478.178.755-.57-.424zm-7.09 3.757l.59-.424.57.424-.177-.755.459-.478h-.584l-.269-.616-.23.616H2.11l.523.478-.199.755zm3.84-.424l-.59.424.2-.755-.524-.478h.684l.23-.616.268.616h.584l-.459.478.178.755-.57-.424zm2.66.424l.59-.424.57.424-.177-.755.459-.478h-.584l-.269-.616-.23.616H8.61l.523.478-.199.755zm3.84-3.757l-.59.424.2-.755-.524-.478h.684l.23-.616.268.616h.584l-.459.478.178.755-.57-.424zm-.59 3.757l.59-.424.57.424-.177-.755.459-.478h-.584l-.269-.616-.23.616h-.683l.524.478-.2.755z"
          clipRule="evenodd"
        ></path>
      </g>
    </svg>
  );
}
