"use client";

import css from "./Alternative.module.css";

import { useState } from "react";

import { MemberDocument, TeamSliceFullFledged } from "../../../prismicio-types";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

interface IProps {
  team: (MemberDocument<string> | undefined)[];
  slice: TeamSliceFullFledged;
}

const Alternative: React.FC<IProps> = ({ team, slice }) => {
  const [current, setCurrent] = useState<number>(1);

  return (
    <section className={css.section}>
      <div className={css.info}>
        <PrismicRichText
          field={team[current]?.data.name}
          components={{
            heading2: ({ children }) => (
              <h2 className={css.name}>{children}</h2>
            ),
          }}
        />
        <div className={css.subinfo}>
          <span className={css.position}>{team[current]?.data.position}</span>
          <div className={css.experienceWrap}>
            <TimeIcon className={css.timeIcon} />
            <span className={css.experience}>
              {team[0]?.data.work_experience}
            </span>
          </div>
        </div>
        <ul className={css.socials}>
          {team[current]?.data.socials.map((i, index) => (
            <li key={index}>
              <PrismicNextLink field={i.link}>{i.icon}</PrismicNextLink>
            </li>
          ))}
        </ul>
        <p></p>
      </div>
      <div>
        <span className={css.label}>{slice.primary.label}</span>
        <ul className={css.list}>
          {team.map((i, index) => (
            <li key={index}>
              <button type="button">
                <div className={css.imageWrap}>
                  <div className={css.dark}></div>
                  <PrismicNextImage
                    field={i?.data.image}
                    className={css.image}
                  />
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Alternative;

function TimeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
    >
      <path
        strokeWidth="1.042"
        d="M10 17.083a7.083 7.083 0 100-14.166 7.083 7.083 0 000 14.166z"
      ></path>
      <path
        strokeLinecap="round"
        strokeWidth="1.042"
        d="M13.75 10h-3.542A.208.208 0 0110 9.79V7.083"
      ></path>
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
    >
      <rect width="40" height="40" fill="#000" rx="10"></rect>
      <path
        fill="#fff"
        d="M20 11.807h4.096c.964 0 1.446.241 1.808.362.482.24.843.361 1.204.723.362.361.603.723.723 1.204.12.362.241.844.362 1.808v8.192c0 .964-.241 1.446-.362 1.808-.24.482-.361.843-.723 1.204-.361.362-.723.603-1.204.723-.362.12-.844.241-1.808.362h-8.192c-.964 0-1.446-.241-1.808-.362-.482-.24-.843-.361-1.204-.723-.362-.361-.603-.723-.723-1.204-.12-.362-.241-.844-.362-1.808v-8.192c0-.964.241-1.446.362-1.808.24-.482.361-.843.723-1.204.361-.362.723-.603 1.204-.723.362-.12.844-.241 1.808-.362H20zM20 10h-4.096c-1.085 0-1.808.241-2.41.482a5.263 5.263 0 00-1.807 1.205c-.603.602-.844 1.084-1.205 1.807-.241.602-.361 1.325-.482 2.41v8.192c0 1.085.241 1.808.482 2.41a5.263 5.263 0 001.205 1.807c.602.603 1.084.844 1.807 1.205.602.241 1.325.361 2.41.482h8.192c1.085 0 1.808-.241 2.41-.482a5.263 5.263 0 001.807-1.205c.603-.602.844-1.084 1.205-1.807.241-.602.361-1.325.482-2.41v-8.192c0-1.085-.241-1.808-.482-2.41a5.263 5.263 0 00-1.205-1.807c-.602-.603-1.084-.844-1.807-1.205-.602-.241-1.325-.361-2.41-.482H20z"
      ></path>
      <path
        fill="#fff"
        d="M20 14.82A5.142 5.142 0 0014.82 20c0 2.892 2.288 5.18 5.18 5.18s5.18-2.288 5.18-5.18-2.288-5.18-5.18-5.18zm0 8.553A3.368 3.368 0 0116.627 20 3.368 3.368 0 0120 16.627 3.368 3.368 0 0123.373 20c0 1.807-1.566 3.373-3.373 3.373zm5.301-7.469a1.205 1.205 0 100-2.41 1.205 1.205 0 000 2.41z"
      ></path>
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
    >
      <rect width="40" height="40" fill="#000" rx="10"></rect>
      <path
        fill="#fff"
        d="M21.657 20.365h3.722l.585-3.804h-4.308v-2.08c0-1.58.514-2.981 1.983-2.981H26V8.18c-.415-.057-1.292-.18-2.95-.18-3.462 0-5.491 1.84-5.491 6.03v2.53H14v3.805h3.559V30.82a14.33 14.33 0 002.151.18c.662 0 1.309-.06 1.947-.148V20.365z"
      ></path>
    </svg>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
    >
      <rect width="40" height="40" fill="#000" rx="10"></rect>
      <path
        fill="#fff"
        d="M28 12.602l-3.005 15.69s-.42 1.088-1.576.566l-6.934-5.505-.033-.017c.937-.87 8.2-7.633 8.518-7.94.491-.475.186-.757-.384-.399l-10.73 7.056-4.138-1.442s-.652-.24-.714-.762c-.064-.523.735-.805.735-.805l16.874-6.855S28 11.558 28 12.602z"
      ></path>
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
    >
      <g clipPath="url(#a)">
        <rect width="40" height="40" fill="#000" rx="10"></rect>
        <path
          fill="#fff"
          d="M29.976 14.254A5.253 5.253 0 0124.723 9H20.97v14.697a3.192 3.192 0 11-2.29-3.065v-3.648a6.774 6.774 0 105.868 6.713l.109-7.429a8.966 8.966 0 005.319 1.739v-3.754z"
        ></path>
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h40v40H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}
