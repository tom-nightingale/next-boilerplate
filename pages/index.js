import Head from 'next/head'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import Container from '../components/container'
import FancyLink from '../components/fancyLink'
import { motion } from 'framer-motion'
import { request } from "../lib/datocms";

export default function Home({ data: {home, site} }) {

  return (

    <Layout>


       {JSON.stringify(home, null, 2)}

       {JSON.stringify(site, null, 2)}

        <Head>
            <link rel="icon" href="/favicon.ico" />
            <title>Nextjs boilerplate</title>
            <meta
            name="description"
            content="nextJS boilerplate"
            />
            <meta name="og:title" content="Website Title" />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>

        <Header />

        <motion.div 
          key="homepage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{duration: .25}}
        >
          <p>Homepage</p>
        </motion.div>

        <Container>

          <FancyLink destination="/" a11yText="Aria Label" extraClasses="bg-red-500" label="Go to something page" />

        </Container>

        <Footer />

    </Layout>

  )
}

const HOMEPAGE_QUERY = `
  query HomePage {
    site: _site {
      faviconMetaTags {
        attributes
      }
    }
    home {
      h1
      content
    }
  }
`

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY
  })
  return {
    props: { data }
  }
}
