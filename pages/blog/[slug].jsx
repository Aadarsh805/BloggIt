import React from "react";
import Author from "../../components/Author";
import Blog from "../../components/Blog";
import Related from "../../components/Related";
import { getPostDetails, getPosts } from "../../services";

const BlogDetail = ({ post, posts }) => {
  return (
    <div className="h-auto min-h-screen bg-[#FBF3E7]">
      <div className="pl-56 mr-[24rem] pr-20 pt-20 flex flex-col border-r-[2px] border-gray-300 min-h-[80vh]">
        <Blog post={post} />
        <Author post={post} />
      </div>
      <div className="h-screen fixed right-16 top-32">
        <Related posts={posts} post={post} />
      </div>
    </div>
  );
};

export default BlogDetail;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  const posts = await getPosts();

  return {
    props: { post: data, posts },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  };
}
