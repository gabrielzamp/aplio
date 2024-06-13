'use client'
import Image from 'next/image'
import React from 'react'
import bannerLight from '../public/images/banking/banner.png'
import bannerDark from '../public/images/banking/banner-dark.png'
import bannerDeviceLight from '../public/images/banking/banner-device.png'
import bannerDeviceDark from '../public/images/banking/banner-device-dark.png'
import bannerShapeOneLight from '../public/images/banking/banner-shape-1.png'
import bannerShapeOneDark from '../public/images/banking/banner-shape-1-dark.png'
import bannerShapeTwoLight from '../public/images/banking/banner-shape-2.png'
import bannerShapeTwoDark from '../public/images/banking/banner-shape-2-dark.png'
import { fadeUpAnimation } from '@/data/animation'
import { motion } from 'framer-motion'
const BankingDetails = () => {
  return (
    <section className="relative">
      <div className="absolute -top-150 left-1/2 -z-10 h-[550px] w-full -translate-x-1/2  bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
      <div className="container relative ">
        <div className="absolute left-1/2 top-20 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
          <div className="rounded-full bg-primary-200/20  blur-[145px] max-1xl:h-[335px]  max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
          <div className="-ml-[170px] rounded-full  bg-primary-200/25 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
          <div className="-ml-[170px] rounded-full  bg-primary-200/20 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
        </div>

        <div className="relative mx-auto max-md:mb-20 max-md:mt-20 max-md:h-[220px] max-md:w-full md:mb-32 md:mt-25 md:max-w-[650px] lg:max-w-[750px] xl:max-w-[1020px]">
          <Image src={bannerLight} alt="about images" className="w-full dark:hidden max-md:h-full" />
          <Image src={bannerDark} alt="about images" className="hidden w-full max-md:h-full md:dark:inline-block" />
          <div className="absolute bottom-[18px] left-1/2 mx-auto w-150 -translate-x-1/2 sm:bottom-6 md:w-[250px] lg:bottom-7 lg:w-[250px] xl:bottom-[38px] xl:w-[308px] ">
            <Image src={bannerDeviceLight} alt="about images" className=" w-full dark:hidden " />
            <Image src={bannerDeviceDark} alt="about images" className="hidden w-full dark:inline-block" />
          </div>
          <motion.div
            className="absolute  -right-5 bottom-10 mx-auto aspect-auto w-150 sm:-right-15 sm:w-[250px] lg:-right-150 lg:w-[300px] xl:w-[380px]"
            initial="initial"
            animate="animate"
            variants={fadeUpAnimation}>
            <Image src={bannerShapeOneLight} alt="about images" className=" w-full dark:hidden" />
            <Image src={bannerShapeOneDark} alt="about images" className="hidden w-full dark:inline-block" />
          </motion.div>
          <motion.div
            className="absolute  -left-5 top-10 mx-auto aspect-auto w-150 sm:-left-15 sm:w-[250px] lg:-left-150 lg:w-[300px] xl:w-[380px]"
            initial="initial"
            animate="animate"
            variants={fadeUpAnimation}>
            <Image src={bannerShapeTwoLight} alt="about images" className="w-full dark:hidden" />
            <Image src={bannerShapeTwoDark} alt="about images" className="hidden w-full dark:inline-block" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BankingDetails
