import { useParams,  useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const BlogDetails = () => {
  const { _id } = useParams();
  const location = useLocation();
  const blogFromState = location.state?.blog;

  const [blog, setBlog] = useState(blogFromState || null);
  const [loading, setLoading] = useState(!blogFromState); // Skip loading if data is already available.
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!blogFromState) {
      fetch(`http://localhost:3000/api/blog/${_id}`)
        .then(response => {
          if (!response.ok) throw new Error('Failed to fetch blog details');
          return response.json();
        })
        .then(data => {
          if (data.status === 'success') setBlog(data.blog);
          else throw new Error('Blog not found');
          setLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [_id, blogFromState]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='max-w-2xl mx-auto '>
        <div className='mb-4'>
            <div className='flex items-center gap-2'>
                <p>{blog.author.name}</p>
            </div>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
        </div>
    </div>
  );
};

export default BlogDetails; 
