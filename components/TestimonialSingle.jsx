'use client'
import { TestimonialData } from '@/data/data'
import Image from 'next/image'
import { RatingStars } from './Rating'
import { fadeUpAnimation } from '@/data/animation'
import { motion } from 'framer-motion'
const TestimonialSingle = () => {
  return (
    <section className=" relative pb-25">
      <div className="absolute -top-[300px] left-1/2 -z-10 h-[550px] w-full -translate-x-1/2  bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
      <div className="container relative">
        <div className="relative z-10">
          <div className="absolute left-1/2 top-0 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
            <div className="rounded-full bg-primary-200/20  blur-[145px] max-1xl:h-[335px]  max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full  bg-primary-200/25 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full  bg-primary-200/20 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
          </div>
          <div className=" grid grid-cols-3 gap-11 max-lg:grid-cols-2 max-md:grid-cols-1 ">
            {TestimonialData.map((testimonial) => (
              <motion.div
                className="rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200"
                key={testimonial.id}
                initial="initial"
                animate="animate"
                variants={fadeUpAnimation}>
                <div className="rounded border border-dashed border-gray-100 p-7 dark:border-borderColor-dark">
                  <Image
                    src={testimonial.logoLight}
                    alt="service logo"
                    className="mb-6 inline-block dark:hidden"
                    width={120}
                    height={35}
                  />
                  <Image
                    src={testimonial.logoDark}
                    alt="service logo"
                    className="mb-6 hidden dark:inline-block"
                    width={110}
                    height={35}
                  />
                  <blockquote className="mb-5 italic leading-[1.75] text-paragraph dark:text-white">
                    &ldquo;{testimonial.testimonial}&rdquo;
                  </blockquote>
                  <div className="mb-7">
                    <RatingStars
                      rating={testimonial.rating}
                      ratingColor={'text-paragraph dark:text-white'}
                      ratingEmptyColor={'text-[#A7A7B4] dark:text-[#646463]'}
                    />
                  </div>

                  <div className="flex items-center border-t border-dashed border-gray-100 pt-7 dark:border-borderColor-dark">
                    <Image
                      src={testimonial.author.image}
                      alt="avatar"
                      className="mr-4 rounded-full"
                      width={56}
                      height={56}
                    />
                    <div className="block">
                      <h3 className="text-base font-semibold">{testimonial.author.name}</h3>
                      <p className="font-jakarta_sans text-sm font-medium text-paragraph-light dark:text-[#A1A49D]">
                        {testimonial.author.designation}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSingle
