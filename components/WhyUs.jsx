'use client'

import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { motion } from 'framer-motion'
import possibilitiesExpenseLight from '../public/images/payment/expense.png'
import possibilitiesExpenseDark from '../public/images/payment/expense-dark.png'
import possibilitiesBaseDark from '../public/images/payment/explore-dark.png'
import possibilitiesBaseLight from '../public/images/payment/explore.png'
import possibilitiesPaymentDark from '../public/images/payment/payment-dark.png'
import possibilitiesPaymentLight from '../public/images/payment/payment.png'
import possibilitiesSummeryDark from '../public/images/payment/summery-dark.png'
import possibilitiesSummeryLight from '../public/images/payment/summery.png'
import WHyUsDark from '../public/images/payment/whyUs-bg-dark.png'
import WHyUsLight from '../public/images/payment/whyUs-bg.png'
import WHyUsImageDark from '../public/images/payment/whyUs-image-dark.png'
import WHyUsImageLight from '../public/images/payment/whyUs-image.png'
import Image from 'next/image'
import {
  fadeFromLeftAnimation,
  fadeFromLeftAnimation2,
  fadeFromLeftAnimation3,
  fadeFromRightAnimation,
  fadeUpAnimation,
} from '@/data/animation'
import useWhileInView from '@/hooks/useWhileInView'
import { useRef } from 'react'
const WhyUs = () => {
  const ref = useRef(null)
  const controlAnimation = useWhileInView(ref)
  const ref2 = useRef(null)
  const controlAnimation2 = useWhileInView(ref2)
  const ref3 = useRef(null)
  const controlAnimation3 = useWhileInView(ref3)
  const ref4 = useRef(null)
  const controlAnimation4 = useWhileInView(ref4)
  const ref5 = useRef(null)
  const controlAnimation5 = useWhileInView(ref5)
  return (
    <section className="relative overflow-x-hidden pt-[200px]">
      <div className="container relative z-10 [&>*:nth-child(odd)]:after:absolute [&>*:nth-child(odd)]:after:bottom-0 [&>*:nth-child(odd)]:after:left-1/2 [&>*:nth-child(odd)]:after:h-0.5 [&>*:nth-child(odd)]:after:w-full [&>*:nth-child(odd)]:after:-translate-x-1/2  [&>*:nth-child(odd)]:after:bg-[url('/images/payment/seperator.png')] [&>*:nth-child(odd)]:after:bg-full [&>*:nth-child(odd)]:after:bg-center [&>*:nth-child(odd)]:after:bg-no-repeat dark:[&>*:nth-child(odd)]:after:bg-[url('/images/payment/seperator-dark.png')]  [&>:nth-child(even)]:pt-25  max-md:[&>:nth-child(even)]:pt-10 lg:[&>:nth-child(even)]:pt-[200px]  [&>:nth-child(odd)]:pb-25 max-md:[&>:nth-child(odd)]:pb-0 lg:[&>:nth-child(odd)]:pb-150">
        <div className="relative grid grid-cols-2 items-end gap-25 max-md:grid-cols-1 max-md:gap-10 1xl:gap-x-24">
          <motion.div
            className="relative max-md:order-1"
            ref={ref}
            initial="initial"
            animate={controlAnimation}
            variants={fadeFromRightAnimation}>
            <Image
              src={WHyUsLight}
              alt="hero Image"
              className="inline-block w-full rounded-medium shadow-nav dark:hidden"
            />
            <Image
              src={WHyUsDark}
              alt="hero Image"
              className="hidden w-full rounded-medium shadow-nav dark:inline-block"
            />
            <div className="absolute bottom-2.5 left-1/2 mx-auto aspect-video w-[400px] -translate-x-1/2 max-lg:w-8/12">
              <Image src={WHyUsImageLight} alt="hero Image" className="inline-block rounded-t-medium  dark:hidden" />
              <Image src={WHyUsImageDark} alt="hero Image" className="hidden rounded-t-medium  dark:inline-block" />
            </div>
          </motion.div>
          <div className="relative max-md:order-2">
            <p className="section-tagline">WHY CHOOSE US</p>

            <h2 className="mb-8">
              Control the flow of
              <br />
              money easily
            </h2>
            <p className="mb-11">
              Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text nothing Before & After
              magazine.
            </p>
            <ul className="mb-14 [&>*:not(:last-child)]:mb-6 ">
              <li className="flex items-center gap-x-2 ">
                <span className=" shadow-icon  item-center relative flex justify-center gap-6 rounded-full bg-white dark:bg-dark-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <circle cx="15" cy="15" r="14" fill="" className="fill-[#E6FFB1] dark:fill-[#3B3C39]" />
                    <path
                      d="M15 0C6.75 0 0 6.75 0 15C0 23.25 6.75 30 15 30C23.25 30 30 23.25 30 15C30 6.75 23.25 0 15 0ZM16.125 1.25C20.5 1.625 24.25 4 26.5 7.5H12.375L16.125 1.25ZM18.375 8.75L22.125 15L18.375 21.25H11.5L7.875 14.75L11.625 8.75H18.375ZM14.75 1.25L7.25 13.5L3.625 7.25C6.125 3.75 10.125 1.375 14.75 1.25ZM1.25 15C1.25 12.625 1.875 10.375 2.875 8.5L10.125 21.25H2.75C1.75 19.375 1.25 17.25 1.25 15ZM13.875 28.75C9.5 28.375 5.75 26 3.5 22.5H17.625L13.875 28.75ZM15.375 28.75L23 16.25L26.75 22.375C24.25 26.125 20.125 28.625 15.375 28.75ZM19.875 8.75H27.25C28.25 10.625 28.75 12.75 28.75 15C28.75 17.125 28.25 19.25 27.375 21L19.875 8.75Z"
                      fill=""
                      className="fill-paragraph dark:fill-primary"
                    />
                  </svg>
                </span>
                <span className="dark:text-white"> It’s scalable and secure </span>
              </li>
              <li className="flex items-center gap-x-2">
                <span className=" shadow-icon  item-center relative flex justify-center rounded-full bg-white dark:bg-dark-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="30" viewBox="0 0 28 30" fill="none">
                    <path
                      d="M11 1.5C12.2 0.7 13.5 0.5 14 0.5C14.8 0.5 15.6667 0.833333 16 1C18 2.16667 22.5 4.8 24.5 6C26.5 7.2 27.3333 9.16667 27.5 10V19C27.5 21.4 26.1667 23 25.5 23.5C23.5 24.6667 19 27.3 17 28.5C15 29.7 12.8333 29.3333 12 29C9.33333 27.5 3.7 24.3 2.5 23.5C1.3 22.7 0.666667 20.5 0.5 19.5V10.5C0.5 8.9 1.83333 7.16667 2.5 6.5C4.83333 5.16667 9.8 2.3 11 1.5Z"
                      fill=""
                      className="fill-[#E6FFB1] dark:fill-[#3B3C39]"
                    />
                    <path
                      d="M25.095 5.53842L17.072 0.834716C15.1751 -0.278239 12.8189 -0.278239 10.922 0.834716L2.90499 5.53842C1.11547 6.5928 0 8.51411 0 10.5584V19.4445C0 21.4888 1.11547 23.4101 2.90499 24.4645L10.922 29.1682C11.8705 29.7247 12.9323 30 14 30C15.0677 30 16.1295 29.7188 17.078 29.1682L25.095 24.4645C26.8845 23.416 28 21.4888 28 19.4445V10.5584C27.994 8.51411 26.8845 6.5928 25.095 5.53842ZM3.55518 6.61037L11.5722 1.90667C13.0695 1.02802 14.9246 1.02802 16.4218 1.90667L24.4389 6.61037C24.9638 6.92082 25.4171 7.31914 25.775 7.78776L14 14.2839L2.219 7.79362C2.58287 7.325 3.03025 6.92082 3.55518 6.61037ZM3.55518 23.3867C2.14742 22.5608 1.27056 21.0495 1.27056 19.4445V10.5584C1.27056 9.97852 1.38389 9.41033 1.59864 8.88314L13.3617 15.3676V28.7055C12.7414 28.6235 12.1329 28.4184 11.5722 28.0904L3.55518 23.3867ZM26.7235 19.4445C26.7235 21.0495 25.8466 22.5608 24.4389 23.3867L16.4218 28.0904C15.8611 28.4184 15.2527 28.6235 14.6323 28.7055V15.3617L26.3954 8.87728C26.6101 9.40447 26.7235 9.97266 26.7235 10.5526V19.4445Z"
                      fill=""
                      className="fill-paragraph dark:fill-primary"
                    />
                  </svg>
                </span>
                <span className="dark:text-white"> Artificial Intelligence Feature </span>
              </li>
              <li className="flex items-center gap-x-2 ">
                <span className=" shadow-icon  item-center relative flex justify-center rounded-full bg-white dark:bg-dark-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="30" viewBox="0 0 28 30" fill="none">
                    <path
                      d="M9.99965 3C11.5997 1 13.333 0.5 13.9997 0.5C15.5996 0.5 16.9997 1.83333 17.4998 2.5C19.8331 5 24.8998 10.6 26.4998 13C28.0998 15.4 27.1664 17.6667 26.4998 18.5C23.9998 21.1667 18.4998 26.9 16.4998 28.5C14.4998 30.1 12.6664 29.5 11.9998 29C9.16639 26.5 3.09965 20.9 1.49965 18.5C-0.100346 16.1 0.832987 13.8333 1.49965 13C3.66632 10.5 8.39965 5 9.99965 3Z"
                      fill=""
                      className="fill-[#E6FFB1] dark:fill-[#3B3C39]"
                    />
                    <path
                      d="M0.0068501 16.2598C0.0068501 16.2656 0.0068501 16.2715 0.0068501 16.2598V16.2598ZM27.9943 16.2363C27.8869 17.5078 27.3381 18.9609 26.3897 19.957L17.335 28.6289C16.4641 29.5078 15.283 30 14.0125 30C12.742 30 11.5549 29.5078 10.6781 28.6172L1.63527 19.9805C0.674921 18.9727 0.120184 17.5195 0.0068501 16.2422C-0.0587641 14.9063 0.346851 13.5469 1.22966 12.416L10.4156 1.66406C11.3044 0.603516 12.6107 0 14.0065 0C15.4083 0 16.7146 0.609375 17.6034 1.66992L26.7536 12.3984C27.6483 13.541 28.0539 14.9004 27.9943 16.2363ZM1.28931 15.5684L8.19073 14.4434L13.0521 1.38867C12.4079 1.57617 11.8353 1.94531 11.3999 2.46094L11.3939 2.4668L2.21984 13.2012C1.67106 13.9043 1.36089 14.7305 1.28931 15.5684ZM13.3742 19.2363L8.49494 15.6621L1.35492 16.8223C1.51598 17.6484 1.91563 18.4453 2.54194 19.1074L11.5728 27.7324C12.0739 28.2363 12.6942 28.5645 13.3742 28.6934V19.2363ZM18.5876 14.7773L14.0125 2.44336L9.4195 14.7715L14.0125 18.1348L18.5876 14.7773ZM26.6522 16.8223L19.5121 15.6563L14.6507 19.2305V28.6875C15.3307 28.5586 15.9511 28.2363 16.4402 27.7383L25.489 19.0781C26.1034 18.4336 26.4911 17.6484 26.6522 16.8223ZM26.7118 15.5684C26.6343 14.7246 26.3241 13.8984 25.7634 13.1777L16.6251 2.4668C16.1897 1.94531 15.6111 1.57031 14.9669 1.38867L19.8104 14.4434L26.7118 15.5684ZM27.9943 16.2363C28.0002 16.2246 28.0002 16.2949 27.9943 16.2363V16.2363Z"
                      fill=""
                      className="fill-paragraph dark:fill-primary"
                    />
                  </svg>
                </span>

                <span className="dark:text-white"> Offline version available </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative grid grid-cols-2 items-end gap-25 max-md:grid-cols-1 1xl:gap-x-24 ">
          <div className="relative  max-md:order-1">
            <p className="section-tagline">EXPLORE POSSIBILITIES</p>

            <h2 className="mb-8">
              Manage your money <br />
              with aplio.
            </h2>
            <p className="mb-11">
              Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text nothing Before & After
              magazine.
            </p>
            <ul className="mb-14 max-w-[490px] [&>*:not(:last-child)]:mb-5">
              <li className="flex items-center gap-x-5 rounded border border-dashed border-gray-100 p-2.5 dark:border-borderColor-dark">
                <span className=" shadow-icon relative h-10 w-10 gap-6 rounded-full bg-[#F3F8E8]  dark:bg-dark-200">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-primary"
                  />
                </span>
                <span className="font-jakarta_sans font-semibold"> It’s scalable and secure </span>
              </li>
              <li className="flex items-center gap-x-5 rounded border border-dashed border-gray-100 p-2.5 dark:border-borderColor-dark">
                <span className=" shadow-icon relative h-10 w-10 gap-6 rounded-full bg-[#F3F8E8]  dark:bg-dark-200">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-primary"
                  />
                </span>
                <span className="font-jakarta_sans font-semibold"> Cash Flow Statements </span>
              </li>
            </ul>
            <Link href="/contact" className="btn">
              Get Started
            </Link>
          </div>
          <div className="relative  max-md:order-2">
            <motion.div
              className="w-full lg:h-[500px] lg:w-[420px]"
              ref={ref2}
              initial="initial"
              animate={controlAnimation2}
              variants={fadeUpAnimation}>
              <Image src={possibilitiesBaseLight} alt="explore" className="rounded-medium dark:hidden" />
              <Image src={possibilitiesBaseDark} alt="explore" className="hidden rounded-medium dark:inline-block" />
            </motion.div>
            <motion.div
              className="absolute rounded-medium max-lg:-right-12 max-lg:-top-20 max-lg:max-w-[275px] lg:-top-[170px] lg:right-0"
              ref={ref3}
              initial="initial"
              animate={controlAnimation3}
              variants={fadeFromLeftAnimation}>
              <Image src={possibilitiesSummeryLight} alt="summery" className=" dark:hidden" />
              <Image src={possibilitiesSummeryDark} alt="summery" className="hidden dark:inline-block" />
            </motion.div>
            <motion.div
              className="absolute rounded-medium max-lg:-right-12 max-lg:top-[80px] max-lg:max-w-[275px] max-xs:top-[75px] lg:right-0 lg:top-[280px]"
              ref={ref4}
              initial="initial"
              animate={controlAnimation4}
              variants={fadeFromLeftAnimation2}>
              <Image src={possibilitiesPaymentLight} alt="summery" className="dark:hidden" />
              <Image src={possibilitiesPaymentDark} alt="summery" className="hidden dark:inline-block" />
            </motion.div>
            <motion.div
              className="absolute rounded-medium max-lg:-right-12 max-lg:top-[220px] max-lg:max-w-[275px] max-xs:top-[170px] lg:right-0 lg:top-[75px]"
              ref={ref5}
              initial="initial"
              animate={controlAnimation5}
              variants={fadeFromLeftAnimation3}>
              <Image src={possibilitiesExpenseLight} alt="summery" className="dark:hidden" />
              <Image src={possibilitiesExpenseDark} alt="summery" className="hidden dark:inline-block" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
