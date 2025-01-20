import formatDate from '../utils/dateUtils';
import React, { useContext, useState } from 'react';
import { Heart, MessageSquarePlus } from 'lucide-react';
import { BlogContext } from '../store/BlogContext';
import { Link, useNavigate } from 'react-router-dom';

const BlogTemp = ({ blog, liked }) => {
    const [isliked, setIsLiked] = useState(liked);
    console.log('Liked State : ', liked);
    const { updateBlog } = useContext(BlogContext);
    const navigate = useNavigate();

    const likeHandler = () => {

        if (isliked) {
            fetch(`http://localhost:3000/api/blog/${blog._id}/unlike`, {
                method: 'PATCH',
                body: JSON.stringify({ liked: !setIsLiked }),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(res => res.json())
                .then((data) => {
                    updateBlog(data.blog)
                })
            setIsLiked(!isliked)
        } else {
            fetch(`http://localhost:3000/api/blog/${blog._id}/like`, {
                method: 'PATCH',
                body: JSON.stringify({ liked: !setIsLiked }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(res => res.json())
                .then((data) => {
                    updateBlog(data.blog)
                })
            setIsLiked(!isliked)
        }
    }

    return (
        <>
            <div className=' px-3 py-2 rounded-lg ring-1 ring-slate-900/10'>
                <article key={blog._id} className="flex max-w-xl flex-col items-start justify-between">
                    <div className="flex items-center gap-x-4 text-xs">
                        <time className="text-gray-500">
                            {formatDate(blog.createdAt)}
                        </time>
                        <a
                            href={blog.category}
                            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                        >
                            {blog.category}
                        </a>
                    </div>
                    <div className="group relative">
                        <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                            <Link to={`/blog/${blog._id}`} state={{ blog }}>
                                <span className="absolute inset-0" />
                                {blog.title}
                            </Link>

                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{blog.content}</p>
                    </div>
                    <div className="relative mt-8 flex items-center gap-x-4">
                        <div className="flex justify-between text-sm/6">
                            <p className="flex order font-semibold text-gray-900">
                                <a href={blog.author}>
                                    <span className="absolute inset-0" />
                                    {blog.author}
                                </a>
                            </p>
                        </div>
                    </div>
                </article>
                <div className="flex items-center justify-end gap-6">
                    {/* Like Section */}
                    <div
                        onClick={likeHandler}
                        className={`flex items-center gap-2 cursor-pointer transition-transform ${isliked ? 'text-red-500' : 'text-gray-500'
                            }`}
                    >
                        <Heart className="w-6 h-6" fill={isliked ? 'currentColor' : 'none'} />
                        <span className="text-sm font-medium">{blog.like}</span>
                    </div>

                    {/* Comment Icon */}
                    <div className="flex items-center text-gray-500 cursor-pointer">
                        <MessageSquarePlus className="w-6 h-6" />
                    </div>
                </div>

            </div>
        </>
    );
};


export default BlogTemp;