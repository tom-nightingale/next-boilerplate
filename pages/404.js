import Head from 'next/head'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import Container from '../components/container'
import FancyLink from '../components/fancyLink'
import { motion } from 'framer-motion'
import { Client } from '../prismic-config'
// import { request } from "../lib/datocms";
// import { Image, renderMetaTags } from "react-datocms";
// import { metaTagsFragment } from "../lib/fragments"

export default function ErrorPage({ doc }) {

  return (

    <Layout>

      <Head>
         <title>Something</title>
      </Head>

      <Header />

      <Container>

        <h1>Error 404.</h1>

        <p>Well fuck something went wrong.</p>

        <FancyLink destination="/" a11yText="Return to homepage" label="Return to homepage" extraClasses="" />

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