import Image from "next/image";
import Link from "next/link";

import fakeLogo from "../../public/fakeLogo.svg";
import MainNav from "./main-nav";

const Navbar = () => {
  return (
    <header className="border-b max-w-7xl py-4 px-8 mx-auto">
      <div>
        <Link href="/">
          <Image src={fakeLogo} height={70} width={100} alt="Fake logo" />
        </Link>
      </div>
      <div>
        <MainNav data={[]} />
      </div>
    </header>
  );
};

export default Navbar;
