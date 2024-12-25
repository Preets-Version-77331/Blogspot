const express = require('express');

const blogController = require('../controllers/blogController');

const blogRouter = express.Router();


blogRouter.get('/blog', blogController.getBlogs); 
blogRouter.get('/blog/:id', blogController.getBlog); 
blogRouter.post('/blog', blogController.postBlogs);
blogRouter.delete('/blog/:id', blogController.deleteBlogs);
blogRouter.patch('/blog/:id/like', blogController.likeBlogs);
blogRouter.patch('/blog/:id/unlike', blogController.unlikeBlogs);
blogRouter.put('/blog/:id/comment', blogController.commentBlogs);

module.exports = blogRouter;

// Server error causes : make sure  do not give any space  in routes like " /blog ", "/ blog"   
// it cuses of page note found error ok 