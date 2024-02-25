import css from "./index.module.css";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import Heading from "@/components/Heading/Heading";
import Section from "@/components/Section/Section";
import FaqItem from "@/components/FaqItem/FaqItem";

export type FaqProps = SliceComponentProps<Content.FaqSlice>;

const Faq = ({ slice }: FaqProps): JSX.Element => {
  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading field={slice.primary.heading} position="center" />
      <ul className={css.list}>
        {slice.items.map((i, index) => (
          <li key={index}>
            <FaqItem item={i} />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Faq;
