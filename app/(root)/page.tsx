import Image from "next/image";
// images
import storeBannerOne from "@/public/storeBannerOne.jpg";
import storeBannerTwo from "@/public/storeBannerTwo.jpg";
import storeBannerThree from "@/public/storeBannerThree.jpg";
// components
import Carousel from "@/components/carousel/carousel";
import Marquee from "@/components/marquee/marquee";
import ProductGrid from "@/components/products/products-grid";
// data
import { homepageBannerMarqueeData } from "@/components/marquee/data/homepage-banner-marquee-data";
// actions
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
    <div className="flex flex-col items-center overflow-x-hidden">
      <div className="mx-4 mt-2 max-w-[2000px] max-h-[900px] rounded-2xl  overflow-hidden relative">
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
      </div>
      <Marquee data={homepageBannerMarqueeData} />
      <div className="w-full bg-red-100 px-20 py-10">
        <h2 className="text-7xl font-lato font-extrabold self-start">
          RECENT PRODUCTS
        </h2>
        <div className="mt-8">
          <ProductGrid products={products} filter="recent" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
