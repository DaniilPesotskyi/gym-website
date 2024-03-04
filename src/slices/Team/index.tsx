import css from "./index.module.css";

import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";

import Section from "@/components/Section/Section";
import Heading from "@/components/Heading/Heading";
import Link from "@/components/Link/Link";
import Alternative from "./Alternative";

export type TeamProps = SliceComponentProps<Content.TeamSlice>;

const Team = async ({ slice }: TeamProps): Promise<JSX.Element> => {
  const client = createClient();

  const members = await Promise.all(
    slice.items.map((item) => {
      if (isFilled.contentRelationship(item.member) && item.member.uid) {
        return client.getByUID("member", item.member.uid);
      }
    })
  );

  const team = await client.getAllByType("member");
  return (
    <>
      {slice.variation === "default" && (
        <Section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          <Heading field={slice.primary.heading} position="center" />
          <div className={css.container}>
            <PrismicRichText
              field={slice.primary.subtitle}
              components={{
                paragraph: ({ children }) => (
                  <p className={css.subtitle}>{children}</p>
                ),
              }}
            />
            <ul className={css.list}>
              {members &&
                members.map((i, index) => (
                  <li key={index} className={css.item}>
                    <div className={css.imageWrap}>
                      <div className={css.dark}></div>
                      <PrismicNextImage
                        field={i?.data.image}
                        className={css.image}
                      />
                    </div>
                    <div className={css.info}>
                      <PrismicRichText
                        field={i?.data.name}
                        components={{
                          heading3: ({ children }) => (
                            <h3 className={css.name}>{children}</h3>
                          ),
                        }}
                      />
                      <div className={css.tags}>
                        <span>/ {i?.data.position}</span>
                        <span>
                          <TimeIcon className={css.icon} />{" "}
                          {i?.data.work_experience}
                        </span>
                      </div>
                      <PrismicRichText
                        field={i?.data.short_description}
                        components={{
                          paragraph: ({ children }) => (
                            <p className={css.description}>{children}</p>
                          ),
                        }}
                      />
                    </div>
                  </li>
                ))}
            </ul>
          </div>
          <Link
            link={slice.primary.button_link}
            label={slice.primary.button_label}
          />
        </Section>
      )}
      {slice.variation === "fullFledged" && (
        <Alternative slice={slice} team={team} />
      )}
    </>
  );
};

export default Team;

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
