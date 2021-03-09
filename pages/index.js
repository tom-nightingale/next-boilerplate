import Head from 'next/head'
import { request } from "../lib/datocms";
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import Container from '../components/container'
import FancyLink from '../components/fancyLink'
import { motion } from 'framer-motion'
import { Image, renderMetaTags } from "react-datocms";

export default function Home({ data: {home, site, posts, pages} }) {

  return (

    <Layout>

        <Head>
            {renderMetaTags(home.seo.concat(site.faviconMetaTags))} 
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

            <h1 role="heading" aria-level="1">{home.h1}</h1>

            <div className="content" dangerouslySetInnerHTML={{ __html: home.content }} />

            <h2>Posts:</h2>

            <ul className="flex flex-wrap">
              {posts.map((post, i) => {
                return (
                  <li key={i} className="p-4 m-4 rounded-sm shadow">
                    <span className="block font-bold">{post.h1}</span>
                    {post.content}
                    <FancyLink destination={`/posts/${encodeURIComponent(post.slug)}`} a11yText={`Go to ${post.h1}`} extraClasses="bg-red-500" label={`Go to ${post.h1}`} />
                  </li>
                )
              })}
            </ul>     

            <h2>Pages:</h2>

            <ul className="flex flex-wrap">
              {pages.map((page, i) => {
                return (
                  <li key={i} className="p-4 m-4 rounded-sm shadow">
                    <span className="block font-bold">{page.h1}</span>
                    {page.content}
                    <FancyLink destination={`/${encodeURIComponent(page.slug)}`} a11yText={`Go to ${page.h1}`} extraClasses="bg-red-500" label={`Go to ${page.h1}`} />
                  </li>
                )
              })}
            </ul>            

          </motion.div>

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
        content
        tag
      }
    }
    home {
      h1
      content
      seo: _seoMetaTags {
        attributes
        content
        tag
      }
    }
    posts: allPosts {
      postTitle
      h1
      content
      slug
    }
    pages: allPages {
      pageTitle
      h1
      content
      slug
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
