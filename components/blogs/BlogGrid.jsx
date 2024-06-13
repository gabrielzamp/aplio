'use client'
import React, { useState } from 'react'
import BlogItems from './BlogItems'
import Pagination from '../Pagination'

const BlogGrid = ({ blogItemData }) => {
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
  return (
    <section className="relative py-150 max-md:py-20">
      <div className="absolute left-1/2 top-20 -z-10 h-[550px] w-full -translate-x-1/2  bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
      <div className="container relative mb-16">
        <div className="mx-auto mb-16 max-w-[550px] text-center">
          <p className="section-tagline">Tips and Tricks</p>
          <h2>Our recent news & insights</h2>
        </div>
        <div className="relative z-10">
          <div className="absolute left-1/2 top-60 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
            <div className="rounded-full bg-primary-200/20  blur-[145px] max-1xl:h-[335px]  max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full  bg-primary-200/25 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full  bg-primary-200/20 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
          </div>
          <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1">
            {currentPageData.map((blog) => (
              <BlogItems key={blog.slug} slug={blog.slug} content={blog.content} blogData={blog.data} column={false} />
            ))}
          </div>
        </div>
      </div>
      <Pagination paginateFunction={paginateFunction} />
    </section>
  )
}

export default BlogGrid
