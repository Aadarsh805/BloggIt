import React from "react";
import Image from "next/image";
import Link from "next/link";
import photo from "../public/photo.jpg";

const FeaturedBlog = () => {
  return (
    <div className="p-3 border-2 border-slate-900 rounded-lg bg-white flex flex-col gap-5 z-20">
      <Image
        src={photo}
        width={350}
        height={320}
        className="object-cover rounded-lg"
      />
      <div className="flex items-center gap-3">
        <span className="text-xs text-white bg-black p-1 px-2 w-fit rounded-full">
          React
        </span>
        <span className="text-sm text-black">8 min ago</span>
      </div>

      <h2 className="font-semibold text-slate-800 text-4xl w-[456px] leading-8">
        The 3 best pratices as a frontend developer
      </h2>

      <div className="flex items-center gap-3">
        <div className="object-cover border-2 flex items-center justify-center border-black rounded-full w-12 h-12">
          <Image src={photo} width={40} height={40} className="rounded-full" />
        </div>
        <div className="flex flex-col">
          <p className="text-base font-medium">Aadarsh Thakur</p>
          <p className="text-sm text-gray-500">22 oct 2022</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlog;
