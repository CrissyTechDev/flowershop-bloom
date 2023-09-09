import { ShoppingCart, Flower } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "./hero";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center bg-pink-100 px-4 sm:px-10 py-4 sm:h-[120px]">
        <div className="mb-2 sm:mb-0">
          <Link href={'/'}>
            <Image
              className="rounded-full"
              height={100}
              width={100}
              alt="logo"
              src={'/logo.jpg'}
            />
          </Link>
        </div>

        <h1 className="font-sans text-2xl text-black text-center sm:text-left mb-2 sm:mb-0">
          BLOOM PH RESOURCES
        </h1>

        <div className="flex gap-2">
          <Link className="hover:bg-sky-200 rounded-full px-2 py-2" href={'/'}>
            <ShoppingCart />
          </Link>
          <Link className="hover:bg-sky-200 rounded-full px-2 py-2" href={'/'}>
            <Flower />
          </Link>
          <Link className="hover-bg-sky-200 rounded-full px-2 py-2" href={'/'}>
            <ShoppingCart />
          </Link>
          <Link className="hover:bg-sky-200 rounded-full px-2 py-2" href={'/'}>
            <ShoppingCart />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
