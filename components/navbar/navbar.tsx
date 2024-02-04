// next
import Image from "next/image";
import Link from "next/link";
// assets
import fakeLogo from "@/public/fakeLogo.svg";
// components
import MainNav from "@/components/navbar/main-nav";
import Marquee from "@/components/marquee/marquee";
// data
import { navbarMarqueeData } from "@/components/marquee/data/navbar-marquee-data";
// actions
import getAllCategories from "@/actions/categories/getAllCategories";

const Navbar = async () => {
  const categories = await getAllCategories();

  return (
    <>
      <header className="border-b py-4 mx-auto">
        <div className="flex items-center">
          <div className="px-24">
            <Link href="/">
              <Image src={fakeLogo} height={70} width={100} alt="Fake logo" />
            </Link>
          </div>
          <div className="flex items-center">
            <MainNav data={categories} />
          </div>
        </div>
        <Marquee data={navbarMarqueeData} />
      </header>
    </>
  );
};

export default Navbar;
