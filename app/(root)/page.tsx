import Image from "next/image";
import storeBannerOne from "@/public/storeBannerOne.webp";
import storeBannerTwo from "@/public/storeBannerTwo.webp";
import storeBannerThree from "@/public/storeBannerThree.webp";

import Carousel from "@/components/carousel/carousel";

const carouselSlides = [storeBannerOne, storeBannerTwo, storeBannerThree];

const HomePage = () => {
  return (
    // <div className="relative h-[89vh] min-h-[500px] mx-20 mt-2 ">
    //   <div className="overflow-hidden inline-block z-10 bg-red-500 absolute inset-0 rounded-2xl">
    //     <Image
    //       src={bannerImage}
    //       alt=""
    //       fill
    //       className="object-cover rounded-2xl hover:scale-105 transition-transform duration-1000"
    //     />
    //   </div>
    // </div>
    <div className="mx-20 mt-2 h-[65vh]">
      <Carousel>
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
      </Carousel>
    </div>
  );
};

export default HomePage;
