import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';



const postDir = path.join(process.cwd(), 'posts');


const getFileContent = (fileName) => {
    const filePath = path.join(postDir, fileName)
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const {data, content} = matter(fileContent)
    const postSlug = fileName.replace(/\.md$/,'')
    
    const postData = {
        postSlug:postSlug,
        ...data,
        content
    }
    return postData
}
export const getAllPosts = () => {
    const postFiles = fs.readdirSync(postDir);
    const postData = postFiles.map(postFile => {
        return getFileContent(postFile);
    })
    const sortedPost = postData.sort((postA,postB) => postA.date > postB.date ? -1:1);
    return sortedPost

}


export const getFeaturedPost = () => {
    
    const AllPosts = getAllPosts();
    console.log('from lib allpost', AllPosts)
    const featuredPost = AllPosts.filter(post => post.isFeatured);
    return featuredPost;
}