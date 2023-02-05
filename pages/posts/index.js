import { DUMMY_POSTS } from ".."
import { getAllPosts } from "../../lib/post-util"
import AllPost from "../../components/posts/all-post"



const AllPostPage = (props) => {
    return <AllPost posts={props.posts} />   
}

export const getStaticProps = () => {
    const allpost = getAllPosts();

    return{
        props:{
            posts:allpost
        }
    }
}

export default AllPostPage