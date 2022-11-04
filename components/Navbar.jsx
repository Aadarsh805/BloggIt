import { useContext } from "react";
import Link from "next/link";
import logo_ext from "../public/logo_ext.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex px-56 w-full py-10 items-center justify-between">
      <div className="relative">
        <Link href="/">
          <p className="text-3xl font-semibold text-slate-900 cursor-pointer">
            BloggIt!
          </p>
        </Link>
        <div className="absolute w-44 -bottom-32 -right-28">
          <Image src={logo_ext} />
        </div>
      </div>

      <div className="flex items-center gap-12">
        <p className="text-lg text-slate-900">About</p>
        <p className="text-lg text-slate-900">Topics</p>
        <p className="text-lg text-slate-900">Contact</p>
      </div>

      <p className="bg-[#4946FF] text-white py-2 font-semibold px-5 rounded-lg">
        Subscribe
      </p>
    </div>
  );
};

export default Navbar;
