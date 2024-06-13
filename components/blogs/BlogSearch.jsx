'use client'
import { useState } from 'react'
import BlogList from './BlogList'
import BlogSidebar from './BlogSidebar'

const BlogSearch = ({ blogs, sidebarBlogs, setActive }) => {
  const [search, setSearch] = useState('')
  const searchedData = blogs.filter((blog) => blog.data?.title.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className="grid grid-cols-12 max-md:gap-y-25 md:gap-5 lg:gap-8">
      <BlogList blogItemData={searchedData} />
      <BlogSidebar search={search} setSearch={setSearch} blogSidebarData={sidebarBlogs} setActive={setActive} />
    </div>
  )
}

export default BlogSearch
