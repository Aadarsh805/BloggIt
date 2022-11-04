import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import photo from "../public/photo.jpg";

const UnfeaturedBlog = ({ post }) => {
  return (
    <div className="flex items-center gap-8 py-3 w-full">
      <Link href={post.slug}>
        <Image
          src={post?.image?.url}
          className="object-cover rounded-md cursor-pointer"
          width={250}
          height={160}
        />
      </Link>

      <div className="flex flex-col w-fit gap-2">
        <div className="flex">
          <div className="flex items-center gap-2 w-48 flex-wrap">
            {post?.topics.map((topic) => (
              <span
                key={topic.name}
                className="text-xs text-white bg-black p-1 px-2 w-fit rounded-full"
              >
                {topic.name}
              </span>
            ))}
          </div>
          <span className="text-sm text-black">
            {moment(post.createdAt).fromNow()}
          </span>
        </div>

        <Link href={post.slug}>
          <h2 className="font-semibold text-2xl leading-8 cursor-pointer max-w-[22rem]">
            {post?.title}
          </h2>
        </Link>

        <div className="flex items-center gap-2">
          <div className="object-cover border-2 flex items-center justify-center border-black rounded-full w-10 h-10">
            <Image
              src={post?.admin?.photo?.url}
              width={35}
              height={35}
              className="rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-base font-medium">{post?.admin?.name}</p>
            <p className="text-sm text-gray-500">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnfeaturedBlog;
