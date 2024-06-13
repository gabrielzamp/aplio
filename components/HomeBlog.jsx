import getMarkDownData from '@/utils/getMarkDownData'
import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

const HomeBlog = () => {
  const blogs = getMarkDownData('data/blogs')

  return (
    <section className="relative bg-white  pb-150 dark:bg-dark-300 max-md:pb-20">
      <div className="container relative">
        <div className="mx-auto mb-16 max-w-[550px] text-center">
          <p className="section-tagline">Financial blog tips and tricks</p>
          <h2>Our recent news & insights</h2>
        </div>
        <div className="relative z-10">
          <div className="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-lg:flex-col">
            <div className="h-[350px] w-[350px] rounded-full bg-primary-200/20 blur-[80px] lg:h-[442px] lg:w-[442px] lg:blur-[145px] "></div>
            <div className="h-[350px] w-[350px] rounded-full bg-primary-200/25 blur-[80px] lg:-ml-[170px] lg:h-[442px] lg:w-[442px] lg:blur-[145px]"></div>
            <div className="h-[350px] w-[350px] rounded-full bg-primary-200/20 blur-[80px] lg:-ml-[170px] lg:h-[442px] lg:w-[442px] lg:blur-[145px]"></div>
          </div>
          <div className=" grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1">
            {blogs?.slice(0, 3).map((blogItems, index) => (
              <article className="rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200 " key={index}>
                <div className="h-full rounded border border-dashed border-gray-100 p-6 dark:border-borderColor-dark">
                  <Image
                    src={blogItems.data.thumbnail}
                    alt="service logo"
                    className="mb-6 w-full rounded-md"
                    width={339}
                    height={198}
                  />
                  <div>
                    <Link href={`/tags/${blogItems.data.tags}`} className="badge">
                      {blogItems.data.tags}
                    </Link>
                    <Link href={`/blog/${blogItems.slug}`} className="block">
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
                    <ReactMarkdown>{blogItems.content.slice(0, 70)}</ReactMarkdown>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeBlog
