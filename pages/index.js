import React from "react";
import Home from "../components/Home";
import MoreBlogs from "../components/MoreBlogs";
import Navbar from "../components/Navbar";
import { getPosts } from "../services";

const index = ({ posts }) => {
  return (
    <div>
      <Home posts={posts} />
      <MoreBlogs posts={posts} />
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
