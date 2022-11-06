import { PostAddOutlined } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Related = ({ posts, post }) => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="object-cover border-2 flex items-center justify-center border-black rounded-full w-14 h-14">
          <Image
            src={post.admin?.photo?.url}
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-lg font-medium">{post.admin?.name}</p>
          <p className="text-md text-gray-500">{post.admin.bio}</p>
        </div>
      </div>

      <p className="text-xl text-gray-600 tracking-wider mt-8 w-72">
        More blogs by {post.admin.name}
      </p>

      <div className="flex flex-col gap-4 mt-6">
        {posts.map((post) => (
          <Link href={`${post.node.slug}`} key={post.node.id}>
            <a className="text-lg cursor-pointer max-w-[16rem] ">
              {post.node.title}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Related;
