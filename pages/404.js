import Head from 'next/head'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import Container from '../components/container'
import FancyLink from '../components/fancyLink'
import { motion } from 'framer-motion'

export default function ErrorPage() {

  return (

    <Layout>

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

      <Container>

        <h1>Error 404.</h1>

        <p>Well fuck something went wrong.</p>

        <FancyLink destination="/" a11yText="Return to homepage" label="Return to homepage" extraClasses="" />

      </Container>
      
      <Footer />

    </Layout>
  )
}
