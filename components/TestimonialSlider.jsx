'use client'
import { TestimonialData } from '@/data/data'
import Image from 'next/image'
import { Pagination } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'
import { RatingStars } from './Rating'
const TestimonialSlider = ({ spacing = 'pt-0' }) => {
  return (
    <section className={`relative pb-150 ${spacing} max-md:overflow-hidden`}>
      <div className="container relative">
        <div className="mx-auto max-w-[550px] text-center ">
          <p className="section-tagline">Testimonials</p>
          <h2>What our customer&rsquo;s say about our company</h2>
        </div>
        <div className="relative z-10">
          <div className="absolute left-1/2 top-[37%] -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
            <div className="rounded-full bg-primary-200/20  blur-[145px] max-1xl:h-[335px]  max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full  bg-primary-200/25 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full  bg-primary-200/20 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
          </div>
          <div className="absolute -top-150 left-1/2 -z-10 h-full w-full -translate-x-1/2 bg-[url('/images/hero-gradient.png')]  bg-contain bg-center bg-no-repeat p-[350px] opacity-70 md:hidden"></div>
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 45,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 45,
              },
            }}
            className="swiper !py-16 md:!px-6">
            {TestimonialData.slice(0, 5).map((testimonial) => (
              <SwiperSlide
                key={testimonial.id}
                className="swiper-slide rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200">
                <div className=" h-full rounded border border-dashed border-gray-100 p-7 dark:border-borderColor-dark ">
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
                    “Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It&rsquo;s not
                    Latin though it looks like it, and it actually says nothing.”
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
                      <h3 className="text-base font-semibold">Robert Frost</h3>
                      <p className="font-jakarta_sans text-sm  font-medium text-paragraph-light dark:text-[#A1A49D]">
                        Lead Designer
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSlider
