import Head from 'next/head'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import Container from '../components/container'
import FancyLink from '../components/fancyLink'
import { motion } from 'framer-motion'
import { Client } from '../prismic-config'
import { RichText } from 'prismic-reactjs'
// import { request } from "../lib/prismic"
// import { metaTagsFragment } from "../lib/fragments"
// import { Image, renderMetaTags } from "react-datocms";

export default function Home({ doc }) {

  return (

    
    <Layout>

        <Head>
            <title>{RichText.asText(doc.data.h1)}</title>
        </Head>

        <Header />

        <Container>

          {JSON.stringify(doc)}

          <motion.div 
            key="something"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{duration: .25}}
          >

            <h1>{RichText.asText(doc.data.h1)}</h1>

            <RichText
              render={doc.data.content}
            />

            <h2>Featured Posts:</h2>       

          </motion.div>

        </Container>

        <Footer />

    </Layout>

  )
}

export async function getStaticProps({params}) {
  const client = Client();
  const doc = await client.getSingle('home') || {}

  return {
    props: {
      doc,
    },
  }
}
