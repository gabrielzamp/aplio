'use client'

import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Pagination = ({ paginateFunction }) => {
  const { totalPage, currentPage, setCurrentPage, goToNextPage, goToPreviousPage } = paginateFunction

  return (
    <div className="container">
      <ul className="flex items-center justify-center gap-2">
        <li className="group">
          <button
            onClick={() => {
              goToPreviousPage()
            }}
            className={`group flex h-10 w-10 items-center justify-center rounded-full border border-borderColor  text-sm  font-medium duration-300 dark:border-borderColor-dark ${
              currentPage === 1 ? 'disabled:opacity-7 cursor-not-allowed' : 'cursor-pointer hover:bg-primary'
            }`}
            disabled={currentPage === 1}>
            <FontAwesomeIcon
              icon={faArrowLeft}
              className={`${currentPage === 1 ? '' : 'dark:group-hover:text-paragraph'}  duration-300`}
            />
          </button>
        </li>
        {Array.from({ length: totalPage }, (_, index) => (
          <li className={`group ${index + 1 === currentPage && 'page-active'}`} key={index}>
            <button
              href=""
              className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium duration-300 hover:bg-primary  hover:text-paragraph group-[.page-active]:bg-primary dark:group-[.page-active]:text-paragraph"
              onClick={() => setCurrentPage(index + 1)}>
              {index + 1}
            </button>
          </li>
        ))}

        <li className="group">
          <button
            onClick={() => {
              goToNextPage()
            }}
            className={`group flex h-10 w-10 items-center justify-center rounded-full border border-borderColor  text-sm  font-medium duration-300 dark:border-borderColor-dark  ${
              currentPage === totalPage ? 'disabled:opacity-7 cursor-not-allowed' : 'cursor-pointer hover:bg-primary'
            }`}
            disabled={currentPage === totalPage}>
            <FontAwesomeIcon
              icon={faArrowRight}
              className={`${currentPage === totalPage ? '' : 'dark:group-hover:text-paragraph'}  duration-300`}
            />
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Pagination
