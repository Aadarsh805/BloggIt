import { useContext } from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex px-56 w-full py-10 items-center justify-between">
      <p className="text-2xl font-semibold text-slate-900">BloggIt!</p>

      <div className="flex items-center gap-12">
        <p className="text-lg text-slate-900">About</p>
        <p className="text-lg text-slate-900">Topics</p>
        <p className="text-lg text-slate-900">Contact</p>
      </div>

      <p className="bg-[#4946FF] text-white py-2 font-semibold px-5 rounded-lg">Subscribe</p>
    </div>
  );
};

export default Navbar;
