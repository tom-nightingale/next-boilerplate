import Head from 'next/head'
import { request } from "../../lib/datocms"
import { metaTagsFragment } from "../../lib/fragments";
import Layout from '../../components/layout'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Container from '../../components/container'
import FancyLink from '../../components/fancyLink'
import Pagination from '../../components/pagination'
import { motion } from 'framer-motion'
import { Image, renderMetaTags } from "react-datocms"
import Link from 'next/link'

export default function Posts({ data: { site, blog, pagedPosts, allPosts, allPages} }) {

  // Set up variables to pass to Pagination
  const currentPage = 1;
  const postsPerPage = 2;

  return (

   <Layout>

       <Head>
            {renderMetaTags(blog.seo.concat(site.faviconMetaTags))} 
        </Head>

        <Header navItems={allPages} />

        <Container>

            <motion.div 
            key="sometghing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{duration: .25}}
            >

                <h1>Page 1 - archive</h1>

                <ul className="flex flex-wrap">

                  {pagedPosts.map((post, i) => {
                    return (
                      <li key={post.slug} className="p-4 m-4 rounded-sm shadow">
                        <span className="block font-bold">{post.h1}</span>
                        {post.content}
                        <FancyLink destination={`/posts/${encodeURIComponent(post.slug)}`} a11yText={`Go to ${post.h1}`} extraClasses="bg-red-500" label={`Go to ${post.h1}`} />
                      </li>
                    )
                  })}
                  
                </ul>  

            </motion.div>

            <Pagination
              currentPage={currentPage}
              postsPerPage={postsPerPage}
              allPosts={allPosts}
              archive
              pagedUrlBase="posts"
            />

        </Container>

        <Footer />

   </Layout>

  )
}


const POSTS_PAGE = `
  query Blog {
    site: _site {
      faviconMetaTags {
        ...metaTagsFragment
      }
    }
    blog {
      h1
      content
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
    allPosts: allPosts {
      id
      slug
    }
    pagedPosts: allPosts(first: "2", orderBy: _firstPublishedAt_DESC) {
      postTitle
      h1
      content
      slug
    }
  }
  ${metaTagsFragment}
`

export async function getStaticProps() {
  const data = await request({
    query: POSTS_PAGE
  })
  return {
    props: { data }
  }
}