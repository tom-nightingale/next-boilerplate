import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import Head from 'next/head'
import Link from 'next/link'

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

            <h1>Error 404.</h1>

            <p>Well fuck something went wrong.</p>

        <Footer />

      </div>

    </Layout>
  )
}
