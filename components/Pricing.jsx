'use client'
import { PricingData } from '@/data/data'
import Link from 'next/link'
import { useState } from 'react'

const Pricing = ({ spacing = 'pt-150', sectionTtile = true }) => {
  const [isAnnual, setIsAnnual] = useState(false)
  return (
    <section className={`relative mb-150 overflow-hidden bg-white dark:bg-dark-300 max-md:mb-25 ${spacing} mb-150`}>
      <div className="container ">
        <div className="mx-auto mb-12 max-w-[475px] text-center">
          {sectionTtile && (
            <div>
              <p className="section-tagline ">Our Pricing</p>
              <h2>Choose the right plan for your business</h2>
            </div>
          )}

          <div className="pricing mt-8">
            <label className="relative z-[110] inline-flex cursor-pointer items-center">
              <span className="mr-2.5 text-base font-semibold text-paragraph dark:text-white">Monthly</span>
              <input type="checkbox" id="priceCheck" className="peer sr-only" onChange={() => setIsAnnual(!isAnnual)} />
              <div className=" relative h-[34px] w-15 rounded-[20px] bg-paragraph before:absolute  before:left-1/2 before:top-1/2 before:h-[calc(100%-10px)] before:w-[calc(100%-10px)] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-[20px]  before:border before:border-dashed before:border-white/40 before:content-[''] after:absolute after:start-[5px] after:top-1/2 after:h-6 after:w-6 after:-translate-y-1/2 after:rounded-full after:bg-primary after:transition-all after:content-[''] peer-checked:after:start-[7px] peer-checked:after:translate-x-full "></div>
              <span className="ms-2.5 text-base font-semibold text-paragraph dark:text-white">Yearly</span>
            </label>
          </div>
        </div>

        <div className="relative md:z-10">
          <div className="absolute left-1/2 top-150 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden  max-md:flex-col">
            <div className="rounded-full bg-primary-200/20  blur-[145px] max-1xl:h-[335px]  max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full  bg-primary-200/25 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full  bg-primary-200/20 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
          </div>
          <div className="absolute left-1/2 top-25 -translate-x-1/2 -translate-y-1/2 bg-[url('/images/price-gradient.png')] bg-contain bg-center bg-no-repeat p-[350px] opacity-70 md:hidden"></div>
          <div className=" relative flex items-center gap-8 max-lg:flex-col max-md:z-10">
            {PricingData.map((price, index) => (
              <div key={index}>
                {price.featured ? (
                  <div className="rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200 ">
                    <div className="rounded border border-dashed border-gray-100 p-8 dark:border-borderColor-dark lg:px-8 lg:pb-15 lg:pt-3">
                      <div className="mb-2.5 flex justify-end">
                        <span className=" -mr-4 rounded-full bg-primary px-3 py-1.5 font-medium text-paragraph">
                          Save {price.save}
                        </span>
                      </div>
                      <h3 className="mb-2">{price.title}</h3>
                      <p className="mb-6">{price.desc}</p>
                      {isAnnual ? (
                        <div className="price-month mb-16">
                          <h2>
                            $<span>{price.priceMonthly}</span>
                          </h2>
                          <p>Per Month</p>
                        </div>
                      ) : (
                        <div className="price-year mb-16">
                          <h2>
                            $<span>{price.priceYearly}</span>
                          </h2>
                          <p>Per Year</p>
                        </div>
                      )}

                      <ul className=" relative after:absolute after:-top-12 after:h-0.5 after:w-full after:bg-[url('/images/banking/border.svg')] after:bg-full after:bg-center after:bg-no-repeat dark:after:bg-[url('/images/banking/border-dark.svg')]">
                        {price.priceList.map((items, index) => (
                          <li className="mb-6 flex items-center gap-3.5" key={index}>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <rect width="20" height="20" rx="10" fill="" className="fill-primary" />
                              <path
                                d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                                fill=""
                                className="fill-paragraph"
                              />
                            </svg>
                            <span>{items.name}</span>
                          </li>
                        ))}
                      </ul>

                      <Link href="/contact" className="btn  w-full py-3 text-center ">
                        Get Started Now
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200 ">
                    <div className="rounded border border-dashed border-gray-100 p-8 dark:border-borderColor-dark  ">
                      <h3 className="mb-2">{price.title}</h3>
                      <p className="mb-6">{price.desc}</p>
                      {isAnnual ? (
                        <div className="price-month mb-16">
                          <h2>
                            $<span>{price.priceMonthly}</span>
                          </h2>
                          <p>Per Month</p>
                        </div>
                      ) : (
                        <div className="price-year mb-16">
                          <h2>
                            $<span>{price.priceYearly}</span>
                          </h2>
                          <p>Per Year</p>
                        </div>
                      )}

                      <ul className=" after:bg-[url(/images/banking/border.svg')] relative after:absolute after:-top-12 after:h-0.5 after:w-full after:bg-full after:bg-center after:bg-no-repeat dark:after:bg-[url('/images/banking/border-dark.svg')]">
                        {price.priceList.map((items, index) => (
                          <li className="mb-6 flex items-center gap-3.5" key={index}>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <rect width="20" height="20" rx="10" fill="" className="fill-primary" />
                              <path
                                d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                                fill=""
                                className="fill-paragraph"
                              />
                            </svg>
                            <span>{items.name}</span>
                          </li>
                        ))}
                      </ul>

                      <Link href="/contact" className="btn-outline w-full py-3 text-center dark:bg-transparent">
                        Start Free Trial
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
