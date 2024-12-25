import {  createContext, useReducer } from "react";
import BlogReducer from './BlogReducer'

export const BlogContext = createContext();

export const BlogProvider = ({children}) => {

    const [blogs, dispatch] = useReducer(BlogReducer,  []) 

    const setBlog = (blogs) => {
        dispatch({
            type: 'SET_BLOG', 
            payload: {
                blogs
            }
        })
    }

    const addBlog = (blog) => {
        dispatch({
            type: 'ADD_BLOG', 
            payload: {
                blog
            }
        })
    }

    const deleteBlog = (id) => {
        dispatch({
            type: 'DELETE_BLOG', 
            payload: {
                id
            }
        })
    }

    const updateBlog = (blog) => {
        dispatch({
            type: 'UPDATE_BLOG', 
            payload: {
                blog
            }
        })
    }

    return <BlogContext.Provider value={{blogs, setBlog, addBlog, deleteBlog, updateBlog}}> 
    {children}
    </BlogContext.Provider>
}