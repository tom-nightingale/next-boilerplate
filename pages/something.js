import Head from 'next/head'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import Container from '../components/container'
import FancyLink from '../components/fancyLink'
import { motion, AnimatePresence } from 'framer-motion'

export default function Something() {

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

        <motion.div
          key="something"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{duration: .25}}
        >
          <p>Something page</p>
        </motion.div>

        <Container>

          <FancyLink destination="/" a11yText="Aria Label" extraClasses="bg-red-500" label="Go to the homepage" />

        </Container>
        
        <Footer />

    </Layout>

  )
}
