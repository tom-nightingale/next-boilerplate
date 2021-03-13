import Head from 'next/head'
import { request } from "../../lib/datocms"
import { metaTagsFragment } from "../../lib/fragments";
import Layout from '../../components/layout'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Container from '../../components/container'
import FancyLink from '../../components/fancyLink'
import { motion } from 'framer-motion'
import { Image, renderMetaTags } from "react-datocms"
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Blog({ data: { site, blog, allPosts, allPages,} }) {
  
  let currentPage = 0; // Set a default
  const router = useRouter();
  
  // Current page
  if(router.query.page) {
    currentPage = router.query.page;
  }
  // Define a number of posts per page to display
  const postsPerPage = 2;

  //Get the total number of posts
  const totalPosts = allPosts.length;

  // Figure out the total number of pages
  const totalPages = Math.ceil(totalPosts/postsPerPage);
  
  // Dynamically set the skip variable depending on what page we're on
  let skip;
  if(currentPage !== 1) {
    skip = currentPage*postsPerPage-postsPerPage;
  }
  
  // Generate the number of page links required.
  const pageLinks = [];
  let i = 1;
  while(i <= totalPages) {
    pageLinks.push(i);
    i++;
  }

  return (

   <Layout>

       <Head>
            {renderMetaTags(blog.seo.concat(site.faviconMetaTags))} 
        </Head>

        <Header navItems={allPages} />

        <Container>

            <motion.div 
            key={blog.slug}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{duration: .25}}
            >

                <h1>{blog.h1}</h1>

                <div dangerouslySetInnerHTML={{ __html: blog.content }} />

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

            <ul>
              <li>Per Page: {postsPerPage}</li>
              <li>Total pages: {totalPages}</li>
            </ul>

            <div className="flex flex-wrap">
              
              {/* {totalPages > 1 && } */}
                <p>Pages: </p>
                
                {pageLinks.map((page, i) => {
                  return (
                    <li key={i}>
                      <Link 
                        href={{
                          pathname: '/blog/',
                          query: { page: page }
                        }}
                      >
                        <a>Page {page}</a>
                      </Link>
                    </li>
                  )
                })}

            </div>

        </Container>

        <Footer />

   </Layout>

  )
}


const BLOG_PAGE = `
  query Blog($first: IntType, $skip: IntType) {
    site: _site {
      faviconMetaTags {
        ...metaTagsFragment
      }
    }
    posts {
      pageTitle
      slug
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
    console.log(params);

  const data = await request({
    query: BLOG_PAGE,
    variables: {
      slug: params.slug,
    }
  })
  return {
    props: { data }
  }
}

export async function getStaticPaths() {
  
  const data = await request({ 
      query: `{ 
        allPosts(first: $first, skip: $skip, orderBy: _firstPublishedAt_DESC) {
            postTitle
            h1
            content
            slug
          }
        }`
  });

  return {
    paths: data.allPosts.map((post) => `blog/`),
    fallback: false,
  };
}