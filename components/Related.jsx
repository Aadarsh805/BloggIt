import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getSimilarPosts } from "../services";

const Related = ({ slug, topics }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    getSimilarPosts(topics, slug).then((res) => setRelatedPosts(res));
  }, [slug]);

  console.log("similar", relatedPosts);

  return <div>Related</div>;
};

export default Related;
