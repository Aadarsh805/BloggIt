import { PlusOneTwoTone } from "@mui/icons-material";
import moment from "moment";
import Image from "next/image";
import React from "react";
import featured from "../public/featured.png";

const Blog = ({ post }) => {
  console.log(post, "casdfs");

  return (
    <div className="h-auto w-full pr-6">
      <div className="w-full flex items-center justify-center">
        <Image
          src={post?.image?.url}
          width={900}
          height={420}
          className="align-center object-cover border-1 border-black"
        />
      </div>
      <h1 className="text-center text-5xl font-semibold text-gray-900 opacity-80 mt-12">
        {post.title}
      </h1>
      <p className="text-center text-xl mt-8">{post.description}</p>

      <div className="flex gap-8 items-center mt-8 w-full justify-center">
        <div className="object-cover border-2 flex items-center justify-center border-black rounded-full w-14 h-14">
          <Image
            src={post.admin?.photo?.url}
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
        </div>
        <span className="w-1 h-1 rounded-full bg-black"></span>
        <div className="flex flex-col">
          <p className="text-lg font-medium">{post.admin?.name}</p>
          <p className="text-md text-gray-500">{post.admin.bio}</p>
        </div>
        <span className="w-1 h-1 rounded-full bg-black"></span>
        <p className="text-md text-gray-500">
          {moment(post.createdAt).format("MMM DD, YYYY")}
        </p>
        {post.starred && (
          <div className="flex items-center">
            <span className="w-1 h-1 rounded-full bg-black mr-8"></span>
            <Image src={featured} width={40} height={40} />
          </div>
        )}
      </div>

      <div className="w-full bg-white rounded-lg p-8 mt-12">
        <div className="flex flex-col gap-6">
          {post.content.raw.children
            .filter((child) => child.type === "heading-one")
            .map((children) =>
              children.children.map((child) => (
                <li className="text-lg font-medium">{child.text}</li>
              ))
            )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
