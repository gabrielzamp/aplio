'use client'
import { fadeUpAnimation } from '@/data/animation'
import { motion } from 'framer-motion'

const PageHero = ({ subtitle, title, paragraph }) => {
  return (
    <section className="hero relative overflow-hidden pb-[60px] pt-[240px] max-lg:pt-150">
      <div className="container">
        <motion.div
          className="mx-auto max-w-[948px] text-center"
          initial="initial"
          animate="animate"
          variants={fadeUpAnimation}>
          {subtitle && <p className="mb-4 font-medium uppercase">{subtitle}</p>}
          {title && <h1 className="mb-10 max-lg:mb-10" dangerouslySetInnerHTML={{ __html: title }}></h1>}
          {paragraph && <p className="mx-auto mb-12 max-w-[590px] max-lg:mb-10">{paragraph}</p>}
        </motion.div>
      </div>
    </section>
  )
}

export default PageHero
