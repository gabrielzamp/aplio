'use client'
import { useState } from 'react'
import Pagination from '../Pagination'
import BlogItems from './BlogItems'
const BlogList = ({ blogItemData }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6
  const totalPage = Math.ceil(blogItemData.length / itemsPerPage)

  const paginateData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return blogItemData.slice(startIndex, endIndex)
  }

  const currentPageData = paginateData()
  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1)
  }
  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1)
  }

  const paginateFunction = {
    totalPage,
    currentPage,
    setCurrentPage,
    goToNextPage,
    goToPreviousPage,
  }

  if (!currentPageData.length) {
    return (
      <div className="max-lg:col-span-7 max-md:order-2 max-md:col-span-full lg:col-span-8 [&>*:not(:last-child)]:mb-8">
        <h2 className="text-center">No Blog Found</h2>
      </div>
    )
  }
  return (
    <div className="max-lg:col-span-7 max-md:order-2 max-md:col-span-full lg:col-span-8 [&>*:not(:last-child)]:mb-8">
      {currentPageData.map((blog) => (
        <BlogItems key={blog.slug} slug={blog.slug} content={blog.content} blogData={blog.data} column={true} />
      ))}
      <Pagination paginateFunction={paginateFunction} />
    </div>
  )
}

export default BlogList
