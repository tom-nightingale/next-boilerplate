import Head from 'next/head'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import Container from '../components/container'
import FancyLink from '../components/fancyLink'

export default function Home() {
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

      <div className="bg-gray-100">

        <Header />

        <Container>

          <FancyLink destination="/something" a11yText="Aria Label" extraClasses="bg-red-500" label="a little link goes here" />

        </Container>

        <Footer />

      </div>

    </Layout>
  )
}
