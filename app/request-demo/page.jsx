'use client'
import NewsLetter from '@/components/NewsLetter'
import { fadeUpAnimation } from '@/data/animation'
import { motion } from 'framer-motion'
import useWhileInView from '@/hooks/useWhileInView'
import { useRef } from 'react'
const RequestDemo = () => {
  const ref = useRef(null)
  const controlAnimation = useWhileInView(ref)
  return (
    <>
      <section className="relative overflow-hidden py-[200px] max-md:pt-25">
        <div className="absolute left-1/2 top-0 -z-10 h-[550px] w-full -translate-x-1/2  bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
        <motion.div
          className="container relative"
          ref={ref}
          initial="initial"
          animate={controlAnimation}
          variants={fadeUpAnimation}>
          <div className="mx-auto mb-12 max-w-[475px] text-center">
            <p className="section-tagline">Contact</p>

            <h2>Request A Demo</h2>
          </div>
          <div className="relative z-10 mx-auto max-w-[850px]">
            <div className="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden">
              <div className="h-[442px] w-[442px] rounded-full bg-primary-200/20 blur-[145px]"></div>
              <div className="-ml-[170px] h-[442px] w-[442px] rounded-full bg-primary-200/25 blur-[145px]"></div>
              <div className="-ml-[170px] h-[442px] w-[442px] rounded-full bg-primary-200/20 blur-[145px]"></div>
            </div>
            <div className=" rounded-medium bg-white p-2.5 shadow-nav  dark:bg-dark-200">
              <div className=" rounded border border-dashed border-gray-100 bg-white p-12 dark:border-borderColor-dark dark:bg-dark-200 max-md:p-5  ">
                <form>
                  <div className="grid grid-cols-12 max-md:gap-y-10 md:gap-8 md:gap-x-12">
                    <div className="max-md:col-span-full md:col-span-6">
                      <label
                        htmlFor="username"
                        className="mb-2 block font-jakarta_sans text-sm font-medium text-paragraph dark:text-white">
                        Your name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="username"
                        placeholder="Name"
                        className="block w-full rounded-[48px] border border-borderColor bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:placeholder:text-paragraph-light dark:focus:border-primary"
                      />
                    </div>
                    <div className="max-md:col-span-full md:col-span-6">
                      <label
                        htmlFor="companyname"
                        className="mb-2 block font-jakarta_sans text-sm font-medium text-paragraph dark:text-white">
                        Comapny name
                      </label>
                      <input
                        type="text"
                        name="company-name"
                        id="companyname"
                        placeholder="Company Name"
                        className="block w-full rounded-[48px] border border-borderColor bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:placeholder:text-paragraph-light dark:focus:border-primary"
                      />
                    </div>
                    <div className="max-md:col-span-full md:col-span-6">
                      <label
                        htmlFor="contactno"
                        className="mb-2 block font-jakarta_sans text-sm font-medium text-paragraph dark:text-white">
                        Contact No.
                      </label>
                      <input
                        type="text"
                        name="contact-number"
                        id="contactno"
                        placeholder="Contact Number"
                        className="block w-full rounded-[48px] border border-borderColor bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:placeholder:text-paragraph-light dark:focus:border-primary"
                      />
                    </div>
                    <div className="max-md:col-span-full md:col-span-6">
                      <label
                        htmlFor="email"
                        className="mb-2 block font-jakarta_sans text-sm font-medium text-paragraph dark:text-white">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="first-name"
                        id="email"
                        placeholder="Email"
                        className="block w-full rounded-[48px] border border-borderColor bg-white px-5 py-2.5 text-sm text-paragraph-light   outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:focus:border-primary"
                      />
                    </div>
                    <div className="col-span-full">
                      <label
                        htmlFor="message"
                        className="mb-2 block font-jakarta_sans text-sm font-medium text-paragraph dark:text-white">
                        Message
                      </label>
                      <textarea
                        name="first-name"
                        id="message"
                        rows="10"
                        className="block w-full resize-none rounded border border-borderColor bg-white px-5 py-2.5   text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:focus:border-primary"></textarea>
                    </div>
                    <div className="col-span-full mx-auto text-center">
                      <button className="btn">Request Now</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      <NewsLetter />
    </>
  )
}

export default RequestDemo
