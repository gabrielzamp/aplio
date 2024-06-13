'use client'
import { fadeUpAnimation } from '@/data/animation'
import { motion } from 'framer-motion'
import { ServiceData } from '@/data/data'
import Image from 'next/image'
import Link from 'next/link'
import useWhileInView from '@/hooks/useWhileInView'
import { useRef } from 'react'
const Services = ({ sectionDetails = true }) => {
  const ref = useRef(null)
  const controlAnimation = useWhileInView(ref)
  return (
    <section className="relative bg-white pb-150 dark:bg-dark-300 sm:overflow-hidden">
      <div className="absolute left-0 right-0 top-25 h-full w-full bg-[url('/images/service-bg.png')] bg-cover bg-center bg-no-repeat opacity-70  sm:hidden"></div>
      <div className="container ">
        {sectionDetails && (
          <div className="mb-12">
            <p className="section-tagline max-lg:text-center">Our Services</p>
            <div className="block max-lg:text-center lg:flex">
              <h2 className=" max-lg:mb-5">
                The world&rsquo;s best companies <br />
                trust aplio.
              </h2>
              <p className="max-w-[520px] lg:ml-auto">
                Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It&rsquo;s not
                Latin, though it looks like it
              </p>
            </div>
          </div>
        )}

        <div className="relative z-10">
          <div className="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2  -translate-y-1/2 max-sm:hidden">
            <div className="rounded-full bg-primary-200/20 blur-[145px] lg:h-[330px] lg:w-[330px] xl:h-[442px] xl:w-[442px] "></div>
            <div className="rounded-full bg-primary-200/25 blur-[145px] lg:-ml-[170px] lg:h-[330px] lg:w-[330px] xl:h-[442px] xl:w-[442px]"></div>
            <div className="lg-ml-[170px] rounded-full bg-primary-200/20 blur-[145px] lg:h-[330px] lg:w-[330px] xl:h-[442px] xl:w-[442px]"></div>
          </div>
          <motion.div
            className=" grid grid-cols-3  gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1"
            ref={ref}
            initial="initial"
            animate={controlAnimation}
            variants={fadeUpAnimation}>
            {ServiceData?.map((items) => (
              <div
                className="relative scale-100 rounded-medium bg-white p-2.5 shadow-nav transition-transform duration-500 hover:scale-105 hover:transition-transform hover:duration-500 dark:bg-dark-200"
                key={items.id}>
                <div className="h-full rounded border border-dashed border-gray-100 p-10 dark:border-borderColor-dark max-lg:p-5">
                  <Image
                    src={items.iconLight}
                    alt="service logo"
                    className="mb-6 inline-block dark:hidden"
                    width={40}
                    height={40}
                  />
                  <Image
                    src={items.iconDark}
                    alt="service logo"
                    className="mb-6 hidden dark:inline-block"
                    width={40}
                    height={40}
                  />
                  <Link href={`/services/${items.slug}`} className="block">
                    <h3 className="mb-2.5">{items.title}</h3>
                  </Link>
                  <p className="mb-6">{items.excerpt}</p>
                  <Link href={`/services/${items.slug}`} className="btn-outline btn-sm">
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services
