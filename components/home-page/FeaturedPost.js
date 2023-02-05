import React from 'react'
import classes from './featured-post.module.css'
import PostGrid from '../posts/post-grid'
const FeaturedPost = (props) => {
  return (
    <section className={classes.latest}>
        <h2>Featured posts</h2>
        <PostGrid posts={props.posts}/>
    </section>
  )
}

export default FeaturedPost