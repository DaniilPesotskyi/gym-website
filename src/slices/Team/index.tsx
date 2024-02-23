import css from "./index.module.css";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import Section from "@/components/Section/Section";
import Heading from "@/components/Heading/Heading";

export type TeamProps = SliceComponentProps<Content.TeamSlice>;

const Team = ({ slice }: TeamProps): JSX.Element => {
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
              <li></li>
            </ul>
          </div>
        </Section>
      )}
      {slice.variation === "fullFledged" && <div></div>}
    </>
  );
};

export default Team;
