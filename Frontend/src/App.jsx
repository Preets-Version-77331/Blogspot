//                  <<< Blog Spot >>>
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './navbar/Navigation';
import CreateBlog from './components/CreateBlog';
import Home from './components/Home';
import BlogDetails from './components/BlogDetails'
import { BlogProvider } from './store/BlogContext';

function App() {

  return (
    <>
      <BrowserRouter>
        <BlogProvider>
          <Navigation />
          <div className='min-h-screen bg-gray-100' >
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/create-blog' element={<CreateBlog />} />
              <Route path='/blog/:_id' element={<BlogDetails />} />
            </Routes>
          </div>
        </BlogProvider>
      </BrowserRouter>
    </>
  )
}

export default App;
