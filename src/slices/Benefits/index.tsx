"use client";

import css from "./index.module.css";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";

import Section from "@/components/Section/Section";
import Heading from "@/components/Heading/Heading";
import { useRef } from "react";

export type BenefitsProps = SliceComponentProps<Content.BenefitsSlice>;

const Benefits = ({ slice }: BenefitsProps): JSX.Element => {
  const swiper = useRef<SwiperRef>(null);

  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading field={slice.primary.heading} position="left" />
      <Swiper
        ref={swiper}
        slidesPerView={"auto"}
        spaceBetween={30}
        navigation={false}
        pagination={false}
        autoHeight={false}
        modules={[Pagination, Navigation]}
        className={css.swiper}
      >
        {slice.items &&
          slice.items.map((i, index) => (
            <SwiperSlide key={index} className={css.item}>
              <div className={css.icon}></div>
              {i.title}
            </SwiperSlide>
          ))}
      </Swiper>
      <div className={css.pagination}>
        <button
          type="button"
          className={css.paginationBtn}
          onClick={() => swiper.current?.swiper.slidePrev()}
        >
          <ArrowIcon className={css.paginationIcon} />
        </button>
        <button
          type="button"
          className={css.paginationBtn}
          onClick={() => swiper.current?.swiper.slideNext()}
        >
          <ArrowIcon className={css.paginationIcon} />
        </button>
      </div>
    </Section>
  );
};

export default Benefits;

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="none"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.667"
        d="M3.125 12.514l18.53-.014m-7.06 7.292l7.28-7.292-7.28-7.292"
      ></path>
    </svg>
  );
}
