import React, { useContext, useRef } from "react";
import {useNavigate} from 'react-router-dom';
import { BlogContext } from "../store/BlogContext";

const CreateBlog = () => {
  const {addBlog} = useContext(BlogContext);
  const titleRef = useRef("");
  const contentRef = useRef(""); 
  const authorRef = useRef("");
  const categoryRef = useRef("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const title = titleRef.current.value;
    const content = contentRef.current.value;
    const author = authorRef.current.value;
    const category = categoryRef.current.value;
    if (!title || !content || !author || !category) {
      alert("Please fill in the required fields.");
      return;
    }
    fetch('http://localhost:3000/api/blog', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        title, content, author, category
    })
    })
    .then(res => res.json())
    .then((data) => {
        addBlog(data.blog);
    })

    // Reset the form
    titleRef.current.value = "";
    contentRef.current.value = "";
    authorRef.current.value = "";
    categoryRef.current.value = ' Marketing';
    navigate('/');

  };

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };





// onChange={(e) => setTitle(e.target.value)}
// value={title}

  return (
    <div className="create-blog max-w-4xl  mx-auto my-6 p-6 bg-green-50 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Create a New Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col">
          <label htmlFor="title" className="mb-2 text-sm font-medium text-gray-600">Title:</label>
          <input
            type="text"
            ref={titleRef}
            placeholder="Enter blog title"
            required
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="content" className="mb-2 text-sm font-medium text-gray-600">Content:</label>
          <textarea
            ref={contentRef}
            placeholder="Write your blog content here"
            rows="6"
            required
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="author" className="mb-2 text-sm font-medium text-gray-600">Author:</label>
          <input
            type="text"
            ref={authorRef}
            placeholder="Enter blog author"
            required
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="category" className="mb-2 text-sm font-medium text-gray-600">Category:</label>
          <input
            type="text"
            ref={categoryRef}
            placeholder="Choose :- Marketing, Business, Sales, Tech, Trading "
            required
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-lime-400 text-white font-semibold rounded-lg shadow-md hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
