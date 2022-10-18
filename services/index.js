import { request, gql } from "graphql-request";
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query Admins {
      blogsConnection {
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
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.blogsConnection.edges;
};
