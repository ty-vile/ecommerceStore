import Image from "next/image";
import storeBannerOne from "@/public/storeBannerOne.jpg";
import storeBannerTwo from "@/public/storeBannerTwo.jpg";
import storeBannerThree from "@/public/storeBannerThree.jpg";

import Carousel from "@/components/carousel/carousel";
import Marquee from "@/components/marquee/marquee";
import { homepageBannerMarqueeData } from "@/components/marquee/data/homepage-banner-marquee-data";
import { navbarMarqueeData } from "@/components/marquee/data/navbar-marquee-data";

const carouselSlides = [
  {
    img: storeBannerOne,
    text: "TEST",
  },
  {
    img: storeBannerTwo,
    text: "TEST2",
  },
  {
    img: storeBannerThree,
    text: "TEST3",
  },
];

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <div className="mx-4 mt-2 h-fit max-h-[800px] rounded-2xl overflow-hidden relative">
        <Carousel autoSlide={true} autoSlideInterval={10000}>
          {carouselSlides.map((slide, i) => {
            return (
              <>
                <Image
                  src={slide.img}
                  alt={`Store banner image ${i + 1}`}
                  key={i}
                  className="rounded-2xl hover:scale-105 transition-transform duration-1000 bg-top"
                />
              </>
            );
          })}
        </Carousel>
        <div className="z-20 absolute bottom-20 left-20">
          <button className="p-1 border-2 border-black bg-green-300 hover:bg-green-400 text-lg font-bold">
            Shop Now
          </button>
        </div>
      </div>
      <Marquee data={homepageBannerMarqueeData} />
    </div>
  );
};

export default HomePage;
