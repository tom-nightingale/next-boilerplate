import gql from "graphql-tag";
export const getHomeQuery = gql`
  query getHome {
    allHome {
      canvasImage {
        asset {
          url
          altText
        }
      }
      canvasSubtitle
      canvasTitle
      facts {
        countTo
        description
        image {
          asset {
            url
            altText
          }
        }
        title
        prefix
        suffix
      }
    }
  }
`

