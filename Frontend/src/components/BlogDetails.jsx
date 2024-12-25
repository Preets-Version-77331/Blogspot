import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const BlogDetails = () => {
    const { _id } = useParams();
    console.log('Id: ', _id);    
    // Extract blog ID from the URL
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch blog details using the `id`
   
    useEffect(() => {
        fetch(`http://localhost:3000/api/blog?id=${_id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch blog details');
            }
            return response.json();
        })
        .then(data => {
            if (data.status === 'success') {
                setBlog(data.blog);
            } else {
                throw new Error('Blog not found');
            }
            setLoading(false);
        })
        .catch(err => {
            setError(err.message);
            setLoading(false);
        });
}, [_id]);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
        <h1>{blog.title}</h1>
        <p><strong>Author:</strong> {blog.author}</p>
        <p><strong>Created At:</strong> {new Date(blog.createdAt).toLocaleDateString()}</p>
        <div style={{ margin: '20px 0' }}>
            <p>{blog.content}</p>
        </div>
        <div>
            <p><strong>Likes:</strong> {blog.like}</p>
        </div>
        <div>
            <h3>Comments</h3>
            {blog.comments.length > 0 ? (
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {blog.comments.map((comment, index) => (
                        <li key={index} style={{ marginBottom: '15px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
                            <p><strong>{comment.userName}</strong></p>
                            <p>{comment.content}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No comments yet.</p>
            )}
        </div>
    </div>
);
};

export default BlogDetails;
