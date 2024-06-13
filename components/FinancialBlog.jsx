import getMarkDownData from '@/utils/getMarkDownData'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

const FinancialBlog = () => {
  const blogs = getMarkDownData('data/blogs')

  const FinancialBlogItems = blogs.filter((blog) => blog.data.tags === 'Finance')

  return (
    <section className="relative bg-white pt-150 dark:bg-dark-300 max-md:pb-0 max-md:pt-25 lg:pb-[140px]">
      <div className="absolute left-0 right-0 top-25 h-full w-full bg-[url('/images/core-gradient.png')] bg-[length:600px_1000px] bg-center bg-no-repeat opacity-70 md:hidden"></div>
      <div className="container ">
        <div className="mb-12">
          <p className="section-tagline">Financial blog tips and tricks</p>
          <div className="md:flex md:gap-10 ">
            <h2 className="md:shrink-0">Our recent news & insights</h2>
            <p className="ml-auto  max-w-[600px]">
              Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It&rsquo;s not Latin
              though it looks like nothing.
            </p>
          </div>
        </div>

        <div className="relative z-10">
          <div className="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
            <div className="rounded-full bg-primary-200/20  blur-[145px] max-1xl:h-[335px]  max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full  bg-primary-200/25 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full  bg-primary-200/20 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
          </div>
          <div className=" grid grid-cols-3 gap-8 max-md:grid-cols-1">
            {FinancialBlogItems.map((blogItems, index) => (
              <article className="rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200" key={index}>
                <div className="rounded border border-dashed border-gray-100 p-6 dark:border-borderColor-dark ">
                  <Link href={`/tags/${blogItems.data.tags}`} className="badge badge-primary">
                    {blogItems.data.tags}
                  </Link>
                  <Link href={`/blog/${blogItems.slug}`}>
                    <h3 className="mb-3 font-semibold leading-[1.33]">{blogItems.data.title}</h3>
                  </Link>
                  <div className="mb-4 flex items-center gap-x-2 ">
                    <p>{blogItems.data.author}</p>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="5" height="6" viewBox="0 0 5 6" fill="none">
                        <circle cx="2.5" cy="3" r="2.5" fill="" className="fill-[#D8DBD0] dark:fill-[#3B3C39]" />
                      </svg>
                    </span>
                    <p>{blogItems.data.date}</p>
                  </div>

                  <ReactMarkdown className="mb-6">{blogItems.content.slice(0, 40)}</ReactMarkdown>

                  <Link href={`/blog/${blogItems.slug}`} className="btn-outline  btn-sm">
                    Learn More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinancialBlog
