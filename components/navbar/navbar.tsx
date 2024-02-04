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

const Navbar = () => {
  return (
    <>
      <header className="border-b py-4 mx-auto">
        <div className="px-24">
          <Link href="/">
            <Image src={fakeLogo} height={70} width={100} alt="Fake logo" />
          </Link>
        </div>
        <div>
          <MainNav data={[]} />
        </div>
        <Marquee data={navbarMarqueeData} />
      </header>
    </>
  );
};

export default Navbar;
