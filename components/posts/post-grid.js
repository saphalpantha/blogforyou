import classes from './post-grid.module.css'
import PostItem from './post-item'
const PostGrid = (props) => {
    const {posts} = props;
    console.log(posts)
    return(
        <ul className={classes.grid}>
            {posts.map(post => <PostItem key={post.slug} posts={post}/>)}
        </ul>
    )
}

export default PostGrid