"use client";

import { useEffect, useState } from "react";

type Props = {
  children: any;
  autoSlide: boolean;
  autoSlideInterval?: number;
};

const Carousel = ({ children, autoSlide, autoSlideInterval }: Props) => {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    setCurrent((cur) => (cur === 0 ? children.length - 1 : cur - 1));
  };

  const nextSlide = () => {
    setCurrent((cur) => (cur === children.length - 1 ? 0 : cur + 1));
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(nextSlide, autoSlideInterval);
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl">
      <div
        className="flex transition-transform duration-2000 linear rounded-2xl"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {children}
      </div>
    </div>
  );
};

export default Carousel;
