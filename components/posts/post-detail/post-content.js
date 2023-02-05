import classes from './post-content.module.css'
import PostHeader from './post-header';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const Dummy = {title:'Getting-started-with-nextjs' , 
    slug:'getting-started-with-nextjs1', 
    image:'getting-started-nextjs.png', 
    content:'# This is a first post',
    date:'2022-02-10',}
const PostContent = (props) => {
    const imagePath = `/images/posts/${Dummy.slug}/${Dummy.image}`
    return (
        <article className={classes.content}>
            <PostHeader title={Dummy.title} image={imagePath}/>
            <ReactMarkdown>{Dummy.content}</ReactMarkdown>
        </article>
    )

}

export default PostContent;