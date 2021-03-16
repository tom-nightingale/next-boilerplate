import Prismic from '@prismicio/client'

export const apiEndpoint = 'https://next-prismic-boilerplate.cdn.prismic.io/api/v2'
export const accessToken = `${process.env.NEXT_PRISMIC_API_TOKEN}`

// Client method to query documents from the Prismic repo
export const Client = (req = null) => (
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken))
)

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {}
  const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {}
  return {
    ...reqOption,
    ...accessTokenOption,
  }
}