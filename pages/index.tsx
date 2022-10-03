import Layout from '@/components/layout'
import Header from '@/components/_shared/Header/Header'
import Footer from '@/components/_shared/Footer/Footer'
import Container from '@/components/_shared/Container/Container'
import FancyLink from '@/components/_shared/FancyLink/FancyLink'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import client from "@/gql/apolloClient";

import {getHomeQuery} from "@/gql/queries"
import type {GetHomeQuery, Home} from '@/gql/gen/codegen';

export default function Home({home}) {
  const pageData : Home = home.data.allHome[0];
  
  console.log(pageData);
  return (
    <Layout>
      <NextSeo title="Home" />

      <Header />
      
      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
          className="mb-12 md:mb-16 xl:mb-24"
        >
          <Container>
            <m.article variants={fade}>
              <h1 className="mb-4 text-2xl font-bold md:text-3xl xl:text-4xl">Next x Tailwind x Motion.</h1>
              <div className="max-w-3xl mb-4 content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>

                <p>Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              
              <FancyLink destination="/about" a11yText="Navigate to the about page" label="About Page" />
            </m.article>
          </Container>
        </m.main>
      </LazyMotion>

      <Footer />
    </Layout>
  )
}

export async function getStaticProps() {
  // const home = await sanity.fetch(GetHomeQuery);
  const home = await client.query<GetHomeQuery>({
    query: getHomeQuery,
  });

  return {
    props: {
      home
    }
  }
}