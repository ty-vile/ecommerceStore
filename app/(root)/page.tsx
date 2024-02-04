import Image from "next/image";
// images
import storeBannerOne from "@/public/storeBannerOne.jpg";
import storeBannerTwo from "@/public/storeBannerTwo.jpg";
import storeBannerThree from "@/public/storeBannerThree.jpg";
// components
import Carousel from "@/components/carousel/carousel";
import Marquee from "@/components/marquee/marquee";
// data
import { homepageBannerMarqueeData } from "@/components/marquee/data/homepage-banner-marquee-data";
import getAllProducts from "@/actions/products/getAllProducts";

const carouselSlides = [
  {
    img: storeBannerOne,
  },
  {
    img: storeBannerTwo,
  },
  {
    img: storeBannerThree,
  },
];

const HomePage = async () => {
  const products = await getAllProducts();

  console.log(products);

  return (
    <div className="flex flex-col items-center justify-center overflow-x-hidden">
      <div className="mx-4 mt-2 max-w-[2000px] max-h-[1000px] rounded-2xl  overflow-hidden relative">
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
