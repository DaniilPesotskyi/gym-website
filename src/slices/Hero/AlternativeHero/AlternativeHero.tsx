import css from "./AlternativeHero.module.css";

import { PrismicNextImage } from "@prismicio/next";
import { HeroSliceAlternative } from "../../../../prismicio-types";
import { PrismicRichText } from "@prismicio/react";

interface IProps {
  slice: HeroSliceAlternative;
}

const AlternativeHero: React.FC<IProps> = ({ slice }) => {
  return (
    <section className={css.section}>
      <PrismicRichText
        field={slice.primary.heading}
        components={{
          heading1: ({ children }) => (
            <h1 className={css.heading}>{children}</h1>
          ),
        }}
      />
      <PrismicRichText
        field={slice.primary.subtitle}
        components={{
          paragraph: ({ children }) => (
            <p className={css.subtitle}>{children}</p>
          ),
        }}
      />
      <div className={css.blur}></div>
      <PrismicNextImage className={css.image} field={slice.primary.image} />
    </section>
  );
};

export default AlternativeHero;
