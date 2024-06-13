'use client'
import NewsLetter from '@/components/NewsLetter'
import PageHero from '@/components/heros/PageHero'
import { IntegrationData } from '@/data/data'
import Image from 'next/image'
import { fadeUpAnimation } from '@/data/animation'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import useWhileInView from '@/hooks/useWhileInView'
const Integration = () => {
  const ref = useRef(null)
  const controlAnimation = useWhileInView(ref)
  return (
    <>
      <PageHero
        subtitle="INTEGRATION"
        title="Make productivity easier <br/>with 50+ integration"
        paragraph="Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin, though it looks like it"
      />
      <section className="relative pb-150">
        <div className="absolute -top-[300px] left-1/2 -z-10 h-[550px] w-full -translate-x-1/2  bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
        <div className="container ">
          <div className="relative z-10 mx-auto max-w-[850px]">
            <div className="absolute left-1/2 top-150 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
              <div className="rounded-full bg-primary-200/20  blur-[145px] max-1xl:h-[335px]  max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
              <div className="-ml-[170px] rounded-full  bg-primary-200/25 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
              <div className="-ml-[170px] rounded-full  bg-primary-200/20 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
            </div>
            <motion.div
              className=" grid grid-cols-2 gap-8 max-md:grid-cols-1"
              ref={ref}
              initial="initial"
              animate={controlAnimation}
              variants={fadeUpAnimation}>
              {IntegrationData.map((items) => (
                <div className="rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200" key={items.id}>
                  <div className="rounded border border-dashed border-gray-100 p-10 text-center dark:border-borderColor-dark ">
                    <Image
                      src={items.image}
                      alt="value image"
                      className="mb-8 inline-block h-auto w-auto"
                      width={42}
                      height={42}
                    />
                    <h3 className="mb-2.5">{items.title}</h3>
                    <p>{items.details}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <NewsLetter />
    </>
  )
}

export default Integration
