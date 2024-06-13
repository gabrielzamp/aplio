import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'

const BlogSidebar = ({ blogSidebarData, setActive, search, setSearch }) => {
  function getUniqueCategories(array) {
    const uniqueCategories = []
    for (let i = 0; i < array.length; i++) {
      const categories = array[i].data.categories

      const isExistCategories = uniqueCategories.find((blog) => blog.data.categories === categories)

      if (!isExistCategories) {
        uniqueCategories.push(array[i])
      }
    }
    return uniqueCategories
  }
  const uniqueCategories = getUniqueCategories(blogSidebarData)

  function getUniqueTags(array) {
    const uniqueTags = []
    for (let i = 0; i < array.length; i++) {
      const tags = array[i].data.tags

      const isExistTags = uniqueTags.find((blog) => blog.data.tags === tags)

      if (!isExistTags) {
        uniqueTags.push(array[i])
      }
    }
    return uniqueTags
  }

  const uniqueTags = getUniqueTags(blogSidebarData)

  return (
    <div className="self-start max-lg:col-span-5 max-md:order-1 max-md:col-span-full lg:col-span-4 ">
      <div className=" rounded-medium bg-white p-2.5 shadow-nav  dark:bg-dark-200">
        <div className="rounded border border-dashed border-gray-100 bg-white px-8 py-12 dark:border-borderColor-dark dark:bg-dark-200 max-md:px-4">
          <div className="mb-12">
            <h3 className="mb-8">Search</h3>
            <label className="relative block">
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.11278 0C14.1369 0 18.2245 4.08758 18.2245 9.11278C18.2245 11.2861 17.4592 13.5472 16.1845 14.8512L20 18.6667L18.6667 20L14.8512 16.1856C13.5667 17.4603 11.2861 18.2245 9.11278 18.2245C4.08758 18.2245 0 14.1369 0 9.11278C0 4.08758 4.08758 0 9.11278 0ZM9.11278 16.3395C13.0974 16.3395 16.3395 13.0974 16.3395 9.11278C16.3395 5.12818 13.0974 1.88608 9.11278 1.88608C5.12709 1.88608 1.88499 5.12818 1.88499 9.11278C1.88499 13.0974 5.12709 16.3395 9.11278 16.3395Z"
                    fill=""
                    className="fill-paragraph dark:fill-white"
                  />
                </svg>
              </span>
              <input
                className="w-full rounded-[60px] border border-borderColor py-5 pl-12 pr-5 font-jakarta_sans transition-all duration-300 placeholder:font-jakarta_sans placeholder:text-paragraph-light focus:border-primary focus:outline-none dark:border-borderColor-dark dark:bg-transparent dark:text-paragraph-light dark:focus:border-primary "
                placeholder="Search..."
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                name="search"
              />
            </label>
          </div>
          <div className="mb-12">
            <h3 className="mb-3">Categories</h3>
            <div className="[&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-dashed [&>*:not(:last-child)]:border-borderColor dark:[&>*:not(:last-child)]:border-borderColor-dark">
              {uniqueCategories.map((category, index) => (
                <Link
                  href={`/categories/${category.data.categories}`}
                  className={`group relative flex items-center justify-between py-5 font-jakarta_sans text-lg font-medium before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform  before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:before:bg-white ${
                    setActive == category.data.categories ? 'blogActive' : ''
                  } `}
                  key={index}>
                  {category.data.categories}
                  <FontAwesomeIcon icon={faAngleRight} className="hidden group-[.blogActive]:block" />
                </Link>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="mb-8">Latest Articles</h3>
            <div className="[&>*:not(:last-child)]:mb-6">
              {blogSidebarData.slice(0, 2).map((blogs, index) => (
                <article className="grid grid-cols-12 gap-4" key={index}>
                  <div className="col-span-4">
                    <Image
                      src={blogs.data.thumbnail}
                      alt="blog iamge"
                      className="h-full w-full rounded-lg object-cover"
                      width={65}
                      height={65}
                    />
                  </div>
                  <div className="col-span-8">
                    <Link href={`/blog/${blogs.slug}`}>
                      <h5 className="mb-2 text-xl">{blogs.data.title.slice(0, 30)} ...</h5>
                    </Link>
                    <p>{blogs.data.date}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-8">Tags</h3>

            <div className="flex w-full flex-wrap gap-3 ">
              {uniqueTags.map((item, index) => (
                <div key={index} className={`${setActive == item.data.tags ? 'tagActive group' : ''}`}>
                  <Link
                    href={`/tags/${item.data.tags}`}
                    className="btn-outline btn-sm group-[.tagActive]:bg-paragraph group-[.tagActive]:text-white dark:group-[.tagActive]:bg-primary dark:group-[.tagActive]:text-paragraph">
                    {item.data.tags}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogSidebar
