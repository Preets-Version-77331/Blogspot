 // External Module
 const ENV = process.env.NODE_ENV || 'production'
 require('dotenv').config({
   path: `.env.${ENV}`
 });
 const express = require('express');
 const mongoose = require('mongoose');
 const bodyParser = require('body-parser');
 const cors = require('cors');
 
 // Core Module 
 
 // Local Module  
  
 const errorController = require('./controllers/errorController');
const blogRouter = require('./routers/blogRouter');
 
 const MONGOOSE_DB_URL = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@airbnb.waxpx.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority&appName=Airbnb`;
   const app = express();
   app.use(bodyParser.urlencoded({ extended: true }));
   app.use(cors());
   app.use(express.json()); // Handle request came from Frontend in form of json. 
 
 // Routers------>   
 app.use('/api',blogRouter);
 app.use(errorController.get404);
 mongoose.connect(MONGOOSE_DB_URL).then(() => {
     const PORT = process.env.PORT || 3000;
     app.listen(PORT, () => {
         console.log(`Server running at: http://localhost:${PORT}`);
     });
 });
