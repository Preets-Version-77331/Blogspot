import React from 'react'
import BlogLoader from './BlogLoader'
import BlogList from './BlogList'

const Home = () => {
  return (
    <>
      <div className='w-full overflow-hidden rounded-lg ring-1 ring-slate-900/10'>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">From the blog</h2>
              <p className="mt-2 text-lg/8 text-gray-600">Learn how to grow your business with our expert advice.</p>
            </div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
              <BlogLoader>
                <BlogList />
              </BlogLoader>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
