import Head from 'next/head'
import { request } from "../../../lib/datocms"
import { metaTagsFragment } from "../../../lib/fragments";
import Layout from '../../../components/layout'
import Header from '../../../components/header'
import Footer from '../../../components/footer'
import Container from '../../../components/container'
import FancyLink from '../../../components/fancyLink'
import { motion } from 'framer-motion'
import { Image, renderMetaTags } from "react-datocms"

export default function Posts({ data: { site, allPosts, allPages} }) {

  return (

   <Layout>

       <Head>
            {/* {renderMetaTags(postsSingle.seo.concat(site.faviconMetaTags))}  */}
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

                <h1>Paged</h1>

                <div>
                  Some content
                </div>

                <ul className="flex flex-wrap">

                  {allPosts.map((post, i) => {
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

        </Container>

        <Footer />

   </Layout>

  )
}


const POSTS_PAGE = `
  query Blog($first: IntType, $skip: IntType) {
    site: _site {
      faviconMetaTags {
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
    allPosts(first: $first, skip: $skip, orderBy: _firstPublishedAt_DESC) {
      postTitle
      h1
      content
      slug
    }
  }
  ${metaTagsFragment}
`



export async function getStaticProps({ params }) {

  const postsPerPage = 2;
  const pageId = parseInt(params.id);
  const skip = pageId*postsPerPage-postsPerPage;
  
  console.log("page: "+pageId);
  console.log("skip: "+skip);

  
  const data = await request({
    query: POSTS_PAGE,
    variables: {
        id: params.id,
        skip: skip,
        first: postsPerPage,        
    }
  })
  return {
    props: { data }
  }
}

export async function getStaticPaths() {

  const data = await request({ 
      query: `{ allPosts { slug id } }` 
  });
  const postsPerPage = 2;
  const totalPosts = data.allPosts.length;
  const totalPages = Math.ceil(totalPosts/postsPerPage);

  return {
      paths: Array.from({ length: totalPages }).map((_, i) => {
      return {
        params: {
          id: (i + 1).toString(),
        },
      };
    }),
    fallback: false,
    // paths: data.allPosts.map((post) => `/posts/page/${post.id}`),
    // fallback: false,
  };
}