"use client";

import css from "./index.module.css";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { useState } from "react";

import AlternativeHero from "./AlternativeHero/AlternativeHero";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice }: HeroProps): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  return (
    <>
      {slice.variation === "default" && (
        <section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
          className={css.section}
        >
          <div className={css.container}>
            <PrismicRichText
              field={slice.items[currentSlide].heading}
              components={{
                heading1: ({ children }) => (
                  <h1 className={css.title}>{children}</h1>
                ),
              }}
            />
          </div>
          <Swiper
            modules={[Autoplay]}
            className={css.swiper}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
          >
            {slice.items.map((i, index) => (
              <SwiperSlide key={index} className={css.slide}>
                <PrismicNextImage className={css.image} field={i.image} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={css.blur}></div>
        </section>
      )}
      {slice.variation === "alternative" && <AlternativeHero slice={slice} />}
    </>
  );
};

export default Hero;
