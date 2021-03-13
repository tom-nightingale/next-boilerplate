import Head from 'next/head'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import Container from '../components/container'
import FancyLink from '../components/fancyLink'
import { request } from "../lib/datocms";
import { motion } from 'framer-motion'
import { Image, renderMetaTags } from "react-datocms";
import { metaTagsFragment } from "../lib/fragments"

export default function ErrorPage({ data: {home, site, allPages} }) {

  return (

    <Layout>

      <Head>
          {renderMetaTags(home.seo.concat(site.faviconMetaTags))} 
      </Head>

      <Header navItems={allPages}/>

      <Container>

        <h1>Error 404.</h1>

        <p>Well fuck something went wrong.</p>

        <FancyLink destination="/" a11yText="Return to homepage" label="Return to homepage" extraClasses="" />

      </Container>
      
      <Footer />

    </Layout>
  )
}

const HOMEPAGE_QUERY = `
  query HomePage {
    site: _site {
      faviconMetaTags {
        ...metaTagsFragment
      }
    }
    home {
      h1
      content
      slug
      seo: _seoMetaTags {
        ...metaTagsFragment
      }
    }
    allPages {
      pageTitle
      h1
      content
      slug
      parent {
        id
      }
      children {
        pageTitle
        slug
      }
    }
  }
  ${metaTagsFragment}
`

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY
  })
  return {
    props: { data }
  }
}