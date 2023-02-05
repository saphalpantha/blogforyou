import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Hero from '../components/home-page/Hero'
import FeaturedPost from '../components/home-page/FeaturedPost'
import { getFeaturedPost } from '../lib/post-util'

// const inter = Inter({ subsets: ['latin'] })

// export const DUMMY_POSTS = [
// {title:'Getting-started-with-nextjs' , 
// slug:'getting-started-with-nextjs1', 
// image:'getting-started-nextjs.png', 
// excerpt:'Next js is the react framework for production it makes building full stack react appp and sites a breeze a ships with built in SSR', 
// date:'2022-02-10',},

// {title:'Getting-started-with-nextjs' , 
// slug:'getting-started-with-nextjs2', 
// image:'getting-started-nextjs.png', 
// excerpt:'Next js is the react framework for production it makes building full stack react appp and sites a breeze a ships with built in SSR', 
// date:'2022-12-10',},

// {title:'Getting-started-with-nextjs' , 
// slug:'getting-started-with-nextjs3', 
// image:'getting-started-nextjs.png', 
// excerpt:'Next js is the react framework for production it makes building full stack react appp and sites a breeze a ships with built in SSR', 
// date:'2022-12-10',},

// {title:'Getting-started-with-nextjs' , 
// slug:'getting-started-with-nextjs4', 
// image:'getting-started-nextjs.png', 
// excerpt:'Next js is the react framework for production it makes building full stack react appp and sites a breeze a ships with built in SSR', 
// date:'2022-12-10',},

// ]
export default function HomePage(props) {
  return (
    <>
    <Hero/>
    <FeaturedPost posts={props.posts}/>
    {/* {console.log('from pages6',props)} */}
    </>
  )
}

export const getStaticProps = () => {
  const featuredPost = getFeaturedPost();
  return{
    props:{
      posts:featuredPost,
    },
    revalidate:600,
  }
}
 

// hero
// featured Posts
