import Image from "next/image";
import Link from "next/link";
import React from "react";
import Pill from "../public/pill.png";
import Smily from "../public/smily.png";
import photo from "../public/photo.jpg";
import FeaturedBlog from "./FeaturedBlog";
import UnfeaturedBlog from "./UnfeaturedBlog";

const Home = ({ posts }) => {

  return (
    <div className="h-[82vh] w-full">
      <div className="absolute -left-10 top-40">
        <Image src={Pill} />
      </div>
      <div className="absolute right-0 top-20 z-0">
        <Image src={Smily} />
      </div>

      <div className="flex flex-col gap-3 justiy-center items-center w-full text-center mt-3 mb-10 z-10">
        <span className="text-base font-semibold opacity-80">My blog</span>
        <h1 className="font-medium text-7xl mb-2 tracking-tight">
          Stories and ideas
        </h1>
        <p className="font-normal text-xl text-gray-500">
          The latest blogs to drive technical strategy.
        </p>
      </div>

      <div className="l-20 flex lg:flex-row flex-col gap-12 justify-center w-full z-50 items-center">
        <FeaturedBlog
          posts={posts.filter((post) => post.node.starred === true)}
        />

        <div className="flex flex-col gap-2 items-center ">
          {posts.map(
            (post, index) =>
              index < 3 && <UnfeaturedBlog key={index} post={post.node} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
