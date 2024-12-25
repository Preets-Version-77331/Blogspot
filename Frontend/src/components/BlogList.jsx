import { useContext } from 'react'
import { BlogContext } from '../store/BlogContext'
import BlogTemp from './BlogTemp'

const BlogList = () => {
    const { blogs } = useContext(BlogContext)
    console.log('Blogs in BlogList :- ', blogs);

    return (
        <>
            {blogs.map((blog) => (
                <BlogTemp key={blog._id} blog={blog} liked={blog.liked}  />
            ))}

        </>
    )
}

export default BlogList;