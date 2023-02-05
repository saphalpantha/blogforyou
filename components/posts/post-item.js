import classes from './post-item.module.css'
import Image from 'next/image'
import Link from 'next/link'
const PostItem = (props) => {
    const {title, image, excerpt, date, slug} = props.posts

    const formatDate = new Date(date).toLocaleDateString('en-Us', {
        day:'numeric',
        month:'long',
        year:'numeric'

    })

    const imagepATH = `/images/posts/${slug}/${image}`
    const linkPath  = `/posts/${slug}/`
    return(
        <li className={classes.post}>
            <Link href={linkPath}>
                <div className={classes.image}>
                    <Image src={imagepATH} alt={title} width={470} height={300}  />
                </div>
                <div className={classes.content}>
                    <h3>{title}</h3>
                    <time>{formatDate}</time>
                    <p>{excerpt}</p>
                </div>
            </Link>
        </li>
    )
}

export default PostItem