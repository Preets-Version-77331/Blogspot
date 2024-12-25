const Blog = require("../models/Blog");

exports.getBlogs =  async (req, res, next) => {
    try {
        const blogs = await Blog.find();
        console.log('Blogs called')
        res.status(200).json({status: 'success', blogs})
    } catch (error) {
        res.status(500).json({message: error});
    }
}

exports.getBlog =  async (req, res, next) => {
    try {
        const {id} = req.params;
        console.log('id: ', id);
        const blog = await Blog.findById(id);
        res.status(200).json({status: 'success', blog})
    } catch (error) {
        res.status(500).json({message: error});
    }
}


exports.postBlogs =  async (req, res, next) => {
    const {title, content, author, category} = req.body;
    console.log('Body : ', title, content,author, category);

    try { 
        const blog = new Blog({title, content, author, category});

        await blog.save();
        res.status(201).json({status: 'success', blog})
    } catch (error) {
        res.status(500).json({message: error});
    }
}

exports.deleteBlogs=  async (req, res, next) => {
    const {id} = req.params;
    try { 
        await Blog.findByIdAndDelete(id);
        res.status(201).json({status: 'success', message: 'Blog Deleted Successfully'})
    } catch (error) {
        res.status(500).json({message: error});
    }
}

exports.likeBlogs =  async (req, res, next) => {
    const {id} = req.params;
    try { 
        const blog = await Blog.findById(id);
        if (!blog) {
            return res.status(404).json({status: "error", message: 'Blog not found'});
        }
        blog.like += 1; 
        await blog.save(); 
        res.status(200).json({status: 'success', blog})
    } catch (error) {
        res.status(500).json({message: error});
    }
}
exports.unlikeBlogs =  async (req, res, next) => {
    const {id} = req.params;
    try { 
        const blog = await Blog.findById(id);
        if (!blog) {
            return res.status(404).json({status: "error", message: 'Blog not found'});
        }
        blog.like -= 1; 
        await blog.save(); 
        res.status(200).json({status: 'success', blog})
    } catch (error) {
        res.status(500).json({message: error});
    }
}

exports.commentBlogs =  async (req, res, next) => {
    const {id} = req.params;
    const { userName, content} = req.body;
    if (!id || !userName || !content) {
        return res.status(400).json({status: "error", message: "Reqired Filed are missied "});
    }
    try { 
        const blog = await Blog.findById(id);
        if (!blog) {
            return res.status(404).json({status: "error", message: 'Blog not found'});
        }
        blog.comments.push({userName, content});
        await blog.save(); 
        res.status(200).json({status: 'success', blog})
    } catch (error) {
        res.status(500).json({message: error});
    }
}