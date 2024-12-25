import React, { useContext, useEffect, useState } from 'react'
import { BlogContext } from '../store/BlogContext';


const BlogLoader = ({children}) => {
    const [loading, setLoading] = useState(true); // Set state when loading Blogs to users best experience 
    const [error, setError] = useState(false); // set state when occurred  an error  
    const {setBlog} = useContext(BlogContext);


    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:3000/api/blog')
        .then((res) => res.json())
        .then((resJson) => {
            console.log('Fetch Blogs From API  : -', resJson.blogs);
            setBlog(resJson.blogs)
        })
        .catch((err) => {
            setError(true);
        })
        .finally(() => {
            setLoading(false);
        })

    }, [])



  return (
   <>
   {loading && <h1>Loading Blogs ..........</h1>}
   {error && <h1>Error loading Blogs ..........</h1>}
   {!loading && !error && children }
   </>
  )
}

export default BlogLoader;