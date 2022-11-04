import React from "react";
import Author from "../../components/Author";
import Blog from "../../components/Blog";
import Related from "../../components/Related";
import { getPostDetails, getPosts } from "../../services";

const BlogDetail = ({ post }) => {
  return (
    <div className="h-auto min-h-screen bg-[#FBF3E7]">
      <div className="pl-56 mr-80 pt-20 flex flex-col gap-28 border-r-[2px] border-gray-300 min-h-[80vh]">
        <Blog post={post} />
        <Author post={post} />
      </div>
      <div className="h-screen fixed right-52 top-40">
        <Related />
      </div>
    </div>
  );
};

export default BlogDetail;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);

  return {
    props: { post: data },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  };
}
