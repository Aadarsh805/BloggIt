import React from "react";
import { getPosts } from "../services";

const index = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => {
        console.log("dafu", post);
        return (
          <>
            <h1 className="text-4xl">h</h1>
            <h1 className="text-4xl">{post?.node?.admin?.name}</h1>
            <img src={post?.node?.image?.url} />
          </>
        );
      })}
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
