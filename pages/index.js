import React from "react";
import Home from "../components/Home";
import MoreBlogs from "../components/MoreBlogs";
import Navbar from "../components/Navbar";
import { getPosts } from "../services";

const index = ({ posts }) => {
  return (
    <div className="h-[90vh] bg-[#FBF3E7]">
      <Navbar />
      <Home posts={posts} />
      <MoreBlogs />
    </div>
  );
};

export default index;

export async function getStaticProps() {
  const posts = await getPosts();

  return {
    props: { posts },
  };
}
