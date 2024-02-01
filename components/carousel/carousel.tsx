"use client";

type Props = {
  carouselSlides: StaticImageData[];
};

// next
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
// components
import CarouselWrapper from "@/components/carousel/carousel-wrapper";

const Carousel = ({ carouselSlides }: Props) => {
  const;

  return (
    <CarouselWrapper>
      {carouselSlides.map((slide, i) => {
        return (
          <Image
            src={slide}
            alt={`Store banner image ${i + 1}`}
            width={500}
            className="object-cover rounded-2xl hover:scale-105 transition-transform duration-1000"
          />
        );
      })}
    </CarouselWrapper>
  );
};

export default Carousel;
