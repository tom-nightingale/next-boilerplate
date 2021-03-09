import Head from 'next/head'
import { request } from "../../lib/datocms"
import { responsiveImageFragment } from "../../lib/fragments"
import Layout from '../../components/layout'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Container from '../../components/container'
import FancyLink from '../../components/fancyLink'
import { motion } from 'framer-motion'
import { Image, renderMetaTags } from "react-datocms";

export default function Post({ data: { site, post } }) {
  return (

   <Layout>

       <Head>
            {renderMetaTags(post.seo.concat(site.faviconMetaTags))} 
        </Head>

        <Header />

        <Container>

            <motion.div 
            key="homepage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{duration: .25}}
            >

                {post.heroImage && 
                  <Image className="w-40 h-40" data={post.heroImage.responsiveImage} />
                }

                <h1>{post.h1}</h1>

                <div dangerouslySetInnerHTML={{ __html: post.content }} />

                <FancyLink destination="/" a11yText="Go Home" extraClasses="bg-red-500" label="Go Home" />

            </motion.div>

        </Container>

        <Footer />

   </Layout>

  )
}


const SINGLE_POST = `
  query Post($slug: String) {
    site: _site {
      faviconMetaTags {
        attributes
        content
        tag
      }
    }
    post(filter: {slug: {eq: $slug}}) {
        h1
        postTitle
        slug
        content
        heroImage {
          responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 900, h: 900 }) {
            ...responsiveImageFragment
          }
        }
        seo: _seoMetaTags {
            attributes
            content
            tag
        }
    }
  }
  ${responsiveImageFragment}
`

export async function getStaticProps({ params }) {
  const data = await request({
    query: SINGLE_POST,
    variables: {
      slug: params.slug,
    },
  })

  return {
      props: {
        data
      }
  }
}

export async function getStaticPaths() {
  const data = await request({ 
      query: `{ allPosts { slug } }` 
  });

  return {
    paths: data.allPosts.map((post) => `/posts/${post.slug}`),
    fallback: true,
  };
}