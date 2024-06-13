import NewsLetter from '@/components/NewsLetter'
import getMarkDownContent from '@/utils/getMarkDownContent'
import getMarkDownData from '@/utils/getMarkDownData'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

export async function generateStaticParams() {
  const careerData = getMarkDownData('data/career')
  return careerData.map((item) => ({
    slug: item.slug,
  }))
}

const CareerDetails = (props) => {
  const dataFolder = 'data/career/'
  const slug = props.params.slug
  const careerDetails = getMarkDownContent(dataFolder, slug)
  const postParams = careerDetails.data

  return (
    <>
      <section className="hero  relative overflow-hidden pb-[60px] pt-[240px] max-lg:pt-150">
        <div className="container">
          <div className="mx-auto max-w-[948px] text-center">
            <p className="mb-4 font-medium uppercase">CAREER SINGLE PAGE</p>
            <h1 className="mb-10 max-lg:mb-10">{postParams.title}</h1>
          </div>
        </div>
      </section>

      <section className="relative mb-150">
        <div className="absolute -top-[1000px] left-0 right-0 h-full w-full bg-[url('/images/core-gradient.png')] bg-[length:600px_1600px] bg-center bg-no-repeat opacity-70 md:hidden"></div>
        <div className="container relative">
          <div className="absolute left-1/2 top-20 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
            <div className="rounded-full bg-primary-200/20  blur-[145px] max-1xl:h-[335px]  max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full  bg-primary-200/25 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full  bg-primary-200/20 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
          </div>
          <div className="grid grid-cols-12 max-lg:gap-y-25 lg:gap-16">
            <div className="singlePage col-span-full max-lg:order-2 lg:col-span-8">
              <ReactMarkdown>{careerDetails.content}</ReactMarkdown>
            </div>
            <div className="col-span-full self-start max-lg:order-1 lg:col-span-4 ">
              <div className=" rounded-medium bg-white p-2.5 shadow-nav  dark:bg-dark-200">
                <div className=" rounded border border-dashed border-gray-100 bg-white px-8 py-10 dark:border-borderColor-dark dark:bg-dark-200 max-md:p-5">
                  <h3 className="mb-1">Job Overview</h3>
                  <div className=" [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-dashed [&>*:not(:last-child)]:border-borderColor dark:[&>*:not(:last-child)]:border-borderColor-dark ">
                    {postParams.publishDate && (
                      <div className="py-5">
                        <h4 className="mb-2 text-lg font-medium">Date Posted</h4>
                        <p>{postParams.publishDate}</p>
                      </div>
                    )}

                    {postParams.expirationDate && (
                      <div className="py-5">
                        <h4 className="mb-2 text-lg font-medium">Expiration Posted</h4>
                        <p>{postParams.expirationDate}</p>
                      </div>
                    )}
                    {postParams.address && (
                      <div className="py-5">
                        <h4 className="mb-2 text-lg font-medium">Location</h4>
                        <p>{postParams.address}</p>
                      </div>
                    )}

                    {postParams.salary && (
                      <div className="py-5">
                        <h4 className="mb-2 text-lg font-medium">Offered Salary</h4>
                        <p>{postParams.salary} / week</p>
                      </div>
                    )}
                    {postParams.experience && (
                      <div className="py-5">
                        <h4 className="mb-2 text-lg font-medium">Experience</h4>
                        <p>{postParams.experience} Years Experience</p>
                      </div>
                    )}
                    {postParams.qualification && (
                      <div className="py-5">
                        <h4 className="mb-2 text-lg font-medium">Qualification</h4>
                        <p>{postParams.qualification}</p>
                      </div>
                    )}
                    <div className="py-5">
                      <h4 className="mb-2 text-lg font-medium">Qualification</h4>
                      <p>Bachelor Degree, Art of Design</p>
                    </div>
                  </div>
                  <div className="mb-12 mt-4">
                    <h3 className="mb-8">Job Skills</h3>

                    <div className="flex w-full flex-wrap gap-3 ">
                      {postParams.skills &&
                        postParams.skills.map((items, index) => (
                          <div key={index}>
                            <span className="inline-block w-full items-center justify-between rounded-[60px] border  border-borderColor px-5  py-2 font-medium text-paragraph-light dark:border-borderColor-dark">
                              {items}
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>
                  <div>
                    <Link href="/" className="btn w-full text-center">
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <NewsLetter />
    </>
  )
}

export default CareerDetails
