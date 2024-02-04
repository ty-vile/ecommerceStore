import nflLogo from "@/public/nflLogo.svg";
import Image from "next/image";

export const homepageBannerMarqueeData = {
  styles:
    "p-1 border-t-2 border-b-2 border-black bg-blue-300 text-lg font-bold",
  content: [
    <div className="mx-4 inline-flex items-center gap-4">
      <span>SHOP THE LATEST FROM THE NFL</span>
      <Image src={nflLogo} width={40} alt="Logo" />
    </div>,
    <div className="mx-4 inline-flex items-center gap-4">
      <span>SHOP THE LATEST FROM THE NFL</span>
      <Image src={nflLogo} width={40} alt="Logo" />
    </div>,
    <div className="mx-4 inline-flex items-center gap-4">
      <span>SHOP THE LATEST FROM THE NFL</span>
      <Image src={nflLogo} width={40} alt="Logo" />
    </div>,
    <div className="mx-4 inline-flex items-center gap-4">
      <span>SHOP THE LATEST FROM THE NFL</span>
      <Image src={nflLogo} width={40} alt="Logo" />
    </div>,
    <div className="mx-4 inline-flex items-center gap-4">
      <span>SHOP THE LATEST FROM THE NFL</span>
      <Image src={nflLogo} width={40} alt="Logo" />
    </div>,
  ],
};
