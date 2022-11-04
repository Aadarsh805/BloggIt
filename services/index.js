import { request, gql } from "graphql-request";
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query Admins {
      blogsConnection(orderBy: createdAt_DESC) {
        edges {
          node {
            createdAt
            slug
            title
            description
            admin {
              bio
              name
              id
              photo {
                url
              }
            }
            image {
              url
            }
            topics {
              name
              slug
            }
            starred
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.blogsConnection.edges;
};

export const getSimilarPosts = async () => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts (
        where: {slug_not: $slug, AND {categories_some: {slug_in: $categories}}
        last: 3
      )
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.posts;
};
