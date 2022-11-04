import React from "react";
import Image from "next/image";
import Link from "next/link";
import photo from "../public/photo.jpg";
import moment from "moment";
import VerifiedIcon from "@mui/icons-material/Verified";

const FeaturedBlog = ({ posts }) => {
  console.log(posts, "fff");
  return (
    <div className="p-3 pb-5 relative border-[2px] border-slate-800 rounded-lg flex flex-col gap-5 z-20 bg-[#fff]">
      <Image
        src={posts[0].node.image.url}
        width={380}
        height={350}
        className="object-cover rounded-lg"
      />
      {/* <div className="absolute top-5 right-5 text-white">
        <VerifiedIcon fontSize="large" className="text-[#4946FF] text-3xl" />
      </div> */}
      <div className="flex items-center gap-4 px-3">
        <div className="flex items-center gap-2 flex-wrap">
          {posts[0].node?.topics.map((topic) => (
            <span
              key={topic.name}
              className="text-xs text-white bg-black p-1 px-2 w-fit rounded-full"
            >
              {topic.name}
            </span>
          ))}
        </div>
        <span className="text-sm text-black">
          {moment(posts[0].node.createdAt).fromNow()}
        </span>
      </div>

      <h2 className="font-semibold text-slate-800 text-4xl w-[456px] leading-8 px-3">
        {posts[0].node.title}
      </h2>

      <div className="flex items-center gap-3 px-3">
        <div className="object-cover border-2 flex items-center justify-center border-black rounded-full w-14 h-14">
          <Image
            src={posts[0].node.admin?.photo?.url}
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-lg font-medium">{posts[0].node.admin?.name}</p>
          <p className="text-md text-gray-500">
            {moment(posts[0].node.createdAt).format("MMM DD, YYYY")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlog;
