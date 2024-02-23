import css from "./index.module.css";

import { ColorField, Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import Heading from "@/components/Heading/Heading";
import Section from "@/components/Section/Section";
import Link from "@/components/Link/Link";

export type SubscriptionsProps =
  SliceComponentProps<Content.SubscriptionsSlice>;

const Subscriptions = ({ slice }: SubscriptionsProps): JSX.Element => {
  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading field={slice.primary.heading} position="center" />
      <ul className={css.list}>
        {slice.items.map((i, index) => (
          <li key={index} className={css.item}>
            <span className={css.title}>{i.title}</span>
            <span className={css.price}>{i.price}</span>
            <GymIcon className={css.icon} stroke={i.color} />
          </li>
        ))}
      </ul>
      <Link
        link={slice.primary.button_link}
        label={slice.primary.button_label}
      />
    </Section>
  );
};

export default Subscriptions;

function GymIcon({
  className,
  stroke,
}: {
  className?: string;
  stroke: ColorField;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="341"
      height="341"
      fill="none"
      className={className}
    >
      <path
        stroke={stroke as string}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.31"
        strokeWidth="10"
        d="M105.506 99.84H65.84a8.5 8.5 0 00-8.5 8.499v124.667a8.5 8.5 0 008.5 8.5h39.666a8.504 8.504 0 007.853-5.247 8.504 8.504 0 00.647-3.253V108.339a8.5 8.5 0 00-8.5-8.5zm170 0h-39.667a8.5 8.5 0 00-8.5 8.499v124.667a8.504 8.504 0 005.248 7.853 8.499 8.499 0 003.252.647h39.667a8.504 8.504 0 007.853-5.247 8.504 8.504 0 00.647-3.253V108.339a8.5 8.5 0 00-8.5-8.5z"
      ></path>
      <path
        stroke={stroke as string}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.31"
        strokeWidth="10"
        d="M114.006 170.673h113.333m-212.5 34v-68a8.502 8.502 0 018.5-8.5h25.5a8.5 8.5 0 018.5 8.5v68a8.5 8.5 0 01-8.5 8.5h-25.5a8.5 8.5 0 01-8.5-8.5zm311.667 0v-68a8.502 8.502 0 00-8.5-8.5h-25.5a8.5 8.5 0 00-8.5 8.5v68a8.5 8.5 0 008.5 8.5h25.5a8.5 8.5 0 008.5-8.5z"
      ></path>
    </svg>
  );
}
