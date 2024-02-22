import Heading from "@/components/Heading/Heading";
import css from "./index.module.css";

import Section from "@/components/Section/Section";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export type ServicesProps = SliceComponentProps<Content.ServicesSlice>;

const Services = ({ slice }: ServicesProps): JSX.Element => {
  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={css.section}
    >
      <Heading field={slice.primary.heading} position="center" />
      <div className={css.container}>
        <div className={css.images}>
          <PrismicNextImage
            field={slice.primary.first_image}
            className={css.image}
            priority
          />
          <PrismicNextImage
            field={slice.primary.second_image}
            className={css.image}
            priority
          />
          <PrismicNextImage
            field={slice.primary.third_image}
            className={css.image}
            priority
          />
        </div>
        <ul className={css.list}>
          {slice.items.map((i, index) => (
            <li key={index} className={css.item}>
              <div className={css.heading}>
                <span className={css.num}>0{index + 1}/</span>
                <PrismicRichText
                  field={i.title}
                  components={{
                    heading3: ({ children }) => (
                      <h3 className={css.title}>{children}</h3>
                    ),
                  }}
                />
              </div>
              <PrismicRichText
                field={i.description}
                components={{
                  paragraph: ({ children }) => (
                    <p className={css.description}>{children}</p>
                  ),
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Services;
