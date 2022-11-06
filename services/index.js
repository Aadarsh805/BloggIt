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

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      blog(where: { slug: $slug }) {
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
        content {
          raw
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });
  return result.blog;
};

// export const getSimilarPosts = async (topics, slug) => {
//   const query = gql`
//     query GetPostDetails($slug: String!, $topics: [String!]) {
//       blogs(
//         where: { slug_not: $slug, AND: { topics: { slug_in: $topics } } }
//         last: 3
//       ) {
//         title
//         image {
//           url
//         }
//         createdAt
//         slug
//       }
//     }
//   `;
//   const result = await request(graphqlAPI, query, { topics, slug });

//   return result.blogs;
// };
