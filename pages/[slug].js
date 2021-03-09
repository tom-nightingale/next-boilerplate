import Head from 'next/head'
import { request } from "../lib/datocms"
import { metaTagsFragment } from "../lib/fragments";
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import Container from '../components/container'
import FancyLink from '../components/fancyLink'
import { motion } from 'framer-motion'
import { Image, renderMetaTags } from "react-datocms";

export default function Page({ data: { site, page } }) {
  return (

   <Layout>

       <Head>
            {renderMetaTags(page.seo.concat(site.faviconMetaTags))} 
        </Head>

        <Header />

        <Container>

            <motion.div 
            key={page.slug}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{duration: .25}}
            >

                <h1>{page.h1}</h1>

                <div dangerouslySetInnerHTML={{ __html: page.content }} />

                <FancyLink destination="/" a11yText="Go Home" extraClasses="bg-red-500" label="Go Home" />

            </motion.div>

        </Container>

        <Footer />

   </Layout>

  )
}


const SINGLE_PAGE = `
  query Page($slug: String) {
    site: _site {
      faviconMetaTags {
        ...metaTagsFragment
      }
    }
    page(filter: {slug: {eq: $slug}}) {
        h1
        pageTitle
        slug
        content
        seo: _seoMetaTags {
            attributes
            content
            tag
        }
    }
  }
  ${metaTagsFragment}
`

export async function getStaticProps({ params }) {
  const data = await request({
    query: SINGLE_PAGE,
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
      query: `{ allPages { slug } }` 
  });

  return {
    paths: data.allPages.map((page) => `/${page.slug}`),
    fallback: true,
  };
}