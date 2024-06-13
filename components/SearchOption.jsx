'use client'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const SearchOption = ({ onClose }) => {
  return (
    <div className="bg-metal-900 fixed left-0 right-0 top-0 z-[99] flex animate-bounce items-center justify-center">
      <div className="relative h-auto w-full max-w-xl p-4">
        <div className="relative rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200 ">
          <div className=" rounded border border-dashed border-gray-100 p-10 dark:border-borderColor-dark ">
            <div className="bg flex items-center justify-between border-b border-dashed border-b-borderColor pb-5 dark:border-borderColor-dark">
              <h3 className="text-paragraph dark:text-white">Search</h3>
              <button onClick={onClose} className="text-paragraph dark:text-white" id="ok-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 256 256">
                  <rect width="256" height="256" fill="none"></rect>
                  <circle
                    cx="128"
                    cy="128"
                    r="96"
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    strokeWidth="16"></circle>
                  <line
                    x1="160"
                    y1="96"
                    x2="96"
                    y2="160"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"></line>
                  <line
                    x1="160"
                    y1="160"
                    x2="96"
                    y2="96"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"></line>
                </svg>
              </button>
            </div>
            <form className="mt-5">
              <div>
                <div className="flex">
                  <div className="relative w-full">
                    <input
                      className="border- placeholder:text-metal-400 block w-full rounded-medium border border-borderColor bg-transparent  px-5 py-2.5 text-paragraph outline-none transition-all duration-300 placeholder:text-paragraph focus:border-primary focus:outline-none focus:ring-0 dark:placeholder:text-white"
                      id="#id-10"
                      placeholder="Search Component"
                      type="text"
                      name="Search Value"
                    />
                  </div>
                </div>
              </div>
            </form>
            <p className="mb-12 hidden pt-5 font-medium">
              <span>No recent searches</span>
            </p>
            <div className="pt-5">
              <h3 className="mb-1">Search Result</h3>
              <ul className="[&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-dashed  [&>*:not(:last-child)]:border-gray-100  dark:[&>*:not(:last-child)]:border-borderColor-dark">
                <li className="group ">
                  <Link className="  flex items-center justify-between py-5 font-medium" href="/services">
                    Investment Banks
                    <FontAwesomeIcon icon={faAngleRight} />
                  </Link>
                </li>
                <li className="group">
                  <Link href="/services" className="  flex items-center justify-between py-5 font-medium">
                    Financial Analysis <FontAwesomeIcon icon={faAngleRight} />
                  </Link>
                </li>
                <li className="group">
                  <Link href="/services" className="flex items-center justify-between py-5 font-medium">
                    Sales & Trading <FontAwesomeIcon icon={faAngleRight} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchOption
