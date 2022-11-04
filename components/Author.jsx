import Image from "next/image";
import React from "react";

const Author = ({ post }) => {
  return (
    <div className="flex gap-8 mt-4 items-center w-[90%] mb-4 border-y-2 border-brown-300 p-10 px-4 ">
      <div className="object-cover flex items-center justify-center rounded-full w-20 h-20">
        <Image
          src={post.admin?.photo?.url}
          width={80}
          height={80}
          className="rounded-full object-cover"
        />
      </div>
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between w-full">
          <div>
            <p className="text-lg tracking-wide font-semibold opacity-50 uppercase text-gray-700">
              Written by
            </p>
            <p className="text-2xl font-semibold">{post.admin?.name}</p>
          </div>
          <button className="text-lg ouline-none border-2 border-slate-400 rounded bg-white px-4 py-1 hover:shadow-md">
            Follow
          </button>
        </div>
        <p className="text-md text-gray-800">{post.admin.bio}</p>
      </div>
    </div>
  );
};

export default Author;
