'use client'
import { fadeFromLeftAnimation, fadeFromRightAnimation, fadeUpAnimation } from '@/data/animation'
import useWhileInView from '@/hooks/useWhileInView'
import solutionImageDark from '@/public/images/solution/solution-dark.png'
import solutionImage1Dark from '@/public/images/solution/solution-shape1-dark.png'
import solutionImage1 from '@/public/images/solution/solution-shape1.png'
import solutionImage2Dark from '@/public/images/solution/solution-shape2-dark.png'
import solutionImage2 from '@/public/images/solution/solution-shape2.png'
import solutionImage3Dark from '@/public/images/solution/solution-shape3-dark.png'
import solution3Image from '@/public/images/solution/solution-shape3.png'
import solutionImage from '@/public/images/solution/solution.png'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

const Solution = () => {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const controlAnimation1 = useWhileInView(ref1)
  const controlAnimation2 = useWhileInView(ref2)
  const controlAnimation3 = useWhileInView(ref3)
  return (
    <section className="relative overflow-hidden bg-white pb-150 pt-[160px] dark:bg-dark-300 max-lg:pb-150 max-lg:pt-20 lg:pb-15">
      <div className="container ">
        <div className="grid grid-cols-2 items-center gap-10 max-md:grid-cols-1 1xl:gap-x-24">
          <div className="max-md:order-2">
            <div className="relative pt-150 lg:px-150 lg:py-150">
              <div className="relative mx-auto aspect-video w-[250px] lg:w-[300px]">
                <Image src={solutionImage} alt="vision image" className="dark:hidden" />
                <Image src={solutionImageDark} alt="vision image" className="hidden dark:inline-block" />
                <motion.div
                  ref={ref1}
                  initial="initial"
                  animate={controlAnimation1}
                  variants={fadeFromLeftAnimation}
                  className="absolute -top-[130px] bottom-auto left-10 right-auto h-[150px] w-[250px] lg:-top-[185px] lg:left-15 lg:h-[180px] lg:w-[280px] xl:h-[230px] xl:w-[320px]">
                  <Image src={solutionImage1} alt="vision image" className="w-full  dark:hidden" />
                  <Image src={solutionImage1Dark} alt="vision image" className="hidden w-full dark:inline-block" />
                </motion.div>
                <motion.div
                  ref={ref2}
                  initial="initial"
                  animate={controlAnimation2}
                  variants={fadeFromRightAnimation}
                  className="absolute bottom-auto left-auto right-12 top-12 h-[190px] w-[280px] lg:right-20 lg:h-[230px] lg:w-[320px] xl:h-[280px] xl:w-[368px]">
                  <Image src={solutionImage2} alt="vision image" className="w-full  dark:hidden" />
                  <Image src={solutionImage2Dark} alt="vision image" className="hidden w-full dark:inline-block" />
                </motion.div>
                <motion.div
                  ref={ref3}
                  initial="initial"
                  animate={controlAnimation3}
                  variants={fadeUpAnimation}
                  className="absolute -bottom-[70px] left-[175px] right-auto top-auto aspect-video w-[150px] lg:-bottom-[86px] lg:left-[200px] lg:w-[170px]">
                  <Image src={solution3Image} alt="vision image" className="w-full dark:hidden" />
                  <Image src={solutionImage3Dark} alt="vision image" className="hidden w-full dark:inline-block" />
                </motion.div>
              </div>
            </div>
          </div>
          <div className="max-md:order-1 lg:-mt-15">
            <p className="section-tagline">Strong Solutions</p>

            <h2 className="mb-8 max-lg:mb-4">Ensure strong solutions are available at all times</h2>
            <p className="mb-11 max-lg:mb-6">
              Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It&rsquo;s not Latin
              though it looks like nothing.
            </p>
            <ul className="mb-14 flex max-lg:mb-6 max-md:flex-col max-md:gap-y-5 lg:items-center lg:[&>*:not(:last-child)]:mr-10">
              <li className="relative flex items-center gap-x-2 ">
                <FontAwesomeIcon icon={faCheck} className="text-paragraph dark:text-primary" />
                <span className="font-jakarta_sans font-medium dark:text-white">On Demand Support</span>
              </li>
              <li className="relative flex items-center gap-x-2 ">
                <FontAwesomeIcon icon={faCheck} className="text-paragraph dark:text-primary" />
                <span className="font-jakarta_sans font-medium dark:text-white">Information Sharing</span>
              </li>
              <li className="relative flex items-center gap-x-2 ">
                <FontAwesomeIcon icon={faCheck} className="text-paragraph dark:text-primary" />
                <span className="font-jakarta_sans font-medium dark:text-white">Cloud Technology</span>
              </li>
            </ul>
            <Link href="/contact" className="btn-outline">
              Start Your Journey
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solution
