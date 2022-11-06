import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MoreBlog from "./MoreBlog";

const MoreBlogs = ({ posts }) => {
  return (
    <div className="px-56 pt-12">
      <p className="text-2xl font-medium text-slate-900">All blog posts</p>

      <div className="flex flex-col gap-4 mt-12">
        {posts.map((post) => (
          <div className="flex items-start gap-8 py-3 w-full">
            <Link href={`blog/${post.node.slug}`}>
              <Image
                src={post.node?.image?.url}
                className="object-cover rounded-md cursor-pointer"
                width={250}
                height={160}
              />
            </Link>

            <div className="flex flex-col w-fit gap-2">
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  {post.node?.topics.map((topic) => (
                    <span
                      key={topic.name}
                      className="text-xs text-white bg-black p-1 px-2 w-fit rounded-full"
                    >
                      {topic.name}
                    </span>
                  ))}
                </div>
                <span className="text-sm text-black">
                  {moment(post.node.createdAt).fromNow()}
                </span>
              </div>

              <Link href={`blog/${post.node.slug}`} >
                <div className="flex flex-col">
                  <h2 className="font-semibold text-2xl leading-8 cursor-pointer ">
                    {post.node?.title}
                  </h2>
                  <p className="text-base text-gray-600">
                    {post.node?.description}
                  </p>
                </div>
              </Link>

              <div className="flex items-center gap-2">
                <div className="object-cover border-2 flex items-center justify-center border-black rounded-full w-12 h-12">
                  <Image
                    src={post.node?.admin?.photo?.url}
                    width={42}
                    height={42}
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-lg font-medium">
                    {post.node?.admin?.name}
                  </p>
                  <p className="text-md text-gray-500">
                    {moment(post.node.createdAt).format("MMM DD, YYYY")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreBlogs;
