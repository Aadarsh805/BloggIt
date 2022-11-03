import Image from "next/image";
import Link from "next/link";
import React from "react";
import photo from "../public/photo.jpg";

const UnfeaturedBlog = () => {
  return (
    <div className="flex items-center gap-8 py-2">
      <Link href="/">
        <Image
          src={photo}
          className="w-4 h-4 object-cover rounded-md"
          width={250}
          height={160}
        />
      </Link>
      <div className="flex flex-col gap-2 w-60">
        <div className="flex items-center gap-3">
          <span className="text-xs text-white bg-black p-1 px-2 w-fit rounded-full">
            React
          </span>
          <span className="text-sm text-black">8 min ago</span>
        </div>

        <h2 className="font-medium text-2xl leading-8">
          The 3 best pratices as a frontend developer
        </h2>

        <div className="flex items-center gap-2">
          <div className="object-cover border-2 flex items-center justify-center border-black rounded-full w-12 h-12">
            <Image
              src={photo}
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-base font-medium">Aadarsh Thakur</p>
            <p className="text-sm text-gray-500">22 oct 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnfeaturedBlog;
