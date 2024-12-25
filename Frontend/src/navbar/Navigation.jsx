import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className='flex col-auto font-semibold text-white bg-blue-600 gap-3 text-sm px-4 py-3 '>
    <Link to='/'>Home</Link>
    <Link to='/create-blog'>Create-Blog</Link>
    </nav>
  )
}

export default Navigation;